import { useEffect, useRef, useState } from "react";

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

const Counter = ({
  to,
  suffix = "",
  prefix = "",
  label,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  label: string;
}) => {
  const { val, ref } = useCountUp(to);
  const display = prefix ? `${prefix}${val.toString().padStart(2, "0")}` : `${val}`;
  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-extrabold text-5xl lg:text-6xl text-anthracite tracking-tight">
        {display}
        <span className="text-primary">{suffix}</span>
      </div>
      <div className="mt-2 text-sm lg:text-base text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section id="realisations" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto container-px">
        <div className="text-center mb-16">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
            Notre impact
          </div>
          <h2 className="mt-3 font-display text-3xl lg:text-5xl font-bold text-anthracite text-balance max-w-3xl mx-auto">
            Des chiffres qui témoignent de notre rigueur.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 max-w-5xl mx-auto">
          <Counter to={21} label="Junior-Entreprises affiliées" />
          <Counter to={150} suffix="+" label="Projets réalisés" />
          <Counter to={775} suffix="+" label="Étudiants consultants" />
          <Counter to={6} prefix="0" label="Congrès nationaux & internationaux" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
