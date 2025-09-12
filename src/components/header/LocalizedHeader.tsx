import { getMessages } from "@/i18n";
import HeaderClient from "./Header";

export default async function LocalizedHeader({ locale }: { locale: string }) {
  const t = await getMessages(locale);
  return <HeaderClient t={t} locale={locale} />;
}
