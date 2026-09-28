import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface FestiveBannerProps {
  onViewCollectionClick: () => void;
  onWhatsAppInquiry: () => void;
}

export const FestiveBanner: React.FC<FestiveBannerProps> = ({
  onViewCollectionClick,
  onWhatsAppInquiry,
}) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#0B2E20]">
      {/* Background Editorial Image with Controlled Contrast Gradient Scrim */}
      <div className="absolute inset-0">
        <img
          src="/assets/images/festive_celebration_banner_1790566537603.jpg"
          alt="Festive celebration ethnic suits in burgundy, emerald and gold"
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E20]/95 via-[#0B2E20]/75 to-[#0B2E20]/60" />
      </div>

      {/* Decorative floral/botanical filigree */}
      <svg
        className="absolute top-6 left-6 w-32 h-32 text-[#C9A24A]/20 pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M50 0 C60 25 75 40 100 50 C75 60 60 75 50 100 C40 75 25 60 0 50 C25 40 40 25 50 0 Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4 bg-[#123D2A]/60 px-3 py-1 rounded-sm border border-[#C9A24A]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A24A]">
              FESTIVE & BRIDAL TROUSSEAU 2026
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FFFDF5] font-medium leading-[1.16] mb-5 text-balance">
            Your Next Celebration <br />
            <span className="italic font-normal text-[#C9A24A]">Deserves Something Beautiful.</span>
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-[#F8F1DC]/85 font-light leading-relaxed mb-8 max-w-xl">
            Explore our latest ethnic collection featuring pure silk yardages, regal
            burgundies, deep forest greens, and subtle gota patti artistry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onViewCollectionClick}
              className="w-full sm:w-auto bg-[#C9A24A] hover:bg-[#b89139] text-[#0B2E20] text-sm font-semibold px-8 py-3.5 rounded-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 group"
            >
              <span>View New Collection</span>
              <ArrowRight className="w-4 h-4 text-[#0B2E20] transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onWhatsAppInquiry}
              className="w-full sm:w-auto bg-[#123D2A]/80 hover:bg-[#123D2A] text-[#FFFDF5] text-sm font-semibold px-7 py-3.5 rounded-sm transition-colors border border-[#C9A24A]/40 flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#C9A24A] fill-current" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
