import { DoorModel, Branch } from './types';

export const DOOR_MODELS: DoorModel[] = [
  {
    id: 'ptr-700',
    name: 'PTR 700 - Antique Sunburst',
    catalogPage: 1,
    style: 'luxury',
    description: 'An architectural masterpiece featuring a spectacular sunburst demi-mandala centerpiece, bordered by brass rivets and textured horizontal wood grain banding. A representation of royalty and security.',
    baseWidths: [1080, 1200],
    baseHeights: [2050],
    thickness: 90,
    finishes: ['Antique Bronze', 'Copper Patina', 'Teak Gold'],
    configurations: ['Single', 'Double (MOBH)'],
    features: ['Embossed Rivets', 'Hand-Stained Metallic Polish', 'Reinforced Core', 'Anti-Corrosion Priming'],
    specs: {
      weight: '95 - 120 kg',
      lockingPoints: 11,
      sheetThickness: '1.2mm Outer / 0.8mm Inner Steel'
    },
    visualPreset: 'sunburst',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-66',
    name: 'PTR 66 - Imperial Lotus Mandala',
    catalogPage: 3,
    style: 'luxury',
    description: 'Exquisite layered copper lotus petals forming a circular wheel of luxury, set against a dark textured graphite backdrop. Embellished with classic Greek key border engraving.',
    baseWidths: [1080, 1200, 1500],
    baseHeights: [2050],
    thickness: 90,
    finishes: ['Royal Copper-Bronze', 'Dark Obsidian Gold', 'Teak Wood-Tone'],
    configurations: ['Single', 'Double (MOBH)', 'Twin Door with Mesh'],
    features: ['Interactive 3D Carved Lotus', 'Greek Key Fretwork', 'Double-Pane Acoustic Seal', 'Sound Insulation Core'],
    specs: {
      weight: '110 - 145 kg',
      lockingPoints: 15,
      sheetThickness: '1.5mm Outer / 1.0mm Inner Steel'
    },
    visualPreset: 'lotus',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-88',
    name: 'PTR 88 - Art Deco chevron',
    catalogPage: 6,
    style: 'modern',
    description: 'Stunning copper-bronze angular bands interlocking in a sleek chevron pattern. Set on a coarse, rugged charcoal-textured background, perfect for contemporary luxury villas.',
    baseWidths: [1200, 1500],
    baseHeights: [2050],
    thickness: 90,
    finishes: ['Charcoal-Gold Duo', 'Bronze Electroplate', 'Slate Gray'],
    configurations: ['Single', 'Double (MOBH)'],
    features: ['High-Contrast Chevron Stripes', 'Heavy Texture Paint', 'Concealed Heavy-Duty Hinges', 'Dual-Gasket Weatherstripping'],
    specs: {
      weight: '105 - 135 kg',
      lockingPoints: 13,
      sheetThickness: '1.2mm Outer / 0.8mm Inner Steel'
    },
    visualPreset: 'chevron-lines',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-131',
    name: 'PTR 131 - Modernist Angles',
    catalogPage: 105,
    style: 'modern',
    description: 'Asymmetric diagonal grooved lines crossing a slate gray canvas with clean geometric precision. Designed for minimalist homes seeking a sleek and smart entrance.',
    baseWidths: [880, 1080, 1200],
    baseHeights: [2050],
    thickness: 70,
    finishes: ['Titanium Slate Matte', 'Anodized Bronze', 'Ebony Textured'],
    configurations: ['Single', 'Side Glass Panel (SGBH)'],
    features: ['Asymmetrical Grooves', 'Minimalist Lever Handle', 'Scratch-Proof Coating', 'Zero Thermal Transfer Core'],
    specs: {
      weight: '80 - 98 kg',
      lockingPoints: 9,
      sheetThickness: '1.0mm Outer / 0.8mm Inner Steel'
    },
    visualPreset: 'geometric-angles',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-125',
    name: 'PTR 125 - Herringbone Chevron',
    catalogPage: 16,
    style: 'wood-grain',
    description: 'Fine herringbone wood-texture slats meeting in a flawless central seam. Combined with an offset vertical black titanium handle and modern smart-lock panel.',
    baseWidths: [1080, 1200, 1500],
    baseHeights: [2050],
    thickness: 90,
    finishes: ['Teak Gold Wood', 'Royal Walnut', 'Dark Mahogany'],
    configurations: ['Single', 'Double (MOBH)'],
    features: ['3D Wood grain Embossing', 'Herringbone Panels', 'Smart Keypad Integration Ready', 'Termite-Proof Finish Seal'],
    specs: {
      weight: '90 - 118 kg',
      lockingPoints: 11,
      sheetThickness: '1.2mm Outer / 0.8mm Inner Steel'
    },
    visualPreset: 'herringbone',
    imageUrl: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-311',
    name: 'PTR 311 - Lord Ganesha Sacred',
    catalogPage: 13,
    style: 'traditional',
    description: 'A deeply spiritual entryway featuring a central brass Ganesha medallion, surrounded by traditional vertical temple-door fluting and a honeycomb lattice base.',
    baseWidths: [1080, 1200],
    baseHeights: [2050],
    thickness: 90,
    finishes: ['Sacred Copper-Gold', 'Bronze-Teak Grain', 'Pure Copper Patina'],
    configurations: ['Single', 'Double (MOBH)'],
    features: ['Fluted Vertical Column Styling', 'Custom Honeycomb Base', 'Ganesha Brass Medallion', 'Acoustic Thud-Stop Gasket'],
    specs: {
      weight: '98 - 125 kg',
      lockingPoints: 13,
      sheetThickness: '1.2mm Outer / 1.0mm Inner Steel'
    },
    visualPreset: 'ganesha',
    imageUrl: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-100',
    name: 'PTR 100 - Interlocking Brickwork',
    catalogPage: 42,
    style: 'wood-grain',
    description: 'Flawless brick-layered panels of warm cedar wood textures intersecting with modern charcoal square accents. Highly secure, bold architectural profile.',
    baseWidths: [880, 980, 1080, 1200, 1500],
    baseHeights: [2050],
    thickness: 70,
    finishes: ['Royal Walnut', 'Teak Wood', 'Cherry Mahogany'],
    configurations: ['Single', 'Double (MOBH)', 'Twin Door with Mesh', 'Side Glass Panel (SGBH)'],
    features: ['Interlocking 3D Panels', 'Charcoal Grid Inserts', 'Available in Double Side Panels', 'UV-Resistant Protective Seal'],
    specs: {
      weight: '85 - 115 kg',
      lockingPoints: 11,
      sheetThickness: '1.2mm Outer / 0.8mm Inner Steel'
    },
    visualPreset: 'brickwork',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-220',
    name: 'PTR 220 - Woven Leather Teak',
    catalogPage: 78,
    style: 'luxury',
    description: 'An innovative door surface embossed in a padded, woven basket-weave 3D texture, creating the illusion of luxurious hand-woven leather panels in premium teak wood finish.',
    baseWidths: [880, 1200],
    baseHeights: [2050],
    thickness: 70,
    finishes: ['Teak Wood Texture', 'Gold Teak', 'Dark Mocha Walnut'],
    configurations: ['Single', 'Double (MOBH)'],
    features: ['Woven Basket-Weave 3D Design', 'Water-Proof Marine Grade Coating', 'Triple Stainless Steel Hinge System', 'Advanced Multi-point Locking'],
    specs: {
      weight: '88 - 110 kg',
      lockingPoints: 11,
      sheetThickness: '1.2mm Outer / 0.8mm Inner Steel'
    },
    visualPreset: 'woven',
    imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-55',
    name: 'PTR 55 - Modern Fluted Teak',
    catalogPage: 57,
    style: 'wood-grain',
    description: 'Elegant vertical flutes and clean lines in rich golden-brown teak wood finish, with a central peephole and offset handle rail for a modern organic aesthetic.',
    baseWidths: [880, 1080, 1200, 1500, 1800],
    baseHeights: [2050],
    thickness: 70,
    finishes: ['Golden Teak Wood', 'Royal Walnut', 'Aged Mahogany'],
    configurations: ['Single', 'Double (MOBH)', 'Side Glass Panel (SGBH)'],
    features: ['Vertical Flutes', 'Offset Handle Path', 'Anti-Expansion / Non-Warping Core', 'Termite-Proof Infusion'],
    specs: {
      weight: '82 - 112 kg',
      lockingPoints: 9,
      sheetThickness: '1.0mm Outer / 0.8mm Inner Steel'
    },
    visualPreset: 'fluted',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ptr-21',
    name: 'PTR 21 - Horizontal Grid Wood',
    catalogPage: 21,
    style: 'wood-grain',
    description: 'Classic residential favorite. Warm rich brown wood finish with neat horizontal grid lines, elegant door knocker, and clean silver vertical pull handle.',
    baseWidths: [880, 1080, 1200, 1500],
    baseHeights: [2050],
    thickness: 70,
    finishes: ['Royal Walnut', 'Teak Wood', 'Mahogany Red'],
    configurations: ['Single', 'Double (MOBH)', 'Side Glass Panel (SGBH)'],
    features: ['Minimalist Wood Paneling', 'Dual-Tone Silver Accents', 'Integrated Peep-Hole', 'Fire Resistant Insulation Core'],
    specs: {
      weight: '80 - 105 kg',
      lockingPoints: 11,
      sheetThickness: '1.2mm Outer / 0.8mm Inner Steel'
    },
    visualPreset: 'grid-wood',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80'
  }
];

