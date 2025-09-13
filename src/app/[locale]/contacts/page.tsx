import type { Metadata } from "next";
import ContactHero from "@/components/contacts/ContactHero";
import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import Offices from "@/components/contacts/Offices";
import ContactCTA from "@/components/contacts/ContactCTA";
import SocialLinks from "@/components/contacts/SocialLinks";
import FAQCompact from "@/components/contacts/FAQCompact";
import SecurityBadges from "@/components/contacts/SecurityBadges";

import { absUrl, baseOpenGraph, buildAlternates } from "@/lib/seo";
import { getMessages } from "@/i18n";

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  const title = `${t.brand?.name ?? "Qezvoro Invest"} — ${t.common?.contacts ?? "Contacts"}`;
  const description = "Начните инвестировать с ИИ за 3 минуты. Регистрация бесплатна, демо-счёт $100,000.";
  const url = absUrl(locale, "/contacts");

  return {
    ...baseOpenGraph(title, description, url),
    alternates: buildAlternates(locale, "/contacts"),
  };
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6">
            <ContactHero />
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ContactForm />
              <div className="space-y-8">
                <ContactInfo />
                <Offices />
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <FAQCompact />
          </div>
        </section>

        <SecurityBadges />
        <ContactCTA />
      </main>
    </div>
  );
}
