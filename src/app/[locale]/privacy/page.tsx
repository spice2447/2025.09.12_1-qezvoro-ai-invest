import { getMessages } from "@/i18n";
import { Locale } from "@/i18n/locales";
import { SITE_URL } from "@/lib/seo";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { localeCodes } from "@/i18n/locales";

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
    title: dict.nav.privacy,
    description: dict.nav.privacy,
    openGraph: {
      title: dict.nav.privacy,
      description: dict.nav.privacy,
      url: `${SITE_URL}/${locale}/privacy`,
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: dict.brand.name,
        },
      ],
    },
  };
}

export default async function Privacy({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getMessages(locale);
  const markdownPath = path.join(
    process.cwd(),
    `src/i18n/articles/privacy.md`
  );
  const markdown = fs.readFileSync(markdownPath, "utf-8");

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose lg:prose-xl dark:prose-invert mx-auto">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
}
