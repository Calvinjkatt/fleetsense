import { navigation, sectionOrder } from './metadata.json';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Specialization from './components/Specialization';
import Products from './components/Products';
import Integrations from './components/Integrations';
import { Experience, Process } from './components/Company';
import Contact from './components/Contact';
import Footer from './components/Footer';

const sections = { about: WhoWeAre, services: Specialization, work: Products, integrations: Integrations, process: Process, experience: Experience, contact: Contact };

export default function App() {
  useEffect(() => {
    const preference = window.matchMedia('(any-pointer: fine) and (prefers-reduced-motion: no-preference)');
    let wheel: Lenis | undefined;

    function updateScrolling() {
      wheel?.destroy();
      wheel = preference.matches ? new Lenis({
        autoRaf: true,
        lerp: 0.15,
        prevent: element => element.tagName === 'TEXTAREA',
      }) : undefined;
    }

    // Let links, keyboard navigation and scrollbar drags interrupt wheel momentum.
    function interruptWheel() {
      if (wheel?.isScrolling === 'smooth') {
        wheel.scrollTo(window.scrollY, { immediate: true });
      }
    }

    updateScrolling();
    preference.addEventListener('change', updateScrolling);
    window.addEventListener('pointerdown', interruptWheel, { capture: true, passive: true });
    window.addEventListener('keydown', interruptWheel, true);
    return () => {
      wheel?.destroy();
      preference.removeEventListener('change', updateScrolling);
      window.removeEventListener('pointerdown', interruptWheel, true);
      window.removeEventListener('keydown', interruptWheel, true);
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-midna-dark selection:bg-midna-accent selection:text-white">
      <a className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:text-black focus:px-4 focus:py-3" href="#main">{navigation.skip}</a>
      <Navbar />
      <main id="main">
        <Hero />
        {sectionOrder.map(key => {
          const Section = sections[key as keyof typeof sections];
          return Section && <Section key={key} />;
        })}
      </main>
      <Footer />
    </div>
  );
}
