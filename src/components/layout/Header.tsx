import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LocaleSwitch } from "./LocaleSwitch";

type NavItem = { label: string; href: string; routed?: boolean };

export async function Header() {
  const t = await getTranslations("Nav");
  const items: NavItem[] = [
    { label: t("products"), href: "/products", routed: true },
    { label: t("species"), href: "/#species" },
    { label: t("innovation"), href: "/#mission" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/85 backdrop-blur">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {items.map((item) =>
              item.routed ? (
                <Link
                  // @ts-expect-error - next-intl typed routes
                  href={item.href}
                  key={item.label}
                  className="text-[13px] tracking-tight text-charcoal/80 transition-colors hover:text-charcoal"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item.href}
                  key={item.label}
                  className="text-[13px] tracking-tight text-charcoal/80 transition-colors hover:text-charcoal"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <LocaleSwitch />
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-[12px] font-medium tracking-tight text-cream transition-all hover:bg-clay-500 sm:inline-flex"
            >
              {t("contact")}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
