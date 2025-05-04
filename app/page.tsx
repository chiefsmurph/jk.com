"use client";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import products from "../public/products.json";

import styles from "./HomeGrid.module.css";
import "./styles.css";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const [redeemers, setRedeemers] = useState<{ name: string; fact: string }[]>(
    []
  );

  useEffect(() => {
    fetch("/api/all")
      .then((res) => res.json())
      .then((data) => setRedeemers(data));
  }, []);

  return (
    <main
      style={{
        textAlign: "center",
        padding: "3rem",
        fontFamily: "Orbitron, sans-serif",
      }}
    >
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glitch"
      >
        Modern Orange Pineapple
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ marginBottom: "2rem" }}
      >
        Escape the Ordinary—Own a Collectible Piece of Paradise. Our apparel is
        unlike any other.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        style={{ marginBottom: "2rem" }}
      >
        <Link
          href="/redeem"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            border: "2px solid #ff8c00",
            borderRadius: "8px",
            fontFamily: "Orbitron, sans-serif",
            color: "#ff8c00",
            textDecoration: "none",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#ff8c00";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#ff8c00";
          }}
        >
          Redeem a Coupon Code
        </Link>
      </motion.p>
      <section className={styles.grid}>
        {products.products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            title={p.title}
            price={p.price}
            img={p.images[0]}
          />
        ))}
      </section>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Meet Our Current Coupon Redeemers
      </motion.h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {redeemers.map((r, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <strong>{r.name}</strong>: {r.fact}
          </motion.li>
        ))}
      </ul>
    </main>
  );
}
