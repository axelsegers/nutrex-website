import { marqueeTokens } from "@/content/marquee";

export function MarqueeTicker() {
  // duplicate so animation can loop seamlessly (-50% translate)
  const tokens = [...marqueeTokens, ...marqueeTokens];

  return (
    <div className="relative border-y border-charcoal/10 bg-paper grain overflow-hidden">
      <div className="flex">
        <div className="marquee-track flex shrink-0 items-center gap-12 whitespace-nowrap py-4">
          {tokens.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-12 font-mono text-[12px] uppercase tracking-[0.2em] text-charcoal/70"
            >
              {t}
              <span className="text-clay-500" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
