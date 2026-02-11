import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { 
  Wrench, Cylinder, Activity, ShieldCheck, Truck, Scale, 
  ClipboardList, Hammer, CheckSquare, Flag, Settings, 
  ArrowRight, Layers, Box
} from 'lucide-react';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'tanks',
    title: 'Tank Evacuation & Cleaning',
    description: 'Automated sludge evacuation and gas-freeing for underground (UG) and above-ground (AG) storage tanks. We utilize anti-static equipment for HSD, MS, and heavy oil handling in hazardous zones.',
    icon: Cylinder
  },
  {
    id: 'pipeline',
    title: 'Pipeline Infrastructure',
    description: 'End-to-end installation of Hydrant, HSD, and Gas pipelines. Our certified welding teams execute precision joining using MS, GI, and SS materials adhering to API 1104 standards.',
    icon: Activity
  },
  {
    id: 'mech',
    title: 'Mechanical Engineering',
    description: 'Turnkey installation of DUO sumps, dispenser units, and suction lines. We handle complex canopy structural works, painting, and retrofitting for retail outlets.',
    icon: Wrench
  },
  {
    id: 'calibration',
    title: 'Precision Calibration',
    description: 'Certified volumetric calibration for storage tanks and flow meters. We service Overhead Gantry Cranes and industrial measuring devices with NABL-traceable standards.',
    icon: Scale
  },
  {
    id: 'om',
    title: 'O&M Management',
    description: 'Comprehensive Operations & Maintenance contracts for Oil Marketing Companies (OMCs). We deploy trained technical manpower for terminal loading bays and gantries.',
    icon: Truck
  },
  {
    id: 'peso',
    title: 'Statutory Compliance',
    description: 'Liasioning and certification services for PESO (Petroleum and Explosives Safety Organization) approvals. We conduct site inspections to ensure OISD-STD-105 compliance.',
    icon: ShieldCheck
  }
];

const WORKFLOW = [
  { id: "01", title: "Site Audit", icon: ClipboardList, desc: "Feasibility & Risk Matrix" },
  { id: "02", title: "Safety Mapping", icon: CheckSquare, desc: "Hazard Zone Isolation" },
  { id: "03", title: "Execution", icon: Hammer, desc: "Technical Deployment" },
  { id: "04", title: "Certification", icon: Flag, desc: "Handover & Documentation" }
];

const Services: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-16 font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* --- Header Section --- */}
        <div className="mb-16 md:mb-24 max-w-4xl">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
             <SectionHeading subtitle="Operational Verticals" title="Engineering & Execution" />
             <h3 className="text-lg md:text-3xl font-light text-industrial-muted leading-relaxed mt-6">
               Delivering critical infrastructure solutions for the energy sector. From <span className="text-industrial-text font-medium">hazardous zone excavation</span> to precision calibration, our capabilities are built for high-stakes environments.
             </h3>
           </motion.div>
        </div>

        {/* --- Technical Service Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-24 md:mb-32">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white p-6 md:p-12 border border-slate-100 hover:z-10 hover:shadow-2xl hover:border-industrial-primary/20 transition-all duration-500 relative flex flex-col h-full overflow-hidden"
            >
              {/* Technical Corners */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-200 group-hover:border-industrial-primary/50 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-200 group-hover:border-industrial-primary/50 transition-colors duration-500" />
              
              <div className="mb-6 md:mb-8 flex justify-between items-start">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-sm border border-slate-100 flex items-center justify-center text-industrial-muted group-hover:bg-industrial-primary group-hover:text-white group-hover:border-industrial-primary transition-all duration-300">
                    <service.icon size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
                 </div>
                 <span className="font-mono text-[10px] md:text-xs text-slate-300 group-hover:text-industrial-primary/50 transition-colors">
                   SERV-0{idx + 1}
                 </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-industrial-text mb-3 md:mb-4 group-hover:text-industrial-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-industrial-muted text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                {service.description}
              </p>

              <div className="pt-6 border-t border-slate-50 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-industrial-primary transition-colors">
                <Settings size={12} />
                <span>Technical Spec</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Execution Lifecycle (Methodology) --- */}
        <div className="relative bg-industrial-text text-white rounded-lg md:rounded-2xl overflow-hidden p-6 md:p-10 lg:p-20">
           {/* Abstract Background */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
           <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-industrial-secondary/50 to-transparent pointer-events-none" />

           <div className="relative z-10 mb-10 md:mb-16">
              <span className="text-industrial-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-3 md:mb-4 block">Methodology</span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight">The Execution Lifecycle</h2>
              <p className="text-slate-400 mt-4 md:mt-6 max-w-2xl text-base md:text-lg font-light">
                We employ a rigorous 4-stage deployment protocol to ensure safety and efficiency in every project.
              </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative z-10">
              {/* Connector Line (Desktop Only) */}
              <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-white/10" />

              {WORKFLOW.map((step, idx) => (
                <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.2 }}
                   className="relative group flex flex-col items-start md:items-center text-left md:text-center"
                >
                   {/* Mobile: Horizontal Layout for Icon/Text, Desktop: Vertical */}
                   <div className="flex flex-row md:flex-col items-center md:justify-center gap-4 md:gap-0 w-full">
                     <div className="w-12 h-12 md:w-16 md:h-16 bg-industrial-secondary border border-white/10 rounded-full flex items-center justify-center text-white md:mb-6 relative z-10 group-hover:scale-110 group-hover:border-industrial-primary transition-all duration-300 shadow-xl flex-shrink-0">
                        <step.icon size={20} className="md:w-6 md:h-6" />
                        <div className="absolute -right-1 -top-1 md:-right-2 md:-top-2 w-5 h-5 md:w-6 md:h-6 bg-industrial-primary rounded-full flex items-center justify-center text-[9px] md:text-[10px] font-bold">
                          {step.id}
                        </div>
                     </div>
                     <div>
                       <h4 className="text-base md:text-lg font-bold md:mb-2 group-hover:text-industrial-primary transition-colors">{step.title}</h4>
                       <p className="text-xs md:text-sm text-slate-400 font-medium">{step.desc}</p>
                     </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
        
        {/* --- Bottom Capability Strip --- */}
        <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-industrial-border grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
           {[
             { label: "Zone 0 Ready", icon: Layers },
             { label: "OISD Compliant", icon: ShieldCheck },
             { label: "P&ID Drafting", icon: Activity },
             { label: "Turnkey EPC", icon: Box }
           ].map((item, i) => (
             <div key={i} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-2 md:gap-3 text-industrial-muted opacity-80 md:opacity-60 hover:opacity-100 transition-opacity cursor-default">
                <item.icon size={18} />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">{item.label}</span>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Services;