import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800); 
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="preloader"
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      <div className="w-64">
        <div className="flex justify-between items-end mb-2">
          <span className="text-industrial-text font-bold text-xl tracking-tighter">PERFECT LOGISTICS</span>
          <span className="text-industrial-primary font-mono text-lg">{count}%</span>
        </div>
        <div className="h-[3px] w-full bg-industrial-border overflow-hidden rounded-full">
          <motion.div 
            className="h-full bg-industrial-primary"
            initial={{ width: 0 }}
            animate={{ width: `${count}%` }}
          />
        </div>
        <div className="mt-2 text-xs text-industrial-muted uppercase tracking-widest text-right">
          Loading Infrastructure Systems
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;