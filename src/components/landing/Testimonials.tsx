import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    quote:
      "Travailler avec la Junior Entreprise, c'est l'assurance d'un regard neuf couplé à une rigueur académique.",
    name: "Dr. Ngono Mbarga",
    role: "Recteur, Université de Yaoundé",
  },
  {
    quote:
      "Une équipe agile, des livrables professionnels et un excellent rapport qualité/prix pour notre stratégie digitale.",
    name: "Samuel Eyenga",
    role: "CEO, Afrik Innov SARL",
  },
  {
    quote:
      "L'étude de marché livrée nous a permis de pivoter intelligemment. Bravo aux consultants juniors !",
    name: "Mireille Atangana",
    role: "Fondatrice, BioFarms Cameroun",
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = items[i];
  const next = () => setI((i + 1) % items.length);
  const prev = () => setI((i - 1 + items.length) % items.length);

  return (
    <section className="py-20 lg:py-28 bg-background text-anthracite relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto container-px relative">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-14 h-14 text-primary mx-auto mb-8" />
          <blockquote className="font-display text-2xl lg:text-4xl font-medium leading-snug text-balance min-h-[160px]">
            « {t.quote} »
          </blockquote>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-primary grid place-items-center font-display font-bold">
              {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
            </div>
            <div className="text-left">
              <div className="font-semibold text-anthracite">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.role}</div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="w-5 h-5 fill-primary" />
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              aria-label="Précédent"
              onClick={prev}
              className="w-11 h-11 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary grid place-items-center transition-smooth"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  aria-label={`Aller au témoignage ${k + 1}`}
                  onClick={() => setI(k)}
                  className={`h-2 rounded-full transition-smooth ${k === i ? "bg-primary w-8" : "bg-border w-2"}`}
                />
              ))}
            </div>
            <button
              aria-label="Suivant"
              onClick={next}
              className="w-11 h-11 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary grid place-items-center transition-smooth"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
