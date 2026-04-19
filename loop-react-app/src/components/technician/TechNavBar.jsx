import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TechNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', label: 'Accueil', icon: 'home_repair_service', path: '/technician/dashboard' },
    { id: 'scan', label: 'Scan', icon: 'qr_code_scanner', path: '/technician/scan' },
    { id: 'messages', label: 'Messages', icon: 'forum', path: '/technician/messages', badge: true },
    { id: 'diagnostic', label: 'Diagnostic', icon: 'analytics', path: '/technician/diagnostic' }
  ];

  const activeColor = '#003cdd';
  const inactiveColor = '#8C8C8C';

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-100 flex justify-around items-center pt-3 pb-8 px-4">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <button 
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center gap-1 relative transition-all duration-200 ${isActive ? 'scale-100' : 'opacity-60 active:scale-95'}`}
            style={{ color: isActive ? activeColor : inactiveColor }}
          >
            <span 
              className="material-symbols-outlined text-[24px]" 
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
            >
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest">{tab.label}</span>
            
            {tab.badge && (
              <span className="absolute top-0 right-1 w-2 h-2 bg-[#003cdd] rounded-full border-2 border-white"></span>
            )}
            
            {isActive && (
              <span className="absolute -bottom-2 w-1 h-1 bg-[#003cdd] rounded-full"></span>
            )}
          </button>
        );
      })}
    </nav>
  );
};

export default TechNavBar;
