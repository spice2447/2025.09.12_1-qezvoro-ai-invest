import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Clock, Building } from "lucide-react";

type Props = { t: any };

interface Indicator {
  icon: React.ElementType;
  label: string;
  animatedValue: number;
  suffix: string;
}

const KeyIndicators = ({ t }: Props) => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0, 0]);

  const title =
    t?.keyIndicators?.title ?? "Ключевые показатели";
  const subtitle =
    t?.keyIndicators?.subtitle ?? "Достижения в цифрах — доказательство эффективности наших ИИ-решений";
  const liveNote =
    t?.keyIndicators?.liveNote ?? "Все показатели обновляются в режиме реального времени";

  const indicators: Indicator[] = [
    { icon: Users,   label: t?.keyIndicators?.items?.traders ?? "зарегистрированных трейдеров", animatedValue: 50000, suffix: "+" },
    { icon: DollarSign, label: t?.keyIndicators?.items?.volume  ?? "совершенных транзакций",     animatedValue: 2.3,   suffix: "B+" },
    { icon: TrendingUp, label: t?.keyIndicators?.items?.accuracy ?? "успешности ИИ-предсказаний", animatedValue: 87,    suffix: "%" },
    { icon: Clock,      label: t?.keyIndicators?.items?.monitor  ?? "непрерывный рыночный мониторинг", animatedValue: 24, suffix: "/7" },
    { icon: Building,   label: t?.keyIndicators?.items?.venues   ?? "интегрированных торговых площадок", animatedValue: 15, suffix: "+" },
  ];

  useEffect(() => {
    const animateCounters = () => {
      indicators.forEach((ind, index) => {
        const target = ind.animatedValue;
        const duration = 2000;
        const steps = 60;
        const step = target / steps;
        let current = 0;
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          setAnimatedValues(prev => { const next = [...prev]; next[index] = current; return next; });
        }, duration / steps);
      });
    };
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatValue = (value: number, index: number): string => {
    if (index === 0) return Math.round(value).toLocaleString();
    if (index === 1) return `$${value.toFixed(1)}`;
    return Math.round(value).toString();
  };

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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <Card key={index} className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:glow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2 animate-counter">
                    {formatValue(animatedValues[index], index)}{indicator.suffix}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {indicator.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            {liveNote}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyIndicators;
