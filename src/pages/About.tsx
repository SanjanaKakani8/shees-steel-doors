import { Shield, Target, Eye, Award } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export default function About() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-stone-950 via-[#0B132B] to-stone-950 py-16 px-4 sm:px-6 lg:px-8 border-b border-sky-500/20">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="inline-block text-[9px] uppercase font-display font-bold tracking-[0.25em] border border-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-1.5">
            ABOUT US
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-white">
            SHEES Steel Doors & More
          </h1>
          <p className="text-sky-300/80 text-xs font-mono uppercase tracking-widest">
            Serving Anantapuramu Since {BUSINESS_INFO.startedYear}
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200 bg-white">
        <div className="max-w-3xl mx-auto space-y-5 text-left">
          <h2 className="text-xl font-display font-bold uppercase tracking-wide text-stone-900">
            Our Story
          </h2>
          <p className="text-sm text-stone-600 font-sans font-light leading-relaxed">
            SHEES Steel Doors & More was founded in {BUSINESS_INFO.startedYear} in Anantapuramu, Andhra Pradesh,
            with a simple goal: give local homeowners and builders access to a wide range of durable, well-made
            steel doors without having to travel far or compromise on quality.
          </p>
          <p className="text-sm text-stone-600 font-sans font-light leading-relaxed">
            Since then, we've grown into a trusted local name with two showrooms — one on Gooty Road and another
            on Kalyandurgam Road — where customers can browse our catalog in person, discuss sizing and installation,
            and place orders directly with our team.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="bg-white border border-stone-200 p-8 space-y-3 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-display font-bold uppercase tracking-wider text-stone-900">
              Our Mission
            </h3>
            <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
              To provide the Anantapuramu community with reliable, well-priced steel doors backed by
              straightforward service — from choosing the right door to delivery and installation.
            </p>
          </div>
          <div className="bg-white border border-stone-200 p-8 space-y-3 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-display font-bold uppercase tracking-wider text-stone-900">
              Our Vision
            </h3>
            <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
              To remain the go-to steel door showroom in the region, known for our range of models and for
              standing by our customers well after the sale.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose SHEES */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-display font-bold uppercase tracking-wide text-stone-900 text-center mb-10">
            Why Choose SHEES
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-display font-bold uppercase tracking-wider text-stone-900">
                Established Since {BUSINESS_INFO.startedYear}
              </h4>
              <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                Years of experience serving local homes and builders.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-display font-bold uppercase tracking-wider text-stone-900">
                Wide Door Catalog
              </h4>
              <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                A large range of steel door models to choose from across two showrooms.
              </p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-12 h-12 mx-auto flex items-center justify-center bg-sky-500/10 text-sky-700 border border-sky-200">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="text-xs font-display font-bold uppercase tracking-wider text-stone-900">
                Direct, Personal Service
              </h4>
              <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                Speak directly with our team over call or WhatsApp for quotes and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
