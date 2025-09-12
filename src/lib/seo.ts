import { locales } from "@/i18n/locales";

export function buildAlternates({ locale }: { locale: string }) {
  // Простейшая карта: /<lang>/ корневые страницы.
  const map: Record<string, string> = {};
  locales.forEach(l => { map[l.code] = `/${l.code}`; });
  return map;
}
