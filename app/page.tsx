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

type SocialLink = {
  iconUrl: string;
  linkUrl: string;
  label: string;
  subtext: string;
};

export const socialLinks: SocialLink[] = [
  {
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg",
    linkUrl: "https://instagram.com/johnnyblakeactor",
    label: "Instagram",
    subtext: "@johnnyblakeactor",
  },
  {
    iconUrl:
      "https://actorsaccess.com/global/assets/images/logos/logo_actors_access_plus_by_breakdown_services_left.svg", // use local upload (recommended)
    linkUrl: "https://resumes.actorsaccess.com/johnny-blake",
    label: "Actors Access",
    subtext: "/johnny-blake",
  },
  {
    iconUrl:
      "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODQ4IDM1Ni41NCI+PHRpdGxlPkJhY2tzdGFnZV9Xb3JkbWFya19CbGFja19SR0I8L3RpdGxlPjxwYXRoIGQ9Ik02OS4yOCwyMDYuNDV2OTUuNDhIOTAuMTdjMzIuNjcsMCw0MS43OC0xNy4xLDQxLjc4LTQ3LjQ3LDAtMjkuNzktOS4xMS00OC00MS43OC00OFptMC01Mi40M0g4OGMzMi4xMywwLDM5LjY0LTE3LjY3LDM5LjY0LTQ0LjE2UzEyMC4xNiw2NC4wNSw4OCw2NC4wNUg2OS4yOFpNOTYuNiwzNTcuMTNINVY5LjQxSDk1YzcwLjE3LDAsOTQuMjcsMzcuNTQsOTQuMjcsOTIuMTcsMCw0Mi41LTIzLDcwLjY1LTU2LjI0LDc2LjcyLDQwLjE4LDcuNzMsNjIuNjgsMzYuNDMsNjIuNjgsODIuNzksMCw2MC43MS0yOS40Nyw5Ni05OS4xLDk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cGF0aCBkPSJNMjkxLDIyOS42M2g0OC4yMUwzMTYuNzQsMTA0LjloLTIuMTVaTTM1Ni45MSw5LjQxbDcxLjc4LDM0Ny43MkgzNjIuMjdsLTEzLjkzLTc1LjA3aC02N2wtMTMuOTIsNzUuMDdIMjA2LjRMMjc4LjE3LDkuNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cGF0aCBkPSJNNTA2LjE0LDI0MC4xMmMwLDQwLjI5LDUuMzUsNjUuNjgsMzAuNTMsNjUuNjgsMjUuNzEsMCwzMC0yNS4zOSwzMC02NS42OFYyMDguNjZoNjQuODJWMjIzYzAsODMuMzQtMjMsMTM4LjUzLTkzLjIxLDEzOC41My03Mi44NSwwLTEwMC43LTU0LjY0LTEwMC43LTE1My40NFYxNTguNDNDNDM3LjU4LDU5LjY0LDQ2NS40Myw1LDUzOC4yOCw1YzcwLjE3LDAsOTMuMjEsNTUuMTksOTMuMjEsMTM4LjUzdjE0LjM1SDU2Ni42N1YxMjYuNDJjMC00MC4yOS00LjI5LTY1LjY4LTMwLTY1LjY4LTI1LjE4LDAtMzAuNTMsMjUuMzktMzAuNTMsNjUuNjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cG9seWdvbiBwb2ludHM9Ijc4OC4wOCAzNTIuMTMgNzQ1Ljc2IDIxOC41NyA3MjUuOTUgMjY5Ljg5IDcyNS45NSAzNTIuMTMgNjU5LjUzIDM1Mi4xMyA2NTkuNTMgNC40MiA3MjUuOTUgNC40MiA3MjUuOTUgMTY5Ljk5IDc4OC4wOCA0LjQyIDg1Ni42NSA0LjQyIDc5NS41OCAxNTYuMTkgODU3LjcyIDM1Mi4xMyA3ODguMDggMzUyLjEzIi8+PHBhdGggZD0iTTkyNywyMzcuMzZ2MjFjMCwyOS44LDExLjc4LDQ4LjU3LDM0LjI4LDQ4LjU3LDIwLjM1LDAsMzAuNTMtMTMuOCwzMC41My0zNywwLTI0LjgzLTEyLjg1LTMzLjY2LTMzLjIxLTQ3LjQ2bC0yNy44NS0xOC4yMmMtMzIuNjgtMjEtNjEuNi00NC43LTYxLjYtMTAyLjY2UzkwNCw1LDk1OC4wNSw1YzU4LjM5LDAsODkuNDUsMzYuNDIsODkuNDUsMTAzLjIxdjE5Ljg3SDk4OS4xMVYxMDcuNjZjMC0zMS40Ni05LjY0LTQ4LTMxLjA2LTQ4LTE4Ljc1LDAtMjcuODYsMTQuOS0yNy44NiwzNy41MywwLDIzLjE4LDEwLjE4LDM0Ljc3LDI3LjMyLDQ1LjgxTDk4OCwxNjIuODVjMzkuMSwyMy43Myw2NS4zNSw0OCw2NS4zNSwxMDEuNTUsMCw2Mi4zNy0zNi40Miw5Ny4xNC05Mi4xMyw5Ny4xNC01Ni43OCwwLTkzLjItMzQuNzctOTMuMi0xMDQuMzFWMjM3LjM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUgLTUpIi8+PHBvbHlnb24gcG9pbnRzPSIxMTE4Ljk0IDM1Mi4xMyAxMTE4Ljk0IDYwLjcxIDEwNTUuNzMgNjAuNzEgMTA1NS43MyA0LjQyIDEyNTAuMTcgNC40MiAxMjUwLjE3IDYwLjcxIDExODUuMzYgNjAuNzEgMTE4NS4zNiAzNTIuMTMgMTExOC45NCAzNTIuMTMiLz48cGF0aCBkPSJNMTMxOC45MSwyMjkuNjNoNDguMmwtMjIuNS0xMjQuNzNoLTIuMTRaTTEzODQuNzksOS40MWw3MS43OCwzNDcuNzJoLTY2LjQzbC0xMy45Mi03NS4wN2gtNjdsLTEzLjkzLDc1LjA3aC02MS4wNkwxMzA2LjA1LDkuNDFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cGF0aCBkPSJNMTYxNC42NSwzNTcuMTMsMTYwOS4yOSwzMjRjLTcuNSwyNS4zOS0zMS4wNywzNy41My01Ni43OCwzNy41My02My4yMSwwLTg5LjQ1LTU0LjY0LTg5LjQ1LTE1My40NFYxNTguNDNDMTQ2My4wNiw1OS42NCwxNDkyLDUsMTU2My4yMiw1YzcwLjcxLDAsOTUuMzUsNDkuNjcsOTUuMzUsMTMzdjcuNzNoLTY0LjgxVjEyNi40MmMwLTQwLjI5LTQuODMtNjUuNjgtMzAuNTQtNjUuNjhzLTMxLjYsMjUuMzktMzEuNiw2NS42OHYxMTJjMCw0MC44NSw3LjUsNjYuMjMsMzIuNjcsNjYuMjNzMzIuMTUtMjUuMzgsMzIuMTUtNjYuMjN2LTYuNjJoLTI3Ljg2VjE4MGg5MC41MlYzNTcuMTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNSAtNSkiLz48cG9seWdvbiBwb2ludHM9IjE2ODkuOTkgNC40MiAxNjg5Ljk5IDM1Mi4xMyAxODQ4IDM1Mi4xMyAxODQ4IDI5NS44MyAxNzU0LjggMjk1LjgzIDE3NTQuOCAyMDIuNTUgMTgyMy45IDIwMi41NSAxODIzLjkgMTQ2LjI2IDE3NTQuOCAxNDYuMjYgMTc1NC44IDYwLjcxIDE4NDYuOTMgNjAuNzEgMTg0Ni45MyA0LjQyIDE2ODkuOTkgNC40MiIvPjwvc3ZnPg==", // use local upload (recommended)
    linkUrl: "https://www.backstage.com/u/johnnyblakeactor/",
    label: "Backstage",
    subtext: "/u/johnnyblakeactor/",
  },
];

