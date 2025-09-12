import Link from "next/link";
import { withLocale } from "@/i18n/locales"; // <= было "@/lib/i18n"

type NavItem = { label: string; href: string };

export default function DesktopNav({
  locale,
  items,
}: {
  locale: string;
  items: NavItem[];
}) {
  return (
    <>
      {items.map((item) => {
        const href = withLocale(locale, item.href);
        const isHash = item.href.startsWith("#");
        return isHash ? (
          <a
            key={item.label}
            href={href}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.label}
            href={href}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
