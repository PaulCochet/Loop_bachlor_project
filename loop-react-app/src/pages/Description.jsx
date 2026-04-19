import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Description = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-12 pb-8">
      {/* Step Info */}
      <div className="mb-2">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 2 sur 3</span>
      </div>

      {/* Hero */}
      <div className="mb-8">
        <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
          Décrivez le problème
        </h1>
        <p className="text-lg font-medium">Répondez en quelques secondes</p>
      </div>

      {/* Form Slots */}
      <div className="flex-1 space-y-8 overflow-y-auto">
        <div className="space-y-3">
          <label className="text-[11px] font-bold uppercase tracking-tight text-[#0A0A0A]">Indiquez la marque de votre appareil</label>
          <input 
            className="w-full bg-[#F2F2F0] border-none rounded-[12px] px-5 py-4 focus:ring-2 focus:ring-[#0D46F2] outline-none" 
            placeholder="Samsung, Smeg..." 
            type="text"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-[11px] font-bold uppercase tracking-tight text-[#0A0A0A]">L'appareil s'allume-t-il ?</label>
          <div className="flex gap-1 p-1 bg-[#F2F2F0] rounded-full">
            <button className="px-5 py-1.5 rounded-full font-bold text-xs bg-white shadow-sm">Oui</button>
            <button className="px-5 py-1.5 rounded-full font-bold text-xs text-[#8C8C8C]">Non</button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="text-[11px] font-bold uppercase tracking-tight text-[#0A0A0A]">Y'a-t-il un code d'erreur ?</label>
          <div className="flex gap-1 p-1 bg-[#F2F2F0] rounded-full">
            <button className="px-5 py-1.5 rounded-full font-bold text-xs text-[#8C8C8C]">Oui</button>
            <button className="px-5 py-1.5 rounded-full font-bold text-xs bg-white shadow-sm">Non</button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[11px] font-bold uppercase tracking-tight text-[#0A0A0A]">Indiquez le problème de votre appareil</label>
          <textarea 
            className="w-full bg-[#F2F2F0] border-none rounded-[12px] px-5 py-4 focus:ring-2 focus:ring-[#0D46F2] outline-none resize-none" 
            placeholder="Décrivez les symptômes ici..." 
            rows="3"
          ></textarea>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/slot')}>Continuer</Button>
        <Button variant="ghost" onClick={() => navigate('/photo')}>Retour</Button>
      </div>
    </div>
  );
};

export default Description;
