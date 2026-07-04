import React, { useState } from 'react';
import { Search, Compass, MessageSquare, PhoneCall, Shield, HelpCircle, ArrowRight, Plus, Trash2, RefreshCw, X, Check } from 'lucide-react';
import { DoorModel } from '../types';

interface HomeSearchStationProps {
  doors: DoorModel[];
  onAddDoor: (door: DoorModel) => void;
  onDeleteDoor: (doorId: string) => void;
  onResetDefaultDoors: () => void;
  onTriggerInquiry: () => void;
  onSelectDoor: (doorId: string, finish: string | null) => void;
}

export default function HomeSearchStation({ 
  doors,
  onAddDoor,
  onDeleteDoor,
  onResetDefaultDoors,
  onTriggerInquiry, 
  onSelectDoor 
}: HomeSearchStationProps) {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHandle, setSelectedHandle] = useState('all');
  const [searchActive, setSearchActive] = useState(true); // Default to active search state
  
  // Modal State for adding new door
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Track selected finish for each door model individually
  const [doorFinishes, setDoorFinishes] = useState<Record<string, string>>({});

  // Dynamic state for new door form
  const [formId, setFormId] = useState('');
  const [formName, setFormName] = useState('');
  const [formPage, setFormPage] = useState('1');
  const [formStyle, setFormStyle] = useState<'luxury' | 'modern' | 'wood-grain' | 'traditional'>('luxury');
  const [formDesc, setFormDesc] = useState('');
  const [formWidths, setFormWidths] = useState('1080, 1200');
  const [formHeights, setFormHeights] = useState('2050');
  const [formThickness, setFormThickness] = useState('90');
  const [formFinishes, setFormFinishes] = useState('Antique Bronze, Copper Patina, Teak Gold');
  const [formConfigs, setFormConfigs] = useState<string[]>(['Single', 'Double (MOBH)']);
  const [formFeatures, setFormFeatures] = useState('Embossed Rivets, Reinforced Core, Sound Insulation');
  const [formWeight, setFormWeight] = useState('95 - 120 kg');
  const [formLockPoints, setFormLockPoints] = useState('11');
  const [formSheetThickness, setFormSheetThickness] = useState('1.2mm Outer / 0.8mm Inner Steel');
  const [formPreset, setFormPreset] = useState('ptr-700');
  const [formHandles, setFormHandles] = useState<string[]>(['left', 'right']);

  const handlePositions = [
    { id: 'all', label: 'All Handles', description: 'Show all designs' },
    { id: 'left', label: 'Left Handle', description: 'Left-aligned latch' },
    { id: 'right', label: 'Right Handle', description: 'Right-aligned latch' },
    { id: 'middle', label: 'Middle Handle', description: 'Center pull or double seam' },
  ];

  // Helper to get active finish for a specific door
  const getSelectedFinish = (doorId: string, finishes: string[]) => {
    return doorFinishes[doorId] || finishes[0] || '';
  };

  const handlePositionsOptions = [
    { id: 'left', label: 'Left Side Handle' },
    { id: 'right', label: 'Right Side Handle' },
    { id: 'middle', label: 'Middle / Center Handle' },
  ];

  const configOptions = [
    'Single',
    'Double (MOBH)',
    'Twin Door with Mesh',
    'Side Glass Panel (SGBH)'
  ];

  // Mapping each original model to its compatible handle position(s)
  const handleMapping: Record<string, string[]> = {
    'ptr-131': ['left'],
    'ptr-88': ['left'],
    'ptr-125': ['left', 'right'],
    'ptr-100': ['left', 'right'],
    'ptr-220': ['left', 'right'],
    'ptr-55': ['left', 'right', 'middle'],
    'ptr-700': ['right', 'middle'],
    'ptr-21': ['right'],
    'ptr-311': ['middle'],
    'ptr-66': ['middle']
  };

  // Filtering doors based on search string and selected handle position
  const filteredDoors = doors.filter((door) => {
    const matchesSearch = 
      door.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      door.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
      door.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Check handles compatibility
    const compatible = (door as any).compatibleHandles || handleMapping[door.id] || ['left', 'right'];
    const matchesHandle = selectedHandle === 'all' || compatible.includes(selectedHandle);
    return matchesSearch && matchesHandle;
  });

  const handleSearchClick = () => {
    setSearchQuery(searchInput);
  };

  const handleQuickSearch = (term: string) => {
    setSearchInput(term);
    setSearchQuery(term);
  };

  const handleHandleSelect = (posId: string) => {
    setSelectedHandle(posId);
  };

  const handleClearSearch = () => {
    setSearchInput('');
    setSearchQuery('');
    setSelectedHandle('all');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formId.trim() || !formName.trim()) {
      alert('Please fill out unique Code ID and Name.');
      return;
    }

    const createdId = formId.trim().toLowerCase();

    // Check uniqueness
    if (doors.some(d => d.id.toLowerCase() === createdId)) {
      alert(`A model with ID "${formId}" already exists. Please choose a unique Code ID.`);
      return;
    }

    const createdDoor: DoorModel = {
      id: createdId,
      name: formName.trim(),
      catalogPage: parseInt(formPage, 10) || 1,
      style: formStyle,
      description: formDesc.trim() || `${formName.trim()} is an elegantly crafted security steel door manually configured to your specifications.`,
      baseWidths: formWidths.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n)),
      baseHeights: formHeights.split(',').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n)),
      thickness: parseInt(formThickness, 10) || 90,
      finishes: formFinishes.split(',').map(s => s.trim()).filter(s => s.length > 0),
      configurations: formConfigs as any,
      features: formFeatures.split(',').map(s => s.trim()).filter(s => s.length > 0),
      specs: {
        weight: formWeight.trim() || '90 - 110 kg',
        lockingPoints: parseInt(formLockPoints, 10) || 11,
        sheetThickness: formSheetThickness.trim() || '1.2mm Outer / 0.8mm Inner Steel'
      },
      visualPreset: formPreset,
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'
    };

    // Attach custom handle position support
    (createdDoor as any).compatibleHandles = formHandles;

    onAddDoor(createdDoor);

    // Reset Form
    setFormId('');
    setFormName('');
    setFormPage('1');
    setFormDesc('');
    setFormStyle('luxury');
    setShowAddModal(false);
  };

  const toggleFormConfig = (conf: string) => {
    if (formConfigs.includes(conf)) {
      if (formConfigs.length > 1) {
        setFormConfigs(formConfigs.filter(c => c !== conf));
      }
    } else {
      setFormConfigs([...formConfigs, conf]);
    }
  };

  const toggleFormHandle = (handlePos: string) => {
    if (formHandles.includes(handlePos)) {
      if (formHandles.length > 1) {
        setFormHandles(formHandles.filter(h => h !== handlePos));
      }
    } else {
      setFormHandles([...formHandles, handlePos]);
    }
  };

  return (
    <div className="bg-[#FAF9F6] py-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Branding Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <div className="flex justify-center items-center gap-2 text-sky-800 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Compass className="w-3.5 h-3.5 animate-spin-slow text-sky-600" />
            <span>Interactive Catalog Finder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-stone-900">
            Explore Our Premium Door Catalog
          </h2>
          <p className="text-sm text-stone-600 font-sans font-light leading-relaxed max-w-2xl mx-auto">
            Find the perfect security entrance for your home. Browse available designs, change finishes on the fly, and review locking specs in high-fidelity color.
          </p>
        </div>

        {/* Catalog Control/Command Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-5 border border-stone-200/80 max-w-4xl mx-auto shadow-sm">
          <div className="text-left">
            <span className="text-[9px] font-mono uppercase tracking-widest text-stone-400 font-bold block">Catalog Status</span>
            <p className="text-xs text-stone-700 font-sans font-medium">
              Currently managing <span className="text-sky-800 font-bold font-mono">{doors.length}</span> door models manually.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4.5 py-2.5 bg-gradient-to-r from-sky-600 to-blue-650 hover:from-sky-700 hover:to-blue-700 text-stone-50 text-[10px] font-display font-bold uppercase tracking-widest shadow-sm transition flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add Custom Door
            </button>
            <button
              onClick={() => {
                if (confirm("This will overwrite your current list and reload all SHEES original default door models. Proceed?")) {
                  onResetDefaultDoors();
                }
              }}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[10px] font-display font-bold uppercase tracking-wider border border-stone-200 transition flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset to Defaults
            </button>
          </div>
        </div>

        {/* Full Width Search & Filter Station */}
        {doors.length > 0 && (
          <div className="bg-white border-2 border-sky-200/60 p-6 sm:p-8 shadow-md mb-12 max-w-4xl mx-auto text-left relative overflow-hidden animate-fade-in">
            {/* Subtle design element */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />
            
            <div className="grid md:grid-cols-12 gap-6 items-end">
              {/* Search Input Section */}
              <div className="md:col-span-12 space-y-2">
                <label htmlFor="home-search-input" className="text-[10px] font-mono uppercase tracking-widest text-sky-950 font-bold">
                  Search by Model Code / Keywords
                </label>
                <div className="flex gap-1.5">
                  <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-600" />
                    <input
                      id="home-search-input"
                      type="text"
                      placeholder="Type code, style, or name (e.g. PTR 700, Teak)..."
                      value={searchInput}
                      onChange={(e) => {
                        setSearchInput(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSearchClick();
                        }
                      }}
                      className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-sky-200/80 focus:border-sky-500 text-xs text-stone-900 placeholder-stone-400 focus:outline-none rounded-none transition"
                    />
                  </div>
                  <button
                    id="home-search-submit-btn"
                    onClick={handleSearchClick}
                    className="px-6 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-xs font-display font-bold uppercase tracking-widest border border-sky-400 shadow-md transition-all duration-200 cursor-pointer"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Handle Positions Grid */}
            <div className="space-y-2.5 mt-6 pt-6 border-t border-stone-100 transition-all">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-950 font-bold block">
                Filter by Door Handle Placement
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {handlePositions.map((pos) => {
                  const isSelected = selectedHandle === pos.id;
                  let activeClass = '';
                  if (isSelected) {
                    activeClass = 'bg-gradient-to-r from-sky-600 to-blue-650 text-stone-50 border-sky-600 font-bold shadow-md';
                  } else {
                    activeClass = 'bg-stone-50 text-stone-500 border-stone-200/60 hover:text-stone-950 hover:bg-stone-100 hover:border-stone-300';
                  }

                  return (
                    <button
                      key={pos.id}
                      onClick={() => handleHandleSelect(pos.id)}
                      className={`px-3 py-2.5 text-left border transition-all duration-200 cursor-pointer ${activeClass}`}
                    >
                      <div className="text-[10px] uppercase tracking-wider font-display font-bold">
                        {pos.label}
                      </div>
                      <div className="text-[8px] font-mono opacity-80 mt-0.5 uppercase tracking-wide">
                        {pos.description}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Compact Results Section: Available Options List */}
        {doors.length > 0 ? (
          <div className="mt-8 max-w-4xl mx-auto transition-all">
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center border-b-2 border-sky-500/20 pb-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-sky-950 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                  Showing {filteredDoors.length} Available Option{filteredDoors.length !== 1 ? 's' : ''}
                </span>
                {(searchInput || searchQuery || selectedHandle !== 'all') && (
                  <button
                    onClick={handleClearSearch}
                    className="px-2 py-1 bg-stone-100 hover:bg-stone-200 border border-stone-300 text-[9px] font-mono font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900 transition"
                  >
                    Clear Filter
                  </button>
                )}
              </div>
              <span className="text-[10px] font-mono text-stone-400 font-semibold uppercase tracking-wider">
                Click any option below to view details & customize
              </span>
            </div>

            {filteredDoors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDoors.map((door) => {
                  const currentFinish = getSelectedFinish(door.id, door.finishes);

                  return (
                    <div
                      key={door.id}
                      onClick={() => onSelectDoor(door.id, currentFinish)}
                      className="bg-white border border-stone-200 hover:border-sky-500 p-4 shadow-sm hover:shadow-md flex items-center justify-between transition-all duration-200 cursor-pointer group text-left relative overflow-hidden"
                    >
                      {/* Tiny Left Accent Line on Hover */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-sky-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200" />

                      <div className="flex items-center gap-4">
                        {/* Minimalist Security Badge */}
                        <div className="w-12 h-16 bg-stone-100 border border-stone-200 shrink-0 relative flex flex-col items-center justify-center text-stone-400 group-hover:text-sky-850 group-hover:bg-sky-50 group-hover:border-sky-200 transition duration-200">
                          <Shield className="w-4 h-4" />
                          <span className="text-[7px] font-mono uppercase tracking-wider mt-1 text-stone-500">SECURE</span>
                        </div>

                        {/* Main text metadata */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-sky-800 bg-sky-500/10 px-1.5 py-0.5 border border-sky-500/20">
                              {door.id.toUpperCase()}
                            </span>
                            <span className="text-[8px] font-mono text-stone-400 uppercase">
                              Page {door.catalogPage}
                            </span>
                          </div>
                          <h3 className="text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-stone-900 group-hover:text-sky-950 transition">
                            {door.name}
                          </h3>
                          <div className="flex items-center gap-3 text-[9px] font-mono text-stone-500">
                            <span>{door.thickness}mm Thick</span>
                            <span>•</span>
                            <span>{door.specs.lockingPoints} Locking Points</span>
                          </div>
                          
                          <div className="flex items-center gap-1.5 text-[8px] font-mono bg-stone-100 text-stone-600 px-2 py-0.5 border border-stone-200 w-fit">
                            <span className="uppercase text-stone-400">Handles:</span>
                            <span className="font-bold text-stone-700 uppercase">
                              {((door as any).compatibleHandles || []).join(', ') || 'Left, Right'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Action buttons & Arrow */}
                      <div className="flex items-center gap-2 pl-2 shrink-0">
                        {/* Manual Delete Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if (confirm(`Are you sure you want to delete the model "${door.name}"?`)) {
                              onDeleteDoor(door.id);
                            }
                          }}
                          className="p-1.5 bg-stone-50 hover:bg-red-50 text-stone-400 hover:text-red-600 border border-stone-200 hover:border-red-200 transition"
                          title="Delete model"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <div className="w-7 h-7 rounded-none border border-stone-200 group-hover:border-sky-500 flex items-center justify-center text-stone-400 group-hover:text-sky-600 bg-stone-50 group-hover:bg-sky-50/50 transition duration-200">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white border-2 border-dashed border-stone-200 py-16 text-center space-y-2">
                <HelpCircle className="w-8 h-8 text-stone-300 mx-auto" />
                <p className="text-stone-500 text-xs font-mono uppercase tracking-widest font-bold">
                  No matching door codes or styles found.
                </p>
                <button 
                  onClick={handleClearSearch}
                  className="text-[10px] font-mono text-sky-800 hover:underline cursor-pointer"
                >
                  Reset Search Filters
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white border border-stone-200 p-12 text-center space-y-6 max-w-xl mx-auto shadow-sm animate-fade-in my-8">
            <div className="w-16 h-16 bg-stone-50 flex items-center justify-center mx-auto text-stone-400 border border-stone-200/80">
              <Compass className="w-8 h-8 text-stone-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-display font-bold uppercase tracking-wider text-stone-900">Your Catalog is Empty</h3>
              <p className="text-xs text-stone-500 font-mono uppercase tracking-wide leading-relaxed">
                Start adding your custom steel door models manually, or load our beautiful pre-designed presets.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <button
                onClick={() => setShowAddModal(true)}
                className="px-5 py-3 bg-gradient-to-r from-sky-600 to-blue-650 hover:from-sky-700 hover:to-blue-700 text-white text-[10px] font-display font-bold uppercase tracking-widest shadow-md transition cursor-pointer"
              >
                Create Your First Door
              </button>
              <button
                onClick={onResetDefaultDoors}
                className="px-5 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 text-[10px] font-display font-bold uppercase tracking-widest border border-stone-200 transition cursor-pointer"
              >
                Load Default Catalog
              </button>
            </div>
          </div>
        )}

        {/* Modal Overlay Form to Add New Door */}
        {showAddModal && (
          <div className="fixed inset-0 bg-stone-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#FAF9F6] border-2 border-stone-900 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-left p-6 sm:p-8">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-sky-800 font-bold block">Secure Entry Customizer</span>
                  <h3 className="text-xl font-display font-bold uppercase tracking-wider text-stone-900">Add Custom Door Model</h3>
                </div>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="p-1 text-stone-400 hover:text-stone-900 transition hover:bg-stone-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="space-y-5 text-stone-800">
                
                {/* 1. Basic Info Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1.5">
                      Model ID Code *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ptr-101"
                      required
                      value={formId}
                      onChange={(e) => setFormId(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 text-xs focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1.5">
                      Model Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. PTR 101 - Royal Crown"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 text-xs focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                {/* 2. Visual Preset and Style Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1.5">
                      Style Family
                    </label>
                    <select
                      value={formStyle}
                      onChange={(e) => setFormStyle(e.target.value as any)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 text-xs focus:border-sky-500 focus:outline-none"
                    >
                      <option value="luxury">Premium Luxury</option>
                      <option value="modern">Modern Geometric</option>
                      <option value="wood-grain">Natural Wood-Grain</option>
                      <option value="traditional">Devotional Traditional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1.5">
                      Graphic Preset (Vibe)
                    </label>
                    <select
                      value={formPreset}
                      onChange={(e) => setFormPreset(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 text-xs focus:border-sky-500 focus:outline-none font-mono"
                    >
                      <option value="ptr-700">PTR 700 - Antique Sunburst Design</option>
                      <option value="ptr-66">PTR 66 - Lotus Mandala Design</option>
                      <option value="ptr-88">PTR 88 - Art Deco Chevron Design</option>
                      <option value="ptr-131">PTR 131 - Modernist Angles Design</option>
                      <option value="ptr-125">PTR 125 - Herringbone Chevron Design</option>
                      <option value="ptr-311">PTR 311 - Lord Ganesha Sacred Design</option>
                      <option value="ptr-100">PTR 100 - Interlocking Brickwork Design</option>
                      <option value="ptr-220">PTR 220 - Woven Leather Teak Design</option>
                      <option value="ptr-55">PTR 55 - Modern Fluted Teak Design</option>
                      <option value="ptr-21">PTR 21 - Horizontal Grid Wood Design</option>
                    </select>
                  </div>
                </div>

                {/* 3. Description */}
                <div>
                  <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1.5">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Short marketing copy/architecture narrative..."
                    value={formDesc}
                    onChange={(e) => setFormDesc(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 text-xs focus:border-sky-500 focus:outline-none"
                  />
                </div>

                {/* 4. Technical Specifications */}
                <div className="bg-stone-100/80 p-4 border border-stone-200 space-y-4">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-sky-950 font-bold block border-b border-stone-200 pb-1">
                    Technical & Dimensional Specs
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[8px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1">
                        Catalog Page No.
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formPage}
                        onChange={(e) => setFormPage(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 text-xs focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1">
                        Thickness (mm)
                      </label>
                      <input
                        type="number"
                        min="30"
                        value={formThickness}
                        onChange={(e) => setFormThickness(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 text-xs focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1">
                        Weight Class
                      </label>
                      <input
                        type="text"
                        value={formWeight}
                        onChange={(e) => setFormWeight(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[8px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1">
                        Locking Points (qty)
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={formLockPoints}
                        onChange={(e) => setFormLockPoints(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 text-xs focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1">
                        Sheet Steel Thickness
                      </label>
                      <input
                        type="text"
                        value={formSheetThickness}
                        onChange={(e) => setFormSheetThickness(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 text-xs focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[8px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1">
                        Base Widths (comma-sep)
                      </label>
                      <input
                        type="text"
                        value={formWidths}
                        onChange={(e) => setFormWidths(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 text-xs font-mono focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[8px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1">
                        Base Heights (comma-sep)
                      </label>
                      <input
                        type="text"
                        value={formHeights}
                        onChange={(e) => setFormHeights(e.target.value)}
                        className="w-full px-2.5 py-1.5 bg-white border border-stone-300 text-xs font-mono focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* 5. Finishes and Features Lists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1.5">
                      Available Finishes (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formFinishes}
                      onChange={(e) => setFormFinishes(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 text-xs focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-1.5">
                      Key Highlights (comma separated)
                    </label>
                    <input
                      type="text"
                      value={formFeatures}
                      onChange={(e) => setFormFeatures(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-stone-300 text-xs focus:outline-none"
                    />
                  </div>
                </div>

                {/* 6. Handlers Placement & Configurations Checks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-2">
                      Compatible Handle Placements
                    </label>
                    <div className="space-y-1.5">
                      {handlePositionsOptions.map(pos => (
                        <label key={pos.id} className="flex items-center gap-2 text-xs font-mono text-stone-600 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formHandles.includes(pos.id)}
                            onChange={() => toggleFormHandle(pos.id)}
                            className="rounded-none border-stone-300 text-sky-600 focus:ring-sky-500"
                          />
                          <span>{pos.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] font-mono uppercase tracking-widest text-stone-500 font-bold mb-2">
                      Supported Layout Configurations
                    </label>
                    <div className="space-y-1.5">
                      {configOptions.map(cfg => (
                        <label key={cfg} className="flex items-center gap-2 text-xs font-mono text-stone-600 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formConfigs.includes(cfg)}
                            onChange={() => toggleFormConfig(cfg)}
                            className="rounded-none border-stone-300 text-sky-600 focus:ring-sky-500"
                          />
                          <span>{cfg}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="border-t border-stone-200 pt-5 mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-5 py-2.5 bg-stone-200 text-stone-700 text-[10px] font-display font-bold uppercase tracking-widest transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-[10px] font-display font-bold uppercase tracking-widest shadow-md transition cursor-pointer"
                  >
                    Create Model
                  </button>
                </div>

              </form>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
