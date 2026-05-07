import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { ContactCTA } from "@/components/sections/ContactCTA";
import type { Locale } from "@/i18n/routing";

export default async function ProductsListingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Products");

  return (
    <>
      <section className="relative bg-cream pt-20 pb-8 sm:pt-28 grain">
        <Container>
          <Eyebrow tone="clay">{t("label")}</Eyebrow>
          <h1 className="mt-6 max-w-[20ch] font-display text-[clamp(3rem,7vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.025em] text-charcoal">
            {t("title")}
          </h1>
        </Container>
      </section>
      <ProductsGrid locale={locale} />
      <ContactCTA />
    </>
  );
}
