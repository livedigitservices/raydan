import React from 'react';
import SectionHeader from '../common/SectionHeader';
import awardsData from '../../data/awards';
import { Award } from 'lucide-react';

export default function AwardsSection() {
  return (
    <section className="py-20 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="INDUSTRY RECOGNITION"
          title="RECOGNIZED FOR DESIGN & CRAFTSMANSHIP"
          description="Honors and citations reflecting our uncompromising commitment to residential architecture and structural innovation."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardsData.map((award, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F5F5F5] border border-[#E8E8E8] hover:border-[#ED1C24]/40 transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#ED1C24] tracking-widest">
                    {award.year}
                  </span>
                  <Award className="w-5 h-5 text-[#58585A] group-hover:text-[#ED1C24] transition-colors" />
                </div>
                <h4 className="font-heading font-bold text-base text-[#1C1C1E] mb-2 leading-snug">
                  {award.title}
                </h4>
                <p className="text-xs text-[#707070] leading-relaxed">
                  {award.organization}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E8E8] text-[11px] text-[#58585A] font-medium">
                Project: <span className="text-[#1C1C1E] font-semibold">{award.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
