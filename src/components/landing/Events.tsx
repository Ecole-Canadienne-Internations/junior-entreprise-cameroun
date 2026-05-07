import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import eventNetworking from "@/assets/event-networking.jpg";
import eventWorkshop from "@/assets/event-workshop.jpg";
import eventConference from "@/assets/event-conference.jpg";

const events = [
  {
    cat: "Événement",
    color: "bg-primary/10 text-primary",
    image: eventNetworking,
    title: "Junior-Enterprises Meeting",
    date: "Chaque 22 Novembre",
    place: "Yaoundé",
    desc: "Le rendez-vous annuel qui rassemble toutes les J.E affiliées du Cameroun.",
  },
  {
    cat: "Partenariat",
    color: "bg-anthracite/10 text-anthracite",
    image: eventWorkshop,
    title: "GEFI Network — Collaboration stratégique",
    date: "En cours",
    place: "International",
    desc: "Une alliance pour ouvrir de nouvelles opportunités à nos consultants juniors.",
  },
  {
    cat: "International",
    color: "bg-primary/10 text-primary",
    image: eventConference,
    title: "Renforcement des relations Cameroun-Turquie",
    date: "2026",
    place: "Yaoundé — Istanbul",
    desc: "Échanges, missions et coopération renforcée entre les deux écosystèmes étudiants.",
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

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
