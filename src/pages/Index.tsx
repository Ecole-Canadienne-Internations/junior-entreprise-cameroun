import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Services from "@/components/landing/Services";
import Testimonials from "@/components/landing/Testimonials";
import LeadCapture from "@/components/landing/LeadCapture";
import Events from "@/components/landing/Events";
import Footer from "@/components/landing/Footer";
import WhatsAppWidget from "@/components/landing/WhatsAppWidget";
import ExitIntent from "@/components/landing/ExitIntent";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Junior Entreprise Cameroun — Consulting junior & entrepreneuriat étudiant";
    const setMeta = (name: string, content: string) => {
      let m = document.querySelector(`meta[name="${name}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("name", name);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Junior Entreprise Cameroun : études de marché, business plan, marketing digital et solutions tech par les meilleurs étudiants camerounais."
    );
    setMeta("keywords", "Entrepreneuriat étudiant Cameroun, Consulting junior Cameroun, Junior Entreprise");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <LeadCapture />
      <Events />
      <Footer />
      <WhatsAppWidget />
      <ExitIntent />
    </main>
  );
};

export default Index;
