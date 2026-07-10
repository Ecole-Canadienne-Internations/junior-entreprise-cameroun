import { Badge } from "@/components/ui/badge";
import f1 from "@/assets/flyer-1.jpg.asset.json";
import f2 from "@/assets/flyer-2.jpg.asset.json";

const flyers = [
  {
    src: f1.url,
    title: "Learn by Doing — Révélez votre talent",
    caption: "Affiche d'exposition — campagne « Learn by Doing ». Édition archivée.",
  },
  {
    src: f2.url,
    title: "Révéler votre talent & faciliter votre insertion socioprofessionnelle",
    caption: "Affiche d'exposition — séminaires, ateliers, placements & networking. Édition archivée.",
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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {flyers.map((f) => (
            <figure
              key={f.src}
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
