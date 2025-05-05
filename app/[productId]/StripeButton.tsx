"use client";
import { useState } from "react";
import styles from "./StripeButton.module.css";
import products from "../../public/products";
import { Options } from "./page";

export default function StripeButton({
  productId,
  disabled,
  options,
}: {
  productId: string;
  disabled: boolean;
  options: Options;
}) {
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    setLoading(true);
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
