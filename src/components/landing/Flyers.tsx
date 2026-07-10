import { Badge } from "@/components/ui/badge";
import f1 from "@/assets/flyer-1.jpg";
import f2 from "@/assets/flyer-2.jpg";
import f3 from "@/assets/flyer-3.png";

const flyers = [
  {
    src: f1,
    title: "What We Do — Learning by Doing",
    caption: "Affiche institutionnelle présentant nos domaines d'intervention : entrepreneuriat, coaching, audits & conseils, intégration professionnelle.",
  },
  {
    src: f2,
    title: "Dirigeant Aujourd'hui, Dirigeant Demain !",
    caption: "Campagne institutionnelle JECam — Junior Enterprises Global, GEFI, AGORAlliance, JE.",
  },
  {
    src: f3,
    title: "Envie d'expérience professionnelle ?",
    caption: "Affiche de recrutement étudiant — rejoignez la Junior-Entreprise Cameroun.",
  },
];

const Flyers = () => {
  return (
    <section id="affiches" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Archives</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Affiches & <span className="text-primary">flyers d'exposition</span>.
          </h2>
          <p className="mt-4 text-anthracite-soft leading-relaxed">
            Retour sur nos campagnes de communication passées.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flyers.map((f) => (
            <figure
              key={f.title}
              className="bg-background rounded-3xl border border-border/60 shadow-card overflow-hidden flex flex-col"
            >
              <div className="relative">
                <img
                  src={f.src}
                  alt={f.title}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <Badge variant="secondary" className="absolute top-3 right-3 bg-background/90 text-anthracite border border-border">
                  Expiré
                </Badge>
              </div>
              <figcaption className="p-5">
                <h3 className="font-display font-bold text-anthracite">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flyers;
