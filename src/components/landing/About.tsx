import { Globe2, Network, HandCoins } from "lucide-react";

const points = [
  {
    icon: Network,
    title: "Fédération nationale",
    desc: "Nous fédérons les Junior-Entreprises issues des universités et grandes écoles du Cameroun.",
  },
  {
    icon: Globe2,
    title: "Membre du Conseil Global",
    desc: "Membre actif du Conseil Global des Junior-Entreprises (JE Global) depuis 2016.",
  },
  {
    icon: HandCoins,
    title: "Lutte contre la précarité",
    desc: "Promotion de l'auto-emploi et combat actif contre la précarité estudiantine.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">
              Qui sommes-nous ?
            </div>
            <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
              L'organe fédéral de l'<span className="text-primary">excellence estudiantine</span>.
            </h2>
            <p className="mt-6 text-lg text-anthracite-soft leading-relaxed">
              La JECam est la confédération nationale des Junior-Entreprises du Cameroun —
              l'un des <span className="font-semibold text-anthracite">3 seuls pays d'Afrique</span> à
              en être doté. Nous structurons, accompagnons et représentons le mouvement
              auprès des institutions et partenaires internationaux.
            </p>
          </div>

          <div className="space-y-5">
            {points.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 p-6 rounded-2xl border border-border/60 shadow-card hover:shadow-elegant hover:-translate-y-0.5 transition-smooth bg-background"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <p.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-anthracite">{p.title}</h3>
                  <p className="mt-1 text-anthracite-soft leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
