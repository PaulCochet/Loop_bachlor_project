import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';
import Button from '../../components/shared/Button';
import { useGlobalState } from '../../context/GlobalStateContext';

const TechnicianVerdict = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useGlobalState();

  const options = [
    { id: 'repairable', title: 'Réparable', desc: "L'appareil peut être remis en état", icon: 'build' },
    { id: 'resale', title: 'À reprendre', desc: 'Valeur de revente ou reconditionnement', icon: 'autorenew' },
    { id: 'recycle', title: 'À recycler', desc: 'Non réparable, orienter vers filière DEEE', icon: 'delete' }
  ];

  const selectedOption = formData.techVerdict || 'repairable';

  return (
    <div className="bg-[#f9f9f7] min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/technician/diagnostic')}
            className="p-1 rounded-full active:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[#0D46F2] font-black">chevron_left</span>
          </motion.button>
          <h1 className="font-bold italic uppercase tracking-tight text-[#1a1c1b]">Saisir le verdict</h1>
        </div>
        <img src="/logo.svg" alt="Loop" className="h-6 w-auto" />
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        <section className="mb-10 mt-4">
          <p className="text-[#8C8C8C] font-black uppercase text-[10px] tracking-widest">Lave-linge Samsung — Sophie M.</p>
        </section>

        {/* Verdict Cards Selection */}
        <section className="space-y-4 mb-12">
          {options.map((option) => {
            const isSelected = selectedOption === option.id;
            return (
              <motion.div 
                key={option.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => updateFormData('techVerdict', option.id)}
                className={`cursor-pointer rounded-[24px] p-6 bg-white border-2 flex items-center gap-4 transition-all duration-200 ${
                  isSelected 
                    ? 'border-[#0D46F2] shadow-xl shadow-[#0D46F2]/5' 
                    : 'border-transparent opacity-60'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                  isSelected ? 'bg-[#0D46F2] text-white' : 'bg-gray-100 text-gray-400'
                }`}>
                  <span className="material-symbols-outlined">{option.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-black italic text-lg uppercase leading-tight">{option.title}</p>
                  <p className="text-xs text-[#8C8C8C] font-medium">{option.desc}</p>
                </div>
                {isSelected && (
                  <span className="material-symbols-outlined text-[#0D46F2]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                )}
              </motion.div>
            );
          })}
        </section>

        {/* Intervention Details */}
        <section className="mb-12">
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8C8C8C] mb-6 ml-1">Détail de l'intervention</h2>
          <div className="bg-white rounded-[24px] p-6 mb-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 text-[#1a1c1b]">
              <span className="material-symbols-outlined text-[#0D46F2] !text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
              <span className="font-bold text-sm">Pièce remplacée: <span className="text-[#8C8C8C] font-medium ml-1">Pompe de vidange Samsung</span></span>
            </div>
          </div>
          
          <div className="space-y-3 px-1">
            <label className="block text-[10px] font-black uppercase tracking-widest text-[#8C8C8C]">Commentaires finaux</label>
            <textarea 
              value={formData.techFinalComments || ''}
              onChange={(e) => updateFormData('techFinalComments', e.target.value)}
              className="w-full bg-white border-2 border-transparent rounded-[24px] p-6 text-[#1a1c1b] placeholder:text-gray-300 focus:border-[#0D46F2] outline-none min-h-[160px] transition-all resize-none shadow-sm font-medium" 
              placeholder="Précisez les tests effectués, l'état général de la cuve..."
            />
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-12">
          <Button onClick={() => navigate('/technician/dashboard')}>
            Valider & clôturer la mission
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
          </Button>
        </section>
      </main>

      <TechNavBar />
    </div>
  );
};

export default TechnicianVerdict;
