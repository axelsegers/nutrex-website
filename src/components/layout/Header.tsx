import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { LocaleSwitch } from "./LocaleSwitch";

type NavItem =
  | { kind: "route"; label: string; href: "/" | "/products" | "/contact" }
  | { kind: "anchor"; label: string; hash: string };

export async function Header() {
  const t = await getTranslations("Nav");
  const items: NavItem[] = [
    { kind: "route", label: t("products"), href: "/products" },
    { kind: "anchor", label: t("species"), hash: "species" },
    { kind: "anchor", label: t("innovation"), hash: "mission" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-cream/85 backdrop-blur">
      <div className="mx-auto max-w-[80rem] px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-6">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {items.map((item) => {
              const cls =
                "text-[13px] tracking-tight text-charcoal/80 transition-colors hover:text-charcoal";
              if (item.kind === "anchor") {
                return (
                  <Link
                    key={item.label}
                    href={{ pathname: "/", hash: item.hash }}
                    className={cls}
                  >
                    {item.label}
                  </Link>
                );
              }
              return (
                <Link key={item.label} href={item.href} className={cls}>
                  {item.label}
                </Link>
              );
            })}
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
