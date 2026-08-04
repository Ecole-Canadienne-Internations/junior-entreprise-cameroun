import { Link } from "react-router-dom";
import { GraduationCap, Users, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const paths = [
  {
    icon: GraduationCap,
    title: "Je suis responsable d'université",
    desc: "Je souhaite créer une Junior-Entreprise pour mon campus et structurer l'employabilité de mes étudiants.",
    to: "/creer-une-je#universite",
  },
  {
    icon: Users,
    title: "Je suis étudiant",
    desc: "Je souhaite créer une Junior-Entreprise au sein de mon université et fédérer les talents autour de projets réels.",
    to: "/creer-une-je#etudiant",
  },
  {
    icon: Rocket,
    title: "Je suis une Startup",
    desc: "Je souhaite devenir Junior-Entreprise et rejoindre le réseau national pour gagner en crédibilité et en marchés.",
    to: "/creer-une-je#startup",
  },
];

const CreateJE = () => {
  return (
    <section id="creer-une-je" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Rejoindre le réseau</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Comment créer une <span className="text-primary">J.E</span> ?
          </h2>
          <p className="mt-4 text-anthracite-soft leading-relaxed">
            Trois portes d'entrée, un même accompagnement : la JECam vous guide de l'idée à l'affiliation officielle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((p, i) => (
            <div
              key={p.title}
              className="relative bg-background rounded-2xl border border-border/60 shadow-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground font-display font-bold grid place-items-center shadow-elegant">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <p.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg text-anthracite">{p.title}</h3>
              <p className="mt-2 text-anthracite-soft leading-relaxed flex-1">{p.desc}</p>
              <Button variant="hero" className="mt-6 w-full" asChild>
                <Link to={p.to}>
                  Voir le processus <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreateJE;
