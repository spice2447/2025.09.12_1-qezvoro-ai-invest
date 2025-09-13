import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import rehypeSanitize from "rehype-sanitize";
import { defaultSchema, type Schema } from "hast-util-sanitize";

export type ArticleSlug = "privacy" | "contacts" | "reviews";
export type Locale =
  | "en" | "ru" | "cs" | "de" | "fr" | "it" | "ja" | "ms" | "pt" | "es";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");
const p = (...xs: string[]) => path.join(CONTENT_DIR, ...xs);

export async function loadArticle(locale: Locale, slug: ArticleSlug, fallback: Locale = "en") {
  try {
    return await fs.readFile(p(locale, `${slug}.md`), "utf8");
  } catch {
    return await fs.readFile(p(fallback, `${slug}.md`), "utf8");
  }
}

// расширяем whitelist, чтобы не срезались id/className у заголовков/ссылок
const sanitizeSchema: Schema = {
  ...defaultSchema,
  attributes: {
    ...(defaultSchema.attributes ?? {}),
    a: [
      ...(defaultSchema.attributes?.a ?? []),
      ["className", "tokenlist"],
      ["href", "url"],
      ["ariaHidden", "string"],
      ["tabIndex", "number"],
    ],
    h1: [...(defaultSchema.attributes?.h1 ?? []), ["id", "string"]],
    h2: [...(defaultSchema.attributes?.h2 ?? []), ["id", "string"]],
    h3: [...(defaultSchema.attributes?.h3 ?? []), ["id", "string"]],
    h4: [...(defaultSchema.attributes?.h4 ?? []), ["id", "string"]],
    h5: [...(defaultSchema.attributes?.h5 ?? []), ["id", "string"]],
    h6: [...(defaultSchema.attributes?.h6 ?? []), ["id", "string"]],
  },
};

export type RenderedArticle = { html: string; frontmatter: Record<string, any> };

export async function renderMarkdown(md: string): Promise<RenderedArticle> {
  const { content, data } = matter(md);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeSanitize, sanitizeSchema) 
    .use(rehypeStringify)
    .process(content);

  return { html: String(file), frontmatter: data };
}
