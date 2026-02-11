import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { 
  CheckCircle2, 
  Briefcase, 
  HardHat, 
  Scale, 
  Gauge, 
  FileCheck,
  Target,
  Users,
  Trophy,
  History,
  ArrowRight
} from 'lucide-react';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const groupCompanies = [
    { name: "Perfect Trading Co", desc: "Trade Coal, Iron Ore & Minerals", icon: Briefcase },
    { name: "Petro Tech Engineers", desc: "Civil Excavation & Pipe Line Works", icon: HardHat },
    { name: "Sriram Safety", desc: "Calibration & Industry Inspection Activity", icon: Scale },
    { name: "Mytech Instruments", desc: "Hydro/Electro Magnetic Flow Meters", icon: Gauge },
    { name: "Perfect Envirotech", desc: "Calibration Certificates & Testing", icon: FileCheck }
  ];

  return (
    <section className="bg-industrial-bg min-h-screen pt-24 pb-20 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Hero Text */}
        <div className="mb-20 max-w-4xl">
           <SectionHeading subtitle="Corporate Profile" title="Petro Logistic Solution Provider" />
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
             className="grid md:grid-cols-2 gap-12 text-industrial-text text-base md:text-lg leading-relaxed font-light"
           >
             <motion.p variants={fadeInUp}>
               <strong>PERFECT LOGISTICS</strong> is a business office headed exclusively as a Petro logistic solution provider. 
               We are an agglomeration of varied service activities under one roof, handling HSD, MS, and Oil Tanks 
               (both UG and AG) with adequate equipment and higher HSSE standards.
             </motion.p>
             <motion.p variants={fadeInUp}>
               Headed by <strong>Ln. SENTHIL.K.CHETTIAR</strong>, an intellect with over two decades of experience, we provide 
               specialized services like calibration of overhead Gantry Cranes, evacuation of underground storage tanks, 
               and O&M for petrol stations across PAN INDIA.
             </motion.p>
           </motion.div>
        </div>

        {/* Group Companies */}
        <div className="mb-24">
          <SectionHeading subtitle="Our Group" title="Varied Companies Under One Roof" />
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
             {groupCompanies.map((company, idx) => (
               <motion.div 
                 key={idx}
                 variants={fadeInUp}
                 className="bg-white p-8 border border-industrial-border hover:border-industrial-primary/30 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
               >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <company.icon size={100} />
                  </div>
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded flex items-center justify-center mb-6 group-hover:bg-industrial-primary group-hover:text-white transition-colors relative z-10">
                    <company.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xl text-industrial-text mb-2 group-hover:text-industrial-primary transition-colors relative z-10">{company.name}</h3>
                  <p className="text-sm text-industrial-muted leading-relaxed relative z-10">{company.desc}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white border border-industrial-border rounded-lg overflow-hidden shadow-lg">
           <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-industrial-border bg-slate-50/50">
                 <SectionHeading subtitle="Value Proposition" title="Single Window Service" />
                 <p className="text-industrial-muted mb-8 text-sm md:text-base leading-relaxed">
                   We integrate complex logistics and engineering tasks into a streamlined workflow, ensuring that your infrastructure projects meet deadlines without compromising on safety or quality.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: Target, label: "End-to-End Execution" },
                      { icon: Users, label: "Qualified Team" },
                      { icon: Trophy, label: "Proven Track Record" },
                      { icon: History, label: "20+ Years Experience" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="p-2 bg-white border border-slate-200 rounded shadow-sm">
                          <item.icon size={16} className="text-industrial-primary" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wide text-industrial-text">{item.label}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="p-10 md:p-16">
                 <h3 className="font-bold text-lg mb-8 flex items-center gap-2 text-industrial-text">
                   <CheckCircle2 className="text-industrial-accent" />
                   Core Competencies
                 </h3>
                 <div className="space-y-6">
                   {[
                     "Best of services in a SINGLE WINDOW.",
                     "End-to-end assignment handling (Tender to Execution).",
                     "Promoted by highly qualified & experienced team.",
                     "Devoted individualized services.",
                     "Professionally organized company.",
                     "Capable of hiring/engaging any installation of HSD UG tanks.",
                     "Renowned to execute all kinds of services successfully.",
                     "Undertake O&M for OMCs and IT companies."
                   ].map((item, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.05 }}
                       className="flex gap-4 items-start group"
                     >
                       <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-industrial-border group-hover:bg-industrial-primary transition-colors" />
                       <span className="text-industrial-muted text-sm group-hover:text-industrial-text transition-colors leading-relaxed font-medium">{item}</span>
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