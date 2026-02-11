import React from 'react';
import { SectionHeading } from './ui/SectionHeading';

const Leadership: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-industrial-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading subtitle="Leadership" title="Headed by Expertise" align="center" />
          
          <p className="text-xl md:text-2xl text-industrial-text font-light leading-relaxed mb-8 italic">
            "We don't just build infrastructure; we build resilience. For over two decades, Perfect Logistics has been the single-window solution ensuring the nation's energy flows without interruption."
          </p>
          
          <div className="flex flex-col items-center">
            <div className="h-16 w-[1px] bg-industrial-border mb-6"></div>
            <h4 className="text-lg font-bold text-industrial-text uppercase tracking-wide">Ln. SENTHIL.K.CHETTIAR</h4>
            <p className="text-industrial-muted text-sm mt-1">Managing Director · 20+ Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;