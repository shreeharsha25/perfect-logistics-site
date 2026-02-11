import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LOGS = [
  "SYSTEM_CHECK: INITIALIZING...",
  "CORE_ENGINE: ACTIVE",
  "OISD_105_PROTOCOL: LOADED",
  "HSSE_MATRIX: SYNCING...",
  "PESO_VALIDATION: VERIFIED",
  "GEOSPATIAL_GRID: MAPPED",
  "SAFETY_LAYER: SECURE",
  "OPERATIONAL_READY: TRUE"
];

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [currentLog, setCurrentLog] = useState(BOOT_LOGS[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1200); 
          return 100;
        }
        
        // Dynamic stepping for a more "system-like" loading experience
        const jump = Math.random() > 0.8 ? Math.floor(Math.random() * 8) + 2 : Math.floor(Math.random() * 3) + 1;
        const next = Math.min(100, prev + jump);
        
        // Update logs based on progress
        const logIndex = Math.floor((next / 100) * BOOT_LOGS.length);
        if (BOOT_LOGS[logIndex] && BOOT_LOGS[logIndex] !== currentLog) {
          setCurrentLog(BOOT_LOGS[logIndex]);
        }
        
        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete, currentLog]);

  return (
    <motion.div
      key="preloader"
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center bg-[#0b0f19] text-white overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        clipPath: "inset(0 0 100% 0)",
        transition: { duration: 1, ease: [0.8, 0, 0.1, 1] } 
      }}
    >
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Central Content */}
      <div className="relative w-80 md:w-[480px]">
        
        {/* Header Branding */}
        <div className="flex flex-col mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-2"
          >
            <div className="w-2 h-2 rounded-full bg-industrial-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-industrial-primary/80">Infrastructure Systems v2.9</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-black tracking-tighter leading-none"
          >
            PERFECT <span className="text-industrial-primary">LOGISTICS</span>
          </motion.h1>
        </div>

        {/* Progress Display */}
        <div className="relative">
          <div className="flex justify-between items-end mb-3 px-1">
            <div className="flex flex-col">
              <AnimatePresence mode="wait">
                <motion.span 
                  key={currentLog}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 5 }}
                  className="text-[9px] font-mono text-industrial-accent uppercase tracking-widest"
                >
                  {currentLog}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-white font-mono text-2xl font-light">
              {count}<span className="text-xs opacity-40 ml-1">%</span>
            </span>
          </div>
          
          {/* Main Progress Bar */}
          <div className="h-[3px] w-full bg-white/5 overflow-hidden relative rounded-full">
            <motion.div 
              className="h-full bg-industrial-primary shadow-[0_0_20px_rgba(0,166,81,0.6)]"
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              transition={{ ease: "linear" }}
            />
            
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
          </div>

          {/* Terminal Footer Info */}
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
            <div className="flex flex-col gap-1">
              <span className="text-[8px] text-slate-500 uppercase font-black tracking-widest">Global Status</span>
              <span className="text-[10px] text-slate-300 font-bold">SEA_REGION_OPERATIONAL</span>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[8px] text-slate-500 uppercase font-black tracking-widest">System Hash</span>
              <span className="text-[10px] text-slate-300 font-mono">0x4F9B...{count}E</span>
            </div>
          </div>
        </div>

        {/* Visual Decoration Elements */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-industrial-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-industrial-accent/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Side Numbers (Aesthetic Only) */}
      <div className="absolute left-6 bottom-6 flex flex-col gap-1 opacity-20 font-mono text-[8px] text-slate-500 hidden md:flex">
        <span>01011001 01010101</span>
        <span>01010111 01101001</span>
        <span>PL_LOG_2025_Q1</span>
      </div>
      <div className="absolute right-6 bottom-6 text-[8px] font-mono text-slate-500 uppercase tracking-widest opacity-20 hidden md:block">
        © Perfect_Logistics_Engineering_Unit
      </div>
    </motion.div>
  );
};

export default Preloader;