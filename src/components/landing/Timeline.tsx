import { FileText, ExternalLink } from "lucide-react";

type Doc = { label: string; href: string; external?: boolean };
type Milestone = {
  year: string;
  title: string;
  desc?: string;
  docs?: Doc[];
};

const milestones: Milestone[] = [
  {
    year: "2012",
    title: "Avènement du mouvement",
    desc: "Naissance officielle des Junior-Entreprises au Cameroun.",
  },
  {
    year: "2013",
    title: "Reconnaissance officielle",
    desc: "Obtention du statut officiel d'association à but non lucratif.",
  },
  {
    year: "2015",
    title: "Expansion internationale",
    desc: "Membre du Conseil de Junior Entreprise Global (Confédération Internationale des Junior-Entreprises).",
    docs: [
      {
        label: "Cliquez pour en savoir plus",
        href: "https://www.juniorenterprises.org/members",
        external: true,
      },
    ],
  },
  {
    year: "2016",
    title: "Double reconnaissance ministérielle",
    desc: "Reconnaissance par le Ministère de l'Enseignement Supérieur et inscription au répertoire des ONG et OSC tenu par le Ministère des Relations Extérieures.",
    docs: [
      {
        label: "Document — MINESUP (Enseignement Supérieur)",
        href: "/docs/reconnaissance-minesup-2016.jpg",
      },
      {
        label: "Document — MINREX (Relations Extérieures)",
        href: "/docs/reconnaissance-minrex-2016.jpg",
      },
    ],
  },
  {
    year: "2018",
    title: "1er Forum National",
    desc: "Premier Forum National de l'entrepreneuriat étudiant.",
  },
];

const Timeline = () => {
  return (
    <section id="historique" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Notre histoire</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Plus d'une décennie d'<span className="text-primary">excellence et d'impact</span>.
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className={`pl-12 lg:pl-0 ${i % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:pl-8"}`}>
                  <div className="font-display font-extrabold text-4xl lg:text-5xl text-primary">
                    {m.year}
                  </div>
                  <h3 className="mt-2 font-display font-bold text-xl text-anthracite">{m.title}</h3>
                  {m.desc && <p className="mt-1 text-anthracite-soft leading-relaxed">{m.desc}</p>}
                  {m.docs && (
                    <div className={`mt-3 flex flex-col gap-2 ${i % 2 === 0 ? "lg:items-end" : "lg:items-start"}`}>
                      {m.docs.map((d) => (
                        <a
                          key={d.href}
                          href={d.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-smooth"
                        >
                          {d.external ? <ExternalLink className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                          {d.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <div className="hidden lg:block" />
                <div className="absolute left-4 lg:left-1/2 top-2 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background shadow-elegant -translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
