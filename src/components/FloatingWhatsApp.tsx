import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { STORE_DETAILS } from '../data/boutiqueData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <div className="hidden sm:block mr-3 bg-[#FFFDF5] text-[#123D2A] text-xs font-medium py-1.5 px-3 rounded-full shadow-md border border-[#123D2A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        WhatsApp +91 8074462177
      </div>
      <a
        href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Madhav Boutique, I would like to inquire about fabrics, suits, or custom stitching.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-[#123D2A] hover:bg-[#0B2E20] text-[#C9A24A] flex items-center justify-center shadow-xl border-2 border-[#C9A24A] transition-transform duration-200 hover:scale-110"
        aria-label="Chat on WhatsApp at 8074462177"
        title="WhatsApp +91 8074462177"
      >
        <WhatsAppIcon className="w-6 h-6 fill-current" />
      </a>
    </aside>
  );
};
