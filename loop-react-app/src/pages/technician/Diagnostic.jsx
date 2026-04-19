import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';

const TechnicianDiagnostic = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f9f7] min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/technician/scan')}
            className="p-1 rounded-full active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <span className="text-2xl font-black italic text-[#1a1c1b] uppercase tracking-widest leading-none">LOOP</span>
        </div>
        <button className="material-symbols-outlined text-[#464545] hover:opacity-70 active:scale-95 transition-all">
          settings
        </button>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {/* Title Section */}
        <section className="mb-8 mt-4">
          <h1 className="text-5xl font-black italic uppercase tracking-tight text-[#1a1c1b] leading-none mb-2">
            Diagnostic
          </h1>
          <p className="text-[#8C8C8C] font-medium tracking-wide">
            Lave-linge Samsung EcoBubble
          </p>
        </section>

        {/* Progress Section */}
        <section className="mb-10">
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-3">
            <motion.div 
              initial={{ width: '25%' }}
              animate={{ width: '50%' }}
              className="h-full bg-[#003cdd] shadow-[0_0_12px_rgba(0,60,221,0.4)]"
            />
          </div>
          <p className="text-sm text-[#8C8C8C] font-medium">
            Étape 2 sur 4 — Vérification électrique
          </p>
        </section>

        {/* Main Action Card */}
        <section className="mb-10">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold leading-tight text-[#1a1c1b] mb-8 max-w-xs">
              La pompe de vidange émet-elle un bruit anormal?
            </h2>
            <div className="flex gap-4">
              <motion.button 
                whileTap={{ scale: 0.96 }}
                className="flex-1 bg-[#1a1c1b] text-white py-4 rounded-xl font-bold"
              >
                Oui
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.96 }}
                className="flex-1 border-2 border-[#1a1c1b] text-[#1a1c1b] py-4 rounded-xl font-bold"
              >
                Non
              </motion.button>
            </div>
          </div>
        </section>

        {/* Observations */}
        <section className="mb-10">
          <label className="block text-xs uppercase tracking-widest font-black text-[#8C8C8C] mb-3">
            Observations technicien
          </label>
          <textarea 
            className="w-full bg-white border border-gray-100 rounded-xl p-4 min-h-[120px] focus:ring-2 focus:ring-[#003cdd] outline-none text-[#1a1c1b] placeholder:text-gray-300 transition-all shadow-sm"
            placeholder="Écrivez vos notes ici..."
          />
        </section>

        {/* History */}
        <section className="mb-12">
          <h3 className="text-xs uppercase tracking-widest font-black text-[#8C8C8C] mb-6">
            Étapes validées
          </h3>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003cdd]"></span>
              <span className="text-gray-600 font-medium">Vérification alimentation — <span className="text-[#1a1c1b] font-bold">OK</span></span>
            </li>
            <li className="flex items-center gap-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#003cdd]"></span>
              <span className="text-gray-600 font-medium">Lecture code erreur E21 — <span className="text-[#1a1c1b] font-bold">Pompe</span></span>
            </li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="mb-12">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/technician/verdict')}
            className="w-full bg-[#1a1c1b] text-white py-5 rounded-xl font-black text-lg flex justify-center items-center gap-2 shadow-lg"
          >
            Continuer
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.button>
        </section>
      </main>

      <TechNavBar />
    </div>
  );
};

export default TechnicianDiagnostic;
