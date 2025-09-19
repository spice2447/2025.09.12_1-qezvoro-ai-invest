import type { Metadata } from "next";
import { getMessages } from "@/i18n";
import { absUrl, baseOpenGraph, buildAlternates } from "@/lib/seo";
import { LocalePageProps } from "../layout";

// Импорт новых компонентов для страницы "О нас"
import AboutHero from "@/components/about/AboutHero";
import Timeline from "@/components/about/Timeline";
// import AboutMission from "@/components/about/AboutMission";
import Team from "@/components/about/Team";
// import Technology from "@/components/about/Technology";
// import Awards from "@/components/about/Awards";
// import Licensing from "@/components/about/Licensing";
// import Transparency from "@/components/about/Transparency";
// import StrategicPartnerships from "@/components/about/StrategicPartnerships";
// import SocialResponsibility from "@/components/about/SocialResponsibility";
import Roadmap from "@/components/about/Roadmap";
import AboutCTA from "@/components/about/AboutCTA";

export async function generateMetadata({
  params,
}: {params: Promise<{ locale: string }>}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  const title = `${t.aboutPage?.meta?.title ?? "About Us"} — ${t.brand?.name ?? "Qezvoro Invest"}`;
  const description = t.aboutPage?.meta?.description ?? "Learn about Qezvoro Invest's history, mission, team, and the technology driving our AI-powered investment platform.";
  const url = absUrl(locale, "/about");

  return {
    ...baseOpenGraph(title, description, url),
    alternates: buildAlternates(locale, "/about"),
  };
}

export default async function AboutPage({ params }: {params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const d = t.aboutPage; // Словарь для страницы "О нас"

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">
        <AboutHero dictionary={d?.hero} />
        <Timeline dictionary={d?.timeline} />
        {/* <AboutMission dictionary={d?.mission} /> */}
        <Team dictionary={d?.team} />
        {/* <Technology dictionary={d?.technology} />
        <Awards dictionary={d?.awards} />
        <Licensing dictionary={d?.licensing} />
        <Transparency dictionary={d?.transparency} />
        <StrategicPartnerships dictionary={d?.partnerships} />
        <SocialResponsibility dictionary={d?.csr} /> */}
        <Roadmap dictionary={d?.roadmap} />
        <AboutCTA dictionary={d?.cta} />
      </main>
    </div>
  );
}