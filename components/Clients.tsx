import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Client {
  name: string;
  logo: string;
  width?: number; // Optional visual balancing
}

const CLIENTS: Client[] = [
  // Oil & Gas PSUs
  { name: "Hindustan Petroleum", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Hindustan_Petroleum_Logo.svg/300px-Hindustan_Petroleum_Logo.svg.png", width: 80 },
  { name: "Indian Oil", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Indian_Oil_Corporation_Logo.svg/300px-Indian_Oil_Corporation_Logo.svg.png", width: 80 },
  { name: "ONGC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Oil_and_Natural_Gas_Corporation_logo.svg/300px-Oil_and_Natural_Gas_Corporation_logo.svg.png", width: 80 },
  { name: "Bharat Petroleum", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Bharat_Petroleum_Logo.svg/300px-Bharat_Petroleum_Logo.svg.png", width: 80 },
  { name: "GAIL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/GAIL_Logo.svg/300px-GAIL_Logo.svg.png", width: 70 },
  { name: "MRPL", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Mangalore_Refinery_and_Petrochemicals_Limited_Logo.svg/300px-Mangalore_Refinery_and_Petrochemicals_Limited_Logo.svg.png", width: 90 },
  
  // Private Energy & Infrastructure
  { name: "Reliance Industries", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/300px-Reliance_Industries_Logo.svg.png", width: 100 },
  { name: "Nayara Energy", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Nayara_Energy_logo.svg/300px-Nayara_Energy_logo.svg.png", width: 110 },
  { name: "Shell", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e8/Shell_logo.svg/300px-Shell_logo.svg.png", width: 70 },
  { name: "TotalEnergies", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/TotalEnergies_logo.svg/300px-TotalEnergies_logo.svg.png", width: 90 },
  { name: "Suzlon", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Suzlon_Energy_Logo.svg/300px-Suzlon_Energy_Logo.svg.png", width: 100 },
  { name: "Tatsuno", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tatsuno_Corporation_logo.svg/320px-Tatsuno_Corporation_logo.svg.png", width: 110 },
  { name: "Lanco", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Lanco_Infratech_Logo.jpg/320px-Lanco_Infratech_Logo.jpg", width: 90 },
  
  // Engineering & Construction
  { name: "L&T Technology Services", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/L%26T_Technology_Services_logo.svg/300px-L%26T_Technology_Services_logo.svg.png", width: 120 },
  { name: "Tata Projects", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/300px-Tata_logo.svg.png", width: 90 },
  { name: "DLF", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/DLF_logo.svg/300px-DLF_logo.svg.png", width: 80 },
  
  // Tech & Corporate
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/300px-Tata_Consultancy_Services_Logo.svg.png", width: 120 },
  { name: "HCLTech", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/HCL_Tech_logo_2022.svg/300px-HCL_Tech_logo_2022.svg.png", width: 100 },
  { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/300px-Cisco_logo_blue_2016.svg.png", width: 80 },
  
  // Logistics
  { name: "Blue Dart", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Blue_Dart_logo.svg/300px-Blue_Dart_logo.svg.png", width: 100 },
  { name: "DB Schenker", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/DB_Schenker_Logo.svg/300px-DB_Schenker_Logo.svg.png", width: 110 },
  { name: "Ford", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/300px-Ford_logo_flat.svg.png", width: 100 },
];

const MARQUEE_CLIENTS = [...CLIENTS, ...CLIENTS];

const ClientLogo = ({ client }: { client: Client }) => {
  const [imgError, setImgError] = useState(false);

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
    <section className="py-20 bg-white border-b border-industrial-border overflow-hidden">
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