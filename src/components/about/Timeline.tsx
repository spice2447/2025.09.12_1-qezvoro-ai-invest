// src/components/about/Timeline.tsx
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Rocket, Gem, Crown, Globe, Building } from "lucide-react";

const icons: { [key: string]: React.ReactNode } = {
  "2021": <Rocket className="w-6 h-6 text-primary" />,
  "2022": <Gem className="w-6 h-6 text-primary" />,
  "2023": <Building className="w-6 h-6 text-primary" />,
  "2024": <Globe className="w-6 h-6 text-primary" />,
  "2025": <Crown className="w-6 h-6 text-primary" />,
};

export default function Timeline({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">{dictionary?.title}</h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-primary/20 h-full border" style={{ left: '50%' }}></div>
          {dictionary?.milestones?.map((item: any, index: number) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                <h3 className="mx-auto font-semibold text-lg text-primary-foreground">{item.year}</h3>
              </div>
              <div className="order-1 w-5/12 px-6 py-4">
                <Card className="card-gradient border-primary/20 glow">
                  <CardHeader>
                    <CardTitle className="mb-2 text-xl font-bold flex items-center gap-2">
                       {icons[item.year] || <Rocket className="w-6 h-6 text-primary" />}
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}