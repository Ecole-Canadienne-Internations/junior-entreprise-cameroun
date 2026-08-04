import { Crown, Compass, Settings2, School, Users2 } from "lucide-react";

const levels = [
  {
    icon: Crown,
    tag: "Organe Suprême",
    title: "Conseil d'Administration (CA)",
    lead: "Présidé par l'Administrateur Général",
    points: [
      "Fréquence : 1 à 2 fois par an (sessions ordinaires ou d'urgence).",
      "Définition des grandes orientations stratégiques.",
      "Arbitrage des décisions majeures et validation des politiques du mouvement.",
    ],
  },
  {
    icon: Compass,
    tag: "Pilotage Stratégique",
    title: "Administration Générale (AG)",
    lead: "Direction : Administrateur Général",
    points: [
      "Conception et conduite de la politique de développement de la Confédération.",
      "Partenariats institutionnels, expansion et relations extérieures.",
    ],
  },
  {
    icon: Settings2,
    tag: "Exécution & Animation",
    title: "Direction Exécutive (DE)",
    lead: "Directeur Exécutif élu par le collège des Présidents et Responsables de J.E",
    points: [
      "Rattachée directement à l'Administration Générale.",
      "Organisation et suivi opérationnel du réseau des Junior-Entreprises.",
      "Gestion du réseau sur toute l'étendue du territoire national.",
    ],
  },
];

const base = [
  {
    icon: School,
    tag: "Ancrage terrain",
    title: "Bureaux Campus",
    lead: "Bureaux exécutifs locaux dans les Universités et Grandes Écoles",
    points: [
      "Gestion quotidienne des projets et formation des membres.",
      "Exécution de la vision du mouvement à l'échelle universitaire.",
      "Avec l'AG et la DE, ils constituent le socle de la Confédération.",
    ],
  },
  {
    icon: Users2,
    tag: "Échange & Coordination",
    title: "Congrès National",
    lead: "Une fois par an — ensemble des J.E du réseau national",
    points: [
      "Partage d'expériences et renforcement des capacités.",
      "Mise en réseau des Junior-Entreprises.",
      "Harmonisation des pratiques nationales et régionales.",
    ],
  },
];

type Node = (typeof levels)[number];

const Card = ({ n }: { n: Node }) => (
  <div className="bg-background rounded-2xl border border-border/60 shadow-card p-6 lg:p-7 hover:shadow-elegant transition-smooth h-full">
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
        <n.icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-[11px] font-semibold text-primary uppercase tracking-[0.18em]">{n.tag}</div>
        <h3 className="mt-1 font-display text-lg font-bold text-anthracite">{n.title}</h3>
        <p className="mt-1 text-sm font-medium text-anthracite-soft">{n.lead}</p>
      </div>
    </div>
    <ul className="mt-5 space-y-2">
      {n.points.map((p) => (
        <li key={p} className="flex gap-2.5 text-sm text-anthracite-soft leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
          {p}
        </li>
      ))}
    </ul>
  </div>
);

const Connector = () => (
  <div aria-hidden className="flex justify-center py-4">
    <div className="w-px h-10 bg-border relative">
      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-r border-b border-border" />
    </div>
  </div>
);

const Organigramme = () => {
  return (
    <section id="organigramme" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Gouvernance</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Structure & <span className="text-primary">fonctionnement</span> des instances.
          </h2>
          <p className="mt-4 text-anthracite-soft leading-relaxed">
            Une organisation à trois niveaux de décision, appuyée par les bureaux campus et le
            Congrès National, sous la conduite de l'Administrateur Général Arnaud Sighano.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {levels.map((n, i) => (
            <div key={n.title}>
              <Card n={n} />
              {i < levels.length - 1 && <Connector />}
            </div>
          ))}
          <Connector />
          <div className="grid md:grid-cols-2 gap-6">
            {base.map((n) => (
              <Card key={n.title} n={n} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organigramme;
