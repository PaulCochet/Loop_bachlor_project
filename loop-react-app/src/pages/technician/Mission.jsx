import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';
import Button from '../../components/shared/Button';

const TechnicianMission = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="bg-white/80 backdrop-blur-xl text-[#1a1c1b] sticky top-0 z-50 px-6 pt-16 pb-4 flex justify-between items-end border-b border-gray-100">
        {/* Back Button */}
        <div className="absolute top-[44px] left-6 z-50">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/technician/dashboard')}
            className="flex items-center gap-1 text-[#0D46F2] font-semibold text-[17px]"
          >
            <span className="material-symbols-outlined !text-[24px]">chevron_left</span>
            <span>Retour</span>
          </motion.button>
        </div>

        <h1 className="italic font-black uppercase tracking-tighter text-4xl">
          Mission Brief
        </h1>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJWL7jlAwWsISMOzhM4cfU0kVM-Qo7ufIfiTe5Pev-zx1HtXt6jNc3UZxnx2YCLmxKjiCUQ9KjVZSrH2BfHNUCSakDnHHMkj0j2QAuu9Hre_5Wl08Tym-ExCkkRKFEtLFpQQIpIQgn4DYgjA0_UspimfDQ4TN_y8zYePet0tJ8xCNynpGpFjl3obaE8jCBIUyI3NPJRmnlVAJUQhS-0h_k048jvhqM1ShdCbrM2SvEjwemD8HgTM0M2CZq6vtlojH0i5qd8Jn1N5A"
            alt="Technician"
          />
        </div>
      </header>

      <main className="px-6 pt-8">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-black italic uppercase tracking-tighter text-[#1a1c1b]">Fiche mission</h2>
          <span className="px-3 py-1 bg-[#f2f2f7] text-[#8C8C8C] text-[10px] font-bold uppercase tracking-widest rounded-full">À venir</span>
        </div>

        <div className="space-y-6">
          {/* Card 1: Usager */}
          <section className="bg-white p-6 rounded-[24px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative overflow-hidden border border-gray-100">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-6">Usager</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-100">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL4__o4qZMZpV-t4oNiVNLbs9dYnsyAMFENMkUTZ1dZgUPlYL4PGl_UgawNbB5qlNjjQ7B3-CAV-u3AX6m7OM9ABY_8kJ0ZCTmmfOyorAsJwTwVl5xAAM39KZR9PyVZDr1RgCHW42Mrv_KRY0hdgzbsK6nOB0GwlbWx_0Y5NJHuAJi27bafnzYekvuygKU7qmEjqmOki606i1soPqBoB7qAGvYxEiDvj4lroujduqC6hLq7IoWnNDkamufBKICTC39nUaeIs6fXuQ"
                  alt="Usager"
                />
              </div>
              <div>
                <p className="text-lg font-extrabold text-[#1a1c1b]">Sophie M.</p>
                <p className="text-sm text-[#8C8C8C] font-medium">12 rue des Lilas Nantes</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#0D46F2] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <p className="text-sm font-bold text-[#1a1c1b]">Demain 9h00 à 11h00</p>
            </div>
          </section>

          {/* Card 2: Appareil */}
          <section className="bg-[#f9f9f7] p-6 rounded-[24px] relative overflow-hidden border border-gray-100">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-6">Appareil</h3>
            <div className="flex gap-6">
              <div className="w-24 h-24 bg-white rounded-[16px] overflow-hidden flex-shrink-0 shadow-sm">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8S8Dr0r_4OpGBc7BLhqEv9Jy76X0meRhQZJkomxF4AoGERzrYJqvixXRY7ljakocC5jO8XVN1N9j5I9W3U3BxbyCR1T7ZiEtc9jQaUNtpcbZut59BjVI9oX1NnexbbnNa50xN4Cr62h4N45rh6DmwhxStpHPl47MqY9Qa95zTBrLOKP2J_0PbXAYeVX3_yenoW945UsBkSDox4-cQJoS6BQR9b6pYmL1v9V1_7XjS3opkr4Ib3kT0DMpaCLyeL-kpKrd-GzAYoUs"
                  alt="Washing Machine"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-extrabold text-[#1a1c1b]">Lave-linge Samsung WW90</p>
                <div className="space-y-1">
                  <p className="text-xs text-[#8C8C8C] font-black uppercase tracking-widest">Problème</p>
                  <p className="text-sm font-medium text-[#464545]">S'arrête en cours de cycle</p>
                </div>
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-red-50 text-red-600 rounded text-[9px] font-black uppercase tracking-tighter italic">
                  Error Code: E21
                </div>
              </div>
            </div>
          </section>

          {/* Card 3: Suggested Parts */}
          <section className="bg-[#f2f2f7] p-6 rounded-[24px]">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-4 ml-1">Pièces à embarquer</h3>
            <ul className="space-y-3">
              {[
                'Pompe de vidange Samsung WW',
                'Carte électronique modèle E2x'
              ].map((part, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0D46F2] mt-1.5 flex-shrink-0"></span>
                  <span className="text-sm font-medium text-[#1a1c1b]">{part}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA Action */}
        <div className="mt-12 pb-12">
          <Button onClick={() => navigate('/technician/scan')}>
            Démarrer la mission
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </Button>
        </div>
      </main>

      <TechNavBar />
    </div>
  );
};

export default TechnicianMission;
