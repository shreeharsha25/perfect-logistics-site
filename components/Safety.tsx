import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Shield, FileCheck, HardHat, Loader2, Download, AlertCircle, FileText, Check, Siren } from 'lucide-react';
import { jsPDF } from "jspdf";

const Safety: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateHSEPolicy = async () => {
    setIsGenerating(true);
    setError(null);

    try {
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

      // Robust save for mobile
      const pdfBlob = doc.output('blob');
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Perfect_Logistics_HSSE_Policy.pdf";
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
    <section className="py-20 md:py-24 bg-white border-b border-industrial-border relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
            <SectionHeading subtitle="Operational Standard" title="Safety Is Our Bedrock" />
            <div className="space-y-8">
              <p className="text-industrial-text text-base md:text-lg leading-relaxed font-light">
                In high-risk petroleum environments, precision isn't just a metric—it's a survival protocol. Our HSSE management system is designed to exceed international standards for hazardous zone operations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "PESO Certified Staff", icon: FileCheck },
                  { title: "Zero-LTI Track Record", icon: Shield },
                  { title: "Zone 0/1/2 Expertise", icon: Siren },
                  { title: "OISD Compliance", icon: FileText }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-200 rounded group hover:border-industrial-primary transition-colors hover:shadow-sm"
                  >
                    <item.icon size={18} className="text-industrial-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-industrial-text uppercase tracking-wider">{item.title}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <button 
                  onClick={generateHSEPolicy}
                  disabled={isGenerating}
                  className="w-full md:w-auto px-8 py-4 bg-industrial-text text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-industrial-primary transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg shadow-slate-900/10 rounded-sm"
                >
                  {isGenerating ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
                  {isGenerating ? "Processing..." : "Download HSSE Charter"}
                </button>
                {error && <p className="text-red-500 text-xs mt-3 flex items-center gap-1"><AlertCircle size={12} /> {error}</p>}
                <p className="text-[10px] text-industrial-muted mt-3 uppercase tracking-widest font-bold flex items-center gap-2">
                   <Check size={12} className="text-green-500" /> Verified for OISD-STD-105 Compliance
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative p-1 bg-gradient-to-br from-slate-200 to-white border border-slate-300 shadow-2xl rounded-lg"
             >
                <div className="bg-white p-6 md:p-10 border border-slate-100 flex flex-col gap-6 rounded-lg">
                  <div className="flex justify-between items-start">
                    <Shield size={48} className="text-industrial-primary opacity-20" />
                    <div className="text-right">
                      <span className="text-4xl md:text-6xl font-black text-industrial-text tracking-tight">0.0</span>
                      <span className="block text-[10px] font-bold text-industrial-muted uppercase tracking-[0.2em] mt-1">Accident Frequency Rate</span>
                    </div>
                  </div>
                  <div className="h-[1px] w-full bg-slate-100" />
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-bold">
                           <span className="text-industrial-muted uppercase tracking-widest text-[10px]">Training Cycles</span>
                           <span className="text-industrial-text font-mono">480+ Hrs/Yr</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} className="h-full bg-industrial-primary" transition={{ duration: 1.5 }} />
                        </div>
                     </div>
                     
                     <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-bold">
                           <span className="text-industrial-muted uppercase tracking-widest text-[10px]">Internal Site Audits</span>
                           <span className="text-industrial-text font-mono">100% Monthly</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                           <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} className="h-full bg-industrial-accent" transition={{ duration: 1.5, delay: 0.2 }} />
                        </div>
                     </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded border border-green-100 flex items-start gap-3">
                     <HardHat size={20} className="text-green-600 shrink-0 mt-0.5" />
                     <p className="text-[11px] text-green-800 leading-relaxed font-medium">
                       Active Safety Protocol: All field teams currently deployed are certified for Zone 1 Hazardous Operations.
                     </p>
                  </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Safety;