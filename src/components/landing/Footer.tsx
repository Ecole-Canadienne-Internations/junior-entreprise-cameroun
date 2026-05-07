import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo-jecam.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-anthracite text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto container-px">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Junior Entreprise Cameroun" className="h-12 w-auto bg-background rounded-lg p-1" />
              <span className="font-display font-bold text-lg">Junior Entreprise Cameroun</span>
            </div>
            <p className="mt-5 text-primary-foreground/70 max-w-md leading-relaxed">
              <span className="text-primary font-semibold">Notre vision :</span> Bâtir le pont entre le monde
              académique et le secteur privé pour l'émergence du Cameroun.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Réseau social"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 hover:bg-primary hover:border-primary grid place-items-center transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-5">Navigation</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li><a href="#services" className="hover:text-primary transition-smooth">Nos Services</a></li>
              <li><a href="#realisations" className="hover:text-primary transition-smooth">Réalisations</a></li>
              <li><a href="#evenements" className="hover:text-primary transition-smooth">Événements</a></li>
              <li><a href="#lead" className="hover:text-primary transition-smooth">Lancer un projet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-5">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                Carrefour Mvogt, Yaoundé (BP 5970)
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                +237 6 79 74 76 11
              </li>
              <li className="flex items-center gap-3 break-all">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                contact@juniorentreprisecameroun.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Junior Entreprise Cameroun. Tous droits réservés.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-smooth">Mentions légales</a>
            <a href="#" className="hover:text-primary transition-smooth">Confidentialité</a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-primary-foreground/50">
          Built by{" "}
          <a
            href="https://delmarwebstudios.qzz.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Delmar Web Studios
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
