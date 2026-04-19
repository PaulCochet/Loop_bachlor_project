import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notification = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full w-full bg-[#1a1a1a] flex flex-col items-center overflow-hidden">
      {/* iOS Lock Screen Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#2a2a2a] to-[#000] opacity-80"></div>

      {/* Clock & Date */}
      <div className="relative z-10 mt-16 flex flex-col items-center text-white">
        <div className="text-xl font-medium tracking-tight mb-1">Mardi 19 Avril</div>
        <div className="text-[88px] font-extrabold leading-none tracking-tighter italic">17:35</div>
      </div>

      {/* Notification Banner */}
      <div className="relative z-10 w-full px-6 mt-auto mb-20">
        <div 
          onClick={() => navigate('/tracking')}
          className="bg-white/90 backdrop-blur-xl rounded-[24px] p-4 flex items-center gap-4 shadow-2xl cursor-pointer active:scale-95 transition-all"
        >
          <div className="w-10 h-10 bg-[#0A0A0A] flex items-center justify-center rounded-xl">
            <span className="material-symbols-outlined text-white text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>all_inclusive</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-black italic">Lucas arrive</span>
              <span className="text-[9px] uppercase font-bold text-[#8C8C8C]">Maintenant</span>
            </div>
            <p className="text-xs font-medium text-[#0A0A0A]">Dans environ 12 min</p>
          </div>
        </div>
        {/* Stack effect */}
        <div className="mx-4 h-2 bg-white/40 backdrop-blur-md rounded-b-[20px] shadow-sm"></div>
      </div>

      {/* Lock Screen Controls */}
      <div className="relative z-10 w-full px-10 mb-12 flex justify-between items-center">
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-2xl">flashlight_on</span>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
          <span className="material-symbols-outlined text-2xl">photo_camera</span>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 w-32 h-1.5 bg-white/40 rounded-full"></div>
    </div>
  );
};

export default Notification;
