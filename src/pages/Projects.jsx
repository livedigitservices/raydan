import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/common/SectionHeader';
import projectsData, { projectFilterCategories } from '../data/projects';
import { MapPin, ArrowUpRight, Search } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesCategory =
        activeFilter === 'ALL' ||
        p.filterCategory === activeFilter ||
        p.category === activeFilter;

      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <main className="pt-24 pb-20 bg-[#F5F5F5]">
      {/* Page Hero */}
      <section className="relative py-20 md:py-28 bg-[#1C1C1E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#ED1C24] rounded-full" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#E8E8E8]">
              ARCHITECTURAL PORTFOLIO
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] mb-6 max-w-4xl">
            HOMES<br />
            WE'VE <span className="text-[#ED1C24]">BUILT</span>.
          </h1>

          <p className="text-lg sm:text-xl text-[#E8E8E8] max-w-3xl font-light leading-relaxed">
            Explore our portfolio of private residences, bespoke villas, and contemporary estates built across Hyderabad, Bengaluru, Pune, and Chennai.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-12 bg-white border-b border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {projectFilterCategories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs font-heading font-bold uppercase tracking-[0.16em] px-4 py-2 transition-all select-none ${
                    isActive
                      ? 'bg-[#ED1C24] text-white shadow-sm'
                      : 'bg-[#F5F5F5] text-[#58585A] hover:text-[#1C1C1E] hover:bg-[#E8E8E8] border border-[#E8E8E8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#707070] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or city..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#F5F5F5] border border-[#E8E8E8] text-xs text-[#242424] focus:outline-none focus:border-[#ED1C24] focus:bg-white transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white border border-[#E8E8E8] p-8">
              <h3 className="font-heading font-bold text-xl text-[#1C1C1E] mb-2">No projects found</h3>
              <p className="text-xs text-[#707070]">Try changing your search query or category filter.</p>
              <button
                onClick={() => { setActiveFilter('ALL'); setSearchQuery(''); }}
                className="mt-4 text-xs font-bold text-[#ED1C24] uppercase tracking-wider underline"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  data-cursor="project"
                  className="group relative bg-[#1C1C1E] overflow-hidden shadow-lg border border-black/10 flex flex-col transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#242424]">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    <div className="absolute top-5 left-5 bg-white/95 text-[#1C1C1E] text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 border-l-2 border-[#ED1C24] shadow-md">
                      {project.category}
                    </div>

                    <div className="absolute top-5 right-5 w-11 h-11 bg-white/90 group-hover:bg-[#ED1C24] text-[#1C1C1E] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform transition-transform duration-500 ease-out group-hover:-translate-y-1">
                      <div className="flex items-center gap-4 text-xs font-mono text-white/80 mb-2">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#ED1C24]" />
                          {project.location}
                        </span>
                        <span className="text-white/40">•</span>
                        <span>{project.area}</span>
                        <span className="text-white/40">•</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/70 mt-2 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-4 h-[2px] w-12 bg-[#ED1C24] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
