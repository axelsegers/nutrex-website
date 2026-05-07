"use client";

import { motion } from "motion/react";

export function HeroHeadline({
  start,
  em,
  end,
}: {
  start: string;
  em: string;
  end: string;
}) {
  // Two visual lines:
  //   Line 1: <start> <em-italic-olive>
  //   Line 2: <end>
  return (
    <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.02em] text-charcoal">
      <Line delay={0.1}>
        {start}{" "}
        <em className="font-display-italic text-olive-600 not-italic [font-style:italic]">
          {em}
        </em>
      </Line>
      <Line delay={0.28}>{end}</Line>
    </h1>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: 0.95,
          delay,
          ease: [0.22, 0.61, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
