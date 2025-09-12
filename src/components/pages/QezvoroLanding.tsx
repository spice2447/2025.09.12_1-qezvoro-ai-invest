'use client';

import { useEffect } from "react";
import HeroSection from "src/components/HeroSection";
import RegistrationForm from "src/components/RegistrationForm";
import KeyIndicators from "src/components/KeyIndicators";
import FunctionalCapabilities from "src/components/FunctionalCapabilities";
import AITechnologies from "src/components/AITechnologies";
import CompetitiveAdvantages from "src/components/CompetitiveAdvantages";
import TechnologicalPartners from "src/components/TechnologicalPartners";
import CustomerTestimonials from "src/components/CustomerTestimonials";
import FAQ from "src/components/FAQ";
import GettingStarted from "src/components/GettingStarted";
import FinalCTA from "src/components/FinalCTA";

type QezvoroLandingProps = { t: any; locale: string };

const QezvoroLanding = ({ t, locale }: QezvoroLandingProps) => {
  useEffect(() => {
    const brandName = t?.brand?.name ?? "Qezvoro Invest";
    const tagline   = t?.brand?.tagline ?? "ИИ-платформа для инвестирования";
    document.title  = `${brandName} — ${tagline}`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        t?.seo?.description ??
          "Qezvoro Invest — ИИ-платформа для инвестирования с 87% точностью прогнозов. 50,000+ трейдеров, $2.3B+ транзакций."
      );
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", brandName + " — " + tagline);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        t?.seo?.ogDescription ??
          "Революционная ИИ-платформа с 87% точностью прогнозов. 50,000+ успешных трейдеров доверяют нашим алгоритмам."
      );
    }
  }, [t]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection t={t} />
        <RegistrationForm t={t} locale={locale} />
        <KeyIndicators t={t} />
        <FunctionalCapabilities t={t} />
        <AITechnologies t={t} />
        <CompetitiveAdvantages t={t} />
        <TechnologicalPartners t={t} />
        <CustomerTestimonials t={t} />
        <FAQ t={t} />
        <GettingStarted t={t} />
        <FinalCTA t={t} />
      </main>
    </div>
  );
};

export default QezvoroLanding;
