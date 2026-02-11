import React from 'react';

export const Logo: React.FC<{ className?: string, showText?: boolean }> = ({ 
  className = "h-10", 
  showText = true 
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Engineered SVG Logo */}
      <svg viewBox="0 0 100 100" className="h-full w-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* The Green 'P' Structure */}
        <path 
          d="M25 15 H65 C82 15 90 28 90 45 C90 62 82 75 65 75 H50 V90 H25 V15 Z" 
          stroke="#00A651" 
          strokeWidth="9" 
          strokeLinejoin="round"
          fill="none"
        />
        {/* The Blue 'L' Foundation */}
        <path 
          d="M50 50 V90 H85" 
          stroke="#00ADEF" 
          strokeWidth="9" 
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        {/* Internal Drop Logic Symbol */}
        <path 
          d="M57.5 35 C57.5 35 68 44 68 53 C68 59 64 62 57.5 62 C51 62 47 59 47 53 C47 44 57.5 35 57.5 35 Z" 
          fill="#1e293b"
        />
        <path d="M47 49 H68" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      
      {/* Brand Typography Grid */}
      {showText && (
        <div className="font-sans font-black text-xl tracking-tighter leading-[0.85] flex flex-col justify-center">
          <div className="flex items-baseline overflow-hidden">
            <span className="text-[#00A651] text-2xl mr-0.5">P</span>
            <span className="text-industrial-text">ERFECT</span>
          </div>
          <div className="flex items-baseline mt-0.5 overflow-hidden">
            <span className="text-[#00ADEF] text-2xl mr-0.5">L</span>
            <span className="text-industrial-text">OGISTICS</span>
          </div>
        </div>
      )}
    </div>
  );
};