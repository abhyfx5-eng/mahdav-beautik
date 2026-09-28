import React from 'react';
import { X, Check, Sparkles, Scissors, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { CollectionItem, STORE_DETAILS } from '../data/boutiqueData';

interface CollectionModalProps {
  item: CollectionItem | null;
  onClose: () => void;
  onBookStitching: () => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  item,
  onClose,
  onBookStitching,
}) => {
  if (!item) return null;

  const handleWhatsAppInquiry = () => {
    const text = `Hello Madhav Boutique team,\n\nI am inquiring about the "${item.title}" collection (${item.subtitle}).\n\nCould you please share latest available pieces and price details with me?`;
    window.open(`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B2E20]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full bg-[#FFFDF5] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/40 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#FFFDF5]/90 text-[#123D2A] hover:bg-[#123D2A] hover:text-[#FFFDF5] flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-64 sm:h-72 w-full bg-[#123D2A]/10 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E20]/90 via-[#0B2E20]/40 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-[#FFFDF5]">
            <span className="text-xs uppercase tracking-widest text-[#C9A24A] font-semibold">
              {item.category}
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-medium leading-tight">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#F8F1DC]/80 font-light mt-0.5">
              {item.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-[#123D2A] font-semibold">
                About this curation
              </span>
              <span className="text-sm font-serif font-bold text-[#123D2A]">
                {item.priceRange}
              </span>
            </div>
            <p className="text-sm text-[#1E241F]/80 leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="bg-[#F8F1DC] p-4 rounded-xl border border-[#123D2A]/10">
            <span className="text-xs uppercase tracking-wider text-[#123D2A] font-semibold block mb-2">
              Collection Highlights
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {item.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-[#123D2A]">
                  <Check className="w-3.5 h-3.5 text-[#C9A24A] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fabrics Included */}
          <div>
            <span className="text-xs uppercase tracking-wider text-[#123D2A] font-semibold block mb-2">
              Available Textures & Fabrics
            </span>
            <div className="flex flex-wrap gap-2">
              {item.fabrics.map((fabric) => (
                <span
                  key={fabric}
                  className="px-3 py-1 rounded-sm text-xs font-medium bg-[#123D2A]/5 text-[#123D2A] border border-[#123D2A]/10"
                >
                  {fabric}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-[#123D2A]/10 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full sm:flex-1 bg-[#123D2A] hover:bg-[#0B2E20] text-[#FFFDF5] text-xs font-semibold py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 shadow-sm transition-colors border border-[#C9A24A]/40"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#C9A24A] fill-current" />
              <span>Inquire via WhatsApp</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onBookStitching();
              }}
              className="w-full sm:flex-1 bg-transparent hover:bg-[#123D2A]/5 text-[#123D2A] text-xs font-semibold py-3.5 px-4 rounded-sm border border-[#123D2A]/25 flex items-center justify-center gap-2 transition-colors"
            >
              <Scissors className="w-4 h-4 text-[#C9A24A]" />
              <span>Book Custom Stitching</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
