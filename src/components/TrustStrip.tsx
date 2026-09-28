import React from 'react';
import { Layers, Sparkles, Scissors, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'UNSTITCHED SUITS',
      description: 'Beautiful ethnic collections',
    },
    {
      icon: Sparkles,
      title: 'PREMIUM FABRICS',
      description: 'Quality materials & elegant designs',
    },
    {
      icon: Scissors,
      title: 'PERFECT STITCHING',
      description: 'Custom fitting & finishing',
    },
    {
      icon: HeartHandshake,
      title: 'PERSONAL STYLE',
      description: 'Made around your preferences',
    },
  ];

  return (
    <section className="bg-[#FFFDF5] border-y border-[#123D2A]/10 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#123D2A]/10">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center px-4 ${
                  index !== 0 ? 'pt-4 md:pt-0' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#123D2A]/5 text-[#123D2A] flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-[#C9A24A]" strokeWidth={1.75} />
                </div>
                <h2 className="text-xs font-bold tracking-[0.16em] uppercase text-[#123D2A] mb-1">
                  {item.title}
                </h2>
                <p className="text-xs text-[#1E241F]/70 font-light leading-snug">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
