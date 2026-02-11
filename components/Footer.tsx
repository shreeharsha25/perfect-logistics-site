import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Globe, Shield, Terminal, BookOpen, Cpu } from 'lucide-react';
import { Logo } from './ui/Logo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0f19] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-industrial-primary/30 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-industrial-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Identity */}
          <div className="flex flex-col gap-8">
            <div className="brightness-0 invert opacity-90">
              <Logo className="h-12" showText={true} />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Specialized petroleum logistics and infrastructure solution provider. A cluster of technical excellence serving India's core energy sector since 2003.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold uppercase tracking-widest text-slate-300">
                <Shield size={12} className="text-industrial-primary" /> PESO Certified
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold uppercase tracking-widest text-slate-300">
                <Globe size={12} className="text-industrial-accent" /> PAN India
              </div>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 relative">
              Solutions
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-industrial-primary" />
            </h3>
            <ul className="space-y-4 text-slate-400 text-[13px] font-medium">
              {[
                "Tank Cleaning (UG/AG)",
                "Pipeline Engineering",
                "Calibration Services",
                "O&M For OMCs",
                "PESO Compliance"
              ].map((item, i) => (
                <li key={i}>
                  <Link to="/services" className="hover:text-industrial-primary transition-colors flex items-center gap-2 group">
                    <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }}>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 inline mr-2" />
                      {item}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Strategic Presence */}
          <div>
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 relative">
              Presence
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-industrial-accent" />
            </h3>
            <div className="space-y-6">
              <div className="group cursor-default">
                <h4 className="text-slate-200 text-sm font-bold mb-1 group-hover:text-industrial-accent transition-colors">Global Hub</h4>
                <p className="text-slate-500 text-xs">Singapore (South East Asia Coordination)</p>
              </div>
              <div className="group cursor-default">
                <h4 className="text-slate-200 text-sm font-bold mb-1 group-hover:text-industrial-accent transition-colors">National HQ</h4>
                <p className="text-slate-500 text-xs">Mangalore, Karnataka</p>
              </div>
              <div className="group cursor-default">
                <h4 className="text-slate-200 text-sm font-bold mb-1 group-hover:text-industrial-accent transition-colors">Regional Hubs</h4>
                <p className="text-slate-500 text-xs">Chennai, Bangalore, Noida, Kochi</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div>
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em] mb-8 relative">
              HQ Connect
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-white" />
            </h3>
            <ul className="space-y-5">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-industrial-primary flex-shrink-0 group-hover:bg-industrial-primary group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Inquiry</span>
                  <a href="mailto:info@perfectlogistics.in" className="text-sm font-medium hover:text-industrial-primary transition-colors">info@perfectlogistics.in</a>
                </div>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-industrial-accent flex-shrink-0 group-hover:bg-industrial-accent group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Direct Line</span>
                  <a href="tel:+918242409905" className="text-sm font-medium hover:text-industrial-accent transition-colors">+91 824 240 9905</a>
                </div>
              </li>
            </ul>
            <div className="mt-8">
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 bg-industrial-primary hover:bg-green-600 transition-all text-xs font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-green-900/20">
                   Request Technical Brief
                 </Link>
               </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-[11px] font-medium text-slate-500 tracking-wider">
              © {currentYear} PERFECT LOGISTICS. INDUSTRIAL EXECUTION UNIT.
            </p>
            <div className="h-[10px] w-[1px] bg-white/10 hidden md:block" />
            <div className="flex gap-4">
               <Link to="/privacy" className="text-[10px] text-slate-600 hover:text-white transition-colors uppercase font-bold tracking-widest">Privacy</Link>
               <Link to="/terms" className="text-[10px] text-slate-600 hover:text-white transition-colors uppercase font-bold tracking-widest">Terms</Link>
               <Link to="/technical-manual" className="text-[10px] text-industrial-primary hover:text-white transition-colors uppercase font-bold tracking-widest flex items-center gap-1.5">
                 <BookOpen size={10} /> Technical Manual
               </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
             <div className="flex items-center gap-4 text-slate-600">
                <span className="text-[9px] uppercase font-bold tracking-[0.3em]">Built for Industrial Resilience</span>
                <div className="w-1.5 h-1.5 rounded-full bg-industrial-primary animate-pulse" />
             </div>

             <div className="hidden md:block w-[1px] h-3 bg-white/10" />

             {/* Forgestack Badge */}
             <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-default group">
                <Cpu size={12} className="text-industrial-muted group-hover:text-industrial-accent transition-colors" />
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-white transition-colors">
                  Forgestack Labs LLP
                </span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;