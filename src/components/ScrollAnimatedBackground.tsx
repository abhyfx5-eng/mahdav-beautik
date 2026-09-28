import React, { useEffect, useState } from 'react';

/**
 * ScrollAnimatedBackground provides a fluid, high-performance scroll-driven background
 * that coordinates atmospheric ambient orbs, silk/weaving grain motifs, and floating
 * gold filigree particles across all sections as the user scrolls.
 * Uses requestAnimationFrame and window.scrollY for 60fps responsiveness.
 */
export const ScrollAnimatedBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const maxScroll = Math.max(
            1,
            document.documentElement.scrollHeight - window.innerHeight
          );
          setScrollY(currentY);
          setScrollProgress(Math.min(1, Math.max(0, currentY / maxScroll)));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax offsets calculated smoothly from scrollY
  const orb1Y = scrollY * 0.18;
  const orb2Y = -scrollY * 0.12;
  const orb3Y = scrollY * 0.25;
  const orb4Y = -scrollY * 0.15;
  const rotationAngle = (scrollY * 0.04) % 360;
  const silkWaveX = Math.sin(scrollY * 0.003) * 40;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* 1. Base Subtle Ambient Texture with dynamic opacity */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: 0.035 + scrollProgress * 0.02,
          backgroundImage: `radial-gradient(#123D2A 1px, transparent 1px), radial-gradient(#C9A24A 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          backgroundPosition: `0 0, 24px 24px`,
          transform: `translate3d(0, ${-scrollY * 0.05}px, 0)`
        }}
      />

      {/* 2. Floating Silk Ribbon / Wave Layer (Interactive Scroll Warp) */}
      <svg
        className="absolute w-[180%] h-full -left-[40%] top-0 opacity-[0.04] text-[#123D2A] transition-transform duration-75"
        style={{
          transform: `translate3d(${silkWaveX}px, ${-scrollY * 0.08}px, 0) scale(${1 + scrollProgress * 0.1})`
        }}
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-100,200 C300,50 600,450 1000,180 C1300,-40 1600,300 1800,220 L1800,900 L-100,900 Z"
          fill="currentColor"
        />
        <path
          d="M-50,400 C400,200 700,600 1200,350 C1500,180 1700,500 1900,420"
          stroke="#C9A24A"
          strokeWidth="3"
          strokeDasharray="8 8"
          fill="none"
        />
      </svg>

      {/* 3. Deep Forest Green Atmospheric Parallax Sphere */}
      <div
        className="absolute -top-32 -left-32 w-[34rem] h-[34rem] rounded-full bg-[#123D2A]/10 blur-[110px] will-change-transform"
        style={{
          transform: `translate3d(0, ${orb1Y}px, 0) scale(${1 + Math.sin(scrollProgress * Math.PI) * 0.15})`
        }}
      />

      {/* 4. Royal Gold Heritage Radiance Sphere */}
      <div
        className="absolute top-[25%] -right-40 w-[38rem] h-[38rem] rounded-full bg-[#C9A24A]/12 blur-[120px] will-change-transform"
        style={{
          transform: `translate3d(0, ${orb2Y}px, 0) scale(${1 + Math.cos(scrollProgress * Math.PI) * 0.1})`
        }}
      />

      {/* 5. Sage Green Organic Bloom Sphere */}
      <div
        className="absolute top-[60%] -left-32 w-[30rem] h-[30rem] rounded-full bg-[#A8B58A]/16 blur-[100px] will-change-transform"
        style={{
          transform: `translate3d(0, ${orb3Y}px, 0)`
        }}
      />

      {/* 6. Festive Crimson/Burgundy Subtle Warmth Sphere */}
      <div
        className="absolute top-[80%] right-[-10%] w-[32rem] h-[32rem] rounded-full bg-[#A52A3A]/8 blur-[130px] will-change-transform"
        style={{
          transform: `translate3d(0, ${orb4Y}px, 0)`
        }}
      />

      {/* 7. Rotating Heritage Mandala / Botanical Medallion Floating Accent */}
      <div
        className="absolute right-[4%] top-[18%] w-64 h-64 opacity-[0.06] text-[#C9A24A] will-change-transform hidden lg:block"
        style={{
          transform: `translate3d(0, ${scrollY * 0.14}px, 0) rotate(${rotationAngle}deg)`
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="100" cy="100" r="90" strokeDasharray="3 4" />
          <circle cx="100" cy="100" r="65" />
          <circle cx="100" cy="100" r="40" strokeDasharray="2 3" />
          <circle cx="100" cy="100" r="15" fill="currentColor" fillOpacity="0.2" />
          <path d="M100 10 L100 190 M10 100 L190 100 M36 36 L164 164 M36 164 L164 36" strokeWidth="0.75" />
          <path d="M100 35 C115 65 135 85 165 100 C135 115 115 135 100 165 C85 135 65 115 35 100 C65 85 85 65 100 35 Z" fill="currentColor" fillOpacity="0.08" />
        </svg>
      </div>

      {/* 8. Second Decorative Motif Accent (Left side, lower viewport) */}
      <div
        className="absolute left-[3%] top-[55%] w-72 h-72 opacity-[0.045] text-[#123D2A] will-change-transform hidden lg:block"
        style={{
          transform: `translate3d(0, ${-scrollY * 0.1}px, 0) rotate(${-rotationAngle * 0.7}deg)`
        }}
      >
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          <polygon points="100,15 125,75 185,100 125,125 100,185 75,125 15,100 75,75" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="80" strokeDasharray="4 6" />
          <circle cx="100" cy="100" r="30" />
        </svg>
      </div>

      {/* 9. Top-to-Bottom Subtle Scroll Progress Line on the leftmost rim */}
      <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-transparent">
        <div
          className="w-full bg-gradient-to-b from-[#C9A24A] via-[#123D2A] to-[#A52A3A] opacity-40 transition-all duration-75"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>
    </div>
  );
};
