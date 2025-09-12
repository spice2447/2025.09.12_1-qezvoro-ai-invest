// src/app/[locale]/page.tsx
import type { Metadata } from "next";
import QezvoroLanding from "@/components/pages/QezvoroLanding";
import { getMessages } from "@/i18n";

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getMessages(locale);

  const title = `${t.brand?.name ?? "Qezvoro Invest"} — ${t.brand?.tagline ?? ""}`.trim();
  const description = t.hero?.paragraph1 ?? t.brand?.tagline ?? "AI investing platform";

  return {
    title,
    description,
    alternates: { canonical: `/${locale}` },
    openGraph: {
      title,
      description,
      url: `/${locale}`,
      siteName: t.brand?.name ?? "Qezvoro Invest",
      images: [{ url: "/opengraph.jpg" }],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph.jpg"],
    },
  };
}

export default async function HomeLocale(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getMessages(locale);
  return <QezvoroLanding t={t} locale={locale} />;
}
