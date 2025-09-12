import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap } from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "/месяц",
      description: "Идеально для начинающих инвесторов",
      icon: Zap,
      color: "muted",
      popular: false,
      features: [
        "Демо-счет $100,000",
        "Базовые ИИ-сигналы", 
        "До 5 активов в портфеле",
        "Образовательный контент",
        "Поддержка по email",
        "Мобильное приложение",
        "Основная аналитика"
      ],
      limitations: [
        "Ограничены сигналы",
        "Базовые инструменты"
      ]
    },
    {
      name: "Professional",
      price: "$29",
      period: "/месяц",
      description: "Для активных трейдеров",
      icon: Star,
      color: "primary",
      popular: true,
      features: [
        "Все функции Starter",
        "Unlimited ИИ-сигналы",
        "До 50 активов в портфеле", 
        "Персональный риск-менеджер",
        "Приоритетная поддержка",
        "Расширенная аналитика",
        "Автоматические уведомления",
        "Продвинутые индикаторы"
      ],
      limitations: []
    },
    {
      name: "Expert",
      price: "$99", 
      period: "/месяц",
      description: "Максимальные возможности платформы",
      icon: Crown,
      color: "accent",
      popular: false,
      features: [
        "Все функции Professional",
        "Алгоритмическая торговля",
        "API-доступ для разработчиков",
        "Индивидуальные стратегии",
        "Персональный менеджер",
        "VIP-статус и приоритет",
        "Эксклюзивные исследования",
        "Кастомные индикаторы"
      ],
      limitations: []
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Тарифные <span className="gradient-text">планы</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящий план и получите доступ к профессиональным инструментам ИИ-инвестирования. 
            Все планы включают бесплатный пробный период.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative card-gradient transition-all duration-500 group hover:glow animate-fade-up ${
                  plan.popular 
                    ? 'border-primary/40 ring-2 ring-primary/20 scale-105' 
                    : 'border-primary/20 hover:border-primary/40'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Самый популярный
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 text-${plan.color === 'muted' ? 'primary' : plan.color}`} />
                  </div>
                  
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <Button 
                    size="lg" 
                    className={`w-full mb-6 ${
                      plan.popular 
                        ? 'gradient-bg hover:opacity-90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    {plan.price === "$0" ? "Начать бесплатно" : "Выбрать план"}
                  </Button>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Включено:</h4>
                      <div className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-success flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-muted-foreground">Ограничения:</h4>
                        <div className="space-y-1">
                          {plan.limitations.map((limitation, limIndex) => (
                            <div key={limIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 bg-muted-foreground rounded-full flex-shrink-0" />
                              <span>{limitation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6 max-w-3xl">
            <h3 className="text-lg font-bold gradient-text mb-2">
              Гарантии для всех планов
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>30 дней возврата средств</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Отмена в любое время</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-success" />
                <span>Апгрейд/даунгрейд без комиссий</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;