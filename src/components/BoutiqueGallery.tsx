import React, { useState } from 'react';
import { Instagram, ExternalLink, Heart, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, STORE_DETAILS } from '../data/boutiqueData';

export const BoutiqueGallery: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-[#FFFDF5]/90 backdrop-blur-[2px] border-t border-[#123D2A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#123D2A]">
                MOMENTS & WEAVES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123D2A] font-medium leading-tight">
              Style at Madhav
            </h2>
            <p className="text-sm sm:text-base text-[#1E241F]/70 font-light mt-1">
              Real boutique moments, new fabric arrivals, and finished client creations from our Prem Nagar studio.
            </p>
          </div>

          <a
            href={STORE_DETAILS.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#123D2A] hover:text-[#C9A24A] transition-colors py-2 px-4 rounded-sm border border-[#123D2A]/20 hover:border-[#C9A24A]"
          >
            <Instagram className="w-4 h-4 text-[#A52A3A]" />
            <span>Follow @madhav_fabric_boutique</span>
          </a>
        </div>

        {/* Instagram Masonry Grid (6-8 items) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item.image)}
              className="group relative rounded-xl overflow-hidden aspect-square bg-[#123D2A]/5 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                referrerPolicy="no-referrer"
              />

              {/* Instagram Style Hover Overlay */}
              <div className="absolute inset-0 bg-[#0B2E20]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3.5 text-[#FFFDF5]">
                <div className="flex justify-between items-center text-[10px] text-[#C9A24A] font-medium">
                  <span>{item.category}</span>
                  <Heart className="w-3.5 h-3.5 fill-[#D98A8F] text-[#D98A8F]" />
                </div>
                <div>
                  <h4 className="font-serif text-xs font-semibold leading-tight line-clamp-2">
                    {item.title}
                  </h4>
                  <span className="text-[10px] text-[#A8B58A] mt-1 block font-mono">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Lightbox preview */}
        {activePhoto && (
          <div
            className="fixed inset-0 z-50 bg-[#0B2E20]/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#FFFDF5] rounded-2xl overflow-hidden shadow-2xl border border-[#C9A24A]/40"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activePhoto}
                alt="Enlarged boutique photo"
                className="w-full h-auto max-h-[75vh] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-[#FFFDF5] flex items-center justify-between border-t border-[#123D2A]/10">
                <span className="font-serif text-sm text-[#123D2A] font-medium">
                  Madhav Boutique & Fabric · Roorkee
                </span>
                <button
                  onClick={() => setActivePhoto(null)}
                  className="text-xs font-semibold px-4 py-1.5 bg-[#123D2A] text-[#FFFDF5] rounded-sm hover:bg-[#0B2E20]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
