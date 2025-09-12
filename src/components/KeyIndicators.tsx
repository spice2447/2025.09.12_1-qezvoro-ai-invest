import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, DollarSign, TrendingUp, Clock, Building } from "lucide-react";

interface Indicator {
  icon: React.ElementType;
  value: string;
  label: string;
  animatedValue: number;
  suffix: string;
}

const KeyIndicators = () => {
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0, 0]);

  const indicators: Indicator[] = [
    {
      icon: Users,
      value: "50,000+",
      label: "зарегистрированных трейдеров",
      animatedValue: 50000,
      suffix: "+"
    },
    {
      icon: DollarSign,
      value: "$2.3B+",
      label: "совершенных транзакций",
      animatedValue: 2.3,
      suffix: "B+"
    },
    {
      icon: TrendingUp,
      value: "87%",
      label: "успешности ИИ-предсказаний",
      animatedValue: 87,
      suffix: "%"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "непрерывный рыночный мониторинг",
      animatedValue: 24,
      suffix: "/7"
    },
    {
      icon: Building,
      value: "15+",
      label: "интегрированных торговых площадок",
      animatedValue: 15,
      suffix: "+"
    }
  ];

  useEffect(() => {
    const animateCounters = () => {
      indicators.forEach((_, index) => {
        const targetValue = indicators[index].animatedValue;
        const duration = 2000; // 2 seconds
        const steps = 60; // 60 FPS
        const stepValue = targetValue / steps;
        let currentValue = 0;

        const interval = setInterval(() => {
          currentValue += stepValue;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
          }

          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });
        }, duration / steps);
      });
    };

    // Start animation after component mounts
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatValue = (value: number, index: number): string => {
    const indicator = indicators[index];
    
    if (index === 0) { // Users
      return Math.round(value).toLocaleString();
    } else if (index === 1) { // Dollar amount
      return `$${value.toFixed(1)}`;
    } else if (index === 2) { // Percentage
      return Math.round(value).toString();
    } else if (index === 3) { // 24/7
      return Math.round(value).toString();
    } else if (index === 4) { // Platforms
      return Math.round(value).toString();
    }
    
    return value.toString();
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ключевые <span className="gradient-text">показатели</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Достижения в цифрах — доказательство эффективности наших ИИ-решений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:glow"
              >
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
            Все показатели обновляются в режиме реального времени
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyIndicators;