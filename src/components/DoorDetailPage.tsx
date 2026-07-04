import React, { useState } from 'react';
import { ArrowLeft, Shield, Check, MessageSquare, PhoneCall, Ruler, Lock, Layers, Sparkles, HelpCircle } from 'lucide-react';
import { DoorModel } from '../types';
import DoorIllustration from './DoorIllustration';

interface DoorDetailPageProps {
  door: DoorModel;
  initialFinish: string | null;
  onBack: () => void;
}

export default function DoorDetailPage({ door, initialFinish, onBack }: DoorDetailPageProps) {
  const [selectedFinish, setSelectedFinish] = useState(initialFinish || door.finishes[0]);
  const [selectedConfig, setSelectedConfig] = useState(door.configurations[0]);
  const [viewMode, setViewMode] = useState<'photo' | 'customizer'>('photo');

  const fLower = selectedFinish.toLowerCase();
  let themeColor = 'from-sky-500 to-blue-600';
  let badgeColor = 'bg-sky-500/10 text-sky-950 border-sky-300';
  let activeSwatchClass = 'bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 text-white border-sky-400 font-bold shadow-md';

  if (fLower.includes('gold') || fLower.includes('teak')) {
    themeColor = 'from-yellow-500 via-amber-500 to-orange-500';
    badgeColor = 'bg-yellow-500/10 text-amber-900 border-yellow-300';
    activeSwatchClass = 'bg-gradient-to-r from-yellow-500 to-amber-600 text-stone-950 border-amber-400 font-bold shadow-md';
  } else if (fLower.includes('copper') || fLower.includes('bronze') || fLower.includes('redwood')) {
    themeColor = 'from-orange-500 to-red-600';
    badgeColor = 'bg-orange-500/10 text-orange-950 border-orange-300';
    activeSwatchClass = 'bg-gradient-to-r from-orange-500 to-red-600 text-stone-50 border-orange-500 font-bold shadow-sm';
  } else if (fLower.includes('mahogany') || fLower.includes('walnut') || fLower.includes('royal')) {
    themeColor = 'from-red-600 to-rose-850';
    badgeColor = 'bg-red-500/10 text-red-950 border-red-300';
    activeSwatchClass = 'bg-gradient-to-r from-red-600 to-rose-850 text-stone-50 border-red-600 font-bold shadow-sm';
  } else if (fLower.includes('slate') || fLower.includes('charcoal') || fLower.includes('gray') || fLower.includes('titanium') || fLower.includes('obsidian')) {
    themeColor = 'from-blue-600 to-indigo-700';
    badgeColor = 'bg-blue-500/10 text-blue-950 border-blue-300';
    activeSwatchClass = 'bg-gradient-to-r from-blue-600 to-indigo-700 text-stone-50 border-blue-600 font-bold shadow-sm';
  }

  const triggerWhatsAppInquiry = () => {
    const text = `Hi SHEES Steel Doors, I would like to inquire about the model *${door.name}* (Catalog Page ${door.catalogPage}) in *${selectedConfig}* configuration with finish: *${selectedFinish}*. Please share pricing and showroom availability details.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919550209607?text=${encodedText}`, '_blank');
  };

  const triggerCallInquiry = () => {
    window.location.href = 'tel:+919550209607';
  };

  return (
    <div className="bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumbs / Back button */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-stone-50 text-stone-800 text-xs font-display font-bold uppercase tracking-wider border border-stone-200/80 transition shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-stone-600" />
            <span>← Back to Catalog</span>
          </button>
          
          <div className="text-[10px] font-mono text-stone-400 font-bold uppercase">
            Viewing Product Page • Page {door.catalogPage}
          </div>
        </div>

        {/* Detailed Main Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch bg-white border border-stone-200/80 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {/* Subtle Top Border Glow */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />
          
          {/* LEFT COLUMN: Giant Door Visualizer & Finish Selection Swatches (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            {/* View Mode Tabs */}
            <div className="flex border border-stone-200 bg-stone-100 p-1">
              <button
                onClick={() => setViewMode('photo')}
                className={`flex-1 py-1.5 text-center text-[10px] uppercase font-mono tracking-wider font-bold transition-all ${
                  viewMode === 'photo'
                    ? 'bg-stone-900 text-stone-50 shadow-sm'
                    : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                Exact Catalog Photo
              </button>
             
            </div>

            {/* Real-time Display Stage */}
            <div className="bg-stone-950 relative aspect-[3/4.5] w-full flex flex-col justify-between p-3 border-2 border-stone-800 shadow-inner overflow-hidden rounded-none">
              {viewMode === 'photo' ? (
                <div className="w-full h-full relative group flex items-center justify-center bg-stone-900">
                  <img
                    src={door.imageUrl}
                    alt={door.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-stone-950/15 group-hover:bg-transparent transition duration-300 pointer-events-none" />
                </div>
              ) : (
                <DoorIllustration id={door.id} finish={selectedFinish} configuration={selectedConfig} />
              )}
              
              {/* Overlay Badge Specifications */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between gap-2 z-10">
                <span className="bg-stone-950/90 text-[9px] text-stone-300 px-2.5 py-1 font-mono border border-stone-800">
                  THICKNESS: {door.thickness}mm
                </span>
                <span className="bg-sky-950/90 text-[9px] text-sky-200 px-2.5 py-1 font-mono border border-sky-800/40">
                  CATALOG PAGE {door.catalogPage}
                </span>
              </div>
            </div>
           

          {/* RIGHT COLUMN: Technical Details, Highlights & Locking Systems (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6 text-left">
            
            {/* Header Product Details */}
            <div className="space-y-4 border-b border-stone-100 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-sky-800 bg-sky-50 px-2.5 py-1 border border-sky-200">
                  {door.style === 'luxury' ? 'Premium Luxury Line' : 
                   door.style === 'modern' ? 'Modern Geometric' : 
                   door.style === 'wood-grain' ? 'Natural Wood Grain' : 'Devotional Traditional'}
                </span>
                <span className="text-[9px] uppercase tracking-widest font-mono font-bold text-stone-500 bg-stone-100 px-2.5 py-1 border border-stone-200">
                  Model ID: {door.id.toUpperCase()}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase tracking-tight text-stone-900">
                {door.name}
              </h2>
              
              <p className="text-sm text-stone-600 font-sans font-light leading-relaxed">
                {door.description}
              </p>
            </div>

            {/* Specifications Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              {/* Physical Specifications */}
              <div className="bg-stone-50 border border-stone-200 p-5 space-y-3">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-sky-950 font-bold border-b border-stone-200 pb-1.5">
                  Physical parameters
                </h4>
                <ul className="space-y-2 text-xs text-stone-700 font-mono">
                  <li className="flex justify-between">
                    <span className="text-stone-400">Leaf Thickness:</span>
                    <span className="font-bold">{door.thickness} mm</span>
                  </li>
                  
                </ul>
              </div>

              {/* Configurations & Dimensions */}
              <div className="bg-stone-50 border border-stone-200 p-5 space-y-3">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-sky-950 font-bold border-b border-stone-200 pb-1.5">
                  Frame Options
                </h4>
                <ul className="space-y-2 text-xs text-stone-700 font-sans">
                  <li className="flex justify-between">
                    <span className="text-stone-400 font-mono text-[11px]">Configurations:</span>
                    <span className="font-bold text-stone-900 text-[11px]">{door.configurations.join(', ')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-stone-400 font-mono text-[11px]">Width Sizes (mm):</span>
                    <span className="font-bold text-stone-900 text-[11px]">{door.baseWidths.join(', ')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-stone-400 font-mono text-[11px]">Height Sizes (mm):</span>
                    <span className="font-bold text-stone-900 text-[11px]">{door.baseHeights.join(', ')}</span>
                  </li>
                </ul>
              </div>

            </div>

          

           
            {/* Call To Action Buttons */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-stone-100">
              <button
                onClick={triggerWhatsAppInquiry}
                className="flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-display uppercase tracking-widest text-xs transition shadow-md cursor-pointer font-bold"
              >
                <MessageSquare className="w-4.5 h-4.5 text-white" />
                <span>WhatsApp Inquiry</span>
              </button>

              <button
                onClick={triggerCallInquiry}
                className="flex items-center justify-center gap-2 py-3 bg-stone-950 hover:bg-stone-900 text-sky-400 font-display uppercase tracking-widest text-xs transition shadow-md cursor-pointer font-bold border border-stone-800"
              >
                <PhoneCall className="w-4.5 h-4.5 text-stone-300" />
                <span>Call Showroom Partner</span>
              </button>
            </div>

          </div>

        </div>
      </div>
      </div>
    </div>
  );
}
