import React, { useState } from 'react';
import { Scissors, Check, Sparkles, Ruler } from 'lucide-react';
import { SILHOUETTES, SilhouetteItem, STORE_DETAILS } from '../data/boutiqueData';

interface CustomStitchingProps {
  onOpenConsultation: (initialNeed?: string) => void;
}

export const CustomStitching: React.FC<CustomStitchingProps> = ({ onOpenConsultation }) => {
  const [selectedSilhouette, setSelectedSilhouette] = useState<SilhouetteItem>(SILHOUETTES[0]);

  const steps = [
    {
      step: '01',
      title: 'Choose Your Fabric',
      description: 'Select handpicked unstitched cuts from our boutique collection, or bring your own cherished textile lengths.',
    },
    {
      step: '02',
      title: 'Share Your Design',
      description: 'Discuss silhouettes, neckline cuts, piping contrasts, lace insertions, and sleeve preferences with our master tailor.',
    },
    {
      step: '03',
      title: 'Get Your Perfect Fit',
      description: 'Experience precision measurements, handcrafted interlock seams, trial fitting, and on-time final delivery.',
    },
  ];

  return (
    <section id="stitching" className="py-20 md:py-28 bg-[#123D2A] text-[#FFFDF5] relative overflow-hidden">
      {/* Subtle background ambient gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0B2E20] rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A24A]/5 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-6 h-[1.5px] bg-[#C9A24A]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C9A24A]">
              ATELIER TAILORING
            </span>
            <span className="w-6 h-[1.5px] bg-[#C9A24A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FFFDF5] font-medium leading-tight mb-4">
            Stitched to Feel Like You
          </h2>
          <p className="text-base text-[#F8F1DC]/80 font-light max-w-xl mx-auto">
            Choose your fabric, share your style and let our skilled stitching bring your vision to life.
          </p>
        </div>

        {/* 3-Step Process with Elegant Numbered Circles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16 relative">
          {/* Subtle connecting line across steps on desktop */}
          <div className="hidden md:block absolute top-10 left-[18%] right-[18%] h-[1px] bg-gradient-to-r from-transparent via-[#C9A24A]/40 to-transparent -z-0" />

          {steps.map((item) => (
            <div
              key={item.step}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0B2E20]/60 border border-[#C9A24A]/20 relative z-10 backdrop-blur-xs transition-all hover:border-[#C9A24A]/50 hover:-translate-y-1"
            >
              {/* Elegant Numbered Circle */}
              <div className="w-16 h-16 rounded-full bg-[#123D2A] border-2 border-[#C9A24A] text-[#C9A24A] flex items-center justify-center font-serif text-xl font-bold mb-5 shadow-lg">
                {item.step}
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#FFFDF5] mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#F8F1DC]/75 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Silhouette Explorer Box */}
        <div className="bg-[#0B2E20] rounded-2xl border border-[#C9A24A]/30 p-6 sm:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#FFFDF5]/10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Scissors className="w-4 h-4 text-[#C9A24A]" />
                <span className="text-xs uppercase tracking-wider text-[#C9A24A] font-semibold">
                  Popular Custom Silhouettes
                </span>
              </div>
              <h4 className="font-serif text-2xl text-[#FFFDF5]">
                Tailoring Styles & Turnaround Times
              </h4>
            </div>

            <button
              onClick={() => onOpenConsultation('Custom Stitching')}
              className="bg-[#C9A24A] hover:bg-[#b89139] text-[#0B2E20] text-xs font-semibold px-5 py-2.5 rounded-sm transition-colors flex items-center justify-center gap-1.5 self-start sm:self-auto shadow-sm"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Book Measurement Session</span>
            </button>
          </div>

          {/* Silhouette Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 mb-6">
            {SILHOUETTES.map((sil) => (
              <button
                key={sil.id}
                onClick={() => setSelectedSilhouette(sil)}
                className={`p-3 rounded-lg text-left text-xs font-medium transition-all ${
                  selectedSilhouette.id === sil.id
                    ? 'bg-[#123D2A] text-[#FFFDF5] border border-[#C9A24A]'
                    : 'bg-[#123D2A]/30 text-[#F8F1DC]/70 border border-transparent hover:border-[#FFFDF5]/20'
                }`}
              >
                <div className="font-serif text-sm text-[#FFFDF5] mb-1">{sil.name}</div>
                <div className="text-[11px] text-[#C9A24A]">{sil.turnaroundDays}</div>
              </button>
            ))}
          </div>

          {/* Active Silhouette Breakdown */}
          <div className="bg-[#123D2A]/70 rounded-xl p-5 border border-[#C9A24A]/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
              <div className="md:col-span-2">
                <span className="text-[#C9A24A] font-semibold block mb-1">Pattern & Fitting Profile</span>
                <p className="text-[#F8F1DC]/90 text-sm leading-relaxed mb-3">
                  {selectedSilhouette.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#F8F1DC]/75">
                  <span className="font-medium text-[#C9A24A]">Recommended Weaves:</span>
                  <span>{selectedSilhouette.suitableFabric}</span>
                </div>
              </div>

              <div>
                <span className="text-[#C9A24A] font-semibold block mb-2">Neckline Options</span>
                <ul className="space-y-1.5">
                  {selectedSilhouette.necklineOptions.map((opt) => (
                    <li key={opt} className="flex items-center gap-2 text-xs text-[#FFFDF5]/85">
                      <Check className="w-3 h-3 text-[#C9A24A] shrink-0" />
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
