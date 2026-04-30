import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-jecam.png";

const links = [
  { href: "#services", label: "Nos Services" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#evenements", label: "Événements" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto container-px flex items-center justify-between h-18 py-3">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Junior Entreprise Cameroun" className="h-11 w-auto" />
          <span className="hidden sm:block font-display font-bold text-anthracite leading-tight">
            Junior Entreprise<br />
            <span className="text-xs font-medium text-muted-foreground">Cameroun</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-anthracite-soft hover:text-primary transition-smooth"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="hero" size="default" asChild>
            <a href="#lead">Lancer un Projet</a>
          </Button>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-anthracite"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto container-px py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-medium text-anthracite py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#lead" onClick={() => setOpen(false)}>Lancer un Projet</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
