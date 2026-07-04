import { useState } from 'react';
import { Phone, MessageSquare, Menu, X, BookOpen, Sliders, Calculator, MapPin, Compass, Shield } from 'lucide-react';
import SheesLogo from './SheesLogo';

interface HeaderProps {
  onNav: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNav, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'search', label: 'Search Catalog', icon: BookOpen },
    { id: 'features', label: 'Why Steel Doors', icon: Shield },
    { id: 'contact', label: 'Contact Us', icon: MapPin },
  ];

  return (
    <header id="header-nav" className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 text-stone-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center cursor-pointer shrink-0" onClick={() => onNav('catalog')}>
            <SheesLogo size="sm" />
          </div>

          {/* Desktop Sub-Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => onNav(item.id)}
                  className={`px-3.5 py-1.5 text-[11px] uppercase tracking-widest font-display transition-all duration-200 border-b ${
                    isActive
                      ? 'text-stone-950 font-bold border-stone-950'
                      : 'text-stone-400 border-transparent hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Contact Fast-Actions */}
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <a
              id="header-call-btn"
              href="tel:+919550209607"
              className="flex items-center gap-1.5 px-3 py-2 border border-stone-200 hover:bg-stone-50 text-stone-800 text-[10px] font-display uppercase tracking-wider transition"
            >
              <Phone className="w-3 h-3 text-stone-600" />
              <span>Call Showroom</span>
            </a>
            <a
              id="header-whatsapp-btn"
              href="https://wa.me/919550209607?text=Hi%2C%20I%20visited%20your%20website%20and%20want%20to%20inquire%20about%20SHEES%20Steel%20Doors."
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-stone-900 hover:bg-stone-850 text-stone-50 text-[10px] font-display uppercase tracking-wider transition"
            >
              <MessageSquare className="w-3 h-3 text-stone-300" />
              <span>Inquire</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-t border-stone-200/80 px-4 py-4 space-y-4 shadow-xl">
          {/* Active page items */}
          <div className="space-y-1">
            <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest px-2 mb-2">
              SECTIONS
            </p>
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => {
                    onNav(item.id);
                    setIsOpen(false);
                  }}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-none text-left text-xs uppercase tracking-wider font-display font-medium transition ${
                    isActive
                      ? 'text-stone-950 bg-stone-100 font-bold border-l-2 border-stone-900'
                      : 'text-stone-500 hover:text-stone-950'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-stone-200/60">
            <a
              id="mobile-call-btn"
              href="tel:+919550209607"
              className="flex items-center justify-center gap-1.5 py-2.5 border border-stone-200 text-stone-800 text-[10px] font-display uppercase tracking-wider"
            >
              <Phone className="w-3 h-3 text-stone-600" />
              <span>Call Us</span>
            </a>
            <a
              id="mobile-whatsapp-btn"
              href="https://wa.me/919550209607?text=Hi%2C%20I%20want%20to%20inquire%20about%20your%20steel%20doors."
              target="_blank"
              referrerPolicy="no-referrer"
              className="flex items-center justify-center gap-1.5 py-2.5 bg-stone-900 text-stone-50 text-[10px] font-display uppercase tracking-wider"
            >
              <MessageSquare className="w-3 h-3 text-stone-300" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
