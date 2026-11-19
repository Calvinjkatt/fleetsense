import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { work } from '../metadata.json';
import { isFilled } from '../content';
import OptionalPhoto from './OptionalPhoto';

type Product = {
  name: string; tagline: string; headline: string; summary: string; features: string[]; image: string;
  status?: string; screenshot?: { src: string; alt: string }; cta?: string;
};

export default function Products() {
  const products: Product[] = [...work.items, work.custom];
  return (
    <section id="products" className="py-32 bg-midna-dark relative overflow-hidden" aria-labelledby="products-title">
      <div className="container mx-auto px-6 lg:px-12 mb-20">
        <h2 id="products-title" className="text-4xl md:text-6xl font-display font-light text-white">{work.title}</h2>
        <p className="text-xl text-white/60 max-w-2xl font-light mt-6">{work.intro}</p>
      </div>

      <div className="flex flex-col gap-0">
        {products.map((product, index) => {
          const right = index % 2 === 1;
          return (
            <article key={product.name} className="relative w-full group">
              {/* Dimmed background image */}
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 z-0" aria-hidden="true">
                <div className="absolute inset-0 bg-midna-dark/85 z-10" />
                <img src={product.image} alt="" loading="lazy" className="w-full h-full object-cover grayscale opacity-50" />
              </div>

              <div className="relative z-20 container mx-auto px-6 lg:px-12 py-24 md:py-32">
                <div className={`flex ${right ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-2xl p-8 md:p-12 backdrop-blur-md border border-white/5 bg-midna-charcoal/40 transition-all duration-500 hover:bg-midna-charcoal/60 ${right ? 'md:-mr-12' : 'md:-ml-12'}`}>
                    <p className="text-midna-accent font-mono text-sm tracking-wider uppercase mb-4" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="text-4xl md:text-5xl font-display text-white mb-3">{product.headline}</h3>
                    <p className="text-xl text-white/80 font-light italic mb-8">{product.tagline}</p>
                    <p className="text-white/60 leading-relaxed mb-8 font-light">{product.summary}</p>
                    {isFilled(product.status) && <p className="text-midna-blue text-sm mb-8">{product.status}</p>}
                    {product.screenshot && <OptionalPhoto {...product.screenshot} />}

                    <ul className={product.cta ? 'mb-8 space-y-3' : 'space-y-3'}>
                      {product.features.filter(isFilled).map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                          <CheckCircle2 className="w-4 h-4 shrink-0 text-midna-blue" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {product.cta && (
                      <a href="#contact" className="group/cta inline-flex items-center gap-3 px-8 py-4 bg-white text-midna-dark font-semibold tracking-wide hover:bg-gray-100 transition-colors">
                        {product.cta}
                        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Separator line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-30" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
