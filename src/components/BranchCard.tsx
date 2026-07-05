import { MapPin, Navigation, Phone } from 'lucide-react';
import { Branch } from '../types';

interface BranchCardProps {
  branch: Branch;
  isMain: boolean;
  showCallNow?: boolean;
}

export default function BranchCard({ branch, isMain, showCallNow = false }: BranchCardProps) {
  return (
    <div
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

      <div className={`pt-4 border-t space-y-2 ${isMain ? 'border-sky-200/50' : 'border-cyan-200/50'}`}>
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

        {showCallNow && (
          <a
            id={`branch-call-${branch.type.toLowerCase().replace(' ', '-')}`}
            href={`tel:+91${branch.phones[0]}`}
            className="flex items-center justify-center gap-1.5 w-full py-2.5 font-display uppercase tracking-widest text-[9px] font-bold border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 transition duration-300"
          >
            <Phone className="w-3 h-3 text-stone-700" />
            <span>Call Now: +91 {branch.phones[0]}</span>
          </a>
        )}
      </div>
    </div>
  );
}
