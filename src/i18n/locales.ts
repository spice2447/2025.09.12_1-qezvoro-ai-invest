// src/i18n/locales.ts

export const locales = [
  { code: 'ru',    name: 'Русский',         flag: '🇷🇺' },
  { code: 'en-SG', name: 'English (SG)',    flag: '🇸🇬' },
  { code: 'ms-MY', name: 'Bahasa Melayu',   flag: '🇲🇾' },
  { code: 'es',    name: 'Español (ES)',    flag: '🇪🇸' },
  { code: 'pt-PT', name: 'Português (PT)',  flag: '🇵🇹' },
  { code: 'ja',    name: '日本語',            flag: '🇯🇵' },
  { code: 'cs',    name: 'Čeština',         flag: '🇨🇿' },
  { code: 'it-CH', name: 'Italiano (CH)',   flag: '🇨🇭' },
  { code: 'fr-CH', name: 'Français (CH)',   flag: '🇨🇭' },
  { code: 'de-CH', name: 'Deutsch (CH)',    flag: '🇨🇭' },
] as const;

export type Locale = typeof locales[number]['code'];

export const localeCodes = locales.map(l => l.code) as readonly Locale[];

export const defaultLocale: Locale = 'ru';
export const isLocale = (l: string): l is Locale =>
  (localeCodes as readonly string[]).includes(l);

export const isRtl = (_l: string) => false; // среди этих локалей RTL нет

// Было в удаленном lib/i18n.ts — переносим сюда:
export function withLocale(locale: string, href: string) {
  if (!href || href.startsWith("#")) return href;                                  // якорь — без префикса
  if (href.startsWith(`/${locale}/`) || href === `/${locale}`) return href;        // уже локализован
  if (/^https?:\/\//i.test(href)) return href;                                     // внешний URL
  return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;        // нормализация относительного/абсолютного
}
