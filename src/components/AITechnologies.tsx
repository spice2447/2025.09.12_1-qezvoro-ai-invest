import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, Cpu, Shield, Target } from "lucide-react";

interface Technology {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const AITechnologies = ({ t }: { t: any }) => {
  const tt = t?.aiTech;

  const technologies: Technology[] = (tt.items ?? []).map(
    (item: any, index: number) => ({
      icon: [Cpu, Shield, Target][index] ?? Cpu,
      title: item.title,
      description: item.text,
      features: item.features ?? [],
    }),
  );

  const bottomTitle =
    tt?.bottomTitle ?? "Как мы обучаем модели";
  const bottomText =
    tt?.bottomText ??
    "За 2 года работы алгоритмы обработали более 15 ТБ данных, проанализировали 50+ млн транзакций и продолжают улучшать прогнозы.";

  return (
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech: Technology, index: number) => {
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <tech.icon className="w-8 h-8 text-primary" />
                    <CardTitle>{tech.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground mb-3">
                      {tt.featuresTitle ?? "Ключевые возможности:"}
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {(tech.features ?? []).map((feature: string, i: number) => (
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

        <div className="mt-20 text-center">
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
