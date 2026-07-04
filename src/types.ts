export interface DoorModel {
  id: string;
  name: string;
  catalogPage: number;
  style: 'luxury' | 'modern' | 'wood-grain' | 'traditional';
  description: string;
  baseWidths: number[]; // e.g. [880, 1080, 1200, 1500, 1800]
  baseHeights: number[]; // e.g. [2050, 2150, 2350]
  thickness: number; // e.g. 70 or 90
  finishes: string[]; // e.g. ['Antique Bronze', 'Imperial Copper', 'Teak Wood', 'Walnut Wood', 'Slate Matte']
  configurations: ('Single' | 'Double (MOBH)' | 'Twin Door with Mesh' | 'Side Glass Panel (SGBH)')[];
  features: string[];
  specs: {
    weight: string;
    lockingPoints: number;
    sheetThickness: string;
  };
  // Custom SVG / CSS visual descriptor to render the door dynamically
  visualPreset: string;
  imageUrl: string;
}

export interface VisualizerState {
  doorId: string;
  wallStyle: 'marble' | 'slate' | 'brick' | 'modern' | 'walnut';
  size: 'Single' | 'Double';
  finish: string;
  handleType: 'tubular' | 'scroll' | 'smart';
  lockUpgrade: boolean;
}

export interface QuoteRequest {
  customerName: string;
  phone: string;
  location: string;
  doorId: string;
  quantity: number;
  width: number;
  height: number;
  thickness: number;
  configuration: string;
  finish: string;
  handleType: string;
  lockType: 'standard' | 'smart-biometric';
  additionalComments: string;
}

export interface Branch {
  name: string;
  type: 'Head Office' | 'New Branch';
  address: string;
  landmark: string;
  phones: string[];
  mapQuery: string;
}
