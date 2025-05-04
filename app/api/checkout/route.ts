import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import products from "../../../public/products.json";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const { productId } = await req.json();
  const product = products.products.find((p) => p.id === productId);
  if (!product) return NextResponse.json({ error: "invalid product" }, { status: 400 });

  // Build absolute image URL
  const imageUrl = `${req.nextUrl.origin}${product.images[0]}`;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: product.title, images: [imageUrl] },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      },
    ],
    success_url: `${req.nextUrl.origin}/${product.id}?status=success`,
    cancel_url: `${req.nextUrl.origin}/${product.id}?status=cancel`,
  });

  return NextResponse.json({ url: session.url });
}