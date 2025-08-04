"use client";
import { motion } from "framer-motion";
// import Link from "next/link";

import "./styles.css";
import { TypingText } from "@/components/TypingText";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Glitch } from "@/components/Glitch";
import Guestbook from "./components/Guestbook";
import styles from "./App.module.css";
// import { TypingText } from "@/components/TypingText";

export default function HomePage() {
  const shouldAnimate = true;
  const [stats, setStats] = useState<any>({});
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
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
      {isAdmin && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="stats"
        >
          <u>stats</u>
          <br />
          total visits: {stats.totalVisits.toLocaleString()}
          <br />
          unique visitors: {stats.uniqueVisitors.toLocaleString()}
        </motion.div>
      )}
      <main className={styles.main}>
        {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head> */}

        <Glitch
          delay={0.8}
          style={{ position: "relative", zIndex: 200 }}
          className="glitch"
        >
          <Image
            src={johnnyPic}
            alt="Johnny Keeys picture"
            width={240}
            height={300}
          />
        </Glitch>
        <Glitch delay={1.8} className="glitch">
          Johnny Keeys
        </Glitch>
        <Glitch delay={3} className="subheader">
          <TypingText text="Actor · Musician" disabled={!shouldAnimate} />
        </Glitch>

        <br />

        <Glitch
          delay={4.5}
          className={styles.description}
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "gold",
          }}
          // className="subheader"
        >
          <span onDoubleClick={() => setIsAdmin((cur) => !cur)}>Hollywood</span>{" "}
          is thirsting for a new type of movie star… and Timothée Chalamet isn’t
          cutting it.
        </Glitch>

        <br />

        <Glitch
          delay={6}
          className={styles.description}
          // className="subheader"
        >
          Dynamic, screen-tested performer with leading-role experience in TV
          and film, including national exposure on CBS. Trained at Berklee
          College of Music, I’ve streamed to thousands, performed live, and
          deliver a raw presence and unmistakable energy to every role. Based in
          L.A. and willing to relocate for the right project.
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

        <Glitch delay={10} className={styles.description}>
          <b>One of my strongest assets? I elevate the room.</b>
          <br />
          <br /> I’ve got sharp taste, know when to lead, and don’t need to be
          the loudest or the lead to raise the level of everyone around me.
          Directors feel it. Castmates feel it. The audience sees it.
        </Glitch>
        {/* <Glitch delay={10} className={styles["video-wrapper"]}>
          <h1>Johnny's Actor Reel (7/25)</h1>
          <video controls width="100%">
            <source
              src="/videos/johnny-keeys-reel-07-25-compressed.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Glitch> */}

        <Guestbook isAdmin={isAdmin} />
      </main>
    </>
  );
}
