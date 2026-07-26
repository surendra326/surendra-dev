'use client';

import { ArrowRight, Download, Mail, Phone, MapPin, Sparkles, Server, Layers, Database, ShieldCheck, ExternalLink } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-radial-glow">
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Full Stack Developer • PHP / Laravel / React.js</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100">
                Hi, I'm <span className="text-gradient">{resumeData.personal.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-wide">
                PHP Laravel Full Stack Developer
              </p>
            </div>

            {/* Bio Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {resumeData.personal.bio} Proven expertise in architecting robust REST APIs, enterprise ERPs, EdTech platforms, and Stripe payment gateway integrations.
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {resumeData.personal.location}
              </span>
              <a
                href={`mailto:${resumeData.personal.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {resumeData.personal.email}
              </a>
              <a
                href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {resumeData.personal.phone}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all"
              >
                View Key Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 font-semibold text-sm transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Cards Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-6 space-y-6 relative overflow-hidden border-slate-700/60 shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              {/* Header Box */}
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                    Core Technical Stack
                  </span>
                </div>
                <span className="text-xs text-slate-400">Lucknow, IN</span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {resumeData.personal.stats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-2xl sm:text-3xl font-extrabold text-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Featured Key Competencies */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Featured Capabilities
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60 text-xs text-slate-300">
                    <Server className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100">Scalable Backend Architecture:</strong> Laravel, CodeIgniter & REST APIs with RBAC security.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60 text-xs text-slate-300">
                    <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100">Modern Frontend:</strong> React.js, Next.js & Alpine.js interactive dashboards.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800/60 text-xs text-slate-300">
                    <Database className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-100">Database Optimization:</strong> High-concurrency MySQL schemas & MongoDB.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
