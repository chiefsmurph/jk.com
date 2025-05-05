"use client";
import { useState } from "react";
import styles from "./StripeButton.module.css";
import { Options } from "./ProductClientView";
import { getTotalPrice, Product } from "@/public/products";

export default function StripeButton({
  product,
  disabled,
  options,
}: {
  product: Product;
  disabled: boolean;
  options: Options;
}) {
  const { id: productId, title } = product;
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    setLoading(true);

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "begin_checkout", {
        currency: "USD",
        value: getTotalPrice(product),
        items: [
          {
            item_id: productId,
            item_name: title,
            ...options,
          },
        ],
      });
    }
    const r = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId, ...options }),
    });
    const { url } = await r.json();
    window.location.href = url;
  };

  return (
    <button
      onClick={checkout}
      disabled={loading || disabled}
      className={styles.buy}
    >
      {loading ? "Redirecting…" : "Buy with Stripe"}
    </button>
  );
}
