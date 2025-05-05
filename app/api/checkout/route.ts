import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import products, {
  getFreeShippingPrice,
  getProductImages,
} from "../../../public/products";
import APP_SETTINGS from "@/settings";
import { p } from "framer-motion/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const origin = "https://modernorangepineapple.com";

export async function POST(req: NextRequest) {
  const { productId, ...options } = await req.json();
  const product = products.products.find((p) => p.id === productId);
  if (!product)
    return NextResponse.json({ error: "invalid product" }, { status: 400 });

  const descriptionParts: string[] = [];
  if (options.color) descriptionParts.push(`Color: ${options.color}`);
  if (options.size) descriptionParts.push(`Size: ${options.size}`);
  const description = descriptionParts.join(", ");

  // Build absolute image URL
  const imageUrl = `${origin}${getProductImages(product, options["color"])[0]}`;

  const [min, max] = product.shipping.estDelivery.split("-").map(Number);
  const sessionParams: Stripe.Checkout.SessionCreateParams = {
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.title,
            description,
            images: [imageUrl],
            metadata: {
              productId,
              ...options,
            },
          },
          unit_amount:
            (APP_SETTINGS.freeShippingModeEnabled
              ? getFreeShippingPrice(product)
              : product.price) * 100,
        },
        quantity: 1,
      },
    ],
    shipping_address_collection: {
      allowed_countries: [
        "US",
        "CA",
        "GB",
        "AU",
        "NZ",
        "DE",
        "FR",
        "NL",
        "SE",
        "NO",
      ],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: APP_SETTINGS.freeShippingModeEnabled ? 0 : product.shipping.cost,
            currency: "usd",
          },
          display_name: product.shipping.name,
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: min,
            },
            maximum: {
              unit: "business_day",
              value: max,
            },
          },
        },
      },
    ],
    success_url: `${origin}/${product.id}?status=success`,
    cancel_url: `${origin}/${product.id}?status=cancel`,
  };

  console.log(JSON.stringify(sessionParams, null, 2));

  const session = await stripe.checkout.sessions.create(sessionParams);

  return NextResponse.json({ url: session.url });
}
