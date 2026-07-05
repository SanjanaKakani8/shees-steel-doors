import { DoorOpen, Wrench, Truck, Ruler, Users, Headset } from 'lucide-react';
import { SERVICES } from '../data/business';

const ICONS = [DoorOpen, Wrench, Truck, Ruler, Users, Headset];

export default function Services() {
  return (
    <div className="bg-[#FAF9F6]">
      <div className="bg-gradient-to-r from-stone-950 via-[#0B132B] to-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="inline-block text-[9px] uppercase font-display font-bold tracking-[0.25em] border border-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-1.5">
            SERVICES
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
            What We Offer
          </h1>
        </div>
      </div>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={service.title}
                className="bg-white border-2 border-stone-200/60 p-6 hover:border-sky-400 transition-all duration-300 shadow-sm space-y-4"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-display font-bold uppercase tracking-wider text-stone-950">
                  {service.title}
                </h3>
                <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
