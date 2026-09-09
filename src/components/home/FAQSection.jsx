import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import faqData from '../../data/faq';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F5F5F5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow="TRANSPARENCY & CLARITY"
          title="FREQUENTLY ASKED QUESTIONS"
          description="Everything you need to know about our architectural philosophy, turnkey construction contracts, cost modeling, and guarantees."
          className="mb-16"
        />

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.id}
                className={`bg-white border transition-colors duration-200 overflow-hidden ${
                  isOpen ? 'border-[#ED1C24] shadow-sm' : 'border-[#E8E8E8] hover:border-[#58585A]/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ED1C24]"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#1C1C1E] tracking-tight">
                    {item.question}
                  </span>

                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isOpen ? 'bg-[#ED1C24] text-white' : 'bg-[#F5F5F5] text-[#58585A]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {/* Animated content panel */}
                <div
                  className={`grid transition-[grid-template-rows,padding,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 px-6 pb-6 pt-1' : 'grid-rows-[0fr] opacity-0 px-6 py-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm sm:text-base text-[#58585A] leading-relaxed border-t border-[#E8E8E8] pt-4 font-normal">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
