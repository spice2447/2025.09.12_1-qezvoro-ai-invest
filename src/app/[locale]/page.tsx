// src/app/[locale]/page.tsx
import type { Metadata } from "next";
import QezvoroLanding from "@/components/pages/QezvoroLanding";
import { getMessages } from "@/i18n";
import Script from "next/script";
import { baseOpenGraph, absUrl, buildAlternates, BRAND } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);

  const title = `${t.brand?.name ?? BRAND.name} — ${t.brand?.tagline ?? ""}`.trim();
  const description =
    t.hero?.extra ??
    "Qezvoro Invest — AI-платформа для инвестиций. 50k+ трейдеров, 87% точность, $2.3B+ транзакций.";

  const url = absUrl(locale);

  return {
    ...baseOpenGraph(title, description, url),
    alternates: buildAlternates(locale),
    keywords: [
      "Qezvoro",
      "AI investing",
      "ИИ инвестиции",
      "trading platform",
      "crypto",
      "stocks",
      "ETF",
    ],
  };
}

export default async function HomeLocale(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params;
  const t = await getMessages(locale);
  return <>
    <Script
    id="ld-organization"
    type="application/ld+json"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": BRAND.name,
        "url": absUrl(locale),
        "logo": BRAND.logo,
      }),
    }}
/>
    <Script
      id="ld-finservice"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": `${BRAND.name} AI Platform`,
          "description": "AI-платформа для инвестиций: сигналы, риск-менеджмент, портфельная оптимизация.",
          "provider": { "@type": "Organization", "name": BRAND.name },
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        }),
      }}
    />
    <Script
      id="ld-faq"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": (t.faq?.items ?? []).slice(0, 8).map((it: any) => ({
            "@type": "Question",
            "name": it.q ?? it.question ?? "",
            "acceptedAnswer": { "@type": "Answer", "text": it.a ?? it.answer ?? "" },
          })),
        }),
      }}
    />
    <QezvoroLanding t={t} locale={locale} />;
  </>
}
