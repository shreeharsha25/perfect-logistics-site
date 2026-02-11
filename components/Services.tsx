import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Wrench, Cylinder, Activity, ShieldCheck, Truck, Scale, ArrowRight, ClipboardList, Hammer, CheckSquare, Flag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceItem } from '../types';

const SERVICES: ServiceItem[] = [
  {
    id: 'tanks',
    title: 'Tank Cleaning & Evacuation',
    description: 'Specialized cleaning of UG and AG tanks for HSD, MS, and Oil. We utilize adequate equipment and automated sludge evacuation systems adhering to high HSSE standards.',
    icon: Cylinder
  },
  {
    id: 'mech',
    title: 'Mechanical & Electrical',
    description: 'High-volume execution for hazardous zones. Includes installation of DUO sumps, dispenser units, UGT sump fittings, and canopy works including painting.',
    icon: Wrench
  },
  {
    id: 'pipeline',
    title: 'Pipeline Installation',
    description: 'Expert installation of Hydrant, HSD, and Gas pipelines using MS, GI, and SS materials. Executed by equipped welding teams with strict supervision.',
    icon: Activity
  },
  {
    id: 'om',
    title: 'O&M Services',
    description: 'Comprehensive Operations & Maintenance for petrol stations, gantries, and terminal loading bays. We serve OMCs and IT companies with dedicated trained staff.',
    icon: Truck
  },
  {
    id: 'calibration',
    title: 'Calibration Services',
    description: 'Certified calibration of Overhead Gantry Cranes, Hydro/Electro-Magnetic Flow meters, industrial equipment, and storage tanks.',
    icon: Scale
  },
  {
    id: 'peso',
    title: 'PESO Compliance',
    description: 'Independent competency services for all PESO-related activities including site inspection, liasioning, and certification for regulatory approvals.',
    icon: ShieldCheck
  }
];

const WORKFLOW = [
  { title: "Assessment", icon: ClipboardList, desc: "Site feasibility & risk analysis." },
  { title: "Planning", icon: CheckSquare, desc: "Resource allocation & safety mapping." },
  { title: "Execution", icon: Hammer, desc: "Deployment of specialized teams." },
  { title: "Handover", icon: Flag, desc: "Certification & compliance filing." }
];

const Services: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-industrial-bg text-industrial-text font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
          <SectionHeading subtitle="Our Expertise" title="Integrated Services" />
          <p className="max-w-2xl text-industrial-muted text-lg font-light leading-relaxed">
             From hazardous zone tank evacuation to precision calibration, our service portfolio is engineered for the high-compliance demands of the petroleum sector.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: window.innerWidth < 768 ? "-20px" : "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group p-8 bg-white border border-slate-200 rounded-lg shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Top highlight border for 3D feel */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-industrial-border group-hover:bg-industrial-primary transition-colors duration-300"></div>
              
              <div className="mb-6 inline-flex p-4 rounded-lg bg-slate-50 border border-slate-100 text-industrial-muted group-hover:bg-industrial-primary group-hover:text-white group-hover:border-industrial-primary transition-colors duration-300 w-fit shadow-sm">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-industrial-text tracking-tight group-hover:text-industrial-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-industrial-muted text-sm leading-relaxed mb-6 flex-grow font-medium">
                {service.description}
              </p>
              <div className="h-[1px] w-full bg-slate-100 group-hover:bg-industrial-primary/10 transition-colors" />
              
              <Link to="/contact" className="mt-6 text-xs font-bold uppercase tracking-widest text-industrial-muted group-hover:text-industrial-primary transition-colors flex items-center gap-2">
                Inquire Now <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow Section */}
        <div className="bg-white border border-industrial-border rounded-lg p-10 md:p-16 shadow-lg">
           <div className="text-center mb-16">
             <h3 className="text-industrial-muted text-xs font-bold uppercase tracking-[0.2em] mb-4">Methodology</h3>
             <h2 className="text-3xl font-bold text-industrial-text">Execution Lifecycle</h2>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-100 -z-0"></div>

              {WORKFLOW.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative z-10 flex flex-col items-center text-center group"
                >
                   <div className="w-24 h-24 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-industrial-muted group-hover:border-industrial-accent group-hover:text-industrial-accent transition-all duration-300 mb-6 shadow-sm">
                     <step.icon size={32} strokeWidth={1.5} />
                   </div>
                   <h4 className="text-lg font-bold text-industrial-text mb-2">{step.title}</h4>
                   <p className="text-xs text-industrial-muted uppercase tracking-wide font-bold">{step.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;