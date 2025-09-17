'use client';

import { useState } from "react";
import DesktopNav from "./DesktopNav";
import LanguageSelector from "./LanguageSelector";
import MobileToggle from "./MobileToggle";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { useModal } from "@/components/modal/ModalProvider";
import QuickRegistrationForm from "../forms/QuickRegistrationForm";

type HeaderProps = { t: any; locale: string };

export default function Header({ t, locale }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal, closeModal } = useModal();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Здесь можно добавить логику для кнопки, например, открыть модальное окно
    openModal({
      // title: t?.common?.ctaStart ?? "Начать сейчас",
      title: "",
      // description: t?.common?.ctaDescription ?? "Свяжитесь с нами, чтобы начать ваше инвестиционное путешествие с Qezvoro.",
      description: "",
      content: <QuickRegistrationForm t={t} locale={locale} />,
      footer: (
        <Button onClick={closeModal} className="gradient-bg hover:opacity-90 transition-opacity">
          {t?.common?.close ?? "Закрыть"}
        </Button>
      ),
      dismissible: true,
      contentClassName: "sm:max-w-lg",
    });
  }

  const navItems = [
    { label: t?.nav?.about ?? "О платформе", href: "#platform" },
    { label: t?.nav?.reviews ?? "Qezvoro Отзывы", href: "#reviews" },
    { label: t?.nav?.contactStart ?? "Контакты", href: "/contacts" },
    // { label: t?.nav?.privacy ?? "Политика конфиденциальности", href: "/privacy" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Logo locale={locale} />

          <nav className="hidden lg:flex items-center space-x-8">
            <DesktopNav locale={locale} items={navItems} />
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector locale={locale} />
            <Button onClick={handleButtonClick} className="gradient-bg hover:opacity-90 transition-opacity">
              {t?.common?.ctaStart ?? "Начать сейчас"}
            </Button>
          </div>

          <MobileToggle open={mobileOpen} onToggle={() => setMobileOpen(v => !v)} />
        </div>

        <MobileMenu
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          locale={locale}
          items={navItems}
        />
      </div>
    </header>
  );
}
