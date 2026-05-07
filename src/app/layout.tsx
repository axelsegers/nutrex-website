import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nutrex — Science-based feed additives, made in Europe",
    template: "%s · Nutrex",
  },
  description:
    "Nutrex develops phytogenic, enzymatic and toxin-management feed additives for poultry, swine, ruminants and aquaculture. Reliable partner for animal nutrition since 1988.",
  metadataBase: new URL("https://nutrex.smartagents.be"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-cream text-charcoal antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
