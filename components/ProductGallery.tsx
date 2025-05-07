'use client';
import { useState } from 'react';
import styles from './ProductGallery.module.css';

export default function ProductGallery({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  const canGoLeft = index > 0;
  const canGoRight = index < images.length - 1;

  const scrollLeft = () => setIndex((i) => Math.max(i - 1, 0));
  const scrollRight = () => setIndex((i) => Math.min(i + 1, images.length - 1));

  return (
    <div className={styles.galleryWrapper}>
      <button className={styles.arrow} onClick={scrollLeft} disabled={!canGoLeft}>
        ←
      </button>
      <div className={styles.track}>
        <div
          className={styles.trackInner}
          style={{ transform: `translateX(-${index * 66.66}%)` }} // show 1.5 items
        >
          {images.map((src, i) => (
            <img key={i} src={src} className={styles.image} />
          ))}
        </div>
      </div>
      <button className={styles.arrow} onClick={scrollRight} disabled={!canGoRight}>
        →
      </button>
    </div>
  );
}