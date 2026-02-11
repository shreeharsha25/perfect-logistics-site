import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeading } from './ui/SectionHeading';
import { Shield, Map, Factory, History } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STORY_STEPS = [
  {
    id: 'heritage',
    subtitle: 'The Foundation',
    title: 'Two Decades of Resilience',
    description: 'Established in 2003, Perfect Logistics began with a vision to streamline complex petro-logistics. Headed by Ln. SENTHIL.K.CHETTIAR, we have grown from a local service provider to a PAN-India powerhouse.',
    icon: History,
    metric: '20+',
    metricLabel: 'Years of Excellence'
  },
  {
    id: 'infrastructure',
    subtitle: 'Core Capabilities',
    title: 'Engineered Precision',
    description: 'We handle high-risk assets—from underground storage tanks to intricate HSD pipelines. Our teams work in hazardous zones (0, 1, 2) with specialized equipment for evacuation and mechanical installation.',
    icon: Factory,
    metric: '1000+',
    metricLabel: 'Tanks Calibrated'
  },
  {
    id: 'scale',
    subtitle: 'Global Footprint',
    title: 'Pan-India Reach',
    description: 'With a corporate hub in Mangalore and strategic branches in Singapore, Chennai, and Noida, our network ensures seamless execution across Southeast Asia and the Indian subcontinent.',
    icon: Map,
    metric: '15+',
    metricLabel: 'Strategic Locations'
  },
  {
    id: 'safety',
    subtitle: 'Our Creed',
    title: 'Zero-Compromise Safety',
    description: 'Every weld, every cleaning cycle, every calibration follows strict OISD standards. Our Zero-LTI track record is the result of rigorous PESO-certified protocols and an ingrained culture of safety.',
    icon: Shield,
    metric: '0',
    metricLabel: 'Safety Incidents'
  }
];

const Scrollytelling: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the entire section while the story steps scroll
      ScrollTrigger.create({
        trigger: scrollSectionRef.current,
        pin: true,
        start: "top top",
        end: `+=${STORY_STEPS.length * 100}%`,
        scrub: 1,
      });

      // Animate the background lines based on scroll
      gsap.to(".bg-tech-lines", {
        scrollTrigger: {
          trigger: scrollSectionRef.current,
          start: "top top",
          end: `+=${STORY_STEPS.length * 100}%`,
          scrub: 1.5,
        },
        backgroundPosition: "0 100%",
        ease: "none"
      });

      // Animate each story step
      STORY_STEPS.forEach((step, i) => {
        const stepTl = gsap.timeline({
          scrollTrigger: {
            trigger: scrollSectionRef.current,
            start: `${i * 100}% top`,
            end: `${(i + 1) * 100}% top`,
            scrub: 1,
          }
        });

        // Entrance
        stepTl.fromTo(`.step-card-${i}`, 
          { opacity: 0, y: 100, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 }
        );

        // Transition visuals (icon movement)
        stepTl.fromTo(`.step-icon-${i}`,
          { rotateY: 90, opacity: 0 },
          { rotateY: 0, opacity: 1, duration: 0.5 },
          "<"
        );

        // Metric counter animation
        stepTl.from(`.step-metric-${i}`, {
          textContent: 0,
          duration: 1,
          ease: "power2.out",
          snap: { textContent: 1 }
        }, "-=0.2");

        // Exit (except for the last one)
        if (i < STORY_STEPS.length - 1) {
          stepTl.to(`.step-card-${i}`, {
            opacity: 0,
            y: -100,
            scale: 0.8,
            duration: 0.5
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-industrial-bg overflow-hidden relative border-b border-industrial-border">
      {/* Background Technical Grid */}
      <div className="bg-tech-lines absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-[0.2] pointer-events-none" />
      
      <div ref={scrollSectionRef} className="h-screen w-full flex items-center justify-center relative">
        
        {/* Floating Technical Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-5">
           <svg viewBox="0 0 1000 1000" className="w-full h-full animate-pulse-slow">
              <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="0.5" fill="none" />
              <line x1="100" y1="500" x2="900" y2="500" stroke="currentColor" strokeWidth="0.5" />
              <line x1="500" y1="100" x2="500" y2="900" stroke="currentColor" strokeWidth="0.5" />
           </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
           {STORY_STEPS.map((step, index) => (
             <div 
               key={step.id} 
               className={`step-card-${index} absolute w-full max-w-4xl opacity-0 flex flex-col md:flex-row items-center gap-8 md:gap-16`}
             >
                {/* Left: Content */}
                <div className="flex-1 text-center md:text-left">
                  <span className="inline-block text-industrial-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 px-3 py-1 bg-green-50 rounded-sm border border-green-100">
                    Chapter 0{index + 1}
                  </span>
                  <h3 className="text-industrial-muted text-lg font-medium mb-2 tracking-wide">
                    {step.subtitle}
                  </h3>
                  <h2 className="text-4xl md:text-6xl font-bold text-industrial-text mb-6 tracking-tight leading-tight">
                    {step.title}
                  </h2>
                  <p className="text-industrial-muted text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                    {step.description}
                  </p>
                  
                  {/* Metric Display */}
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 border-t border-industrial-border pt-8 mt-4">
                     <div>
                       <span className={`step-metric-${index} text-5xl font-bold text-industrial-text block`}>
                         {step.metric}
                       </span>
                       <span className="text-xs font-bold text-industrial-muted uppercase tracking-widest mt-1">
                         {step.metricLabel}
                       </span>
                     </div>
                     <div className="h-[1px] md:h-12 w-12 md:w-[1px] bg-industrial-border" />
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full border border-industrial-border flex items-center justify-center text-industrial-accent">
                           <step.icon size={20} />
                        </div>
                        <span className="text-sm font-semibold text-industrial-text italic">Certified Industrial Execution</span>
                     </div>
                  </div>
                </div>

                {/* Right: Visual Accent (Icon/Illustration Space) */}
                <div className={`step-icon-${index} hidden md:flex items-center justify-center w-64 h-64 bg-white border border-slate-200 shadow-2xl rounded-sm rotate-3 relative`}>
                   <div className="absolute inset-2 border border-slate-100 border-dashed" />
                   <step.icon size={80} strokeWidth={1} className="text-industrial-text opacity-80" />
                   <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-industrial-primary/10 rounded-full blur-2xl" />
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Scrollytelling;