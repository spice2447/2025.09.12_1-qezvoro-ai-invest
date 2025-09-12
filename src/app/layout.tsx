import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, BRAND } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND.name,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // В корне НЕ задаём lang/dir, чтобы не конфликтовать с /[locale]/layout
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
