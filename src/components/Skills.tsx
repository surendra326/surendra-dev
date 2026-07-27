'use client';

import { Code2, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { resumeData } from '@/data/resumeData';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />;
      case 1:
        return <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />;
      case 2:
        return <Database className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />;
      default:
        return <Wrench className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 relative bg-[#070b14]/80">
      
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/10 rounded-full blur-[110px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
            Skills & Technical Mastery
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Engineering Proficiency & Stack
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
            Detailed matrix of backend frameworks, frontend architectures, database engines, AI integrations, and developer tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {resumeData.skillCategories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="glass-card rounded-3xl p-5 sm:p-6 space-y-5 sm:space-y-6 border-slate-800 hover:border-indigo-500/50 transition-all duration-300 shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3.5 sm:pb-4">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner shrink-0">
                  {getCategoryIcon(catIdx)}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-3.5 sm:space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-medium text-slate-200 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                      {skill.level && (
                        <span className="text-xs font-mono text-cyan-300 font-bold shrink-0 ml-2">
                          <AnimatedCounter value={`${skill.level}%`} duration={1800} />
                        </span>
                      )}
                    </div>
                    
                    {/* Animated Progress Bar */}
                    {skill.level && (
                      <div className="w-full h-1.5 sm:h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
