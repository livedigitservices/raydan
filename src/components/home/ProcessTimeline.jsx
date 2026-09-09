import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import processSteps from '../../data/process';
import { Clock, CheckCircle2 } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processSteps[activeStepIndex];

  return (
    <section id="process" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow="CONSTRUCTION JOURNEY"
          title="FROM FIRST IDEA TO FINAL HANDOVER"
          description="A structured, transparent seven-phase roadmap turning architectural blueprints into an enduring, bespoke home."
          className="mb-16"
        />

        {/* Desktop Horizontal Timeline Navigation */}
        <div className="hidden lg:block mb-12">
          <div className="relative flex items-center justify-between border-b border-[#E8E8E8] pb-6">
            {/* Horizontal Track Line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-[#E8E8E8] -z-0" />

            {processSteps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className="group relative z-10 flex flex-col items-center focus:outline-none cursor-pointer"
                >
                  {/* Step Circle Node */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-extrabold text-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-[#ED1C24] text-white shadow-lg ring-4 ring-[#ED1C24]/20 scale-110'
                        : isPast
                        ? 'bg-[#1C1C1E] text-white'
                        : 'bg-white text-[#58585A] border-2 border-[#E8E8E8] hover:border-[#ED1C24]'
                    }`}
                  >
                    {step.step}
                  </div>

                  {/* Title Label */}
                  <div className="mt-3 text-center">
                    <span
                      className={`text-xs font-heading font-bold uppercase tracking-wider block transition-colors ${
                        isActive ? 'text-[#ED1C24]' : 'text-[#58585A] group-hover:text-[#1C1C1E]'
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Showcase Box */}
          <div className="bg-[#F5F5F5] border border-[#E8E8E8] p-8 md:p-12 mt-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#ED1C24]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono font-bold text-[#ED1C24] tracking-widest uppercase">
                    PHASE {activeStep.step}
                  </span>
                  <span className="text-[#A0A0A5]">•</span>
                  <span className="flex items-center gap-1.5 text-xs text-[#58585A] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#ED1C24]" />
                    Estimated Duration: {activeStep.duration}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-3xl text-[#1C1C1E] tracking-tight">
                  {activeStep.title}: {activeStep.subtitle}
                </h3>

                <p className="text-base text-[#58585A] leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E8E8]">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#1C1C1E] block mb-1">
                      Client Involvement
                    </span>
                    <p className="text-xs text-[#707070] leading-relaxed">
                      {activeStep.clientAction}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-[#1C1C1E] block mb-1">
                      Phase Deliverable & Milestone
                    </span>
                    <p className="text-xs text-[#707070] leading-relaxed flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ED1C24] shrink-0 mt-0.5" />
                      <span>{activeStep.milestone}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="lg:col-span-4 flex flex-col justify-center items-end border-l border-[#E8E8E8] pl-8">
                <div className="text-xs font-mono text-[#707070] uppercase mb-4">
                  STEP {activeStepIndex + 1} OF {processSteps.length}
                </div>
                <div className="flex gap-3">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-5 py-2.5 bg-white border border-[#E8E8E8] text-xs font-bold uppercase tracking-wider text-[#1C1C1E] hover:border-[#ED1C24] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    PREV PHASE
                  </button>
                  <button
                    disabled={activeStepIndex === processSteps.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(processSteps.length - 1, prev + 1))}
                    className="px-5 py-2.5 bg-[#ED1C24] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#58585A] disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    NEXT PHASE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="block lg:hidden space-y-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#F5F5F5] border-l-4 border-[#ED1C24] p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading font-extrabold text-lg text-[#ED1C24]">
                  {step.step}. {step.title}
                </span>
                <span className="text-xs text-[#707070] font-mono">{step.duration}</span>
              </div>
              <h4 className="font-heading font-bold text-base text-[#1C1C1E] mb-2">
                {step.subtitle}
              </h4>
              <p className="text-sm text-[#58585A] leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="text-xs text-[#707070] border-t border-[#E8E8E8] pt-3">
                <strong className="text-[#1C1C1E]">Deliverable: </strong>
                {step.milestone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
