import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const UserNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'Accueil', icon: 'home', path: '/dashboard' },
    { id: 'scan', label: 'Scan', icon: 'qr_code_scanner', path: '/photo' },
    { id: 'tracking', label: 'Suivie', icon: 'location_on', path: '/tracking' }
  ];

  const activeColor = '#0D46F2';
  const inactiveColor = '#8C8C8C';

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 bg-white border-t-[0.5px] border-[#E5E5E5] flex justify-around items-start pt-3 px-6 z-[100]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path || 
                        (tab.id === 'home' && location.pathname === '/dashboard-updated') ||
                        (tab.id === 'tracking' && ['/intervention', '/verdict', '/certificate'].includes(location.pathname));
        
        return (
          <motion.button 
            key={tab.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center gap-1 min-w-[64px]"
            style={{ color: isActive ? activeColor : inactiveColor }}
          >
            <span 
              className="material-symbols-outlined text-[26px] transition-all duration-200" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-tight">{tab.label}</span>
          </motion.button>
        );
      })}
      {/* Home Indicator Safe Area (34px placeholder handled by the nav's padding/height) */}
    </nav>
  );
};

export default UserNavBar;
