import type { Metadata } from "next";
import ContactHero from "@/components/contacts/ContactHero";
import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import Offices from "@/components/contacts/Offices";
import ContactCTA from "@/components/contacts/ContactCTA";

import { absUrl, baseOpenGraph, buildAlternates } from "@/lib/seo";
import { getMessages } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  const title = `${t.brand?.name ?? "Qezvoro Invest"} — ${t.common?.contacts ?? "Contacts"}`;
  const description = t.hero?.extra ?? "Get in touch with Qezvoro Invest.";
  const url = absUrl(locale, "/contacts");

  return {
    ...baseOpenGraph(title, description, url),
    alternates: buildAlternates(locale, "/contacts"),
  };
}

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Header /> */}
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4 sm:px-6">
            <ContactHero />
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ContactForm />      {/* CLIENT */}
              <div className="space-y-8">
                <ContactInfo />
                <Offices />
              </div>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
