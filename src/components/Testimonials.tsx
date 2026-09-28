import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/boutiqueData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#F8F1DC]/85 backdrop-blur-[2px] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-5 h-[1px] bg-[#C9A24A]" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#123D2A]">
              CLIENT APPRECIATION
            </span>
            <span className="w-5 h-[1px] bg-[#C9A24A]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#123D2A] font-medium leading-tight">
            Loved by Our Customers
          </h2>
          <p className="text-sm text-[#1E241F]/70 font-light mt-1">
            Experiences from women who trust Madhav for everyday elegance and festive celebrations.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFDF5] p-7 rounded-2xl border border-[#123D2A]/10 shadow-xs flex flex-col justify-between relative group hover:border-[#C9A24A]/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Gold quotation mark mark */}
              <div className="text-[#C9A24A] font-serif text-5xl leading-none -mb-3 opacity-70">
                “
              </div>

              {/* Quote text */}
              <p className="text-sm text-[#1E241F]/85 font-light leading-relaxed italic mb-6">
                {item.quote}
              </p>

              {/* Author & Context */}
              <div className="pt-4 border-t border-[#123D2A]/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-[#123D2A]">
                    {item.author}
                  </h4>
                  <div className="text-[11px] text-[#1E241F]/60">
                    {item.location}
                  </div>
                </div>

                <div className="flex gap-0.5 text-[#C9A24A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C9A24A]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
