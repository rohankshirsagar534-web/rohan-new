import React, { useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { Marquee } from './Marquee';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'VIDEO',
  'VFX',
  'MOTION',
  '3D',
  'GRAPHIC DESIGN',
  'WEB',
];

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects =
    selectedCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="work"
      className="py-20 sm:py-28 bg-[#F5F4F0] relative overflow-hidden film-grain"
    >
      {/* Marquee Banner */}
      <div className="mb-14 sm:mb-20">
        <Marquee
          items={['VIDEO', 'VFX', 'MOTION', '3D', 'DESIGN', 'WEB', 'VIDEO', 'VFX']}
          theme="light"
          speed="fast"
          fontSize="text-4xl sm:text-6xl md:text-8xl"
          className="border-black/15 bg-black/5"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Editorial Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-black/15 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] uppercase mb-3">
              <span className="text-[#F7A928] font-bold">[ 03 ]</span>
              <span>INDEXED ARCHIVE</span>
            </div>
            <h2
              id="selected-work-heading"
              className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] text-black"
            >
              SELECTED<br />
              <span className="text-black inline-flex items-center">
                WORK<span className="text-[#F7A928]">.</span>
              </span>
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-xs font-mono text-[#555555]">
            <span className="font-bold text-black uppercase">
              SHOWING: {filteredProjects.length} / {PROJECTS.length} ENTRIES
            </span>
            <span>ALL ASSETS DIGITALLY CURATED &amp; VERIFIED</span>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-black uppercase mr-2 shrink-0">
            <Filter size={14} className="text-[#F7A928]" />
            <span>FILTER:</span>
          </div>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 shrink-0 uppercase tracking-wider ${
                  isActive
                    ? 'bg-black text-[#F7A928] shadow-sm'
                    : 'bg-white border border-black/15 text-black hover:border-black hover:bg-black/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            // Assign asymmetrical column spans to maintain visual dynamic variety
            let colSpan = 'md:col-span-6';
            if (project.aspectRatio === 'wide') {
              colSpan = 'md:col-span-12 lg:col-span-8';
            } else if (project.aspectRatio === 'square') {
              colSpan = 'md:col-span-6 lg:col-span-4';
            } else if (project.aspectRatio === 'tall') {
              colSpan = 'md:col-span-6 lg:col-span-4';
            }

            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group relative bg-white rounded-3xl sm:rounded-[28px] border border-black/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between`}
              >
                {/* Image Container with Film Grain & Zoom */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-xs bg-black/70 backdrop-blur-xs text-[#F7A928] border border-white/10">
                      {project.number}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-xs bg-white/90 text-black font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <div className="font-mono text-[10px] text-[#F7A928] uppercase tracking-wider mb-1">
                      {project.categoryDisplay}
                    </div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-white group-hover:text-[#F7A928] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Lower Details & Interactive Action */}
                <div className="p-5 sm:p-6 flex flex-col justify-between gap-4">
                  <p className="text-xs sm:text-sm text-[#555555] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-black/10">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.software.slice(0, 3).map((sw, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[10px] uppercase px-2 py-0.5 rounded-xs bg-black/5 text-[#444444]"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>

                    {/* Circular Action Button */}
                    <div className="w-10 h-10 rounded-full bg-black text-white group-hover:bg-[#F7A928] group-hover:text-black flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-xs">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
