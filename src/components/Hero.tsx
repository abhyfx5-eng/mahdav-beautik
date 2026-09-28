import React, { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowRight, Sparkles, MapPin, Compass, MoveHorizontal } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onVisitClick: () => void;
}

const HERO_LADY_FRAMES = [
  '/assets/images/hero_ethnic_elegance_1790566486370.jpg',
  '/assets/images/hero_lady_profile_1790567854594.jpg',
  '/assets/images/hero_lady_side_1790567868477.jpg',
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onVisitClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [interactiveProgress, setInteractiveProgress] = useState(0); // 0 to 1
  const [isInteracting, setIsInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef(0);
  const startProgressRef = useRef(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);
          // When not actively dragging, window scrolling also scrubs through poses smoothly
          if (!isInteracting) {
            const scrollFactor = Math.min(1, Math.max(0, currentY / 650));
            setInteractiveProgress(scrollFactor);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInteracting]);

  // Touch and Mouse Drag / Scroll scrubber on the lady's image
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsInteracting(true);
    startXRef.current = e.clientX;
    startProgressRef.current = interactiveProgress;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isInteracting) return;
    const deltaX = e.clientX - startXRef.current;
    // 250px drag spans full range
    const deltaProgress = deltaX / 250;
    const nextProgress = Math.min(1, Math.max(0, startProgressRef.current + deltaProgress));
    setInteractiveProgress(nextProgress);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsInteracting(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (err) {}
  };

  // Mouse wheel scroll directly over the image to scroll through poses smoothly
  const handleWheelOnImage = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const delta = e.deltaY || e.deltaX;
    setInteractiveProgress((prev) => Math.min(1, Math.max(0, prev + delta * 0.0015)));
  }, []);

  // Smooth parallax offset specifically for the hero image and decor
  const imageParallax = Math.min(60, scrollY * 0.08);
  const decorParallax = Math.min(90, scrollY * 0.12);

  // Smooth multi-frame crossfade opacities
  const p = interactiveProgress * 2; // 0 to 2
  const opacity0 = Math.max(0, 1 - p);
  const opacity1 = p <= 1 ? p : Math.max(0, 2 - p);
  const opacity2 = Math.max(0, p - 1);

  // 3D subtle tilt rotation based on scroll/drag progress
  const rotateYAngle = (interactiveProgress - 0.5) * 12; // -6deg to +6deg

  return (
    <section id="hero" className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Delicate background ambient shapes with scroll-offset */}
      <div 
        className="absolute top-12 left-1/4 w-96 h-96 bg-[#A8B58A]/15 rounded-full blur-3xl pointer-events-none -z-0 transition-transform duration-75 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.1}px, 0)` }}
      />
      <div 
        className="absolute bottom-0 right-10 w-80 h-80 bg-[#C9A24A]/10 rounded-full blur-2xl pointer-events-none -z-0 transition-transform duration-75 will-change-transform"
        style={{ transform: `translate3d(0, ${-scrollY * 0.07}px, 0)` }}
      />

      {/* Decorative botanical filigree SVG top right */}
      <svg
        className="absolute top-8 right-8 w-44 h-44 text-[#123D2A]/10 pointer-events-none hidden md:block transition-transform duration-100 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.05}px, 0) rotate(${scrollY * 0.03}deg)` }}
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M50 10 C 60 30, 80 40, 90 50 C 70 60, 60 80, 50 90 C 40 70, 20 60, 10 50 C 30 40, 40 20, 50 10 Z" />
        <circle cx="50" cy="50" r="16" strokeDasharray="2 3" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Brand & Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-6 order-2 lg:order-1">
            {/* Eyebrow with gold line indicator */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="w-8 h-[1.5px] bg-[#C9A24A]" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#123D2A]">
                MADHAV BOUTIQUE & FABRIC
              </span>
              <span className="w-3 h-3 text-[#C9A24A] inline-flex items-center justify-center">✦</span>
            </div>

            {/* Large editorial heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#123D2A] font-medium leading-[1.15] sm:leading-[1.12] tracking-tight mb-4 sm:mb-6 text-balance">
              Traditional Elegance, <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#0B2E20] relative">
                Styled Your Way.
                {/* Subtle gold decorative underline flourish */}
                <svg
                  className="absolute -bottom-1.5 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3 text-[#C9A24A]/70"
                  viewBox="0 0 260 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9.5C60 3.5 180 3.5 258 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-sm sm:text-lg text-[#1E241F]/80 leading-relaxed max-w-xl mb-6 sm:mb-8 font-light">
              Discover beautiful ethnic fabrics, elegant unstitched suits and perfect
              stitching crafted to bring your personal style to life in Prem Nagar, Roorkee.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={onExploreClick}
                className="bg-[#123D2A] hover:bg-[#0B2E20] text-[#FFFDF5] text-sm font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 group border border-[#C9A24A]/40"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24A] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onVisitClick}
                className="bg-transparent hover:bg-[#123D2A]/5 text-[#123D2A] text-sm font-semibold px-6 sm:px-7 py-3 sm:py-3.5 rounded-sm transition-colors border border-[#123D2A]/30 flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#C9A24A]" />
                <span>Visit Our Boutique</span>
              </button>
            </div>

            {/* Quiet Boutique Trust Indicators */}
            <div className="pt-5 sm:pt-6 border-t border-[#123D2A]/15 w-full flex flex-wrap items-center gap-y-2.5 gap-x-5 text-xs text-[#1E241F]/70">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#123D2A]" />
                Prem Nagar, Gali No. 5, Roorkee
              </span>
              <span aria-hidden="true" className="text-[#C9A24A] hidden sm:inline">·</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24A]" />
                Handpicked Pure Weaves
              </span>
              <span aria-hidden="true" className="text-[#C9A24A] hidden sm:inline">·</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A52A3A]" />
                Custom In-House Tailoring
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Scroll/Touch/Mouse-Driven Hero Fashion Imagery */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end [perspective:1000px] order-1 lg:order-2 w-full max-w-sm sm:max-w-md mx-auto lg:max-w-none">
            {/* Organic Sage Green Shape Behind Image with parallax */}
            <div 
              className="absolute inset-0 bg-[#A8B58A]/35 rounded-[2rem] sm:rounded-[2.5rem] transform rotate-2 scale-95 translate-y-3 -z-0 transition-transform duration-100 will-change-transform" 
              style={{ transform: `translate3d(0, ${decorParallax}px, 0) rotate(2deg) scale(0.95)` }}
            />
            
            {/* Additional Muted Gold hairline frame */}
            <div 
              className="absolute -inset-2 border border-[#C9A24A]/30 rounded-[1.8rem] sm:rounded-[2rem] transform -rotate-1 pointer-events-none transition-transform duration-100 will-change-transform"
              style={{ transform: `translate3d(0, ${decorParallax * 0.7}px, 0) rotate(-1deg)` }}
            />

            {/* Main Editorial Image Container with Touch/Mouse Interaction */}
            <div 
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onWheel={handleWheelOnImage}
              className={`relative z-10 w-full aspect-[3/4] rounded-[1.5rem] sm:rounded-[1.8rem] overflow-hidden shadow-xl sm:shadow-2xl bg-[#FFFDF5] border border-[#123D2A]/10 transition-transform duration-150 select-none will-change-transform cursor-ew-resize active:cursor-grabbing ${isInteracting ? 'scale-[1.015]' : ''}`}
              style={{ 
                transform: `translate3d(0, ${imageParallax}px, 0) rotateY(${rotateYAngle}deg)`,
                touchAction: 'pan-y'
              }}
              title="Swipe, drag with mouse, or scroll over to smoothly view different angles of the outfit"
            >
              {/* Frame 0: Frontal View */}
              <img
                src={HERO_LADY_FRAMES[0]}
                alt="Madhav Boutique woman in elegant forest green and gold Indian ethnic suit - Frontal View"
                className="absolute inset-0 w-full h-full object-cover object-top sm:object-center pointer-events-none will-change-transform transition-opacity duration-150 block"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="sync"
                style={{
                  opacity: opacity0,
                  transform: `scale(${1 + Math.min(0.06, scrollY * 0.00015)})`
                }}
              />

              {/* Frame 1: Three-Quarter Turned Graceful Pose */}
              <img
                src={HERO_LADY_FRAMES[1]}
                alt="Madhav Boutique woman in elegant forest green and gold Indian ethnic suit - Three-Quarter Profile"
                className="absolute inset-0 w-full h-full object-cover object-top sm:object-center pointer-events-none will-change-transform transition-opacity duration-150 block"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="sync"
                style={{
                  opacity: opacity1,
                  transform: `scale(${1 + Math.min(0.06, scrollY * 0.00015)})`
                }}
              />

              {/* Frame 2: Side Duppatta Drape Pose */}
              <img
                src={HERO_LADY_FRAMES[2]}
                alt="Madhav Boutique woman in elegant forest green and gold Indian ethnic suit - Dupatta Drape"
                className="absolute inset-0 w-full h-full object-cover object-top sm:object-center pointer-events-none will-change-transform transition-opacity duration-150 block"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="sync"
                style={{
                  opacity: opacity2,
                  transform: `scale(${1 + Math.min(0.06, scrollY * 0.00015)})`
                }}
              />

              {/* Interactive Scrubbing Micro-Hint Badge */}
              <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-20 flex items-center gap-1.5 bg-[#123D2A]/85 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#C9A24A]/40 text-[#FFFDF5] text-[10px] shadow-sm pointer-events-none">
                <MoveHorizontal className="w-3 h-3 text-[#C9A24A] animate-pulse" />
                <span className="font-medium tracking-wide">Scroll / Drag Lady</span>
              </div>

              {/* Multi-Pose Indicator Dots */}
              <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 flex items-center gap-1 sm:gap-1.5 bg-[#FFFDF5]/85 backdrop-blur-md px-2 py-0.5 sm:py-1 rounded-full border border-[#123D2A]/10 pointer-events-none">
                <span 
                  className={`h-1.5 rounded-full transition-all duration-200 ${opacity0 > 0.4 ? 'bg-[#123D2A] w-3.5' : 'bg-[#123D2A]/30 w-1.5'}`} 
                />
                <span 
                  className={`h-1.5 rounded-full transition-all duration-200 ${opacity1 > 0.4 ? 'bg-[#123D2A] w-3.5' : 'bg-[#123D2A]/30 w-1.5'}`} 
                />
                <span 
                  className={`h-1.5 rounded-full transition-all duration-200 ${opacity2 > 0.4 ? 'bg-[#123D2A] w-3.5' : 'bg-[#123D2A]/30 w-1.5'}`} 
                />
              </div>

              {/* Discreet editorial overlay tag in ivory */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#FFFDF5]/90 backdrop-blur-md p-2.5 sm:p-3.5 rounded-xl border border-[#123D2A]/10 shadow-sm flex items-center justify-between pointer-events-none">
                <div>
                  <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#123D2A]/80 font-medium">
                    New Season Curation
                  </div>
                  <div className="font-serif text-xs sm:text-sm font-semibold text-[#123D2A]">
                    Pure Chanderi & Embroidered Suits
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] sm:text-xs font-serif text-[#C9A24A] font-semibold italic">
                    Roorkee Atelier
                  </span>
                </div>
              </div>
            </div>

            {/* Floating botanical badge */}
            <div 
              className="absolute -top-4 -left-4 z-20 bg-[#123D2A] text-[#FFFDF5] p-3 rounded-full shadow-lg border border-[#C9A24A]/40 hidden sm:flex items-center justify-center animate-subtle-float will-change-transform transition-transform duration-100"
              style={{ transform: `translate3d(0, ${-scrollY * 0.06}px, 0)` }}
            >
              <Sparkles className="w-5 h-5 text-[#C9A24A]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
