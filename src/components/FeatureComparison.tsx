import React from 'react';
import { Shield, Sparkles, Flame, Sun, Ruler, ShieldCheck } from 'lucide-react';

export default function FeatureComparison() {
  const premiumFeatures = [
    {
      title: 'Termite & Pest Immunity',
      desc: 'Our heavy-gauge steel is completely immune to biological decay. Traditional wood degrades rapidly due to white-ant (termite) infestation prevalent in Andhra Pradesh.',
      icon: Shield,
      color: 'from-amber-500 to-orange-600',
      textCol: 'text-amber-900 bg-amber-500/10 border-amber-300'
    },
    {
      title: 'Monsoon Warp & Swell Resistance',
      desc: 'Engineered steel does not absorb atmospheric moisture. Never experiences the swelling, jamming, bending, or structural decay common with wooden doors in heavy rains.',
      icon: Ruler,
      color: 'from-blue-500 to-indigo-600',
      textCol: 'text-blue-900 bg-blue-500/10 border-blue-300'
    },
    {
      title: 'Thermosetting Wood Grain Patina',
      desc: 'Coated with premium powder-fused patinas mimicking rich natural teak, teakwood, and mahogany. Guaranteed against peeling, UV oxidation, color fading, or cracking.',
      icon: Sun,
      color: 'from-yellow-500 via-amber-500 to-orange-500',
      textCol: 'text-amber-950 bg-yellow-500/10 border-yellow-300'
    },
    {
      title: 'Fire Safety & Retardant Core',
      desc: 'Features a heavy multi-layer composite steel skin filled with high-density, sound-dampening, fire-retardant rockwool/mineral wool core insulation.',
      icon: Flame,
      color: 'from-red-500 to-rose-600',
      textCol: 'text-red-950 bg-red-500/10 border-red-300'
    },
    {
      title: 'Anti-Crowbar Rebated Design',
      desc: 'A uniquely engineered rebated leaf edge overlaps the main outer door frame, completely hiding all deadbolts to deny entry to crowbars or leverage tools.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      textCol: 'text-emerald-950 bg-emerald-500/10 border-emerald-300'
    },
    {
      title: 'Zero-Sag Welded Hinge Guarantee',
      desc: 'Pre-fitted with heavy stainless steel ball-bearing hinges welded directly into the frame. Ensures perfectly aligned, smooth-operating doors for generations.',
      icon: Sparkles,
      color: 'from-purple-500 to-indigo-600',
      textCol: 'text-purple-950 bg-purple-500/10 border-purple-300'
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex justify-center items-center gap-2 text-sky-800 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Shield className="w-3.5 h-3.5 text-sky-600" />
            <span>SHEES Structural Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-stone-900">
            Premium Engineering & Security Features
          </h2>
          <p className="text-sm text-stone-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Discover why SHEES steel coated doors are the modern standard for premium protection, lifelong durability, and immaculate styling in modern households.
          </p>
        </div>

        {/* Full-width Grid of Premium Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-12">
          {premiumFeatures.map((feat, index) => {
            const IconComp = feat.icon;
            return (
              <div 
                key={index} 
                className="bg-stone-50 border-2 border-stone-200/60 p-6 flex flex-col justify-between hover:border-sky-400 transition-all duration-300 shadow-sm relative group"
              >
                {/* Subtle hover background accent glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 border rounded-none flex items-center justify-center ${feat.textCol}`}>
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-display font-bold uppercase tracking-wider text-stone-950">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-200/40 text-[9px] font-mono text-stone-400 uppercase font-bold tracking-widest relative z-10">
                  🛡️ Lifetime Protection
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
