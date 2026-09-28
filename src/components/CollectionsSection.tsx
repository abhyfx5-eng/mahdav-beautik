import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { COLLECTIONS_DATA, CollectionItem } from '../data/boutiqueData';

interface CollectionsSectionProps {
  onSelectCollection: (item: CollectionItem) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({ onSelectCollection }) => {
  return (
    <section id="collections" className="py-20 md:py-28 bg-[#F8F1DC]/85 backdrop-blur-[2px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1px] bg-[#C9A24A]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#123D2A]">
              CURATED IN ROORKEE
            </span>
            <span className="w-6 h-[1px] bg-[#C9A24A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123D2A] font-medium leading-tight mb-4">
            Explore Our Collections
          </h2>
          <p className="text-base text-[#1E241F]/75 font-light">
            Beautiful fabrics and ethnic styles selected for every occasion.
          </p>
        </div>

        {/* 4-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {COLLECTIONS_DATA.map((item, index) => (
            <div
              key={item.id}
              onClick={() => onSelectCollection(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCollection(item);
                }
              }}
              className="group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 bg-[#FFFDF5] border border-[#123D2A]/10 flex flex-col h-[420px] focus:outline-hidden focus:ring-2 focus:ring-[#C9A24A]"
            >
              {/* Image filling 75% of card */}
              <div className="relative w-full h-[72%] overflow-hidden bg-[#123D2A]/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark green gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E20]/90 via-[#0B2E20]/30 to-transparent pointer-events-none" />

                {/* Top Subtle Label */}
                <div className="absolute top-3 left-3 text-[11px] uppercase tracking-wider text-[#FFFDF5]/90 font-medium px-2 py-0.5 bg-[#0B2E20]/60 backdrop-blur-xs rounded-sm">
                  0{index + 1}
                </div>

                {/* Card Title in cream/white positioned over the gradient */}
                <div className="absolute bottom-3 left-4 right-4 text-[#FFFDF5]">
                  <h3 className="font-serif text-2xl font-medium tracking-wide leading-tight group-hover:text-[#FFFDF5] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FFFDF5]/80 font-light mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Footer / Details */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-[#FFFDF5] border-t border-[#123D2A]/5">
                <div className="flex items-center justify-between text-xs text-[#1E241F]/80">
                  <span className="font-medium text-[#123D2A]">{item.category}</span>
                  <span className="font-semibold text-[#123D2A] font-serif tracking-wide">{item.priceRange}</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-[#123D2A]/5 mt-2">
                  <span className="text-[11px] text-[#1E241F]/65">Tap to explore pieces & fabrics</span>
                  <div className="w-7 h-7 rounded-full bg-[#123D2A]/5 group-hover:bg-[#123D2A] text-[#123D2A] group-hover:text-[#C9A24A] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Gold Accent line appearing on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A24A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
