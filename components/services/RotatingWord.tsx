"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  words: string[];
  /** Milliseconds between rotations. Default 2200. */
  interval?: number;
  className?: string;
};

export function RotatingWord({ words, interval = 2200, className = "" }: Props) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (words.length <= 1) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span className="relative inline-flex align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block ${className}`}
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}