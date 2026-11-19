import { ChevronDown } from 'lucide-react';
import { hero } from '../metadata.json';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center" aria-labelledby="hero-title">
      {/* Background with atmospheric gradients */}
      <div className="absolute inset-0 bg-midna-dark" aria-hidden="true">
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: `url('${hero.image}')` }} />
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-midna-violet/30 rounded-full blur-[120px] animate-slow-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-midna-dark/20 to-midna-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-midna-dark/80 via-transparent to-midna-dark/40" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 z-10 pt-28 pb-24">
        <div className="max-w-6xl">
          <h1 id="hero-title" className="font-display font-light text-5xl md:text-6xl xl:text-7xl leading-[1.1] tracking-tight text-white mb-8 animate-fade-in-up">
            <span className="block [text-wrap:balance]">{hero.headline}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-midna-blue via-white to-white font-normal">{hero.emphasis}</span>
          </h1>

          <p className="text-lg md:text-2xl text-white/70 max-w-3xl font-light mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>{hero.intro}</p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="inline-block px-8 py-4 bg-white text-midna-dark font-semibold tracking-wide hover:bg-gray-100 transition-colors">{hero.primary}</a>
            <a href="#products" className="inline-block px-8 py-4 border border-white/20 text-white font-semibold tracking-wide hover:bg-white/5 transition-colors">{hero.secondary}</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce" aria-hidden="true">
        <ChevronDown size={32} />
      </div>

      {/* Large decorative word */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none select-none opacity-10" aria-hidden="true">
        <span className="text-[20vw] font-display font-bold text-white leading-none tracking-tighter">{hero.word}</span>
      </div>
    </section>
  );
}
