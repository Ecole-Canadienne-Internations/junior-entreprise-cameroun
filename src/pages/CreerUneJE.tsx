import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, GraduationCap, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/Footer";

const tracks = [
  {
    icon: GraduationCap,
    title: "Je suis responsable d'université",
    desc: "Doter votre campus d'une Junior-Entreprise affiliée à la JECam.",
    to: "/creer-une-je/universite",
  },
  {
    icon: Users,
    title: "Je suis étudiant",
    desc: "Fédérer une équipe fondatrice et créer la J.E de votre université.",
    to: "/creer-une-je/etudiant",
  },
  {
    icon: Rocket,
    title: "Je suis une Startup",
    desc: "Obtenir le label Junior-Entreprise et rejoindre le réseau national.",
    to: "/creer-une-je/startup",
  },
];

const CreerUneJE = () => (
  <main className="min-h-screen bg-background">
    <section className="pt-28 pb-16 lg:pt-36">
      <div className="container mx-auto container-px">
        <Button variant="outline" asChild className="mb-8">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
          </Link>
        </Button>
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Processus de création</div>
          <h1 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Créer une <span className="text-primary">Junior-Entreprise</span> au Cameroun.
          </h1>
          <p className="mt-4 text-anthracite-soft leading-relaxed">
            Choisissez votre profil : chaque parcours dispose de sa propre page et de ses propres étapes.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {tracks.map((t) => (
            <div
              key={t.to}
              className="rounded-2xl border border-border/60 shadow-card p-7 flex flex-col hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <t.icon className="w-6 h-6" />
              </div>
              <h2 className="mt-5 font-display font-bold text-lg text-anthracite">{t.title}</h2>
              <p className="mt-2 text-anthracite-soft leading-relaxed flex-1">{t.desc}</p>
              <Button variant="hero" className="mt-6 w-full" asChild>
                <Link to={t.to}>
                  Voir le processus <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </main>
);

export default CreerUneJE;
