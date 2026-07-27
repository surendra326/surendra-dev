import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Summary from '@/components/Summary';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="relative flex-1 bg-[#070b14] text-slate-100 overflow-hidden">
      {/* Floating Global Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About & Summary Section */}
      <Summary />

      {/* Work Experience Timeline */}
      <Experience />

      {/* Projects Showcase */}
      <Projects />

      {/* Skills Matrix */}
      <Skills />

      {/* Contact Section with WhatsApp Integration */}
      <Contact />

      {/* Global Floating WhatsApp Quick Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </main>
  );
}
