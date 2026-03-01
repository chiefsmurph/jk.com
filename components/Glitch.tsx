"use client";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export function Glitch({
  delay,
  className,
  children,
  style
}: {
  delay: number;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!shouldRender) return null; // No whitespace until ready

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      // THE FIX: Only add the CSS class AFTER the fade-in is finished
      onAnimationComplete={() => setIsAnimationDone(true)}
      className={`${className} ${isAnimationDone ? "animate-breath" : ""}`}
      style={{ 
        ...style,
        willChange: "opacity, transform"
      }}
    >
      {children}
    </motion.div>
  );
}