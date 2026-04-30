import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const phone = "237600000000";
  const msg = encodeURIComponent("Bonjour, je souhaite un devis gratuit.");
  const href = `https://wa.me/${phone}?text=${msg}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-background rounded-2xl shadow-elegant border border-border p-4 w-72 animate-fade-up">
          <div className="flex items-start justify-between mb-2">
            <div className="font-display font-bold text-anthracite">Besoin d'un devis ?</div>
            <button aria-label="Fermer" onClick={() => setOpen(false)} className="text-muted-foreground hover:text-anthracite">
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-anthracite-soft mb-4">
            Discutons de votre projet sur WhatsApp. Réponse sous 1h en journée.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center w-full bg-gradient-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:shadow-elegant transition-smooth"
          >
            Démarrer la discussion
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label="Ouvrir WhatsApp"
        className="relative w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground shadow-elegant grid place-items-center hover:scale-105 transition-smooth"
      >
        <span className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
        <MessageCircle className="w-7 h-7 relative" />
      </button>
    </div>
  );
};

export default WhatsAppWidget;
