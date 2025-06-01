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
import { TypingText } from "@/components/TypingText";

export default function HomePage() {
  const [isCouponHovered, setIsCouponHovered] = useState(false);
  const [isHoveredBtn2, setIsHoveredBtn2] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState<boolean | undefined>(
    undefined
  );

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
  useEffect(() => {
    if (shouldAnimate === false) {
      document.body.classList.remove("loading");
    } else {
      document.body.classList.add("loading");
      const timeout = setTimeout(() => {
        document.body.classList.remove("loading");
      }, 10000); // however long your max animation takes
      return () => clearTimeout(timeout);
    }
  }, [shouldAnimate]);
  if (shouldAnimate === undefined) return null; // or show loader if desired
  return (
    <main className={styles.main}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: shouldAnimate && 5 }}
        className="stats"
      >
        <u>stats</u>
        <br />
        total orders: 1<br />
        coupon codes redeemed: 0
      </motion.h1> */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: shouldAnimate && 0.8 }}
        className="glitch"
      >
        {/* <img src="/images/final bunny 180px.png" /> */}
       mopclothing.com
        <hr />
        <i>Modern Orange Pineapple</i>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 2.5 }}
        className="subheader"
      >
        <TypingText
          text="Escape the Ordinary—Own a Collectible Piece of Paradise."
          disabled={!shouldAnimate}
        />
      </motion.p>

      <br />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 6 }}
        className="subheader"
      >
        <p>
          {" "}
          Modern Orange Pineapple is an apparel brand born from a love of art —
          and a frustration with how hard it is to find clothing that’s both
          interesting and made from natural materials. We highlight when items
          aren't 100% cotton or organic, because we think that should be clear.
        </p>
        <p>
          It started with a painted star. Then came a smoking alpaca. Then a
          pelican — who later (sometimes) wears a beanie. Each piece is a
          creative swing at making fashion feel artistic, cool, and quietly bold
          — without being childish or overdone.
        </p>
        <p>
          Who knows what’s next? One thing’s for sure: it’s going to put a smile
          on your face — and very possibly have strangers stopping to say “I
          love your shirt” or giving you a thumbs up as they pass.
        </p>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 8 }}
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

      <section className={styles.grid}>
        {products.products.map((p, index) => (
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldAnimate && 10 + index * 1 }}
          >
            <ProductCard key={p.id} product={p} />
          </motion.h2>
        ))}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: shouldAnimate && 10 + products.products.length }}
        >
          {" "}
          <div className="product-card featured-store">
            <a
              href="https://www.google.com/maps?q=Under the Sea Gallery, 833 b, 725 Embarcadero, Morro Bay, CA 93442"
              target="_blank"
              rel="noopener noreferrer"
            >
              <video
                src="/videos/underthesea.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  borderRadius: "12px",
                  margin: "auto",
                  display: "block",
                }}
              />
              <p className="store-caption">
                <b>
                  Premium Pelican In Clouds
                  <br />
                  Morro Bay Edition
                </b>
                <br />
                <br />
                Now available at{" "}
                <strong>Harborwalk Convenience / Under The Sea Gallery</strong>
                <br />
                in Morro Bay, California – tap for directions&nbsp;
                <a
                  href="https://undertheseagallery.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  or here specifically to go to their website
                </a>
              </p>
            </a>
          </div>
        </motion.h2>
      </section>

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
