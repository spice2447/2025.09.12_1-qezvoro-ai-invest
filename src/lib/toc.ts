import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import GithubSlugger from "github-slugger";

export type TocItem = { id: string; title: string; depth: number };

export function extractToc(markdown: string): TocItem[] {
  const tree = unified().use(remarkParse).parse(markdown);
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];

  visit(tree, "heading", (node: any) => {
    if (node.depth < 2 || node.depth > 3) return;
    const text = (node.children || [])
      .filter((c: any) => c.type === "text" || c.type === "inlineCode")
      .map((c: any) => c.value)
      .join(" ")
      .trim();
    if (!text) return;
    const id = slugger.slug(text); // <— совпадает с rehype-slug
    items.push({ id, title: text, depth: node.depth });
  });

  return items;
}
