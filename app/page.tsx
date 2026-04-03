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
import SocialIcons from "./components/SocialIcons";
import YouTubeEmbed from "@/components/YouTubeEmbed";
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

        <Glitch delay={0.4} className="glitch" style={{}}>
          <Image
            src={"/images/johnny-blake-los-angeles-film-actor.png"}
            alt="Official headshot for Johnny Blake, Los Angeles film actor."
            width={380}
            height={508}
            style={{ maxWidth: "200px" }}
          />
        </Glitch>
        <Glitch
          delay={0.4}
          className="glitch"
          style={{
            letterSpacing: "2px",
            marginTop: "-23px",
            fontSize: "clamp(2rem, 12vw, 2.5rem)",
          }}
        >
          Johnny Blake
        </Glitch>
        <Glitch delay={0.5} className="subheader">
          <TypingText
            text="Los Angeles | Film Actor"
            disabled={!shouldAnimate}
          />
        </Glitch>

        {/* <Glitch
          delay={1}
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
        </Glitch> */}
        <Glitch
          delay={0.8}
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
          <SocialIcons />
        </Glitch>

        <Glitch
          delay={3.5}
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
          <a
            href="mailto:johnny@johnnyblakeactor.com"
            style={{ color: "cyan" }}
          >
            johnny@johnnyblakeactor.com
          </a>
        </Glitch>

        {`

Johnny Blake is a Los Angeles–based actor known for a grounded presence and quiet cinematic intensity.  He brings precision and restraint to roles defined by authority, intelligence, and internal conflict.

While his natural stillness and wide emotional range often lead to dramatic roles, Johnny also demonstrates strong comedic instincts, including an ability to deliver deadpan lines with sharp timing and to play eccentric or offbeat characters with authenticity.

His work includes the feature film Bleed American, where he stars as Chief Deputy Boe Dunn, along with lead roles in The Magic Box and Gas. He will next appear as the affable but layered Stoney in the upcoming feature film Killer Revenge.

Known for a positive, professional communication style, Johnny responds quickly to direction and is frequently noted for how seamlessly he integrates feedback into his performances.
`
          .trim()
          .split("\n")
          .map((paragraph, index) => (
            <Glitch
              delay={4.4 + index * 0.1}
              className={styles.description}
              key={`paragraph-${index}`}
              // className="subheader"
            >
              {paragraph}
            </Glitch>
          ))}

        <Glitch delay={5.5} className={styles["video-wrapper"]} breathe={false} style={{ float: 'left'}}>
          <Image
            src={"/images/fit me transparent.png"}
            alt="Fit shot for JB"
            width={200}
            height={333}
          />
        </Glitch>
        <Glitch delay={6} className={styles["video-wrapper"]} breathe={false}>
          <h1>Johnny's Actor Reel (2026)</h1>
          <YouTubeEmbed videoId="Ik2csbYI6Gg" />
          {/* <video controls width="100%">
            <source
              src="/videos/johnny_keeys_reel_feb_2026_web.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </Glitch>

        <Glitch delay={6.6}>
          <a
            href="/Johnny-Blake-Actor-Resume-2026.pdf"
            download="/Johnny-Blake-Actor-Resume-2026.pdf"
            className="resume-button"
          >
            Download Acting Resume (PDF)
          </a>
        </Glitch>

        {/* <Guestbook isAdmin={isAdmin} /> */}
      </main>
    </>
  );
}
