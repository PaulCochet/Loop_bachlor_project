import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Clock, ArrowRight, AlertTriangle, Bug, User, Send, ChevronRight } from 'lucide-react';
import IOSBottomSheet from '../../components/shared/IOSBottomSheet';
import TechNavBar from '../../components/technician/TechNavBar';
import Button from '../../components/shared/Button';
import { useGlobalState } from '../../context/GlobalStateContext';

const TechnicianMission = () => {
  const navigate = useNavigate();
  const { formData } = useGlobalState();
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
      <header className="bg-white/80 backdrop-blur-xl text-[#1a1c1b] sticky top-0 z-50 px-6 pt-16 pb-4 flex justify-between items-end border-b border-gray-100">
        {/* Back Button */}
        <div className="absolute top-[44px] left-6 z-50">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/technician/dashboard')}
            className="flex items-center gap-1 text-[#0D46F2] font-semibold text-[17px]"
          >
            <ChevronLeft size={24} />
            <span>Retour</span>
          </motion.button>
        </div>

        <h1 className="display-text uppercase tracking-tighter text-4xl">
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
          <h2 className="text-3xl display-text uppercase tracking-tighter text-[#1a1c1b]">Fiche mission</h2>
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
                <p className="text-lg display-text text-[#1a1c1b]">Sophie M.</p>
                <p className="text-sm text-[#8C8C8C] font-medium">12 rue des Lilas Nantes</p>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
              <Clock className="text-[#0D46F2]" size={14} />
              <p className="text-sm font-bold text-[#1a1c1b]">Mercredi 6 mai — 16h00 à 18h00</p>
            </div>
          </section>

          {/* Card 2: Appareil */}
          <section className="bg-[#f9f9f7] p-6 rounded-[24px] relative overflow-hidden border border-gray-100">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-6">Appareil</h3>
            <div className="flex gap-6">
              <div className="w-24 h-24 bg-white rounded-[16px] overflow-hidden flex-shrink-0 shadow-sm">
                <img 
                  className="w-full h-full object-cover" 
                  src={formData.photo || "https://lh3.googleusercontent.com/aida-public/AB6AXuD8S8Dr0r_4OpGBc7BLhqEv9Jy76X0meRhQZJkomxF4AoGERzrYJqvixXRY7ljakocC5jO8XVN1N9j5I9W3U3BxbyCR1T7ZiEtc9jQaUNtpcbZut59BjVI9oX1NnexbbnNa50xN4Cr62h4N45rh6DmwhxStpHPl47MqY9Qa95zTBrLOKP2J_0PbXAYeVX3_yenoW945UsBkSDox4-cQJoS6BQR9b6pYmL1v9V1_7XjS3opkr4Ib3kT0DMpaCLyeL-kpKrd-GzAYoUs"}
                  alt="Appareil"
                />
              </div>
              <div className="space-y-2">
                <p className="text-lg display-text text-[#1a1c1b]">{formData.brand || "Machine à café De'Longhi"}</p>
                <div className="space-y-1">
                  <p className="text-xs text-[#8C8C8C] display-text uppercase tracking-widest">Problème</p>
                  <p className="text-sm font-medium text-[#464545]">Ne s'allume pas. L'interrupteur situé sur le côté droit semble défaillant.</p>
                </div>
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-red-50 text-red-600 rounded text-[9px] display-text tracking-tighter ">
                  Panne identifiée: interrupteur
                </div>
              </div>
            </div>
          </section>

          {/* Card 3: Suggested Parts */}
          <section className="bg-[#f2f2f7] p-6 rounded-[24px]">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-4 ml-1">Pièces à embarquer</h3>
            <ul className="space-y-3">
              {[
                "Interrupteur de remplacement De'Longhi",
                "Tournevis de précision + kit démontage"
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
            <ArrowRight size={20} />
          </Button>
          
          <Button 
            variant="ghost" 
            className="w-full mt-4 !border-[#E5E5E5] !text-[#8C8C8C]"
            onClick={() => setIsIssueSheetOpen(true)}
          >
            <AlertTriangle size={18} className="mr-2" />
            Signaler un problème
          </Button>
        </div>
      </main>

      <TechNavBar />

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

export default TechnicianMission;
