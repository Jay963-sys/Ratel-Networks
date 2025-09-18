import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutPreview from "@/components/AboutPreview";
import Contact from "@/components/Contact";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutPreview />
      <StatsSection />
      <Contact />
    </div>
  );
}