export const CORE_FEATURES = [
  {
    title: 'Termite Proof',
    icon: 'BugOff',
    description: '100% insect and termite resistant. Unlike traditional teakwood doors, steel leaves zero opportunity for borers, saving you from recurring treatment costs.',
    badge: 'Lifetime Protection'
  },
  {
    title: 'Water Proof',
    icon: 'Droplets',
    description: 'Coated with multi-layered premium marine-grade rust protection and anti-corrosive primer. No swelling, warping, or wood rot even during heavy Indian monsoons.',
    badge: '100% Weatherproof'
  },
  {
    title: 'Fire Resistant',
    icon: 'Flame',
    description: 'Engineered with high-grade solid cold-rolled steel and infill minerals that delay fire progression, offering critical protection for your family.',
    badge: 'Class-A Fire Rated'
  },
  {
    title: 'Advanced Locking System',
    icon: 'ShieldAlert',
    description: 'Multi-point locking mechanism that anchors into the frame at 9 to 15 independent locations with a single turn of the key, making it virtually break-in proof.',
    badge: 'Anti-Theft Armor'
  },
  {
    title: 'Low Maintenance',
    icon: 'Wrench',
    description: 'Finished with state-of-the-art thermo-printing techniques. Never requires varnishing, sanding, or repainting. Just a simple wipe restores its original glow.',
    badge: 'Zero Effort Care'
  },
  {
    title: 'Elegant Finish',
    icon: 'Sparkles',
    description: 'Offers high-fidelity wooden textures, hand-painted copper/bronze patinas, and modern metallic designs that elevate your home’s status at first sight.',
    badge: 'Luxury Appeal'
  }
];

