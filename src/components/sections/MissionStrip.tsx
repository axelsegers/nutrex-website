import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export async function MissionStrip() {
  const t = await getTranslations("Mission");
  const items = (t.raw("items") as Array<{ kicker: string; title: string; body: string }>);

  return (
    <section id="mission" className="relative bg-cream py-24 sm:py-32 grain">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Headline column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>{t("label")}</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.015em] text-charcoal">
              {t("title").split(",").map((chunk, i, arr) => (
                <span key={i} className="block">
                  {chunk.trim()}
                  {i < arr.length - 1 && <span className="text-clay-500">,</span>}
                </span>
              ))}
            </h2>
          </div>

          {/* Items column */}
          <ol className="lg:col-span-7 space-y-12">
            {items.map((item) => (
              <li key={item.kicker} className="grid grid-cols-[auto_1fr] gap-6 sm:gap-10">
                <div className="font-mono text-[13px] tracking-[0.2em] text-clay-500 pt-1">
                  {item.kicker}
                </div>
                <div>
                  <h3 className="font-display text-[24px] sm:text-[28px] leading-tight tracking-tight text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[52ch] text-[16px] leading-relaxed text-stone">
                    {item.body}
                  </p>
                  <div className="mt-7 divider-rule" />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
