import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Shield, Target } from "lucide-react";

type Props = { t: any };

const AITechnologies = ({ t }: Props) => {
  const title =
    t?.ai?.title ?? "Технологии искусственного интеллекта";
  const subtitle =
    t?.ai?.subtitle ??
    "Qezvoro AI — это комплекс продвинутых алгоритмов машинного обучения, анализирующий рыночную динамику со скоростью и точностью, недоступной человеку.";

  const bottomTitle =
    t?.ai?.extraTitle ?? "Принципы работы нашей ИИ-движки";
  const bottomText =
    t?.ai?.extraText ??
    "За 2 года наши алгоритмы обработали более 15 ТБ рыночных данных и изучили 50+ млн транзакций, постоянно улучшая модели.";

  const technologies = [
    {
      icon: Cpu,
      title: t?.ai?.cards?.predictive?.title ?? "Предиктивное моделирование",
      description:
        t?.ai?.cards?.predictive?.desc ??
        "Наши нейросети ежесекундно обрабатывают более 10 000 параметров, выявляя скрытые связи и предсказывая движения с точностью 87%.",
      features:
        t?.ai?.cards?.predictive?.features ?? [
          "10,000+ параметров/сек",
          "87% точность предсказаний",
          "Технический анализ",
          "Фундаментальные индикаторы",
          "Макроэкономические тенденции",
          "Социальные настроения",
        ],
    },
    {
      icon: Shield,
      title: t?.ai?.cards?.risk?.title ?? "Автоматическое управление рисками",
      description:
        t?.ai?.cards?.risk?.desc ??
        "ИИ рассчитывает размеры позиций, стоп-лоссы/тейк-профиты с учётом волатильности и индивидуального риск-профиля.",
      features:
        t?.ai?.cards?.risk?.features ?? [
          "Адаптивное позиционирование",
          "Автоматический стоп-лосс",
          "Анализ волатильности",
          "Индивидуальный риск-профиль",
          "Защита от эмоций",
          "Контроль просадки",
        ],
    },
    {
      icon: Target,
      title: t?.ai?.cards?.portfolio?.title ?? "Портфельная оптимизация",
      description:
        t?.ai?.cards?.portfolio?.desc ??
        "Алгоритмы непрерывно мониторят структуру портфеля и предлагают ребалансировку для максимизации доходности при контролируемом риске.",
      features:
        t?.ai?.cards?.portfolio?.features ?? [
          "Непрерывный мониторинг",
          "Автоматическая ребалансировка",
          "Максимизация доходности",
          "Контролируемый риск",
          "Диверсификация активов",
          "Оптимальные пропорции",
        ],
    },
  ];

  return (
    <section className="py-24">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <Card
                key={index}
                className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:glow animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{tech.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground mb-3">
                      {t?.ai?.featuresTitle ?? "Ключевые возможности:"}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tech.features.map((feature: string, i: number) => (
                        <span
                          key={i}
                          className="justify-start py-2 px-3 bg-secondary/40 border-primary/20 rounded-md text-sm inline-flex items-center"
                        >
                          <span className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold gradient-text mb-4">{bottomTitle}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">{bottomText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechnologies;
