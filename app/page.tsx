"use client";
import { motion } from "framer-motion";
// import Link from "next/link";

import styles from "./App.module.css";
import "./styles.css";
import { TypingText } from "@/components/TypingText";
import Image from "next/image";
// import { TypingText } from "@/components/TypingText";

export default function HomePage() {
  const shouldAnimate = true;
  return (
    <main className={styles.main}>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: shouldAnimate && 0.8 }}
        className="glitch"
      >
        <Image
          src="/images/baker park 2.png"
          alt="Johnny Keeys picture"
          width={300}
          height={300}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: shouldAnimate && 1 }}
        className="glitch"
      >
        Johnny Keeys
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 2 }}
        className="subheader"
      >
        <TypingText text="Actor · Model · Musician" disabled={!shouldAnimate} />
      </motion.p>

      <br />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldAnimate && 5 }}
        className={styles.description}
        // className="subheader"
      >
        Dynamic, screen-tested performer with leading-role experience in TV &
        film. Trained at Berklee, I bring raw presence, musicality, and an
        unmistakable energy to every role.
      </motion.p>
    </main>
  );
}
