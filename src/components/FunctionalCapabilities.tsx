import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Brain, Zap, Smartphone } from "lucide-react";

type Props = { t: any };

const FunctionalCapabilities = ({ t }: Props) => {
  const title =
    t?.functional?.title ?? "Функциональные возможности";
  const subtitle =
    t?.functional?.subtitle ??
    "Qezvoro Invest создает комплексную экосистему для умного инвестирования. Наша технологическая платформа интегрирует классические и инновационные финансовые инструменты в единое пространство.";

  const bottomTitle =
    t?.functional?.extraTitle ?? "Современный финансовый мир";
  const bottomText =
    t?.functional?.extraText ??
    "Требует не только экспертизы, но и молниеносной обработки информационных потоков. Qezvoro Trading объединяет классические инвестиционные подходы с революционными возможностями искусственного интеллекта.";

  const capabilities = [
    {
      icon: Globe,
      title: t?.functional?.cards?.universal?.title ?? "Универсальная торговая среда",
      description: t?.functional?.cards?.universal?.desc ??
        "Операции с глобальными акциями, криптоактивами, криптовалютными фондами, ресурсами и валютными парами через один интерфейс.",
      features: t?.functional?.cards?.universal?.features ?? [
        "15+ международных бирж", "500+ торговых инструментов", "Диверсификация портфеля", "Минимальные комиссии",
      ],
    },
    {
      icon: Brain,
      title: t?.functional?.cards?.analytics?.title ?? "Интеллектуальная аналитика и прогнозирование",
      description: t?.functional?.cards?.analytics?.desc ??
        "Персонализированные торговые сигналы, созданные на основе анализа статистических данных, технических закономерностей и рыночных настроений.",
      features: t?.functional?.cards?.analytics?.features ?? [
        "87% точность прогнозов", "10,000+ параметров анализа", "Машинное обучение", "Реальное время",
      ],
    },
    {
      icon: Zap,
      title: t?.functional?.cards?.execution?.title ?? "Мгновенное выполнение операций",
      description: t?.functional?.cards?.execution?.desc ??
        "Прямая интеграция с топовыми международными биржами обеспечивает быстрое выполнение заказов без проскальзывания.",
      features: t?.functional?.cards?.execution?.features ?? [
        "Скорость <50мс", "Прямое подключение к биржам", "Честное ценообразование", "Отсутствие проскальзывания",
      ],
    },
    {
      icon: Smartphone,
      title: t?.functional?.cards?.ui?.title ?? "Удобный пользовательский интерфейс",
      description: t?.functional?.cards?.ui?.desc ??
        "Профессиональный функционал в интуитивной оболочке. Кастомизируемые панели управления и мобильное приложение.",
      features: t?.functional?.cards?.ui?.features ?? [
        "Адаптивный дизайн", "Торговля одним кликом", "Настраиваемые панели", "Мобильное приложение 24/7",
      ],
    },
  ];

  return (
    <section id="platform" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title.split(" ").length ? (
              <>
                {title.split(" ")[0]} <span className="gradient-text">{title.split(" ").slice(1).join(" ")}</span>
              </>
            ) : title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card
                key={index}
                className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:glow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{capability.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature: string, featureIndex: number) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-xl font-semibold gradient-text mb-4">{bottomTitle}</h3>
            <p className="text-muted-foreground">{bottomText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalCapabilities;
