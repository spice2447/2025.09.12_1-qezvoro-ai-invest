import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import qezvoroLogo from "@/assets/qezvoro-logo.png";

const Footer = () => {
  const navigation = {
    platform: [
      { name: "О платформе", href: "#platform" },
      { name: "Функции ИИ", href: "#ai" },
      { name: "Тарифы", href: "#pricing" },
      { name: "API документация", href: "#api" }
    ],
    company: [
      { name: "О компании", href: "#about" },
      { name: "Команда", href: "#team" },
      { name: "Партнеры", href: "#partners" },
      { name: "Карьера", href: "#careers" }
    ],
    support: [
      { name: "Справочный центр", href: "#help" },
      { name: "Обучение", href: "#education" },
      { name: "Статус системы", href: "#status" },
      { name: "Связаться с нами", href: "#contact" }
    ],
    legal: [
      { name: "Политика конфиденциальности", href: "#privacy" },
      { name: "Условия использования", href: "#terms" },
      { name: "Соответствие требованиям", href: "#compliance" },
      { name: "Раскрытие рисков", href: "#risks" }
    ]
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
                  src={qezvoroLogo} 
                  alt="Qezvoro Invest" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold gradient-text">
                  Qezvoro Invest
                </span>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Революционная ИИ-платформа для современного инвестирования. 
                Обрабатываем миллиарды данных ежесекундно, чтобы предоставить 
                вам преимущества институционального уровня.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>support@qezvoro.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>New York, London, Singapore</span>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div>
              <h3 className="font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2">
                {navigation.platform.map((item) => (
                  <li key={item.name}>
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
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
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
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2">
                {navigation.support.map((item) => (
                  <li key={item.name}>
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
              <h3 className="font-semibold mb-4">Правовая информация</h3>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
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
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright & Legal */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground mb-2">
                © 2024 Qezvoro Invest. Все права защищены.
              </p>
              <p className="text-xs text-muted-foreground">
                Лицензировано: SEC (США), FCA (Великобритания), CySEC (Кипр). 
                Инвестиции сопряжены с рисками.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Следите за нами:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-primary/20 transition-colors"
                  >
                    <a href={social.href} aria-label={social.label}>
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-6 border-t border-border">
          <div className="text-xs text-muted-foreground leading-relaxed">
            <p className="mb-2">
              <strong>Предупреждение о рисках:</strong> Торговля финансовыми инструментами и криптовалютами связана с высоким риском 
              и может привести к потере всего инвестированного капитала. Инвестируйте только те средства, 
              потерю которых вы можете себе позволить.
            </p>
            <p>
              Qezvoro Invest не предоставляет инвестиционные консультации. Все материалы носят 
              информационный характер. Прошлые результаты не гарантируют будущую доходность.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;