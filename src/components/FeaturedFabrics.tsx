import React, { useState } from 'react';
import { Sparkles, Info } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { FABRICS_DATA, FabricItem, STORE_DETAILS } from '../data/boutiqueData';

interface FeaturedFabricsProps {
  onInquireFabric: (fabric: FabricItem) => void;
}

export const FeaturedFabrics: React.FC<FeaturedFabricsProps> = ({ onInquireFabric }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedFabric, setSelectedFabric] = useState<FabricItem>(FABRICS_DATA[0]);

  const categories = [
    { id: 'all', label: 'All Weaves' },
    { id: 'silk', label: 'Festive Silk & Chanderi' },
    { id: 'cotton', label: 'Pure Mulmul Cotton' },
    { id: 'organza', label: 'Embroidered Organza' },
    { id: 'linen', label: 'Handloom Linen' },
  ];

  const filteredFabrics = activeTab === 'all'
    ? FABRICS_DATA
    : FABRICS_DATA.filter((f) => f.category === activeTab);

  return (
    <section id="fabrics" className="py-20 md:py-28 bg-[#FFFDF5]/90 backdrop-blur-[2px] border-t border-[#123D2A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#123D2A]">
                PURE TEXTILE TREASURY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123D2A] font-medium leading-tight mb-3">
              Fabrics That Inspire
            </h2>
            <p className="text-base text-[#1E241F]/75 font-light">
              Tactile natural fibers, artisanal weaves, and rich hues curated for custom tailoring and unstitched ensembles.
            </p>
          </div>

          {/* Filter segment tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-1.5 p-1 bg-[#F8F1DC] rounded-xl border border-[#123D2A]/10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeTab === cat.id
                    ? 'bg-[#123D2A] text-[#FFFDF5] shadow-xs'
                    : 'text-[#1E241F]/80 hover:text-[#123D2A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Fabric Spotlight + Swatches */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Detailed Fabric Visual Preview (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F1DC] rounded-2xl p-6 sm:p-8 border border-[#123D2A]/10">
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] mb-6 shadow-sm">
              <img
                src={selectedFabric.image}
                alt={selectedFabric.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-[#123D2A]/85 backdrop-blur-xs text-[#FFFDF5] px-3 py-1 rounded-sm text-xs font-serif">
                {selectedFabric.gsm}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#123D2A]/10">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#123D2A] font-semibold">
                  {selectedFabric.name}
                </h3>
                <p className="text-sm text-[#1E241F]/75 italic mt-0.5">
                  {selectedFabric.tagline}
                </p>
              </div>
              <button
                onClick={() => onInquireFabric(selectedFabric)}
                className="inline-flex items-center justify-center gap-2 bg-[#123D2A] hover:bg-[#0B2E20] text-[#FFFDF5] px-5 py-2.5 rounded-sm text-xs font-semibold shadow-xs transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#C9A24A] fill-current" />
                <span>Inquire Yardage</span>
              </button>
            </div>

            {/* Fabric Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              <div>
                <span className="text-[#1E241F]/60 block font-medium mb-1">Handfeel & Texture</span>
                <span className="text-[#123D2A] font-medium leading-relaxed">{selectedFabric.texture}</span>
              </div>
              <div>
                <span className="text-[#1E241F]/60 block font-medium mb-1">Ideal Silhouette</span>
                <span className="text-[#123D2A] font-medium leading-relaxed">{selectedFabric.bestFor}</span>
              </div>
              <div>
                <span className="text-[#1E241F]/60 block font-medium mb-1">Available Shades</span>
                <div className="flex flex-wrap gap-1 mt-0.5">
                  {selectedFabric.colors.map((color) => (
                    <span key={color} className="text-[11px] text-[#123D2A] bg-[#FFFDF5] px-2 py-0.5 rounded-sm border border-[#123D2A]/10">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Selection List (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#123D2A]">
                Select Textile to Inspect
              </span>
              <span className="text-xs text-[#1E241F]/60">
                {filteredFabrics.length} weaves available
              </span>
            </div>

            {filteredFabrics.map((fabric) => {
              const isSelected = selectedFabric.id === fabric.id;
              return (
                <div
                  key={fabric.id}
                  onClick={() => setSelectedFabric(fabric)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedFabric(fabric);
                    }
                  }}
                  className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#F8F1DC] border-[#C9A24A] shadow-sm translate-x-1'
                      : 'bg-[#FFFDF5] border-[#123D2A]/10 hover:border-[#123D2A]/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif text-lg font-medium text-[#123D2A]">
                      {fabric.name}
                    </h4>
                    <span className="text-[11px] text-[#123D2A]/70 font-mono">
                      {fabric.gsm}
                    </span>
                  </div>
                  <p className="text-xs text-[#1E241F]/70 mt-1 line-clamp-1">
                    {fabric.tagline}
                  </p>
                </div>
              );
            })}

            {/* Custom Sourcing Callout */}
            <div className="p-4 mt-2 rounded-xl bg-[#123D2A]/5 border border-dashed border-[#123D2A]/25 text-xs text-[#123D2A] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block">Looking for a specific bridal or heirloom weave?</span>
                <p className="text-[#1E241F]/70 mt-0.5">
                  We source customized yardages from Surat, Varanasi, and Jaipur for trousseau collections upon request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
