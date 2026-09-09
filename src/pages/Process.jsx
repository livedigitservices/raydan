import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import ProcessTimeline from '../components/home/ProcessTimeline';
import QualityAssurance from '../components/home/QualityAssurance';
import processSteps from '../data/process';
import { Clock, CheckCircle2, ShieldCheck, Camera, FileText, Award } from 'lucide-react';

export default function Process({ onOpenConsultation }) {
  const processHighlights = [
    {
      icon: Camera,
      title: "Live CCTV & Weekly Drone Logs",
      desc: "Monitor foundation pours, slab casting, and masonry progress anytime from your smartphone with 24/7 high-definition camera feeds."
    },
    {
      icon: FileText,
      title: "Transparent Line-Item BOQ",
      desc: "Every kilogram of Fe550D steel and cubic meter of RMC concrete is budgeted upfront with zero surprise contractor escalations."
    },
    {
      icon: ShieldCheck,
      title: "Multi-Barrier Quality Sign-offs",
      desc: "Structural work is never concealed until independent cube test certificates and hydrostatic leak tests are formally logged."
    },
    {
      icon: Award,
      title: "10-Year Structural Assurance",
      desc: "Official civil engineering warranty dossier and laminated as-built drawings handed over upon project completion."
    }
  ];

  return (
    <main className="pt-24 pb-20 bg-white">
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 bg-[#1C1C1E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8E8E8]">
              CONSTRUCTION METHODOLOGY
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6 max-w-4xl">
            FROM FIRST IDEA<br />
            TO <span className="text-[#ED1C24]">FINAL HANDOVER</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#E8E8E8] max-w-3xl font-light leading-relaxed">
            Our scientific, transparent seven-phase turnkey construction framework engineered for precision, fixed-cost certainty, and generational durability.
          </p>
        </div>
      </section>

      {/* Key Process Assurances Grid */}
      <section className="py-16 bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white p-6 border border-[#E8E8E8] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 bg-[#ED1C24]/10 text-[#ED1C24] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-[#1C1C1E] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#707070] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline Section */}
      <ProcessTimeline />

      {/* Step-by-Step Deep Dive Grid */}
      <section className="py-20 md:py-28 bg-[#F5F5F5] border-t border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="PHASE DELIVERABLES"
            title="THE SEVEN MILESTONES IN DETAIL"
            description="Clear accountability and transparent deliverables at every step of your residential build."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white p-8 border border-[#E8E8E8] shadow-sm flex flex-col justify-between hover:border-[#ED1C24]/50 transition-colors group relative"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ED1C24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading font-extrabold text-2xl text-[#ED1C24]">
                      {step.step}
                    </span>
                    <span className="text-xs font-mono text-[#707070] bg-[#F5F5F5] px-2.5 py-1">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#1C1C1E] mb-1">
                    {step.title}
                  </h3>
                  <h4 className="text-xs font-mono text-[#58585A] uppercase tracking-wider mb-4">
                    {step.subtitle}
                  </h4>

                  <p className="text-sm text-[#58585A] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E8E8] space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-[#1C1C1E] block mb-0.5">Your Role:</span>
                    <span className="text-[#707070]">{step.clientAction}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#1C1C1E] block mb-0.5">Deliverable:</span>
                    <span className="text-[#ED1C24] font-medium">{step.milestone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Quality Assurance Framework */}
      <QualityAssurance />

      {/* Final Action CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1C1C1E] mb-4">
            Ready to Begin Phase 01?
          </h2>
          <p className="text-base text-[#58585A] mb-8">
            Schedule an introductory consultation with our architectural and engineering teams to discuss your site, budget, and design aspirations.
          </p>
          <Button variant="primary" size="lg" onClick={onOpenConsultation}>
            START WITH CONSULTATION →
          </Button>
        </div>
      </section>
    </main>
  );
}
