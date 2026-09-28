import React from 'react';
import { MapPin, Phone, Clock, Navigation, Compass, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { STORE_DETAILS } from '../data/boutiqueData';

interface StoreLocationContactProps {
  onOpenConsultation: () => void;
}

export const StoreLocationContact: React.FC<StoreLocationContactProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFDF5]/90 backdrop-blur-[2px] border-t border-[#123D2A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#123D2A]">
              STORE ATELIER & LOCATION
            </span>
            <span className="w-5 h-[1.5px] bg-[#C9A24A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123D2A] font-medium leading-tight mb-3">
            Visit Madhav Boutique & Fabric
          </h2>
          <p className="text-base text-[#1E241F]/75 font-light">
            We welcome you to experience the tactile feel of our fabrics and consult directly with our master tailors.
          </p>
        </div>

        {/* 2-Column Store Info & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Store Details & Fast Actions (5 Cols) */}
          <div className="lg:col-span-5 bg-[#F8F1DC] p-7 sm:p-9 rounded-2xl border border-[#123D2A]/10 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#123D2A] mb-4">
                <MapPin className="w-4 h-4 text-[#C9A24A]" />
                <span>Boutique Address</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#123D2A] mb-1">
                Prem Nagar, Gali No. 5
              </h3>
              <p className="text-sm text-[#1E241F]/80 font-light mb-6">
                Roorkee, Uttarakhand 247667, India
              </p>

              {/* Contact rows */}
              <div className="space-y-4 pt-4 border-t border-[#123D2A]/10 text-xs">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#123D2A] block">Opening Hours</span>
                    <span className="text-[#1E241F]/70">Tuesday – Sunday: 10:30 AM – 8:30 PM</span>
                    <span className="text-[#1E241F]/50 block text-[11px] mt-0.5">Monday Closed for sourcing fresh textiles</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#123D2A] block">Phone Assistance</span>
                    <a
                      href={`tel:${STORE_DETAILS.phone}`}
                      className="text-[#123D2A] hover:text-[#C9A24A] font-medium"
                    >
                      {STORE_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <WhatsAppIcon className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5 fill-current" />
                  <div>
                    <span className="font-semibold text-[#123D2A] block">WhatsApp Concierge</span>
                    <a
                      href={`https://wa.me/${STORE_DETAILS.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#123D2A] hover:underline font-medium"
                    >
                      +91 8074462177
                    </a>
                    <span className="text-[#1E241F]/70 block text-[11px] mt-0.5">Instant photos of new fabric stock & suit sets</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-8 mt-6 border-t border-[#123D2A]/10 flex flex-col sm:flex-row gap-3">
              <a
                href={STORE_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#123D2A] hover:bg-[#0B2E20] text-[#FFFDF5] text-xs font-semibold py-3 px-4 rounded-sm text-center shadow-xs flex items-center justify-center gap-2 border border-[#C9A24A]/30"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C9A24A]" />
                <span>Get Directions</span>
              </a>

              <a
                href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Madhav Boutique team, I am planning to visit the boutique in Prem Nagar.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#FFFDF5] hover:bg-[#123D2A]/5 text-[#123D2A] text-xs font-semibold py-3 px-4 rounded-sm text-center border border-[#123D2A]/20 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#123D2A] fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Roorkee Map Visual Card (7 Cols) */}
          <div className="lg:col-span-7 bg-[#F8F1DC] rounded-2xl border border-[#123D2A]/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs">
            {/* Map styling header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#123D2A]/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#123D2A] animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#123D2A]">
                  Roorkee Boutique Hub
                </span>
              </div>
              <span className="text-xs text-[#1E241F]/60">5 mins from Civil Lines</span>
            </div>

            {/* Stylized Map View with Landmark nodes */}
            <div className="my-6 relative bg-[#FFFDF5] rounded-xl border border-[#123D2A]/10 p-6 sm:p-8 overflow-hidden min-h-[260px] flex items-center justify-center">
              {/* Grid Roads Texture */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#123D2A" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Road lines */}
              <div className="absolute top-1/2 left-0 right-0 h-4 bg-[#A8B58A]/30 transform -rotate-6" />
              <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-[#C9A24A]/25 transform rotate-12" />

              {/* Surrounding Landmark Markers */}
              <div className="absolute top-6 left-6 bg-[#F8F1DC] border border-[#123D2A]/15 px-2.5 py-1 rounded-sm text-[10px] text-[#123D2A] font-medium shadow-xs">
                Civil Lines Roorkee (1.8 km)
              </div>
              <div className="absolute bottom-6 left-8 bg-[#F8F1DC] border border-[#123D2A]/15 px-2.5 py-1 rounded-sm text-[10px] text-[#123D2A] font-medium shadow-xs">
                IIT Roorkee Main Gate (2.4 km)
              </div>
              <div className="absolute top-8 right-6 bg-[#F8F1DC] border border-[#123D2A]/15 px-2.5 py-1 rounded-sm text-[10px] text-[#123D2A] font-medium shadow-xs">
                Roorkee Railway Station (3.1 km)
              </div>

              {/* Madhav Boutique Pin Anchor in Center */}
              <div className="relative z-10 flex flex-col items-center text-center animate-subtle-float">
                <div className="w-12 h-12 rounded-full bg-[#123D2A] border-2 border-[#C9A24A] text-[#FFFDF5] flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-[#C9A24A]" />
                </div>
                <div className="mt-2 bg-[#123D2A] text-[#FFFDF5] px-3.5 py-1 rounded-md text-xs font-serif shadow-md border border-[#C9A24A]/40">
                  Madhav Boutique & Fabric
                  <span className="block text-[10px] text-[#C9A24A] font-sans font-normal">
                    Gali No. 5, Prem Nagar
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom prompt */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <span className="text-xs text-[#1E241F]/70 text-center sm:text-left">
                Ample parking space available in Prem Nagar main lane.
              </span>
              <button
                onClick={onOpenConsultation}
                className="text-xs font-semibold text-[#123D2A] hover:text-[#C9A24A] transition-colors underline underline-offset-4"
              >
                Schedule an appointment before visiting &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
