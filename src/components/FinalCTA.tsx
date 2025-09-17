import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Clock, DollarSign, ArrowRight, TrendingUp } from "lucide-react";
import QuickRegistrationForm from "./forms/QuickRegistrationForm";
import { useModal } from "./modal/ModalProvider";

type Props = { t: any; locale?: string };

const FinalCTA = ({ t, locale }: Props) => {
  const tt = t?.finalCta ?? {};
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
  const benefits: string[] =
    tt.bullets ?? [
      "Бесплатная регистрация за 2 минуты",
      "Демо-счёт $100 000",
      "30 дней ИИ-сигналы бесплатно",
      "Поддержка 24/7",
      "Никаких скрытых комиссий",
    ];

  const guarantees: string[] =
    tt.guarantees ?? [
      "Отмена в любое время",
      "Поддержка 24/7",
      "Отсутствие скрытых комиссий",
    ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-accent/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {tt.titlePrefix ?? "Присоединяйтесь к"}{" "}
              <span className="gradient-text">{tt.titleAccent ?? "ИИ-инвестиционной революции"}</span>{" "}
              {tt.titleSuffix ?? "сегодня"}
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              {tt.lead ??
                <>Более <span className="text-primary font-semibold">50,000 инвесторов</span> уже используют Qezvoro Invest. ИИ работает <span className="text-accent font-semibold">24/7</span>, анализируя миллионы точек данных.</>}
            </p>

            <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {tt.insight ??
                <>В мире, где <span className="text-primary">секунды определяют успех</span>, институциональные ИИ-технологии теперь доступны каждому через Qezvoro Invest.</>}
            </div>
          </div>

          {/* Benefits / Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-success/10 to-primary/10 border border-success/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold gradient-text mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                {tt.benefitsTitle ?? "Преимущества старта"}
              </h3>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold gradient-text mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                {tt.guaranteesTitle ?? "Гарантии безопасности"}
              </h3>
              <div className="space-y-4">
                {guarantees.map((g, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mb-12">
            <Button onClick={handleButtonClick} size="lg" className="gradient-bg hover:opacity-90 transition-all glow text-lg px-12 py-6">
              <Zap className="w-6 h-6 mr-3" />
              {tt.ctaButton ?? "Запустить ИИ-инвестирование немедленно"}
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              {tt.ctaFootnote ?? "Никаких скрытых комиссий • Отмена в любое время • Поддержка 24/7"}
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{tt.stats?.users ?? "50,000+"}</div>
              <div className="text-sm text-muted-foreground">{tt.statsLabels?.users ?? "Активных трейдеров"}</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{tt.stats?.accuracy ?? "87%"}</div>
              <div className="text-sm text-muted-foreground">{tt.statsLabels?.accuracy ?? "Точность ИИ"}</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{tt.stats?.volume ?? "$2.3B+"}</div>
              <div className="text-sm text-muted-foreground">{tt.statsLabels?.volume ?? "Обработано транзакций"}</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">{tt.stats?.uptime ?? "24/7"}</div>
              <div className="text-sm text-muted-foreground">{tt.statsLabels?.uptime ?? "ИИ работает"}</div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl font-medium italic text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            {tt.quoteBefore ?? "Лучшее время для инвестирования было 10 лет назад. Второе лучшее —"}{" "}
            <span className="gradient-text font-bold not-italic">{tt.quoteAccent ?? "сегодня"}</span>.{" "}
            {tt.quoteAfter ?? "С Qezvoro Invest у вас есть все инструменты для успеха."}
          </blockquote>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Badge variant="secondary" className="bg-success/20 text-success border-success/30 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              {tt.badges?.sec ?? "SEC — лицензия"}
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
              <Check className="w-4 h-4 mr-2" />
              {tt.badges?.pwc ?? "PwC — аудит"}
            </Badge>
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-4 py-2">
              <DollarSign className="w-4 h-4 mr-2" />
              {tt.badges?.insurance ?? "$250K — страховка"}
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
