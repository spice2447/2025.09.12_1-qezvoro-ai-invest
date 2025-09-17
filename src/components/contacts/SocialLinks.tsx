import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SocialLinks({ dictionary }: { dictionary: any }) {
  const links = dictionary.links;
  return (
    <Card className="border-border/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-2xl">{dictionary.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {links.map((l: any) => (
          <p key={l.label} className="text-muted-foreground">
            <a className="underline decoration-dotted" href={l.href}>{l.label}</a>
          </p>
        ))}
      </CardContent>
    </Card>
  );
}
