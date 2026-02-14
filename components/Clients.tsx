import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Client {
  name: string;
  logo: string;
  width?: number; // Optional visual balancing
}

const CLIENTS: Client[] = [
  // Oil & Gas PSUs

  { name: "Indian Oil Petronas Private Limited", logo: "./indianoil.png", width: 80 },
  { name: "BPCL", logo: "./Bharat_Petroleum_logo.svg", width: 80 },
  { name: "HCL technology ltd", logo: "./HCLtech.png", width: 80 },
  
  // Private Energy & Infrastructure
  

  { name: "Shell", logo: "./Shell.png", width: 70 },
  { name: "TotalGas", logo: "./totalgas.png", width: 90 },
  { name: "Suzlon", logo: "./suzlon.png", width: 100 },
  { name: "Tatsuno", logo: "./tatsuno.png", width: 110 },
  { name: "Lanco", logo: "./lanco.png", width: 90 },
  { name: "Bharathi Airtel", logo: "./airtel.png", width: 90 },
  
  // Engineering & Construction
 

  { name: "DLF", logo: "./DLF.png", width: 80 },
  
  // Tech & Corporate
  { name: "TCS", logo: "./tsc.png", width: 120 },
  { name: "HCLTech", logo: "./HCLtech.png", width: 100 },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/300px-Cisco_logo_blue_2016.svg.png", width: 80 },
  { name: "ETA Techno park ", logo: "", width: 80 },
  { name: "CTS India ", logo: "./cts.png", width: 80 },
  
  // Logistics
  { name: "DB Schenker", logo: "./DB_Schenker_logo.svg", width: 110 },
  { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/300px-Ford_logo_flat.svg.png", width: 100 },
  { name: "Geena & co", logo: "./jeena.png", width: 100 },
  { name: "Fly Jac Logistics", logo: "./flyjac.png", width: 100 },
  { name: "CCCL ltd", logo: "./cccl.png", width: 100 },
  { name: "Primeware Logistics ltd", logo: "", width: 100 },
  { name: "Udipi power projects ltd", logo: "", width: 100 },
];

const MARQUEE_CLIENTS = [...CLIENTS, ...CLIENTS];

const ClientLogo = ({ client }: { client: Client }) => {
  const [imgError, setImgError] = useState(!client.logo);

  if (imgError) {
    return (
      <div className="group flex items-center justify-center h-16 px-6 border border-slate-200 bg-slate-50 rounded-sm hover:border-industrial-primary/50 hover:bg-white hover:shadow-md transition-all duration-300 min-w-[140px] cursor-default">
        <span className="text-sm font-bold text-slate-500 group-hover:text-industrial-primary tracking-wider uppercase whitespace-nowrap font-sans">
          {client.name}
        </span>
      </div>
    );
  }

  return (
    <div className="relative group flex items-center justify-center h-24 w-40 px-4 transition-all duration-300">
       <img 
        src={client.logo} 
        alt={`${client.name} Partner Logo`}
        style={{ maxWidth: client.width ? `${client.width}px` : '100px' }}
        className="max-h-14 w-auto object-contain opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
        onError={() => setImgError(true)}
      />
    </div>
  );
};

const Clients: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white border-b border-industrial-border overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
         <h3 className="text-industrial-muted text-xs font-bold tracking-[0.2em] uppercase mb-2">
            Trusted by Industry Leaders
          </h3>
          <div className="w-12 h-1 bg-industrial-border mx-auto rounded-full" />
      </div>
      
      <div className="relative w-full py-8">
         <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

         <div className="flex overflow-hidden">
           <motion.div
             className="flex gap-8 md:gap-16 items-center pl-8"
             animate={{ x: "-50%" }} 
             transition={{
               duration: 80, 
               ease: "linear",
               repeat: Infinity
             }}
             style={{ width: "max-content" }}
           >
             {MARQUEE_CLIENTS.map((client, index) => (
               <div key={`${client.name}-${index}`} className="flex-shrink-0">
                 <ClientLogo client={client} />
               </div>
             ))}
           </motion.div>
         </div>
      </div>
    </section>
  );
};

export default Clients;