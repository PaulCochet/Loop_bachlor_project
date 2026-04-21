import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';

const InterventionSummary = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 px-8 pt-12 pb-32 overflow-y-auto no-scrollbar">
        {/* Success Header */}
        <div className="mb-10">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-green-600 !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2 uppercase">
            Machine réparée
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Votre appareil est reparti pour un tour !</p>
        </div>

        {/* Details Wrapper */}
        <div className="space-y-4">
          <div className="bg-[#F2F2F7] p-6 rounded-[28px] space-y-5">
            <div className="flex justify-between items-start lowercase">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#8C8C8C]">Appareil</span>
                <span className="font-bold text-right">Lave-linge Samsung</span>
            </div>
            <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#8C8C8C]">Pièce remplacée</span>
                <span className="font-bold text-right text-[#0D46F2]">Pompe de vidange Samsung</span>
            </div>
            <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#8C8C8C]">Durée</span>
                <span className="font-bold text-right">38 min</span>
            </div>
            <div className="flex justify-between items-start border-t border-[#E5E5E5] pt-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#8C8C8C]">Technicien</span>
                <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" alt="Lucas" className="w-6 h-6 rounded-full object-cover" />
                    <span className="font-bold">Lucas M.</span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Actions */}
      <div className="absolute bottom-0 left-0 w-full p-8 pt-4 bg-gradient-to-t from-white via-white to-transparent overflow-hidden">
        <div className="space-y-3 mb-8">
          <Button onClick={() => navigate('/payment')}>
            Procéder au paiement
            <span className="material-symbols-outlined ml-1">payments</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterventionSummary;
