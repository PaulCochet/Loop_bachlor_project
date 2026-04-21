import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';
import IOSBottomSheet from '../../components/shared/IOSBottomSheet';
import Button from '../../components/shared/Button';

const TechnicianDashboard = () => {
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="bg-white/80 backdrop-blur-xl text-[#1a1c1b] sticky top-0 z-50 border-b border-gray-100">
        <div className="flex justify-between items-center px-6 py-4 max-w-full">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                alt="Technician Portrait" 
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDZ4bHsoIeK_eob6Z0IiDUktN5Tj5Hdj-z_OJxeeNrO2YQ7WepYEZQJOg3Ljw05ukUFJQjf5H696i_ijMJQz6jqU_k7hEGNjFP7Ywy9uiTMPFrgO9hCeHjQ1QamEGtpojbTeHwznA6A2YtyiwNiK8uAcGmJhs6qSIubZO3KvpRstAScEgTbT9bDzDN6312n1cWMtjBtqCgOBuRTbCmWmrcF_A6dooBpwns8VVQxM3rPEVrm9ezJUZHjsvyBqWaHirbUr3yV3g4zMc"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h1 className="font-bold italic uppercase tracking-tighter text-2xl leading-none">Bonjour Lucas</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSettingsOpen(true)}
              className="material-symbols-outlined p-2 rounded-full active:bg-gray-100 transition-colors"
            >
              settings
            </motion.button>
          </div>
        </div>
      </header>

      <main className="px-6 mt-8 space-y-12">
        {/* Metrics Section */}
        <section className="grid grid-cols-3 gap-4">
          {[
            { icon: 'task', label: 'Missions', value: '3' },
            { icon: 'schedule', label: 'Temps', value: '2h30' },
            { icon: 'distance', label: 'Route', value: '1,2 km' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileTap={{ scale: 0.98 }}
              className="bg-[#f9f9f7] p-4 rounded-[20px] border border-gray-100 flex flex-col justify-between aspect-square"
            >
              <span className="material-symbols-outlined text-[#0D46F2] !text-xl">{item.icon}</span>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#8C8C8C] truncate">{item.label}</p>
                <p className="text-lg font-extrabold italic">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Current Mission Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl font-extrabold italic uppercase tracking-tighter">Mission en cours</h2>
            <span className="text-[10px] font-bold text-[#0D46F2] uppercase tracking-widest pb-1">Priorité Haute</span>
          </div>
          
          <motion.div 
            whileTap={{ scale: 0.99 }}
            className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black italic">Sophie M.</h3>
                  <p className="text-[#8C8C8C] font-medium">Lave-linge Samsung EcoBubble</p>
                </div>
                <div className="bg-[#f2f2f0] px-3 py-1 rounded-full">
                  <p className="text-[11px] font-bold text-[#1a1c1b]">9h00 — 11h00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 py-4 border-y border-[#eeeeec]">
                <span className="material-symbols-outlined text-[#8C8C8C] mt-0.5">location_on</span>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold">12 rue des Lilas</p>
                  <p className="text-xs text-[#8C8C8C] font-medium uppercase tracking-wider">44000 Nantes</p>
                </div>
              </div>

              <Button onClick={() => navigate('/technician/mission')}>
                Voir la fiche
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Next Missions Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-extrabold italic uppercase tracking-tighter">Missions suivantes</h2>
          <div className="space-y-4">
            {[
              { time: '13:30', name: 'MARC D.', device: 'Lave-vaisselle Bosch', address: '24 Bd des Belges' },
              { time: '15:45', name: 'JULIE L.', device: 'Four Whirlpool', address: '5 Place Royale' }
            ].map((mission, i) => (
              <motion.div 
                key={i}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/technician/mission')}
                className="flex items-center gap-6 p-5 bg-[#f9f9f7] rounded-[20px] border border-gray-100"
              >
                <div className="text-center min-w-[60px]">
                  <p className="text-[10px] font-bold text-[#8C8C8C] uppercase tracking-widest">{mission.time}</p>
                  <p className="text-lg font-black italic">{mission.name}</p>
                </div>
                <div className="h-8 w-[1px] bg-gray-200"></div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{mission.device}</p>
                  <p className="text-[10px] text-[#8C8C8C] font-medium uppercase tracking-widest">{mission.address}</p>
                </div>
                <span className="material-symbols-outlined text-gray-300">chevron_right</span>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <TechNavBar />

      <IOSBottomSheet 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)}
        title="Paramètres Lucas"
      >
        <div className="space-y-4 p-2">
          <button className="w-full p-4 bg-[#F2F2F7] rounded-xl font-bold text-left flex justify-between items-center">
            Mode Hors-ligne
            <div className="w-10 h-6 bg-[#D1D1D6] rounded-full relative">
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
            </div>
          </button>
          <button className="w-full p-4 bg-[#F2F2F7] rounded-xl font-bold text-left">Gérer mon compte</button>
          <button className="w-full p-4 bg-red-50 text-red-600 rounded-xl font-bold text-left" onClick={() => navigate('/technician/login')}>Déconnexion</button>
        </div>
      </IOSBottomSheet>
    </div>
  );
};

export default TechnicianDashboard;
