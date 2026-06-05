"use client";
import { motion } from "framer-motion";

type Props = {
  words: string[];
  direction?: "up" | "down";
  /** Seconds for one full loop. Default 45. */
  duration?: number;
  className?: string;
};

/**
 * Vertical scrolling marquee of large display-serif words.
 * Used as kinetic typography backdrop for the About hero.
 * Sits absolutely positioned inside a parent with overflow-hidden.
 */
export function VerticalWordMarquee({
  words,
  direction = "up",
  duration = 45,
  className = "",
}: Props) {
  // Duplicate the array so the loop is seamless when animated -50% / +50%.
  const items = [...words, ...words];
  const yRange = direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className={`relative h-full overflow-hidden ${className}`}>
      <motion.div
        animate={{ y: yRange }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
        className="flex flex-col items-center gap-10 py-8"
      >
        {items.map((word, i) => (
          <span
            key={i}
            aria-hidden="true"
            className="select-none whitespace-nowrap font-display text-5xl font-light italic leading-none text-emerald-400/[0.09] md:text-6xl lg:text-7xl"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
}