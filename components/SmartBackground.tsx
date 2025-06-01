// components/SmartBackground.tsx
"use client";

import { useEffect, useState } from "react";

export default function SmartBackground() {
  const [canPlayVideo, setCanPlayVideo] = useState(false);

  useEffect(() => {
    async function estimateConnectionSpeed() {
      const image = new Image();
      const startTime = performance.now();
      const fileSizeInBytes = 244000; // 50KB test image

      image.src = `/icon0.svg?cacheBust=${Math.random()}`;

      return new Promise((resolve) => {
        image.onload = () => {
          const duration = (performance.now() - startTime) / 1000;
          const bitsLoaded = fileSizeInBytes * 8;
          const speedBps = bitsLoaded / duration;
          const speedMbps = speedBps / 1024 / 1024;
          resolve(speedMbps);
        };
        image.onerror = () => resolve(0);
      });
    }

    estimateConnectionSpeed().then((speed) => {
      console.log({ speed });
      if (typeof speed === "number" && speed > 2) {
        setCanPlayVideo(true);
      }
    });
  }, []);

  return canPlayVideo ? (
    <video
      className="underwaterVideo"
      autoPlay
      muted
      loop
      playsInline
      src={`/videos/2632737-hd_1920_1080_24fps.mp4?${new Date().toLocaleDateString()}`}
    />
  ) : null;
}
