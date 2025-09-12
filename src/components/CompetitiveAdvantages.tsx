import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Globe, Shield, Users, Award } from "lucide-react";

const CompetitiveAdvantages = () => {
  const advantages = [
    {
      icon: Brain,
      title: "Инновационные ИИ-решения",
      description: "Эксклюзивные алгоритмы, созданные экспертами Goldman Sachs, Google DeepMind и OpenAI. Обработка терабайтов информации в режиме реального времени.",
      highlights: [
        "Эксперты Goldman Sachs",
        "Google DeepMind технологии", 
        "OpenAI партнерство",
        "Терабайты данных в реальном времени"
      ]
    },
    {
      icon: Globe,
      title: "Глобальная диверсификация активов",
      description: "Прямой доступ к 15+ ведущим мировым биржам через единый интерфейс. Торгуйте акциями, ETF, криптовалютами и сырьевыми товарами одним кликом.",
      highlights: [
        "15+ мировых бирж",
        "Единый интерфейс",
        "Автоматическая конвертация валют",
        "Минимальные комиссионные"
      ]
    },
    {
      icon: Shield,
      title: "Институциональное управление рисками",
      description: "Многослойная система защиты включает автоматические механизмы стоп-лосса, диверсификацию и страхование депозитов до $250,000.",
      highlights: [
        "Автоматические стоп-лоссы",
        "Диверсификация активов",
        "Страхование до $250K",
        "Холодное хранение криптоактивов"
      ]
    },
    {
      icon: Users,
      title: "Универсальная доступность",
      description: "Начните со $100 и получите инструментарий хедж-фондов. Образовательный контент, персональное наставничество и демо-режим с $100,000.",
      highlights: [
        "Минимальный депозит $100",
        "Инструментарий хедж-фондов",
        "Персональное наставничество",
        "Демо-счет $100,000"
      ]
    },
    {
      icon: Award,
      title: "Банковские стандарты безопасности",
      description: "Лицензирование в 12 юрисдикциях, включая SEC, FCA и CySEC. Многофакторная аутентификация, шифрование военного уровня, аудит PwC.",
      highlights: [
        "12 юрисдикций лицензирования",
        "SEC, FCA, CySEC",
        "Шифрование военного уровня",
        "Аудит PwC каждые 6 месяцев"
      ]
    }
  ];

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Конкурентные <span className="gradient-text">преимущества</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Почему 50 000+ инвесторов доверяют Qezvoro Invest? Мы предоставляем не просто доступ к рынку — 
            мы создаем персональные конкурентные преимущества для каждого пользователя.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:glow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-2">{advantage.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {advantage.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {advantage.highlights.map((highlight, highlightIndex) => (
                      <Badge 
                        key={highlightIndex}
                        variant="secondary"
                        className="w-full justify-start py-2 px-3 bg-secondary/40 border-primary/20 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-success rounded-full mr-2 flex-shrink-0" />
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-success/20 to-primary/20 border border-success/30 rounded-full px-8 py-4">
            <div className="flex items-center gap-2 text-success font-semibold">
              <Award className="w-5 h-5" />
              <span>99% инвесторов недоступны такие преимущества</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages;