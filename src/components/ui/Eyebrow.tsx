import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  tone = "olive",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "olive" | "clay" | "stone";
}) {
  const tones: Record<string, string> = {
    olive: "text-olive-600",
    clay: "text-clay-600",
    stone: "text-stone",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] font-medium",
        tones[tone],
        className
      )}
    >
      <span className="block w-6 h-px bg-current opacity-60" aria-hidden />
      {children}
    </span>
  );
}
