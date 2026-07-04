import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SplashIntroProps {
  onComplete: () => void;
}

export default function SplashIntro({ onComplete }: SplashIntroProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Progress bar animation simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate near the end
        const step = prev > 70 ? 8 : 4;
        return Math.min(prev + step, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay for the user to admire the completed brand showcase
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          id="splash-screen"
          className="fixed inset-0 z-[100] bg-gradient-to-br from-stone-950 via-[#0B132B] to-stone-950 flex flex-col items-center justify-center px-4 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -40,
            scale: 1.02,
            filter: 'blur(10px)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Ambient Glowing Background Blobs */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Grid background texture for high-fidelity technical brand feel */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

          {/* Special Animated Logo Block */}
          <div className="flex flex-col items-center max-w-lg w-full relative z-10 text-center space-y-8">
            
            {/* Logo Icon Wrapper */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative flex items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl"
            >
              <svg 
                className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_10px_15px_rgba(14,165,233,0.3)]" 
                viewBox="0 0 120 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Silver/Chrome Gradient */}
                  <linearGradient id="splashSilverGrad" x1="15" y1="20" x2="80" y2="90" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="30%" stopColor="#E2E8F0" />
                    <stop offset="70%" stopColor="#94A3B8" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                  
                  {/* Premium Blue Metallic Gradient */}
                  <linearGradient id="splashBlueGrad" x1="35" y1="10" x2="95" y2="80" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="50%" stopColor="#0EA5E9" />
                    <stop offset="100%" stopColor="#0284C7" />
                  </linearGradient>

                  <filter id="splashShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.5" />
                  </filter>
                </defs>

                {/* 1. Silver Outer Frame Block - Animated Path */}
                <motion.path 
                  d="M 15,25 L 80,25 L 80,35 L 25,35 L 25,80 L 105,80 L 105,90 L 15,90 Z" 
                  fill="url(#splashSilverGrad)" 
                  filter="url(#splashShadow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
                />

                {/* Side edge highlighting */}
                <motion.path 
                  d="M 15,25 L 25,35 L 25,80 L 15,90 Z" 
                  fill="#CBD5E1" 
                  opacity="0.7"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />

                {/* 2. Blue House Roof & Pillars - Draw path & pop fill */}
                {/* House Roof Peak */}
                <motion.path 
                  d="M 35,38 L 65,12 L 95,38 L 87,42 L 65,22 L 43,42 Z" 
                  fill="url(#splashBlueGrad)" 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                />
                
                {/* Right Wall Column */}
                <motion.path 
                  d="M 85,38 L 93,38 L 93,80 L 85,80 Z" 
                  fill="url(#splashBlueGrad)" 
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                />

                {/* Left Wall column integrated as Number "1" */}
                <motion.path 
                  d="M 43,38 L 51,38 L 51,80 L 43,80 Z" 
                  fill="url(#splashBlueGrad)" 
                  initial={{ scaleY: 0, originY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                />
                {/* Serif corner hook for "1" */}
                <motion.path 
                  d="M 43,48 L 35,53 L 35,46 L 43,38 Z" 
                  fill="#38BDF8" 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                />

                {/* 3. Center White Doorway (Slightly Ajar) */}
                <motion.rect 
                  x="53" y="42" width="28" height="38" 
                  fill="#1E293B" 
                  stroke="#64748B" 
                  strokeWidth="1.5" 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                />
                
                {/* Swing Door Leaf - Open toward the right in 3D perspective */}
                <motion.path 
                  d="M 53,42 L 75,45 V 77 L 53,80 Z" 
                  fill="#FFFFFF" 
                  stroke="#475569" 
                  strokeWidth="1.5" 
                  filter="url(#splashShadow)"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
                />

                {/* Cyan Door Handle/Knob Dot */}
                <motion.circle 
                  cx="70" cy="61" r="2.5" 
                  fill="#0EA5E9" 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.5 }}
                />
              </svg>
            </motion.div>

            {/* Brand Typography with Shine & Letter Spacing Expansions */}
            <div className="space-y-2 select-none">
              <motion.h1 
                initial={{ opacity: 0, letterSpacing: '0.1em' }}
                animate={{ opacity: 1, letterSpacing: '0.2em' }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                className="text-4xl sm:text-5xl font-sans font-black tracking-widest uppercase bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent filter drop-shadow-md"
              >
                SHEES
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-stone-300 font-medium text-xs sm:text-sm tracking-[0.3em] uppercase"
              >
                Steel Doors and More
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-[9px] text-sky-400 font-mono tracking-widest uppercase font-semibold mt-1"
              >
                Premium Architectural Systems
              </motion.p>
            </div>

            {/* Premium Progress Bar Loading indicator matching Blue logo theme */}
            <div className="w-56 sm:w-64 space-y-2 pt-6">
              <div className="h-[2px] w-full bg-white/10 relative rounded-full overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_8px_#38BDF8]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[8px] font-mono uppercase tracking-widest text-stone-500">
                <span>Initializing System</span>
                <span className="text-sky-400 font-bold">{progress}%</span>
              </div>
            </div>

          </div>

          {/* Beautiful bottom branding details */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute bottom-8 text-center"
          >
            <p className="text-[9px] text-stone-500 font-mono uppercase tracking-widest">
              Strong • Stylish • Secure
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
