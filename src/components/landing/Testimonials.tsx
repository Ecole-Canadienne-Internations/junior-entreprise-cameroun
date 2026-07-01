import { Quote } from "lucide-react";
import sighanoPortrait from "@/assets/sighano-portrait.jpg";

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 bg-background text-anthracite relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto container-px relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">Mot de l'Administrateur Général</div>
            <h2 className="mt-3 font-display text-3xl lg:text-4xl font-bold text-anthracite text-balance">
              Le mot de l'<span className="text-primary">Administrateur Général</span> de la Junior-Entreprises Cameroun.
            </h2>
          </div>

          <div className="bg-background rounded-3xl border border-border/60 shadow-card p-8 lg:p-12">
            <div className="flex items-center gap-5 mb-6">
              <img
                src={sighanoPortrait}
                alt="Arnaud Sighano"
                loading="lazy"
                className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
              />
              <div>
                <div className="font-display font-bold text-anthracite text-lg">Arnaud Sighano</div>
                <div className="text-sm text-muted-foreground">Administrateur Général de la Junior-Entreprises Cameroun</div>
              </div>
            </div>

            <Quote className="w-10 h-10 text-primary/30" />
            <blockquote className="mt-4 space-y-4 text-anthracite-soft leading-relaxed">
              <p>
                « Le développement de l'emploi, en particulier l'emploi des jeunes, est une priorité nationale,
                inscrite au cœur des objectifs affichés dans le Document de Stratégie pour la Croissance et l'Emploi
                et dans les orientations prioritaires de l'action publique prônées par le Chef de l'Etat (Plan
                Triennal Spécial Jeune). Les institutions publiques et les entreprises privées, considérées dans
                leur rôle d'employeurs, montrent souvent des insuffisances dans la maîtrise d'un management des
                ressources humaines de nature à permettre des recrutements optimisés et un développement continu
                des compétences.
              </p>
              <p>
                Incubateurs actifs dans la scène entrepreneuriale, les Juniors-Entreprises se montrent concisément
                efficaces pour l'ensemble des réponses liées à l'emploi et à la satisfaction sur les projets des
                clients. Développer le mouvement des Juniors-Entreprises années après année sur le territoire
                national, parvenant au statut de maturité, nous JECam – Confédération des Juniors-Entreprises
                Camerounaise – venons ambitieusement fédérer l'élite entrepreneuriale dans la perspective
                d'insertion professionnelle et de concrétisation effective de la professionnalisation des
                enseignements par l'unité des valeurs des Junior-Entreprises.
              </p>
              <p>
                <span className="font-semibold text-anthracite">Professionnalisme, Innovation, Flexibilité, Ambition et Ponctualité</span> :
                telles sont nos principales bases et piliers d'une méthodologie efficiente pour continuer à étendre
                le mouvement des JEs à l'échelle nationale et internationale. »
              </p>
              <p className="text-sm pt-2">
                <a
                  href="https://web.facebook.com/juniorentreprisecameroun/?_rdc=1&_rdr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Suivre la JECam sur Facebook →
                </a>
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
