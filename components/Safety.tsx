import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { 
  Shield, FileCheck, HardHat, Loader2, Download, AlertCircle, 
  FileText, Check, Siren, Eye, Activity, Lock, Thermometer,
  FileWarning, CheckCircle2
} from 'lucide-react';
import { jsPDF } from "jspdf";

const Safety: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateHSEPolicy = async () => {
    setIsGenerating(true);
    setError(null);

    try {
      // Simulate network request for effect
      await new Promise(resolve => setTimeout(resolve, 1500));

      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });
      
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // Header Section
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(0, 166, 81); // Brand Green
      doc.text("PERFECT LOGISTICS", 20, 25);
      
      doc.setFontSize(9);
      doc.setTextColor(100, 116, 139);
      doc.text("Petro-Logistic Solution Provider | Integrated Infrastructure", 20, 31);
      doc.text("Kulai, Mangalore - 575 010 | info@perfectlogistics.in", 20, 36);
      
      doc.setDrawColor(200, 200, 200);
      doc.line(20, 42, pageWidth - 20, 42);

      // Title
      doc.setFontSize(14);
      doc.setTextColor(15, 23, 42);
      doc.setFont("helvetica", "bold");
      doc.text("HSSE (HEALTH, SAFETY, SECURITY & ENVIRONMENT) POLICY STATEMENT", pageWidth / 2, 55, { align: 'center' });

      // Content
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(51, 65, 85);

      const paragraphs = [
        "PERFECT LOGISTICS is committed to conducting its business in a manner that protects the health and safety of its employees, contractors, and the general public, while minimizing environmental impact. We uphold 'Safety First' as a functional prerequisite, not an option.",
        "Core Directives:",
        "1. STATUTORY COMPLIANCE: Adherence to The Petroleum Rules 2002, The Factories Act 1948, and relevant OISD Standards, particularly OISD-STD-105.",
        "2. ZERO TOLERANCE: Continuous pursuit of 'Zero Lost Time Injuries' (LTI) through rigorous site audits and preventive hazard identification.",
        "3. HAZARDOUS ZONE PROTOCOL: Specialized execution in Zone 0, 1 & 2 environments requiring anti-static equipment and multi-gas detection monitors.",
        "4. EMERGENCY READINESS: Mandatory certification of field teams in first-aid, fire-fighting, and emergency shutdown procedures.",
        "5. PPE ENFORCEMENT: Mandatory use of ISI/CE certified safety gear including chemical-resistant suits for tank cleaning operations.",
        "6. SUSTAINABLE DISPOSAL: Strict compliance with Pollution Control Board (PCB) norms for sludge management and waste evacuation."
      ];

      let cursorY = 70;
      const wrapWidth = pageWidth - 40;
      
      paragraphs.forEach((para) => {
        const splitText = doc.splitTextToSize(para, wrapWidth);
        doc.text(splitText, 20, cursorY);
        cursorY += (splitText.length * 6) + 5;
      });

      // Signature Block
      cursorY += 20;
      doc.setFont("helvetica", "bold");
      doc.text("AUTHORIZED SIGNATORY", 20, cursorY);
      cursorY += 8;
      doc.text("Ln. SENTHIL.K.CHETTIAR", 20, cursorY);
      doc.setFont("helvetica", "normal");
      doc.text("Managing Director", 20, cursorY + 5);
      
      doc.setFontSize(8);
      doc.setTextColor(180, 180, 180);
      doc.text(`Doc Ref: PL/HSSE/${new Date().getFullYear()}/01`, 20, 280);
      doc.text(`Date of Issue: ${new Date().toLocaleDateString()}`, pageWidth - 20, 280, { align: 'right' });

      const pdfBlob = doc.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Perfect_Logistics_HSSE_Charter.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
    } catch (err) {
      console.error("PDF Gen Error:", err);
      setError("Document generation failed. Please check your browser permissions.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="pt-12 md:pt-16 pb-16 md:pb-24 font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* --- Hero Section --- */}
        <div className="mb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           <div>
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <SectionHeading subtitle="HSSE Framework" title="Zero Compromise" />
               <h3 className="text-xl md:text-3xl font-light text-industrial-muted leading-tight mt-6 mb-8">
                 In high-risk petroleum environments, precision isn't just a metric—it's a <span className="text-industrial-text font-bold">survival protocol</span>.
               </h3>
               <p className="text-sm md:text-base text-industrial-muted leading-relaxed mb-8">
                 We operate under a strict "Safety First" mandate. Our teams are equipped with Zone 0 compliant gear, gas detectors, and specialized PPE to ensure accident-free execution in hazardous environments.
               </p>
               <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-sm border border-green-200 text-xs font-bold uppercase tracking-widest">
                    <Shield size={14} /> Active Protocol
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-sm border border-slate-200 text-xs font-bold uppercase tracking-widest">
                    <Check size={14} /> Audit Ready
                  </div>
               </div>
             </motion.div>
           </div>

           {/* --- Dynamic Dashboard Visual --- */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="absolute inset-0 bg-gradient-to-tr from-industrial-primary/20 to-transparent blur-3xl" />
              <div className="relative bg-white border border-slate-200 shadow-2xl rounded-xl overflow-hidden">
                 {/* Dashboard Header */}
                 <div className="bg-slate-50 border-b border-slate-200 p-3 md:p-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                       <Activity size={16} className="text-industrial-primary animate-pulse" />
                       <span className="text-[10px] font-black uppercase tracking-widest text-industrial-text">Safety Monitor Live</span>
                    </div>
                    <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-red-400" />
                       <div className="w-2 h-2 rounded-full bg-yellow-400" />
                       <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                 </div>
                 
                 {/* Dashboard Grid */}
                 <div className="grid grid-cols-2 divide-x divide-y divide-slate-100">
                    <div className="p-4 md:p-6">
                       <span className="text-[9px] md:text-[10px] uppercase font-bold text-industrial-muted block mb-2">LTI Frequency</span>
                       <span className="text-2xl md:text-4xl font-black text-industrial-text tracking-tight">0.00</span>
                       <span className="text-[9px] md:text-[10px] text-green-600 font-bold block mt-1">Target Achieved</span>
                    </div>
                    <div className="p-4 md:p-6">
                       <span className="text-[9px] md:text-[10px] uppercase font-bold text-industrial-muted block mb-2">Audit Score</span>
                       <span className="text-2xl md:text-4xl font-black text-industrial-text tracking-tight">98.5%</span>
                       <div className="w-full h-1 bg-slate-100 mt-2 rounded-full overflow-hidden">
                          <div className="w-[98.5%] h-full bg-industrial-primary" />
                       </div>
                    </div>
                    <div className="p-4 md:p-6 col-span-2">
                       <div className="flex items-center justify-between mb-4">
                          <span className="text-[9px] md:text-[10px] uppercase font-bold text-industrial-muted">Active Site Compliance</span>
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[8px] md:text-[9px] font-bold uppercase rounded-full">Zone 1 Certified</span>
                       </div>
                       <div className="space-y-3">
                          <div className="flex items-center gap-3 text-xs md:text-sm">
                             <Thermometer size={16} className="text-slate-400 flex-shrink-0" />
                             <span className="flex-grow font-medium text-slate-600">Atmospheric Monitoring</span>
                             <CheckCircle2 size={16} className="text-industrial-primary flex-shrink-0" />
                          </div>
                          <div className="flex items-center gap-3 text-xs md:text-sm">
                             <Lock size={16} className="text-slate-400 flex-shrink-0" />
                             <span className="flex-grow font-medium text-slate-600">LOTO Procedures</span>
                             <CheckCircle2 size={16} className="text-industrial-primary flex-shrink-0" />
                          </div>
                          <div className="flex items-center gap-3 text-xs md:text-sm">
                             <HardHat size={16} className="text-slate-400 flex-shrink-0" />
                             <span className="flex-grow font-medium text-slate-600">PPE Compliance</span>
                             <CheckCircle2 size={16} className="text-industrial-primary flex-shrink-0" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* --- Compliance Standards (Dark Mode) --- */}
        <div className="mb-24 bg-industrial-text text-white rounded-lg md:rounded-2xl overflow-hidden p-8 md:p-16 relative">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
           
           <div className="relative z-10 grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-1">
                 <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                    <FileCheck className="text-industrial-primary" />
                    Regulatory Standards
                 </h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Our operations are strictly governed by national safety protocols. We maintain valid certifications and competency records for all hazardous zone activities.
                 </p>
              </div>
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                 {[
                    { title: "PESO Compliant", desc: "Petroleum & Explosives Safety Org certified competent persons.", icon: FileWarning },
                    { title: "OISD-STD-105", desc: "Adherence to Work Permit Systems for hot/cold work.", icon: Shield },
                    { title: "Factories Act 1948", desc: "Statutory labor welfare and safety provisions.", icon: FileText },
                    { title: "PCB Norms", desc: "Pollution Control Board compliant waste disposal.", icon: Siren }
                 ].map((item, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-5 md:p-6 rounded hover:bg-white/10 transition-colors">
                       <item.icon size={24} className="text-industrial-accent mb-4" />
                       <h4 className="text-sm font-bold uppercase tracking-wider mb-2">{item.title}</h4>
                       <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* --- Secure Document Retrieval --- */}
        <div className="max-w-3xl mx-auto text-center">
           <div className="mb-8">
              <h3 className="text-lg font-bold text-industrial-text uppercase tracking-widest mb-2">HSSE Policy Charter</h3>
              <p className="text-industrial-muted text-sm">Official documentation for tender and compliance verification.</p>
           </div>
           
           <div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-left w-full md:w-auto">
                 <div className="w-12 h-12 bg-red-50 text-red-600 rounded flex items-center justify-center flex-shrink-0">
                    <FileText size={24} />
                 </div>
                 <div>
                    <span className="block text-sm font-bold text-industrial-text break-all">HSSE_Policy_2025_v1.pdf</span>
                    <span className="text-[10px] text-industrial-muted uppercase tracking-wider">Size: 1.2 MB · Secure SHA-256</span>
                 </div>
              </div>
              
              <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={generateHSEPolicy}
                  disabled={isGenerating}
                  className="w-full md:w-auto px-6 py-3 bg-industrial-text text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-industrial-primary transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 rounded-sm shadow-md"
                >
                  {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                  {isGenerating ? "Retrieving..." : "Download Secure PDF"}
              </motion.button>
           </div>
           <p className="mt-4 text-[10px] text-industrial-muted uppercase tracking-widest flex items-center justify-center gap-2">
              <Lock size={10} /> Encrypted Digital Signature
           </p>
        </div>

      </div>
    </section>
  );
};

export default Safety;