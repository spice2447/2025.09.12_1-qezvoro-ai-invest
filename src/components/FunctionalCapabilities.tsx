import {
  Brain,
  Globe,
  Smartphone,
  Zap,
  Cpu,
  Shield,
  Target,
  Award,
  Users,
  LucideIcon,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Capability {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

type Props = { t: any };

const FunctionalCapabilities = ({ t }: Props) => {
  const tt = t?.features;

  const capabilities: Capability[] = (tt.items ?? []).map(
    (item: any, index: number) => ({
      icon: [Globe, Brain, Zap, Smartphone][index] ?? Globe,
      title: item.title,
      description: item.text,
      features: item.features ?? [],
    }),
  );

  const bottomTitle =
    tt?.bottomTitle ?? "Современный финансовый мир";
  const bottomText =
    tt?.bottomText ??
    "Требует не только экспертизы, но и молниеносной обработки информационных потоков. Qezvoro Trading объединяет классические инвестиционные подходы с возможностями искусственного интеллекта.";

  return (
    <section id="platform" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {tt.title ? (
              <>
                {tt.title.split(" ")[0]} <span className="gradient-text">{tt.title.split(" ").slice(1).join(" ")}</span>
              </>
            ) : "Qezvoro создаёт экосистему умного инвестирования"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">{tt.intro ?? "Интеграция классических и инновационных инструментов в единое пространство с мощными ИИ-вычислениями и глубокой аналитикой."}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((capability: Capability, index: number) => {
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <capability.icon className="w-8 h-8 text-primary" />
                    <CardTitle>{capability.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {capability.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {(capability.features ?? []).map(
                      (feature: string, featureIndex: number) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
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
