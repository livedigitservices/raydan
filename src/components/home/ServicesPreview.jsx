import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import servicesData from '../../data/services';

export default function ServicesPreview() {
  return (
    <section id="services-section" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          eyebrow="OUR EXPERTISE"
          title="FROM VISION TO COMPLETION"
          description="A complete lifecycle of residential building services executed under one standard of architectural and structural mastery."
          className="mb-16"
          action={
            <Button variant="ghost" to="/services">
              VIEW ALL SERVICES
            </Button>
          }
        />

        {/* Services Grid: Large Editorial Architectural Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="group relative bg-[#F5F5F5] border border-[#E8E8E8] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-xl hover:border-[#ED1C24]/50 hover:-translate-y-1 block select-none"
            >
              {/* Image Preview Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1C1C1E]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Service Number Tag */}
                <div className="absolute top-4 left-4 bg-white/95 text-[#1C1C1E] font-heading font-extrabold text-xs px-3 py-1.5 tracking-wider border-l-2 border-[#ED1C24] shadow-md">
                  {service.number}
                </div>

                {/* Arrow Icon with diagonal movement on hover */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 group-hover:bg-[#ED1C24] text-[#1C1C1E] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col justify-between relative bg-white group-hover:bg-[#FAFAFA] transition-colors duration-300">
                {/* Brand Red Accent Line that expands on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#ED1C24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div>
                  <h3 className="font-heading font-extrabold text-xl text-[#1C1C1E] group-hover:text-[#ED1C24] transition-colors duration-300 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#707070] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E8E8] flex items-center justify-between text-xs text-[#58585A]">
                  <span className="font-medium">{service.keyHighlight}</span>
                  <span className="font-bold text-[#ED1C24] uppercase tracking-wider group-hover:underline">
                    EXPLORE →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
