import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Shield, Target } from "lucide-react";

const AITechnologies = () => {
  const technologies = [
    {
      icon: Cpu,
      title: "Предиктивное моделирование",
      description: "Наши нейросети ежесекундно обрабатывают более 10 000 рыночных параметров, обнаруживая скрытые взаимосвязи и прогнозируя ценовые движения с 87% точностью.",
      features: [
        "10,000+ параметров/сек",
        "87% точность предсказаний",
        "Технический анализ",
        "Фундаментальные индикаторы",
        "Макроэкономические тенденции",
        "Социальные настроения"
      ],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Автоматическое управление рисками",
      description: "ИИ самостоятельно вычисляет оптимальные размеры позиций, устанавливает адаптивные уровни стоп-лосса и тейк-профита, учитывая волатильность активов.",
      features: [
        "Адаптивное позиционирование",
        "Автоматический стоп-лосс",
        "Анализ волатильности",
        "Индивидуальный риск-профиль",
        "Защита от эмоций",
        "Контроль просадки"
      ],
      color: "success"
    },
    {
      icon: Target,
      title: "Портфельная оптимизация",
      description: "Алгоритмы непрерывно отслеживают структуру вашего портфеля и предлагают перераспределение активов для достижения максимальной доходности при контролируемом риске.",
      features: [
        "Непрерывный мониторинг",
        "Автоматическая ребалансировка",
        "Максимизация доходности",
        "Контролируемый риск",
        "Диверсификация активов",
        "Оптимальные пропорции"
      ],
      color: "accent"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Технологии <span className="gradient-text">искусственного интеллекта</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Qezvoro AI представляет собой комплекс продвинутых алгоритмов машинного обучения, 
            анализирующий рыночную динамику со скоростью и точностью, недоступной человеку.
          </p>
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
                      Ключевые возможности:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {tech.features.map((feature, featureIndex) => (
                        <Badge 
                          key={featureIndex}
                          variant="secondary"
                          className="justify-start py-2 px-3 bg-secondary/40 border-primary/20"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </Badge>
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
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Принципы работы нашей ИИ-движки
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              За 2 года работы наши алгоритмы обработали более{" "}
              <span className="text-accent font-semibold">15 терабайт</span> рыночных данных, 
              совершили анализ{" "}
              <span className="text-primary font-semibold">50+ миллионов</span> транзакций
              и постоянно совершенствуют прогностические модели на основе машинного обучения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechnologies;