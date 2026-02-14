import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Activity, HardHat, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const InfrastructureScroll: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let resizeTimer: number;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1.5,
          pin: true,
          anticipatePin: 1.5,
          invalidateOnRefresh: true,
        }
      });

      // Scale background text - ensure sharpness with backface-visibility via CSS
      tl.fromTo(bgTextRef.current, 
        { scale: 0.9, opacity: 0.03, filter: "blur(0px)" },
        { scale: 1.15, opacity: 0.08, duration: 1.5, ease: "none" }
      );

      // Expand horizontal axis with Bloom Effect
      tl.to(lineRef.current, { 
        width: "95%", 
        backgroundColor: "#00A651",
        boxShadow: "0 0 40px 5px rgba(0, 166, 81, 0.4)", // Added bloom
        duration: 0.8, 
        ease: "power2.inOut" 
      }, 0.5);

      // Morph into technical container
      tl.to(lineRef.current, {
        height: window.innerWidth < 768 ? "85vh" : "75vh",
        backgroundColor: "#ffffff",
        borderWidth: "1px",
        borderColor: "#f1f5f9",
        borderRadius: "2px",
        boxShadow: "0 50px 100px -30px rgba(0, 0, 0, 0.15)", // Remove bloom, add depth
        duration: 1.5,
        ease: "power4.inOut"
      });

      // Reveal content
      tl.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={componentRef} className="bg-industrial-bg relative z-20 overflow-hidden border-b border-industrial-border">
      <div ref={triggerRef} className="h-screen w-full flex flex-col items-center justify-center relative px-4 md:px-12">
        
        <div ref={bgTextRef} className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 will-change-transform">
           <span className="text-[35vw] md:text-[25vw] font-black text-slate-900 leading-none tracking-tighter uppercase font-mono italic opacity-10 antialiased" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
             MATRIX
           </span>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.1] pointer-events-none" />

        <div ref={lineRef} className="relative bg-industrial-text h-[2px] w-0 flex items-center justify-center overflow-hidden border border-transparent z-10 max-w-[1400px]">
          <div ref={contentRef} className="w-full h-full p-6 md:p-16 flex flex-col opacity-0">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-100 pb-8 mb-10 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-industrial-primary animate-pulse" />
                  <span className="text-[10px] font-black text-industrial-primary uppercase tracking-[0.4em]">PL-INFRA-MATRIX-v2.0</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-industrial-text tracking-tighter">
                  Operational <span className="text-industrial-primary">Efficacy.</span>
                </h3>
              </div>
              <div className="flex gap-4 md:gap-8 text-right font-mono text-[10px] text-slate-400">
                <div>COORD: 12.9141 N | 74.8560 E<br/>STAND: OISD-105 COMPLIANT</div>
                <div>HSSE: A++ RATING<br/>ZONE: 0 / 1 / 2 EX</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-grow overflow-y-auto pr-4 custom-scrollbar">
              
              <div className="space-y-4 p-5 bg-slate-50 border border-slate-100 rounded">
                <div className="flex items-center gap-3 text-industrial-primary">
                  <Activity size={18} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-industrial-text">Calibration</h4>
                </div>
                <p className="text-[11px] text-industrial-muted leading-relaxed">Precision calibration of Overhead Gantry Cranes & flow meters.</p>
                <div className="text-xl font-black text-industrial-text">1.2M <span className="text-[9px] text-slate-400">Ltrs/Day</span></div>
              </div>

              <div className="space-y-4 p-5 bg-slate-50 border border-slate-100 rounded">
                <div className="flex items-center gap-3 text-industrial-accent">
                  <Shield size={18} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-industrial-text">Compliance</h4>
                </div>
                <p className="text-[11px] text-industrial-muted leading-relaxed">Full PESO competent person certification for hazardous sites.</p>
                <div className="text-xl font-black text-industrial-text">PESO <span className="text-[9px] text-slate-400">CERTIFIED</span></div>
              </div>

              <div className="space-y-4 p-5 bg-slate-50 border border-slate-100 rounded">
                <div className="flex items-center gap-3 text-industrial-text">
                  <HardHat size={18} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-industrial-text">Safety</h4>
                </div>
                <p className="text-[11px] text-industrial-muted leading-relaxed">Anti-static equipment & automated sludge evacuation.</p>
                <div className="text-xl font-black text-industrial-text">ZERO <span className="text-[9px] text-slate-400">LTI RATE</span></div>
              </div>

              <div className="space-y-4 p-5 bg-slate-50 border border-slate-100 rounded">
                <div className="flex items-center gap-3 text-industrial-primary">
                  <Globe size={18} />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-industrial-text">Logistics</h4>
                </div>
                <p className="text-[11px] text-industrial-muted leading-relaxed">Agglomerated supply chain for Oil Marketing Companies.</p>
                <div className="text-xl font-black text-industrial-text">15+ <span className="text-[9px] text-slate-400">HUBS</span></div>
              </div>

              <div className="lg:col-span-4 mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-100">
                 {[
                   { label: "Refinery Access", val: "PAN INDIA" },
                   { label: "Systems Ready", val: "99.9%" },
                   { label: "Precision Range", val: "±0.01mm" },
                   { label: "Crew Status", val: "ACTIVE" }
                 ].map((item, i) => (
                   <div key={i} className="flex flex-col">
                      <span className="text-[9px] font-black uppercase text-slate-400 mb-1">{item.label}</span>
                      <span className="text-xs font-black text-industrial-text">{item.val}</span>
                   </div>
                 ))}
              </div>
            </div>

            <div className="mt-auto pt-8 flex justify-between items-center text-[8px] font-mono text-slate-300 uppercase tracking-widest border-t border-slate-50">
               <div>© PERFECT LOGISTICS R&D GROUP | BUILD STABLE</div>
               <div className="flex gap-4">
                 <span>MOD: INFRA-Reveal-High-Density</span>
               </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 flex flex-col items-center gap-4">
          <div className="text-industrial-muted text-[10px] tracking-[0.5em] uppercase font-black">Continue Scrub</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-industrial-primary to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default InfrastructureScroll;