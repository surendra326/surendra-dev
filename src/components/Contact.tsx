'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, Check, Copy, MessageSquare, ExternalLink } from 'lucide-react';
import { resumeData } from '@/data/resumeData';

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const whatsappNumber = '916307220490';
  const directWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi Surendra, I would like to discuss a project / job opportunity with you.')}`;

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Format WhatsApp text payload with name, email, subject & message
    const textPayload = `Hi Surendra,\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject || 'General Inquiry'}\n\n*Message:*\n${formData.message}`;
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textPayload)}`;

    // Redirect / Open WhatsApp directly
    window.open(waUrl, '_blank');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-[#070b14]/95 border-t border-slate-900">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/10 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-lg">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            Let's Connect & Collaborate
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-100 tracking-tight">
            Get In Touch With Surendra
          </h2>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg">
            Have a project, full stack role, or query? Reach out directly via WhatsApp (+91 6307220490) or fill in the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-5 sm:p-8 rounded-3xl space-y-5 sm:space-y-6 border-slate-800 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 border-b border-slate-800 pb-3 sm:pb-4">
                Direct Contact Details
              </h3>

              {/* Direct WhatsApp High Priority Card */}
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 sm:p-4 rounded-2xl bg-[#25D366]/10 border-2 border-[#25D366]/40 flex items-center justify-between gap-3 hover:bg-[#25D366]/20 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[#25D366] text-slate-950 flex items-center justify-center font-bold shrink-0 shadow-md">
                    <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-950 text-slate-950" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-[#25D366] font-bold uppercase tracking-wider truncate">
                      Instant WhatsApp Chat
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-slate-100 group-hover:text-[#25D366] transition-colors font-mono truncate">
                      +91 6307220490
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#25D366] group-hover:scale-125 transition-transform shrink-0" />
              </a>

              {/* Email Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 sm:space-y-2 hover:border-cyan-500/40 transition-colors shadow-inner">
                <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
                  <span className="flex items-center gap-2 font-semibold">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                    Email Address
                  </span>
                  <button
                    onClick={() => handleCopy(resumeData.personal.email, 'email')}
                    className="text-cyan-400 hover:text-cyan-300 text-[11px] sm:text-xs flex items-center gap-1 focus:outline-none font-bold"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedEmail ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="text-sm sm:text-base font-bold text-slate-100 hover:text-cyan-300 block transition-colors font-mono truncate"
                >
                  {resumeData.personal.email}
                </a>
              </div>

              {/* Phone Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5 sm:space-y-2 hover:border-indigo-500/40 transition-colors shadow-inner">
                <div className="text-xs text-slate-400 font-medium flex items-center justify-between">
                  <span className="flex items-center gap-2 font-semibold">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-indigo-400" />
                    Phone / Call
                  </span>
                  <button
                    onClick={() => handleCopy(resumeData.personal.phone, 'phone')}
                    className="text-indigo-400 hover:text-indigo-300 text-[11px] sm:text-xs flex items-center gap-1 focus:outline-none font-bold"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedPhone ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <a
                  href={`tel:${resumeData.personal.phone.replace(/\s+/g, '')}`}
                  className="text-sm sm:text-base font-bold text-slate-100 hover:text-indigo-300 block transition-colors font-mono truncate"
                >
                  {resumeData.personal.phone}
                </a>
              </div>

              {/* Location Box */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1 hover:border-emerald-500/40 transition-colors shadow-inner">
                <div className="text-xs text-slate-400 font-medium flex items-center gap-2 font-semibold">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                  Primary Location
                </div>
                <div className="text-sm sm:text-base font-bold text-slate-100">
                  {resumeData.personal.location}
                </div>
              </div>

              {/* LinkedIn Link */}
              <div className="pt-1">
                <a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 sm:py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-300 font-bold text-xs sm:text-sm transition-all duration-300 shadow-md"
                >
                  <Globe className="w-4 h-4 text-cyan-400" />
                  Connect on LinkedIn
                </a>
              </div>

            </div>
          </div>

          {/* Right Interactive Form - Sends directly via WhatsApp */}
          <div className="lg:col-span-7">
            <div className="glass-card p-5 sm:p-8 rounded-3xl space-y-5 sm:space-y-6 border-slate-800 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3 sm:pb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                  Send Direct Message
                </h3>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-[11px] sm:text-xs font-bold">
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" /> Direct WhatsApp Link
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 text-center space-y-3 shadow-xl">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-slate-950 mx-auto flex items-center justify-center font-bold">
                    <Check className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-[#25D366]">
                    Opening WhatsApp...
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-200">
                    Your message details have been formatted and opened directly in WhatsApp (+91 6307220490).
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-[#25D366] transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-[#25D366] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Full Stack Role"
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-[#25D366] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300">Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Surendra, we are interested in discussing a web project..."
                      className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-[#25D366] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 sm:py-4 rounded-2xl bg-[#25D366] hover:bg-[#22c35e] text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                  >
                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 text-slate-950 shrink-0" />
                    <span>Send Message via WhatsApp (+91 6307220490)</span>
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-slate-400 text-center pt-1 font-medium">
                    ⚡ Form fills pre-formatted message and opens directly in WhatsApp (+91 6307220490)
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
