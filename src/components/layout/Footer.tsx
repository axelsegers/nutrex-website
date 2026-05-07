import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { products } from "@/content/products";

export async function Footer() {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  return (
    <footer className="bg-olive-900 text-cream">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-12">
          <div className="sm:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-[24rem] text-[15px] leading-relaxed text-cream/70">
              {t("tagline")}
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/50">
              {t("address")}
            </p>
          </div>

          <div className="sm:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/50 mb-4">
              {t("columns.products")}
            </p>
            <ul className="space-y-3">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/products/${p.id}` as never}
                    className="text-[14px] text-cream/85 hover:text-cream transition-colors"
                  >
                    {p.brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/50 mb-4">
              {t("columns.company")}
            </p>
            <ul className="space-y-3 text-[14px] text-cream/85">
              <li><Link href="/products" className="hover:text-cream">{tNav("products")}</Link></li>
              <li><Link href="/contact" className="hover:text-cream">{tNav("contact")}</Link></li>
            </ul>
          </div>

          <div className="sm:col-span-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/50 mb-4">
              {t("columns.support")}
            </p>
            <ul className="space-y-3 text-[14px] text-cream/85">
              <li><a href="mailto:info@nutrex.eu" className="hover:text-cream">info@nutrex.eu</a></li>
              <li><a href="tel:+3214861700" className="hover:text-cream">+32 14 86 17 00</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/50">
            {t("rights", { year: new Date().getFullYear() })}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/40">
            European Specialty Feed Additives
          </p>
        </div>
      </div>
    </footer>
  );
}
