"use client";
import { motion, MotionProps } from "framer-motion";
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
} & MotionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShouldRender(true);
    }, delay * 1000);
  }, []);

  return shouldRender ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  ) : null;
}
