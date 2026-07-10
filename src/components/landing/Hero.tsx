import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

      <div className="relative container mx-auto container-px">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider mb-6">
            Le mouvement étudiant qui réinvente l'entrepreneuriat
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-anthracite leading-[1.05] text-balance">
            Junior-Entreprise Cameroun :{" "}
            <span className="text-primary">Levier du « Learning by Doing ».</span>
          </h1>

          <p className="mt-6 text-lg text-anthracite-soft max-w-xl leading-relaxed">
            Nous fédérons les talents des grandes écoles pour offrir aux entreprises
            des solutions innovantes tout en formant les leaders de demain.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#lead">
                Déposer un projet <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#about">Découvrir le mouvement</a>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-display font-bold text-2xl text-anthracite">21</div>
              J.E affiliées
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display font-bold text-2xl text-anthracite">150+</div>
              Projets livrés
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display font-bold text-2xl text-anthracite">775+</div>
              Consultants
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
