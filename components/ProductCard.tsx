"use client";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import {
  getDisplayPrice,
  getProductImages,
  Product,
} from "@/public/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { id, title, freeShippingMode } = product;
  const displayPrice = getDisplayPrice(product);
  const img = getProductImages(product)[0];
  return (
    <Link href={`/${id}`} className={styles.card}>
      <img src={img} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>${displayPrice}</p>
      {freeShippingMode && <p className={styles.freeShipping}>FREE SHIPPING</p>}
    </Link>
  );
}
