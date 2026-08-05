import { Rocket } from "lucide-react";
import TrackPage from "./TrackPage";

const Startup = () => (
  <TrackPage
    icon={Rocket}
    eyebrow="Parcours startup"
    title="Transformer ma structure en"
    highlight="Junior-Entreprise."
    intro="Votre structure est portée par des étudiants ou de jeunes diplômés et souhaite intégrer le mouvement Junior-Entreprise."
    steps={[
      "Envoyer une demande d'adhésion accompagnée de la présentation de la structure.",
      "Audit de conformité : gouvernance étudiante, pédagogie et objet social.",
      "Mise en conformité des statuts avec la charte des Junior-Entreprises.",
      "Rattachement à un établissement d'enseignement partenaire.",
      "Validation du dossier par le Conseil d'Administration.",
      "Affiliation officielle et intégration au Congrès National.",
    ]}
    note="Ce parcours concerne uniquement les structures déjà existantes souhaitant obtenir le label Junior-Entreprise."
  />
);

export default Startup;
