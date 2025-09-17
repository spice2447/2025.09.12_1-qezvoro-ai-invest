// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, BRAND } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND.name,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // В ROOT-лейауте нет params. Язык/dir по умолчанию.
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
