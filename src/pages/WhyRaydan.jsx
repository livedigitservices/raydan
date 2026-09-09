import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import WhyRaydanSection from '../components/home/WhyRaydan';
import MaterialsShowcase from '../components/home/MaterialsShowcase';
import { Check, X, ShieldCheck, Scale, Award, HeartHandshake } from 'lucide-react';

export default function WhyRaydan({ onOpenConsultation }) {
  const comparisonData = [
    {
      metric: "Architectural & Civil Alignment",
      traditional: "Disjointed coordination between freelance architect and local contractor; blame games during execution.",
      raydan: "Unified in-house architectural studio and licensed structural civil engineers collaborating from day one."
    },
    {
      metric: "Contract & Budget Certainty",
      traditional: "Vague estimates resulting in 25% – 40% unexpected budget escalations mid-construction.",
      raydan: "Legally committed fixed-price turnkey contracts with transparent line-item BOQ and zero hidden costs."
    },
    {
      metric: "Quality & Testing Verification",
      traditional: "Manual hand-mixed concrete with unverified sand silt content and zero cube test logs.",
      raydan: "NABL-certified M30/M40 RMC with 7, 14, and 28-day digital compressive strength cube test documentation."
    },
    {
      metric: "Reinforcement & Structural Rigor",
      traditional: "Uncertified secondary rebar without cover blocks or laser total-station level checks.",
      raydan: "Direct primary mill Fe550D TMT corrosion-resistant steel with laser total-station verticality checks."
    },
    {
      metric: "Waterproofing & Leak Prevention",
      traditional: "Basic cement slurry coating on wet areas; rampant dampness within 1-2 monsoons.",
      raydan: "Multi-barrier elastomeric & polyurea waterproofing with 72-hour flood tests and 10-year warranty."
    },
    {
      metric: "Schedule Adherence",
      traditional: "Constant delays, labor shortages, and indefinite handovers stretching years past deadline.",
      raydan: "Critical Path Method (CPM) project scheduling with milestone penalty clauses and guaranteed handover."
    },
    {
      metric: "Client Visibility & Tracking",
      traditional: "Reliance on irregular verbal updates and stressful unannounced site visits.",
      raydan: "24/7 high-definition live CCTV camera portal, drone progress flyovers, and weekly technical audit logs."
    },
    {
      metric: "Post-Handover Warranty",
      traditional: "Contractor vanishes after final payment; zero warranty or support for structural defects.",
      raydan: "Comprehensive 10-Year Structural Assurance Guarantee and 1-Year all-inclusive defect liability support."
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
              THE RAYDAN STANDARD
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6 max-w-4xl">
            BUILT WITH<br />
            <span className="text-[#ED1C24]">PURPOSE</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#E8E8E8] max-w-3xl font-light leading-relaxed">
            Why discerning homeowners and architects choose Raydan Constructions for bespoke residences that demand generational engineering discipline and uncompromising craftsmanship.
          </p>
        </div>
      </section>

      {/* The 6 Core Pillars Component */}
      <WhyRaydanSection />

      {/* Comparison Matrix Section */}
      <section className="py-20 md:py-28 bg-[#F5F5F5] border-y border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="THE BENCHMARK"
            title="THE RAYDAN DIFFERENCE"
            description="How our institutional engineering discipline contrasts with traditional residential construction methods."
            className="mb-14"
          />

          <div className="bg-white border border-[#E8E8E8] shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E8E8E8] bg-[#1C1C1E] text-white">
                    <th className="p-5 sm:p-6 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider w-1/4">
                      Aspect / Standard
                    </th>
                    <th className="p-5 sm:p-6 font-heading font-bold text-xs sm:text-sm uppercase tracking-wider w-3/8 text-[#A0A0A5]">
                      Traditional Local Contractor
                    </th>
                    <th className="p-5 sm:p-6 font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider w-3/8 text-[#ED1C24] bg-[#242426]">
                      RAYDAN CONSTRUCTIONS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8E8E8] text-xs sm:text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAFAFA] transition-colors">
                      <td className="p-5 sm:p-6 font-heading font-bold text-[#1C1C1E] align-top bg-[#F9F9F9]">
                        {row.metric}
                      </td>
                      <td className="p-5 sm:p-6 text-[#707070] align-top">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-5 sm:p-6 text-[#1C1C1E] font-medium align-top bg-red-50/20">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#ED1C24] shrink-0 mt-0.5" />
                          <span>{row.raydan}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Showcase Component */}
      <MaterialsShowcase />

      {/* Bottom CTA */}
      <section className="py-20 bg-[#1C1C1E] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Build Without Compromise
          </h2>
          <p className="text-base text-[#A0A0A5] mb-8">
            Experience complete peace of mind with Raydan's transparent turnkey management and 10-year structural assurance.
          </p>
          <Button variant="primary" size="lg" onClick={onOpenConsultation}>
            START YOUR PROJECT WITH RAYDAN →
          </Button>
        </div>
      </section>
    </main>
  );
}
