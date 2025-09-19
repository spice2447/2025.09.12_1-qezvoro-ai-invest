import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = { t: any; locale?: string };

const FAQ = ({ t, locale }: Props) => {
  const tt = t?.faq ?? {};

  // Если словарь не передал items — используем русские дефолты
  const faqs =
    tt.items ??
    [
      {
        q: "Что представляет собой Qezvoro Invest и каковы ваши отличия?",
        a: "Qezvoro Invest — инновационная инвестиционная платформа, объединяющая традиционные финансовые инструменты (акции, ETF, облигации) с криптовалютой в единой AI-управляемой экосистеме. Наше главное отличие — собственные алгоритмы машинного обучения, анализирующие более 10,000 рыночных параметров в реальном времени и генерирующие персонализированные сигналы с точностью 87%.",
      },
      {
        q: "Насколько надежен ваш ИИ и можно ли доверять его решениям?",
        a: "Наш ИИ основан на глубоких нейронных сетях, обученных на 15-летней истории рынков. Алгоритмы непрерывно самообучаются и адаптируются. За 2 года торговые сигналы Qezvoro показали точность 87%, что выше показателей большинства аналитиков.",
      },
      {
        q: "Безопасно ли размещать средства на платформе?",
        a: "Безопасность — приоритет. Лицензии в 12 юрисдикциях (включая SEC, FCA, CySEC), сегрегированные счета, страхование до $250,000, холодное хранение криптоактивов, МФА и шифрование. Аудит PwC каждые 6 месяцев.",
      },
      {
        q: "Какой минимальный депозит для старта?",
        a: "Минимальный депозит — $100. Для диверсификации рекомендуем от $1,000. Демо-счет с $100,000 — для тестирования стратегий.",
      },
      {
        q: "Подходит ли Qezvoro новичкам?",
        a: "Да. Пошаговое обучение, интерактивные курсы, демо-режим, наставник в первый месяц и автоматические ИИ-рекомендации.",
      },
      {
        q: "Можно ли сосредоточиться только на криптовалюте или только на акциях?",
        a: "Да. Полная гибкость по классам активов: криптовалюты, акции, ETF или их комбинации. Сигналы есть и для межрыночных стратегий.",
      },
      {
        q: "Какие комиссии взимаются?",
        a: "Прозрачные тарифы: акции — от $0.01/акция, крипто — от 0.05%, конвертация — межбанк +0.1%, вывод — бесплатно до $10,000/мес. ИИ-подписка: $0–99/мес.",
      },
      {
        q: "В каких странах доступен Qezvoro?",
        a: "Доступно в 95+ странах. 12 языков поддержки, круглосуточный сервис. География регулярно расширяется.",
      },
    ].map(({ q, a }) => ({ question: q, answer: a }));

  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {(tt.title ?? "Часто задаваемые")}{" "}
            <span className="gradient-text">{tt.titleAccent ?? "вопросы"}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {tt.subtitle ??
              "Ответы на ключевые вопросы о платформе Qezvoro Invest, безопасности и функциональности."}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq: any, i: number) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="card-gradient border border-primary/20 rounded-lg px-6 animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6">
                  {faq.question ?? faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer ?? faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-6">
            <h3 className="text-lg font-bold gradient-text mb-2">
              {tt.support?.title ?? "Не нашли ответ на свой вопрос?"}
            </h3>
            <p className="text-muted-foreground mb-4">
              {tt.support?.subtitle ?? "Служба поддержки работает 24/7 и готова помочь"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
              <div>📧 {tt.support?.email ?? "support@qezvoro.com"}</div>
              <div>💬 {tt.support?.chat ?? "Онлайн-чат на сайте"}</div>
              <div>📞 {tt.support?.phone ?? "+1 (555) 123-4567"}</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FAQ;
