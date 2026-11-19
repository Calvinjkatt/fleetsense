import { contact, footer } from '../metadata.json';
import Brand from './Brand';

export default function Footer() {
  return (
    <footer className="bg-midna-charcoal text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="mb-6"><Brand small /></div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">{footer.tagline}</p>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-6">{footer.linksTitle}</h2>
            <ul className="space-y-4 text-sm text-white/60">
              {footer.links.map(link => <li key={link.href}><a href={link.href} className="hover:text-white transition-colors">{link.label}</a></li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} {footer.company} {footer.rights}</p>
          <a href={'mailto:' + contact.email} className="mt-4 md:mt-0 hover:text-white">{contact.email}</a>
        </div>
      </div>
    </footer>
  );
}
