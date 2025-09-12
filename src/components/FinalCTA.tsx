import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Clock, DollarSign, ArrowRight, TrendingUp } from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    "Бесплатная регистрация за 2 минуты",
    "Демо-счет $100,000 для практики", 
    "Первые 30 дней ИИ-сигналы бесплатно",
    "Русскоязычная поддержка 24/7",
    "Никаких обязательств и скрытых комиссий"
  ];

  const guarantees = [
    "Лицензии международных регуляторов",
    "Страхование вкладов до $250,000",
    "30-дневная гарантия возврата денег",
    "SSL-шифрование данных",
    "Аудит безопасности PwC"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-accent/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Headline */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Присоединяйтесь к{" "}
              <span className="gradient-text">ИИ-инвестиционной революции</span>{" "}
              сегодня
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              Более <span className="text-primary font-semibold">50,000 инвесторов</span> уже используют 
              Qezvoro Invest для генерации стабильной прибыли на финансовых рынках. 
              Искусственный интеллект работает <span className="text-accent font-semibold">24 часа в сутки, 7 дней в неделю</span>, 
              анализируя миллионы точек данных, чтобы вы никогда не упускали выгодные возможности.
            </p>

            <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
              В мире, где <span className="text-primary">секунды определяют успех или неудачу</span> инвестиций, 
              человеческие возможности уже недостаточны. Институциональные инвесторы тратят 
              миллионы на ИИ-технологии — теперь эти же преимущества доступны каждому через Qezvoro Invest.
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Benefits */}
            <div className="bg-gradient-to-br from-success/10 to-primary/10 border border-success/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold gradient-text mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                Преимущества старта
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold gradient-text mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Гарантии безопасности
              </h3>
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="mb-12">
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-all glow text-lg px-12 py-6">
              <Zap className="w-6 h-6 mr-3" />
              Запустить ИИ-инвестирование немедленно
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              Никаких скрытых комиссий • Отмена в любое время • Поддержка 24/7
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">50,000+</div>
              <div className="text-sm text-muted-foreground">Активных трейдеров</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">87%</div>
              <div className="text-sm text-muted-foreground">Точность ИИ</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">$2.3B+</div>
              <div className="text-sm text-muted-foreground">Обработано транзакций</div>
            </div>
            <div className="hidden md:block w-px h-8 bg-border" />
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">ИИ работает</div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl font-medium italic text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            "Лучшее время для инвестирования было 10 лет назад. 
            Второе лучшее время — <span className="gradient-text font-bold not-italic">сегодня</span>. 
            С Qezvoro Invest у вас есть все инструменты для успеха."
          </blockquote>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Badge variant="secondary" className="bg-success/20 text-success border-success/30 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              SEC Лицензировано
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
              <Check className="w-4 h-4 mr-2" />
              PwC Аудит
            </Badge>
            <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-4 py-2">
              <DollarSign className="w-4 h-4 mr-2" />
              $250K Страховка
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;