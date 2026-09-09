import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { ShieldCheck, Compass, Sparkles, Clock, Eye, HardHat } from 'lucide-react';

export default function WhyRaydan() {
  const advantages = [
    {
      number: "01",
      title: "ENGINEERING PRECISION",
      icon: Compass,
      description: "Laser total-station structural alignment, digital batch mix control, and millimeter-grade formwork ensure zero structural deflection or settling over lifespans."
    },
    {
      number: "02",
      title: "QUALITY MATERIALS",
      icon: ShieldCheck,
      description: "Direct mill-procured Fe550D TMT reinforcement, certified M30/M40 RMC, first-choice natural stones, and Saint-Gobain high-performance glazing systems."
    },
    {
      number: "03",
      title: "TRANSPARENT PROCESS",
      icon: Eye,
      description: "Fixed-price contract guarantees with zero surprise escalations, daily live CCTV camera access, and weekly line-item milestone audit reports."
    },
    {
      number: "04",
      title: "EXPERIENCED TEAM",
      icon: HardHat,
      description: "In-house licensed structural engineers, award-winning architectural designers, and specialized master craftsmen dedicated exclusively to private residences."
    },
    {
      number: "05",
      title: "ON-TIME EXECUTION",
      icon: Clock,
      description: "Critical Path Method (CPM) project scheduling with penal penalty clauses on delayed deliverables, ensuring guaranteed handover dates."
    },
    {
      number: "06",
      title: "ATTENTION TO DETAIL",
      icon: Sparkles,
      description: "From concealed shadow line reveals to triple-barrier hydrostatic waterproofing and acoustic decoupling, perfection is standard in every square inch."
    }
  ];

  return (
    <section id="why-raydan" className="py-24 md:py-32 bg-[#1C1C1E] text-white relative overflow-hidden">
      {/* Architectural Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          eyebrow="THE RAYDAN ADVANTAGE"
          title="BUILT WITH PURPOSE"
          theme="dark"
          description="How our rigorous engineering mindset and architectural passion redefine the benchmark of private home construction."
          className="mb-16"
        />

        {/* 6 Advantages Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {advantages.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-[#1C1C1E] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 hover:bg-[#242426] group relative"
              >
                {/* Brand Red Accent Line on Top of Box */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ED1C24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    {/* Brand Red Number */}
                    <span className="font-heading font-extrabold text-2xl text-[#ED1C24] tracking-wider">
                      {item.number}
                    </span>
                    <Icon className="w-6 h-6 text-white/40 group-hover:text-[#ED1C24] transition-colors" />
                  </div>

                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight mb-4 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#A0A0A5] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#707070] uppercase">
                  <span className="w-1.5 h-1.5 bg-[#ED1C24] rounded-full" />
                  <span>RAYDAN STANDARD</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
