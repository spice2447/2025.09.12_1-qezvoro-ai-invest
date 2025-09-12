import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 gradient-text leading-tight">
            Qezvoro Invest — революционная ИИ-платформа для современного инвестирования
          </h1>
          
          <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Откройте свои инвестиции с помощью новых технологий машинного обучения. Торговля цифровыми активами, международными акциями, фондовыми индексами и сырьевыми товарами становится доступной благодаря каждому нашему интеллектуальному алгоритму.
            </p>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Система Qezvoro обрабатывает миллиарды данных ежесекундно: от ценовых колебаний до настроений социальных медиа, от экономических индикаторов до геополитических событий. Получите рекомендации, автоматизируйте инвестиционные стратегии и принимайте взвешенные решения, опираясь на технологии следующего поколения.
            </p>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground/80 leading-relaxed">
              Современный финансовый мир требует не только экспертизы, но и молниеносной обработки информационных потоков. Qezvoro Trading объединяет классические инвестиционные подходы с революционными возможностями искусственного интеллекта, устанавливающие новые стандарты в индустрии финансовых технологий.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-start gap-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-all glow">
              <Zap className="w-5 h-5 mr-2" />
              Активировать ИИ-анализ
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-success" />
                <span>Бесплатная регистрация</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span>Виртуальный счет для практики</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                <span>Никаких обязательств</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;