import { useEffect, useRef, useState } from "react";
import partnerPrepa from "@/assets/partner-prepavogt.png";
import partnerJE from "@/assets/partner-junior-entreprises.png";
import partnerGefi from "@/assets/partner-gefi.png";

const useCountUp = (target: number, duration = 1800) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              setVal(Math.floor(p * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);

  return { val, ref };
};

const Counter = ({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) => {
  const { val, ref } = useCountUp(to);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-extrabold text-5xl lg:text-6xl text-anthracite tracking-tight">
        {val}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-2 text-sm lg:text-base text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const partners = [
  { src: partnerPrepa, alt: "Prépa VOGT" },
  { src: partnerJE, alt: "Junior-Entreprises" },
  { src: partnerGefi, alt: "GEFI" },
];

const Stats = () => {
  return (
    <section id="realisations" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">Notre impact</div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance max-w-3xl mx-auto">
            Des chiffres qui témoignent de notre rigueur.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-12 max-w-4xl mx-auto">
          <Counter to={50} suffix="+" label="Projets accompagnés" />
          <Counter to={120} suffix="" label="Consultants juniors formés" />
          <Counter to={95} suffix="%" label="Satisfaction client" />
        </div>

        <div className="mt-20">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-10">
            Ils nous font confiance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20">
            {partners.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-16 lg:h-20 w-auto object-contain transition-smooth hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
