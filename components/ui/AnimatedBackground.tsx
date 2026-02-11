import React, { useEffect } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    // Only track mouse if device has pointer capabilities to save resources on mobile
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      const handleMouseMove = (e: MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY]);

  // Dynamic mask for the spotlight effect
  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-industrial-bg">
      {/* 1. Base Structural Grid (Passive) - Animating */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.3]"
        animate={{ 
          backgroundPosition: ["0px 0px", "64px 64px"] 
        }}
        transition={{ 
          duration: 40, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />

      {/* 2. Interactive Spotlight Grid (Active Highlight) - Animating in sync */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#00A651_1px,transparent_1px),linear-gradient(to_bottom,#00A651_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.25]"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
        }}
        animate={{ 
          backgroundPosition: ["0px 0px", "64px 64px"] 
        }}
        transition={{ 
          duration: 40, 
          ease: "linear", 
          repeat: Infinity 
        }}
      />

      {/* 3. Abstract Technical Rings (Engineered Motion) */}
      {/* Outer Dashed Ring */}
      <motion.div
        className="absolute -right-[40%] -top-[10%] md:-right-[10%] md:-top-[20%] w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full border border-industrial-border/60 border-dashed opacity-20 md:opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 120, ease: "linear", repeat: Infinity }}
      />
      
      {/* Middle Solid Ring */}
      <motion.div
        className="absolute -right-[30%] -top-[5%] md:-right-[5%] md:-top-[15%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border border-industrial-primary/5 opacity-30 md:opacity-60"
        animate={{ rotate: -360 }}
        transition={{ duration: 150, ease: "linear", repeat: Infinity }}
      />

      {/* Inner Accent Ring */}
      <motion.div
        className="absolute -right-[20%] top-[0%] md:-right-[0%] md:-top-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border border-industrial-accent/10 opacity-20 md:opacity-40"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ 
          rotate: { duration: 100, ease: "linear", repeat: Infinity },
          scale: { duration: 10, ease: "easeInOut", repeat: Infinity }
        }}
      />
    </div>
  );
};
