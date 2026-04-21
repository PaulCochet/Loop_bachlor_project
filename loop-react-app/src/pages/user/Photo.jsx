import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import ScreenLayout from '../../components/shared/ScreenLayout';

const Photo = () => {
  const navigate = useNavigate();

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={() => navigate('/description')}>Continuer</Button>
                <Button variant="ghost" onClick={() => navigate('/dashboard')}>Retour</Button>
            </div>
        }
    >
      <ProgressBar step={1} />
      
      <div className="pt-4">
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
        <div className="flex flex-col justify-center">
          <div className="w-full aspect-square bg-[#F2F2F7] border-2 border-dashed border-[#E5E5E5] rounded-[32px] flex flex-col items-center justify-center cursor-pointer active:scale-[0.98] transition-all group">
            <div className="bg-white p-6 rounded-full shadow-sm mb-4 group-active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-4xl text-[#0A0A0A]">photo_camera</span>
            </div>
            <span className="text-sm font-bold">Ouvrir l'appareil photo</span>
          </div>
          
          <div className="mt-6 flex justify-center pb-8">
            <button className="w-full py-5 rounded-[24px] border-2 border-[#F2F2F7] text-[#0A0A0A] font-black italic uppercase tracking-widest text-[13px] bg-transparent active:scale-[0.98] transition-all flex items-center justify-center gap-3">
              <span className="material-symbols-outlined !text-xl">image</span>
              Choisir depuis ma galerie
            </button>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default Photo;
