import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const ICONS: Record<string, React.ReactNode> = {
  poultry: <PoultryIcon />,
  pluimvee: <PoultryIcon />,
  swine: <SwineIcon />,
  varkens: <SwineIcon />,
  ruminants: <RuminantIcon />,
  herkauwers: <RuminantIcon />,
  aquaculture: <AquaIcon />,
  aquacultuur: <AquaIcon />,
};

export async function SpeciesGrid() {
  const t = await getTranslations("Species");
  const items = t.raw("items") as Array<{ name: string; tag: string }>;

  return (
    <section id="species" className="relative bg-olive-900 text-cream py-24 sm:py-32 overflow-hidden">
      {/* Decorative serif glyph */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-10 select-none font-display text-[clamp(20rem,40vw,40rem)] leading-none text-cream/[0.04]"
      >
        N
      </div>

      <Container>
        <div className="max-w-[44ch]">
          <Eyebrow tone="clay">{t("label")}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.015em] text-cream">
            {t("title")}
          </h2>
        </div>

        <div className="mt-16 grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-4 ring-1 ring-cream/10 rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item.name}
              className="group relative flex flex-col gap-8 bg-olive-900 p-8 transition-colors hover:bg-olive-700 sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="text-cream/90 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3">
                  {ICONS[item.name.toLowerCase()] ?? <PoultryIcon />}
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="font-display text-[26px] font-medium leading-tight tracking-tight text-cream">
                  {item.name}
                </h3>
                <p className="mt-2 text-[13px] text-cream/60">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PoultryIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
      <path d="M14 28c0-7 4-12 10-12 4 0 7 2 7 6 0 3-2 5-5 5-2 0-3-1-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="27" cy="20" r="1.4" fill="currentColor"/>
      <path d="M30 18l4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 28v4M18 28v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function SwineIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
      <path d="M9 23c0-5 5-9 12-9s12 4 12 9-5 8-12 8-12-3-12-8z" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="29" cy="21" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="28" cy="21" r="0.7" fill="currentColor"/>
      <circle cx="30" cy="21" r="0.7" fill="currentColor"/>
      <path d="M14 31v3M19 31v3M25 31v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14 17l-2-3M14 18c-1-1-2-1-3-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function RuminantIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
      <path d="M14 14c-2-3-1-7 1-7s2 3 1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M28 14c2-3 1-7-1-7s-2 3-1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <ellipse cx="21" cy="22" rx="10" ry="9" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="20" r="0.8" fill="currentColor"/>
      <circle cx="24" cy="20" r="0.8" fill="currentColor"/>
      <path d="M21 25v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function AquaIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden>
      <path d="M6 21c4-6 12-9 19-9 4 0 8 1 11 4-2 6-8 12-15 12-7 0-13-3-15-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M30 18l5-3v10l-5-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="13" cy="20" r="0.9" fill="currentColor"/>
      <path d="M18 24c2 1 4 1 6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
