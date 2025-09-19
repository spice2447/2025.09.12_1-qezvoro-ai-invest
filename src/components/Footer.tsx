'use client'
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Dictionary } from "@/i18n/types";
import { INFO } from "@/lib/site-config";
import { useModal } from "./modal/ModalProvider";
import QuickRegistrationForm from "./forms/QuickRegistrationForm";
import { Button } from "./ui/button";

interface FooterProps {
  dict: Dictionary;
  locale: string; 
}

const Footer = ({ dict, locale }: FooterProps) => {
  const { footer, brand } = dict;
  const { openModal, closeModal } = useModal();

  const handleButtonClick = (e: React.MouseEvent<HTMLLIElement>) => {
    // Здесь можно добавить логику для кнопки, например, открыть модальное окно
    openModal({
      // title: t?.common?.ctaStart ?? "Начать сейчас",
      title: "",
      // description: t?.common?.ctaDescription ?? "Свяжитесь с нами, чтобы начать ваше инвестиционное путешествие с Qezvoro.",
      description: "",
      content: <QuickRegistrationForm t={dict} locale={locale} />,
      footer: (
        <Button onClick={closeModal} className="gradient-bg hover:opacity-90 transition-opacity">
          {dict?.common?.close ?? "Закрыть"}
        </Button>
      ),
      dismissible: true,
      contentClassName: "sm:max-w-lg",
    });
  }
  const navigation = {
    platform: footer.nav.platform.links.map(link => ({ ...link })),
    company: footer.nav.company.links.map(link => ({ ...link })),
    support: footer.nav.support.links.map(link => ({ ...link })),
    legal: footer.nav.legal.links.map(link => ({ ...link })),
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6">

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src={'/assets/qezvoro-logo.png'}
                  alt={brand.logoAlt}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold gradient-text">
                  {brand.name}
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {footer.brand.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{INFO.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>{INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{footer.brand.locations}</span>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div>
              <h3 className="font-semibold mb-4">{footer.nav.platform.title}</h3>
              <ul className="space-y-2">
                {navigation.platform.map((item) => (
                  <li onClick={handleButtonClick} key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{footer.nav.company.title}</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li onClick={handleButtonClick} key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{footer.nav.support.title}</h3>
              <ul className="space-y-2">
                {navigation.support.map((item) => (
                  <li onClick={handleButtonClick} key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">{footer.nav.legal.title}</h3>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li onClick={handleButtonClick} key={item.name}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">{item.label}</span>
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-xs text-muted-foreground">
              {footer.bottom.copyright}
            </p>
            <p className="text-center text-xs text-muted-foreground mt-2">
              {footer.bottom.riskWarning}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;