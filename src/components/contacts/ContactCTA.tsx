import { Button } from "@/components/ui/button";

export default function ContactCTA({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{dictionary.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {dictionary.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity">
              {dictionary.mainButton}
            </Button>
            <Button size="lg" variant="outline">
              {dictionary.demoButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
