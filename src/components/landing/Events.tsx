import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import eventMeeting from "@/assets/event-meeting.jpg";
import eventTurquie from "@/assets/event-turquie-1.jpg";
import eventSaintJean from "@/assets/event-saintjean.jpg";
import eventSommet2027 from "@/assets/event-sommet-2027.png";
import newsEnit from "@/assets/news-enit-partenariat.png";

const events = [
  {
    cat: "Actualité",
    color: "bg-primary/10 text-primary",
    image: newsEnit,
    title: "Nouveau partenariat avec ENIT Junior Entreprise",
    date: "Récent",
    place: "Cameroun — Tunisie",
    desc: "Partenariat stratégique avec ENIT Junior Entreprise pour mutualiser nos compétences et mieux accompagner vos projets informatiques. #Partenariat #Innovation #JECC #SolutionsInformatiques",
  },
  {
    cat: "À venir",
    color: "bg-primary/10 text-primary",
    image: eventSommet2027,
    title: "Sommet Junior-Entreprises & Croissance 2027",
    date: "Année 2027",
    place: "Cameroun",
    desc: "Sommet dédié aux Start-up / TPE et à la croissance des Junior-Entreprises. Rendez-vous incontournable de l'écosystème entrepreneurial.",
  },
  {
    cat: "Événement",
    color: "bg-primary/10 text-primary",
    image: eventMeeting,
    title: "Junior-Enterprises Meeting",
    date: "Chaque 22 Novembre",
    place: "Yaoundé",
    desc: "Le rendez-vous annuel qui rassemble toutes les J.E affiliées du Cameroun.",
  },
  {
    cat: "International",
    color: "bg-anthracite/10 text-anthracite",
    image: eventTurquie,
    title: "Renforcement des relations Cameroun-Turquie",
    date: "Récent",
    place: "Yaoundé",
    desc: "Visite officielle de l'Ambassadeur de Turquie à la Junior-Entreprise Cameroun, scellant une coopération renforcée entre les deux écosystèmes.",
  },
  {
    cat: "Actualité",
    color: "bg-primary/10 text-primary",
    image: eventSaintJean,
    title: "Installation du bureau MYSKILLS-IUSJC — Institut Saint Jean",
    date: "Récent",
    place: "Institut Saint Jean",
    desc: "Suite aux élections du bureau de la Junior Entreprise MYSKILLS-IUSJC, l'Administrateur Général M. Arnaud Sighano a présidé le Conseil d'Administration et procédé à l'installation officielle du bureau retenu.",
  },
];

const Events = () => {
  return (
    <section id="evenements" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">Événements & Meetups</div>
            <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
              Rejoignez le mouvement.
            </h2>
          </div>
          <Button variant="outline" size="lg">Voir tous les événements</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {events.map((e) => (
            <article
              key={e.title}
              className="group bg-background rounded-2xl overflow-hidden border border-border/60 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <Badge className={`absolute top-4 left-4 ${e.color} border-0 font-semibold`}>{e.cat}</Badge>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-display text-lg font-bold text-anthracite">{e.title}</h3>
                <p className="mt-2 text-sm text-anthracite-soft leading-relaxed flex-1">{e.desc}</p>
                <div className="mt-4 flex flex-col gap-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {e.date}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> {e.place}</div>
                </div>
                <Button variant="hero" className="mt-5 w-full">Participer</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
