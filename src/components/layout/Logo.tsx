import { cn } from "@/lib/cn";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const fg = variant === "dark" ? "text-charcoal" : "text-cream";
  const accent = variant === "dark" ? "text-olive-600" : "text-olive-200";
  return (
    <span className={cn("inline-flex items-center gap-2 font-display text-xl tracking-tight", fg, className)}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <circle cx="13" cy="13" r="12" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M7 17V8.5L19 17V8.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={accent}
        />
      </svg>
      <span className="font-display font-medium text-[22px] -tracking-[0.01em]">
        Nutrex
      </span>
    </span>
  );
}
