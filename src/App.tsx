import { useState } from 'react';
import Header from './components/Header';
import HomeSearchStation from './components/HomeSearchStation';
import DoorDetailPage from './components/DoorDetailPage';
import FeatureComparison from './components/FeatureComparison';
import ContactPortal from './components/ContactPortal';
import SheesLogo from './components/SheesLogo';
import SplashIntro from './components/SplashIntro';
import { DOOR_MODELS } from './data/doors';

export default function App() {
  const [activeSection, setActiveSection] = useState('search');
  const [selectedDoorId, setSelectedDoorId] = useState<string | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<string | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  // Dynamic state for manually managed doors, starting empty by default
  const [doors, setDoors] = useState<any[]>(() => {
    const saved = localStorage.getItem('shees_doors');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        console.error('Failed to parse shees_doors', e);
      }
    }
    return DOOR_MODELS;
  });

  // Cross-component direct scroll navigator
  const handleNavigation = (id: string) => {
    setActiveSection(id);
    if (id === 'search' || id === 'catalog') {
      setSelectedDoorId(null);
      setSelectedFinish(null);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Trigger smooth scroll to contacts section upon click
  const handleCatalogQuoteTrigger = () => {
    handleNavigation('contact');
  };

  const handleAddDoor = (newDoor: any) => {
    const updated = [...doors, newDoor];
    setDoors(updated);
    localStorage.setItem('shees_doors', JSON.stringify(updated));
  };

  const handleDeleteDoor = (doorId: string) => {
    const updated = doors.filter((d) => d.id !== doorId);
    setDoors(updated);
    localStorage.setItem('shees_doors', JSON.stringify(updated));
    if (selectedDoorId === doorId) {
      setSelectedDoorId(null);
      setSelectedFinish(null);
    }
  };

  const handleResetDefaultDoors = () => {
    setDoors(DOOR_MODELS);
    localStorage.setItem('shees_doors', JSON.stringify(DOOR_MODELS));
  };

  return (
    <div className="bg-[#FAF9F6] text-stone-900 min-h-screen font-sans antialiased">
      
      {/* 0. SPECIAL ANIMATED SPLASH INTRO */}
      {showSplash && <SplashIntro onComplete={() => setShowSplash(false)} />}

      {/* Navigation Header Bar */}
      <Header 
        onNav={handleNavigation} 
        activeSection={activeSection} 
      />

      {/* Main Content Area */}
      <main className="relative overflow-hidden">
        
        {/* 1. BRAND EMBLEM SHOWCASE BANNER */}
        <div className="bg-gradient-to-r from-stone-950 via-[#0B132B] to-stone-950 pt-20 pb-12 border-b border-sky-500/20 relative overflow-hidden">
          {/* Subtle colorful decorative blobs for a vibrant starting look */}
          <div className="absolute -left-20 top-0 w-60 h-60 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-20 bottom-0 w-60 h-60 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="flex justify-center mb-5">
              <SheesLogo size="xl" darkTheme={true} />
            </div>
            <div className="max-w-xl mx-auto mt-2 space-y-3">
              <span className="inline-block text-[9px] uppercase font-display font-bold tracking-[0.25em] border border-sky-400 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4.5 py-1.5 shadow-lg">
                PREMIUM STEEL COATED DOOR SYSTEMS
              </span>
              <p className="text-[10px] text-sky-400/80 font-mono uppercase tracking-widest font-semibold">
                Gooty Road & Kalyandurgam Road Branches, Ananthapuramu (A.P.)
              </p>
            </div>
          </div>
        </div>

        {/* 2. INTERACTIVE HOME SEARCH STATION */}
        <div id="search">
          {selectedDoorId && doors.some(d => d.id === selectedDoorId) ? (
            <DoorDetailPage
              door={doors.find(d => d.id === selectedDoorId)!}
              initialFinish={selectedFinish}
              onBack={() => {
                setSelectedDoorId(null);
                setSelectedFinish(null);
                // Smooth scroll back to search catalog section
                setTimeout(() => {
                  const element = document.getElementById('search');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 50);
              }}
            />
          ) : (
            <HomeSearchStation 
              doors={doors}
              onAddDoor={handleAddDoor}
              onDeleteDoor={handleDeleteDoor}
              onResetDefaultDoors={handleResetDefaultDoors}
              onTriggerInquiry={handleCatalogQuoteTrigger} 
              onSelectDoor={(doorId, finish) => {
                setSelectedDoorId(doorId);
                setSelectedFinish(finish);
                // Scroll instantly to top of window to simulate a clean page transition
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
            />
          )}
        </div>

        {/* 3. SECURITY FEATURES & ADVANTAGES */}
        <div id="features">
          <FeatureComparison />
        </div>

        {/* 4. SHOWROOM CONTACTS & PHYSICAL MAPS */}
        <div id="contact">
          <ContactPortal />
        </div>

      </main>

      {/* Footer Branding section */}
      <footer className="bg-[#FAF9F6] border-t border-stone-200/80 py-12 text-stone-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Brand details */}
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-8 h-8 bg-stone-900 text-stone-50 text-xs font-semibold uppercase tracking-widest font-display">
                S
              </div>
              <div className="text-left">
                <span className="text-sm font-display font-bold uppercase tracking-wider text-stone-950">SHEES</span>
                <p className="text-[8px] uppercase tracking-widest text-stone-400 font-display font-bold">Steel Doors & More</p>
              </div>
            </div>

            {/* Slogan */}
            <p className="text-stone-400 text-xs font-mono uppercase tracking-widest">
              Strong • Stylish • Secure
            </p>

            {/* Location Row */}
            <div className="text-right text-stone-400 text-[10px] font-mono uppercase tracking-wide">
              <span>Anantapuramu, Andhra Pradesh, India</span>
            </div>
          </div>

          <div className="h-px bg-stone-200/60 my-6" />

          {/* Copyright Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-400 text-[10px] font-mono uppercase tracking-wide">
            <p>© 2026 SHEES Steel Doors & More. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
