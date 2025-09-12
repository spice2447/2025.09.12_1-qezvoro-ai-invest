import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, TrendingUp, DollarSign, Globe, BarChart, LucideIcon } from "lucide-react";

type Props = { t: any };


type Partner = {
  icon: LucideIcon;
  name: string;
  category: string;
  description: string;
  features: string[];
  volume: string;
  color: "warning" | "primary" | "accent" | "success";
};

const colorClasses: Record<string, string> = {
  warning: "bg-yellow-500/20 text-yellow-700",
  primary: "bg-primary/20 text-primary",
  accent: "bg-accent/20 text-accent",
  success: "bg-green-500/20 text-green-700",
};

const TechnologicalPartners = ({ t }: Props) => {
  const tt = t?.partners ?? {};

  const partners: Partner[] = [
    {
      icon: Building,
      name: "Binance",
      category: tt.cards?.binance?.category ?? "Криптовалютный гигант",
      description:
        tt.cards?.binance?.desc ??
        "Крупнейшая криптобиржа с ежедневным объёмом свыше $15 млрд. Прямое подключение к Binance гарантирует доступ к более чем 500 торговым парам.",
      features:
        tt.cards?.binance?.bullets ?? ["Ежедневный объём $15+ млрд", "500+ торговых пар", "Сверхнизкие спреды", "Комиссия от 0,05%"],
      volume: tt.cards?.binance?.badge ?? "$15B+",
      color: "warning",
    },
    {
      icon: TrendingUp,
      name: "Coinbase",
      category: tt.cards?.coinbase?.category ?? "Регулируемая в США",
      description:
        tt.cards?.coinbase?.desc ??
        "Публичная NASDAQ-компания с лицензиями во всех американских штатах. Высочайшие стандарты безопасности и соответствия.",
      features:
        tt.cards?.coinbase?.bullets ?? ["Публичная NASDAQ компания", "Лицензии во всех штатах США", "Coinbase Prime доступ", "Эксклюзивные листинги"],
      volume: tt.cards?.coinbase?.badge ?? "NASDAQ: COIN",
      color: "primary",
    },
    {
      icon: DollarSign,
      name: "Kraken",
      category: tt.cards?.kraken?.category ?? "Европейское качество",
      description:
        tt.cards?.kraken?.desc ??
        "Ветеранская криптобиржа с безупречной репутацией и соблюдением банковских стандартов. Расширенные инструменты и поддержка 24/7.",
      features:
        tt.cards?.kraken?.bullets ?? ["Безупречная репутация", "Банковские стандарты", "Фьючерсы и маржа", "Поддержка 24/7"],
      volume: tt.cards?.kraken?.badge ?? "EU Licensed",
      color: "accent",
    },
    {
      icon: Globe,
      name: "Interactive Brokers",
      category: tt.cards?.ib?.category ?? "Глобальные акции",
      description:
        tt.cards?.ib?.desc ??
        "Ведущий брокер с доступом к 135 рынкам в 33 странах. Акции, опционы, фьючерсы и облигации по институциональным тарифам.",
      features:
        tt.cards?.ib?.bullets ?? ["135 рынков в 33 странах", "Институциональные тарифы", "Все классы активов", "Межрыночный арбитраж"],
      volume: tt.cards?.ib?.badge ?? "135 Markets",
      color: "success",
    },
    {
      icon: BarChart,
      name: "Bloomberg Terminal",
      category: tt.cards?.bbg?.category ?? "Профессиональная аналитика",
      description:
        tt.cards?.bbg?.desc ??
        "Эксклюзивный доступ к данным терминала Bloomberg стоимостью $24,000/год включён в платформу.",
      features:
        tt.cards?.bbg?.bullets ?? ["Стоимость $24K/год включена", "Фундаментальная аналитика", "Исследования инвестбанков", "Макроэкономические прогнозы"],
      volume: tt.cards?.bbg?.badge ?? "$24K Value",
      color: "primary",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {(tt.title ?? "Технологические")} <span className="gradient-text">{tt.titleAccent ?? "партнеры"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {tt.subtitle ??
              "Наши партнеры — глобальные лидеры финтех-экосистемы. Интеграция с ведущими биржами и поставщиками данных обеспечивает оптимальные условия и премиум-аналитику."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            const badgeClasses = colorClasses[partner.color] ?? "bg-primary/20 text-primary";
            return (
              <Card
                key={index}
                className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:glow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge variant="secondary" className={badgeClasses}>
                      {partner.volume}
                    </Badge>
                  </div>

                  <CardTitle className="text-xl mb-1">{partner.name}</CardTitle>
                  <div className="text-sm font-medium text-accent mb-2">{partner.category}</div>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-foreground mb-2">{tt.featuresTitle ?? "Ключевые преимущества:"}</h4>
                    {partner.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs">
                        <div className="w-1 h-1 bg-success rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-4xl">
            <h3 className="text-xl font-bold gradient-text mb-4">{tt.ecosysTitle ?? "Партнерская экосистема"}</h3>
            <p className="text-muted-foreground mb-6">
              {tt.ecosysText ??
                "Сеть включает торговые площадки, банки, регуляторов, провайдеров данных и тех. гигантов — сервис институционального уровня для розничных инвесторов."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{tt.stats?.markets ?? "135"}</div>
                <div className="text-sm text-muted-foreground">{tt.statsLabels?.markets ?? "Рынков"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{tt.stats?.countries ?? "33"}</div>
                <div className="text-sm text-muted-foreground">{tt.statsLabels?.countries ?? "Страны"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{tt.stats?.instruments ?? "500+"}</div>
                <div className="text-sm text-muted-foreground">{tt.statsLabels?.instruments ?? "Инструментов"}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{tt.stats?.availability ?? "24/7"}</div>
                <div className="text-sm text-muted-foreground">{tt.statsLabels?.availability ?? "Доступность"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologicalPartners;
