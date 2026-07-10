import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, caption: "Rencontre officielle — poignée de main diplomatique" },
  { src: g6, caption: "Traditional Junior-Enterprises Meeting — Junior Enterprises World Day (JEWD)" },
  { src: g2, caption: "Remise de présents — visite protocolaire" },
  { src: g3, caption: "Échanges en salle — délégation JECam" },
  { src: g4, caption: "Signature de document officiel" },
  { src: g5, caption: "Photo de famille — délégation & partenaires" },
];

const Gallery = () => {
  return (
    <section id="galerie" className="py-20 lg:py-28 bg-secondary/40">
      <div className="container mx-auto container-px">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Galerie</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance">
            La vie de la <span className="text-primary">JECam en images</span>.
          </h2>
          <p className="mt-4 text-anthracite-soft leading-relaxed">
            Rencontres, cérémonies et moments forts qui rythment notre mouvement.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`relative group overflow-hidden rounded-2xl shadow-card ${
                i === 1 ? "row-span-2 col-span-2 lg:col-span-2" : ""
              }`}
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3] transition-smooth group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-smooth">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
