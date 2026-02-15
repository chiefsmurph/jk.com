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
          total visits: {stats.totalVisits.toLocaleString()}
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

        {/* <Glitch
          delay={0.8}
          style={{ position: "relative", zIndex: 0 }}
          className="glitch"
        >
          <div className={styles.johnnyStage}>
            <Image
              src={"/images/johnnyanimated.webp"}
              alt="Johnny Keeys picture"
              width={400}
              height={534}
            />
            <Image
              src={"/images/johnnyanimated1-ezgif.com-speed.webp"}
              alt="Johnny Keeys picture"
              width={400}
              height={534}
            />
            
            <Image
              src={"/images/johnnyanimated.webp"}
              alt="Johnny Keeys picture"
              width={400}
              height={534}
            />
            <Image
              src={"/images/johnnyanimated1-ezgif.com-speed.webp"}
              alt="Johnny Keeys picture"
              width={400}
              height={534}
            />
            
          </div>
        </Glitch> */}
        <Glitch delay={1} className="glitch">
          Johnny Keeys
        </Glitch>
        <Glitch delay={1} className="subheader">
          <TypingText
            text="Los Angeles-based Film Actor"
            disabled={!shouldAnimate}
          />
        </Glitch>

        <Glitch
          delay={3}
          className={styles.description}
          style={{
            fontSize: "0.9rem",
            fontStyle: "italic",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "gold",
          }}
          // className="subheader"
        >
          {" "}
          A <span onDoubleClick={() => setIsAdmin((cur) => !cur)}>
            new
          </span>{" "}
          kind of screen presence — subtle, magnetic, unforgettable.
        </Glitch>

        <Glitch
          delay={4.5}
          className={styles.description}
          style={{
            fontSize: "0.9rem",
            fontStyle: "italic",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "gold",
          }}
          // className="subheader"
        >
          Contact:{" "}
          <a href="mailto:johnny@johnnykeeys.com" style={{ color: "cyan" }}>
            johnny@johnnykeeys.com
          </a>
        </Glitch>

        <Glitch
          delay={6}
          className={styles.description}
          // className="subheader"
        >
          Johnny Keeys is a Los Angeles–based actor recognized for grounded
          stillness, sharp presence, and understated charm that moves naturally
          between drama and comedy. A Berklee-trained musician turned actor, he
          brings refined timing, emotional precision, and quiet magnetism to
          character-driven storytelling.
        </Glitch>

        <Glitch
          delay={8}
          className={styles.description}
          // className="subheader"
        >
          Recent work includes Alex in <i>The Magic Box</i>, Detective Tempski
          in <i>Gas</i>, Chief Deputy Boe Dunn in <i>Bleed American</i>, and the
          affable Stoney in the upcoming feature <i>Killer Revenge</i>.
        </Glitch>
        {/* 
        <Glitch delay={10} className={styles.description}>
          Recent work includes playing Detective Tempski in a New York Film
          Academy project (Nov 2025 | Burbank, CA) and Chief Deputy Boe Dunn in
          the period short Bleed American: The Battle of Athens (June 2025 |
          Boonville, MO).
        </Glitch>

        <Glitch delay={12} className={styles.description}>
          Now based in Los Angeles, Johnny is focused on narrative film, TV, and
          character-driven shorts. He’s committed to collaborating with
          filmmakers who value subtle, expressive performances and actors who
          can shape the energy in a room without forcing it.
        </Glitch> */}

        <Glitch delay={10} className={styles["video-wrapper"]}>
          <h1>Johnny's Actor Reel (2026)</h1>
          <video controls width="100%">
            <source
              src="/videos/johnny_keeys_reel_feb_2026_web.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Glitch>

        {/* <Guestbook isAdmin={isAdmin} /> */}
      </main>
    </>
  );
}
