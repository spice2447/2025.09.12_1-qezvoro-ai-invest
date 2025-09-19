// src/components/reviews/ReviewsHero.tsx
import { Star, Users, Briefcase, BarChart } from "lucide-react";

// Placeholder data, to be replaced by dictionary
const trustIndicators = [
  { icon: <Star className="w-8 h-8 text-primary" />, value: "4.9/5.0", label: "Average Rating" },
  { icon: <Users className="w-8 h-8 text-primary" />, value: "94%", label: "Client Recommendations" },
  { icon: <Briefcase className="w-8 h-8 text-primary" />, value: "15+", label: "Strategic Alliances" },
  { icon: <BarChart className="w-8 h-8 text-primary" />, value: "$2.3B+", label: "Capital Under Management" },
];

export default function ReviewsHero({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          {dictionary?.headline ?? "Qezvoro Reviews — Customer Reviews and Affiliate Network"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
          {dictionary?.subheadline ?? "Over 50,000 investors trust Qezvoro Invest with their capital"}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {trustIndicators.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-4 rounded-lg">
              {item.icon}
              <p className="text-3xl font-bold mt-2">{item.value}</p>
              <p className="text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}