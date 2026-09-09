import React from 'react';
import Button from '../common/Button';

export default function FinalCTA({ onOpenConsultation }) {
  return (
    <section className="relative py-28 md:py-36 bg-[#1C1C1E] text-white overflow-hidden select-none">
      {/* Background Architectural Luxury Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85"
          alt="Luxury architectural residence at dusk"
          className="w-full h-full object-cover object-center opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/70 to-[#1C1C1E]/90" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 bg-black/40 backdrop-blur-sm px-4 py-1.5 border border-white/10">
          <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-white/90">
            INITIATE YOUR RESIDENTIAL COMMISSION
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05] mb-6">
          YOUR DREAM HOME<br />
          STARTS WITH A <span className="text-[#ED1C24]">CONVERSATION</span>.
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-[#E8E8E8] max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
          Let's turn your vision into a home built to last. Schedule an architectural consultation with our principal design and civil engineering team.
        </p>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row gap-4">
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
            to="/contact"
            icon={false}
          >
            CONTACT OUR OFFICE
          </Button>
        </div>
      </div>
    </section>
  );
}
