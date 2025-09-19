import type { Metadata } from "next";
import { getMessages } from "@/i18n";
import { absUrl, baseOpenGraph, buildAlternates } from "@/lib/seo";
import { LocalePageProps } from "../layout";

// Импорт новых компонентов для страницы отзывов
import ReviewsHero from "@/components/reviews/ReviewsHero";
import UserReviews from "@/components/reviews/UserReviews";
// import VideoTestimonials from "@/components/reviews/VideoTestimonials";
// import CaseStudies from "@/components/reviews/CaseStudies";
import PartnerEcosystem from "@/components/reviews/PartnerEcosystem";
// import CertificationsAwards from "@/components/reviews/CertificationsAwards";
// import JointResearch from "@/components/reviews/JointResearch";
// import TrustAndTransparency from "@/components/reviews/TrustAndTransparency";
import ReviewsCTA from "@/components/reviews/ReviewsCTA";

export async function generateMetadata({
  params,
}: {params: Promise<{ locale: string }>}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getMessages(locale);
  const title = `${t.reviewsPage?.meta?.title ?? "Reviews & Partners"} — ${t.brand?.name ?? "Qezvoro Invest"}`;
  const description = t.reviewsPage?.meta?.description ?? "Real client testimonials and strategic partnerships that build trust and validate our platform's reliability.";
  const url = absUrl(locale, "/reviews");

  return {
    ...baseOpenGraph(title, description, url),
    alternates: buildAlternates(locale, "/reviews"),
  };
}

export default async function ReviewsPage({ params }: {params: Promise<{ locale: string }>}) {
  const { locale } = await params;
  const t = await getMessages(locale);
  const d = t.reviewsPage; // Dictionary for the reviews page

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-20">
        <ReviewsHero dictionary={d?.hero} />
        <UserReviews dictionary={d?.userReviews} />
        {/* <VideoTestimonials dictionary={d?.videoTestimonials} /> */}
        {/* <CaseStudies dictionary={d?.caseStudies} /> */}
        <PartnerEcosystem dictionary={d?.partnerEcosystem} />
        {/* <CertificationsAwards dictionary={d?.certifications} /> */}
        {/* <JointResearch dictionary={d?.jointResearch} /> */}
        {/* <TrustAndTransparency dictionary={d?.trustAndTransparency} /> */}
        <ReviewsCTA dictionary={d?.cta} t={t} />
      </main>
    </div>
  );
}