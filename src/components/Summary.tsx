'use client';

import { UserCheck, Award, GraduationCap, CheckCircle2, Zap, Shield, CreditCard, Cpu } from 'lucide-react';
import { resumeData } from '@/data/resumeData';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Summary() {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
      title: 'Full Stack Web Engineering',
      description: '4+ years building scalable SaaS web applications with PHP Laravel, Next.js, Inertia.js, CodeIgniter, React.js, and Node.js.'
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />,
      title: 'ERP & DMS Automation',
      description: 'Expertise in distribution management systems, automating invoicing workflows to eliminate 35% of manual administrative effort.'
    },
    {
      icon: <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
      title: 'Payment Gateway & AI APIs',
      description: 'Specialist in Stripe payment integrations, OpenAI/Claude/Gemini AI tools, custom webhooks, and RESTful API engineering.'
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />,
      title: 'Database & Security Optimization',
      description: 'Hands-on experience tuning MySQL queries for high concurrency, designing robust SQL schemas, and implementing RBAC security.'
    }
  ];

  const softSkills = ['Technical Leadership', 'Team Collaboration', 'Problem Solving', 'Agile / Jira', 'Client Relations'];

  return (
    <section id="about" className="py-16 sm:py-24 relative bg-[#070b14]/70 border-t border-b border-slate-900">
      
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-10 w-72 sm:w-80 h-72 sm:h-80 bg-indigo-500/10 rounded-full blur-[90px] sm:blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
            About & Summary
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Architecting High-Performance Web Solutions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed">
            {resumeData.personal.summary}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card p-5 sm:p-6 rounded-3xl space-y-3 sm:space-y-4 border-slate-800 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                {pillar.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Stats Counter Bar */}
        <div className="p-5 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl mb-12 sm:mb-16 shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
            
            <div className="space-y-1 pt-3 sm:pt-4 lg:pt-0">
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                <AnimatedCounter value="4+" duration={2000} />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Years Professional Exp.
              </div>
            </div>

            <div className="space-y-1 pt-3 sm:pt-4 lg:pt-0">
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                <AnimatedCounter value="32+" duration={2200} />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Live Projects Delivered
              </div>
            </div>

            <div className="space-y-1 pt-3 sm:pt-4 lg:pt-0">
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                <AnimatedCounter value="35%" duration={2400} />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Manual Effort Reduced
              </div>
            </div>

            <div className="space-y-1 pt-3 sm:pt-4 lg:pt-0">
              <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                <AnimatedCounter value="100%" duration={2500} />
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Client Satisfaction
              </div>
            </div>

          </div>
        </div>

        {/* Education & Soft Skills Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Education Box */}
          <div className="lg:col-span-5 glass-card p-5 sm:p-8 rounded-3xl border-slate-800 flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-cyan-500 to-emerald-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20">
              <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-cyan-400">
                Academic Background
              </div>
              <div className="text-base sm:text-xl font-black text-slate-100 mt-0.5">
                {resumeData.personal.education.degree}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Completed {resumeData.personal.education.year} • Computer Science Foundation
              </div>
            </div>
          </div>

          {/* Soft Skills & Leadership */}
          <div className="lg:col-span-7 glass-card p-5 sm:p-8 rounded-3xl border-slate-800 space-y-3 sm:space-y-4 flex flex-col justify-center">
            <div className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-indigo-400 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
              Leadership & Professional Strengths
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold hover:border-cyan-500/40 hover:text-cyan-300 transition-colors shadow-inner"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
