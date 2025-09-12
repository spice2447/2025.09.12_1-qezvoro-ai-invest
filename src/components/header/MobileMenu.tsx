'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { withLocale } from "@/i18n/locales"; // <= было "@/lib/i18n"

type NavItem = { label: string; href: string };

export default function MobileMenu({
  open, onClose, locale, items
}: {
  open: boolean;
  onClose: () => void;
  locale: string;
  items: NavItem[];
}) {
  if (!open) return null;

  return (
    <div className="lg:hidden py-6 border-t border-border">
      <nav className="flex flex-col space-y-4">
        {items.map((item) => {
          const href = withLocale(locale, item.href);
          const isHash = item.href.startsWith("#");
          return isHash ? (
            <a
              key={item.label}
              href={href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
              onClick={onClose}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              href={href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
              onClick={onClose}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="flex flex-col space-y-4 mt-4">
          <LanguageSelector locale={locale} />
          <Button className="gradient-bg hover:opacity-90 transition-opacity">
            Начать сейчас
          </Button>
        </div>
      </nav>
    </div>
  );
}
