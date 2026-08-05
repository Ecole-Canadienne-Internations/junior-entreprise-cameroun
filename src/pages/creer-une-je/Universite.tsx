import { GraduationCap } from "lucide-react";
import TrackPage from "./TrackPage";

const Universite = () => (
  <TrackPage
    icon={GraduationCap}
    eyebrow="Parcours université"
    title="Créer une Junior-Entreprise dans"
    highlight="mon établissement."
    intro="Vous dirigez une université ou une grande école et souhaitez doter votre campus d'une Junior-Entreprise affiliée à la JECam."
    steps={[
      "Prise de contact officielle avec l'Administration Générale de la JECam.",
      "Séance de présentation du concept Junior-Entreprise aux responsables académiques.",
      "Signature d'une convention de partenariat entre l'établissement et la JECam.",
      "Désignation d'un enseignant référent et appel à candidatures auprès des étudiants.",
      "Élection du bureau exécutif et installation officielle par l'Administrateur Général.",
      "Accompagnement, formation des membres et affiliation au réseau national.",
    ]}
    note="Ce parcours est le seul concernant les établissements : les démarches étudiantes et startups sont décrites sur leurs pages dédiées."
  />
);

export default Universite;
