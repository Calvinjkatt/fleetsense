export default function SectionHeading({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <div className="mb-20">
      <h2 id={id} className="text-3xl md:text-5xl font-display font-light text-white mb-6">{title}</h2>
      {intro && <p className="text-xl text-white/60 max-w-2xl font-light">{intro}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-midna-accent to-transparent mt-8" />
    </div>
  );
}

// Accent colors cycled across numbered columns, as on the original site.
export const columnColors = ['text-midna-blue', 'text-midna-lavender', 'text-midna-accent', 'text-emerald-400'];
