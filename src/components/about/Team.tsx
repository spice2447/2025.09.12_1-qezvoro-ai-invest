// src/components/about/Team.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Briefcase, ShieldCheck, Palette } from "lucide-react";

export default function Team({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{dictionary?.title}</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
          {dictionary?.founders?.map((founder: any, index: number) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={'/placeholder.svg'} alt={founder.name} width={120} height={120} className="rounded-full mb-4 border-4 border-primary/30" />
              <h3 className="text-xl font-bold">{founder.name}</h3>
              <p className="text-primary font-semibold">{founder.role}</p>
              <p className="text-sm text-muted-foreground mt-2 mb-4">{founder.bio}</p>
              <p className="italic border-l-4 border-primary/50 pl-4">"{founder.quote}"</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">{dictionary?.developmentTeam?.title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center"><BrainCircuit className="w-10 h-10 mb-2 text-primary"/><p>25 ML Engineers</p><span className="text-xs text-muted-foreground">Google, Microsoft</span></div>
            <div className="flex flex-col items-center"><Briefcase className="w-10 h-10 mb-2 text-primary"/><p>15 Financial Analysts</p><span className="text-xs text-muted-foreground">Goldman Sachs, BlackRock</span></div>
            <div className="flex flex-col items-center"><ShieldCheck className="w-10 h-10 mb-2 text-primary"/><p>12 Cybersecurity Experts</p><span className="text-xs text-muted-foreground">Top Banks</span></div>
            <div className="flex flex-col items-center"><Palette className="w-10 h-10 mb-2 text-primary"/><p>8 Product Designers</p><span className="text-xs text-muted-foreground">Apple, Stripe</span></div>
        </div>
      </div>
    </section>
  );
}