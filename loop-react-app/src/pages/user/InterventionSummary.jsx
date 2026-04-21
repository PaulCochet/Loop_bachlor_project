import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ScreenLayout from '../../components/shared/ScreenLayout';

const InterventionSummary = () => {
  const navigate = useNavigate();

  return (
    <ScreenLayout
        actions={
            <Button onClick={() => navigate('/payment')}>
              Procéder au paiement
              <span className="material-symbols-outlined ml-1">payments</span>
            </Button>
        }
    >
      <div className="pt-4 pb-12">
        {/* Success Header */}
        <div className="mb-10">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
            <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="text-4xl display-text tracking-tight leading-tight mb-2 uppercase">
            Machine réparée
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Votre appareil est reparti pour un tour !</p>
        </div>

        {/* Details Wrapper */}
        <div className="space-y-4">
          <div className="bg-[#F2F2F7] p-6 rounded-[28px] space-y-5">
            <div className="flex justify-between items-start lowercase">
                <span className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Appareil</span>
                <span className="font-bold text-right">Lave-linge Samsung</span>
            </div>
            <div className="flex justify-between items-start">
                <span className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Pièce remplacée</span>
                <span className="font-bold text-right text-[#0D46F2]">Pompe de vidange Samsung</span>
            </div>
            <div className="flex justify-between items-start">
                <span className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Durée</span>
                <span className="font-bold text-right">38 min</span>
            </div>
            <div className="flex justify-between items-start border-t border-[#E5E5E5] pt-5">
                <span className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Technicien</span>
                <div className="flex items-center gap-2">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" alt="Lucas" className="w-6 h-6 rounded-full object-cover" />
                    <span className="font-bold">Lucas M.</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default InterventionSummary;
