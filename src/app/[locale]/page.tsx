import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/hero/Hero";
import { MarqueeTicker } from "@/components/sections/MarqueeTicker";
import { MissionStrip } from "@/components/sections/MissionStrip";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { SpeciesGrid } from "@/components/sections/SpeciesGrid";
import { StatsSection } from "@/components/sections/StatsSection";
import { ContactCTA } from "@/components/sections/ContactCTA";
import type { Locale } from "@/i18n/routing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <MarqueeTicker />
      <MissionStrip />
      <ProductsGrid locale={locale} />
      <SpeciesGrid />
      <StatsSection />
      <ContactCTA />
    </>
  );
}
