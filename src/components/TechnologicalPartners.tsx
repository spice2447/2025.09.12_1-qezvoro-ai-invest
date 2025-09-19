import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, TrendingUp, DollarSign, Globe, BarChart, LucideIcon } from "lucide-react";
import Image from "next/image";

type Props = { t: any };


type Partner = {
  icon: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  volume: string;
  color?: "primary" | "secondary" | "warning" | "success" | "accent";
}

const colorClasses: Record<string, string> = {
  warning: "bg-yellow-500/20 text-yellow-700",
  primary: "bg-primary/20 text-primary",
  accent: "bg-accent/20 text-accent",
  success: "bg-green-500/20 text-green-700",
};

const TechnologicalPartners = ({ t }: { t: any }) => {
  const tt = t?.partners;

  const partners: Partner[] = (tt.items ?? []).map(
    (item: any, index: number) => ({
      icon: [
        '/assets/partners/binance.png',
        '/assets/partners/coinbase.png',
        '/assets/partners/kraken.png',
        '/assets/partners/interactive_brokers.png',
        '/assets/partners/bloomberg.png'
      ][index] ?? Building,
      name: item.name,
      category: item.name,
      description: item.text,
      features: item.features ?? [],
      volume: "",
      color: "primary",
    }),
  );

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {(tt.title ?? "Наши партнёры — глобальные лидеры")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {tt.subtitle ??
              "Интеграция с ведущими биржами и поставщиками данных обеспечивает оптимальные условия и доступ к премиум-аналитике."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => {
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    {/* <partner.icon className="w-8 h-8 text-primary" /> */}
                    <Image
                      src={partner.icon}
                      alt={partner.name}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <CardTitle>{partner.name}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-foreground mb-2">
                      {tt.featuresTitle ?? "Ключевые преимущества:"}
                    </h4>
                    {(partner.features ?? []).map((feature: string, i: number) => (
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

        <div className="mt-20 text-center max-w-3xl mx-auto">
          {/* Stats */}
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 max-w-4xl">
            <h3 className="text-xl font-bold gradient-text mb-4">{tt.ecoTitle ?? "Партнёрская экосистема"}</h3>
            <p className="text-muted-foreground mb-6">
              {tt.ecoText ??
                "Сеть включает торговые площадки, банки, регуляторов, поставщиков данных и технологических лидеров — институциональный уровень для розничных инвесторов."}
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
                <div className="text-2xl font-bold gradient-text">{tt.stats?.uptime ?? "24/7"}</div>
                <div className="text-sm text-muted-foreground">{tt.statsLabels?.uptime ?? "Доступность"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologicalPartners;
