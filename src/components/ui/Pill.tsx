import { cn } from "@/lib/cn";

export function Pill({
  children,
  className,
  tone = "default",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "olive" | "clay" | "dark";
}) {
  const tones: Record<string, string> = {
    default: "bg-cream/80 text-charcoal ring-1 ring-charcoal/10 backdrop-blur",
    olive: "bg-olive-600 text-cream",
    clay: "bg-clay-500 text-cream",
    dark: "bg-charcoal text-cream",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
