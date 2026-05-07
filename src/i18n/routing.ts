import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "nl"],
  defaultLocale: "en",
  // Static export → no middleware available, every URL gets a locale prefix.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
