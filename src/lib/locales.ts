export const locales = ['en','ru','tr','de','fr','es','it','ar','fa','zh'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';
export const isRtl = (l: string) => ['ar','fa'].includes(l);
