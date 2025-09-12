import type { Metadata } from "next";
import Providers from "../providers";
import { localeCodes, isRtl } from "@/i18n/locales";
import LocalizedHeader from "@/components/header/LocalizedHeader";
import Footer from "@/components/Footer";
import HtmlLangDir from "@/components/HtmlLangDir"; // добавим ниже

export async function generateStaticParams() {
  return localeCodes.map((code) => ({ locale: code }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://qezvoro.com"),
};

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children } = props;
  const { locale } = await props.params;
  const dir = isRtl(locale) ? "rtl" : "ltr";

  return (
    <Providers>
      {/* Синхронизируем <html> (lang/dir) на клиенте после навигации */}
      <HtmlLangDir locale={locale} dir={dir} />

      <LocalizedHeader locale={locale} />
      <div dir={dir} data-locale={locale}>
        {children}
      </div>
      <Footer />
    </Providers>
  );
}
