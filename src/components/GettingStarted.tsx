import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, CreditCard, Bot, ArrowRight, Clock, Shield, Zap } from "lucide-react";

type Props = { t: any; locale?: string };

const GettingStarted = ({ t, locale }: Props) => {
  const tt = t?.gettingStarted ?? {};

  const steps =
    tt.steps ??
    [
      {
        icon: UserPlus,
        title: "Быстрая регистрация",
        description:
          "Укажите email и телефон, пройдите экспресс-подтверждение через загрузку документов или видеозвонок.",
        details: ["2 минуты на регистрацию", "Автоматизированный процесс", "Никаких сложных форм", "Мгновенная активация"],
        time: "2 мин",
      },
      {
        icon: CreditCard,
        title: "Пополнение счета",
        description:
          "Банковские карты, переводы, PayPal, криптовалюты, e-кошельки. Мгновенное зачисление средств.",
        details: ["Множество способов пополнения", "Мгновенное зачисление", "Первое пополнение от $100", "Безопасные транзакции"],
        time: "1 мин",
      },
      {
        icon: Bot,
        title: "Активация ИИ-ассистента",
        description:
          "Пройдите быстрый тест профиля, получите персональные рекомендации и начните торговать с поддержкой ИИ.",
        details: ["Персонализированный профиль", "Индивидуальные рекомендации", "ИИ-поддержка 24/7", "Немедленный старт торговли"],
        time: "3 мин",
      },
    ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {(tt.title ?? "Начало работы —")}{" "}
            <span className="gradient-text">{tt.titleAccent ?? "3 простых шага"}</span>
          </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {tt.subtitle ?? "От регистрации до первой ИИ-рекомендации — менее 6 минут. Без сложностей и бюрократии."}
        </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {steps.map((step: any, index: number) => {
              const Icon = step.icon ?? [UserPlus, CreditCard, Bot][index] ?? UserPlus;
              return (
                <div key={index} className="relative">
                  <Card
                    className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-500 group hover:glow animate-fade-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {(tt.stepLabel ?? "Шаг")} {index + 1}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-accent">
                          <Clock className="w-4 h-4" />
                          {step.time}
                        </div>
                      </div>

                      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>

                      <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>

                      <div className="space-y-2">
                        {(step.details ?? []).map((d: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-success rounded-full flex-shrink-0" />
                            <span className="text-muted-foreground text-left">{d}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-4xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                {tt.ctaTitle ?? "Готовы начать ИИ-инвестирование?"}
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                {tt.ctaText ?? "Присоединяйтесь к 50,000+ инвесторов, уже использующих преимущества искусственного интеллекта."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                <Button size="lg" className="gradient-bg hover:opacity-90 transition-all glow">
                  <Zap className="w-5 h-5 mr-2" />
                  {tt.ctaButton ?? "Начать сейчас"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <div className="text-sm text-muted-foreground space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-success" />
                    <span>{tt.bulletSafe ?? "100% безопасно и лицензировано"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-success" />
                    <span>{tt.bulletTime ?? "Активация за 6 минут"}</span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-xs text-muted-foreground mb-2">
                  {tt.totalTimeLabel ?? "Весь процесс займет:"}
                </div>
                <div className="text-2xl font-bold text-primary">
                  {tt.totalTimeValue ?? "≈ 6 минут"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
