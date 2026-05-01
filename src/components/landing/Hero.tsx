import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-collab.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-background">
      <div className="container mx-auto container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4" />
              Excellence académique × Innovation
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-anthracite leading-[1.05] text-balance">
              L'excellence académique au service de{" "}
              <span className="text-primary">l'innovation entrepreneuriale</span> au Cameroun.
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-anthracite-soft max-w-xl leading-relaxed">
              Nous transformons le potentiel des étudiants en solutions concrètes
              pour les entreprises et les startups.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#lead">
                  Confier votre projet <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#services">Découvrir nos services</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
              <div>
                <div className="font-display font-bold text-2xl text-anthracite">+50</div>
                Projets livrés
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display font-bold text-2xl text-anthracite">95%</div>
                Satisfaction
              </div>
              <div className="h-10 w-px bg-border" />
              <div>
                <div className="font-display font-bold text-2xl text-anthracite">120+</div>
                Consultants
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="Étudiants consultants Junior Entreprise Cameroun en collaboration"
                width={1600}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 lg:left-8 bg-background rounded-2xl shadow-card px-5 py-4 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full bg-gradient-primary grid place-items-center text-primary-foreground font-bold">
                JE
              </div>
              <div>
                <div className="text-sm font-semibold text-anthracite">Devis sous 24h</div>
                <div className="text-xs text-muted-foreground">Réponse garantie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
