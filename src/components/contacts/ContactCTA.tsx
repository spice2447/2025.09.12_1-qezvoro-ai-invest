'use client'
import { Button } from "@/components/ui/button";
import { useModal } from "../modal/ModalProvider";
import QuickRegistrationForm from "../forms/QuickRegistrationForm";

export default function ContactCTA({ t, locale }: { t: any; locale: string }) {
  const { openModal, closeModal } = useModal();
  const dictionary = t.contactPage.cta

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Здесь можно добавить логику для кнопки, например, открыть модальное окно
    openModal({
      // title: t?.common?.ctaStart ?? "Начать сейчас",
      title: "",
      // description: t?.common?.ctaDescription ?? "Свяжитесь с нами, чтобы начать ваше инвестиционное путешествие с Qezvoro.",
      description: "",
      content: <QuickRegistrationForm t={t} locale={locale} />,
      footer: (
        <Button onClick={closeModal} className="gradient-bg hover:opacity-90 transition-opacity">
          {t?.common?.close ?? "Закрыть"}
        </Button>
      ),
      dismissible: true,
      contentClassName: "sm:max-w-lg",
    });
  }
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">{dictionary.title}</h2>
          <p className="text-lg text-muted-foreground mb-8">
            {dictionary.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleButtonClick} size="lg" className="gradient-bg hover:opacity-90 transition-opacity">
              {dictionary.mainButton}
            </Button>
            <Button onClick={handleButtonClick} size="lg" variant="outline">
              {dictionary.demoButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
