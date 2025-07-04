"use client";
import { useEffect, useRef, useState } from "react";

export const TypingText = ({
  text,
  speed = 70,
  disabled,
}: {
  text: string;
  speed?: number;
  disabled?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [completed, setCompleted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayedText(disabled ? text : "");
    setCompleted(disabled);

    if (disabled) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      return;
    }

    indexRef.current = 0;

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        const nextChar = text.charAt(indexRef.current);
        setDisplayedText((prev) => prev + nextChar);
        indexRef.current++;

        if (indexRef.current >= text.length) {
          clearInterval(intervalRef.current!);
          setCompleted(true);
        }
      }, speed);
    }, 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, disabled]);

  return (
    <>
      {displayedText}
      {!completed && <span className="cursor">|</span>}
    </>
  );
};
