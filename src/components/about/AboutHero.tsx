// src/components/about/AboutHero.tsx
export default function AboutHero({ dictionary }: { dictionary: any }) {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          {dictionary?.headline ?? "Qezvoro Invest — Innovative AI Investing Platform"}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          {dictionary?.subheadline ?? "Transforming financial technology with artificial intelligence"}
        </p>
        <p className="text-md max-w-4xl mx-auto">
          {dictionary?.intro ?? "We are building a new generation of investment technologies... Since 2021, our expert team has been creating advanced algorithmic solutions that have already ensured the success of over 50,000 traders worldwide."}
        </p>
      </div>
    </section>
  );
}