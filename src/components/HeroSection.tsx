"use client"
import { Button } from "@/components/ui/button";

import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import { useModal } from "./modal/ModalProvider";
import QuickRegistrationForm from "./forms/QuickRegistrationForm";

type HeroSectionProps = {
  t: any; // если уже есть тип Messages — подставь его сюда
  locale: string;
};

const HeroSection = ({ t, locale }: HeroSectionProps) => {
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
  const brandName =
    t?.brand?.name ?? "Qezvoro Invest";

const heroTitle =
    t?.hero?.title ?? "Qezvoro Invest — революционная ИИ-платформа для современных инвесторов";

  const p1 =
    t?.hero?.paragraph1 ??
    "Откройте свои инвестиции с помощью технологий машинного обучения. Торговля цифровыми активами, международными акциями, индексами и сырьевыми товарами — в одном интеллектуальном интерфейсе.";

  const p2 =
    t?.hero?.paragraph2 ??
    "Система Qezvoro обрабатывает миллиарды данных ежесекундно: от ценовых колебаний до настроений соцсетей, от экономических индикаторов до геополитических событий. Получайте рекомендации, автоматизируйте стратегии и принимайте взвешенные решения.";

  const ctaLabel =
    t?.hero?.cta?.activateAnalysis ?? "Активировать ИИ-анализ";

  const g1 =
    t?.hero?.badges?.freeReg ?? "Бесплатная регистрация";
  const g2 =
    t?.hero?.badges?.demoAccount ?? "Виртуальный счет для практики";
  const g3 =
    t?.hero?.badges?.noObligations ?? "Никаких обязательств";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/hero-bg.jpg')` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8 animate-fade-up">
            <span className="gradient-text">{brandName}</span> —{" "}
            <span className="text-foreground">{heroTitle.replace(brandName + ' —', "")}</span>
          </h1>

          <div
            className="space-y-6 text-md md:text-xl text-muted-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <p>{p1}</p>
            <p>{p2}</p>
          </div>

          {/* CTA Button + guarantees */}
          <div
            className="flex flex-col sm:flex-row items-start gap-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button onClick={handleButtonClick} size="lg" className="gradient-bg hover:opacity-90 transition-all glow">
              <Zap className="w-5 h-5 mr-2" />
              {ctaLabel}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-success" />
                <span>{g1}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span>{g2}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span>{g3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
