"use client";
import { motion } from "framer-motion";
// import Link from "next/link";

import styles from "./App.module.css";
import "./styles.css";
import { TypingText } from "@/components/TypingText";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Glitch } from "@/components/Glitch";
// import { TypingText } from "@/components/TypingText";

export default function HomePage() {
  const shouldAnimate = true;
  const [stats, setStats] = useState<any>({});
  const [showInflatedStats, setShowInflatedStats] = useState<boolean>(false);
  useEffect(() => {
    const VISIT_KEY = "last_visit_timestamp";
    const FIVE_MINUTES = 5 * 60 * 1000;
    const now = Date.now();
    const lastVisit = parseInt(localStorage.getItem(VISIT_KEY) || "0", 10);

    const shouldPost = isNaN(lastVisit) || now - lastVisit > FIVE_MINUTES;

    const method = shouldPost ? "POST" : "GET";

    fetch("/api/visit", { method })
      .then((res) => res.json())
      .then(setStats);

    if (shouldPost) {
      localStorage.setItem(VISIT_KEY, now.toString());
    }
  }, []);

  const [johnnyPic, setJohnnyPic] = useState(
    "/images/me cool transparent PXL_20250516_230136376.png"
  );

  useEffect(() => {
    const images = [
      "/images/me cool transparent PXL_20250516_230136376.png",
      "/images/chill suit.png",
    ];
    const randomIndex = Math.round(Math.random() * 1);
    setJohnnyPic(images[randomIndex]);
  }, []);
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: shouldAnimate && 5 }}
        className="stats"
      >
        <u>
          sta
          <span onDoubleClick={() => setShowInflatedStats((cur) => !cur)}>
            t
          </span>
          s
        </u>
        <br />
        total visits:{" "}
        {(
          stats.totalVisits + Number(showInflatedStats && 392)
        ).toLocaleString()}
        <br />
        unique visitors:{" "}
        {(
          stats.uniqueVisitors + Number(showInflatedStats && 338)
        ).toLocaleString()}
      </motion.h1>
      <main className={styles.main}>
        {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head> */}

        <Glitch delay={0.8}>
          <Image
            src={johnnyPic}
            alt="Johnny Keeys picture"
            width={240}
            height={300}
          />
        </Glitch>
        <Glitch delay={1.3} className="glitch">
          Johnny Keeys
        </Glitch>
        <Glitch delay={2} className="subheader">
          <TypingText text="Actor · Musician" disabled={!shouldAnimate} />
        </Glitch>

        <br />

        <Glitch
          delay={4}
          className={styles.description}
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "gold",
          }}
          // className="subheader"
        >
          Hollywood is thirsting for a new type of movie star… and Timothée
          Chalamet isn’t cutting it.
        </Glitch>

        <br />

        <Glitch
          delay={6}
          className={styles.description}
          // className="subheader"
        >
          Dynamic, screen-tested performer with leading-role experience in TV
          and film, including national exposure on CBS. Trained at Berklee, I’ve
          streamed to thousands, performed live, and deliver a raw presence and
          unmistakable energy to every role. Based in L.A. and willing to
          relocate for the right project.
        </Glitch>
        <br />
        <Glitch
          delay={8}
          className={styles.description}
          // className="subheader"
        >
          I recently wrapped my first lead role as Boe Dunn in Bleed American:
          The Battle of Athens, a WWII-era action docudrama from Stonegait
          Pictures, in which Boe evolves from cocky and corrupt to
          vulnerable—demonstrating my ability to embody complex character arcs
          and deliver magnetic screen presence.
        </Glitch>
      </main>
    </>
  );
}
