import { experience, industries, process as approach } from '../metadata.json';
import { isFilled } from '../content';
import SectionHeading, { columnColors } from './SectionHeading';

export function Process() {
  return (
    <section id="process" className="py-32 bg-midna-dark relative overflow-hidden" aria-labelledby="process-title">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeading id="process-title" {...approach} />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {approach.steps.map((step, index) => (
            <li key={step.title} className="border-t border-white/10 pt-8">
              <p className="text-midna-accent font-mono text-sm tracking-wider uppercase mb-4" aria-hidden="true">{String(index + 1).padStart(2, '0')}</p>
              <h3 className="text-2xl font-display font-medium text-white mb-4">{step.title}</h3>
              <p className="text-white/60 font-light leading-relaxed">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Experience() {
  const sectors = industries.items.filter(isFilled);
  return (
    <section id="experience" className="py-32 bg-midna-charcoal relative overflow-hidden" aria-labelledby="experience-title">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-5/12">
            <p className="text-midna-blue uppercase tracking-widest text-sm font-semibold mb-6">{experience.label}</p>
            <h2 id="experience-title" className="text-4xl md:text-5xl font-display font-light leading-tight">
              {experience.title} <br /><span className="text-white font-medium">{experience.titleStrong}</span>
            </h2>
            {sectors.length > 0 && (
              <p className="mt-8 text-sm text-white/50">
                <span className="uppercase tracking-widest font-semibold text-white/40 mr-3">{industries.title}</span>
                {sectors.join(' · ')}
              </p>
            )}
          </div>
          <div className="lg:w-7/12 space-y-10 lg:pt-2">
            {experience.items.map(item => (
              <div key={item.client} className="border-l border-midna-accent/50 pl-6">
                <h3 className="text-2xl font-display font-medium text-white mb-2">{item.client}</h3>
                <p className="text-lg text-white/60 font-light leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <dl className="flex flex-col md:flex-row mt-24 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {experience.facts.map((fact, index) => (
            <div key={fact.context} className="flex-1 flex flex-col-reverse md:flex-row-reverse md:items-center justify-end gap-x-10 p-8 lg:p-12">
              <dt className="text-xl text-white/60 font-light leading-relaxed max-w-md">{fact.context}</dt>
              <dd className={`text-7xl md:text-8xl font-display font-thin mb-6 md:mb-0 ${columnColors[index % columnColors.length]}`}>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
