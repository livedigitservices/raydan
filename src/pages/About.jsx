import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import brandData from '../data/brand';
import statsData from '../data/stats';
import { Target, Compass, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenConsultation }) {
  const leadership = [
    {
      name: "Ar. Farhan Raydan",
      role: "Founder & Principal Architect",
      bio: "Educated in architectural design with over 18 years shaping bespoke residences that integrate climate sensitivity and structural minimalism.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Er. K. S. Murthy",
      role: "Chief Structural Engineer",
      bio: "Chartered structural engineer specializing in post-tensioned cantilevers, deep foundation engineering, and seismic-resistant frameworks.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Siddharth Verma",
      role: "Head of Project Delivery",
      bio: "Oversees site execution, supply-chain logistics, and contractor alignment with 15+ years delivering luxury turnkey residential commissions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80"
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
              ABOUT OUR COMPANY
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6 max-w-4xl">
            BUILDING<br />
            WITH <span className="text-[#ED1C24]">PURPOSE</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#E8E8E8] max-w-3xl font-light leading-relaxed">
            "{brandData.aboutQuote}"
          </p>
        </div>
      </section>

      {/* Company Introduction & Philosophy */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#58585A]">
                  WHO WE ARE
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1C1C1E] tracking-tight leading-tight">
                Architectural Intentions.<br />
                Engineered for Longevity.
              </h2>

              <p className="text-base text-[#58585A] leading-relaxed">
                Founded with a mission to bridge the gap between architectural aspiration and real-world construction precision, <strong>RAYDAN CONSTRUCTIONS</strong> represents a modern breed of builder.
              </p>

              <p className="text-sm text-[#707070] leading-relaxed">
                Too often, homeowners experience fragmented communication between independent architects, civil contractors, and interior teams. We bring the entire design-engineering-build continuum under one roof. Every line drawn by our architects has structural grounding; every beam poured by our civil team respects the aesthetic nuance of the space.
              </p>

              <div className="pt-4 flex flex-wrap gap-8">
                {statsData.slice(0, 2).map((s, i) => (
                  <div key={i} className="border-l-2 border-[#ED1C24] pl-4">
                    <span className="font-heading font-extrabold text-3xl text-[#1C1C1E]">
                      {s.value}{s.suffix}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider block text-[#707070] mt-1">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden shadow-2xl">
                <img
                  src="/projects/the-courtyard-house.webp"
                  alt="RAYDAN architectural detailing and construction"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-white p-8 sm:p-12 border border-[#E8E8E8] shadow-sm relative">
              <div className="w-10 h-10 bg-[#ED1C24]/10 flex items-center justify-center text-[#ED1C24] mb-6">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#1C1C1E] mb-4">
                Our Vision
              </h3>
              <p className="text-sm text-[#58585A] leading-relaxed">
                To set the benchmark for luxury home construction in India by unifying thoughtful architectural design, cutting-edge civil engineering, and generational durability into an effortless, transparent client experience.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 sm:p-12 border border-[#E8E8E8] shadow-sm relative">
              <div className="w-10 h-10 bg-[#58585A]/10 flex items-center justify-center text-[#58585A] mb-6">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#1C1C1E] mb-4">
                Our Mission
              </h3>
              <p className="text-sm text-[#58585A] leading-relaxed">
                To build homes with absolute integrity. We treat every private residence as a bespoke work of engineering and craftsmanship, delivering on-time, within committed budgets, and with zero compromises on structural excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-20 md:py-28 bg-[#1C1C1E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="UNCOMPROMISING STANDARDS"
            title="OUR QUALITY COMMITMENT"
            theme="dark"
            description="Built to outlast trends and climate extremes through scientific engineering and rigorous on-site protocols."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "10-Year Structural Assurance", desc: "Every Raydan home comes with an official structural warranty backed by registered civil engineers." },
              { title: "Zero Subcontractor Dilution", desc: "Direct oversight by our full-time site engineers, eliminating uncontrolled sub-tier labor issues." },
              { title: "Certified Batch-Test Materials", desc: "Every batch of steel and RMC is tested in NABL-accredited laboratories before installation." },
              { title: "450-Point Quality Checklist", desc: "Rigorous inspections conducted from deep foundation shoring to final silicone mastic reveals." },
              { title: "Transparent Digital Tracking", desc: "Real-time client portal with daily photo logs, drone flyovers, and material test certificates." },
              { title: "Dedicated Post-Handover Care", desc: "Preventative seasonal maintenance audits and priority response for peace of mind." }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#242426] p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#ED1C24] mb-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <h4 className="font-heading font-bold text-base text-white">{item.title}</h4>
                  </div>
                  <p className="text-xs text-[#A0A0A5] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Architectural Team */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="THE MINDS BEHIND THE CRAFT"
            title="LEADERSHIP & EXPERTISE"
            description="Our leadership team unites decades of award-winning architectural talent and premier structural engineering credentials."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((person, idx) => (
              <div key={idx} className="bg-[#F5F5F5] border border-[#E8E8E8] overflow-hidden group">
                <div className="aspect-[4/4] overflow-hidden bg-[#1C1C1E]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#ED1C24] uppercase block mb-1">
                    {person.role}
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-[#1C1C1E] mb-3">
                    {person.name}
                  </h3>
                  <p className="text-xs text-[#707070] leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="primary" size="lg" onClick={onOpenConsultation}>
              DISCUSS YOUR VISION WITH OUR TEAM →
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
