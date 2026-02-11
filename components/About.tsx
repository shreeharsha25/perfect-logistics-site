import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { 
  Briefcase, 
  HardHat, 
  Scale, 
  Gauge, 
  FileCheck,
  Target,
  Users,
  Trophy,
  History,
  ChevronRight,
  Quote,
  Building2,
  CheckCircle2
} from 'lucide-react';

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const groupCompanies = [
    { name: "Perfect Trading Co", desc: "Trade Coal, Iron Ore & Minerals", icon: Briefcase },
    { name: "Petro Tech Engineers", desc: "Civil Excavation & Pipe Line Works", icon: HardHat },
    { name: "Sriram Safety", desc: "Calibration & Industry Inspection Activity", icon: Scale },
    { name: "Mytech Instruments", desc: "Hydro/Electro Magnetic Flow Meters", icon: Gauge },
    { name: "Perfect Envirotech", desc: "Calibration Certificates & Testing", icon: FileCheck }
  ];

  const competencies = [
    "Single Window Service Integration",
    "End-to-End Tender Execution",
    "Highly Qualified Technical Team",
    "Devoted Individualized Services",
    "Professional Corporate Structure",
    "Specialized HSD UG Tank Installation",
    "Pan-India Service Execution",
    "O&M for OMCs & IT Parks"
  ];

  return (
    <section ref={containerRef} className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* --- Hero Section --- */}
        <div className="mb-16 md:mb-24 max-w-5xl">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <SectionHeading subtitle="Corporate Profile" title="Integrated Petro-Logistics" />
             <h3 className="text-xl md:text-2xl lg:text-4xl font-light text-industrial-muted leading-relaxed md:leading-tight mt-6">
               An agglomeration of specialized infrastructure services under one roof, delivering precision in <span className="text-industrial-text font-semibold">hazardous zone execution</span>.
             </h3>
           </motion.div>
        </div>

        {/* --- Narrative & Leadership Split --- */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-24 md:mb-32 items-start">
           {/* Left: Main Narrative */}
           <div className="lg:col-span-7 space-y-6 md:space-y-8 text-base md:text-lg text-industrial-muted leading-relaxed font-light">
             <motion.p 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
             >
               <strong className="text-industrial-text font-semibold">PERFECT LOGISTICS</strong> operates exclusively as a specialized Petro-logistic solution provider. We handle HSD, MS, and Oil Tanks (both Underground and Above-ground) with proprietary equipment and HSSE standards that exceed industry benchmarks.
             </motion.p>
             <motion.p 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
             >
               We are not just contractors; we are an engineering partner. From calibration of overhead Gantry Cranes to the complex evacuation of underground storage tanks and O&M for petrol stations across PAN INDIA, our footprint is defined by technical excellence.
             </motion.p>
           </div>

           {/* Right: Leadership Card */}
           <div className="lg:col-span-5 relative mt-8 lg:mt-0">
             <motion.div 
                style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? yParallax : 0 }}
                className="relative"
             >
               <div className="bg-white p-6 md:p-10 border-t-4 border-industrial-primary shadow-xl shadow-slate-200/50 relative">
                  <Quote className="absolute top-4 right-4 md:top-6 md:right-6 text-industrial-primary/10 w-16 h-16 md:w-20 md:h-20" />
                  <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-industrial-muted mb-4">Leadership</h4>
                  <div className="flex items-center gap-4 mb-6">
                     <div className="w-14 h-14 md:w-16 md:h-16 bg-slate-100 rounded-full flex items-center justify-center text-industrial-text font-bold text-lg md:text-xl border border-slate-200 flex-shrink-0">
                       SC
                     </div>
                     <div>
                       <h3 className="text-lg md:text-xl font-bold text-industrial-text">Ln. SENTHIL.K.CHETTIAR</h3>
                       <p className="text-xs md:text-sm text-industrial-primary font-medium">Managing Director</p>
                     </div>
                  </div>
                  <p className="text-industrial-muted italic text-sm leading-relaxed relative z-10">
                    "With over two decades of intellectual capital in the petroleum sector, our mission is to provide a 'Single Window' service that eliminates the fragmentation of hazardous infrastructure logistics."
                  </p>
               </div>
             </motion.div>
           </div>
        </div>

        {/* --- The Ecosystem (Group Companies) --- */}
        <div className="mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-4 md:gap-6">
            <SectionHeading subtitle="The Ecosystem" title="Our Group Companies" />
            <p className="text-sm text-industrial-muted max-w-md md:text-right">
              A synergistic network of specialized entities delivering comprehensive industrial solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
             {groupCompanies.map((company, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-white p-6 md:p-10 border border-slate-100 hover:z-10 hover:shadow-2xl hover:border-industrial-primary/20 transition-all duration-500 group relative flex flex-col h-full"
               >
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-slate-50 rounded-sm group-hover:bg-industrial-primary group-hover:text-white transition-colors duration-300">
                      <company.icon size={24} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-300 group-hover:text-industrial-primary transition-colors">0{idx + 1}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-industrial-text mb-3 group-hover:text-industrial-primary transition-colors">{company.name}</h3>
                  <p className="text-sm text-industrial-muted leading-relaxed mb-6 md:mb-8 flex-grow">{company.desc}</p>
                  
                  <div className="w-8 h-[1px] bg-slate-200 group-hover:w-full group-hover:bg-industrial-primary/30 transition-all duration-500" />
               </motion.div>
             ))}
             {/* Filler visual for grid balance */}
             <motion.div 
               initial={{ opacity: 0 }} 
               whileInView={{ opacity: 1 }}
               className="bg-industrial-secondary p-8 md:p-10 flex flex-col justify-center items-center text-center text-white min-h-[240px]"
             >
                <Building2 size={48} className="mb-4 text-industrial-accent opacity-50" />
                <h3 className="font-bold text-lg mb-2">Expanding Horizons</h3>
                <p className="text-xs text-slate-400 leading-relaxed">Continuously adding new verticals to our portfolio.</p>
             </motion.div>
          </div>
        </div>

        {/* --- Value Proposition (Dark Section) --- */}
        <div className="relative rounded-lg md:rounded-2xl overflow-hidden bg-industrial-text text-white">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
           
           <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-16 lg:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
                 <div className="mb-8 md:mb-10">
                   <span className="text-industrial-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Why Choose Us</span>
                   <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">The Single Window Advantage</h2>
                 </div>
                 <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-12">
                   We integrate the fragmented world of petroleum logistics into a seamless, accountable workflow. One partner, total responsibility.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {[
                      { label: "End-to-End Execution", icon: Target },
                      { label: "Proven Track Record", icon: Trophy },
                      { label: "Qualified Team", icon: Users },
                      { label: "20+ Years Experience", icon: History }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-row sm:flex-col gap-3 items-center sm:items-start">
                        <item.icon className="text-industrial-accent flex-shrink-0" size={24} />
                        <span className="text-xs font-bold uppercase tracking-wide text-slate-300">{item.label}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-8 md:p-16 lg:p-20 bg-white/5">
                 <h3 className="text-lg md:text-xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                   <CheckCircle2 className="text-industrial-primary" />
                   Core Competencies
                 </h3>
                 <div className="space-y-3 md:space-y-4">
                   {competencies.map((item, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.05 }}
                       className="flex items-center gap-4 group p-3 hover:bg-white/5 rounded transition-colors border border-transparent hover:border-white/10"
                     >
                       <div className="w-1.5 h-1.5 rounded-full bg-industrial-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                       <span className="text-slate-300 text-sm font-medium tracking-wide">{item}</span>
                       <ChevronRight className="ml-auto text-industrial-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 hidden sm:block" size={16} />
                     </motion.div>
                   ))}
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default About;