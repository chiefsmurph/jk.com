"use client";
import { useState } from "react";
import styles from "./StripeButton.module.css";

export default function StripeButton({ productId }: { productId: string }) {
  const [loading, setLoading] = useState(false);

  const checkout = async () => {
    setLoading(true);
    const r = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    const { url } = await r.json();
    window.location.href = url;
  };

  return (
    <button
      onClick={checkout}
      disabled={loading}
      className={styles.buy}
    >
      {loading ? "Redirecting…" : "Buy with Stripe"}
    </button>
  );
}

