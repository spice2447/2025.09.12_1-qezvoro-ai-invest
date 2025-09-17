import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

export default function Offices({ dictionary }: { dictionary: any }) {
  const offices = dictionary.items;

  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{dictionary.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {offices.map((o: any) => (
          <div key={o.title} className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{o.title}</h3>
              <p className="text-muted-foreground text-sm">
                {o.address.map((l: string, i: number) => (
                  <span key={i}>
                    {l}{i === o.address.length - 1 ? "" : <><br /></>}
                  </span>
                ))}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                <Clock className="w-4 h-4" />
                <span>{o.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
