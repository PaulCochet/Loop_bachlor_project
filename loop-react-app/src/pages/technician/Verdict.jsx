import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';

const TechnicianVerdict = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f9f7] min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/technician/diagnostic')}
            className="p-1 rounded-full active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-[#1a1c1b]">chevron_left</span>
          </button>
          <h1 className="font-bold italic uppercase tracking-tight text-[#1a1c1b]">Saisir le verdict</h1>
        </div>
        <div className="text-xl italic font-black text-[#1a1c1b]">LOOP</div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        <section className="mb-10">
          <p className="text-[#8C8C8C] font-medium tracking-wide">Lave-linge Samsung — Sophie M.</p>
        </section>

        {/* Verdict Cards Selection */}
        <section className="space-y-4 mb-12">
          {[
            { id: 'repairable', title: 'Réparable', desc: "L'appareil peut être remis en état", selected: true },
            { id: 'resale', title: 'À reprendre', desc: 'Valeur de revente ou reconditionnement', selected: false },
            { id: 'recycle', title: 'À recycler', desc: 'Non réparable, orienter vers filière DEEE', selected: false }
          ].map((option) => (
            <motion.div 
              key={option.id}
              whileTap={{ scale: 0.98 }}
              className={`group cursor-pointer rounded-xl p-5 bg-white border-2 flex items-center gap-4 shadow-sm transition-all ${option.selected ? 'border-[#003cdd]' : 'border-gray-100 opacity-60'}`}
            >
              <span className={`material-symbols-outlined text-3xl ${option.selected ? 'text-[#003cdd]' : 'text-gray-300'}`} style={{ fontVariationSettings: option.selected ? "'FILL' 1" : "'FILL' 0" }}>
                {option.selected ? 'radio_button_checked' : 'radio_button_unchecked'}
              </span>
              <div className="flex-1">
                <p className="font-bold text-lg leading-tight">{option.title}</p>
                <p className="text-sm text-[#8C8C8C] opacity-80">{option.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Intervention Details */}
        <section className="mb-12">
          <h2 className="text-xs font-black uppercase tracking-[0.2em] text-[#8C8C8C] mb-6">Détail de l'intervention</h2>
          <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 text-[#1a1c1b]">
              <span className="material-symbols-outlined text-[#003cdd]" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
              <span className="font-bold">Pièce remplacée: <span className="font-medium text-[#8C8C8C]">Pompe de vidange</span></span>
            </div>
          </div>
          
          <div className="relative">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#003cdd] mb-2 ml-1">Observations</label>
            <textarea 
              className="w-full bg-white border border-gray-100 rounded-xl p-5 text-[#1a1c1b] placeholder:text-gray-300 focus:ring-2 focus:ring-[#003cdd]/20 outline-none min-h-[140px] transition-all resize-none shadow-sm" 
              placeholder="Précisez les tests effectués, l'état général de la cuve ou tout point d'attention particulier..."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-12">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/technician/dashboard')}
            className="w-full bg-[#1a1c1b] text-white py-5 rounded-xl font-bold text-base tracking-wide flex items-center justify-center gap-2 shadow-xl"
          >
            Valider & générer le certificat
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </motion.button>
        </section>
      </main>

      <TechNavBar />
    </div>
  );
};

export default TechnicianVerdict;
