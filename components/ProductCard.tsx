"use client";
import Link from "next/link";
import styles from "./ProductCard.module.css";

type Props = {
  id: string;
  title: string;
  price: number;
  img: string;
};

export default function ProductCard({ id, title, price, img }: Props) {
  return (
    <Link href={`/${id}`} className={styles.card}>
      <img src={img} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.price}>${price}</p>
    </Link>
  );
}
