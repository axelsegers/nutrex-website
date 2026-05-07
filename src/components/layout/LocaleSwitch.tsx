"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LocaleSwitch({ tone = "light" }: { tone?: "light" | "dark" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const onChange = (next: (typeof routing.locales)[number]) => {
    if (next === locale) return;
    router.replace(
      { pathname, params } as never,
      { locale: next }
    );
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-px rounded-full p-[3px] font-mono text-[11px] tracking-[0.14em]",
        tone === "light"
          ? "bg-charcoal/[0.06] ring-1 ring-charcoal/10"
          : "bg-cream/10 ring-1 ring-cream/15"
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => onChange(l)}
          className={cn(
            "px-3 py-1 rounded-full uppercase transition-colors",
            l === locale
              ? tone === "light"
                ? "bg-charcoal text-cream"
                : "bg-cream text-charcoal"
              : tone === "light"
                ? "text-charcoal/60 hover:text-charcoal"
                : "text-cream/60 hover:text-cream"
          )}
          aria-pressed={l === locale}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
