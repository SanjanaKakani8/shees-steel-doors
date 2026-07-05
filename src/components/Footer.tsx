import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF9F6] border-t border-stone-200/80 pt-14 pb-8 text-stone-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 bg-stone-900 text-stone-50 text-xs font-semibold uppercase tracking-widest font-display">
                S
              </div>
              <div className="text-left">
                <span className="text-sm font-display font-bold uppercase tracking-wider text-stone-950">SHEES</span>
                <p className="text-[8px] uppercase tracking-widest text-stone-400 font-display font-bold">Steel Doors & More</p>
              </div>
            </div>
            <p className="text-stone-400 text-[11px] font-mono uppercase tracking-widest">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-stone-400 text-[10px] leading-relaxed">
              Serving Anantapuramu since {BUSINESS_INFO.startedYear}.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-display font-bold uppercase tracking-widest text-stone-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[11px] font-mono uppercase tracking-wide">
              <li><Link to="/" className="hover:text-stone-900 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-stone-900 transition">About</Link></li>
              <li><Link to="/catalog" className="hover:text-stone-900 transition">Catalog</Link></li>
              <li><Link to="/gallery" className="hover:text-stone-900 transition">Gallery</Link></li>
              <li><Link to="/services" className="hover:text-stone-900 transition">Services</Link></li>
              <li><Link to="/showrooms" className="hover:text-stone-900 transition">Showrooms</Link></li>
              <li><Link to="/contact" className="hover:text-stone-900 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-display font-bold uppercase tracking-widest text-stone-900">
              Contact
            </h4>
            <ul className="space-y-2.5 text-[11px]">
              {BUSINESS_INFO.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:+91${phone}`} className="flex items-center gap-2 hover:text-stone-900 transition font-mono">
                    <Phone className="w-3 h-3 shrink-0" />
                    <span>+91 {phone}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-2 hover:text-stone-900 transition font-mono break-all">
                  <Mail className="w-3 h-3 shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-stone-900 transition font-mono">
                  <Instagram className="w-3 h-3 shrink-0" />
                  <span>{BUSINESS_INFO.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Locations */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-display font-bold uppercase tracking-widest text-stone-900">
              Working Hours
            </h4>
            <p className="flex items-center gap-2 text-[11px] font-mono">
              <Clock className="w-3 h-3 shrink-0" />
              <span>{BUSINESS_INFO.workingHours}</span>
            </p>
            <h4 className="text-[10px] font-display font-bold uppercase tracking-widest text-stone-900 pt-2">
              Locations
            </h4>
            <ul className="space-y-1 text-[11px] font-mono">
              {BUSINESS_INFO.locations.map((loc) => (
                <li key={loc}>{loc}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-px bg-stone-200/60 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[10px] font-mono uppercase tracking-wide">
          <p>© {year} SHEES Steel Doors & More. All rights reserved.</p>
          <p>Anantapuramu, Andhra Pradesh, India</p>
        </div>
      </div>
    </footer>
  );
}
