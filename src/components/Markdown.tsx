import React from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

type Props = { children: string; className?: string };

const components: Components = {
  a: ({ href, children, ...props }) => {
    const external = href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...props}
        className="font-medium underline decoration-muted-foreground/50 underline-offset-4 hover:decoration-primary transition"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  },
  table: ({ children }) => (
    <div className="not-prose overflow-x-auto rounded-xl border bg-background/40">
      <table className="w-full border-collapse [&_th]:bg-muted/60 [&_th]:font-semibold [&_th]:p-3 [&_td]:p-3 [&_td]:border-t">
        {children}
      </table>
    </div>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 pl-4 italic text-muted-foreground bg-muted/30 py-2 rounded-r">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => (
    <img src={src ?? ""} alt={alt ?? ""} className="rounded-xl shadow-sm max-w-full h-auto" />
  ),
  code: ({
    inline,
    children,
    className,
    ...props
  }: React.PropsWithChildren<{
    inline?: boolean;
    className?: string;
  }> & React.HTMLAttributes<HTMLElement>) => {
    if (inline) return <code className="px-1 py-0.5 rounded bg-muted">{children}</code>;
    return (
      <pre className="not-prose rounded-xl bg-zinc-900/90 text-zinc-100 overflow-x-auto p-4">
        <code className={className} {...props}>{children}</code>
      </pre>
    );
  },
  h1: ({ children }) => <h1 className="scroll-mt-28">{children}</h1>,
  h2: ({ children }) => <h2 className="scroll-mt-28">{children}</h2>,
  h3: ({ children }) => <h3 className="scroll-mt-28">{children}</h3>,
};

export default function Markdown({ children, className }: Props) {
  return (
    <div
      className={[
        "prose prose-zinc dark:prose-invert lg:prose-lg",
        // мягкая сетка отступов
        "prose-headings:font-semibold prose-h1:mb-6 prose-h2:mt-10 prose-h2:mb-4",
        "prose-h3:mt-6 prose-h3:mb-2 prose-p:leading-7 prose-li:leading-7 prose-ul:my-4 prose-ol:my-4",
        "prose-hr:my-10",
        className,
      ].join(" ")}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
