import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';

const Photo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Progress Bar */}
      <ProgressBar step={1} />
      
      <div className="flex-1 px-8 pt-4 pb-32 overflow-y-auto no-scrollbar">
        {/* Step Info */}
        <div className="mb-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 1 sur 3</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
            Prenez une photo
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Capturez le problème de votre appareil</p>
        </div>

        {/* Capture Area */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="w-full aspect-square bg-[#F2F2F0] border-2 border-dashed border-[#E5E5E5] rounded-[32px] flex flex-col items-center justify-center cursor-pointer active:scale-[0.98] transition-all group">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4 group-active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-4xl text-[#0A0A0A]">photo_camera</span>
            </div>
            <span className="text-sm font-bold">Ouvrir l'appareil photo</span>
          </div>
          
        <div className="mt-8 flex justify-center">
          <button className="w-full py-4 rounded-[20px] border border-[#E5E5E5] text-[#8C8C8C] font-bold text-sm bg-transparent active:scale-[0.98] transition-all">
            Choisir depuis ma galerie
          </button>
        </div>
      </div>

      {/* Fixed Actions */}
      <div className="absolute bottom-0 left-0 w-full p-8 pt-4 bg-gradient-to-t from-white via-white to-transparent overflow-hidden">
        <div className="space-y-3 mb-8">
          <Button onClick={() => navigate('/description')}>Continuer</Button>
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>Retour</Button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
