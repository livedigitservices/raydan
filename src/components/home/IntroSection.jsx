import React from 'react';
import Button from '../common/Button';
import brandData from '../../data/brand';

export default function IntroSection() {
  return (
    <section id="intro-section" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle architectural background guide */}
      <div className="absolute inset-0 bg-grid-light opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetric Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Architectural Imagery with Overlapping Accent Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary architectural home exterior"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Architectural Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-8 bg-[#1C1C1E] text-white p-6 sm:p-8 max-w-xs shadow-2xl border-l-4 border-[#ED1C24]">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#ED1C24] uppercase block mb-1">
                OUR PHILOSOPHY
              </span>
              <p className="font-heading font-bold text-sm sm:text-base leading-snug">
                "Where vision becomes home, built with uncompromising engineering."
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Typography & Content */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-6 pt-8 lg:pt-0">
            {/* Small Section Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#58585A]">
                ARCHITECTURE • ENGINEERING • CRAFTSMANSHIP
              </span>
            </div>

            {/* Large Typography Heading */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1C1C1E] tracking-tight leading-[1.08] mb-6">
              MORE THAN<br />
              A STRUCTURE.<br />
              <span className="text-[#58585A]">A HOME BUILT</span><br />
              <span className="text-[#ED1C24]">AROUND YOUR LIFE.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-[#58585A] leading-relaxed mb-6 font-normal">
              {brandData.introText}
            </p>

            <p className="text-sm text-[#707070] leading-relaxed mb-10">
              We eliminate the fragmentation of traditional construction. By aligning master architects, licensed structural engineers, and master builders under a unified standard of excellence, every residence we construct is an heirloom built for generations.
            </p>

            {/* CTA */}
            <Button
              variant="outline"
              size="lg"
              to="/about"
            >
              DISCOVER OUR APPROACH →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
