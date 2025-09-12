import type { Metadata } from "next";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contacts/ContactHero";
import ContactForm from "@/components/contacts/ContactForm";
import ContactInfo from "@/components/contacts/ContactInfo";
import Offices from "@/components/contacts/Offices";
import ContactCTA from "@/components/contacts/ContactCTA";

export const metadata: Metadata = {
  title: "Contacts — Qezvoro",
  description: "How to contact us",
  alternates: { canonical: "/contacts" } // опционально
};

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
