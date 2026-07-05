import { useEffect, useState } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {showScrollTop && (
        <button
          id="floating-scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-11 h-11 flex items-center justify-center bg-stone-900 hover:bg-stone-800 text-stone-50 shadow-lg transition-all duration-200 rounded-full"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <a
        id="floating-call-btn"
        href={`tel:+91${BUSINESS_INFO.phones[0]}`}
        aria-label="Call SHEES Steel Doors"
        className="w-12 h-12 flex items-center justify-center bg-stone-900 hover:bg-stone-800 text-sky-400 shadow-lg transition-all duration-200 rounded-full border border-stone-700"
      >
        <Phone className="w-5 h-5" />
      </a>

      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/91${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
          'Hi, I visited your website and want to inquire about SHEES Steel Doors.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 flex items-center justify-center bg-[#25D366] hover:bg-[#128C7E] text-white shadow-xl transition-all duration-200 rounded-full"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
