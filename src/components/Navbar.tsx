import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { STORE_DETAILS } from '../data/boutiqueData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenStoreModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenStoreModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Collections', href: '#collections' },
    { label: 'Fabrics', href: '#fabrics' },
    { label: 'Stitching', href: '#stitching' },
    { label: 'About Us', href: '#story' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF5]/95 backdrop-blur-md shadow-sm border-b border-[#123D2A]/10 py-3'
          : 'bg-[#F8F1DC]/90 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-[#123D2A] text-[#C9A24A] flex items-center justify-center shadow-xs transition-transform group-hover:scale-105">
              {/* Subtle lotus motif */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 2C12 2 9 6.5 9 10C9 12 10.5 13.5 12 14C13.5 13.5 15 12 15 10C15 6.5 12 2 12 2ZM12 15.5C9.5 15.5 6 17 4 20C7 20 9.5 19 12 17.5C14.5 19 17 20 20 20C18 17 14.5 15.5 12 15.5ZM6.5 9C5 11 5 13 6.5 14.5C7.5 13.8 8.3 12.8 8.8 11.7C8.2 10.7 7.4 9.8 6.5 9ZM17.5 9C16.6 9.8 15.8 10.7 15.2 11.7C15.7 12.8 16.5 13.8 17.5 14.5C19 13 19 11 17.5 9Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold tracking-wide text-[#123D2A] leading-tight">
                Madhav
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#1E241F]/70 font-medium">
                Boutique & Fabric
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#1E241F]/80 hover:text-[#123D2A] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#C9A24A] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={STORE_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#123D2A] hover:text-[#C9A24A] rounded-full hover:bg-[#123D2A]/5 transition-colors"
              title="Follow @madhav_fabric_boutique on Instagram"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent('Hello Madhav Boutique, I would like to inquire about your ethnic collections and stitching.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-[#123D2A] hover:text-[#0B2E20] px-3 py-2 rounded-md hover:bg-[#123D2A]/5 transition-colors"
              title="Chat with our Roorkee boutique team on WhatsApp (8074462177)"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#C9A24A] fill-current" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenStoreModal}
              className="bg-[#123D2A] text-[#FFFDF5] text-xs font-semibold px-4 py-2.5 rounded-sm hover:bg-[#0B2E20] transition-colors border border-[#C9A24A]/40 shadow-xs flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C9A24A]" />
              <span>Visit Our Store</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={STORE_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#123D2A] hover:bg-[#123D2A]/10 rounded-sm"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenStoreModal}
              className="p-2 text-[#123D2A] bg-[#123D2A]/10 rounded-sm"
              aria-label="Store Location"
            >
              <MapPin className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#123D2A] hover:bg-[#123D2A]/10 rounded-sm transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFDF5] border-b border-[#123D2A]/15 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#123D2A] hover:text-[#C9A24A] py-1 border-b border-[#123D2A]/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStoreModal();
                }}
                className="w-full bg-[#123D2A] text-[#FFFDF5] text-sm font-medium py-3 rounded-sm text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <MapPin className="w-4 h-4 text-[#C9A24A]" />
                <span>Visit Store in Roorkee</span>
              </button>
              <a
                href={`tel:${STORE_DETAILS.phone}`}
                className="w-full border border-[#123D2A]/20 text-[#123D2A] text-sm font-medium py-2.5 rounded-sm text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#123D2A]" />
                <span>Call {STORE_DETAILS.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
