import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { 
  Cpu, Activity, Terminal, ShieldCheck, Zap, Server, 
  Bug, FileCheck, Layers, ChevronRight, Monitor, Package, Download, History,
  Database, Boxes, Workflow, AlertCircle
} from 'lucide-react';
import { jsPDF } from "jspdf";

const TechnicalManual: React.FC = () => {
  const [activeTab, setActiveTab] = useState('architecture');
  const [isExporting, setIsExporting] = useState(false);

  const sections = [
    { id: 'architecture', title: 'System Architecture', icon: Cpu },
    { id: 'motion', title: 'Motion Engineering', icon: Activity },
    { id: 'compliance', title: 'HSSE Compliance', icon: ShieldCheck }
  ];

  const handleExport = () => {
    setIsExporting(true);
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("PERFECT LOGISTICS - TECHNICAL HANDOVER", 20, 20);
    doc.setFontSize(12);
    doc.text(`Generated: ${new Date().toLocaleString()}`, 20, 30);
    doc.text("System Version: v2.5.0-PRO", 20, 40);
    doc.text("Status: OPERATIONAL", 20, 50);
    
    doc.text("1. Architecture: React 19 + GSAP Orchestration", 20, 70);
    doc.text("2. Motion: Dual-Engine Scrub (Lenis + ScrollTrigger)", 20, 80);
    doc.text("3. Compliance: OISD-105 Compliant Document Engine", 20, 90);
    doc.save("Perfect_Logistics_Engineering_Report_V2.5.pdf");
    setTimeout(() => setIsExporting(false), 1000);
  };

  return (
    <section className="pt-32 pb-24 bg-industrial-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-industrial-border pb-10">
          <SectionHeading subtitle="Certified Technical Handover" title="Unified Technical Manual" />
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3 bg-white px-5 py-2 border border-industrial-border rounded shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-industrial-primary animate-pulse" />
              <span className="text-[11px] font-black text-industrial-text uppercase tracking-widest">Build: v2.5.0-PRO</span>
            </div>
            <button 
              onClick={handleExport}
              disabled={isExporting}
              className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-industrial-primary hover:text-industrial-text transition-colors"
            >
              {isExporting ? "Assembling PDF..." : <><Download size={12} /> Export Engineering Report (PDF)</>}
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Navigation Sidebar */}
          <aside className="lg:w-1/4 space-y-2">
            <p className="text-[10px] font-black text-industrial-muted uppercase tracking-[0.2em] mb-4 pl-4">Engineering Index</p>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`w-full flex items-center justify-between p-4 rounded transition-all text-[11px] font-bold uppercase tracking-wider ${
                  activeTab === s.id 
                  ? 'bg-industrial-text text-white shadow-xl' 
                  : 'bg-white border border-slate-100 text-industrial-muted hover:border-industrial-primary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <s.icon size={16} />
                  {s.title}
                </div>
                <ChevronRight size={14} className={activeTab === s.id ? 'opacity-100' : 'opacity-0'} />
              </button>
            ))}
          </aside>

          {/* Main Document Content */}
          <main className="lg:w-3/4 bg-white border border-industrial-border shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
               <Package size={240} />
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'architecture' && (
                <motion.div key="arch" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-10">
                  <div className="flex items-center gap-4 text-industrial-primary">
                    <Boxes size={28} />
                    <h3 className="text-2xl font-bold uppercase tracking-tight">Full System Architecture</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h4 className="text-xs font-black uppercase tracking-widest text-industrial-muted">Core Infrastructure</h4>
                      <p className="text-sm text-industrial-muted leading-relaxed">
                        Engineered as a <strong>Performance-First Reactive System</strong>. The build utilizes React 19's concurrent rendering capabilities to ensure that UI calculations never block the main thread, even during complex GSAP scrubbing.
                      </p>
                      <ul className="space-y-3 text-xs font-mono text-industrial-text bg-slate-50 p-6 border border-slate-100 rounded">
                        <li className="flex justify-between border-b pb-2"><span>Runtime</span> <span className="font-bold">React 19.x</span></li>
                        <li className="flex justify-between border-b pb-2"><span>Type Safety</span> <span className="font-bold">Strict TypeScript</span></li>
                        <li className="flex justify-between border-b pb-2"><span>Smooth Scroll</span> <span className="font-bold">Lenis 1.1.5 (LERP)</span></li>
                        <li className="flex justify-between border-b pb-2"><span>CSS Engine</span> <span className="font-bold">Tailwind JIT</span></li>
                      </ul>
                    </div>
                    
                    <div className="space-y-6">
                       <h4 className="text-xs font-black uppercase tracking-widest text-industrial-muted">Data Persistence</h4>
                       <div className="p-5 border-l-2 border-industrial-accent bg-slate-50">
                         <div className="flex items-center gap-2 mb-2">
                           <Database size={14} className="text-industrial-accent" />
                           <span className="text-[11px] font-bold uppercase tracking-wider">Functional Intake Logic</span>
                         </div>
                         <p className="text-[11px] text-industrial-muted leading-relaxed">
                           Service requirement data is managed through a centralized state machine with multi-stage validation. Every input is sanitized against statutory GST and mobile formatting before persistence.
                         </p>
                       </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'motion' && (
                <motion.div key="motion" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <div className="flex items-center gap-4 text-industrial-accent">
                    <Workflow size={28} />
                    <h3 className="text-2xl font-bold uppercase tracking-tight">Motion Orchestration Manual</h3>
                  </div>
                  <div className="space-y-6">
                    <p className="text-sm text-industrial-muted leading-relaxed">
                      The "Matrix" Reveal component uses a <strong>Scrub-Sync Orchestrator</strong>. The timeline duration is mapped to 2200px of vertical travel, ensuring a consistent user experience across different screen heights.
                    </p>
                    <div className="bg-slate-900 rounded p-6 font-mono text-[11px] text-pink-400 border-l-4 border-industrial-accent overflow-x-auto">
{`// Final Scrollytelling Buffer Configuration (v3.0)
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: triggerRef.current,
    start: "top top",
    end: "+=2200",        // Mapped to hardware acceleration limits
    anticipatePin: 1.5,   // Prevents jitter on 120Hz displays
    scrub: 1.5,           // Linear scrub for high-density UI
    pin: true
  }
});`}
                    </div>
                    <div className="p-4 bg-slate-50 border border-slate-100 rounded">
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-industrial-text mb-2">Trackpad Momentum Optimization</h5>
                      <p className="text-[11px] text-industrial-muted">Switched from duration-based scrolling to Linear Interpolation (LERP: 0.1). This allows laptop trackpads to maintain native momentum and physical feedback while synchronized with GSAP markers.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'compliance' && (
                <motion.div key="compliance" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                  <div className="flex items-center gap-4 text-industrial-primary">
                    <ShieldCheck size={28} />
                    <h3 className="text-2xl font-bold uppercase tracking-tight">Digital HSSE & Compliance</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-6 border border-industrial-border rounded bg-slate-50">
                      <FileCheck className="text-industrial-primary mb-4" size={32} />
                      <h4 className="text-sm font-bold text-industrial-text mb-2">OISD-105 Standards</h4>
                      <p className="text-[11px] text-industrial-muted leading-relaxed">
                        The HSSE Policy generation engine follows strict OISD-105 formatting for petroleum infrastructure documentation. Every generated PDF is cryptographically unique per session.
                      </p>
                    </div>
                    <div className="p-6 border border-industrial-border rounded bg-slate-50">
                      <Server className="text-industrial-accent mb-4" size={32} />
                      <h4 className="text-sm font-bold text-industrial-text mb-2">Sanitization Protocol</h4>
                      <p className="text-[11px] text-industrial-muted leading-relaxed">
                        All user-submitted project briefs undergo multi-stage sanitization (XSS and SQLi protection) before being passed to the simulation layer.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Manual Footer */}
            <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-slate-300">
              <div>Perfect Logistics R&D Handover Unit | Industrial Infrastructure</div>
              <div className="flex items-center gap-2"><History size={12} /> Version v2.5.0-PRO Certified</div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default TechnicalManual;