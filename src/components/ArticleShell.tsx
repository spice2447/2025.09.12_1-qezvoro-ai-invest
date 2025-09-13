import React from "react";

export default function ArticleShell({
  title,
  description,
  updatedAt,
  children,
}: {
  title: string;
  description?: string;
  updatedAt?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="relative">
      {/* фоновой градиент (лёгкий акцент) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <section className="container mx-auto px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl py-12 md:py-16 lg:py-20">
          <header className="mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
            {description && <p className="text-muted-foreground mt-2">{description}</p>}
            {updatedAt && <p className="text-sm opacity-70 mt-1">Обновлено: {updatedAt}</p>}
          </header>

          <div className="rounded-2xl border bg-card/60 shadow-sm backdrop-blur-sm">
            <div className="p-5 md:p-8 lg:p-10">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
