import g1 from "@/assets/gallery-1.jpg.asset.json";
import g2 from "@/assets/gallery-2.jpg.asset.json";
import g3 from "@/assets/gallery-3.jpg.asset.json";
import g4 from "@/assets/gallery-4.jpg.asset.json";

const photos = [
  { src: g1.url, caption: "Rencontre au siège de la JECam — Administrateur Général & équipe" },
  { src: g2.url, caption: "Cérémonie d'installation du bureau — Yaoundé" },
  { src: g3.url, caption: "Traditional Junior Enterprises Meeting — session d'accueil" },
  { src: g4.url, caption: "Traditional Junior Enterprises Meeting — panel et échanges" },
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

        {/* Mosaïque asymétrique — inspirée de la référence */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-3 lg:gap-4">
          <figure className="relative group overflow-hidden rounded-2xl col-span-1 row-span-1 shadow-card">
            <img src={photos[0].src} alt={photos[0].caption} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-smooth">
              {photos[0].caption}
            </figcaption>
          </figure>

          <figure className="relative group overflow-hidden rounded-2xl col-span-1 row-span-1 shadow-card">
            <img src={photos[1].src} alt={photos[1].caption} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-smooth">
              {photos[1].caption}
            </figcaption>
          </figure>

          <figure className="relative group overflow-hidden rounded-2xl col-span-2 row-span-2 shadow-card">
            <img src={photos[3].src} alt={photos[3].caption} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-sm text-white opacity-0 group-hover:opacity-100 transition-smooth">
              {photos[3].caption}
            </figcaption>
          </figure>

          <figure className="relative group overflow-hidden rounded-2xl col-span-2 row-span-1 shadow-card">
            <img src={photos[2].src} alt={photos[2].caption} loading="lazy" className="w-full h-full object-cover transition-smooth group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs text-white opacity-0 group-hover:opacity-100 transition-smooth">
              {photos[2].caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
