import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
}) {
  const max = size === "narrow" ? "max-w-[56rem]" : size === "wide" ? "max-w-[96rem]" : "max-w-[80rem]";
  return (
    <div className={cn("w-full mx-auto px-6 sm:px-8 lg:px-12", max, className)}>
      {children}
    </div>
  );
}
