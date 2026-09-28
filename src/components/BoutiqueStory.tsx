import React from 'react';
import { Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { STORE_DETAILS } from '../data/boutiqueData';

interface BoutiqueStoryProps {
  onDiscoverClick: () => void;
}

export const BoutiqueStory: React.FC<BoutiqueStoryProps> = ({ onDiscoverClick }) => {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#F8F1DC]/85 backdrop-blur-[2px] relative overflow-hidden">
      {/* Decorative subtle botanical line art background */}
      <svg
        className="absolute bottom-6 left-6 w-56 h-56 text-[#A8B58A]/20 pointer-events-none -z-0"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M10 80 Q 30 50 60 70 T 90 20" />
        <path d="M25 65 Q 45 40 40 20 Q 55 45 75 40" />
        <circle cx="40" cy="20" r="3" fill="#C9A24A" opacity="0.4" />
        <circle cx="90" cy="20" r="4" fill="#123D2A" opacity="0.2" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Craftsmanship Image with Floating Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#123D2A]/10 bg-[#FFFDF5]">
              <img
                src="/assets/images/craft_custom_stitching_1790566527695.jpg"
                alt="Artisanal tailoring and hand-stitched detailing at Madhav Boutique"
                className="w-full h-full aspect-[4/3] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E20]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-[#FFFDF5]">
                <span className="text-[11px] uppercase tracking-wider text-[#C9A24A] font-semibold">
                  Atelier Roorkee
                </span>
                <p className="font-serif text-lg font-medium">
                  Precision measurement & handmade piping
                </p>
              </div>
            </div>

            {/* Overlapping Trust Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-[#FFFDF5] p-5 rounded-2xl shadow-xl border border-[#C9A24A]/30 max-w-xs hidden sm:block">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#123D2A] text-[#C9A24A] flex items-center justify-center text-xs">
                  ✦
                </div>
                <span className="font-serif text-sm font-semibold text-[#123D2A]">
                  Prem Nagar, Gali No. 5
                </span>
              </div>
              <p className="text-xs text-[#1E241F]/75 font-light leading-relaxed">
                Trusted by hundreds of women across Roorkee for celebratory fits and authentic fabrics.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#C9A24A]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#123D2A]">
                OUR HERITAGE & VISION
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#123D2A] font-medium leading-[1.18] mb-6 text-balance">
              Where Tradition Meets <br />
              <span className="italic font-normal text-[#0B2E20]">Your Personal Style</span>
            </h2>

            <p className="text-base text-[#1E241F]/80 leading-relaxed font-light mb-6">
              At Madhav Boutique & Fabric, we believe that every outfit should feel as unique
              as the person wearing it. From carefully selected fabrics to thoughtful stitching
              and finishing, we bring together traditional Indian craftsmanship and contemporary style.
            </p>

            <p className="text-sm text-[#1E241F]/75 leading-relaxed font-light mb-8">
              Founded in the vibrant heart of Roorkee, we honor the tactile beauty of pure natural
              fibers. We work with experienced master cutters and embroiders to ensure every sleeve,
              neckline, and flare drapes with effortless grace.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              {[
                'Honest pricing & genuine fabric purity',
                'Custom neckline & sleeve personalization',
                'Comfort lining & reinforced seam finishing',
                'Dedicated fitting consultation in Roorkee',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-xs text-[#123D2A]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onDiscoverClick}
              className="bg-[#123D2A] hover:bg-[#0B2E20] text-[#FFFDF5] text-sm font-semibold px-8 py-3.5 rounded-sm transition-all duration-200 border border-[#C9A24A]/40 shadow-sm flex items-center gap-2"
            >
              <span>Discover Madhav</span>
              <span className="text-[#C9A24A]">✦</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
