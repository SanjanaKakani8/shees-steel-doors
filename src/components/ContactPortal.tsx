import React, { useState } from 'react';
import { BRANCHES, CONTACT_PERSONS } from '../data';
import { MapPin, Phone, MessageSquare, Clock, Shield, Navigation } from 'lucide-react';

export default function ContactPortal() {
  const [query, setQuery] = useState({ name: '', phone: '', msg: '' });

  const handleSendQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.name || !query.phone || !query.msg) {
      alert('Please fill out all fields before sending your message.');
      return;
    }
    const message = `✨ *SHEES STEEL DOORS WEB INQUIRY* ✨
👤 Name: ${query.name}
📞 Phone: ${query.phone}
💬 Message: ${query.msg}`;

    window.open(`https://wa.me/919550209607?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF9F6] text-stone-900 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 border border-stone-200 text-stone-600 text-[10px] uppercase font-display tracking-[0.25em]">
            <MapPin className="w-3.5 h-3.5" />
            <span>EXHIBITION LOCATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-light uppercase tracking-wide text-stone-950">
            Visit Our Showrooms
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 font-sans font-light max-w-xl mx-auto leading-relaxed">
            Experience our multi-point interlocking locks and high-fidelity wood-look finishes live. Our technical consultants are ready to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT: Showroom Branch Cards */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="grid sm:grid-cols-2 gap-6">
              {BRANCHES.map((branch, index) => {
                const isMain = index === 0;
                return (
                  <div 
                    key={branch.name}
                    id={`branch-card-${branch.type.toLowerCase().replace(' ', '-')}`}
                    className={`border p-6 flex flex-col justify-between text-left space-y-4 shadow-sm transition-all duration-300 transform hover:-translate-y-1 ${
                      isMain 
                        ? 'bg-gradient-to-br from-sky-500/10 to-blue-500/5 border-sky-300 hover:border-sky-500 hover:shadow-md' 
                        : 'bg-gradient-to-br from-cyan-500/10 to-sky-500/5 border-cyan-300 hover:border-cyan-500 hover:shadow-md'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <span className={`text-[9px] px-2.5 py-0.8 font-display font-bold uppercase tracking-wider text-stone-50 ${
                          isMain ? 'bg-sky-700' : 'bg-cyan-700'
                        }`}>
                          {branch.type}
                        </span>
                        <MapPin className={`w-4 h-4 ${isMain ? 'text-sky-600' : 'text-cyan-600'}`} />
                      </div>
                      
                      <h3 className="text-sm font-display font-bold uppercase tracking-wider text-stone-950">
                        {branch.name}
                      </h3>
                      
                      <p className="text-xs text-stone-600 font-sans font-medium leading-relaxed">
                        {branch.address}
                      </p>
                      
                      <p className="text-[10px] text-stone-800 font-mono font-semibold uppercase tracking-wide">
                        📍 Landmark: {branch.landmark}
                      </p>
                    </div>

                    <div className={`pt-4 border-t ${isMain ? 'border-sky-200/50' : 'border-cyan-200/50'}`}>
                      <a
                        id={`branch-nav-${branch.type.toLowerCase().replace(' ', '-')}`}
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-1.5 w-full py-2.5 font-display uppercase tracking-widest text-[9px] font-bold border transition duration-300 ${
                          isMain 
                            ? 'bg-sky-600 hover:bg-sky-700 text-white border-sky-500 hover:border-sky-600' 
                            : 'bg-cyan-600 hover:bg-cyan-700 text-white border-cyan-500 hover:border-cyan-600'
                        }`}
                      >
                        <Navigation className="w-3 h-3 text-stone-50" />
                        <span>Google Map Directions</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Helpdesk Contacts */}
            <div className="bg-gradient-to-br from-sky-50 to-cyan-50/30 border border-sky-200/80 p-6 text-left">
              <h4 className="text-[9px] font-display font-bold text-sky-850 uppercase tracking-widest mb-4">
                SHOWROOM DIRECT DIRECTORY
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACT_PERSONS.map((person, idx) => (
                  <div 
                    key={person.name}
                    id={`contact-person-${person.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    className="bg-white border border-sky-200/60 hover:border-sky-400 p-4 flex items-center justify-between shadow-sm transition"
                  >
                    <div>
                      <p className="text-xs font-display font-bold uppercase tracking-wide text-stone-950">{person.name}</p>
                      <p className="text-[9px] text-sky-800 uppercase font-mono mt-0.5 font-bold">{person.role}</p>
                    </div>
                    <div className="flex gap-1.5">
                      <a
                        id={`call-representative-${person.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        href={`tel:+91${person.phone}`}
                        className="p-2 border border-sky-200 bg-sky-50 hover:bg-sky-100 text-sky-900 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                      <a
                        id={`chat-representative-${person.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        href={`https://wa.me/91${person.phone}?text=Hi%20${encodeURIComponent(person.name)}%2C%20I%20want%20to%20inquire%20about%20SHEES%20Steel%20Doors.`}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="p-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: High-quality Contact / Custom Message Form */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-50 to-blue-50/40 border-2 border-sky-200/80 p-6 sm:p-8 flex flex-col justify-between text-left shadow-md rounded-none relative overflow-hidden">
            {/* Subtle decorative glowing spot */}
            <div className="absolute -right-24 -top-24 w-48 h-48 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              {/* Quick WhatsApp Form */}
              <form onSubmit={handleSendQuery} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-sky-200/60 pb-3">
                  <div className="p-1.5 bg-sky-500 text-white rounded-none">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-display uppercase tracking-widest text-stone-950 font-bold">
                      FAST WHATSAPP HELPDESK
                    </h3>
                    <p className="text-[9px] text-sky-800 font-mono">Instant Quote & Showroom Enquiry</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[9px] font-mono uppercase tracking-wider text-stone-600">Your Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={query.name}
                    onChange={(e) => setQuery(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3 py-2 bg-white border border-sky-200 focus:border-sky-500 text-xs focus:outline-none font-sans"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono uppercase tracking-wider text-stone-600">WhatsApp Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={query.phone}
                    onChange={(e) => setQuery(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="e.g. +91 95502 09607"
                    className="w-full px-3 py-2 bg-white border border-sky-200 focus:border-sky-500 text-xs focus:outline-none font-sans"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-mono uppercase tracking-wider text-stone-600">How Can We Help You?</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    value={query.msg}
                    onChange={(e) => setQuery(prev => ({ ...prev, msg: e.target.value }))}
                    placeholder="e.g. Please send the catalog price list for PTR 700 with installation details."
                    className="w-full px-3 py-2 bg-white border border-sky-200 focus:border-sky-500 text-xs focus:outline-none placeholder-stone-400 font-sans"
                  />
                </div>
                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white text-[10px] font-display uppercase tracking-widest font-bold shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
              </form>
            </div>

            {/* Quality seal badge bottom */}
            <div className="mt-8 p-4 bg-sky-500/10 border border-sky-200/80 flex items-center gap-3 relative z-10">
              <Shield className="w-8 h-8 text-sky-700 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-display uppercase tracking-wider text-stone-900 font-bold">CERTIFIED MANUFACTURER QUALITY</p>
                <p className="text-[9px] text-sky-900 font-sans font-light">All doors feature high-tensile security steel cores & premium heat-fused paint finishes.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
