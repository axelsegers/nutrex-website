"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Pill } from "@/components/ui/Pill";

export function HeroImage({
  src,
  alt,
  trial,
  metric1,
  metric2,
  stamp,
}: {
  src: string;
  alt: string;
  trial: string;
  metric1: string;
  metric2: string;
  stamp: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden bg-olive-900">
      {/* Parallax + Ken Burns image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="ken-burns absolute inset-0 [transform-origin:55%_45%]">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Vignette + scientific scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/15 via-transparent to-charcoal/40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-r from-transparent to-cream lg:block" />

      {/* Decorative crosshair grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08] mix-blend-overlay"
      >
        <defs>
          <pattern id="grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Top-left: Live trial data overlay */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute left-6 top-6 sm:left-8 sm:top-8"
      >
        <div className="flex flex-col gap-3 rounded-lg bg-cream/95 px-4 py-3 backdrop-blur-md ring-1 ring-charcoal/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-charcoal">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-clay-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-clay-500" />
            </span>
            {trial}
          </div>
          <div className="flex items-center gap-4">
            <Metric label={metric1} />
            <span className="h-6 w-px bg-charcoal/20" />
            <Metric label={metric2} />
          </div>
        </div>
      </motion.div>

      {/* Bottom-left: Made in Europe stamp */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8"
      >
        <Pill tone="default" className="!bg-cream/90 backdrop-blur-md !text-charcoal">
          <Star /> {stamp}
        </Pill>
      </motion.div>

      {/* Bottom-right: file ref watermark */}
      <div className="pointer-events-none absolute bottom-6 right-6 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-cream/70 sm:block">
        N° 248 — Frame 02 / 04
      </div>
    </div>
  );
}

function Metric({ label }: { label: string }) {
  // Split "FCR -4.2%" into label and value where value starts at the first '+', '-', or digit.
  const match = label.match(/^([^\d+\-]+)\s*(.+)$/);
  const head = match?.[1]?.trim() ?? label;
  const tail = match?.[2] ?? "";
  return (
    <div className="leading-tight">
      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone">
        {head}
      </div>
      <div className="font-display text-[18px] font-semibold text-olive-700">
        {tail}
      </div>
    </div>
  );
}

function Star() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden>
      <path d="M5 0L6.18 3.82L10 5L6.18 6.18L5 10L3.82 6.18L0 5L3.82 3.82L5 0Z" />
    </svg>
  );
}
