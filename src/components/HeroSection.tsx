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
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-up">
            <span className="gradient-text">Qezvoro Invest</span> —{" "}
            <span className="text-foreground">
              революционная ИИ-платформа для современных народов
            </span>
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p>
              Откройте свои инвестиции с помощью новых технологий машинного обучения. 
              Торговля цифровыми активами, международными акциями, фондовыми индексами 
              и сырьевыми товарами становится доступной благодаря каждому нашему 
              интеллектуальному алгоритму.
            </p>
            
            <p>
              Система Qezvoro обрабатывает <span className="text-accent font-semibold">
              миллиарды данных ежесекундно</span>: от ценовых колебаний до настроений 
              социальных медиа, от экономических индикаторов до геополитических событий. 
              Получите рекомендации, автоматизируйте инвестиционные стратегии и принимайте 
              взвешенные решения, опираясь на технологии следующего поколения.
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