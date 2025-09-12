import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Globe, Shield, Users, Award } from "lucide-react";

type Props = { t: any };

const CompetitiveAdvantages = ({ t }: Props) => {
  const tt = t?.advantages ?? {};

  const advantages = [
    {
      icon: Brain,
      title: tt.cards?.ai?.title ?? "Инновационные ИИ-решения",
      description:
        tt.cards?.ai?.desc ??
        "Эксклюзивные алгоритмы, созданные экспертами Goldman Sachs, Google DeepMind и OpenAI. Обработка терабайтов информации в режиме реального времени.",
      highlights:
        tt.cards?.ai?.bullets ?? [
          "Эксперты Goldman Sachs",
          "Google DeepMind технологии",
          "OpenAI партнерство",
          "Терабайты данных в реальном времени",
        ],
    },
    {
      icon: Globe,
      title: tt.cards?.global?.title ?? "Глобальная диверсификация активов",
      description:
        tt.cards?.global?.desc ??
        "Прямой доступ к 15+ ведущим мировым биржам через единый интерфейс. Торгуйте акциями, ETF, криптовалютами и сырьевыми товарами одним кликом.",
      highlights:
        tt.cards?.global?.bullets ?? [
          "15+ мировых бирж",
          "Единый интерфейс",
          "Автоматическая конвертация валют",
          "Минимальные комиссионные",
        ],
    },
    {
      icon: Shield,
      title: tt.cards?.risk?.title ?? "Институциональное управление рисками",
      description:
        tt.cards?.risk?.desc ??
        "Многослойная система защиты включает автоматические механизмы стоп-лосса, диверсификацию и страхование депозитов до $250,000.",
      highlights:
        tt.cards?.risk?.bullets ?? [
          "Автоматические стоп-лоссы",
          "Диверсификация активов",
          "Страхование до $250K",
          "Холодное хранение криптоактивов",
        ],
    },
    {
      icon: Users,
      title: tt.cards?.access?.title ?? "Универсальная доступность",
      description:
        tt.cards?.access?.desc ??
        "Начните со $100 и получите инструментарий хедж-фондов. Образовательный контент, персональное наставничество и демо-режим с $100,000.",
      highlights:
        tt.cards?.access?.bullets ?? [
          "Минимальный депозит $100",
          "Инструментарий хедж-фондов",
          "Персональное наставничество",
          "Демо-счет $100,000",
        ],
    },
    {
      icon: Award,
      title: tt.cards?.security?.title ?? "Банковские стандарты безопасности",
      description:
        tt.cards?.security?.desc ??
        "Лицензирование в 12 юрисдикциях, включая SEC, FCA и CySEC. МФА, шифрование военного уровня, аудит PwC.",
      highlights:
        tt.cards?.security?.bullets ?? [
          "12 юрисдикций лицензирования",
          "SEC, FCA, CySEC",
          "Шифрование военного уровня",
          "Аудит PwC каждые 6 месяцев",
        ],
    },
  ];

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {(tt.title ?? "Конкурентные")} <span className="gradient-text">
              {tt.titleAccent ?? "преимущества"}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {tt.subtitle ??
              "Почему 50 000+ инвесторов доверяют Qezvoro Invest? Мы предоставляем не просто доступ к рынку — создаём персональные конкурентные преимущества для каждого пользователя."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
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
                  <CardTitle className="text-lg mb-2">{adv.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {adv.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {adv.highlights.map((h: string, i: number) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="w-full justify-start py-2 px-3 bg-secondary/40 border-primary/20 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-success rounded-full mr-2 flex-shrink-0" />
                        {h}
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
              <span>{tt.footerNote ?? "99% инвесторов недоступны такие преимущества"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages;
