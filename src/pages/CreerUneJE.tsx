import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, GraduationCap, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/Footer";

const tracks = [
  {
    id: "universite",
    icon: GraduationCap,
    title: "Responsable d'université",
    intro:
      "Vous dirigez une université ou une grande école et souhaitez doter votre campus d'une Junior-Entreprise affiliée à la JECam.",
    steps: [
      "Prise de contact officielle avec l'Administration Générale de la JECam.",
      "Séance de présentation du concept Junior-Entreprise aux responsables académiques.",
      "Signature d'une convention de partenariat entre l'établissement et la JECam.",
      "Désignation d'un enseignant référent et appel à candidatures auprès des étudiants.",
      "Élection du bureau exécutif et installation officielle par l'Administrateur Général.",
      "Accompagnement, formation des membres et affiliation au réseau national.",
    ],
  },
  {
    id: "etudiant",
    icon: Users,
    title: "Étudiant porteur du projet",
    intro:
      "Vous êtes étudiant et souhaitez lancer la Junior-Entreprise de votre université.",
    steps: [
      "Constituer une équipe fondatrice de 5 à 10 étudiants motivés.",
      "Obtenir l'accord de principe de l'administration de votre établissement.",
      "Déposer votre dossier de création auprès de la Direction Exécutive de la JECam.",
      "Rédiger les statuts et le règlement intérieur avec l'appui de la JECam.",
      "Suivre la formation initiale : gestion de projet, commercial, comptabilité.",
      "Élire le bureau, être installé officiellement puis affilié au réseau.",
    ],
  },
  {
    id: "startup",
    icon: Rocket,
    title: "Startup souhaitant devenir J.E",
    intro:
      "Votre structure est portée par des étudiants ou jeunes diplômés et souhaite intégrer le mouvement.",
    steps: [
      "Envoyer une demande d'adhésion accompagnée de la présentation de la structure.",
      "Audit de conformité : gouvernance étudiante, pédagogie et objet social.",
      "Mise en conformité des statuts avec la charte des Junior-Entreprises.",
      "Rattachement à un établissement d'enseignement partenaire.",
      "Validation du dossier par le Conseil d'Administration.",
      "Affiliation officielle et intégration au Congrès National.",
    ],
  },
];

const CreerUneJE = () => (
  <main className="min-h-screen bg-background">
    <section className="pt-28 pb-16 lg:pt-36">
      <div className="container mx-auto container-px">
        <Button variant="outline" asChild className="mb-8">
          <Link to="/">
            <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
          </Link>
        </Button>
        <div className="max-w-3xl">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Processus de création</div>
          <h1 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            Créer une <span className="text-primary">Junior-Entreprise</span> au Cameroun.
          </h1>
          <p className="mt-4 text-anthracite-soft leading-relaxed">
            La JECam accompagne chaque porteur de projet, de la première rencontre jusqu'à
            l'affiliation officielle au réseau national.
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {tracks.map((t) => (
            <div key={t.id} id={t.id} className="scroll-mt-28">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                  <t.icon className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-anthracite">{t.title}</h2>
              </div>
              <p className="mt-3 text-anthracite-soft max-w-3xl">{t.intro}</p>
              <ol className="mt-6 grid md:grid-cols-2 gap-4">
                {t.steps.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 shadow-card p-5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-anthracite-soft">
                      <span className="font-semibold text-anthracite">Étape {i + 1}. </span>
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/#lead">Soumettre mon formulaire d'inscription</Link>
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </main>
);

export default CreerUneJE;
