import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import projectsData from '../data/projects';
import LightboxModal from '../components/common/LightboxModal';
import Button from '../components/common/Button';
import { MapPin, Calendar, Maximize2, ShieldCheck, CheckCircle2, ArrowLeft, ArrowUpRight, Play } from 'lucide-react';

export default function ProjectDetails({ onOpenConsultation }) {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="pt-20 bg-white">
      {/* Back Navigation Bar */}
      <div className="bg-[#F5F5F5] border-b border-[#E8E8E8] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-[#58585A] hover:text-[#ED1C24] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <span className="text-xs font-mono text-[#707070] hidden sm:inline-block">
            CASE STUDY: {project.title}
          </span>
        </div>
      </div>

      {/* Full-Screen Project Hero */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-end bg-[#1C1C1E] text-white overflow-hidden select-none">
        <img
          src={project.coverImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-[#1C1C1E]/60 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 w-full">
          {/* Category & Location Badge */}
          <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-1.5 border border-white/20 mb-4">
            <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white">
              {project.category} • {project.location}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-tight mb-8">
            {project.title}
          </h1>

          {/* Key Metric Specs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 bg-black/60 backdrop-blur-md p-6 border border-white/15 max-w-4xl">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#ED1C24] block mb-1">
                BUILT-UP AREA
              </span>
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                {project.area}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#ED1C24] block mb-1">
                PLOT AREA
              </span>
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                {project.plotArea}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#ED1C24] block mb-1">
                YEAR COMPLETED
              </span>
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#ED1C24] block mb-1">
                TIMELINE
              </span>
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                {project.duration}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview & Design Concept */}
      <section className="py-20 md:py-28 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#58585A]">
                  PROJECT OVERVIEW
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1C1C1E] tracking-tight">
                Architectural Narrative
              </h2>

              <p className="text-base sm:text-lg text-[#58585A] leading-relaxed">
                {project.overview}
              </p>

              <div className="bg-[#F5F5F5] p-6 border-l-4 border-[#ED1C24] mt-6">
                <h4 className="font-heading font-bold text-sm uppercase text-[#1C1C1E] mb-2 tracking-wider">
                  Core Design Concept
                </h4>
                <p className="text-sm text-[#707070] leading-relaxed">
                  {project.concept}
                </p>
              </div>
            </div>

            {/* Architecture Specifications Table */}
            <div className="lg:col-span-5 bg-[#1C1C1E] text-white p-8 sm:p-10 border border-black/10">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#ED1C24] uppercase block mb-4">
                ENGINEERING SPECIFICATIONS
              </span>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="pb-3 border-b border-white/10">
                  <span className="text-[#A0A0A5] block mb-1">Architectural Style</span>
                  <span className="font-bold text-white">{project.architecture.style}</span>
                </div>
                <div className="pb-3 border-b border-white/10">
                  <span className="text-[#A0A0A5] block mb-1">Structural System</span>
                  <span className="font-bold text-white">{project.architecture.structure}</span>
                </div>
                <div className="pb-3 border-b border-white/10">
                  <span className="text-[#A0A0A5] block mb-1">Facade Treatment</span>
                  <span className="font-bold text-white">{project.architecture.facade}</span>
                </div>
                <div className="pb-3 border-b border-white/10">
                  <span className="text-[#A0A0A5] block mb-1">Glazing Technology</span>
                  <span className="font-bold text-white">{project.architecture.glazing}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={onOpenConsultation}
                >
                  DISCUSS A SIMILAR HOME →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Photo Gallery with Lightbox */}
      <section className="py-20 md:py-28 bg-[#F5F5F5] border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#58585A]">
                  VISUAL DOCUMENTATION
                </span>
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1C1C1E] tracking-tight">
                Project Gallery
              </h2>
            </div>

            <span className="text-xs font-mono text-[#707070]">
              Click any image to view full-screen high resolution lightbox
            </span>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] overflow-hidden bg-[#1C1C1E] shadow-md border border-[#E8E8E8] text-left focus:outline-none"
              >
                <img
                  src={img}
                  alt={`${project.title} gallery ${idx + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#ED1C24] text-white rounded-full flex items-center justify-center shadow-xl">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Specified */}
      <section className="py-20 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-heading font-extrabold text-2xl text-[#1C1C1E] mb-6">
            Materials Specified & Executed
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.materials.map((mat, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#F5F5F5] border border-[#E8E8E8]">
                <span className="w-2 h-2 bg-[#ED1C24] rounded-full shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#1C1C1E]">{mat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Journey */}
      <section className="py-20 md:py-28 bg-[#1C1C1E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
            <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#E8E8E8]">
              ENGINEERING LOG
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-12">
            Project Construction Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.journey.map((item, idx) => (
              <div key={idx} className="bg-[#242426] p-6 border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#ED1C24] tracking-widest uppercase block mb-2">
                    PHASE 0{idx + 1}
                  </span>
                  <h4 className="font-heading font-bold text-base text-white mb-3">
                    {item.phase}
                  </h4>
                  <p className="text-xs text-[#A0A0A5] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial if present */}
      {project.testimonial && (
        <section className="py-20 bg-[#F5F5F5] border-b border-[#E8E8E8]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#ED1C24] uppercase block mb-4">
              CLIENT TESTIMONIAL
            </span>
            <blockquote className="font-heading font-medium text-xl sm:text-2xl text-[#1C1C1E] leading-relaxed mb-6">
              "{project.testimonial.quote}"
            </blockquote>
            <p className="font-heading font-bold text-sm text-[#1C1C1E]">
              {project.testimonial.author}
            </p>
            <p className="text-xs text-[#707070]">
              {project.testimonial.designation}
            </p>
          </div>
        </section>
      )}

      {/* Bottom CTA Bar */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="font-heading font-extrabold text-3xl text-[#1C1C1E] mb-4">
            Ready to Build Your Bespoke Residence?
          </h3>
          <p className="text-sm text-[#58585A] mb-8">
            Connect with our team for a personalized architectural design and feasibility consultation.
          </p>
          <Button variant="primary" size="lg" onClick={onOpenConsultation}>
            START YOUR COMMISSION →
          </Button>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        images={project.images}
        initialIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </main>
  );
}
