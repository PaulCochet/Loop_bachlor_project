import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

const Tracking = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Map Area */}
      <div className="flex-1 bg-[#F2F2F0] relative overflow-hidden">
        {/* Mock Map Image Background would go here */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#0D46F2_0%,_transparent_100%)]"></div>
        
        {/* Status Pill */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-[#E5E5E5] flex items-center gap-2">
            <div className="w-2 h-2 bg-[#0D46F2] rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-tight">Lucas arrive dans 12 min</span>
        </div>

        {/* Technician Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 bg-[#0D46F2] rounded-full flex items-center justify-center text-white shadow-2xl">
                <span className="material-symbols-outlined text-2xl">directions_car</span>
            </div>
            <div className="absolute top-0 left-0 w-12 h-12 bg-[#0D46F2] rounded-full animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="bg-white rounded-t-[24px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] px-8 pt-4 pb-24 z-10">
        <div className="w-10 h-1 bg-[#F2F2F0] rounded-full mx-auto mb-6"></div>
        
        <header className="mb-6">
            <h2 className="text-3xl font-black italic tracking-tight leading-tight uppercase">Lucas arrive</h2>
            <p className="text-sm font-medium text-[#8C8C8C]">Arrivée estimée : 17:47</p>
        </header>

        {/* Technician Info */}
        <div className="flex items-center justify-between p-4 bg-[#F2F2F0] rounded-[16px] mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E5E5E5] rounded-full overflow-hidden"></div>
                <div>
                    <p className="text-sm font-bold">Lucas M.</p>
                    <p className="text-[9px] font-bold text-[#0D46F2] uppercase tracking-wider">Technicien certifié</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0D46F2] shadow-sm"><span className="material-symbols-outlined text-sm">call</span></button>
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0A0A0A] shadow-sm"><span className="material-symbols-outlined text-sm">chat_bubble</span></button>
            </div>
        </div>

        {/* Action to progress */}
        <Button onClick={() => navigate('/intervention')}>Voir l'intervention</Button>
      </div>

      <NavBar />
    </div>
  );
};

export default Tracking;
