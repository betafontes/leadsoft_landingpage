import { CareerSection } from "@/components/sections/career-section";
import { CompanySection } from "@/components/sections/company-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { RavenDbSection } from "@/components/sections/ravendb-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <SiteHeader />
      <HeroSection />
      <ScrollReveal><ServicesSection /></ScrollReveal>
      <ScrollReveal delayMs={70}><CompanySection /></ScrollReveal>
      <ScrollReveal delayMs={40}><ProcessSection /></ScrollReveal>
      <ScrollReveal delayMs={50}><PortfolioSection /></ScrollReveal>
      <ScrollReveal delayMs={40}><RavenDbSection /></ScrollReveal>
      <ScrollReveal delayMs={70}><CareerSection /></ScrollReveal>
      <ScrollReveal><SiteFooter /></ScrollReveal>
      <WhatsAppButton />
    </main>
  );
}
