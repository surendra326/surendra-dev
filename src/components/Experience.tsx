import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Career History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Work Experience Timeline
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Proven engineering journey across scalable backend architectures, SaaS platforms, and enterprise solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-12 space-y-12 pl-6 sm:pl-10">
          {resumeData.experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Marker */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-4 border-slate-950 flex items-center justify-center ${
                exp.isCurrent ? 'bg-emerald-400 shadow-lg shadow-emerald-500/50' : 'bg-slate-700 group-hover:bg-cyan-400'
              } transition-colors`} />

              {/* Card content */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-6 hover:border-emerald-500/40 transition-all">
                
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-base font-medium text-slate-300 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-emerald-400" />
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-400 shrink-0">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets List */}
                <ul className="space-y-3">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-mono"
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
