export default function ContactHero({ dictionary }: { dictionary: any }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text">
        {dictionary.title}
      </h1>
      <p className="text-lg text-muted-foreground">
        {dictionary.subtitle}
      </p>
    </div>
  );
}
