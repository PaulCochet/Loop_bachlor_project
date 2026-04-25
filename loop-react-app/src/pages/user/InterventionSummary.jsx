import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ScreenLayout from '../../components/shared/ScreenLayout';

const InterventionSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full flex flex-col bg-white overflow-hidden">
      {/* STATUS HERO - Full bleed colored background */}
      <div className="bg-[#0D46F2] pt-16 pb-12 px-6 flex flex-col items-center text-center text-white relative">
        <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-8">
          <span className="material-symbols-outlined !text-5xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h1 className="text-4xl display-text tracking-tighter leading-none uppercase italic mb-4">
          Machine réparée
        </h1>
        <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">Impact immédiat</p>
      </div>

      {/* PRODUCT/INTERVENTION SHEET - White background, structured data */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-6 py-10 space-y-8">
        <div className="space-y-6">
          <header className="flex items-center gap-4">
            <h3 className="text-[10px] display-text tracking-[0.2em] uppercase text-[#8C8C8C]">Fiche Intervention</h3>
            <div className="flex-1 h-[1px] bg-[#F2F2F7]"></div>
          </header>

          <div className="bg-white rounded-[28px] border border-[#F2F2F7] shadow-xl shadow-black/5 p-6 space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-[#F2F2F7]">
                <span className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Appareil</span>
                <span className="font-bold text-[#0A0A0A]">Lave-linge Samsung</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#F2F2F7]">
                <span className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Pièce remplacée</span>
                <span className="font-bold text-[#0D46F2]">Pompe de vidange</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#F2F2F7]">
                <span className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Durée</span>
                <span className="font-bold text-[#0A0A0A]">38 min</span>
            </div>
            <div className="flex justify-between items-center py-2 pt-4">
                <span className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Technicien</span>
                <div 
                  onClick={() => navigate('/technician-profile')}
                  className="flex items-center gap-2 cursor-pointer active:opacity-60"
                >
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" alt="Lucas" className="w-6 h-6 rounded-full object-cover" />
                    <span className="font-bold text-[#0A0A0A]">Lucas M.</span>
                </div>
            </div>
          </div>
        </div>

        {/* CO2 Highlight */}
        <div className="bg-[#F2F2F7] p-8 rounded-[32px] flex items-center justify-between">
          <div>
            <p className="text-[10px] display-text uppercase tracking-[0.2em] text-[#8C8C8C] mb-1">CO₂ évité</p>
            <p className="text-3xl display-text text-[#0D46F2]">218 kg</p>
          </div>
          <span className="material-symbols-outlined !text-4xl text-[#0D46F2]/20">eco</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex-shrink-0 p-6 pt-4 pb-[34px] bg-white border-t border-[#E5E5E5]">
        <Button onClick={() => navigate('/payment')}>
          Procéder au paiement
          <span className="material-symbols-outlined ml-1">payments</span>
        </Button>
      </div>
    </div>
  );
};

export default InterventionSummary;
