import { brand, name } from '../metadata.json';
import { isFilled } from '../content';

export default function Brand({ small = false, onClick }: { small?: boolean; onClick?: () => void }) {
  return (
    <a className="flex items-center gap-2 group" href="#top" aria-label={brand.homeLabel} onClick={onClick}>
      {isFilled(brand.logo) ? <img className="block max-h-9 max-w-[165px]" src={brand.logo} alt={name} /> : (
        <>
          <span className={`${small ? 'w-6 h-6' : 'w-8 h-8'} bg-gradient-to-tr from-midna-violet to-midna-accent rounded-sm opacity-90 group-hover:rotate-45 transition-transform duration-500`} aria-hidden="true" />
          <span className={`font-display tracking-wide text-white ${small ? 'font-bold text-lg' : 'font-semibold text-xl'}`}>{brand.wordmark}</span>
        </>
      )}
    </a>
  );
}
