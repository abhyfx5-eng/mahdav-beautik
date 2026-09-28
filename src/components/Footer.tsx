import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Heart } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { STORE_DETAILS } from '../data/boutiqueData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B2E20] text-[#FFFDF5] pt-16 pb-12 border-t border-[#C9A24A]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#FFFDF5]/10">
          {/* Brand & Wordmark (2 cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#123D2A] text-[#C9A24A] flex items-center justify-center border border-[#C9A24A]/40">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M12 2C12 2 9 6.5 9 10C9 12 10.5 13.5 12 14C13.5 13.5 15 12 15 10C15 6.5 12 2 12 2ZM12 15.5C9.5 15.5 6 17 4 20C7 20 9.5 19 12 17.5C14.5 19 17 20 20 20C18 17 14.5 15.5 12 15.5Z" />
                </svg>
              </div>
              <span className="font-serif text-2xl font-semibold text-[#FFFDF5] tracking-wide">
                Madhav
              </span>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A24A] font-semibold mb-3">
              Traditional Elegance. Modern Expression.
            </p>

            <p className="text-xs text-[#F8F1DC]/70 font-light leading-relaxed max-w-sm mb-5">
              Prem Nagar’s premier destination for exquisite unstitched ethnic suits, handpicked textiles, and master tailored silhouettes crafted with genuine warmth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={STORE_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#123D2A] text-[#FFFDF5] hover:text-[#C9A24A] flex items-center justify-center transition-colors border border-[#FFFDF5]/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${STORE_DETAILS.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#123D2A] text-[#FFFDF5] hover:text-[#C9A24A] flex items-center justify-center transition-colors border border-[#FFFDF5]/10"
                aria-label="WhatsApp (+91 8074462177)"
                title="WhatsApp +91 8074462177"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#123D2A] text-[#FFFDF5] hover:text-[#C9A24A] flex items-center justify-center transition-colors border border-[#FFFDF5]/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (1 col) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C9A24A] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F1DC]/80 font-light">
              <li>
                <a href="#hero" className="hover:text-[#C9A24A] transition-colors">Home</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#C9A24A] transition-colors">Collections</a>
              </li>
              <li>
                <a href="#fabrics" className="hover:text-[#C9A24A] transition-colors">Fabrics</a>
              </li>
              <li>
                <a href="#stitching" className="hover:text-[#C9A24A] transition-colors">Stitching</a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#C9A24A] transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C9A24A] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Offerings (1 col) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C9A24A] mb-4">
              Offerings
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F8F1DC]/80 font-light">
              <li>Chanderi Silk Suits</li>
              <li>Mulmul Cotton Weaves</li>
              <li>Embroidered Organza</li>
              <li>Bespoke Tailoring</li>
              <li>Festive Sharara Sets</li>
              <li>Pakistani Kurta Fitting</li>
            </ul>
          </div>

          {/* Location & Timings (1 col) */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#C9A24A] mb-4">
              Boutique Studio
            </h4>
            <p className="text-xs text-[#F8F1DC]/80 leading-relaxed font-light mb-3">
              Prem Nagar, Gali No. 5,<br />
              Roorkee, Uttarakhand 247667
            </p>
            <p className="text-xs text-[#F8F1DC]/80 font-light mb-2">
              <span className="text-[#C9A24A]">Phone:</span> {STORE_DETAILS.phone}
            </p>
            <p className="text-[11px] text-[#F8F1DC]/60 font-light">
              Tue - Sun: 10:30 AM - 8:30 PM<br />
              Monday Closed
            </p>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F1DC]/60 font-light gap-3">
          <div>
            © 2026 Madhav Boutique & Fabric. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with grace for Roorkee’s ethnic fashion connoisseurs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
