import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { products } from "@/content/products";
import type { Locale } from "@/i18n/routing";

export async function ProductsGrid({ locale }: { locale: Locale }) {
  const t = await getTranslations("Products");

  return (
    <section className="relative bg-paper py-24 sm:py-32 grain">
      <Container>
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
          <div className="max-w-[40ch]">
            <Eyebrow tone="clay">{t("label")}</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-medium leading-[1.04] tracking-[-0.015em] text-charcoal">
              {t("title")}
            </h2>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-charcoal hover:text-clay-600"
          >
            {t("viewAll")}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {products.map((p, i) => {
            const copy = p.copy[locale];
            return (
              <Link
                href={`/products/${p.id}` as never}
                key={p.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-cream ring-1 ring-charcoal/8 transition-all duration-500 hover:ring-charcoal/20 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-paper-deep">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
                  <div
                    className="absolute left-5 top-5 h-1 w-12 origin-left rounded-full transition-transform duration-700 group-hover:scale-x-150"
                    style={{ backgroundColor: p.hexAccent }}
                    aria-hidden
                  />
                  <div className="absolute left-5 bottom-5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/90">
                    {String(i + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                  </div>
                  <div className="absolute right-5 bottom-5 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/80">
                    {copy.category}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col justify-between gap-6 p-6 sm:p-7">
                  <div>
                    <h3 className="font-display text-[28px] font-medium leading-none tracking-tight text-charcoal">
                      {p.brand}
                    </h3>
                    <p className="mt-3 text-[15px] leading-snug text-stone">
                      {copy.tagline}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-charcoal/60 group-hover:text-charcoal">
                      {t("viewProduct")}
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-full bg-charcoal text-cream transition-all duration-500 group-hover:rotate-[-45deg]"
                      style={{ backgroundColor: p.hex }}
                      aria-hidden
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
