import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';

const TechnicianScan = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(true);
  const [progress, setProgress] = useState(78);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f9f9f7] min-h-screen flex flex-col pb-32">
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="flex items-center justify-between px-6 py-4 w-full">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/technician/mission')}
              className="flex items-center justify-center p-2 rounded-full active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[#1a1c1b]">chevron_left</span>
            </button>
            <h1 className="font-bold italic uppercase tracking-wider text-[#1a1c1b] text-lg">Scanner l'appareil</h1>
          </div>
          <button className="material-symbols-outlined text-[#1a1c1b]">more_vert</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-28 px-6 flex flex-col items-center max-w-lg mx-auto w-full">
        <p className="text-[#464545] font-medium text-center mb-8 max-w-[280px]">
          Scannez le QR code ou approchez le NFC
        </p>

        {/* Live Camera Viewfinder */}
        <div className="relative w-[280px] h-[280px] mb-10">
          {/* Viewfinder Brackets */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#003cdd] rounded-tl-2xl z-20"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#003cdd] rounded-tr-2xl z-20"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#003cdd] rounded-bl-2xl z-20"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#003cdd] rounded-br-2xl z-20"></div>

          {/* Simulated Camera Feed */}
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-inner bg-gray-200 relative border-2 border-white/20">
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* Central Target Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#003cdd] rounded-full shadow-[0_0_8px_rgba(0,60,221,0.5)]"></div>
                <div className="absolute h-full w-[1px] bg-white/10"></div>
                <div className="absolute w-full h-[1px] bg-white/10"></div>
              </div>
              
              {/* HUD Elements */}
              <div className="absolute top-4 left-6 text-[8px] font-mono text-white/50 uppercase tracking-widest">Focus Lock: Active</div>
              <div className="absolute bottom-4 right-6 text-[8px] font-mono text-white/50 uppercase tracking-widest">Scanning... {progress}%</div>
            </div>

            <img 
              alt="QR Scan" 
              className="w-full h-full object-cover grayscale-[0.2] brightness-75" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxhqbl2VeMS_lBrf6BAyTdu7GiObviGlk7uVDzCfnVpckQY1r43LzhfRhryiKAmyQhQI7aOs9mTnRT0a8klv-AUXkSjGa3gfhPgGJhNRPcwf73iOS-EYUkTAvomPpfxL0JLL9WtWpvY_cto-K4UfxaliDUtkMnOlT9TQEEi6ExJhTl4JlLtX2ayRNuWorH3MxgsCtrNG4JenCBUnOLR8fE4fIX9o-4GO6pLLbxPXbXZFYqQmNhaWkuBs2usJR59HoyLnAUgAgRbQU"
            />

            {/* Scanning Beam */}
            <motion.div 
              animate={{ top: ['20%', '80%', '20%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-x-0 h-0.5 bg-[#003cdd] shadow-[0_0_15px_2px_rgba(0,60,221,0.8)] z-10" 
            />
          </div>
        </div>

        {/* Detection Card */}
        <section className="w-full bg-white rounded-xl p-6 mb-8 border border-gray-100 shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold tracking-tight mb-1 text-[#1a1c1b]">Lave-linge Samsung WW90</h2>
              <p className="text-[#8C8C8C] font-mono text-sm tracking-tight">WW90CGC04DAE — 2022</p>
            </div>
            <div className="bg-red-50 px-3 py-1 rounded-full border border-red-100">
              <span className="text-red-600 text-[10px] font-bold font-mono">CODE: E21</span>
            </div>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-gray-50 text-[#1a1c1b]">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#003cdd] text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <div>
                <p className="text-sm font-medium leading-tight">Panne connue: pompe de vidange défaillante</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 py-2 px-3 bg-[#f9f9f7] rounded-lg border border-gray-100">
              <span className="material-symbols-outlined text-[#8C8C8C]">image</span>
              <p className="text-xs font-medium text-[#464545]">Photo de l'usager disponible</p>
              <span className="material-symbols-outlined text-[#003cdd] ml-auto text-sm">open_in_new</span>
            </div>
          </div>
        </section>

        {/* Primary Action */}
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/technician/diagnostic')}
          className="w-full bg-[#1a1c1b] text-white py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg"
        >
          Lancer le diagnostic
          <span className="material-symbols-outlined">arrow_forward</span>
        </motion.button>
      </main>

      <TechNavBar />
    </div>
  );
};

export default TechnicianScan;
