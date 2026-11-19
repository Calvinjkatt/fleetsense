import { navigation } from '../metadata.json';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import Brand from './Brand';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      aria-label={navigation.label}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || open ? 'bg-midna-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
      onKeyDown={event => {
        if (event.key === 'Escape' && open) {
          close();
          toggle.current?.focus();
        }
      }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Brand onClick={close} />

        <div className="hidden md:flex items-center gap-10">
          {navigation.links.map(link => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide">{link.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href="#contact" className="hidden md:flex items-center gap-2 text-sm font-semibold text-white group">
            {navigation.contact}
            <ArrowRight className="w-4 h-4 text-midna-accent group-hover:translate-x-1 transition-transform" />
          </a>
          <button ref={toggle} className="md:hidden text-white p-2 -mr-2" aria-label={open ? navigation.close : navigation.open}
            aria-controls="mobile-nav" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="absolute top-full left-0 w-full bg-midna-dark border-b border-white/10 p-6 md:hidden flex flex-col gap-6 animate-fade-in-up">
          {navigation.links.map(link => (
            <a key={link.href} href={link.href} onClick={close} className="text-lg font-display text-white/80 hover:text-white">{link.label}</a>
          ))}
          <a href="#contact" onClick={close} className="text-lg font-display text-midna-accent">{navigation.contact}</a>
        </div>
      )}
    </nav>
  );
}
