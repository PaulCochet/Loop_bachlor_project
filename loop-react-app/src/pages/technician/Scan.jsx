import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';
import Button from '../../components/shared/Button';

const TechnicianScan = () => {
  const navigate = useNavigate();
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
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/technician/mission')}
              className="flex items-center justify-center p-2 rounded-full active:bg-gray-100 transition-colors"
            >
              <span className="material-symbols-outlined text-[#0D46F2] font-black">chevron_left</span>
            </motion.button>
            <h1 className="font-bold italic uppercase tracking-wider text-[#1a1c1b] text-lg">Scanner l'appareil</h1>
          </div>
          <button className="material-symbols-outlined text-[#1a1c1b]">more_vert</button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow pt-28 px-6 flex flex-col items-center max-w-lg mx-auto w-full">
        <p className="text-[#8C8C8C] font-black uppercase text-[10px] tracking-widest text-center mb-8 max-w-[280px]">
          Scannez le QR code ou approchez le NFC
        </p>

        {/* Live Camera Viewfinder */}
        <div className="relative w-[280px] h-[280px] mb-10">
          {/* Viewfinder Brackets */}
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#0D46F2] rounded-tl-[24px] z-20"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#0D46F2] rounded-tr-[24px] z-20"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#0D46F2] rounded-bl-[24px] z-20"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#0D46F2] rounded-br-[24px] z-20"></div>

          {/* Simulated Camera Feed */}
          <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl bg-gray-200 relative border-2 border-white/20">
            <div className="absolute inset-0 pointer-events-none z-10">
              {/* Central Target Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#0D46F2] rounded-full shadow-[0_0_12px_#0D46F2]"></div>
                <div className="absolute h-full w-[1px] bg-white/10"></div>
                <div className="absolute w-full h-[1px] bg-white/10"></div>
              </div>
              
              {/* HUD Elements */}
              <div className="absolute top-4 left-6 text-[8px] font-bold text-white/50 uppercase tracking-widest">Focus Lock: Active</div>
              <div className="absolute bottom-4 right-6 text-[8px] font-bold text-white/50 uppercase tracking-widest">Scanning... {progress}%</div>
            </div>

            <img 
              alt="QR Scan" 
              className="w-full h-full object-cover grayscale-[0.2] brightness-75 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxhqbl2VeMS_lBrf6BAyTdu7GiObviGlk7uVDzCfnVpckQY1r43LzhfRhryiKAmyQhQI7aOs9mTnRT0a8klv-AUXkSjGa3gfhPgGJhNRPcwf73iOS-EYUkTAvomPpfxL0JLL9WtWpvY_cto-K4UfxaliDUtkMnOlT9TQEEi6ExJhTl4JlLtX2ayRNuWorH3MxgsCtrNG4JenCBUnOLR8fE4fIX9o-4GO6pLLbxPXbXZFYqQmNhaWkuBs2usJR59HoyLnAUgAgRbQU"
            />

            {/* Scanning Beam */}
            <motion.div 
              animate={{ top: ['20%', '80%', '20%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-x-0 h-0.5 bg-[#0D46F2] shadow-[0_0_15px_2px_#0D46F2] z-10" 
            />
          </div>
        </div>

        {/* Detection Card */}
        <section className="w-full bg-white rounded-[24px] p-6 mb-8 border border-gray-100 shadow-xl shadow-black/5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-black italic tracking-tight mb-1 text-[#1a1c1b] uppercase">Samsung WW90</h2>
              <p className="text-[#8C8C8C] font-black text-[10px] uppercase tracking-widest">WW90CGC04DAE — 2022</p>
            </div>
            <div className="bg-red-50 px-3 py-1 rounded-full border border-red-100">
              <span className="text-red-600 text-[10px] font-black italic uppercase tracking-tighter">Code: E21</span>
            </div>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-gray-50 text-[#1a1c1b]">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0D46F2] text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <div>
                <p className="text-sm font-bold leading-tight">Panne connue: pompe de vidange défaillante</p>
              </div>
            </div>
            
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 py-3 px-4 bg-[#f9f9f7] rounded-[16px] border border-gray-100 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#8C8C8C] !text-[20px]">image</span>
              <p className="text-xs font-bold uppercase tracking-tight text-[#464545]">Photo de l'usager</p>
              <span className="material-symbols-outlined text-[#0D46F2] ml-auto text-sm font-black">open_in_new</span>
            </motion.div>
          </div>
        </section>

        {/* Primary Action */}
        <Button onClick={() => navigate('/technician/diagnostic')}>
          Lancer le diagnostic
          <span className="material-symbols-outlined">arrow_forward</span>
        </Button>
      </main>

      <TechNavBar />
    </div>
  );
};

export default TechnicianScan;
