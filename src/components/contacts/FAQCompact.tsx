import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQCompact({ dictionary }: { dictionary: any }) {
  const items = dictionary.items;
  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{dictionary.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((it: any) => (
          <div key={it.q}>
            <div className="font-semibold">{it.q}</div>
            <div className="text-muted-foreground">{it.a}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
