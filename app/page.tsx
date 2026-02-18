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
              alt="Johnny Blake picture"
              width={400}
              height={534}
            />
            <Image
              src={"/images/johnnyanimated1-ezgif.com-speed.webp"}
              alt="Johnny Blake picture"
              width={400}
              height={534}
            />
            
            <Image
              src={"/images/johnnyanimated.webp"}
              alt="Johnny Blake picture"
              width={400}
              height={534}
            />
            <Image
              src={"/images/johnnyanimated1-ezgif.com-speed.webp"}
              alt="Johnny Blake picture"
              width={400}
              height={534}
            />
            
          </div>
        </Glitch> */}
        <Glitch delay={1} className="glitch">
          Johnny Blake
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
          <a href="mailto:johnny@johnnyblakeactor.com" style={{ color: "cyan" }}>
            johnny@johnnyblakeactor.com
          </a>
        </Glitch>
        {`

        Johnny Blake is a Los Angeles-based actor defined by a grounded stillness and a presence that suggests an innate awareness of the layers beneath the surface. Known for a "thousand-yard" gaze and an unshakeable cinematic weight, Johnny brings a rare, lived-in clarity to his work—the look of a man who has processed the signal within the noise and emerged with a centered, magnetic restraint.

A Berklee-trained musician, Johnny translates the rhythmic textures of avant-garde sound into his acting, bringing an atmospheric "reverb" to the screen. His style is a nod to the grit of Old Hollywood—a return to the era of the quiet, capable American lead who doesn't need to shout to be heard. It is a presence rooted in "American Steel": principled, resilient, and focused, yet possessed of a "psychedelic" depth that feels both grounded and ethereal.

Johnny moves effortlessly between the gritty and the cerebral, specializing in characters who carry a "secret" and an unbothered confidence. Whether in the midst of a high-stakes drama or a sharp-witted comedy, his performance is anchored by a "knowing" smirk that suggests he is always one step ahead of the room.

Recent work includes his lead performance as Chief Deputy Boe Dunn in the gritty drama Bleed American, his role as Alex in the cerebral project The Magic Box, and Detective Tempski in Gas. He can next be seen in a featured role as the layered, affable Stoney in the upcoming feature film Killer Revenge.
`
          .split("\n")
          .map((paragraph, index) => (
            <Glitch
              delay={3 + index * 0.3}
              className={styles.description}
              // className="subheader"
            >
              {paragraph}
            </Glitch>
          ))}

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
