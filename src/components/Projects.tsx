'use client';

import { useState } from 'react';
import { Layers, ExternalLink, Sparkles, CheckCircle, TrendingUp, ShieldCheck } from 'lucide-react';
import { resumeData, ProjectItem } from '@/data/resumeData';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'ERP & DMS', 'EdTech', 'E-Commerce', 'Healthcare', 'CRM'];

  const filteredProjects = activeCategory === 'All'
    ? resumeData.projects
    : resumeData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Key Projects Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Production Web Applications & Platforms
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A portfolio of real-world enterprise applications, ERPs, EdTech LMS platforms, and high-traffic event systems.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-6 group border-slate-800 hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Category & Status Header */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-mono font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Title & Domain */}
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                    {project.title}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 hover:underline inline-flex items-center gap-1 mt-1 font-mono"
                  >
                    {project.domain}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Impact Metric Box */}
                {project.impact && (
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 flex items-start gap-2.5 text-xs text-emerald-300 font-medium">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{project.impact}</span>
                  </div>
                )}
              </div>

              {/* Card Footer Tech Stack & External Action */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800/90 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-500 text-slate-300 hover:text-slate-950 font-semibold text-xs transition-all border border-slate-800 hover:border-emerald-400"
                >
                  <span>Visit Live Project ({project.domain})</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
