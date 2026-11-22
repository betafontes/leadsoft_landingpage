import { CareerSection } from "@/components/sections/career-section";
import { CompanySection } from "@/components/sections/company-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { RavenDbSection } from "@/components/sections/ravendb-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SiteHeader />
      <HeroSection />
      <ServicesSection />
      <CompanySection />
      <ProcessSection />
      <PortfolioSection />
      <RavenDbSection />
      <CareerSection />
      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
