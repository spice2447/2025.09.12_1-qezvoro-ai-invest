import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQCompact() {
  const items = [
    { q: "Сколько времени занимает регистрация?", a: "2–3 минуты. Сразу после регистрации получите доступ к демо-счёту." },
    { q: "Какой минимальный депозит?", a: "$100. Можно начать с демо-счёта $100,000 бесплатно." },
    { q: "Как быстро отвечает поддержка?", a: "Среднее время ответа — менее 2 минут в рабочее время." },
  ];
  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Часто задаваемые вопросы</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((it) => (
          <div key={it.q}>
            <div className="font-semibold">{it.q}</div>
            <div className="text-muted-foreground">{it.a}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
