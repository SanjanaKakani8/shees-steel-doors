import { MapPin } from 'lucide-react';
import BranchCard from '../components/BranchCard';
import { BRANCHES } from '../data';

export default function Showrooms() {
  return (
    <div className="bg-[#FAF9F6]">
      <div className="bg-gradient-to-r from-stone-950 via-[#0B132B] to-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 text-[9px] uppercase font-display font-bold tracking-[0.25em] border border-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-1.5">
            <MapPin className="w-3 h-3" />
            <span>OUR SHOWROOMS</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
            Visit Us in Anantapuramu
          </h1>
          <p className="text-sky-300/80 text-xs font-mono uppercase tracking-widest">
            Two showrooms, ready to help you choose the right door
          </p>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {BRANCHES.map((branch, index) => (
            <BranchCard key={branch.name} branch={branch} isMain={index === 0} showCallNow />
          ))}
        </div>
      </section>
    </div>
  );
}
