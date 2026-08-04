import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis").max(60),
  entreprise: z.string().trim().min(1, "Structure requise").max(120),
  secteur: z.string().trim().min(1, "Secteur requis").max(80),
  whatsapp: z
    .string()
    .trim()
    .min(6, "Numéro WhatsApp invalide")
    .max(20)
    .regex(/^[+0-9\s\-()]+$/, "Numéro invalide"),
});

const LeadCapture = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast({ title: "Merci !", description: "Votre formulaire d'inscription a bien été transmis." });
  };

  return (
    <section id="lead" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-secondary/60 to-background rounded-3xl p-8 lg:p-14 border border-border/60 shadow-card">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider">
              <Send className="w-3.5 h-3.5" /> Inscription
            </div>
            <h2 className="mt-5 font-display text-3xl lg:text-4xl font-bold text-anthracite text-balance">
              Formulaire <span className="text-primary">d'inscription</span>.
            </h2>
            <p className="mt-4 text-anthracite-soft text-lg leading-relaxed">
              Entreprise, université, étudiant ou startup : remplissez ce formulaire pour rejoindre
              le réseau Junior-Entreprise Cameroun ou confier un projet à nos juniors experts.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Réponse de notre équipe sous 24h ouvrées.",
                "Orientation vers la Junior-Entreprise la plus adaptée à votre besoin.",
                "Accompagnement gratuit et sans engagement.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-anthracite-soft">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-background rounded-2xl p-6 lg:p-8 shadow-card border border-border"
            noValidate
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 grid place-items-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-anthracite">Inscription reçue !</h3>
                <p className="mt-2 text-muted-foreground">
                  Notre équipe vous recontacte sur WhatsApp dans les meilleurs délais.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-anthracite mb-5">
                  Remplir le formulaire
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input id="prenom" name="prenom" maxLength={60} placeholder="Jean" className="mt-1.5" />
                    {errors.prenom && <p className="text-xs text-destructive mt-1">{errors.prenom}</p>}
                  </div>
                  <div>
                    <Label htmlFor="entreprise">Structure / Établissement</Label>
                    <Input id="entreprise" name="entreprise" maxLength={120} placeholder="Ma société SARL" className="mt-1.5" />
                    {errors.entreprise && <p className="text-xs text-destructive mt-1">{errors.entreprise}</p>}
                  </div>
                  <div>
                    <Label htmlFor="secteur">Secteur d'activité</Label>
                    <Input id="secteur" name="secteur" maxLength={80} placeholder="Tech, Agro, Services..." className="mt-1.5" />
                    {errors.secteur && <p className="text-xs text-destructive mt-1">{errors.secteur}</p>}
                  </div>
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input id="whatsapp" name="whatsapp" maxLength={20} placeholder="+237 6 XX XX XX XX" className="mt-1.5" />
                    {errors.whatsapp && <p className="text-xs text-destructive mt-1">{errors.whatsapp}</p>}
                  </div>
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full mt-6">
                  <Send className="w-5 h-5" /> Soumettre le formulaire d'inscription
                </Button>
                <p className="mt-3 text-xs text-muted-foreground text-center">
                  Vos données restent confidentielles. Aucun spam.
                </p>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LeadCapture;
