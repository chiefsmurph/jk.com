"use client";

import { useEffect, useState } from "react";
import styles from "./ProductClientView.module.css";
import {
  getTotalPrice,
  getProductImages,
  type Product,
} from "@/public/products";
import Link from "next/link";
import ProductPageBackground from "./ProductPageBackground";
import PurchaseForm from "./PurchaseForm";

export type Options = { color?: string; size?: string };

export default function ProductClientView({
  product,
  defaultImages,
}: {
  product: Product;
  defaultImages: string[];
}) {
  const [options, setOptions] = useState<Options>({});

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

      <PurchaseForm
        product={product}
        options={options}
        setOptions={setOptions}
      />

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
