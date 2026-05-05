import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Settings, ClipboardList, Clock, Route, MapPin, ArrowRight, ChevronRight, AlertTriangle, Bug, User, Send } from 'lucide-react';
import TechNavBar from '../../components/technician/TechNavBar';
import IOSBottomSheet from '../../components/shared/IOSBottomSheet';
import Button from '../../components/shared/Button';

const TechnicianDashboard = () => {
  const navigate = useNavigate();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isIssueSheetOpen, setIsIssueSheetOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [issueDescription, setIssueDescription] = useState('');

  const issueTypes = [
    { id: 'tech', label: 'Problème technique', icon: 'Bug' },
    { id: 'user', label: 'Problème avec l\'usager', icon: 'User' },
    { id: 'urgent', label: 'Urgence mission', icon: 'AlertTriangle' }
  ];

  const handleSendIssue = () => {
    setIsIssueSheetOpen(false);
    setSelectedIssue(null);
    setIssueDescription('');
  };

  return (
    <div className="bg-white min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="bg-white/80 backdrop-blur-xl text-[#1a1c1b] sticky top-0 z-50 border-b border-gray-100">
        <div className="flex justify-between items-center px-6 py-4 max-w-full">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="font-bold italic uppercase tracking-tighter text-2xl leading-none">Bonjour Lucas</h1>
            </div>
          </div>
          <div className="flex gap-4">
            <motion.button 
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-full active:bg-gray-100 transition-colors"
            >
              <Settings size={24} />
            </motion.button>
          </div>
        </div>
      </header>

      <main className="px-6 mt-8 space-y-12">
        {/* Metrics Section */}
        <section className="grid grid-cols-3 gap-4">
          {[
            { icon: ClipboardList, label: 'Missions', value: '3' },
            { icon: Clock, label: 'Temps', value: '2h30' },
            { icon: Route, label: 'Route', value: '1,2 km' }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              whileTap={{ scale: 0.98 }}
              className="bg-[#f9f9f7] p-4 rounded-[20px] border border-gray-100 flex flex-col justify-between aspect-square"
            >
              <item.icon className="text-[#0D46F2]" size={20} />
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-[#8C8C8C] truncate">{item.label}</p>
                <p className="text-lg display-text">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Current Mission Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h2 className="text-3xl display-text uppercase tracking-tighter">Mission en cours</h2>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#FF4444] rounded-full animate-[pulse_1.5s_infinite]">
              <AlertTriangle size={12} className="text-white" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Priorité Haute</span>
            </div>
          </div>
          
          <motion.div 
            whileTap={{ scale: 0.99 }}
            className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <div className="p-8 space-y-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-2xl display-text">Sophie M.</h3>
                  <p className="text-[#8C8C8C] font-medium">Lave-linge Samsung EcoBubble</p>
                </div>
                <div className="bg-[#f2f2f0] px-3 py-1 rounded-full">
                  <p className="text-[11px] font-bold text-[#1a1c1b]">9h00 — 11h00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 py-4 border-y border-[#eeeeec]">
                <MapPin className="text-[#8C8C8C] mt-0.5" size={20} />
                <div className="space-y-0.5">
                  <p className="text-sm font-bold">12 rue des Lilas</p>
                  <p className="text-xs text-[#8C8C8C] font-medium uppercase tracking-wider">44000 Nantes</p>
                </div>
              </div>

              <Button onClick={() => navigate('/technician/mission')}>
                Voir la fiche
                <ArrowRight size={20} />
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Next Missions Section */}
        <section className="space-y-6">
          <h2 className="text-2xl display-text uppercase tracking-tighter">Missions suivantes</h2>
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
                  <p className="text-lg display-text">{mission.name}</p>
                </div>
                <div className="h-8 w-[1px] bg-gray-200"></div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{mission.device}</p>
                  <p className="text-[10px] text-[#8C8C8C] font-medium uppercase tracking-widest">{mission.address}</p>
                </div>
                <ChevronRight className="text-gray-300" size={24} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support CTA */}
        <section className="pt-4 pb-8">
          <Button 
            variant="ghost" 
            className="w-full !border-[#E5E5E5] !text-[#8C8C8C]"
            onClick={() => setIsIssueSheetOpen(true)}
          >
            <AlertTriangle size={18} className="mr-2" />
            Signaler un problème
          </Button>
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

      <IOSBottomSheet 
        isOpen={isIssueSheetOpen} 
        onClose={() => {
          setIsIssueSheetOpen(false);
          setSelectedIssue(null);
        }}
        title="Contacter Loop"
      >
        <div className="space-y-6 p-2">
          {!selectedIssue ? (
            <div className="space-y-3">
              {issueTypes.map((type) => {
                const Icon = { Bug, User, AlertTriangle }[type.icon];
                return (
                  <button 
                    key={type.id}
                    onClick={() => setSelectedIssue(type)}
                    className="w-full p-5 bg-[#F2F2F7] rounded-2xl flex items-center gap-4 active:scale-[0.98] transition-all"
                  >
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0D46F2] shadow-sm">
                      <Icon size={20} />
                    </div>
                    <span className="font-bold text-sm text-[#1a1c1b]">{type.label}</span>
                    <ChevronRight size={18} className="ml-auto text-[#8C8C8C]" />
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-[#F2F2F7] rounded-xl">
                <button onClick={() => setSelectedIssue(null)} className="text-[#0D46F2]">
                  <ChevronRight size={20} className="rotate-180" />
                </button>
                <span className="font-bold text-sm">{selectedIssue.label}</span>
              </div>
              <textarea 
                autoFocus
                placeholder="Décrivez le problème..."
                className="w-full h-32 p-4 bg-[#F2F2F7] rounded-2xl border-none focus:ring-2 focus:ring-[#0D46F2]/20 resize-none"
                value={issueDescription}
                onChange={(e) => setIssueDescription(e.target.value)}
              />
              <Button onClick={handleSendIssue} className="w-full !bg-[#0D46F2] !text-white">
                Envoyer à Loop
                <Send size={18} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </IOSBottomSheet>
    </div>
  );
};

export default TechnicianDashboard;
