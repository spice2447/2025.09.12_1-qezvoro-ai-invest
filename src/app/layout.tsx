// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  // чтобы canonical/og:url были абсолютными
  metadataBase: new URL('https://qezvoro.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
