import { services } from '../metadata.json';
import { iconFor } from './icons';
import SectionHeading, { columnColors } from './SectionHeading';

export default function Specialization() {
  return (
    <section id="specialization" className="py-32 bg-midna-charcoal relative overflow-hidden" aria-labelledby="services-title">
      {/* Background abstract shape */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-midna-violet/10 via-midna-blue/5 to-transparent skew-y-3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading id="services-title" {...services} />

        <div className="pillars pillars-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {services.items.map((item, index) => {
            const Icon = iconFor(item.icon);
            return (
              <div key={item.title} className="group relative p-8 lg:p-12 hover:bg-white/5 transition-colors duration-500 min-h-[360px] flex flex-col justify-between">
                <div>
                  <span className={`block text-6xl font-display font-thin mb-8 opacity-40 group-hover:opacity-100 transition-opacity ${columnColors[index % columnColors.length]}`} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl font-display font-medium text-white mb-4">{item.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{item.detail}</p>
                </div>

                {/* Icon appearing on hover */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500" aria-hidden="true">
                  {Icon && <Icon className="w-8 h-8 text-white/80" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
