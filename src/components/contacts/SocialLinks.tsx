import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SocialLinks() {
  const links = [
    { label: "Telegram: @QezvoroInvest — новости и аналитика", href: "#" },
    { label: "Twitter / X: @QezvoroAI — глобальные обновления", href: "#" },
    { label: "LinkedIn: Qezvoro Invest — для профессионалов", href: "#" },
  ];
  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Социальные сети</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {links.map((l) => (
          <p key={l.label} className="text-muted-foreground">
            <a className="underline decoration-dotted" href={l.href}>{l.label}</a>
          </p>
        ))}
      </CardContent>
    </Card>
  );
}
