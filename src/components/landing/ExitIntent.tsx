import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const KEY = "jecam_exit_seen";

const ExitIntent = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem(KEY, "1");
      }
    };
    const t = window.setTimeout(() => document.addEventListener("mouseout", onLeave), 5000);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) && email.length <= 255;
    if (!ok) {
      toast({ title: "Email invalide", description: "Merci de saisir un email valide." });
      return;
    }
    toast({ title: "Inscription confirmée !", description: "Vous recevrez nos prochaines opportunités." });
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[60] bg-anthracite/70 backdrop-blur-sm grid place-items-center p-4 animate-fade-in"
      onClick={() => setOpen(false)}
    >
      <div
        className="bg-background rounded-3xl shadow-elegant max-w-md w-full p-8 relative animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Fermer"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-anthracite"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-xs uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Ne partez pas !
        </div>
        <h3 className="mt-4 font-display text-2xl font-bold text-anthracite text-balance">
          Envie de rejoindre le mouvement ?
        </h3>
        <p className="mt-2 text-anthracite-soft">
          Recevez nos prochaines opportunités de recrutement et d'événements.
        </p>
        <form onSubmit={submit} className="mt-5 flex flex-col gap-3">
          <Input
            type="email"
            placeholder="votre@email.com"
            value={email}
            maxLength={255}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="hero" size="lg">Je m'inscris gratuitement</Button>
        </form>
      </div>
    </div>
  );
};

export default ExitIntent;
