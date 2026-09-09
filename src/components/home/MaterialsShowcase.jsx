import React from 'react';
import SectionHeader from '../common/SectionHeader';
import materialsData from '../../data/materials';

export default function MaterialsShowcase() {
  return (
    <section id="materials" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow="MATERIALITY & CRAFT"
          title="EVERY DETAIL MATTERS"
          description="We source authentic, durable, and sustainable architectural materials engineered to weather gracefully and maintain structural dignity."
          className="mb-16"
        />

        {/* 8 Editorial Material Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {materialsData.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#1C1C1E] overflow-hidden aspect-[4/5] flex flex-col justify-end p-6 border border-[#E8E8E8] shadow-md select-none transition-all duration-500 hover:shadow-2xl"
            >
              {/* Background Material Image */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-85"
                loading="lazy"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Red Accent Line Animation on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ED1C24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

              {/* Content Box */}
              <div className="relative z-10 transform transition-transform duration-300 group-hover:-translate-y-1">
                {/* Category Tag */}
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#ED1C24] block mb-1">
                  {item.category}
                </span>

                {/* Material Name */}
                <h3 className="font-heading font-extrabold text-xl text-white tracking-tight mb-2">
                  {item.name}
                </h3>

                {/* Specification & Description */}
                <p className="text-xs text-[#E8E8E8] leading-relaxed line-clamp-2 mb-3">
                  {item.description}
                </p>

                {/* Features Pill */}
                <div className="text-[11px] text-[#A0A0A5] font-mono border-t border-white/20 pt-2 flex items-center justify-between">
                  <span>{item.specification}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
