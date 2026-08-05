import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/Footer";

export interface TrackPageProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  steps: string[];
  note?: string;
}

const TrackPage = ({ icon: Icon, eyebrow, title, highlight, intro, steps, note }: TrackPageProps) => (
  <main className="min-h-screen bg-background">
    <section className="pt-28 pb-16 lg:pt-36">
      <div className="container mx-auto container-px">
        <Button variant="outline" asChild className="mb-8">
          <Link to="/creer-une-je">
            <ArrowLeft className="w-4 h-4" /> Retour aux parcours
          </Link>
        </Button>

        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
              <Icon className="w-6 h-6" />
            </div>
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">{eyebrow}</div>
          </div>
          <h1 className="mt-4 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            {title} <span className="text-primary">{highlight}</span>
          </h1>
          <p className="mt-4 text-anthracite-soft leading-relaxed">{intro}</p>
        </div>

        <ol className="mt-12 grid md:grid-cols-2 gap-4">
          {steps.map((s, i) => (
            <li key={s} className="flex items-start gap-3 rounded-2xl border border-border/60 shadow-card p-5">
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-anthracite-soft">
                <span className="font-semibold text-anthracite">Étape {i + 1}. </span>
                {s}
              </span>
            </li>
          ))}
        </ol>

        {note && (
          <p className="mt-8 max-w-3xl text-sm text-anthracite-soft border-l-4 border-primary pl-4">{note}</p>
        )}

        <div className="mt-14 text-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/#lead">Soumettre mon formulaire d'inscription</Link>
          </Button>
        </div>
      </div>
    </section>
    <Footer />
  </main>
);

export default TrackPage;
