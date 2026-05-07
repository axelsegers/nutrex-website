import { getTranslations } from "next-intl/server";
import { HeroImage } from "./HeroImage";
import { HeroHeadline } from "./HeroHeadline";
import { CountUpStat } from "./CountUpStat";
import { LinkButton, Arrow } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=2000&q=85";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      className="relative grain bg-cream"
      aria-label="Nutrex — Where science meets the farm"
    >
      <div className="grid min-h-[92svh] grid-cols-1 lg:grid-cols-12">
        {/* Left — image (5/12) */}
        <div className="relative h-[58vh] min-h-[420px] lg:col-span-7 lg:h-auto">
          <HeroImage
            src={HERO_IMAGE}
            alt="European farmland at first light"
            trial={t("trial")}
            metric1={t("trialMetric1")}
            metric2={t("trialMetric2")}
            stamp={t("stamp")}
          />
        </div>

        {/* Right — content (7/12) */}
        <div className="relative flex flex-col justify-between lg:col-span-5">
          {/* Hairline + corner mark */}
          <div className="absolute inset-0 hidden lg:block">
            <div className="absolute left-0 top-0 h-full w-px bg-charcoal/8" />
            <div className="absolute left-[-3px] top-6 h-1.5 w-1.5 rounded-full bg-clay-500" />
          </div>

          <div className="px-6 pt-12 sm:px-10 lg:px-14 lg:pt-20 xl:px-20">
            <Eyebrow>{t("eyebrow")}</Eyebrow>

            <div className="mt-7">
              <HeroHeadline
                start={t("titleStart")}
                em={t("titleEm")}
                end={t("titleEnd")}
              />
            </div>

            <p className="mt-7 max-w-[34ch] text-[17px] leading-[1.55] text-stone sm:text-[18px]">
              {t("sub")}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <LinkButton href="/products" variant="primary">
                {t("primaryCta")}
                <Arrow />
              </LinkButton>
              <LinkButton href="/contact" variant="ghost">
                {t("secondaryCta")}
              </LinkButton>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-14 px-6 pb-10 sm:px-10 lg:px-14 lg:pb-14 xl:px-20">
            <div className="divider-rule mb-7" />
            <div className="grid grid-cols-3 gap-6">
              <CountUpStat value="35+" label="Years" />
              <CountUpStat value="50+" label="Countries" />
              <CountUpStat value="3" label="Product lines" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
