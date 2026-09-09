import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import servicesData from '../data/services';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services({ onOpenConsultation }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location]);

  return (
    <main className="pt-24 pb-20 bg-white">
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 bg-[#1C1C1E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8E8E8]">
              SERVICES & CAPABILITIES
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6 max-w-4xl">
            FROM VISION<br />
            TO <span className="text-[#ED1C24]">COMPLETION</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#E8E8E8] max-w-3xl font-light leading-relaxed">
            A comprehensive suite of residential architectural, structural engineering, and turnkey construction services executed with uncompromising standards.
          </p>
        </div>
      </section>

      {/* Services Detailed Sections */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {servicesData.map((service, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8 border-t border-[#E8E8E8] ${
                  idx === 0 ? 'border-t-0 pt-0' : ''
                }`}
              >
                {/* Media Container */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[16/11] overflow-hidden shadow-xl group bg-[#1C1C1E]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-[#1C1C1E] font-heading font-extrabold text-xs px-3 py-1.5 tracking-wider border-l-2 border-[#ED1C24]">
                      SERVICE {service.number}
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'} space-y-6`}>
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
                    <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#58585A]">
                      {service.keyHighlight}
                    </span>
                  </div>

                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1C1C1E] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-base text-[#58585A] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Scope & Deliverables */}
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1C1C1E] block">
                      Scope of Deliverables:
                    </span>
                    {service.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#707070]">
                        <CheckCircle2 className="w-4 h-4 text-[#ED1C24] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button variant="primary" size="md" onClick={onOpenConsultation}>
                      CONSULT ON {service.title} →
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
