import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-background text-anthracite relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto container-px relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">Mot du Directeur</div>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold text-anthracite text-balance">
              Le mot du Directeur Général de <span className="text-primary">PI — Prépas Internationales</span>.
            </h2>
          </div>

          <div className="bg-background rounded-3xl border border-border/60 shadow-card p-8 lg:p-12">
            <Quote className="w-10 h-10 text-primary/30" />
            <blockquote className="mt-4 space-y-4 text-anthracite-soft leading-relaxed text-lg">
              <p>« Je vous souhaite la bienvenue à PI — Prépas Internationales.</p>
              <p>
                A PI, nous avons mis un accent sur la qualité dans l'enseignement et autour des enseignements.
                Nous avons un corps enseignant compétent et qualifié et le programme appliqué est celui de nos
                écoles partenaires.
              </p>
              <p>
                Nous proposons des certifications à nos étudiants telles que les certifications Microsoft ou ETS
                afin de les rendre plus compétitifs sur le marché du travail…
              </p>
              <p className="text-sm">
                <a
                  href="https://web.facebook.com/juniorentreprisecameroun/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Lire la suite sur notre page Facebook →
                </a>
              </p>
            </blockquote>
            <div className="mt-8 pt-6 border-t border-border/60">
              <div className="font-display font-bold text-anthracite">Jérôme CARAYON</div>
              <div className="text-sm text-muted-foreground">Directeur Général de PI — Prépas Internationales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
