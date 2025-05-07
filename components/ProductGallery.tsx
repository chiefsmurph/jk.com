"use client";
import { useEffect, useState } from "react";
import styles from "./ProductGallery.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function ProductGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const canGoLeft = index > 0;
  const canGoRight = index < images.length - 1;

  const scrollLeft = () => setIndex((i) => Math.max(i - 1, 0));
  const scrollRight = () => setIndex((i) => Math.min(i + 1, images.length - 1));
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.5,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 24,
        },
      },
    },
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // or a placeholder div
  return (
    <div className={styles.sliderWrapper}>
      <div ref={sliderRef} className="keen-slider">
        {images.map((src, i) => (
          <div key={i} className="keen-slider__slide">
            <img src={src} alt={`Product ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
