import type { Metadata } from "next";
import Providers from "../providers";
import { localeCodes, isRtl } from "@/i18n/locales";
import LocalizedHeader from "@/components/header/LocalizedHeader";
import Footer from "@/components/Footer";
import { locales, type Locale } from "@/i18n/locales";
import { buildAlternates, SITE_URL } from "@/lib/seo";
import { getMessages } from "@/i18n";

export async function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getMessages(locale);

  return {
    metadataBase: new URL(SITE_URL),
    alternates: buildAlternates(locale),
    title: {
      default: "Qezvoro Invest",
      template: "%s — Qezvoro Invest",
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const dict = await getMessages(locale);
  return (

    <Providers>
      <LocalizedHeader locale={locale} />
      <main>{children}</main>
      <Footer dict={dict} />
    </Providers>

  );
}
