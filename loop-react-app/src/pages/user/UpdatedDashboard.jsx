import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';
import NavBar from '../../components/user/UserNavBar';
import IOSBottomSheet from '../../components/shared/IOSBottomSheet';

const UpdatedDashboard = () => {
  const navigate = useNavigate();
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="px-6 pt-12 pb-4 flex justify-between items-center border-b border-[#F2F2F7] sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <h1 className="text-2xl font-black italic tracking-tighter uppercase leading-none">Bonjour Sophie</h1>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsNotifOpen(true)}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#1a1c1b] active:bg-gray-100 transition-colors"
        >
          <span className="material-symbols-outlined !text-[28px]">notifications</span>
        </motion.button>
      </header>

      <main className="flex-1 px-6 pt-8 pb-24 overflow-y-auto space-y-10">
        {/* Hero Impact */}
        <section className="space-y-6">
          <div className="flex gap-4">
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="flex-1 rounded-[24px] bg-[#0D46F2] text-white p-6 shadow-xl shadow-[#0D46F2]/20"
              >
                  <p className="text-3xl font-black italic mb-1">218kg</p>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-80 italic">CO₂ Évité</p>
              </motion.div>
              <motion.div 
                whileTap={{ scale: 0.98 }}
                className="flex-1 rounded-[24px] bg-[#F2F2F7] p-6"
              >
                  <p className="text-3xl font-black italic mb-1">1</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#8C8C8C] italic">Appareil sauvé</p>
              </motion.div>
          </div>
          <h2 className="text-4xl font-black italic tracking-tighter leading-[1.1] uppercase">
            Votre impact est réel.
          </h2>
        </section>

        {/* Action Callou */}
        <div className="bg-[#F2F2F7] p-8 rounded-[32px] border border-[#E5E5EA] space-y-6">
          <h3 className="text-lg font-bold italic uppercase tracking-tight leading-tight">Un problème avec un autre appareil ?</h3>
          <Button onClick={() => navigate('/photo')}>
            Nouvelle demande
            <span className="material-symbols-outlined !text-xl">add_circle</span>
          </Button>
        </div>

        {/* History Area */}
        <section className="space-y-6">
          <header className="flex items-center gap-4">
            <h3 className="text-[10px] font-black tracking-[0.2em] uppercase text-[#8C8C8C]">Historique récent</h3>
            <div className="flex-1 h-[1px] bg-[#F2F2F7]"></div>
          </header>

          <motion.div 
            whileTap={{ scale: 0.99 }}
            className="bg-white rounded-[24px] p-6 border border-[#F2F2F7] shadow-xl shadow-black/5 space-y-6"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-xl font-black uppercase italic tracking-tight">Samsung WW90</h4>
                <p className="text-[10px] font-bold text-[#8C8C8C] uppercase tracking-widest">Réparé le 19 avril</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-green-600 !text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 !py-3 !text-[11px]" onClick={() => navigate('/certificate')}>
                <span className="material-symbols-outlined !text-lg">verified_user</span>
                CERTIFICAT
              </Button>
              <Button variant="outline" className="flex-1 !py-3 !text-[11px]" onClick={() => setIsNotifOpen(true)}>
                <span className="material-symbols-outlined !text-lg">description</span>
                DÉTAILS
              </Button>
            </div>
          </motion.div>
        </section>
      </main>

      <NavBar />

      <IOSBottomSheet 
        isOpen={isNotifOpen} 
        onClose={() => setIsNotifOpen(false)}
        title="Centre de notifications"
      >
        <div className="p-4 space-y-4">
          <div className="p-4 bg-[#F2F2F7] rounded-[20px] flex gap-4">
            <div className="w-10 h-10 bg-[#0D46F2] rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <div>
              <p className="font-bold text-sm">Réparation confirmée</p>
              <p className="text-xs text-[#8C8C8C]">Votre lave-linge est prêt à repartir pour 4 ans !</p>
            </div>
          </div>
          <p className="text-center text-[#8C8C8C] text-[10px] font-bold uppercase tracking-widest py-4">Pas d'autres notifications</p>
        </div>
      </IOSBottomSheet>
    </div>
  );
};

export default UpdatedDashboard;
