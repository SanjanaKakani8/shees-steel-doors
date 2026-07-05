import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Shield, ChevronRight } from 'lucide-react';
import { useDoors } from '../context/DoorsContext';
import SheesLogo from '../components/SheesLogo';
import FeatureComparison from '../components/FeatureComparison';
import { BUSINESS_INFO } from '../data/business';

export default function Home() {
  const { doors } = useDoors();
  const featuredDoors = doors.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <div className="bg-gradient-to-r from-stone-950 via-[#0B132B] to-stone-950 pt-20 pb-16 border-b border-sky-500/20 relative overflow-hidden">
        <div className="absolute -left-20 top-0 w-60 h-60 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -right-20 bottom-0 w-60 h-60 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-5">
            <SheesLogo size="xl" darkTheme={true} />
          </div>
          <div className="max-w-xl mx-auto mt-2 space-y-3">
            <span className="inline-block text-[9px] uppercase font-display font-bold tracking-[0.25em] border border-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4.5 py-1.5 shadow-lg">
              PREMIUM STEEL DOOR SYSTEMS
            </span>
            <p className="text-[10px] text-sky-400/80 font-mono uppercase tracking-widest font-semibold">
              Gooty Road & Kalyandurgam Road Branches, Ananthapuramu (A.P.)
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              to="/catalog"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-xs font-display font-bold uppercase tracking-widest shadow-lg transition"
            >
              <span>Browse Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-xs font-display font-bold uppercase tracking-widest transition"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>
      </div>

      {/* COMPANY INTRODUCTION */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="flex justify-center items-center gap-2 text-sky-800 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Shield className="w-3.5 h-3.5 text-sky-600" />
            <span>Since {BUSINESS_INFO.startedYear}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-stone-900">
            Trusted Steel Doors for Anantapuramu Homes
          </h2>
          <p className="text-sm text-stone-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            SHEES Steel Doors & More has been serving Anantapuramu since {BUSINESS_INFO.startedYear}, offering a wide
            catalog of durable steel doors across our two showrooms on Gooty Road and Kalyandurgam Road. Browse our
            full catalog, visit a showroom, or reach out directly for pricing and availability.
          </p>
        </div>
      </section>

      {/* FEATURED DOORS */}
      <section className="bg-[#FAF9F6] py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-stone-900">
              Featured Doors
            </h3>
            <Link
              to="/catalog"
              className="flex items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-sky-800 hover:text-sky-950 transition"
            >
              <span>View Full Catalog</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredDoors.map((door) => (
              <Link
                key={door.id}
                to={`/catalog/${door.id}`}
                className="bg-white border border-stone-200 hover:border-sky-500 p-4 shadow-sm hover:shadow-md transition-all duration-200 group text-left flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-sky-800 bg-sky-500/10 px-1.5 py-0.5 border border-sky-500/20">
                      {door.id.toUpperCase()}
                    </span>
                    <span className="text-[8px] font-mono text-stone-400 uppercase">
                      Page {door.catalogPage}
                    </span>
                  </div>
                  <h4 className="text-sm font-display font-bold uppercase tracking-wider text-stone-900 group-hover:text-sky-950 transition">
                    {door.name}
                  </h4>
                  <p className="text-[10px] text-stone-500 font-mono">
                    {door.thickness}mm • {door.baseWidths.join('/')} mm width
                  </p>
                </div>
                <div className="flex justify-end mt-3">
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-sky-600 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY FEATURES & ADVANTAGES (existing component, preserved) */}
      <FeatureComparison />
    </div>
  );
}
