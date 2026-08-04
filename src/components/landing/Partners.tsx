import instRepublic from "@/assets/partners/inst-republic.png";
import instMinjec from "@/assets/partners/inst-minjec.png";
import instMinpmeesa from "@/assets/partners/inst-minpmeesa.png";
import instFeicom from "@/assets/partners/inst-feicom.png";
import instMinesup from "@/assets/partners/inst-minesup.png";
import schoolPrepavogt from "@/assets/partners/school-prepavogt.png";
import schoolPrepasInter from "@/assets/partners/school-prepas-inter.png";
import schoolIconic from "@/assets/partners/school-iconic.png";
import schoolIsta from "@/assets/partners/school-ista.png";
import schoolSaintJean from "@/assets/partners/school-saintjean.png";
import schoolEnit from "@/assets/partner-enit.png";
import startupAyila from "@/assets/partners/startup-ayila.jpg";
import startupIyc from "@/assets/partners/startup-iyc.png";
import startupTecnis from "@/assets/partners/startup-tecnis.png";
import globalBdsu from "@/assets/partners/global-bdsu.png";
import globalJcnetwork from "@/assets/partners/global-jcnetwork.png";
import globalJetTunisia from "@/assets/partners/global-jet-tunisia.png";
import globalCgje from "@/assets/partners/global-cgje.png";
import globalCjem from "@/assets/partners/global-cjem.jpg";
import globalBrasil from "@/assets/partners/global-brasil.png";
import globalJeUsa from "@/assets/partners/global-je-usa.jpg";
import globalRaices from "@/assets/partners/global-raices.jpg";
import globalJeFrance from "@/assets/partners/global-je-france.png";
import intlJeGlobal from "@/assets/partners/intl-je-global.png";
import intlGefi from "@/assets/partners/intl-gefi.png";
import intlAgoralliance from "@/assets/partners/intl-agoralliance.png";

const institutions = [
  { src: instRepublic, alt: "République du Cameroun" },
  { src: instMinjec, alt: "MINJEC" },
  { src: instMinesup, alt: "MINESUP — Ministère de l'Enseignement Supérieur" },
  { src: instMinpmeesa, alt: "MINPMEESA" },
  { src: instFeicom, alt: "FEICOM" },
];
const schools = [
  { src: schoolPrepavogt, alt: "Prépavogt" },
  { src: schoolPrepasInter, alt: "Prépas Internationales" },
  { src: schoolSaintJean, alt: "Université Saint Jean de Yaoundé" },
  { src: schoolIsta, alt: "ISTA" },
  { src: schoolEnit, alt: "ENIT Junior Entreprise", size: "lg" as const },
];
const startups = [
  { src: startupAyila, alt: "Ayila'" },
  { src: startupIyc, alt: "International Youth Conference" },
  { src: startupTecnis, alt: "TecNIS — Technologie Numérique pour l'Innovation et la Sécurité" },
  { src: schoolIconic, alt: "Iconic Company" },
];
const globalMembers = [
  { src: globalBdsu, alt: "BDSU — Allemagne" },
  { src: globalJcnetwork, alt: "JCNetwork" },
  { src: globalJetTunisia, alt: "Junior Enterprises of Tunisia" },
  { src: globalCgje, alt: "Confédération Gabonaise des Junior Entreprises" },
  { src: globalCjem, alt: "CJEM" },
  { src: globalBrasil, alt: "Brasil Júnior" },
  { src: globalJeUsa, alt: "Junior Enterprise USA" },
  { src: globalRaices, alt: "RAÍCES — Argentine" },
];
const intlPartners = [
  { src: intlJeGlobal, alt: "Junior Enterprises Global" },
  { src: intlGefi, alt: "GEFI — Groupement Économique Francophone et International" },
  { src: intlAgoralliance, alt: "AGORAlliance" },
];

const Logo = ({ src, alt, size = "md" }: { src: string; alt: string; size?: "sm" | "md" | "lg" }) => {
  const h = size === "lg" ? "h-24 lg:h-28" : size === "md" ? "h-20 lg:h-24" : "h-16 lg:h-20";
  return (
    <div className="group flex items-center justify-center px-4 py-3">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${h} w-auto object-contain transition-smooth group-hover:scale-110`}
      />
    </div>
  );
};

const Tier = ({ label, items, size }: { label: string; items: { src: string; alt: string; size?: "sm" | "md" | "lg" }[]; size?: "sm" | "md" | "lg" }) => (
  <div className="flex flex-col items-center">
    <div className="text-[11px] font-semibold text-primary uppercase tracking-[0.2em] mb-6">
      {label}
    </div>
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 lg:gap-x-14">
      {items.map((p) => (
        <Logo key={p.alt} src={p.src} alt={p.alt} size={p.size ?? size} />
      ))}
    </div>
  </div>
);

const Partners = () => {
  return (
    <section id="partenaires" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
            Notre écosystème
          </div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Un réseau de partenaires <span className="text-primary">stratégiques</span>.
          </h2>
          <p className="mt-4 text-anthracite-soft">
            Institutions, écoles et startups qui soutiennent le mouvement Junior-Entreprise au Cameroun.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          <Tier label="Institutions" items={institutions} size="lg" />
          <Tier label="Écoles partenaires" items={schools} size="md" />
          <Tier label="Startups" items={startups} size="sm" />
          <Tier label="Junior Enterprise Global — Membres" items={globalMembers} size="md" />
          <Tier label="Partenaires internationaux" items={intlPartners} size="lg" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
