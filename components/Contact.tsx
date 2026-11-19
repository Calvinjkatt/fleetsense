import { ArrowRight, Mail } from 'lucide-react';
import { contact } from '../metadata.json';

const label = 'block text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2';
const field = 'w-full border-b border-gray-300 py-2 focus:outline-none focus:border-midna-violet transition-colors bg-transparent rounded-none';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gray-100 text-midna-charcoal overflow-hidden" aria-labelledby="contact-title">
      {/* Background faded word */}
      <div className="absolute top-0 right-0 pointer-events-none select-none opacity-[0.03]" aria-hidden="true">
        <span className="text-[20vw] font-display font-bold text-black leading-none">{contact.word}</span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-5/12">
            <h2 id="contact-title" className="text-4xl md:text-6xl font-display font-light mb-8 text-midna-dark">
              {contact.title} <br />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-midna-violet to-midna-accent">{contact.titleStrong}</span>
            </h2>
            <p className="text-xl text-gray-600 font-light mb-12">{contact.intro}</p>

            <a href={'mailto:' + contact.email} className="flex items-start gap-4 group w-fit">
              <span className="p-3 bg-white rounded-full shadow-sm"><Mail className="w-6 h-6 text-midna-violet" aria-hidden="true" /></span>
              <span>
                <span className="block font-semibold text-midna-dark">{contact.emailLabel}</span>
                <span className="block text-gray-500 group-hover:text-midna-violet transition-colors">{contact.email}</span>
              </span>
            </a>
          </div>

          <div className="lg:w-7/12">
            <form action="https://formspree.io/f/mzznyjep" method="POST" className="bg-white p-8 md:p-12 shadow-2xl shadow-gray-200/50 rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <label><span className={label}>{contact.firstName}</span>
                  <input type="text" name="firstName" autoComplete="given-name" required className={field} placeholder={contact.firstNameHint} /></label>
                <label><span className={label}>{contact.lastName}</span>
                  <input type="text" name="lastName" autoComplete="family-name" required className={field} placeholder={contact.lastNameHint} /></label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <label><span className={label}>{contact.workEmail}</span>
                  <input type="email" name="email" autoComplete="email" required className={field} placeholder={contact.workEmailHint} /></label>
                <label><span className={label}>{contact.topic}</span>
                  <select name="topic" defaultValue={contact.topics[0]} className={field + ' cursor-pointer'}>
                    {contact.topics.map(topic => <option key={topic}>{topic}</option>)}
                  </select></label>
              </div>

              <label className="block mb-12"><span className={label}>{contact.message}</span>
                <textarea name="message" rows={4} required className={field + ' resize-none'} placeholder={contact.messageHint} /></label>

              <button type="submit" className="group w-full md:w-auto bg-midna-dark text-white px-8 py-4 flex items-center justify-center gap-3 hover:bg-midna-violet transition-colors duration-300">
                <span>{contact.submit}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
