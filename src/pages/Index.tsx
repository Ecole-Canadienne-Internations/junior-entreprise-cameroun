import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import About from "@/components/landing/About";
import Stats from "@/components/landing/Stats";
import Process from "@/components/landing/Process";
import Services from "@/components/landing/Services";
import Authorities from "@/components/landing/Authorities";
import Timeline from "@/components/landing/Timeline";
import Testimonials from "@/components/landing/Testimonials";
import Organigramme from "@/components/landing/Organigramme";
import Gallery from "@/components/landing/Gallery";
import Flyers from "@/components/landing/Flyers";
import LeadCapture from "@/components/landing/LeadCapture";
import Events from "@/components/landing/Events";
import Footer from "@/components/landing/Footer";
import WhatsAppWidget from "@/components/landing/WhatsAppWidget";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Head metadata is set statically in index.html for SEO/crawlers.
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Partners />
      <About />
      <Stats />
      <Process />
      <Services />
      <Authorities />
      <Timeline />
      <Testimonials />
      <Organigramme />
      <Gallery />
      <Flyers />
      <LeadCapture />
      <Events />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
};

export default Index;
