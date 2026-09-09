import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Calendar, Maximize2 } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import projectsData, { projectFilterCategories } from '../../data/projects';

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'ALL') return projectsData;
    return projectsData.filter(
      (p) => p.filterCategory === activeFilter || p.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section id="projects-section" className="py-24 md:py-32 bg-[#F5F5F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeader
          eyebrow="SELECTED PORTFOLIO"
          title="HOMES WE'VE BUILT"
          description="A curated showcase of bespoke residences, modern villas, and architectural estates crafted with engineering precision."
          className="mb-12"
          action={
            <Button variant="ghost" to="/projects">
              VIEW ALL PROJECTS
            </Button>
          }
        />

        {/* Working Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-[#E8E8E8] pb-4">
          {projectFilterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`text-xs font-heading font-bold uppercase tracking-[0.16em] px-4 py-2 transition-all duration-300 relative select-none ${
                  isActive
                    ? 'bg-[#ED1C24] text-white shadow-sm'
                    : 'bg-white text-[#58585A] hover:text-[#1C1C1E] hover:bg-[#E8E8E8]/60 border border-[#E8E8E8]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid with Smooth Fade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              data-cursor="project"
              className="group relative bg-[#1C1C1E] overflow-hidden shadow-lg border border-black/10 flex flex-col transition-all duration-500 hover:shadow-2xl"
            >
              {/* Project Image Viewport */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden bg-[#242424]">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300" />

                {/* Top Category Tag */}
                <div className="absolute top-5 left-5 bg-white/95 text-[#1C1C1E] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 border-l-2 border-[#ED1C24] shadow-md backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Top Right Arrow Icon Button */}
                <div className="absolute top-5 right-5 w-11 h-11 bg-white/90 group-hover:bg-[#ED1C24] text-[#1C1C1E] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Bottom Overlay Info (slides up gently on hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  {/* Location & Year */}
                  <div className="flex items-center gap-4 text-xs font-mono text-white/80 mb-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#ED1C24]" />
                      {project.location}
                    </span>
                    <span className="text-white/40">•</span>
                    <span>{project.area}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Expandable Brief on hover */}
                  <p className="text-xs sm:text-sm text-white/70 mt-2 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.description}
                  </p>

                  {/* Brand Red Accent Line */}
                  <div className="mt-4 h-[2px] w-12 bg-[#ED1C24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
