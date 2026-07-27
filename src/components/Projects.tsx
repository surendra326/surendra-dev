'use client';

import { useState } from 'react';
import { Layers, ExternalLink, Sparkles, TrendingUp, ChevronDown, ChevronUp, GraduationCap } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [showAll, setShowAll] = useState<boolean>(false);

  const categories = [
    'All',
    'EdTech',
    'ERP & DMS',
    'Real Estate',
    'E-Commerce',
    'CRM',
    'Social & B2B',
    'AgriTech & Fintech',
    'Hospitality',
    'Healthcare'
  ];

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setShowAll(false);
  };

  const filteredProjects = activeCategory === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);
  const remainingCount = filteredProjects.length - 6;

  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-[#070b14]/90 border-t border-slate-900">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-indigo-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
            Key Projects & Portfolio Showcase
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Production Web Apps & SaaS Platforms
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
            Highlighting live platforms built for EdTech (including <span className="text-cyan-300 font-bold">TutorInCity</span> & <span className="text-indigo-300 font-bold">TuitionMentor</span>), enterprise ERPs, real estate marketplaces, and high-concurrency systems.
          </p>
        </div>

        {/* Filter Category Tabs - Scrollable on mobile */}
        <div className="flex items-center sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-0 mb-8 sm:mb-12 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 text-slate-950 shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-slate-100 hover:border-slate-700'
                }`}
              >
                {cat} {cat === 'EdTech' && '🎓'}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project) => {
            const isHighlightProject = project.id === 'tutor-in-city' || project.id === 'tuition-mentor';
            
            return (
              <div
                key={project.id}
                className={`glass-card rounded-3xl p-5 sm:p-6 flex flex-col justify-between space-y-5 sm:space-y-6 group relative overflow-hidden ${
                  isHighlightProject
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10 ring-1 ring-cyan-500/20'
                    : 'border-slate-800 hover:border-indigo-500/50'
                }`}
              >
                {/* Highlight Glow for Top EdTech Platforms */}
                {isHighlightProject && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />
                )}

                <div className="space-y-3 sm:space-y-4 relative z-10">
                  {/* Category & Featured Badge Header */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-mono font-bold flex items-center gap-1.5 ${
                      project.category === 'EdTech'
                        ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-300'
                        : 'bg-slate-900 border border-slate-800 text-indigo-300'
                    }`}>
                      {project.category === 'EdTech' && <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />}
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded-full shadow-sm">
                        <Sparkles className="w-3 h-3 text-amber-400" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Domain Link */}
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-400 hover:text-cyan-300 hover:underline inline-flex items-center gap-1.5 mt-1 font-mono font-semibold truncate max-w-full"
                    >
                      <span className="truncate">{project.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Impact Highlight Box */}
                  {project.impact && (
                    <div className="p-3 sm:p-3.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 flex items-start gap-2 text-xs text-slate-200 font-medium shadow-inner">
                      <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{project.impact}</span>
                    </div>
                  )}
                </div>

                {/* Card Footer Tech Stack & Live Action Button */}
                <div className="space-y-4 pt-4 border-t border-slate-800/80 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 text-[10px] sm:text-[11px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 text-slate-200 hover:text-slate-950 font-bold text-xs transition-all duration-300 border border-slate-800 hover:border-cyan-400 shadow-md"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More / Show Less Button */}
        {filteredProjects.length > 6 && (
          <div className="mt-10 sm:mt-14 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
            >
              {showAll ? (
                <>
                  <span>Show Less Projects</span>
                  <ChevronUp className="w-4 h-4 stroke-[2.5]" />
                </>
              ) : (
                <>
                  <span>View All {filteredProjects.length} Projects ({remainingCount} More)</span>
                  <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
