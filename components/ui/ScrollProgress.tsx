import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 h-32 md:h-48 w-[2px] bg-slate-200 z-50 rounded-full overflow-hidden hidden md:block">
      <motion.div 
        className="w-full bg-industrial-primary origin-top"
        style={{ scaleY }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2 text-[10px] font-bold text-industrial-muted uppercase tracking-widest whitespace-nowrap origin-bottom -rotate-90">
        Progress
      </div>
    </div>
  );
};

export default ScrollProgress;