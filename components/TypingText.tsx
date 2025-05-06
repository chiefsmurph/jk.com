import { useEffect, useState } from "react";

export const TypingText = ({
  text,
  speed = 70,
  disabled,
}: {
  text: string;
  speed?: number;
  disabled?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState(disabled ? text : "");
  const [completed, setCompleted] = useState(false);
  useEffect(() => {
    let index = 0;
    let interval;
    let timeout;
    if (disabled) return;
    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        if (index === text.length) {
          clearInterval(interval);
          setCompleted(true);
        }
      }, speed);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {displayedText}
      {!completed && <span className="cursor">|</span>}
    </>
  );
};
