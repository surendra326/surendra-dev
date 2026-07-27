'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Send, Sparkles } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-2xl backdrop-blur-xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Avatar */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Surendra Kumar Portfolio Home"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/surendra-kumar.jpg"
                alt="Surendra Kumar"
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-100 tracking-tight flex items-center gap-1">
                Surendra<span className="text-cyan-400">.dev</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                Senior Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800 backdrop-blur-xl shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-cyan-300 rounded-full hover:bg-slate-800/80 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Status Pill */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Available for Hire
            </div>

            <a
              href="#contact"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-sm hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              <Send className="w-4 h-4" />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900/90 text-slate-200 hover:text-cyan-300 border border-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800/80 px-4 pt-4 pb-6 mt-3 space-y-3 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-slate-200 hover:text-cyan-300 hover:bg-slate-800/50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Available for Hire
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 text-slate-950 font-black text-sm"
            >
              <Send className="w-4 h-4" />
              Hire Me Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
