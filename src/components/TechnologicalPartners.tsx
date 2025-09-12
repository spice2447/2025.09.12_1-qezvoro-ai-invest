import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, TrendingUp, DollarSign, Globe, BarChart } from "lucide-react";

const TechnologicalPartners = () => {
  const partners = [
    {
      icon: Building,
      name: "Binance",
      category: "Криптовалютный гигант",
      description: "Крупнейшая криптобиржа с ежедневным объёмом свыше $15 млрд. Прямое подключение к Binance гарантирует доступ к более чем 500 торговым парам.",
      features: [
        "Ежедневный объём $15+ млрд",
        "500+ торговых пар",
        "Сверхнизкие спреды",
        "Комиссия от 0,05%"
      ],
      volume: "$15B+",
      color: "warning"
    },
    {
      icon: TrendingUp,
      name: "Coinbase",
      category: "Регулируемая в США",
      description: "Публичная NASDAQ-компания с лицензиями во всех американских штатах. Высочайшие стандарты безопасности и соответствия регуляторным требованиям.",
      features: [
        "Публичная NASDAQ компания",
        "Лицензии во всех штатах США",
        "Coinbase Prime доступ",
        "Эксклюзивные листинги"
      ],
      volume: "NYSE: COIN",
      color: "primary"
    },
    {
      icon: DollarSign,
      name: "Kraken",
      category: "Европейское качество",
      description: "Ветеранская криптобиржа с безупречной репутацией и соблюдением банковских стандартов. Расширенные торговые инструменты и русскоязычная поддержка.",
      features: [
        "Безупречная репутация",
        "Банковские стандарты",
        "Фьючерсы и маржа",
        "Поддержка 24/7"
      ],
      volume: "EU Licensed",
      color: "accent"
    },
    {
      icon: Globe,
      name: "Interactive Brokers",
      category: "Глобальные акции",
      description: "Ведущий брокер с доступом к 135 рынкам в 33 странах. Торговля акциями, опционами, фьючерсами и облигациями по институциональным тарифам.",
      features: [
        "135 рынков в 33 странах",
        "Институциональные тарифы",
        "Все классы активов",
        "Межрыночный арбитраж"
      ],
      volume: "135 Markets",
      color: "success"
    },
    {
      icon: BarChart,
      name: "Bloomberg Terminal",
      category: "Профессиональная аналитика",
      description: "Эксклюзивный доступ к данным терминала Bloomberg стоимостью $24,000 в год, включенный в платформу. Фундментальная аналитика и исследования инвестбанков.",
      features: [
        "Стоимость $24K/год включена",
        "Фундаментальная аналитика",
        "Исследования инвестбанков",
        "Макроэкономические прогнозы"
      ],
      volume: "$24K Value",
      color: "primary"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Технологические <span className="gradient-text">партнеры</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Наши партнеры — глобальные лидеры финтех-экосистемы. Интеграция с ведущими биржами 
            и поставщиками данных обеспечивает оптимальные торговые условия и доступ к премиум-аналитике.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
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
                    <Badge variant="secondary" className={`bg-${partner.color}/20 text-${partner.color}`}>
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
                    <h4 className="text-xs font-semibold text-foreground mb-2">Ключевые преимущества:</h4>
                    {partner.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center gap-2 text-xs"
                      >
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

        {/* Partnership Statistics */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-4xl">
            <h3 className="text-xl font-bold gradient-text mb-4">
              Партнерская экосистема
            </h3>
            <p className="text-muted-foreground mb-6">
              Наша партнерская сеть включает не только торговые площадки, но и банковские институты, 
              регуляторные органы, поставщиков данных и технологических гигантов. 
              Такое сотрудничество позволяет предоставлять розничным инвесторам услуги институционального уровня.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">135</div>
                <div className="text-sm text-muted-foreground">Рынков</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">33</div>
                <div className="text-sm text-muted-foreground">Страны</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Инструментов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">Доступность</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologicalPartners;