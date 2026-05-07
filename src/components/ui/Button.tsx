import { cn } from "@/lib/cn";
import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";
import type { Route } from "next";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center gap-2 rounded-full font-medium text-[14px] tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,0.61,0.36,1)] group";

const styles: Record<Variant, string> = {
  primary:
    "bg-charcoal text-cream px-5 py-3 hover:bg-clay-500 hover:px-6 hover:gap-3",
  secondary:
    "bg-cream text-charcoal px-5 py-3 ring-1 ring-charcoal/15 hover:ring-charcoal hover:bg-paper",
  ghost:
    "text-charcoal px-1 py-1 underline underline-offset-[6px] decoration-charcoal/30 hover:decoration-charcoal hover:decoration-2",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: { variant?: Variant; className?: string; children: React.ReactNode } & ComponentProps<"button">) {
  return (
    <button className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function LinkButton<Path extends string>({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: Route<Path> | string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href as never} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={cn(
        "transition-transform duration-300 group-hover:translate-x-1",
        className
      )}
      aria-hidden
    >
      <path
        d="M2 7H12M12 7L8 3M12 7L8 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
