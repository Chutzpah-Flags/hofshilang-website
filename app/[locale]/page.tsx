import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { Purpose } from "@/components/home/Purpose";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { FreedomSection } from "@/components/home/FreedomSection";
import { FlagTheory } from "@/components/home/FlagTheory";
import { GroupCards } from "@/components/home/GroupCards";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <LogoMarquee />
      <Purpose />
      <WhoWeAre />
      <FreedomSection />
      <FlagTheory />
      <GroupCards />
      <Testimonials />
      <Newsletter />
    </>
  );
}
