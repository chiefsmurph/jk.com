import { useEffect, useState } from "react";

export const TypingText = ({
  text,
  speed = 60,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setCompleted(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <>
      {displayedText}
      {!completed && <span className="cursor">|</span>}
    </>
  );
};
