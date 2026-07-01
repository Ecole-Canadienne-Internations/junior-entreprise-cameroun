import organigramme from "@/assets/organigramme-jecam.png";

const Organigramme = () => {
  return (
    <section id="organigramme" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Gouvernance</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Organigramme <span className="text-primary">fonctionnel</span> de la JECam.
          </h2>
          <p className="mt-4 text-anthracite-soft leading-relaxed">
            Une équipe structurée autour de l'Administrateur Général Arnaud Sighano,
            appuyée par des conseillers, administrateurs adjoints, chargés de missions et directeurs délégués
            couvrant l'ensemble des pôles stratégiques.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-background rounded-3xl border border-border/60 shadow-card p-4 lg:p-8">
          <img
            src={organigramme}
            alt="Organigramme fonctionnel de la Junior-Entreprises Cameroun (JECam)"
            loading="lazy"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Organigramme;
