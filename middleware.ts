import { NextRequest, NextResponse } from "next/server";

// Твои локали
const LOCALES = [
  "ru",
  "en-SG",
  "ms-MY",
  "es",
  "pt-PT",
  "ja",
  "cs",
  "it-CH",
  "fr-CH",
  "de-CH",
] as const;
type Locale = (typeof LOCALES)[number];

const DEFAULT_LOCALE: Locale = "ru";

// Быстрый парсер Accept-Language -> упорядоченный список "xx" или "xx-YY"
function parseAcceptLanguage(header: string | null): string[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      const quality = q ? parseFloat(q) : 1;
      return { tag: tag.toLowerCase(), quality };
    })
    .filter((x) => !!x.tag)
    .sort((a, b) => b.quality - a.quality)
    .map((x) => x.tag);
}

// Нормализация к твоим кодам (точное совпадение или матч по языку)
function negotiateLocale(accepts: string[]): Locale {
  // 1) точное совпадение
  for (const tag of accepts) {
    const exact = LOCALES.find((l) => l.toLowerCase() === tag.toLowerCase());
    if (exact) return exact;
  }
  // 2) матч по базовому языку (например, "pt" -> "pt-PT", "en" -> "en-SG")
  for (const tag of accepts) {
    const base = tag.split("-")[0];
    const byBase = LOCALES.find((l) => l.split("-")[0].toLowerCase() === base);
    if (byBase) return byBase as Locale;
  }
  return DEFAULT_LOCALE;
}

// Проверка: путь уже начинается с валидной локали?
function hasLocalePrefix(pathname: string): boolean {
  const seg = pathname.split("/")[1];
  return LOCALES.includes(seg as Locale);
}

// Исключения (статические/служебные пути)
const IGNORE_PREFIXES = [
  "/_next",
  "/_vercel",
  "/api",
  "/assets",
  "/public",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Пропускаем служебные/статические
  if (IGNORE_PREFIXES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Уже локализованный путь — пропускаем
  if (hasLocalePrefix(pathname)) {
    return NextResponse.next();
  }

  // Anchor-only и query-only не трогаем (редко, но на всякий)
  if (pathname === "" || pathname === "/" || pathname === undefined) {
    // 1) если есть cookie 'locale' — уважаем его
    const cookieLocale = req.cookies.get("locale")?.value as Locale | undefined;
    const best =
      (cookieLocale && LOCALES.includes(cookieLocale)) ?
        cookieLocale :
        negotiateLocale(parseAcceptLanguage(req.headers.get("accept-language")));

    const url = req.nextUrl.clone();
    url.pathname = `/${best}`;
    return NextResponse.redirect(url);
  }

  // Любой другой путь без префикса локали → добавим префикс по лучшей локали
  const cookieLocale = req.cookies.get("locale")?.value as Locale | undefined;
  const best =
    (cookieLocale && LOCALES.includes(cookieLocale)) ?
      cookieLocale :
      negotiateLocale(parseAcceptLanguage(req.headers.get("accept-language")));

  const url = req.nextUrl.clone();
  url.pathname = `/${best}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
  return NextResponse.redirect(url);
}

// Ограничим срабатывание на все пути, кроме явно исключённых выше
export const config = {
  matcher: ["/((?!.*\\..*).*)"], // всё, что не похоже на файл с расширением
};
