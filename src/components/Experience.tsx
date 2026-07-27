'use client';

import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 relative bg-[#070b14]/60">
      
      {/* Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-80 h-72 sm:h-80 bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
            Career Journey
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Professional Experience Timeline
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
            Proven software engineering progression across enterprise web applications, AI integrations, SaaS architectures, and full-stack deployments.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-2.5 sm:ml-8 md:ml-12 space-y-8 sm:space-y-12 pl-4 sm:pl-10">
          {resumeData.experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Marker - Perfectly Centered on Border Line */}
              <div className={`absolute -left-[21px] sm:-left-[51px] top-3 sm:top-4 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-slate-950 flex items-center justify-center ${
                exp.isCurrent ? 'bg-cyan-400 shadow-lg shadow-cyan-500/50' : 'bg-slate-700 group-hover:bg-indigo-400'
              } transition-colors duration-300`} />

              {/* Timeline Card */}
              <div className="glass-card p-5 sm:p-8 rounded-3xl space-y-4 sm:space-y-6 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-b border-slate-800/80 pb-3 sm:pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <h3 className="text-lg sm:text-2xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[10px] sm:text-xs font-bold shadow-sm">
                          <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" /> Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-slate-300 flex items-center gap-1.5 sm:gap-2">
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400 shrink-0" />
                      <span>{exp.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
                    <span className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 font-mono font-medium text-[11px] sm:text-xs">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{exp.period}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-2.5 sm:space-y-3">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 sm:gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Skills Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 border-t border-slate-800/60">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 text-[10px] sm:text-xs font-mono font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
