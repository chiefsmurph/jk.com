import { buffer } from "micro";
import fs from "fs";
import path from "path";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false, // Required for Stripe signature verification
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export default async function handler(req, res) {
  const sig = req.headers["stripe-signature"]!;
  const buf = await buffer(req);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    console.log("EVENT: checkout.session.completed");
    console.log(JSON.stringify({ session }, null, 2));
    const record = {
      id: session.id,
      created: new Date(session.created * 1000).toISOString(),
      amount_total: session.amount_total,
      currency: session.currency,
      customer_email: session.customer_details?.email,
      customer_name: session.customer_details?.name,
      customer_phone: session.customer_details?.phone,
      shipping_name: session.customer_details?.name,
      payment_status: session.payment_status,
      metadata: session.metadata,
      lineItemDesc: (session.line_items[0] as Stripe.LineItem).description,
      lineItemPriceProduct: (session.line_items[0] as Stripe.LineItem).price.product,
      status: session.status,
      mode: session.mode,
    };

    const filePath = path.resolve(process.cwd(), "stripe_orders.json");
    let data: any[] = [];

    try {
      if (fs.existsSync(filePath)) {
        const file = fs.readFileSync(filePath, "utf-8");
        data = JSON.parse(file);
      }
    } catch (err) {
      console.error("Failed to read existing order file:", err);
    }

    data.push(record);

    try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Failed to write order file:", err);
    }
  }

  res.status(200).json({ received: true });
}
