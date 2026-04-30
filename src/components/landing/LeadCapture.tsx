import { useState } from "react";
import { z } from "zod";
import { Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  prenom: z.string().trim().min(1, "Prénom requis").max(60),
  entreprise: z.string().trim().min(1, "Entreprise requise").max(120),
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
    toast({ title: "Merci !", description: "Votre catalogue arrive par WhatsApp." });
  };

  return (
    <section id="lead" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-secondary/50 rounded-3xl p-8 lg:p-14 border border-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider">
              <Download className="w-3.5 h-3.5" /> Lead Magnet
            </div>
            <h2 className="mt-5 font-display text-3xl lg:text-4xl font-bold text-anthracite text-balance">
              Téléchargez notre <span className="text-primary">Catalogue de Compétences</span>.
            </h2>
            <p className="mt-4 text-anthracite-soft text-lg leading-relaxed">
              Comment optimiser vos coûts opérationnels grâce à nos juniors experts —
              guide pratique de 24 pages, gratuit.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Tarifs jusqu'à 60% moins chers que le consulting traditionnel",
                "Méthodologie issue des meilleures écoles du Cameroun",
                "Études de cas concrets et témoignages clients",
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
                <h3 className="font-display text-xl font-bold text-anthracite">Demande reçue !</h3>
                <p className="mt-2 text-muted-foreground">
                  Nous vous envoyons le catalogue sur WhatsApp dans quelques minutes.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-anthracite mb-5">
                  Recevoir le catalogue
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="prenom">Prénom</Label>
                    <Input id="prenom" name="prenom" maxLength={60} placeholder="Jean" className="mt-1.5" />
                    {errors.prenom && <p className="text-xs text-destructive mt-1">{errors.prenom}</p>}
                  </div>
                  <div>
                    <Label htmlFor="entreprise">Entreprise</Label>
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
                  <Download className="w-5 h-5" /> Télécharger le catalogue
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
