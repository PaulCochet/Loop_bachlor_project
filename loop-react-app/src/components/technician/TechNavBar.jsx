import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, QrCode, MessageCircle, Unplug } from 'lucide-react';

const TechNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'Accueil', Icon: Home, path: '/technician/dashboard' },
    { id: 'scan', label: 'Scan', Icon: QrCode, path: '/technician/scan' },
    { id: 'messages', label: 'Messages', Icon: MessageCircle, path: '/technician/messages', badge: true },
    { id: 'diagnostic', label: 'Diagnostic', Icon: Unplug, path: '/technician/diagnostic' }
  ];

  const missionPaths = ['/technician/scan', '/technician/diagnostic', '/technician/verification', '/technician/recap'];
  const isMissionActive = missionPaths.includes(location.pathname);

  if (isMissionActive) return null;

  const activeColor = '#0D46F2';
  const inactiveColor = '#8C8C8C';

  return (
    <nav 
      className="!bottom-0 !mb-0"
      style={{ 
        position: 'fixed',
        bottom: 0,
        marginBottom: 0,
        left: 0,
        width: '100%',
        height: 'calc(60px + env(safe-area-inset-bottom))',
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingTop: 0,
        margin: 0,
        background: 'white',
        borderTop: '0.5px solid #E5E5E5',
        zIndex: 9999,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
      }}
    >
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <motion.button 
            key={tab.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center gap-1 relative min-w-[64px] mt-3"
            style={{ color: isActive ? activeColor : inactiveColor }}
          >
            <tab.Icon 
              size={26} 
              strokeWidth={isActive ? 2.5 : 1.5}
              className="transition-all duration-200" 
            />
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
