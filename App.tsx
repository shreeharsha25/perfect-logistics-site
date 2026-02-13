import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/ui/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import InfrastructureScroll from './components/InfrastructureScroll';
import Clients from './components/Clients';
import Services from './components/Services';
import Safety from './components/Safety';
import Leadership from './components/Leadership';
import Footer from './components/Footer';
import About from './components/About';
import ServiceRequirementForm from './components/ServiceRequirementForm';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import TechnicalManual from './components/TechnicalManual';
import BackToTop from './components/ui/BackToTop';
import ScrollProgress from './components/ui/ScrollProgress';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { motion } from 'framer-motion';
import { Building2, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { SectionHeading } from './components/ui/SectionHeading';

// Register ScrollTrigger globally
gsap.registerPlugin(ScrollTrigger);

// --- Page Components ---

const Home = () => (
  <main className="flex-grow w-full font-sans relative z-10">
    <Hero />
    <Clients />
    <InfrastructureScroll />
    
    {/* Enhanced Spacing Wrapper for Services & Safety - Gap removed for better blend */}
    <div className="flex flex-col gap-0">
      <Services />
      <Safety />
    </div>

    {/* Leadership separated to reduce gap */}
    <Leadership />
  </main>
);

const AboutPage = () => (
  <main className="flex-grow w-full font-sans relative z-10">
    <About />
  </main>
);

const ServicesPage = () => (
  <main className="flex-grow pt-20 w-full font-sans relative z-10">
    <Services />
  </main>
);

const SafetyPage = () => (
  <main className="flex-grow pt-20 w-full font-sans relative z-10">
    <Safety />
  </main>
);

const Contact = () => (
  <main className="flex-grow pt-20 w-full font-sans relative z-10">
     <div className="bg-slate-900 text-white pt-24 pb-32 md:pb-48 border-b border-slate-800 relative overflow-hidden">
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
       
       <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-industrial-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
               Global Network
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact & Locations</h1>
            <p className="text-slate-400 max-w-xl md:max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Managing critical petroleum infrastructure and logistics across India and Southeast Asia.
            </p>
          </motion.div>
       </div>
    </div>
     
     <div className="container mx-auto px-4 md:px-12 -mt-20 md:-mt-32 relative z-20 pb-20">
        <div className="bg-white border border-slate-200 rounded-lg shadow-xl mb-12 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-2/3 p-6 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-5 mb-8">
                 <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-industrial-bg to-slate-200 rounded-lg border border-slate-300 flex items-center justify-center text-industrial-primary shadow-inner">
                   <Building2 size={28} className="md:w-8 md:h-8" />
                 </div>
                 <div>
                   <h3 className="text-xl md:text-3xl font-bold text-industrial-text">Corporate Headquarters</h3>
                   <span className="text-industrial-muted uppercase text-xs tracking-widest font-bold">Mangalore, India</span>
                 </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                   <h4 className="text-sm font-bold text-industrial-text uppercase tracking-wider mb-4 border-b border-industrial-border pb-2">Address</h4>
                   <p className="text-industrial-muted leading-relaxed text-sm md:text-base font-medium">
                     <strong className="text-industrial-text block mb-1">Perfect Logistics</strong>
                     1st Floor, Vishnukripa Building,<br/>
                     NH 17, Opp. Syndicate Bank,<br/>
                     Kulai, Mangalore - 575 010<br/>
                     Karnataka, India.
                   </p>
                </div>
                <div>
                   <h4 className="text-sm font-bold text-industrial-text uppercase tracking-wider mb-4 border-b border-industrial-border pb-2">Communications</h4>
                   <ul className="space-y-4 text-sm md:text-base">
                     <li>
                        <a href="tel:+918242409905" className="flex items-center gap-3 text-industrial-muted hover:text-industrial-primary transition-all duration-300 group hover:translate-x-1">
                          <span className="p-2 bg-slate-50 border border-slate-200 rounded-full group-hover:bg-industrial-primary group-hover:text-white group-hover:border-industrial-primary group-hover:scale-110 transition-all duration-300"><Phone size={14} /></span> 
                          <span className="font-medium">+91 824 240 9905</span>
                        </a>
                     </li>
                     <li>
                        <a href="tel:+919900048837" className="flex items-center gap-3 text-industrial-muted hover:text-industrial-primary transition-all duration-300 group hover:translate-x-1">
                          <span className="p-2 bg-slate-50 border border-slate-200 rounded-full group-hover:bg-industrial-primary group-hover:text-white group-hover:border-industrial-primary group-hover:scale-110 transition-all duration-300"><Phone size={14} /></span> 
                          <span className="font-medium">+91 99000 48837</span>
                        </a>
                     </li>
                     <li>
                        <a href="mailto:info@perfectlogistics.in" className="flex items-center gap-3 text-industrial-muted hover:text-industrial-primary transition-all duration-300 group hover:translate-x-1">
                          <span className="p-2 bg-slate-50 border border-slate-200 rounded-full group-hover:bg-industrial-primary group-hover:text-white group-hover:border-industrial-primary group-hover:scale-110 transition-all duration-300"><Mail size={14} /></span> 
                          <span className="break-all font-medium">info@perfectlogistics.in</span>
                        </a>
                     </li>
                   </ul>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/3 bg-slate-900 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden border-t lg:border-t-0 lg:border-l border-slate-800">
               <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:100%_4px] opacity-20 pointer-events-none" />
               <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-6 text-industrial-accent">
                    <Globe size={24} />
                    <span className="text-sm font-bold uppercase tracking-widest">Overseas Office</span>
                 </div>
                 <h3 className="text-2xl font-bold mb-4">Singapore</h3>
                 <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                   International coordination hub for Southeast Asian logistics and infrastructure projects.
                 </p>
                 <div className="space-y-1 text-sm text-slate-300 font-mono">
                    <p>#38, 3-05, Defu Lane,</p>
                    <p>Singapore - 539215</p>
                 </div>
               </div>
               <div className="relative z-10 mt-8 pt-8 border-t border-slate-700">
                  <a href="tel:+6591992502" className="flex items-center gap-3 text-slate-100 hover:text-industrial-accent transition-all duration-300 hover:translate-x-1 group">
                    <div className="p-1.5 bg-slate-800 border border-slate-700 rounded-full group-hover:bg-industrial-accent group-hover:text-slate-900 group-hover:scale-110 transition-all duration-300">
                      <Phone size={14} /> 
                    </div>
                    <span className="font-mono text-lg">+65 91992502</span>
                  </a>
               </div>
            </div>
        </div>

        <div className="mb-24">
          <SectionHeading subtitle="National Reach" title="Regional Branches" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { city: "Chennai", state: "Tamil Nadu", addr: "No. 78, Tamil Thalaivas, APJ road, BT nagar, Gerugambakkam, Chennai 600 122." },
                { city: "Bangalore", state: "Karnataka", addr: "No. 1A, 2nd main, Maruthi Nagar, Jigani-Bommasandra Link Road, Jigani, Bangalore 560 105" },
                { city: "Cochin", state: "Kerala", addr: "No. 50/1343D, Edappalli North, AIMS Post, Ponnekara, Cochin 682 041." },
                { city: "Nellore", state: "Andhra Pradesh", addr: "Muthukuru village, Krishnapattinam, Nellore 524344" },
                { city: "Karaikal", state: "Puducherry", addr: "No. 3, Elliamman Koil Street, T.R. Pattnam, Karaikal 609 606" },
                { city: "Noida", state: "Uttar Pradesh", addr: "No 1/72-c, Room no7, 2nd Floor, Hotel Grand Inn, Sector-126, Noida" }
              ].map((branch, idx) => (
                <motion.div 
                   key={idx} 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.05 }}
                   className="bg-gradient-to-b from-white to-slate-50 p-6 md:p-8 border border-slate-200 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col relative overflow-hidden"
                >
                   <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200">
                     <div className="flex items-center gap-3">
                       <MapPin size={20} className="text-industrial-primary transition-transform group-hover:scale-125" />
                       <h4 className="font-bold text-industrial-text text-lg">{branch.city}</h4>
                     </div>
                     <span className="text-[10px] text-industrial-muted uppercase font-bold tracking-wider bg-white border border-slate-200 px-2 py-1 rounded shadow-sm group-hover:bg-industrial-primary group-hover:text-white transition-colors">{branch.state}</span>
                   </div>
                   <p className="text-sm text-industrial-muted leading-relaxed flex-grow font-medium">{branch.addr}</p>
                </motion.div>
              ))}
          </div>
       </div>
    </div>

    <div className="border-t border-industrial-border">
      <Clients />
    </div>

    <div id="enquiry-form" className="bg-slate-50/50 border-t border-industrial-border pb-24 pt-16">
       <div className="container mx-auto px-4 md:px-6">
          <ServiceRequirementForm />
       </div>
    </div>
  </main>
);

// --- Scroll Manager ---
const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      ScrollTrigger.refresh();
      window.dispatchEvent(new Event('resize')); // Force Lenis to see new page height
    }, 100);
  }, [pathname]);
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Optimized for Trackpad Responsiveness
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });
    
    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // CRITICAL: Force update whenever the content actually renders
      // The delay ensures DOM painting is complete
      setTimeout(() => {
        ScrollTrigger.refresh();
        if (lenisRef.current) {
           lenisRef.current.resize();
        }
        window.dispatchEvent(new Event('resize')); 
      }, 500);
    }
  }, [isLoading]);

  return (
    <Router>
      <ScrollManager />
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <div className="min-h-screen flex flex-col font-sans w-full relative">
          <AnimatedBackground />
          <ScrollProgress />
          <BackToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/technical-manual" element={<TechnicalManual />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
}

export default App;