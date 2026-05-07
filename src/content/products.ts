import type { Locale } from "@/i18n/routing";

export type ProductId = "phytostar" | "endoban-ft" | "nutrase";

export interface ProductCopy {
  name: string;
  tagline: string;
  category: string;
  intro: string;
  applications: string[];
  benefits: { title: string; body: string }[];
  mode: string;
}

export interface Product {
  id: ProductId;
  brand: string;
  hex: string;
  hexAccent: string;
  image: string;
  imageAlt: string;
  copy: Record<Locale, ProductCopy>;
}

export const products: Product[] = [
  {
    id: "phytostar",
    brand: "Phytostar®",
    hex: "#3d5a2c",
    hexAccent: "#7d9658",
    image:
      "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Wild herbs and botanical extracts",
    copy: {
      en: {
        name: "Phytostar®",
        tagline: "Phytogenic growth promotion, rooted in botany.",
        category: "Growth Promotors",
        intro:
          "A precision-blended phytogenic with proven antioxidative and anti-inflammatory effect. Formulated to keep gut integrity sharp and feed conversion tight, even under heat stress and high stocking density.",
        applications: ["Broilers", "Layers & breeders", "Piglets & sows", "Calves & dairy"],
        benefits: [
          {
            title: "Lower FCR, higher uniformity",
            body: "Field trials show consistent feed-conversion gains of 2–4% across poultry and swine programmes.",
          },
          {
            title: "Gut barrier support",
            body: "Active essential oils reinforce tight-junction integrity and reduce inflammatory load on the intestinal lining.",
          },
          {
            title: "AGP-replacement ready",
            body: "Designed as a clean-label alternative for operations phasing out antibiotic growth promoters.",
          },
        ],
        mode: "Selected essential oils and standardized plant extracts modulate the gut microbiota, reduce oxidative stress at the mucosal level, and stabilise digestion across the GI tract.",
      },
      nl: {
        name: "Phytostar®",
        tagline: "Fytogene groeibevordering, geworteld in plantkunde.",
        category: "Groeibevorderaars",
        intro:
          "Een nauwkeurig samengestelde fytogene additie met bewezen antioxidatieve en ontstekingsremmende werking. Geformuleerd om darmintegriteit scherp en voederconversie strak te houden, zelfs bij hittestress en hoge bezettingsdichtheid.",
        applications: ["Vleeskuikens", "Leghennen & vermeerdering", "Biggen & zeugen", "Kalveren & melkvee"],
        benefits: [
          {
            title: "Lagere VC, hogere uniformiteit",
            body: "Veldproeven tonen consistente voederconversie-winst van 2–4% in pluimvee en varkens.",
          },
          {
            title: "Ondersteuning van de darmbarrière",
            body: "Actieve essentiële oliën versterken de tight-junctions en verlagen de ontstekingsdruk op het darmslijmvlies.",
          },
          {
            title: "Klaar als AGP-vervanger",
            body: "Ontwikkeld als clean-label alternatief voor bedrijven die antibiotische groeibevorderaars uitfaseren.",
          },
        ],
        mode: "Geselecteerde essentiële oliën en gestandaardiseerde plantextracten moduleren de darmflora, verminderen oxidatieve stress op mucosaal niveau en stabiliseren de spijsvertering.",
      },
    },
  },
  {
    id: "endoban-ft",
    brand: "Endoban® FT",
    hex: "#7c360f",
    hexAccent: "#c9622b",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Mineral clay and adsorbent powders",
    copy: {
      en: {
        name: "Endoban® FT",
        tagline: "A complete toxin-management system.",
        category: "Toxin Management",
        intro:
          "Endoban FT addresses the full toxin spectrum — mycotoxins, bacterial endotoxins, and biogenic amines — with a multi-layered mode of action engineered for unpredictable raw-material profiles.",
        applications: ["High-risk grain markets", "Tropical & humid climates", "Heat-stress periods", "Transition feeds"],
        benefits: [
          {
            title: "Broad-spectrum capture",
            body: "Selective adsorption of polar and apolar mycotoxins without binding essential nutrients.",
          },
          {
            title: "Liver & immune support",
            body: "Botanicals and antioxidants protect hepatic function under chronic toxin pressure.",
          },
          {
            title: "Endotoxin neutralisation",
            body: "Specific actives target Gram-negative LPS, easing the inflammatory load post-stress events.",
          },
        ],
        mode: "Three layered mechanisms — adsorption, biotransformation, hepato-protection — combine to break the toxin chain before it reaches systemic circulation.",
      },
      nl: {
        name: "Endoban® FT",
        tagline: "Een volledig toxine-beheersingssysteem.",
        category: "Toxine-beheersing",
        intro:
          "Endoban FT pakt het volledige toxine-spectrum aan — mycotoxines, bacteriële endotoxines en biogene amines — met een gelaagd werkingsmechanisme, ontworpen voor onvoorspelbare grondstofprofielen.",
        applications: ["Risicomarkten voor granen", "Tropische & vochtige klimaten", "Hittestress-periodes", "Transitievoeders"],
        benefits: [
          {
            title: "Breedspectrum-binding",
            body: "Selectieve adsorptie van polaire en apolaire mycotoxines, zonder essentiële nutriënten te binden.",
          },
          {
            title: "Lever- en immuunondersteuning",
            body: "Botanicals en antioxidanten beschermen de leverfunctie onder chronische toxinedruk.",
          },
          {
            title: "Endotoxine-neutralisatie",
            body: "Specifieke actieven richten zich op Gram-negatieve LPS en verlichten de ontstekingsbelasting.",
          },
        ],
        mode: "Drie gelaagde mechanismen — adsorptie, biotransformatie, hepato-protectie — breken de toxineketen voor ze de systemische circulatie bereikt.",
      },
    },
  },
  {
    id: "nutrase",
    brand: "Nutrase®",
    hex: "#1f3417",
    hexAccent: "#a84d1c",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Grain and enzyme research",
    copy: {
      en: {
        name: "Nutrase®",
        tagline: "Feed enzymes that release the value already on the truck.",
        category: "Digestibility Enhancers",
        intro:
          "A focused range of NSP-degrading enzymes, phytases and proteases — chosen to extract maximum nutrient value from raw materials while reducing diet cost and environmental impact.",
        applications: ["Wheat / barley diets", "Phytate-rich feeds", "Vegetable-protein matrices", "Low-density formulations"],
        benefits: [
          {
            title: "Liberated energy",
            body: "Up to 110 kcal/kg uplift achievable in NSP-rich poultry rations through targeted xylanase activity.",
          },
          {
            title: "Phosphorus efficiency",
            body: "Enhanced phytase action improves P digestibility, reducing inorganic-P inclusion and nutrient excretion.",
          },
          {
            title: "Cost-down, performance-flat",
            body: "Reformulate the matrix without losing zootechnical results — a measurable margin lever.",
          },
        ],
        mode: "Targeted hydrolysis of plant cell walls, phytate complexes and dietary proteins releases bound nutrients and lowers digesta viscosity.",
      },
      nl: {
        name: "Nutrase®",
        tagline: "Voederenzymen die waarde vrijmaken die al in de vrachtwagen zit.",
        category: "Verteerbaarheid",
        intro:
          "Een gericht gamma NSP-afbrekende enzymen, fytasen en proteasen — gekozen om maximale nutriëntenwaarde uit grondstoffen te halen, met lagere voederkost en milieu-impact.",
        applications: ["Tarwe-/gerstrantsoenen", "Fytaatrijke voeders", "Plantaardige eiwitmatrices", "Lage-densiteit formulaties"],
        benefits: [
          {
            title: "Vrijgemaakte energie",
            body: "Tot 110 kcal/kg winst haalbaar in NSP-rijke pluimveerantsoenen via gerichte xylanase-activiteit.",
          },
          {
            title: "Fosfor-efficiëntie",
            body: "Verhoogde fytase-werking verbetert de P-verteerbaarheid en verlaagt anorganische P-toevoeging en uitscheiding.",
          },
          {
            title: "Lagere kost, gelijke prestatie",
            body: "Herformuleer de matrix zonder zoötechnische verliezen — een meetbare margehefboom.",
          },
        ],
        mode: "Gerichte hydrolyse van plantaardige celwanden, fytaatcomplexen en voedereiwitten maakt gebonden nutriënten vrij en verlaagt de digesta-viscositeit.",
      },
    },
  },
];

export function getProduct(id: ProductId): Product | undefined {
  return products.find((p) => p.id === id);
}
