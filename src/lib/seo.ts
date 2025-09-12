// src/lib/seo.ts
import type { Metadata } from "next";
import { localeCodes, defaultLocale } from "@/i18n/locales";

// БАЗОВЫЙ URL (заполни в .env: NEXT_PUBLIC_SITE_URL=https://qezvoro.com)
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

// Общие бренд-данные
export const BRAND = {
  name: "Qezvoro Invest",
  logo: "/assets/qezvoro-logo.png",
  twitterHandle: "@qezvoro",
  ogImage: "/assets/og-default.jpg", // добавь файл в /public/assets/ (см. ниже)
};

// Абсолютная ссылка на страницу конкретной локали
export const absUrl = (locale: string, path = "") =>
  `${SITE_URL}/${locale}${path ? (path.startsWith("/") ? path : `/${path}`) : ""}`;

// Hreflang/alternates для текущей локали и пути
export function buildAlternates(locale: string, path = ""): NonNullable<Metadata["alternates"]> {
  const suffix = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const languages: Record<string, string> = {};
  localeCodes.forEach((code) => {
    languages[code] = `${SITE_URL}/${code}${suffix}`;
  });
  return {
    canonical: `${SITE_URL}/${locale}${suffix}`,
    languages,
  };
}

// Общие OG/Twitter по умолчанию
export function baseOpenGraph(title: string, description: string, url: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      type: "website",
      images: [{ url: BRAND.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [BRAND.ogImage],
      creator: BRAND.twitterHandle,
    },
  };
}
