import { FileText } from "lucide-react";
import minesup from "@/assets/doc-minesup-2016.jpg";
import minrex from "@/assets/doc-minrex-2016.jpg";
import saintJeanSignature from "@/assets/doc-saintjean-signature.jpg";

const docs = [
  {
    src: minesup,
    title: "Reconnaissance — MINESUP (2016)",
    caption:
      "Document du Ministère de l'Enseignement Supérieur autorisant la JECam à créer des Junior-Entreprises dans les universités camerounaises.",
    ministry: "Ministère de l'Enseignement Supérieur",
  },
  {
    src: minrex,
    title: "Inscription — MINREX (2016)",
    caption:
      "Inscription au répertoire des ONG et Organisations de la Société Civile tenu par le Ministère des Relations Extérieures.",
    ministry: "Ministère des Relations Extérieures",
  },
];

const OfficialDocs = () => {
  return (
    <section id="documents-officiels" className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto container-px">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Reconnaissances officielles</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Documents <span className="text-primary">ministériels</span> (2016).
          </h2>
          <p className="mt-4 text-anthracite-soft leading-relaxed">
            La JECam est officiellement reconnue par les autorités camerounaises,
            gage de crédibilité et de sérieux de notre mouvement.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {docs.map((d) => (
            <figure
              key={d.title}
              className="bg-background rounded-3xl border border-border/60 shadow-card overflow-hidden flex flex-col"
            >
              <a href={d.src} target="_blank" rel="noopener noreferrer" className="block relative group">
                <img
                  src={d.src}
                  alt={d.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-smooth group-hover:scale-[1.02]"
                />
              </a>
              <figcaption className="p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  {d.ministry}
                </div>
                <h3 className="mt-2 font-display font-bold text-anthracite">{d.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficialDocs;
