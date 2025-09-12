import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, Award, Brain, Globe, Shield, Users } from "lucide-react";

interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
}

const CompetitiveAdvantages = ({ t }: { t: any }) => {
  const tt = t?.advantages;

  const advantages: Advantage[] = (tt.bullets ?? []).map(
    (item: any, index: number) => ({
      icon: [Brain, Globe, Shield, Users, Award][index] ?? Brain,
      title: item.title,
      description: item.text,
      highlights: item.highlights ?? [],
    }),
  );

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv: Advantage, index: number) => {
            return (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <adv.icon className="w-8 h-8 text-primary" />
                    <CardTitle>{adv.title}</CardTitle>
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                    {adv.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {(adv.highlights ?? []).map((h: string, i: number) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="w-full justify-start py-2 px-3 bg-secondary/40 border-primary/20 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-success rounded-full mr-2 flex-shrink-0" />
                        {h}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-success/20 to-primary/20 border border-success/30 rounded-full px-8 py-4">
            <div className="flex items-center gap-2 text-success font-semibold">
              <Award className="w-5 h-5" />
              <span>{tt.banner ?? "Для 99% инвесторов такие преимущества недоступны"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages;
