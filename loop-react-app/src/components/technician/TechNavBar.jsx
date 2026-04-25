import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const TechNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'Accueil', icon: 'home', path: '/technician/dashboard' },
    { id: 'scan', label: 'Scan', icon: 'qr_code_scanner', path: '/technician/scan' },
    { id: 'messages', label: 'Messages', icon: 'chat_bubble', path: '/technician/messages', badge: true },
    { id: 'diagnostic', label: 'Diagnostic', icon: 'stethoscope', path: '/technician/diagnostic' }
  ];

  const missionPaths = ['/technician/scan', '/technician/diagnostic', '/technician/verification', '/technician/recap'];
  const isMissionActive = missionPaths.includes(location.pathname);

  if (isMissionActive) return null;

  const activeColor = '#0D46F2';
  const inactiveColor = '#8C8C8C';

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t-[0.5px] border-[#E5E5E5] flex justify-around items-start pt-3 px-4 z-[100]"
      style={{ height: 'calc(env(safe-area-inset-bottom) + 64px)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <motion.button 
            key={tab.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center gap-1 relative min-w-[64px]"
            style={{ color: isActive ? activeColor : inactiveColor }}
          >
            <span 
              className="material-symbols-outlined text-[26px] transition-all duration-200" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tight">{tab.label}</span>
            
            {tab.badge && (
              <span className="absolute top-0 right-[25%] w-2 h-2 bg-[#FF3B30] rounded-full border-2 border-white"></span>
            )}
          </motion.button>
        );
      })}
    </nav>
  );
};

export default TechNavBar;
