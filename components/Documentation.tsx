import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { 
  Cpu, 
  Layers, 
  Activity, 
  Terminal, 
  Box, 
  Code2, 
  ShieldCheck, 
  Database 
} from 'lucide-react';

const Documentation: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="pt-32 pb-20 bg-industrial-bg min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading subtitle="Architectural Overview" title="Technical Manual" />
          <div className="flex items-center gap-4 bg-white px-4 py-2 border border-industrial-border rounded shadow-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-industrial-primary animate-pulse" />
            <span className="text-[10px] font-bold text-industrial-muted uppercase tracking-[0.2em]">Build Version 2.5.0-PRO</span>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Section 1: Core Stack */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 border border-industrial-border shadow-sm rounded-sm relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5">
                 <Cpu size={120} />
               </div>
               <h3 className="text-xl font-bold text-industrial-text mb-6 flex items-center gap-3">
                 <Terminal size={20} className="text-industrial-primary" />
                 Engine & Framework
               </h3>
               <div className="grid md:grid-cols-2 gap-8">
                 <div>
                   <h4 className="text-xs font-black text-industrial-muted uppercase tracking-widest mb-3">Core Logic</h4>
                   <ul className="space-y-3 text-sm text-industrial-text">
                     <li className="flex justify-between border-b border-slate-100 pb-2">
                       <span>UI Library</span>
                       <span className="font-mono text-industrial-primary">React 19.x</span>
                     </li>
                     <li className="flex justify-between border-b border-slate-100 pb-2">
                       <span>Styling</span>
                       <span className="font-mono text-industrial-accent">Tailwind CSS</span>
                     </li>
                     <li className="flex justify-between border-b border-slate-100 pb-2">
                       <span>Routing</span>
                       <span className="font-mono text-slate-500">HashRouter v6</span>
                     </li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="text-xs font-black text-industrial-muted uppercase tracking-widest mb-3">Animation Orchestration</h4>
                   <p className="text-sm text-industrial-muted leading-relaxed">
                     The site uses a hybrid motion engine. <strong>GSAP ScrollTrigger</strong> handles heavy pinning and scrollytelling, while <strong>Framer Motion</strong> manages layout transitions and micro-interactions.
                   </p>
                 </div>
               </div>
            </div>

            {/* Section 2: Scrollytelling Mechanics */}
            <div className="bg-white p-8 border border-industrial-border shadow-sm rounded-sm">
               <h3 className="text-xl font-bold text-industrial-text mb-6 flex items-center gap-3">
                 <Activity size={20} className="text-industrial-accent" />
                 Infrastructure Reveal (Scrollytelling)
               </h3>
               <div className="bg-slate-900 rounded-lg p-6 mb-6 overflow-x-auto">
                 <code className="text-pink-400 text-xs leading-relaxed whitespace-pre">
{`// GSAP Timeline Configuration for InfrastructureScroll
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: triggerRef.current,
    start: "top top",
    end: "+=1500", // Journey duration
    scrub: 1,      // Smooth scroll synchronization
    pin: true,     // Section Locking
    invalidateOnRefresh: true
  }
});

tl.to(lineRef.current, { height: "65vh", duration: 1 });`}
                 </code>
               </div>
               <p className="text-sm text-industrial-muted">
                 The <code>InfrastructureScroll</code> component utilizes high-performance pinning. To prevent desync on mobile window resizing, a debounced <code>ScrollTrigger.refresh()</code> is attached to the window resize event.
               </p>
            </div>
          </motion.div>

          {/* Section 3: Design Tokens (Sidebar) */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-industrial-text text-white p-8 rounded-sm shadow-xl">
               <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                 <Box size={20} className="text-industrial-primary" />
                 Design Tokens
               </h3>
               <div className="space-y-6">
                 <div>
                   <span className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Primary Palette</span>
                   <div className="grid grid-cols-2 gap-2">
                     <div className="flex items-center gap-2">
                       <div className="w-4 h-4 rounded-sm bg-[#00A651]" />
                       <span className="text-[10px] font-mono">#00A651</span>
                     </div>
                     <div className="flex items-center gap-2">
                       <div className="w-4 h-4 rounded-sm bg-[#00ADEF]" />
                       <span className="text-[10px] font-mono">#00ADEF</span>
                     </div>
                   </div>
                 </div>
                 <div className="border-t border-white/10 pt-4">
                   <span className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2">Typography</span>
                   <p className="text-sm font-light">Inter Variable (300, 400, 600, 700)</p>
                   <p className="text-[10px] text-slate-400 mt-1">Fallback: sans-serif</p>
                 </div>
               </div>
            </div>

            <div className="bg-white p-8 border border-industrial-border shadow-sm rounded-sm">
               <h3 className="text-lg font-bold text-industrial-text mb-6 flex items-center gap-3">
                 <ShieldCheck size={20} className="text-industrial-primary" />
                 HSSE Engine
               </h3>
               <p className="text-xs text-industrial-muted leading-relaxed mb-4">
                 PDF generation is handled via <strong>jsPDF</strong>. The engine calculates brand-compliant coordinates for real-time document assembly, ensuring high-fidelity outputs for HSE charters.
               </p>
               <div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-[10px] font-mono">
                 <Code2 size={12} /> jspdf.output('blob')
               </div>
            </div>

            <div className="bg-white p-8 border border-industrial-border shadow-sm rounded-sm">
               <h3 className="text-lg font-bold text-industrial-text mb-6 flex items-center gap-3">
                 <Database size={20} className="text-industrial-accent" />
                 Data Integrity
               </h3>
               <p className="text-xs text-industrial-muted leading-relaxed">
                 The <code>ServiceRequirementForm</code> implements multi-stage validation:
               </p>
               <ul className="mt-4 space-y-2 text-[11px] text-industrial-text">
                 <li className="flex items-start gap-2">• Indian GST Identification (Regex)</li>
                 <li className="flex items-start gap-2">• Past-Date Prevention (Temporal Logic)</li>
                 <li className="flex items-start gap-2">• Multi-Select Unique Filtering</li>
               </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Technical Footer */}
        <div className="mt-20 pt-10 border-t border-industrial-border flex flex-col md:flex-row justify-between items-center text-industrial-muted text-[10px] uppercase font-bold tracking-widest">
           <div>System Architecture: Enterprise Next-Gen</div>
           <div className="mt-4 md:mt-0">© Perfect Logistics R&D Unit</div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;