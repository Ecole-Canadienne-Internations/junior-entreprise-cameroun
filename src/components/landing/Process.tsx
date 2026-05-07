import { ClipboardList, SearchCheck, MessagesSquare, CheckCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Décrivez vos besoins",
    desc: "Remplissez notre formulaire en ligne en quelques minutes.",
  },
  {
    icon: SearchCheck,
    title: "Analyse de faisabilité",
    desc: "Nous validons l'expertise requise et la pertinence du projet.",
  },
  {
    icon: MessagesSquare,
    title: "Mise en relation",
    desc: "Notre équipe vous contacte sous 24h avec une proposition.",
  },
  {
    icon: CheckCheck,
    title: "Sélection",
    desc: "Choisissez la Junior-Entreprise qui correspond à vos enjeux.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Comment ça marche ?</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Collaborer avec une J.E : <span className="text-primary">4 étapes simples</span>.
          </h2>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative bg-background rounded-2xl border border-border/60 shadow-card p-7 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground font-display font-bold grid place-items-center shadow-elegant">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-lg text-anthracite">{s.title}</h3>
              <p className="mt-2 text-anthracite-soft leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
