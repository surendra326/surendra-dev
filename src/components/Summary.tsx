import { UserCheck, Award, GraduationCap, CheckCircle2, Zap, Shield, CreditCard, Cpu } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Summary() {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: 'Full Stack Web Engineering',
      description: '3.5+ years building end-to-end web applications with PHP Laravel, CodeIgniter, REST APIs, React.js, and Alpine.js.'
    },
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: 'ERP & DMS Automation',
      description: 'Expertise in distribution management systems, automating invoicing workflows to eliminate 35% of manual administrative tasks.'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-indigo-400" />,
      title: 'Payment Gateway & APIs',
      description: 'Specialist in secure Stripe payment integrations, third-party RESTful APIs, and webhook processing.'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Database & Security Optimization',
      description: 'Hands-on experience in query tuning, MySQL schema optimization for high concurrency, and RBAC authentication.'
    }
  ];

  const softSkills = ['Team Collaboration', 'Problem Solving', 'Agile Methodologies', 'Client Relations'];

  return (
    <section id="about" className="py-20 relative bg-slate-950/60 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            About & Summary
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Delivering High-Impact Web Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {resumeData.personal.summary}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl space-y-4 hover:border-emerald-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Education & Soft Skills Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Education Box */}
          <div className="lg:col-span-5 glass-card p-6 rounded-2xl border-slate-800 flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                Academic Degree
              </div>
              <div className="text-xl font-bold text-slate-100">
                {resumeData.personal.education.degree}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Completed {resumeData.personal.education.year} • Computer Science Foundation
              </div>
            </div>
          </div>

          {/* Soft Skills Box */}
          <div className="lg:col-span-7 glass-card p-6 rounded-2xl border-slate-800 space-y-3">
            <div className="text-xs uppercase tracking-wider font-semibold text-cyan-400 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Professional & Soft Skills
            </div>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
