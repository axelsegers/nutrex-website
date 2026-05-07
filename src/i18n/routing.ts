import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "nl"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/products": {
      en: "/products",
      nl: "/producten",
    },
    "/products/[slug]": {
      en: "/products/[slug]",
      nl: "/producten/[slug]",
    },
    "/about": {
      en: "/about",
      nl: "/over-ons",
    },
    "/contact": "/contact",
  },
});

export type Locale = (typeof routing.locales)[number];
