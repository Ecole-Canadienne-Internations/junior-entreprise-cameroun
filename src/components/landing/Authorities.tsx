import { Quote } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import sighanoPortrait from "@/assets/sighano-portrait.jpg";

const voices = [
  {
    id: "biya",
    name: "S.E. Paul Biya",
    role: "Président de la République du Cameroun",
    image:
      "https://www.stopblablacam.com/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_L.jpg",
    quote:
      "Contribuer à l'émergence du Cameroun d'ici 2035 passe par les incubateurs universitaires et l'innovation portée par notre jeunesse.",
  },
  {
    id: "basilekin",
    name: "Achille Basilekin",
    role: "Ministre des PME, Économie sociale & Artisanat",
    image:
      "https://www.stopblablacam.com/media/k2/items/cache/c424b460fe583041c7a0498c6f662aee_L.jpg",
    quote:
      "Le dynamisme de l'économie camerounaise passe par l'accompagnement structuré des PME, des artisans et des jeunes entrepreneurs.",
  },
  {
    id: "fame",
    name: "Pr. Jacques Fame Ndongo",
    role: "Ministre de l'Enseignement Supérieur",
    image: "https://www.ubuea.cm/wp-content/uploads/2024/04/MH-scaled.jpg",
    quote:
      "Acquérir du savoir-faire au-delà des connaissances académiques : c'est tout l'esprit du système LMD et du modèle Junior-Entreprise.",
  },
  {
    id: "sighano",
    name: "Arnaud Sighano",
    role: "Président de la JECam",
    image: sighanoPortrait,
    quote:
      "Innovation, Flexibilité, Ambition : ce sont nos trois piliers pour bâtir une méthodologie efficiente au service des entreprises.",
  },
];

const Authorities = () => {
  return (
    <section id="autorites" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Hautes voix</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Une vision <span className="text-primary">portée au plus haut niveau</span>.
          </h2>
        </div>

        <Tabs defaultValue="biya" className="max-w-5xl mx-auto">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-secondary/60 p-2 rounded-2xl">
            {voices.map((v) => (
              <TabsTrigger
                key={v.id}
                value={v.id}
                className="data-[state=active]:bg-background data-[state=active]:shadow-card rounded-xl px-4 py-2.5 text-sm font-medium"
              >
                {v.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {voices.map((v) => (
            <TabsContent key={v.id} value={v.id} className="mt-8">
              <div className="bg-background rounded-3xl border border-border/60 shadow-card p-8 lg:p-12 grid md:grid-cols-[200px_1fr] gap-8 items-start">
                {v.image ? (
                  <img
                    src={v.image}
                    alt={v.name}
                    loading="lazy"
                    className="w-full h-48 md:h-56 object-cover rounded-2xl"
                  />
                ) : (
                  <div className="w-full h-48 md:h-56 rounded-2xl bg-primary/10 grid place-items-center font-display font-bold text-3xl text-primary">
                    {v.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                )}
                <div>
                  <Quote className="w-10 h-10 text-primary/30" />
                  <p className="mt-4 text-xl lg:text-2xl text-anthracite leading-relaxed font-display font-medium">
                    « {v.quote} »
                  </p>
                  <div className="mt-6 pt-6 border-t border-border/60">
                    <div className="font-display font-bold text-anthracite">{v.name}</div>
                    <div className="text-sm text-muted-foreground">{v.role}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Authorities;
