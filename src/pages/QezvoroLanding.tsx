import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import KeyIndicators from "@/components/KeyIndicators";
import FunctionalCapabilities from "@/components/FunctionalCapabilities";
import AITechnologies from "@/components/AITechnologies";
import CompetitiveAdvantages from "@/components/CompetitiveAdvantages";
import TechnologicalPartners from "@/components/TechnologicalPartners";
import CustomerTestimonials from "@/components/CustomerTestimonials";
import PricingPlans from "@/components/PricingPlans";
import FAQ from "@/components/FAQ";
import GettingStarted from "@/components/GettingStarted";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const QezvoroLanding = () => {
  useEffect(() => {
    // Update page title and meta tags
    document.title = "Qezvoro Invest — Революционная ИИ-платформа для современного инвестирования";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", 
        "Qezvoro Invest — ИИ-платформа для инвестирования с 87% точностью прогнозов. 50,000+ трейдеров, $2.3B+ транзакций. Начните с $100, получите инструменты хедж-фондов. Лицензировано SEC, FCA, CySEC."
      );
    }

    // Add Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Qezvoro Invest — ИИ-платформа для инвестирования");
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", 
        "Революционная ИИ-платформа с 87% точностью прогнозов. 50,000+ успешных трейдеров доверяют нашим алгоритмам."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <RegistrationForm />
        <KeyIndicators />
        <FunctionalCapabilities />
        <AITechnologies />
        <CompetitiveAdvantages />
        <TechnologicalPartners />
        <CustomerTestimonials />
        <PricingPlans />
        <FAQ />
        <GettingStarted />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default QezvoroLanding;