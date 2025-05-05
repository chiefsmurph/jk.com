"use client";

import { useEffect, useState } from "react";
import styles from "./ProductClientView.module.css";
import {
  getTotalPrice,
  getProductImages,
  type Product,
} from "@/public/products";
import Link from "next/link";
import StripeButton from "./StripeButton";
import ProductPageBackground from "./ProductPageBackground";

export type Options = { color?: string; size?: string };

export default function ProductClientView({
  product,
  defaultImages,
}: {
  product: Product;
  defaultImages: string[];
}) {
  const [options, setOptions] = useState<Options>({});

  const missing = Object.entries(product.options).filter(
    ([key]) => !options[key as keyof typeof options]
  );

  const handleSelect =
    (key: "color" | "size") => (e: React.ChangeEvent<HTMLSelectElement>) =>
      setOptions((prev) => ({ ...prev, [key]: e.target.value }));

  const selectedImages = options.color
    ? getProductImages(product, options.color)
    : defaultImages;

  useEffect(() => {
    document.title = `${product.title} | Modern Orange Pineapple`;
  }, [product.title]);
  return (
    <div className={styles.container}>
      <Link
        href="/"
        className={styles.home}
        onClick={() => sessionStorage.setItem("fromClientNav", "true")}
      >
        ← Home
      </Link>

      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.price}>${getTotalPrice(product)}</p>
      <p
        className={styles.desc}
        dangerouslySetInnerHTML={{
          __html: product.description.split("\n").join("<br/>"),
        }}
      />
      <p className={styles.shipping}>
        Shipping: $
        {product.freeShippingMode ? "0.00 (free)" : product.shipping.cost / 100}{" "}
        — Estimated: {product.shipping.estDelivery} business days
      </p>

      <div className={styles.purchaseForm}>
        {Object.entries(product.options).map(([key, values]) => (
          <label key={key} className={styles.label}>
            {key.charAt(0).toUpperCase() + key.slice(1)}&nbsp;&nbsp;
            <select
              value={options[key as "color" | "size"] ?? ""}
              onChange={handleSelect(key as "color" | "size")}
              className={styles.select}
            >
              <option value="">Select {key}</option>
              {values.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </label>
        ))}

        <StripeButton
        product={product}
          disabled={missing.length > 0}
          options={options}
        />
      </div>

      <div className={styles.gallery}>
        {selectedImages.map((src) => (
          <img key={src} src={src} alt="" className={styles.img} />
        ))}
      </div>

      <ProductPageBackground src={selectedImages[0]} side="left" />
      <ProductPageBackground src={selectedImages[1]} side="right" />
    </div>
  );
}
