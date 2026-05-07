import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton, Arrow } from "@/components/ui/Button";

export async function ContactCTA() {
  const t = await getTranslations("Contact");

  return (
    <section className="relative bg-clay-500 text-cream py-24 sm:py-32 overflow-hidden">
      {/* Decorative serif glyph */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-12 select-none font-display italic text-[clamp(20rem,42vw,42rem)] leading-none text-cream/[0.08]"
      >
        ex
      </div>

      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Eyebrow tone="stone" className="!text-cream/70">
              {t("label")}
            </Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-medium leading-[1.02] tracking-[-0.015em] text-cream">
              {t("title")}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-[17px] leading-[1.55] text-cream/85">
              {t("body")}
            </p>
            <div className="mt-8">
              <LinkButton href="/contact" variant="secondary" className="!bg-cream !text-charcoal hover:!bg-cream/90">
                {t("cta")}
                <Arrow />
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
