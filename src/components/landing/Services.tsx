import { BarChart3, Megaphone, Code2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Études de Marché & Business Plan",
    desc: "Analyses sectorielles approfondies, études de faisabilité et business plans bancables pour vos projets d'investissement.",
  },
  {
    icon: Megaphone,
    title: "Stratégie Marketing & Digitale",
    desc: "Branding, content, SEO, social media et campagnes performantes — pensés pour le marché camerounais et africain.",
  },
  {
    icon: Code2,
    title: "Développement de Solutions Tech",
    desc: "Sites web, applications mobiles, plateformes SaaS et outils internes développés par nos meilleurs étudiants ingénieurs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-secondary/40">
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
              className="group relative bg-background rounded-2xl p-8 border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="w-14 h-14 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-anthracite">{s.title}</h3>
              <p className="mt-3 text-anthracite-soft leading-relaxed">{s.desc}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                En savoir plus <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-smooth" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
