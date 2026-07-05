import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import SplashIntro from './components/SplashIntro';
import { DoorsProvider } from './context/DoorsContext';

import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import DoorDetails from './pages/DoorDetails';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import Showrooms from './pages/Showrooms';
import Contact from './pages/Contact';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <DoorsProvider>
      <div className="bg-[#FAF9F6] text-stone-900 min-h-screen font-sans antialiased flex flex-col">

        {/* 0. SPECIAL ANIMATED SPLASH INTRO */}
        {showSplash && <SplashIntro onComplete={() => setShowSplash(false)} />}

        {/* Navigation Header Bar */}
        <Header />

        {/* Routed Page Content */}
        <main className="relative overflow-hidden flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:doorId" element={<DoorDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/showrooms" element={<Showrooms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Action Buttons */}
        <FloatingActions />

      </div>
    </DoorsProvider>
  );
}
