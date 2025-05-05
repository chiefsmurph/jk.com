"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import products, {
  getFreeShippingPrice,
  getProductImages,
} from "../public/products";

import styles from "./HomeGrid.module.css";
import "./styles.css";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import APP_SETTINGS from "@/settings";

export default function HomePage() {
  const [shouldAnimate, setShouldAnimate] = useState<boolean | undefined>(
    undefined
  );
  console.log({ shouldAnimate });

  useEffect(() => {
    const fromClientNav = sessionStorage.getItem("fromClientNav");
    console.log({ fromClientNav });
    if (fromClientNav) {
      setShouldAnimate(false);
      requestAnimationFrame(() => sessionStorage.removeItem("fromClientNav"));
    } else {
      setShouldAnimate(true);
    }
  }, []);
  if (shouldAnimate === undefined) return null; // or show loader if desired
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
        <img src="/images/final bunny 180px.png"/>
        Modern Orange Pineapple
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 0.8 }}
        style={{ margin: "0 10vw 2rem" }}
      >
        Escape the Ordinary—Own a Collectible Piece of Paradise. <br/><br/>
        Our apparel is unlike any other.  All prices include FREE SHIPPING.  We have partnered with some of the world's finest teams to deliver to you designs you will not find anywhere else with the highest quality and standards.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 1.4 }}
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
        &nbsp;&nbsp;
        <a
          href="https://www.instagram.com/modernorangepineapple"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            border: "2px solid #E1306C",
            borderRadius: "8px",
            color: "#E1306C",
            textDecoration: "none",
            fontFamily: "Orbitron, sans-serif",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E1306C";
            e.currentTarget.style.color = "white";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#E1306C";
          }}
        >
          Follow us on Instagram
        </a>
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 2 }}
      >
        <section className={styles.grid}>
          {products.products.map((p) => (
            <ProductCard
              key={p.id}
              id={p.id}
              title={p.title}
              price={APP_SETTINGS.freeShippingModeEnabled ? getFreeShippingPrice(p) : p.price}
              img={getProductImages(p)[0]}
            />
          ))}
        </section>
      </motion.h2>
      {/* <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 3 }}
      >
        Meet Our Current Coupon Redeemers
      </motion.h2> */}
      {/* <ul style={{ listStyle: "none", padding: 0 }}>
        {redeemers.map((r, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldAnimate && 0.5 + i * 0.1 }}
          >
            <strong>{r.name}</strong>: {r.fact}
          </motion.li>
        ))}
      </ul> */}
    </main>
  );
}
