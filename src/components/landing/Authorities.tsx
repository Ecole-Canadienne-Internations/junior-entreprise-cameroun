import { Quote } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import fameNdongoPortrait from "@/assets/fame-ndongo.jpg";

const voices = [
  {
    id: "biya",
    name: "S.E. Paul Biya",
    role: "Président de la République du Cameroun",
    image:
      "https://www.stopblablacam.com/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_L.jpg",
    quote:
      "Nous allons consolider cette option, articulée autour des savoirs pratiques et du numérique éducatif. Nous allons, notamment, procéder à la multiplication effective des incubateurs d'entreprise, au sein des institutions universitaires. L'objectif recherché est d'apprendre aux étudiants, toutes disciplines confondues, à créer et à gérer des entreprises. Plusieurs « Juniors–Entreprises » ont déjà été mises sur pied et fonctionnent, à la satisfaction de tous. Les étudiants se familiarisent, ainsi, avec leur mission socio-économique qui est de contribuer à l'émergence du Cameroun à l'horizon 2035.",
    source: "Message lors de la Conférence des Recteurs des Universités Italiennes",
  },
  {
    id: "fame",
    name: "Pr. Jacques Fame Ndongo",
    role: "Ministre d'État, Ministre de l'Enseignement Supérieur",
    image: fameNdongoPortrait,
    quote:
      "Pendant longtemps, l'université a été focalisée sur l'acquisition des connaissances que nous appelons les savoirs-savants ; nous voulons un juste équilibre entre les savoirs-savants et les savoirs concrets, savoirs pratiques […] avec les incubateurs d'entreprise qui existent dans la plupart de nos universités d'État, avec les Juniors-Entreprises, avec l'accent mis sur l'acquisition des compétences parallèlement à l'appropriation des connaissances, tout cela fait qu'aujourd'hui l'étudiant camerounais, qui est aussi au cœur du système LMD, acquiert de plus en plus le savoir-faire par-delà le savoir.",
    source: "Journal Radio, 13h de la CRTV — jeudi 13 Octobre 2016",
  },
  {
    id: "basilekin",
    name: "M. Achille Basilekin III",
    role: "Ministre des PME, de l'Économie Sociale et de l'Artisanat",
    image:
      "https://www.stopblablacam.com/media/k2/items/cache/c424b460fe583041c7a0498c6f662aee_L.jpg",
    quote:
      "Pour redynamiser leurs économies et créer davantage d'emplois, de nombreux pays s'appuient sur les PME, les artisans et les acteurs de l'économie sociale. Le Cameroun n'est pas en reste dans cette dynamique émergente et à cet effet, plusieurs outils d'accompagnement ont été mis sur pied. Notre département ministériel a développé un ensemble d'outils et de mécanismes qu'il monitore et évalue périodiquement.",
    source: "Édito du Ministre — minpmeesa.gov.cm",
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
