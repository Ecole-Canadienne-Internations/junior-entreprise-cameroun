import { Users } from "lucide-react";
import TrackPage from "./TrackPage";

const Etudiant = () => (
  <TrackPage
    icon={Users}
    eyebrow="Parcours étudiant"
    title="Lancer la Junior-Entreprise de"
    highlight="mon université."
    intro="Vous êtes étudiant et souhaitez fédérer vos camarades autour d'une Junior-Entreprise affiliée à la JECam."
    steps={[
      "Constituer une équipe fondatrice de 5 à 10 étudiants motivés.",
      "Obtenir l'accord de principe de l'administration de votre établissement.",
      "Déposer votre dossier de création auprès de la Direction Exécutive de la JECam.",
      "Rédiger les statuts et le règlement intérieur avec l'appui de la JECam.",
      "Suivre la formation initiale : gestion de projet, commercial, comptabilité.",
      "Élire le bureau, être installé officiellement puis affilié au réseau national.",
    ]}
    note="Ce parcours concerne uniquement les porteurs de projet étudiants."
  />
);

export default Etudiant;
