import { ArrowUpRight } from "lucide-react";
import serviceEtude from "@/assets/service-etude.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceTech from "@/assets/service-tech.jpg";

const services = [
  {
    image: serviceEtude,
    title: "Études de Marché & Business Plan",
    desc: "Analyses sectorielles approfondies, études de faisabilité et business plans bancables pour vos projets d'investissement.",
  },
  {
    image: serviceMarketing,
    title: "Stratégie Marketing & Digitale",
    desc: "Branding, content, SEO, social media et campagnes performantes — pensés pour le marché camerounais et africain.",
  },
  {
    image: serviceTech,
    title: "Développement de Solutions Tech",
    desc: "Sites web, applications mobiles, plateformes SaaS et outils internes développés par nos meilleurs étudiants ingénieurs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="max-w-3xl mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Nos services</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Trois expertises au service de votre <span className="text-primary">croissance</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative bg-background rounded-2xl border border-border/60 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-display text-xl font-bold text-anthracite">{s.title}</h3>
                <p className="mt-3 text-anthracite-soft leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  En savoir plus <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-smooth" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
