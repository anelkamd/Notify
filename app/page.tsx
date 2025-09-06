import CallToAction from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import ContentSection from "@/components/content-section";
import StatsSection from "@/components/stat-section";
import Testimonials from "@/components/testimonial";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <HeroSection />
      <Features />
      <ContentSection />
      <StatsSection />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}