function SocialIcons() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        gap: "16px",
        flexWrap: "wrap", // key: allows wrap instead of overflow
        padding: "0 16px", // keeps left item reachable
        maxWidth: "100%",
        overflow: "hidden", // prevents the horizontal scroll trap
      }}
    >
      {socialLinks.map((item, index) => (
        <Glitch
          delay={0.6 + index * 0.4}
          className="glitch"
          key={`sociallink-${index}`}
        >
          <a
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
              color: "#00eaff",

              // responsive sizing:
              flex: "1 1 220px", // grows, shrinks, wraps at ~220px
              maxWidth: "320px", // stops it from getting huge on wide screens
              minWidth: "200px",

              // optional: keep it from looking cramped
              padding: "10px 12px",
              borderRadius: "12px",
            }}
          >
            {item.iconUrl && (
              <img
                src={item.iconUrl}
                alt={item.label}
                width={44}
                height={44}
                style={{
                  display: "block",
                  background: "rgba(255, 255, 255, 0.8)", // you were missing the closing )
                  borderRadius: "8px",
                  flexShrink: 0, // prevents icon squishing
                  filter:
                    "drop-shadow(0 0 6px #00eaff) drop-shadow(0 0 12px #00eaff)",
                }}
              />
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.05,
                minWidth: 0, // allows text to wrap instead of forcing overflow
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  whiteSpace: "nowrap",
                }}
              >
                {item.label.toUpperCase()}
              </span>

              <span
                style={{
                  fontSize: "10px",
                  opacity: 0.6,
                  letterSpacing: "0.5px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                title={item.subtext}
              >
                {item.subtext}
              </span>
            </div>
          </a>
        </Glitch>
      ))}
    </div>
  );
}

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
        <Glitch delay={0.4} className="glitch">
          Johnny Blake
        </Glitch>
        <Glitch delay={0.5} className="subheader">
          <TypingText
            text="Los Angeles-based Film Actor"
            disabled={!shouldAnimate}
          />
        </Glitch>

        <Glitch
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
        </Glitch>
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

        Johnny Blake is a Los Angeles-based actor defined by a grounded stillness and a presence that suggests an innate awareness of the layers beneath the surface. Known for a "thousand-yard" gaze and an unshakeable cinematic weight, Johnny brings a rare, lived-in clarity to his work—the look of a man who has processed the signal within the noise and emerged with a centered, magnetic restraint.

A Berklee-trained musician, Johnny translates the rhythmic textures of avant-garde sound into his acting, bringing an atmospheric "reverb" to the screen. His style is a nod to the grit of Old Hollywood—a return to the era of the quiet, capable American lead who doesn't need to shout to be heard. It is a presence rooted in "American Steel": principled, resilient, and focused, yet possessed of a "psychedelic" depth that feels both grounded and ethereal.

Johnny moves effortlessly between the gritty and the cerebral, specializing in characters who carry a "secret" and an unbothered confidence. Whether in the midst of a high-stakes drama or a sharp-witted comedy, his performance is anchored by a "knowing" smirk that suggests he is always one step ahead of the room.

Recent work includes his lead performance as Chief Deputy Boe Dunn in the gritty drama Bleed American, his role as Alex in the cerebral project The Magic Box, and Detective Tempski in Gas. He can next be seen in a featured role as the layered, affable Stoney in the upcoming feature film Killer Revenge.
`
          .split("\n")
          .map((paragraph, index) => (
            <Glitch
              delay={4.4 + index * 0.1}
              className={styles.description}
              // className="subheader"
            >
              {paragraph}
            </Glitch>
          ))}

        <Glitch delay={6} className={styles["video-wrapper"]}>
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
