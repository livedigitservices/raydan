import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, ArrowRight, Play, Volume2, VolumeX } from 'lucide-react';
import Button from '../common/Button';
import brandData from '../../data/brand';
import gsap from 'gsap';

export default function Hero({ onOpenConsultation }) {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const eyebrowRef = useRef(null);
  const videoRef = useRef(null);

  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  // Local authentic architectural hero poster
  const heroPoster = "/projects/the-courtyard-house.webp";
  const heroVideo = "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-design-39908-large.mp4";

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
      .fromTo(
        headlineRef.current?.children || [],
        { opacity: 0, y: 50, skewY: 2 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.1, stagger: 0.15 },
        "-=0.4"
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextEl = document.getElementById('intro-section');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-[#1C1C1E] text-white overflow-hidden select-none"
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image (always visible until video plays smoothly) */}
        <img
          src={heroPoster}
          alt="Contemporary luxury architectural home"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded && !videoFailed ? 'opacity-30' : 'opacity-60 scale-105'
          }`}
          style={{ willChange: 'transform' }}
        />

        {/* Cinematic Video Layer */}
        {!videoFailed && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster={heroPoster}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoFailed(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-40' : 'opacity-0'
            }`}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}

        {/* Sophisticated Architectural Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/60 to-black/70" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#1C1C1E]/40 to-[#1C1C1E]/90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 flex flex-col items-start w-full">
        {/* Eyebrow */}
        <div 
          ref={eyebrowRef}
          className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-1.5 border border-white/15 mb-6"
        >
          <span className="w-2 h-2 bg-[#ED1C24] rounded-full animate-pulse" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white/90">
            {brandData.eyebrow}
          </span>
        </div>

        {/* Large Architectural Heading */}
        <div ref={headlineRef} className="space-y-1 mb-6 text-left max-w-5xl">
          <div className="overflow-hidden">
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-white">
              BUILDING
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-white">
              HOMES
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="font-heading font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-white flex items-baseline">
              <span>THAT LAST</span>
              <span className="text-[#ED1C24]">.</span>
            </h1>
          </div>
        </div>

        {/* Supporting Text */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-[#E8E8E8] max-w-2xl font-light leading-relaxed mb-10 tracking-wide"
        >
          {brandData.heroSubtitle}
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenConsultation}
          >
            START YOUR PROJECT →
          </Button>

          <Button
            variant="outlineLight"
            size="lg"
            to="/projects"
            icon={false}
          >
            EXPLORE OUR PROJECTS
          </Button>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors group cursor-pointer focus:outline-none"
        aria-label="Scroll to introduction"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase">SCROLL</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5 group-hover:border-[#ED1C24] transition-colors">
          <div className="w-1 h-2 bg-[#ED1C24] rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
