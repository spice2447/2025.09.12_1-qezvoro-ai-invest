"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/toc";

export default function TOC({ items, className, t }: { items: TocItem[]; className?: string; t: any }) {
  const [active, setActive] = useState<string | null>(null);

  // Подсветка активного раздела
  useEffect(() => {
    if (!items?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0.1 }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  if (!items?.length) return null;

  return (
    <aside
      className={cn(
        "hidden lg:block sticky top-24 h-fit rounded-2xl border bg-card/60 backdrop-blur-sm p-4",
        className
      )}
    >
      <div className="text-sm font-semibold mb-2">{t.privacyPage?.toc ?? "Содержание"}</div>
      <nav className="space-y-1 text-sm">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            onClick={(e) => handleClick(e, it.id)}
            className={cn(
              "block rounded px-2 py-1 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition",
              it.depth === 3 && "ml-3",
              active === it.id && "bg-muted/70 text-foreground"
            )}
          >
            {it.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
