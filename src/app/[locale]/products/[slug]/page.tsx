import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { LinkButton, Arrow } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { products, getProduct, type ProductId } from "@/content/products";
import { routing, type Locale } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ProductId }>;
}) {
  const { locale, slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const c = p.copy[locale];
  return { title: `${c.name} — ${c.tagline}`, description: c.intro };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: ProductId }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const product = getProduct(slug);
  if (!product) notFound();
  const t = await getTranslations("Product");
  const copy = product.copy[locale];
  const others = products.filter((p) => p.id !== product.id);

  return (
    <>
      {/* HERO — magazine style, asymmetric */}
      <section className="relative bg-cream pt-12 pb-20 sm:pt-16 sm:pb-28 grain">
        <Container>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-charcoal/70 hover:text-charcoal"
          >
            <span aria-hidden>←</span> {t("back")}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Eyebrow tone="clay" className="!text-clay-600">
                {copy.category}
              </Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.025em] text-charcoal">
                {product.brand}
              </h1>
              <p className="mt-6 max-w-[28ch] font-display text-[clamp(1.5rem,2.6vw,2.2rem)] font-medium leading-[1.15] tracking-[-0.01em] text-charcoal/80">
                {copy.tagline}
              </p>
            </div>

            <div className="lg:col-span-5 lg:pt-12">
              <p className="text-[17px] leading-[1.7] text-stone">{copy.intro}</p>
              <div className="mt-7 flex items-center gap-4">
                <span
                  className="block h-1 w-16 rounded-full"
                  style={{ backgroundColor: product.hexAccent }}
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">
                  TDS available on request
                </span>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mt-16 aspect-[16/7] overflow-hidden rounded-2xl ring-1 ring-charcoal/10">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/2"
              style={{
                background: `linear-gradient(to top, ${product.hex}D9, transparent)`,
              }}
              aria-hidden
            />
            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 max-w-[28rem]">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/80">
                01 / 03 — Frame
              </p>
              <p className="mt-2 font-display text-[24px] font-medium text-cream">
                {product.brand}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* APPLICATIONS + BENEFITS — magazine spread */}
      <section className="relative bg-paper py-24 sm:py-32 grain">
        <Container>
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>{t("applicationsTitle")}</Eyebrow>
              <ul className="mt-8 divide-y divide-charcoal/15">
                {copy.applications.map((a, i) => (
                  <li
                    key={a}
                    className="flex items-baseline gap-5 py-4"
                  >
                    <span className="font-mono text-[11px] tracking-[0.18em] text-clay-500 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[20px] leading-tight text-charcoal">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-8">
              <Eyebrow tone="clay">{t("benefitsTitle")}</Eyebrow>
              <ol className="mt-8 space-y-10">
                {copy.benefits.map((b, i) => (
                  <li key={b.title} className="grid grid-cols-[auto_1fr] gap-6">
                    <span className="font-mono text-[12px] tracking-[0.2em] text-clay-500 pt-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[26px] sm:text-[30px] font-medium leading-tight tracking-tight text-charcoal">
                        {b.title}
                      </h3>
                      <p className="mt-3 max-w-[60ch] text-[16px] leading-relaxed text-stone">
                        {b.body}
                      </p>
                      <div className="mt-7 divider-rule" />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* MODE OF ACTION — pull-quote style */}
      <section className="relative bg-cream py-24 sm:py-32 grain">
        <Container size="narrow">
          <Eyebrow>{t("modeTitle")}</Eyebrow>
          <blockquote className="mt-8">
            <p className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.25] tracking-[-0.01em] text-charcoal">
              <span
                className="font-display-italic"
                style={{ color: product.hexAccent }}
              >
                “
              </span>
              {copy.mode}
              <span
                className="font-display-italic"
                style={{ color: product.hexAccent }}
              >
                ”
              </span>
            </p>
          </blockquote>
        </Container>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="relative bg-paper py-20 sm:py-24">
        <Container>
          <Eyebrow tone="clay">— Continue exploring</Eyebrow>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((p) => {
              const c = p.copy[locale];
              return (
                <Link
                  // @ts-expect-error - next-intl typed routes
                  href={`/products/${p.id}`}
                  key={p.id}
                  className="group relative flex items-center justify-between gap-6 rounded-xl bg-cream p-6 ring-1 ring-charcoal/8 transition-all hover:ring-charcoal/20"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg"
                      style={{ backgroundColor: p.hex }}
                    >
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="64px"
                        className="object-cover opacity-80 mix-blend-luminosity"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                        {c.category}
                      </p>
                      <p className="mt-1 font-display text-[22px] font-medium leading-tight text-charcoal">
                        {p.brand}
                      </p>
                    </div>
                  </div>
                  <span className="text-stone transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
