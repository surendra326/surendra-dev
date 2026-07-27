'use client';

import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Code2, Award, ExternalLink, Cpu, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { resumeData } from '@/data/resumeData';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Hero() {
  const highlights = [
    { icon: <Cpu className="w-3.5 h-3.5 text-cyan-400" />, label: 'AI APIs (OpenAI/Claude/Gemini)' },
    { icon: <Zap className="w-3.5 h-3.5 text-emerald-400" />, label: '35% Automated Invoicing ERP' },
    { icon: <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />, label: 'Stripe Gateway & Enterprise RBAC' },
  ];

  return (
    <section className="relative min-h-screen pt-24 pb-12 sm:pt-32 sm:pb-20 flex items-center justify-center overflow-hidden bg-[#070b14] text-slate-100">
      {/* Dynamic Animated Ambient Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 sm:w-[30rem] sm:h-[30rem] bg-cyan-500/15 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-60 h-60 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-indigo-950/80 border border-indigo-500/35 text-indigo-300 text-[11px] sm:text-xs md:text-sm font-semibold backdrop-blur-md shadow-lg shadow-indigo-500/5">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 animate-spin shrink-0" style={{ animationDuration: '8s' }} />
              <span className="tracking-wide">Senior Full Stack & AI Software Engineer</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-100 leading-[1.15] sm:leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">{resumeData.personal.name}</span>
              </h1>
              <p className="text-base sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-200 via-indigo-200 to-cyan-200 bg-clip-text text-transparent tracking-wide">
                Senior PHP Laravel & Full Stack Developer
              </p>
            </div>

            {/* Articulate Executive Bio Paragraph */}
            <div className="space-y-3">
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                Senior Software Engineer (4+ Yrs Exp) specializing in high-concurrency web applications, AI integrations, enterprise ERPs, and custom SaaS platforms built with <strong className="text-slate-100 font-semibold">PHP Laravel, Next.js, Inertia.js, React.js, and Node.js</strong>.
              </p>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                Proven engineering lead across high-impact production platforms — including{' '}
                <a href="https://lawrenceclasses.in" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold hover:underline decoration-cyan-400/60 inline-flex items-center gap-0.5">
                  Lawrence Classes <ExternalLink className="w-3 h-3 text-cyan-400 inline" />
                </a>,{' '}
                <a href="https://wynconnect.in" target="_blank" rel="noopener noreferrer" className="text-cyan-300 font-bold hover:underline decoration-cyan-400/60 inline-flex items-center gap-0.5">
                  Wynconnect CRM <ExternalLink className="w-3 h-3 text-cyan-400 inline" />
                </a>,{' '}
                <a href="https://vyaparnetwork.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 font-bold hover:underline decoration-indigo-400/60 inline-flex items-center gap-0.5">
                  Vyapar Network <ExternalLink className="w-3 h-3 text-indigo-400 inline" />
                </a>, and{' '}
                <a href="https://portal.pakka.com" target="_blank" rel="noopener noreferrer" className="text-emerald-300 font-bold hover:underline decoration-emerald-400/60 inline-flex items-center gap-0.5">
                  Pakka Portal ERP <ExternalLink className="w-3 h-3 text-emerald-400 inline" />
                </a>.
              </p>
            </div>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] sm:text-xs text-slate-300 font-medium">
                  {h.icon}
                  <span>{h.label}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Chips - Mobile Optimized */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-inner max-w-full">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{resumeData.personal.location}</span>
              </span>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all shadow-inner max-w-full truncate"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{resumeData.personal.email}</span>
              </a>
              <a
                href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-300 transition-all shadow-inner max-w-full"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>{resumeData.personal.phone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <span>View Live Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:text-cyan-300 hover:border-cyan-500/50 font-semibold text-sm backdrop-blur-md transition-all duration-300"
              >
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right Profile Photo & Animated Stats Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="rounded-3xl p-4 sm:p-6 relative overflow-hidden bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-4 sm:space-y-5">
              
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-emerald-400" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              
              {/* Profile Photo Container */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl group bg-slate-950">
                <Image
                  src="/surendra-kumar.jpg"
                  alt="Surendra Kumar - Senior Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                  className="object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient overlay at bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20 opacity-80" />

                {/* Overlaid Status Badge */}
                <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-[11px] sm:text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Available for Hire
                </div>

                {/* Overlaid Info Footer */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div className="px-3 py-1.5 sm:px-3.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-slate-100 font-bold flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    Surendra Kumar
                  </div>
                  <div className="px-3 py-1.5 sm:px-3.5 rounded-xl bg-indigo-950/90 backdrop-blur-md border border-indigo-500/40 text-indigo-300 font-bold flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                    4+ Years Exp
                  </div>
                </div>
              </div>

              {/* Animated Numbers Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                {resumeData.personal.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3 sm:p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 group shadow-md text-left"
                  >
                    <div className="text-xl sm:text-3xl font-black bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                      <AnimatedCounter value={stat.value} duration={2200} />
                    </div>
                    <div className="text-[11px] sm:text-xs text-slate-400 font-medium mt-0.5 sm:mt-1 group-hover:text-slate-200 transition-colors leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
