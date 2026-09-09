import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import qualityStages from '../../data/quality';
import { ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function QualityAssurance() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = qualityStages[activeStageIndex];

  return (
    <section id="quality" className="py-24 md:py-32 bg-[#F5F5F5] border-t border-[#E8E8E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow="QUALITY MANAGEMENT SYSTEM"
          title="PRECISION AT EVERY STAGE"
          description="How Raydan's multi-barrier inspection protocol guarantees generational structural integrity and museum-grade finishes."
          className="mb-14"
        />

        {/* Visual Construction-Quality Journey Steps Bar */}
        <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {qualityStages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.stage}
                onClick={() => setActiveStageIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all border shrink-0 ${
                  isActive
                    ? 'bg-[#ED1C24] text-white border-[#ED1C24] shadow-md'
                    : 'bg-white text-[#58585A] border-[#E8E8E8] hover:border-[#ED1C24]/50'
                }`}
              >
                <span>{stage.stage}</span>
                <span>{stage.name}</span>
                {idx < qualityStages.length - 1 && (
                  <ChevronRight className={`w-3.5 h-3.5 ml-1 ${isActive ? 'text-white' : 'text-[#A0A0A5]'}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Card */}
        <div className="bg-white border border-[#E8E8E8] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-500">
          {/* Left Column: Close-up Construction Image */}
          <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#1C1C1E]">
            <img
              src={activeStage.image}
              alt={activeStage.title}
              className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Standard Badge Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#ED1C24] uppercase block mb-1">
                COMPLIANCE STANDARD
              </span>
              <div className="text-sm sm:text-base font-heading font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#ED1C24] shrink-0" />
                <span>{activeStage.standard}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Stage Inspection Protocols */}
          <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#ED1C24] uppercase tracking-widest mb-3">
                <span>STAGE {activeStage.stage}</span>
                <span>•</span>
                <span>{activeStage.name} AUDIT</span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1C1C1E] tracking-tight mb-4">
                {activeStage.title}
              </h3>

              <p className="text-sm sm:text-base text-[#58585A] leading-relaxed mb-8">
                {activeStage.description}
              </p>

              {/* Quality Checkpoints Checklist */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1C1C1E] block">
                  Mandatory Verification Checkpoints:
                </span>
                {activeStage.checkpoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#707070]">
                    <CheckCircle2 className="w-4 h-4 text-[#ED1C24] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Sign-off Note */}
            <div className="pt-6 border-t border-[#E8E8E8] flex items-center justify-between text-xs text-[#58585A]">
              <span>Verified by Lead Quality Auditor</span>
              <span className="font-mono text-[#ED1C24] font-bold">100% INSPECTED</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
