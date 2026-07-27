import { ArrowUp, Code2, Heart, MapPin } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-cyan-500 to-emerald-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/10">
              <Code2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-base font-extrabold text-slate-100">
                {resumeData.personal.name}
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                <span>Lucknow • Bhadohi • Varanasi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-semibold">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </nav>

          {/* Back to top */}
          <a
            href="#"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-300 text-xs font-bold transition-all shadow-md"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>

        </div>

        {/* Customized Copyright Footer Branding */}
        <div className="pt-8 text-center space-y-2">
          <div className="text-xs sm:text-sm font-medium text-slate-300 flex items-center justify-center gap-1.5 flex-wrap">
            <span>Designed & Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse inline" />
            <span>by <strong className="text-slate-100 font-bold">Surendra Kumar</strong> © 2025 - 2026</span>
          </div>
          <div className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">
            FULL-STACK SOFTWARE ENGINEER & AI SPECIALIST - LUCKNOW • BHADOHI • VARANASI, INDIA
          </div>
        </div>

      </div>
    </footer>
  );
}