export const DIFFERENCES = [
  {
    metric: 'Termite & Borer Attacks',
    steel: '100% immune (Zero termite possibility)',
    wood: 'High risk (Requires regular chemical coatings)'
  },
  {
    metric: 'Warping & Swelling in Monsoons',
    steel: 'Perfectly stable (Gaskets prevent all moisture absorption)',
    wood: 'Swells, jams, and becomes hard to lock'
  },
  {
    metric: 'Lock Security Points',
    steel: '9 to 15 Heavy-Duty Interlocking deadbolts',
    wood: 'Single-point lock (Highly vulnerable to crowbars)'
  },
  {
    metric: 'Maintenance & Repolishing',
    steel: 'Virtually zero (Durable thermo-printed coating)',
    wood: 'Needs polishing/varnishing every 2-3 years ($$$)'
  },
  {
    metric: 'Fire Retardancy',
    steel: 'Inherent steel resistance, safe infills',
    wood: 'Highly combustible, acts as fuel source'
  }
];

export const BRANCHES: Branch[] = [
  {
    name: 'SHEES Steel Doors - Head Office',
    type: 'Head Office',
    address: 'Opp. Srinivasa Merchants Welfare Association (Mirchi Godown), Gooty Road, Anantapur, Andhra Pradesh - 515001.',
    landmark: 'Near Mirchi Godown',
    phones: ['9550209607', '8555949028'],
    mapQuery: 'SHEES Steel Doors Gooty Road Anantapur'
  },
  {
    name: 'SHEES Steel Doors - New Branch',
    type: 'New Branch',
    address: 'Near Mysore Narigamma Temple, Kalyandurgam Road, Nandamuri Nagar, Ananthapuramu - 515001. (A.P.)',
    landmark: 'Near Mysore Narigamma Temple',
    phones: ['6301028568', '8555949028'],
    mapQuery: 'SHEES Steel Doors Kalyandurgam Road Anantapur'
  }
];

export const CONTACT_PERSONS = [
  { name: 'S. Mohammad Rafi', role: 'Managing Partner', phone: '9550209607' },
  { name: 'S. Abdul Hafiz', role: 'Sales & Inquiries', phone: '6301028568' }
];
