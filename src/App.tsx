/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { CollectionsSection } from './components/CollectionsSection';
import { FeaturedFabrics } from './components/FeaturedFabrics';
import { BoutiqueStory } from './components/BoutiqueStory';
import { CustomStitching } from './components/CustomStitching';
import { FestiveBanner } from './components/FestiveBanner';
import { BoutiqueGallery } from './components/BoutiqueGallery';
import { Testimonials } from './components/Testimonials';
import { StoreLocationContact } from './components/StoreLocationContact';
import { BoutiqueConsultationForm } from './components/BoutiqueConsultationForm';
import { Footer } from './components/Footer';
import { CollectionModal } from './components/CollectionModal';
import { StoreModal } from './components/StoreModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollAnimatedBackground } from './components/ScrollAnimatedBackground';
import { CollectionItem, FabricItem, COLLECTIONS_DATA, STORE_DETAILS } from './data/boutiqueData';

export default function App() {
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);
  const [storeModalOpen, setStoreModalOpen] = useState(false);
  const [consultationService, setConsultationService] = useState('Unstitched Suit');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setConsultationService(serviceName);
    }
    scrollToSection('contact-form');
  };

  const handleInquireFabric = (fabric: FabricItem) => {
    const message = `Hello Madhav Boutique, I would like to inquire about the ${fabric.name} (${fabric.tagline}). Available in shades: ${fabric.colors.join(', ')}.`;
    window.open(`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFestiveInquiry = () => {
    const message = `Hello Madhav Boutique, I am interested in viewing your latest Festive Collection and unstitched suits.`;
    window.open(`https://wa.me/${STORE_DETAILS.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="relative min-h-screen bg-[#F8F1DC] text-[#1E241F] flex flex-col font-sans selection:bg-[#C9A24A]/25 selection:text-[#123D2A]">
      {/* Dynamic 60fps Scroll-Based Background Animation */}
      <ScrollAnimatedBackground />

      {/* Sticky Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenStoreModal={() => setStoreModalOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('collections')}
          onVisitClick={() => setStoreModalOpen(true)}
        />

        {/* 2. Trust / Brand 4-Pillar Strip */}
        <TrustStrip />

        {/* 3. Collections Section (4-Card Grid) */}
        <CollectionsSection
          onSelectCollection={(item) => setSelectedCollection(item)}
        />

        {/* 4. Featured Fabrics Section */}
        <FeaturedFabrics
          onInquireFabric={handleInquireFabric}
        />

        {/* 5. Boutique Story Section */}
        <BoutiqueStory
          onDiscoverClick={() => handleOpenConsultation('Custom Stitching')}
        />

        {/* 6. Custom Stitching 3-Step Section */}
        <CustomStitching
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 7. Festive Collection Editorial Banner */}
        <FestiveBanner
          onViewCollectionClick={() => {
            const festiveItem = COLLECTIONS_DATA.find((c) => c.id === 'festive-collection');
            if (festiveItem) setSelectedCollection(festiveItem);
          }}
          onWhatsAppInquiry={handleFestiveInquiry}
        />

        {/* 8. Instagram-Inspired Boutique Gallery */}
        <BoutiqueGallery />

        {/* 9. Customer Testimonials */}
        <Testimonials />

        {/* 10. Store Location & Interactive Card */}
        <StoreLocationContact
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* 11. Consultation & Inquiry Form */}
        <div id="contact-form">
          <BoutiqueConsultationForm initialService={consultationService} />
        </div>
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CollectionModal
        item={selectedCollection}
        onClose={() => setSelectedCollection(null)}
        onBookStitching={() => handleOpenConsultation('Custom Stitching')}
      />

      <StoreModal
        isOpen={storeModalOpen}
        onClose={() => setStoreModalOpen(false)}
        onScheduleFitting={() => handleOpenConsultation('Custom Stitching')}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
