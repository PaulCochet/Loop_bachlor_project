import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';

const Photo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-12 pb-8">
      {/* Step Info */}
      <div className="mb-2">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 1 sur 3</span>
      </div>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
          Photo de l'appareil
        </h1>
        <p className="text-lg font-medium">Que répare t-on aujourd'hui ?</p>
      </div>

      {/* Capture Area */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="w-full aspect-square bg-[#F2F2F0] border-2 border-dashed border-[#E5E5E5] rounded-[16px] flex flex-col items-center justify-center cursor-pointer active:scale-[0.98] transition-all">
          <div className="bg-white p-6 rounded-full shadow-sm mb-4">
            <span className="material-symbols-outlined text-4xl text-[#0A0A0A]">camera</span>
          </div>
          <span className="text-sm font-bold">Prendre une photo</span>
        </div>
        
        <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-[#8C8C8C] border border-[#E5E5E5] rounded-full">
                <span className="material-symbols-outlined text-lg">photo_library</span>
                Choisir depuis la galerie
            </button>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/description')}>Continuer</Button>
        <Button variant="ghost" onClick={() => navigate('/dashboard')}>Retour</Button>
      </div>
    </div>
  );
};

export default Photo;
