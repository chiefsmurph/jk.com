import { PropsWithChildren, useEffect, useState } from "react";
import styles from "./ProductClientView.module.css";
export default function ProductPageBackground({
  side,
  src,
}: {
  side: "left" | "right";
  src: string;
}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 50); // delay to trigger transition
    return () => clearTimeout(timeout);
  }, []);

  return (
    <img
      className={
        styles["product-page-background"] +
        " " +
        styles["background-ghost"] +
        " " +
        (loaded ? styles["loaded"] : "") +
        " " +
        styles["bg-" + side]
      }
      src={src}
    />
  );
}
