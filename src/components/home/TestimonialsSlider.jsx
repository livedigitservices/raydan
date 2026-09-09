import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import testimonialsData from '../../data/testimonials';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonialsData[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#1C1C1E] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <SectionHeader
          eyebrow="CLIENT EXPERIENCES"
          title="TRUSTED BY HOMEOWNERS"
          theme="dark"
          description="Reflections from patrons who entrusted Raydan with the architectural design and turnkey construction of their private sanctuaries."
          className="mb-16"
        />

        {/* Sophisticated Testimonial Card */}
        <div className="bg-[#242426] border border-white/10 p-8 sm:p-14 lg:p-16 relative shadow-2xl">
          {/* Brand Red Accent Bar */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[#ED1C24]" />

          {/* Large Quote Icon Background */}
          <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Rating Stars */}
            <div className="flex items-center gap-1.5 mb-8">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#ED1C24] text-[#ED1C24]" />
              ))}
              <span className="text-xs font-mono text-white/50 ml-2">VERIFIED HOMEOWNER REVIEW</span>
            </div>

            {/* Large Quotation Typography */}
            <blockquote className="font-heading font-medium text-xl sm:text-2xl lg:text-3xl text-white leading-relaxed mb-10 tracking-tight">
              "{current.quote}"
            </blockquote>

            {/* Client Credentials & Controls Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
              <div>
                <h4 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#A0A0A5] mt-0.5">
                  {current.project} • <span className="text-[#ED1C24]">{current.location}</span>
                </p>
              </div>

              {/* Minimal Controls & Progress Indicator */}
              <div className="flex items-center gap-4">
                {/* Progress Indicator */}
                <div className="text-xs font-mono tracking-widest text-[#A0A0A5]">
                  <span className="text-white font-bold text-sm">{currentIndex + 1}</span>
                  <span className="mx-1">/</span>
                  <span>{testimonialsData.length}</span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 bg-white/5 hover:bg-[#ED1C24] text-white border border-white/10 transition-colors focus:outline-none"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 bg-white/5 hover:bg-[#ED1C24] text-white border border-white/10 transition-colors focus:outline-none"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
