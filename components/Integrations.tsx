import { ArrowRight } from 'lucide-react';
import { integrations } from '../metadata.json';
import SectionHeading, { columnColors } from './SectionHeading';

const cell = 'border-r border-b border-white/10 hover:bg-white/5 transition-colors duration-500';

export default function Integrations() {
  return (
    <section id="integrations" className="py-32 bg-midna-charcoal relative overflow-hidden" aria-labelledby="integrations-title">
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 bg-gradient-to-r from-midna-violet/10 via-midna-blue/5 to-transparent -skew-y-3 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading id="integrations-title" {...integrations} />

        {/* Platform logos, shown in white to sit on the dark background. */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {integrations.platforms.map(platform => (
            <li key={platform.name} className={`group ${cell} flex flex-col items-center justify-center gap-5 px-6 py-12 min-h-[200px]`}>
              <img src={platform.logo} alt={platform.name} loading="lazy"
                className="h-8 md:h-9 w-auto max-w-[75%] object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-500 [filter:brightness(0)_invert(1)]" />
              <span className="text-sm text-white/40 font-light text-center">{platform.detail}</span>
            </li>
          ))}
          <li className={`${cell} flex flex-col items-center justify-center gap-4 px-6 py-12 min-h-[200px]`}>
            <span className="text-4xl md:text-5xl font-display font-thin text-midna-accent">{integrations.more.label}</span>
            <span className="text-sm text-white/40 font-light text-center max-w-[22ch]">{integrations.more.detail}</span>
          </li>
        </ul>

        <p className="text-midna-blue uppercase tracking-widest text-sm font-semibold mt-24 mb-8">{integrations.groupsLabel}</p>
        <div className="pillars pillars-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {integrations.groups.map((group, index) => (
            <div key={group.title} className="p-8 lg:p-12 hover:bg-white/5 transition-colors duration-500">
              <h3 className={`text-sm uppercase tracking-widest font-semibold mb-10 ${columnColors[index % columnColors.length]}`}>{group.title}</h3>
              <ul className="space-y-7">
                {group.items.map(item => (
                  <li key={item.name}>
                    <span className="block text-2xl font-display font-medium text-white">{item.name}</span>
                    <span className="block mt-1 text-sm text-white/50 font-light">{item.detail}</span>
                  </li>
                ))}
                <li className="text-2xl font-display font-light italic text-white/40">{integrations.groupMore}</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <a href="#contact" className="flex items-center gap-2 text-sm font-semibold text-white group">
            {integrations.inquiry}
            <ArrowRight className="w-4 h-4 shrink-0 text-midna-accent group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <p className="text-xs text-white/30">{integrations.note}</p>
        </div>
      </div>
    </section>
  );
}
