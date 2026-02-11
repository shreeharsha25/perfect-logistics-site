import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  subtitle, 
  title, 
  align = 'left' 
}) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block text-industrial-accent text-xs font-bold tracking-[0.2em] uppercase mb-3"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl font-semibold tracking-tight text-industrial-text"
      >
        {title}
      </motion.h2>
      <div className={`h-1 w-12 bg-industrial-border mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};