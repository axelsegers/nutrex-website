import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export async function StatsSection() {
  const t = await getTranslations("Stats");
  const items = t.raw("items") as Array<{ value: string; label: string; note: string }>;

  return (
    <section className="relative bg-cream py-24 sm:py-32 grain">
      <Container>
        <div className="max-w-[44ch]">
          <Eyebrow>{t("label")}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.015em] text-charcoal">
            {t("title")}
          </h2>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={it.label} className="relative pl-6">
              <span className="absolute left-0 top-2 font-mono text-[10px] uppercase tracking-[0.18em] text-clay-500">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <div className="font-display text-[clamp(3rem,7vw,5rem)] font-medium leading-none tracking-[-0.03em] text-charcoal">
                {it.value}
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-charcoal">
                {it.label}
              </div>
              <p className="mt-3 max-w-[28ch] text-[14px] leading-relaxed text-stone">
                {it.note}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
