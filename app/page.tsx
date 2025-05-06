"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import products, { getProductImages } from "../public/products";

import styles from "./HomeGrid.module.css";
import "./styles.css";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
  const [isCouponHovered, setIsCouponHovered] = useState(false);
  const [isHoveredBtn2, setIsHoveredBtn2] = useState(false);
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
    <main className={styles.main}>
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
        <img src="/images/final bunny 180px.png" />
        Modern Orange Pineapple
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 0.8 }}
        className="subheader"
      >
        Escape the Ordinary—Own a Collectible Piece of Paradise. <br />
        <br />
        Our apparel is unlike any other. We have partnered with some of the
        world's finest teams to deliver to you designs you will not find
        anywhere else with the highest quality and standards.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 1.4 }}
        style={{ marginBottom: "2rem" }}
        className="button-container"
      >
        <Link
          href="/redeem"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            border: "2px solid #ff8c00",
            borderRadius: "8px",
            fontFamily: "Orbitron, sans-serif",
            color: isCouponHovered ? "white" : "#fff", // white text always visible
            backgroundColor: isCouponHovered
              ? "#ff8c00"
              : "linear-gradient(to bottom, #ff8c00aa, #ff8c0055)", // soft warm gradient
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: isCouponHovered ? "0 4px 12px rgba(0,0,0,0.25)" : "none",
            transition: "all 0.3s ease",
            marginRight: "1rem", 
          }}
          onMouseEnter={() => setIsCouponHovered(true)}
          onMouseLeave={() => setIsCouponHovered(false)}
        >
          Redeem a Coupon Code
        </Link>
        <a
          href="https://www.instagram.com/modernorangepineapple"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            border: "2px solid #E1306C",
            borderRadius: "8px",
            fontFamily: "Orbitron, sans-serif",
            color: isHoveredBtn2 ? "white" : "#E1306C",
            backgroundColor: isHoveredBtn2
              ? "#E1306C"
              : "rgba(225, 48, 108, 0.1)", // base color subtle
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: isHoveredBtn2
              ? "0 4px 12px rgba(0, 0, 0, 0.25)"
              : "none",
            transition: "all 0.3s ease",
            textShadow: isHoveredBtn2 ? "0 0 8px #fff" : "none",
          }}
          onMouseEnter={() => setIsHoveredBtn2(true)}
          onMouseLeave={() => setIsHoveredBtn2(false)}
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
            <ProductCard key={p.id} product={p} />
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
