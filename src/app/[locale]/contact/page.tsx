import { setRequestLocale, getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Locale } from "@/i18n/routing";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Contact");
  const tFooter = await getTranslations("Footer");

  return (
    <section className="relative bg-cream py-24 sm:py-32 grain">
      <Container size="narrow">
        <Eyebrow tone="clay">{t("label")}</Eyebrow>
        <h1 className="mt-6 font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.02em] text-charcoal">
          {t("title")}
        </h1>
        <p className="mt-8 max-w-[52ch] text-[18px] leading-[1.6] text-stone">
          {t("body")}
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <ContactCard
            label="Headquarters"
            primary={tFooter("address")}
          />
          <ContactCard
            label="Direct"
            primary="info@nutrex.eu"
            secondary="+32 14 86 17 00"
            primaryHref="mailto:info@nutrex.eu"
            secondaryHref="tel:+3214861700"
          />
        </div>

        <form
          action="mailto:info@nutrex.eu"
          method="post"
          encType="text/plain"
          className="mt-16 grid gap-6 rounded-2xl bg-paper p-8 ring-1 ring-charcoal/8"
        >
          <Field label="Name" name="name" />
          <Field label="Email" type="email" name="email" />
          <Field label="Company / Operation" name="company" />
          <Field label="Tell us about your operation" name="message" textarea />
          <button
            type="submit"
            className="self-start inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-[14px] font-medium text-cream transition-all hover:bg-clay-500 hover:gap-3"
          >
            {t("cta")} →
          </button>
        </form>
      </Container>
    </section>
  );
}

function ContactCard({
  label,
  primary,
  secondary,
  primaryHref,
  secondaryHref,
}: {
  label: string;
  primary: string;
  secondary?: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="rounded-xl bg-paper p-7 ring-1 ring-charcoal/8">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-clay-500">
        {label}
      </p>
      <p className="mt-3 font-display text-[20px] leading-tight text-charcoal">
        {primaryHref ? <a href={primaryHref} className="hover:text-clay-600">{primary}</a> : primary}
      </p>
      {secondary && (
        <p className="mt-1 font-display text-[20px] leading-tight text-charcoal">
          {secondaryHref ? <a href={secondaryHref} className="hover:text-clay-600">{secondary}</a> : secondary}
        </p>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-lg bg-cream px-4 py-3 text-[15px] text-charcoal ring-1 ring-charcoal/10 transition-all focus:ring-charcoal focus:outline-none";
  return (
    <label className="grid gap-2">
      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-stone">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} />
      ) : (
        <input type={type} name={name} className={cls} />
      )}
    </label>
  );
}
