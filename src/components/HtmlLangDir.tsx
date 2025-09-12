'use client';

import { useEffect } from "react";

export default function HtmlLangDir({ locale, dir }: { locale: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    const el = document.documentElement;
    // не трогаем, если уже такие же
    if (el.lang !== locale) el.lang = locale;
    if (el.getAttribute("dir") !== dir) el.setAttribute("dir", dir);
  }, [locale, dir]);

  return null;
}
