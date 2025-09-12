import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Offices() {
  const offices = [
    { title: "Лондон (Главный офис)", lines: ["1 Canary Wharf", "London E14 5AB, UK"] },
    { title: "Нью-Йорк", lines: ["350 Fifth Avenue", "New York, NY 10118, USA"] },
    { title: "Сингапур", lines: ["1 Marina Bay", "Singapore 018989"] },
  ];

  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Офисы</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {offices.map((o) => (
          <div key={o.title} className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">{o.title}</h3>
              <p className="text-muted-foreground text-sm">
                {o.lines.map((l, i) => (
                  <span key={i}>
                    {l}{i === o.lines.length - 1 ? "" : <><br/></>}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
