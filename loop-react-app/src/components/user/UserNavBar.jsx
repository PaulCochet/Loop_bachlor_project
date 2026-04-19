import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const UserNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeActive = location.pathname === '/dashboard' || location.pathname === '/dashboard-updated';
  const isTrackingActive = ['/tracking', '/intervention', '/verdict', '/certificate'].includes(location.pathname);

  const activeColor = '#0D46F2';
  const inactiveColor = '#8C8C8C';

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[rgba(0,0,0,0.1)] px-12 py-4 flex justify-between items-center z-[100] pb-[34px]">
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex flex-col items-center gap-1"
        style={{ color: isHomeActive ? activeColor : inactiveColor }}
      >
        <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: isHomeActive ? "'FILL' 1" : "'FILL' 0" }}>home</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Accueil</span>
      </button>

      <button 
        onClick={() => navigate('/tracking')}
        className="flex flex-col items-center gap-1"
        style={{ color: isTrackingActive ? activeColor : inactiveColor }}
      >
        <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: isTrackingActive ? "'FILL' 1" : "'FILL' 0" }}>location_on</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">Suivie</span>
      </button>
    </div>
  );
};

export default UserNavBar;
