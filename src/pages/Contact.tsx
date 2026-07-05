import { Mail, Instagram, Clock, Phone } from 'lucide-react';
import ContactPortal from '../components/ContactPortal';
import { BUSINESS_INFO } from '../data/business';

export default function Contact() {
  return (
    <div className="bg-[#FAF9F6]">
      <div className="bg-gradient-to-r from-stone-950 via-[#0B132B] to-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="inline-block text-[9px] uppercase font-display font-bold tracking-[0.25em] border border-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-1.5">
            CONTACT US
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
            Get In Touch
          </h1>
        </div>
      </div>

      {/* Quick Contact Info Strip */}
      <section className="bg-white border-b border-stone-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <a href={`tel:+91${BUSINESS_INFO.phones[0]}`} className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200 group-hover:bg-sky-500 group-hover:text-white transition">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-stone-600 uppercase tracking-wide">
              +91 {BUSINESS_INFO.phones[0]}
            </span>
          </a>
          <a href={`mailto:${BUSINESS_INFO.email}`} className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200 group-hover:bg-sky-500 group-hover:text-white transition">
              <Mail className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-stone-600 uppercase tracking-wide break-all">
              Email Us
            </span>
          </a>
          <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200 group-hover:bg-sky-500 group-hover:text-white transition">
              <Instagram className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-stone-600 uppercase tracking-wide">
              {BUSINESS_INFO.instagramHandle}
            </span>
          </a>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200">
              <Clock className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-mono text-stone-600 uppercase tracking-wide">
              {BUSINESS_INFO.workingHours}
            </span>
          </div>
        </div>
      </section>

      {/* Existing showroom + WhatsApp form */}
      <ContactPortal />
    </div>
  );
}
