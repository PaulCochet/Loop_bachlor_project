import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import ScreenLayout from '../../components/shared/ScreenLayout';

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
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={() => navigate('/technician/diagnostic')}>
                    Continuer
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Button>
                <Button variant="ghost" onClick={() => navigate('/technician/mission')}>
                    ‹ Retour
                </Button>
            </div>
        }
    >
      <ProgressBar step={1} totalSteps={4} />
      
      <div className="pt-4 pb-12 flex flex-col items-center">
        <div className="mb-2 w-full">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 1 sur 4</span>
        </div>

        <div className="mb-10 w-full text-left">
          <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2">
            Scanner l'appareil
          </h1>
          <p className="text-sm font-medium text-[#8C8C8C]">Scannez le QR code ou approchez le NFC</p>
        </div>

        {/* Live Camera Viewfinder */}
        <div className="relative w-full aspect-square max-w-[320px] mb-10">
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#0D46F2] rounded-tl-[24px] z-20"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#0D46F2] rounded-tr-[24px] z-20"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#0D46F2] rounded-bl-[24px] z-20"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#0D46F2] rounded-br-[24px] z-20"></div>

          <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl bg-gray-200 relative border-2 border-white/20">
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#0D46F2] rounded-full shadow-[0_0_12px_#0D46F2]"></div>
              </div>
              <div className="absolute bottom-4 right-6 text-[8px] font-bold text-white/50 uppercase tracking-widest">Scanning... {progress}%</div>
            </div>

            <img 
              alt="QR Scan" 
              className="w-full h-full object-cover grayscale-[0.2] brightness-75" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxhqbl2VeMS_lBrf6BAyTdu7GiObviGlk7uVDzCfnVpckQY1r43LzhfRhryiKAmyQhQI7aOs9mTnRT0a8klv-AUXkSjGa3gfhPgGJhNRPcwf73iOS-EYUkTAvomPpfxL0JLL9WtWpvY_cto-K4UfxaliDUtkMnOlT9TQEEi6ExJhTl4JlLtX2ayRNuWorH3MxgsCtrNG4JenCBUnOLR8fE4fIX9o-4GO6pLLbxPXbXZFYqQmNhaWkuBs2usJR59HoyLnAUgAgRbQU"
            />

            <motion.div 
              animate={{ top: ['20%', '80%', '20%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-x-0 h-0.5 bg-[#0D46F2] shadow-[0_0_15px_2px_#0D46F2] z-10" 
            />
          </div>
        </div>

        {/* Detection Card */}
        <section className="w-full bg-[#f9f9f7] rounded-[24px] p-6 border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl display-text tracking-tight mb-1 text-[#1a1c1b] uppercase">Samsung WW90</h2>
              <p className="text-[#8C8C8C] display-text text-[10px] uppercase tracking-widest">WW90CGC04DAE — 2022</p>
            </div>
            <div className="bg-red-50 px-3 py-1 rounded-full border border-red-100">
              <span className="text-red-600 text-[10px] display-text uppercase tracking-tighter">Code: E21</span>
            </div>
          </div>
          
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#0D46F2] text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <p className="text-sm font-bold leading-tight">Panne connue: pompe de vidange défaillante</p>
            </div>
          </div>
        </section>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianScan;
