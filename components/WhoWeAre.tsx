import { useEffect, useState } from 'react';
import { about } from '../metadata.json';
import { isFilled } from '../content';

export default function WhoWeAre() {
  const [drift, setDrift] = useState(0);

  // The background word drifts slowly as the page scrolls.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onScroll = () => setDrift(window.scrollY * 0.1);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="who-we-are" className="relative py-32 lg:py-48 bg-midna-dark overflow-hidden" aria-labelledby="who-we-are-title">
      <div className="absolute top-1/2 left-1/2 pointer-events-none select-none z-0" aria-hidden="true"
        style={{ transform: `translate(-50%, calc(-50% + ${drift}px))` }}>
        <span className="text-[25vw] font-display font-bold text-outline opacity-20">{about.word}</span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[600px]">
          <div className="lg:w-1/2 pr-0 lg:pr-24 flex flex-col justify-center py-12">
            <p className="text-midna-blue uppercase tracking-widest text-sm font-semibold mb-6">{about.label}</p>
            <h2 id="who-we-are-title" className="text-4xl md:text-5xl font-display font-light mb-8 leading-tight">
              {about.title} <br /><span className="text-white font-medium">{about.titleStrong}</span>
            </h2>
            <p className="text-xl text-white/60 font-light leading-relaxed mb-8">{about.intro}</p>
            {isFilled(about.team) && <p className="text-xl text-white/60 font-light leading-relaxed mb-8">{about.team}</p>}
            <p className="text-lg text-white/60 font-light leading-relaxed border-l border-midna-accent/50 pl-6">{about.quote}</p>
          </div>

          <div className="lg:w-1/2 min-h-[420px] relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-midna-violet to-indigo-900 opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
              style={{ backgroundImage: `url('${about.panel.image}')` }} />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <p className="text-3xl md:text-5xl font-display font-light text-white text-center leading-tight">
                {about.panel.line} <br />
                <span className="font-bold tracking-tight italic">{about.panel.strong}</span>
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 border-l border-t border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
