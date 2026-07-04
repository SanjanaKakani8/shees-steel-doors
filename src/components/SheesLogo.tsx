interface SheesLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  darkTheme?: boolean;
}

export default function SheesLogo({ size = 'md', darkTheme = false }: SheesLogoProps) {
  // Determine sizes
  const dimensions = {
    sm: { 
      icon: 'w-10 h-10', 
      title: 'text-xl tracking-[0.05em]', 
      subtitle: 'text-[11px] tracking-[0.05em]', 
      gap: 'gap-2' 
    },
    md: { 
      icon: 'w-14 h-14', 
      title: 'text-2xl tracking-[0.08em]', 
      subtitle: 'text-[14px] tracking-[0.05em]', 
      gap: 'gap-3' 
    },
    lg: { 
      icon: 'w-20 h-20', 
      title: 'text-3xl tracking-[0.08em]', 
      subtitle: 'text-[18px] tracking-[0.05em]', 
      gap: 'gap-4' 
    },
    xl: { 
      icon: 'w-28 h-28', 
      title: 'text-4xl sm:text-5xl tracking-[0.08em]', 
      subtitle: 'text-[20px] sm:text-[22px] tracking-[0.05em]', 
      gap: 'gap-4 sm:gap-5' 
    }
  }[size];

  return (
    <div className={`flex items-center select-none ${dimensions.gap} ${darkTheme ? 'text-white' : 'text-stone-900'}`}>
      
      {/* High-fidelity Vector SVG replica of the official SHEES Logo Icon */}
      <svg 
        className={`${dimensions.icon} shrink-0 drop-shadow-md`} 
        viewBox="0 0 120 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Silver/Chrome Gradient */}
          <linearGradient id="silverGrad" x1="15" y1="20" x2="80" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#E2E8F0" />
            <stop offset="70%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          
          {/* Premium Blue Metallic Gradient */}
          <linearGradient id="blueGrad" x1="35" y1="10" x2="95" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>

          {/* Dark Inner Shadow */}
          <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="1" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* 1. Silver Outer 3D Frame Block */}
        <path 
          d="M 15,25 L 80,25 L 80,35 L 25,35 L 25,80 L 105,80 L 105,90 L 15,90 Z" 
          fill="url(#silverGrad)" 
          filter="url(#shadow)"
        />
        <path 
          d="M 15,25 L 25,35 L 25,80 L 15,90 Z" 
          fill="#CBD5E1" 
          opacity="0.7"
        />

        {/* 2. Blue House Roof & Pillars */}
        {/* House Roof Peak */}
        <path 
          d="M 35,38 L 65,12 L 95,38 L 87,42 L 65,22 L 43,42 Z" 
          fill="url(#blueGrad)" 
        />
        
        {/* Right Wall Column */}
        <path 
          d="M 85,38 L 93,38 L 93,80 L 85,80 Z" 
          fill="url(#blueGrad)" 
        />

        {/* Left Wall column integrated as Number "1" */}
        <path 
          d="M 43,38 L 51,38 L 51,80 L 43,80 Z" 
          fill="url(#blueGrad)" 
        />
        {/* Serif corner hook for "1" */}
        <path 
          d="M 43,48 L 35,53 L 35,46 L 43,38 Z" 
          fill="#38BDF8" 
        />

        {/* 3. Center White Doorway (Slightly Ajar) */}
        {/* Dark Inside Door Frame */}
        <rect x="53" y="42" width="28" height="38" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
        
        {/* Swing Door Leaf - Open toward the right in 3D perspective */}
        <path 
          d="M 53,42 L 75,45 V 77 L 53,80 Z" 
          fill="#FFFFFF" 
          stroke="#475569" 
          strokeWidth="1.5" 
          filter="url(#shadow)"
        />

        {/* Cyan Door Handle/Knob Dot */}
        <circle cx="70" cy="61" r="2" fill="#0EA5E9" />
      </svg>
      
      <div className="flex flex-col items-start text-left">
        <h1 className={`${dimensions.title} font-sans font-black tracking-wider uppercase leading-none bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
          SHEES
        </h1>
        <p className={`${dimensions.subtitle} font-script mt-0.5 ${darkTheme ? 'text-stone-200' : 'text-stone-600'} filter drop-shadow-sm`}>
          Steel Doors and More
        </p>
      </div>
    </div>
  );
}
