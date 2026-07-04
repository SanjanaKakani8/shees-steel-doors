import React from 'react';

interface DoorIllustrationProps {
  id: string;
  finish?: string;
  configuration?: string;
  className?: string;
  visualPreset?: string;
}

export default function DoorIllustration({ 
  id: doorId, 
  finish = '', 
  configuration = 'Single', 
  className = '',
  visualPreset = ''
}: DoorIllustrationProps) {
  const selectedFinishLower = finish.toLowerCase();
  const configLower = configuration.toLowerCase();

  const id = (visualPreset || doorId || '').toLowerCase();
  const preset = id;
  const isSunburst = preset.includes('700') || preset.includes('sunburst');
  const isLotus = preset.includes('66') || preset.includes('lotus');
  const isChevron = preset.includes('88') || preset.includes('chevron');
  const isGanesha = preset.includes('311') || preset.includes('ganesha') || preset.includes('sacred');
  const isHerringbone = preset.includes('125') || preset.includes('herringbone');
  const isBrickwork = preset.includes('100') || preset.includes('brickwork') || preset.includes('interlocking');
  const isWoven = preset.includes('220') || preset.includes('woven') || preset.includes('leather');
  const isFluted = preset.includes('55') || preset.includes('fluted');
  const isGridWood = preset.includes('21') || preset.includes('grid-wood') || preset.includes('horizontal');
  const isAngles = preset.includes('131') || preset.includes('angles') || preset.includes('geometric');

  // Determine layout style
  const isDouble = configLower.includes('double') || configLower.includes('mobh') || configLower.includes('double door');
  const isMotherSon = configLower.includes('mother-son') || configLower.includes('ms') || configLower.includes('mo');
  const isSingle = !isDouble && !isMotherSon;

  // Joint coordinates
  const jointX = isDouble ? 100 : isMotherSon ? 65 : 100;

  // Base metallic/wood color gradients based on selected finish
  let pLight = "#d7a15c";
  let pMid = "#c58b3e";
  let pDark = "#5c3a21";
  let pDeep = "#2c1a0e";

  if (selectedFinishLower.includes('gold') || selectedFinishLower.includes('teak')) {
    pLight = "#fcd34d"; pMid = "#d97706"; pDark = "#78350f"; pDeep = "#1e1b18";
  } else if (selectedFinishLower.includes('copper') || selectedFinishLower.includes('bronze') || selectedFinishLower.includes('redwood')) {
    pLight = "#fb923c"; pMid = "#ca8a04"; pDark = "#7c2d12"; pDeep = "#1c1917";
  } else if (selectedFinishLower.includes('mahogany') || selectedFinishLower.includes('walnut') || selectedFinishLower.includes('royal')) {
    pLight = "#f87171"; pMid = "#991b1b"; pDark = "#450a0a"; pDeep = "#110000";
  } else if (selectedFinishLower.includes('slate') || selectedFinishLower.includes('charcoal') || selectedFinishLower.includes('gray') || selectedFinishLower.includes('titanium') || selectedFinishLower.includes('obsidian')) {
    pLight = "#60a5fa"; pMid = "#2563eb"; pDark = "#1e3a8a"; pDeep = "#020617";
  }

  // Draw Ganesha path helper for traditional door
  const renderGaneshaPath = (cx: number, cy: number, scale: number) => (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`} filter="url(#shadow)">
      <circle cx="0" cy="0" r="32" fill="#201005" stroke="url(#gold-metal)" strokeWidth="2" />
      <circle cx="0" cy="0" r="26" fill="none" stroke="url(#gold-metal)" strokeWidth="0.8" strokeDasharray="2 2" />
      <path d="M 0 -15 C -4 -15, -7 -10, -7 -5 C -7 0, -3 4, -5 9 C -7 11, -8 13, -4 13 C 0 13, 3 11, 4 7 C 5 3, 3 1, 3 -1 C 3 -5, 6 -7, 3 -12 Z" fill="url(#gold-metal)" />
      <path d="M -3 -15 L 0 -20 L 3 -15 Z" fill="url(#gold-metal)" />
      <path d="M -1 2 C -3 7, -5 10, -9 10" stroke="url(#gold-metal)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="-10" cy="-5" r="4.5" fill="url(#gold-metal)" />
      <circle cx="9" cy="-5" r="4.5" fill="url(#gold-metal)" />
    </g>
  );

  return (
    <div className={`relative w-full h-full bg-stone-950 overflow-hidden flex items-center justify-center p-2 ${className}`}>
      <svg
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-full drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="p-light-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={pLight} />
            <stop offset="50%" stopColor={pMid} />
            <stop offset="100%" stopColor={pDark} />
          </linearGradient>
          <linearGradient id="p-dark-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={pDark} />
            <stop offset="100%" stopColor={pDeep} />
          </linearGradient>
          <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffe4a0" />
            <stop offset="50%" stopColor="#cca125" />
            <stop offset="100%" stopColor="#755a06" />
          </linearGradient>
          <linearGradient id="copper-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f3a683" />
            <stop offset="50%" stopColor="#cf6a3d" />
            <stop offset="100%" stopColor="#7a3416" />
          </linearGradient>
          <linearGradient id="silver-metal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#a8a8a8" />
            <stop offset="100%" stopColor="#545454" />
          </linearGradient>
          <linearGradient id="charcoal-matte" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2b2d31" />
            <stop offset="100%" stopColor="#111214" />
          </linearGradient>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* Outer Heavy Protective Door Frame */}
        <rect x="4" y="4" width="192" height="392" fill="#181614" stroke="#0a0908" strokeWidth="6" rx="2" />
        <rect x="10" y="10" width="180" height="380" fill="none" stroke="#332e29" strokeWidth="1.5" />

        {/* 1. SINGLE DOOR PANEL */}
        {isSingle && (
          <g>
            <rect x="12" y="12" width="176" height="376" fill="url(#p-light-grad)" />
            
            {/* Model Art for PTR 700 */}
            {id === 'ptr-700' && (
              <>
                {Array.from({ length: 14 }).map((_, i) => (
                  <line key={i} x1="12" y1={12 + i * 27} x2="188" y2={12 + i * 27} stroke={pDeep} strokeWidth="1" opacity="0.6" />
                ))}
                <rect x="36" y="70" width="128" height="260" fill="url(#p-dark-grad)" stroke="url(#gold-metal)" strokeWidth="2" rx="4" />
                {/* Demi-Mandala on Right edge of panel */}
                <g transform="translate(164, 200)">
                  <path d="M 0 -50 A 50 50 0 0 0 0 50 Z" fill="#201005" stroke="url(#gold-metal)" strokeWidth="3" />
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = 90 + (i * 180) / 11;
                    const rad = (angle * Math.PI) / 180;
                    return (
                      <line key={i} x1="0" y1="0" x2={Math.cos(rad) * 44} y2={Math.sin(rad) * 44} stroke="url(#gold-metal)" strokeWidth="2" />
                    );
                  })}
                  <circle cx="0" cy="0" r="16" fill="url(#gold-metal)" />
                </g>
                {/* Top and Bottom Studs */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <g key={i}>
                    <circle cx={50 + i * 20} cy="90" r="3" fill="url(#gold-metal)" stroke="#222" strokeWidth="0.5" />
                    <circle cx={50 + i * 20} cy="310" r="3" fill="url(#gold-metal)" stroke="#222" strokeWidth="0.5" />
                  </g>
                ))}
              </>
            )}

            {/* Model Art for PTR 66 */}
            {id === 'ptr-66' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="url(#charcoal-matte)" />
                <rect x="20" y="20" width="160" height="360" fill="none" stroke="url(#gold-metal)" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.4" />
                <rect x="26" y="26" width="148" height="348" fill="none" stroke="url(#gold-metal)" strokeWidth="1" />
                {/* Imperial Lotus on Right edge */}
                <g transform="translate(188, 200)">
                  <path d="M 0 -60 A 60 60 0 0 0 0 60 Z" fill="#151515" stroke="url(#copper-metal)" strokeWidth="4" />
                  {Array.from({ length: 10 }).map((_, i) => {
                    const angle = 90 + (i * 180) / 9;
                    return (
                      <path
                        key={i}
                        d="M 0 0 C -15 -10, -35 -25, -45 0 C -35 25, -15 10, 0 0"
                        transform={`rotate(${angle - 180})`}
                        fill="url(#copper-metal)"
                        stroke="url(#gold-metal)"
                        strokeWidth="1"
                        opacity="0.9"
                      />
                    );
                  })}
                  <path d="M 0 -18 A 18 18 0 0 0 0 18 Z" fill="url(#gold-metal)" />
                </g>
              </>
            )}

            {/* Model Art for PTR 88 */}
            {id === 'ptr-88' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="#161719" />
                {Array.from({ length: 18 }).map((_, i) => (
                  <rect key={i} x="12" y={15 + i * 21} width="176" height="8" fill="#202225" />
                ))}
                {Array.from({ length: 6 }).map((_, i) => {
                  const y = 60 + i * 55;
                  return (
                    <g key={i}>
                      <path d={`M 25 ${y} L 100 ${y - 30} L 175 ${y}`} stroke="url(#copper-metal)" strokeWidth="7" fill="none" strokeLinecap="round" filter="url(#shadow)" />
                      <path d={`M 25 ${y + 8} L 100 ${y - 22} L 175 ${y + 8}`} stroke="url(#gold-metal)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </g>
                  );
                })}
              </>
            )}

            {/* Model Art for PTR 311 */}
            {id === 'ptr-311' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="url(#p-dark-grad)" />
                {/* Vertical flutes */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={i} x1={20 + i * 14} y1="12" x2={20 + i * 14} y2="310" stroke={pDeep} strokeWidth="3" />
                ))}
                {/* Temple bottom lattice */}
                <rect x="12" y="310" width="176" height="78" fill="#1f1107" />
                {Array.from({ length: 10 }).map((_, i) => (
                  <g key={i} stroke="url(#gold-metal)" strokeWidth="1" opacity="0.3">
                    <line x1={12 + i * 18} y1="310" x2={12 + i * 18 + 18} y2="388" />
                    <line x1={188 - i * 18} y1="310" x2={188 - i * 18 - 18} y2="388" />
                  </g>
                ))}
                {/* Ganesha medallion */}
                {renderGaneshaPath(100, 160, 1.2)}
              </>
            )}

            {/* Model Art for PTR 125 */}
            {id === 'ptr-125' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="url(#p-dark-grad)" />
                <line x1="100" y1="12" x2="100" y2="388" stroke={pDeep} strokeWidth="2.5" />
                {Array.from({ length: 20 }).map((_, i) => {
                  const y = 20 + i * 18;
                  return (
                    <g key={i} stroke="url(#p-light-grad)" strokeWidth="3.5">
                      <line x1="12" y1={y} x2="100" y2={y + 24} />
                      <line x1="188" y1={y} x2="100" y2={y + 24} />
                    </g>
                  );
                })}
              </>
            )}

            {/* Model Art for PTR 100 */}
            {id === 'ptr-100' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="url(#p-light-grad)" />
                {Array.from({ length: 15 }).map((_, i) => {
                  const y = 12 + i * 25;
                  const isEven = i % 2 === 0;
                  return (
                    <g key={i}>
                      <line x1="12" y1={y} x2="188" y2={y} stroke={pDeep} strokeWidth="1.5" />
                      {isEven ? (
                        <>
                          <line x1="55" y1={y} x2="55" y2={y + 25} stroke={pDeep} strokeWidth="1.5" />
                          <line x1="145" y1={y} x2="145" y2={y + 25} stroke={pDeep} strokeWidth="1.5" />
                        </>
                      ) : (
                        <line x1="100" y1={y} x2="100" y2={y + 25} stroke={pDeep} strokeWidth="1.5" />
                      )}
                    </g>
                  );
                })}
                {/* Decorative contrasting panels */}
                <rect x="55" y="112" width="90" height="25" fill="url(#charcoal-matte)" opacity="0.85" stroke="url(#gold-metal)" strokeWidth="0.5" />
                <rect x="12" y="212" width="43" height="25" fill="url(#charcoal-matte)" opacity="0.85" stroke="url(#gold-metal)" strokeWidth="0.5" />
                <rect x="145" y="212" width="43" height="25" fill="url(#charcoal-matte)" opacity="0.85" stroke="url(#gold-metal)" strokeWidth="0.5" />
              </>
            )}

            {/* Model Art for PTR 220 */}
            {id === 'ptr-220' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="url(#p-dark-grad)" />
                <g stroke={pDeep} strokeWidth="1.5">
                  {Array.from({ length: 16 }).map((_, r) => {
                    const y = 12 + r * 23.5;
                    return (
                      <g key={r}>
                        <line x1="12" y1={y} x2="188" y2={y} strokeWidth="2" />
                        {Array.from({ length: 8 }).map((_, c) => {
                          const x = 12 + c * 22;
                          const weave = (r % 2 === 0 && c % 2 !== 0) || (r % 2 !== 0 && c % 2 === 0);
                          return weave ? (
                            <line key={c} x1={x + 11} y1={y} x2={x + 11} y2={y + 23.5} stroke="url(#p-light-grad)" strokeWidth="3" />
                          ) : (
                            <line key={c} x1={x} y1={y + 11} x2={x + 22} y2={y + 11} stroke="#111" opacity="0.4" />
                          );
                        })}
                      </g>
                    );
                  })}
                </g>
              </>
            )}

            {/* Model Art for PTR 55 */}
            {id === 'ptr-55' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="url(#p-light-grad)" />
                {Array.from({ length: 25 }).map((_, i) => (
                  <rect key={i} x={18 + i * 6.5} y="12" width="2.5" height="376" fill="url(#p-dark-grad)" opacity="0.8" />
                ))}
                <circle cx="100" cy="110" r="7" fill="#111" stroke="url(#gold-metal)" strokeWidth="1.5" />
                <circle cx="100" cy="110" r="2.5" fill="#555" />
              </>
            )}

            {/* Model Art for PTR 21 */}
            {id === 'ptr-21' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="url(#p-dark-grad)" />
                {Array.from({ length: 16 }).map((_, i) => (
                  <line key={i} x1="12" y1={12 + i * 23.5} x2="188" y2={12 + i * 23.5} stroke={pDeep} strokeWidth="2.5" />
                ))}
                {/* Traditional Door Knocker */}
                <g transform="translate(100, 80)" filter="url(#shadow)">
                  <circle cx="0" cy="0" r="5" fill="url(#gold-metal)" />
                  <circle cx="0" cy="16" r="10" fill="none" stroke="url(#gold-metal)" strokeWidth="2.5" />
                  <rect x="-2" y="0" width="4" height="12" fill="url(#gold-metal)" />
                </g>
              </>
            )}

            {/* Model Art for PTR 131 */}
            {id === 'ptr-131' && (
              <>
                <rect x="12" y="12" width="176" height="376" fill="#334155" />
                <g stroke="#1e293b" strokeWidth="2.5">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={i} x1="12" y1={40 + i * 60} x2="188" y2={120 + i * 60} />
                  ))}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <line key={i} x1="188" y1={60 + i * 80} x2="12" y2={220 + i * 80} stroke="#0f172a" strokeWidth="1.5" opacity="0.6" />
                  ))}
                </g>
              </>
            )}

            {/* Handles & Locks for Single Door */}
            <g transform="translate(172, 180)" filter="url(#shadow)">
              <rect x="-4" y="0" width="8" height="60" rx="2" fill="url(#silver-metal)" />
              <circle cx="0" cy="15" r="3" fill="#111" />
              <rect x="-2" y="12" width="12" height="6" rx="1" fill="url(#silver-metal)" />
            </g>
          </g>
        )}

        {/* 2. DOUBLE DOOR (MOBH) PANEL */}
        {isDouble && (
          <g>
            {/* Left Door Leaf */}
            <g>
              <rect x="12" y="12" width="86" height="376" fill="url(#p-light-grad)" />
              
              {id === 'ptr-700' && (
                <>
                  {Array.from({ length: 14 }).map((_, i) => (
                    <line key={i} x1="12" y1={12 + i * 27} x2="98" y2={12 + i * 27} stroke={pDeep} strokeWidth="1" opacity="0.6" />
                  ))}
                  <rect x="24" y="70" width="74" height="260" fill="url(#p-dark-grad)" stroke="url(#gold-metal)" strokeWidth="1.5" />
                  {/* Left half-circle for perfect merge at seam (x=100) */}
                  <g transform="translate(98, 200)">
                    <path d="M 0 -50 A 50 50 0 0 0 0 50 Z" fill="#201005" stroke="url(#gold-metal)" strokeWidth="3" />
                    {Array.from({ length: 8 }).map((_, i) => {
                      const angle = 90 + (i * 180) / 7;
                      const rad = (angle * Math.PI) / 180;
                      return (
                        <line key={i} x1="0" y1="0" x2={Math.cos(rad) * 44} y2={Math.sin(rad) * 44} stroke="url(#gold-metal)" strokeWidth="2" />
                      );
                    })}
                  </g>
                  {/* Studs */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <g key={i}>
                      <circle cx={36 + i * 20} cy="90" r="3" fill="url(#gold-metal)" />
                      <circle cx={36 + i * 20} cy="310" r="3" fill="url(#gold-metal)" />
                    </g>
                  ))}
                </>
              )}

              {id === 'ptr-66' && (
                <>
                  <rect x="12" y="12" width="86" height="376" fill="url(#charcoal-matte)" />
                  <rect x="18" y="18" width="80" height="364" fill="none" stroke="url(#gold-metal)" strokeWidth="1" strokeDasharray="6 3" opacity="0.4" />
                  {/* Left Lotus half */}
                  <g transform="translate(98, 200)">
                    <path d="M 0 -58 A 58 58 0 0 0 0 58 Z" fill="#151515" stroke="url(#copper-metal)" strokeWidth="3.5" />
                    {Array.from({ length: 6 }).map((_, i) => {
                      const angle = 90 + (i * 180) / 5;
                      return (
                        <path
                          key={i}
                          d="M 0 0 C -12 -8, -28 -20, -36 0 C -28 20, -12 8, 0 0"
                          transform={`rotate(${angle - 180})`}
                          fill="url(#copper-metal)"
                          stroke="url(#gold-metal)"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </g>
                </>
              )}

              {id === 'ptr-88' && (
                <>
                  <rect x="12" y="12" width="86" height="376" fill="#161719" />
                  {Array.from({ length: 18 }).map((_, i) => (
                    <rect key={i} x="12" y={15 + i * 21} width="86" height="8" fill="#202225" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const y = 60 + i * 55;
                    return (
                      <g key={i}>
                        <line x1="20" y1={y} x2="98" y2={y - 30} stroke="url(#copper-metal)" strokeWidth="6" strokeLinecap="round" />
                        <line x1="20" y1={y + 6} x2="98" y2={y - 24} stroke="url(#gold-metal)" strokeWidth="2.5" strokeLinecap="round" />
                      </g>
                    );
                  })}
                </>
              )}

              {id === 'ptr-311' && (
                <>
                  <rect x="12" y="12" width="86" height="376" fill="url(#p-dark-grad)" />
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={i} x1={20 + i * 14} y1="12" x2={20 + i * 14} y2="310" stroke={pDeep} strokeWidth="3.5" />
                  ))}
                  <rect x="12" y="310" width="86" height="78" fill="#1f1107" />
                  {renderGaneshaPath(55, 160, 0.9)}
                </>
              )}
            </g>

            {/* Right Door Leaf */}
            <g>
              <rect x="102" y="12" width="86" height="376" fill="url(#p-light-grad)" />
              
              {id === 'ptr-700' && (
                <>
                  {Array.from({ length: 14 }).map((_, i) => (
                    <line key={i} x1="102" y1={12 + i * 27} x2="188" y2={12 + i * 27} stroke={pDeep} strokeWidth="1" opacity="0.6" />
                  ))}
                  <rect x="102" y="70" width="74" height="260" fill="url(#p-dark-grad)" stroke="url(#gold-metal)" strokeWidth="1.5" />
                  {/* Right half-circle for perfect merge at seam */}
                  <g transform="translate(102, 200)">
                    <path d="M 0 -50 A 50 50 0 0 1 0 50 Z" fill="#201005" stroke="url(#gold-metal)" strokeWidth="3" />
                    {Array.from({ length: 8 }).map((_, i) => {
                      const angle = -90 + (i * 180) / 7;
                      const rad = (angle * Math.PI) / 180;
                      return (
                        <line key={i} x1="0" y1="0" x2={Math.cos(rad) * 44} y2={Math.sin(rad) * 44} stroke="url(#gold-metal)" strokeWidth="2" />
                      );
                    })}
                  </g>
                  {/* Studs */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <g key={i}>
                      <circle cx={124 + i * 20} cy="90" r="3" fill="url(#gold-metal)" />
                      <circle cx={124 + i * 20} cy="310" r="3" fill="url(#gold-metal)" />
                    </g>
                  ))}
                </>
              )}

              {id === 'ptr-66' && (
                <>
                  <rect x="102" y="12" width="86" height="376" fill="url(#charcoal-matte)" />
                  <rect x="102" y="18" width="80" height="364" fill="none" stroke="url(#gold-metal)" strokeWidth="1" strokeDasharray="6 3" opacity="0.4" />
                  {/* Right Lotus half */}
                  <g transform="translate(102, 200)">
                    <path d="M 0 -58 A 58 58 0 0 1 0 58 Z" fill="#151515" stroke="url(#copper-metal)" strokeWidth="3.5" />
                    {Array.from({ length: 6 }).map((_, i) => {
                      const angle = -90 + (i * 180) / 5;
                      return (
                        <path
                          key={i}
                          d="M 0 0 C 12 -8, 28 -20, 36 0 C 28 20, 12 8, 0 0"
                          transform={`rotate(${angle})`}
                          fill="url(#copper-metal)"
                          stroke="url(#gold-metal)"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </g>
                </>
              )}

              {id === 'ptr-88' && (
                <>
                  <rect x="102" y="12" width="86" height="376" fill="#161719" />
                  {Array.from({ length: 18 }).map((_, i) => (
                    <rect key={i} x="102" y={15 + i * 21} width="86" height="8" fill="#202225" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const y = 60 + i * 55;
                    return (
                      <g key={i}>
                        <line x1="180" y1={y} x2="102" y2={y - 30} stroke="url(#copper-metal)" strokeWidth="6" strokeLinecap="round" />
                        <line x1="180" y1={y + 6} x2="102" y2={y - 24} stroke="url(#gold-metal)" strokeWidth="2.5" strokeLinecap="round" />
                      </g>
                    );
                  })}
                </>
              )}

              {id === 'ptr-311' && (
                <>
                  <rect x="102" y="12" width="86" height="376" fill="url(#p-dark-grad)" />
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={i} x1={110 + i * 14} y1="12" x2={110 + i * 14} y2="310" stroke={pDeep} strokeWidth="3.5" />
                  ))}
                  <rect x="102" y="310" width="86" height="78" fill="#1f1107" />
                  {renderGaneshaPath(145, 160, 0.9)}
                </>
              )}
            </g>

            {/* General Double Door details - central gap seam, dual brass locks */}
            <line x1="100" y1="12" x2="100" y2="388" stroke="#0a0a09" strokeWidth="2.5" />
            <g transform="translate(100, 185)" filter="url(#shadow)">
              <rect x="-3" y="0" width="6" height="45" fill="url(#gold-metal)" />
              {/* Dual levers */}
              <rect x="-10" y="8" width="8" height="4" rx="1" fill="url(#gold-metal)" />
              <rect x="2" y="8" width="8" height="4" rx="1" fill="url(#gold-metal)" />
              <circle cx="0" cy="10" r="1.5" fill="#111" />
            </g>
          </g>
        )}

        {/* 3. MOTHER-SON (MS) PANEL */}
        {isMotherSon && (
          <g>
            {/* Left Narrow Son Leaf (Width 53) */}
            <g>
              <rect x="12" y="12" width="53" height="376" fill="url(#p-light-grad)" />
              
              {id === 'ptr-700' && (
                <>
                  {Array.from({ length: 14 }).map((_, i) => (
                    <line key={i} x1="12" y1={12 + i * 27} x2="65" y2={12 + i * 27} stroke={pDeep} strokeWidth="1" opacity="0.6" />
                  ))}
                  <rect x="20" y="70" width="45" height="260" fill="url(#p-dark-grad)" stroke="url(#gold-metal)" strokeWidth="1.5" />
                  {/* Minor Stud row */}
                  <circle cx="32" cy="90" r="2.5" fill="url(#gold-metal)" />
                  <circle cx="42" cy="90" r="2.5" fill="url(#gold-metal)" />
                  <circle cx="32" cy="310" r="2.5" fill="url(#gold-metal)" />
                  <circle cx="42" cy="310" r="2.5" fill="url(#gold-metal)" />
                </>
              )}

              {id === 'ptr-66' && (
                <>
                  <rect x="12" y="12" width="53" height="376" fill="url(#charcoal-matte)" />
                  <rect x="18" y="18" width="47" height="364" fill="none" stroke="url(#gold-metal)" strokeWidth="0.8" strokeDasharray="4 2" opacity="0.3" />
                </>
              )}

              {id === 'ptr-88' && (
                <>
                  <rect x="12" y="12" width="53" height="376" fill="#161719" />
                  {Array.from({ length: 18 }).map((_, i) => (
                    <rect key={i} x="12" y={15 + i * 21} width="53" height="8" fill="#202225" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const y = 60 + i * 55;
                    return (
                      <g key={i}>
                        <line x1="15" y1={y} x2="65" y2={y - 20} stroke="url(#copper-metal)" strokeWidth="4.5" />
                        <line x1="15" y1={y + 4} x2="65" y2={y - 16} stroke="url(#gold-metal)" strokeWidth="2" />
                      </g>
                    );
                  })}
                </>
              )}

              {id === 'ptr-311' && (
                <>
                  <rect x="12" y="12" width="53" height="376" fill="url(#p-dark-grad)" />
                  {Array.from({ length: 3 }).map((_, i) => (
                    <line key={i} x1={20 + i * 14} y1="12" x2={20 + i * 14} y2="310" stroke={pDeep} strokeWidth="3.5" />
                  ))}
                  <rect x="12" y="310" width="53" height="78" fill="#1f1107" />
                </>
              )}
            </g>

            {/* Right Wide Mother Leaf (Width 119) */}
            <g>
              <rect x="69" y="12" width="119" height="376" fill="url(#p-light-grad)" />
              
              {id === 'ptr-700' && (
                <>
                  {Array.from({ length: 14 }).map((_, i) => (
                    <line key={i} x1="69" y1={12 + i * 27} x2="188" y2={12 + i * 27} stroke={pDeep} strokeWidth="1" opacity="0.6" />
                  ))}
                  <rect x="80" y="70" width="94" height="260" fill="url(#p-dark-grad)" stroke="url(#gold-metal)" strokeWidth="1.5" />
                  {/* Mother sunburst on the left joint edge (cx=69) */}
                  <g transform="translate(69, 200)">
                    <path d="M 0 -45 A 45 45 0 0 1 0 45 Z" fill="#201005" stroke="url(#gold-metal)" strokeWidth="2.5" />
                    {Array.from({ length: 10 }).map((_, i) => {
                      const angle = -90 + (i * 180) / 9;
                      const rad = (angle * Math.PI) / 180;
                      return (
                        <line key={i} x1="0" y1="0" x2={Math.cos(rad) * 40} y2={Math.sin(rad) * 40} stroke="url(#gold-metal)" strokeWidth="2" />
                      );
                    })}
                  </g>
                  {/* Studs */}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <g key={i}>
                      <circle cx={92 + i * 20} cy="90" r="3" fill="url(#gold-metal)" />
                      <circle cx={92 + i * 20} cy="310" r="3" fill="url(#gold-metal)" />
                    </g>
                  ))}
                </>
              )}

              {id === 'ptr-66' && (
                <>
                  <rect x="69" y="12" width="119" height="376" fill="url(#charcoal-matte)" />
                  <rect x="75" y="18" width="107" height="364" fill="none" stroke="url(#gold-metal)" strokeWidth="1" strokeDasharray="6 3" opacity="0.4" />
                  {/* Mother lotus half */}
                  <g transform="translate(69, 200)">
                    <path d="M 0 -54 A 54 54 0 0 1 0 54 Z" fill="#151515" stroke="url(#copper-metal)" strokeWidth="3.5" />
                    {Array.from({ length: 6 }).map((_, i) => {
                      const angle = -90 + (i * 180) / 5;
                      return (
                        <path
                          key={i}
                          d="M 0 0 C 12 -8, 26 -18, 34 0 C 26 18, 12 8, 0 0"
                          transform={`rotate(${angle})`}
                          fill="url(#copper-metal)"
                          stroke="url(#gold-metal)"
                          strokeWidth="1"
                        />
                      );
                    })}
                  </g>
                </>
              )}

              {id === 'ptr-88' && (
                <>
                  <rect x="69" y="12" width="119" height="376" fill="#161719" />
                  {Array.from({ length: 18 }).map((_, i) => (
                    <rect key={i} x="69" y={15 + i * 21} width="119" height="8" fill="#202225" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => {
                    const y = 60 + i * 55;
                    return (
                      <g key={i}>
                        <path d={`M 75 ${y} L 125 ${y - 25} L 180 ${y}`} stroke="url(#copper-metal)" strokeWidth="6" strokeLinecap="round" fill="none" />
                        <path d={`M 75 ${y + 6} L 125 ${y - 19} L 180 ${y + 6}`} stroke="url(#gold-metal)" strokeWidth="2.2" strokeLinecap="round" fill="none" />
                      </g>
                    );
                  })}
                </>
              )}

              {id === 'ptr-311' && (
                <>
                  <rect x="69" y="12" width="119" height="376" fill="url(#p-dark-grad)" />
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={i} x1={76 + i * 14} y1="12" x2={76 + i * 14} y2="310" stroke={pDeep} strokeWidth="3.5" />
                  ))}
                  <rect x="69" y="310" width="119" height="78" fill="#1f1107" />
                  {renderGaneshaPath(128, 160, 1.05)}
                </>
              )}
            </g>

            {/* Mother-Son central joint line & locks */}
            <line x1="67" y1="12" x2="67" y2="388" stroke="#0a0a09" strokeWidth="2.5" />
            <g transform="translate(67, 180)" filter="url(#shadow)">
              <rect x="-3" y="0" width="6" height="50" rx="1.5" fill="url(#silver-metal)" />
              <rect x="3" y="12" width="10" height="5" rx="1" fill="url(#silver-metal)" />
              <circle cx="0" cy="14" r="1.8" fill="#111" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
}
