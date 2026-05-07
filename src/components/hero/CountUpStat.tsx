"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef } from "react";

export function CountUpStat({ value, label }: { value: string; label: string }) {
  // Parse "35+", "50+", "2", "100%", etc. into a number + suffix.
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();

  const mv = useMotionValue(reduce ? target : 0);
  const display = useTransform(mv, (v) =>
    Number.isInteger(target) ? Math.round(v).toString() : v.toFixed(1)
  );

  useEffect(() => {
    if (!inView || reduce) {
      mv.set(target);
      return;
    }
    const controls = animate(mv, target, {
      duration: 1.1,
      ease: [0.22, 0.61, 0.36, 1],
    });
    return controls.stop;
  }, [inView, target, mv, reduce]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <div className="flex items-baseline gap-px font-display text-[28px] font-semibold leading-none tracking-tight text-charcoal sm:text-[32px]">
        <DisplayNumber value={display} />
        <span className="text-clay-500">{suffix}</span>
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-stone">
        {label}
      </div>
    </div>
  );
}

function DisplayNumber({ value }: { value: import("motion/react").MotionValue<string> }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    return value.on("change", (v) => {
      if (ref.current) ref.current.textContent = v;
    });
  }, [value]);
  return <span ref={ref}>{value.get()}</span>;
}
