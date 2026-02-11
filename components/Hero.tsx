import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden border-b border-industrial-border pt-24 md:pt-20">
      {/* Background is handled globally in App.tsx */}
      
      {/* Scanning Beam Effect */}
      <motion.div
        className="absolute left-0 w-full h-[2px] bg-industrial-primary/30 shadow-[0_0_20px_2px_rgba(0,166,81,0.2)] z-0 pointer-events-none"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ 
          duration: 8, 
          ease: "linear", 
          repeat: Infinity,
          repeatType: "loop"
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 mt-0">
        <div className="max-w-5xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6 md:mb-8"
          >
            <motion.div 
              className="h-[2px] md:h-[3px] bg-industrial-primary"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            />
            <span className="text-industrial-muted uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
              EST. 2003 · Integrated Petroleum Services
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-industrial-text leading-[1.1] md:leading-[1.05] tracking-tight mb-8 md:mb-10">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              Infrastructure.
            </motion.span>
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Operations.
            </motion.span>
            <motion.span
              className="block font-bold text-industrial-primary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              Execution.
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base md:text-xl text-industrial-muted max-w-xl md:max-w-2xl leading-relaxed mb-10 md:mb-12"
          >
            Delivering precision engineering, safety compliance, and operational excellence for hazardous zones and critical energy assets across India.
          </motion.p>

          {/* CTA Buttons - 3D Engineered Look */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/services" 
                className="relative block w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-b from-industrial-primary to-green-600 text-white font-bold text-xs md:text-sm uppercase tracking-widest rounded-sm border-t border-white/20 shadow-lg shadow-green-900/20 hover:shadow-xl hover:to-green-500 transition-all duration-300 text-center group overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">View Capabilities</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link 
                to="/contact" 
                className="relative block w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-b from-white to-slate-50 text-industrial-text font-bold text-xs md:text-sm uppercase tracking-widest rounded-sm border border-slate-300 shadow-sm hover:shadow-lg hover:border-industrial-primary hover:text-industrial-primary transition-all duration-300 text-center"
              >
                Contact Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 flex items-center gap-4 z-10"
      >
        <span className="text-industrial-muted text-xs uppercase tracking-widest hidden md:block">Scroll to explore</span>
        <ArrowDown className="text-industrial-accent animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;