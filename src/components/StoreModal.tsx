import React from 'react';
import { X, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { STORE_DETAILS } from '../data/boutiqueData';

interface StoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScheduleFitting: () => void;
}

export const StoreModal: React.FC<StoreModalProps> = ({ isOpen, onClose, onScheduleFitting }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0B2E20]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#FFFDF5] rounded-3xl overflow-hidden shadow-2xl border border-[#C9A24A]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#123D2A]/10 text-[#123D2A] hover:bg-[#123D2A] hover:text-[#FFFDF5] flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="bg-[#123D2A] p-6 text-[#FFFDF5] text-center relative overflow-hidden">
          <div className="w-10 h-10 rounded-full bg-[#FFFDF5]/10 text-[#C9A24A] flex items-center justify-center mx-auto mb-2">
            <MapPin className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl font-semibold">
            Visit Madhav Boutique & Fabric
          </h3>
          <p className="text-xs text-[#F8F1DC]/80 font-light mt-1">
            Prem Nagar, Gali No. 5, Roorkee, Uttarakhand
          </p>
        </div>

        <div className="p-6 space-y-5">
          <div className="space-y-3.5 text-xs text-[#1E241F]/85">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F1DC]">
              <Clock className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#123D2A] block">Store Timings</span>
                <span>Tuesday – Sunday: 10:30 AM – 8:30 PM</span>
                <span className="block text-[11px] text-[#1E241F]/60 mt-0.5">Monday Closed for fabric sourcing</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F1DC]">
              <Phone className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#123D2A] block">Direct Phone</span>
                <a href={`tel:${STORE_DETAILS.phone}`} className="text-[#123D2A] font-semibold hover:underline">
                  {STORE_DETAILS.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <a
              href={STORE_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#123D2A] hover:bg-[#0B2E20] text-[#FFFDF5] text-xs font-semibold py-3 rounded-sm text-center flex items-center justify-center gap-2 border border-[#C9A24A]/40 shadow-xs"
            >
              <Navigation className="w-4 h-4 text-[#C9A24A]" />
              <span>Open in Google Maps</span>
            </a>

            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello, I am planning to visit Madhav Boutique in Roorkee today.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-transparent hover:bg-[#123D2A]/5 text-[#123D2A] text-xs font-semibold py-2.5 rounded-sm text-center border border-[#123D2A]/20 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#123D2A] fill-current" />
              <span>WhatsApp Us (+91 8074462177)</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onScheduleFitting();
              }}
              className="text-xs text-[#123D2A] hover:text-[#C9A24A] font-semibold py-1.5 underline underline-offset-4 text-center mt-1"
            >
              Or schedule a custom fitting appointment &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
