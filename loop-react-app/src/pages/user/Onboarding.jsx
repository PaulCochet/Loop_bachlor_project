import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header Visual */}
      <div className="flex flex-col items-center pt-24 pb-8 px-6">
        <div className="mb-8 p-6 bg-[#0D46F2]/5 rounded-[32px]">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="text-[#0D46F2]">
            <path 
              d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM50 80C33.4 80 20 66.6 20 50C20 33.4 33.4 20 50 20C66.6 20 80 33.4 80 50C80 66.6 66.6 80 50 80Z" 
              fill="currentColor"
            />
            <path 
              d="M70 50C70 61 61 70 50 70C39 70 30 61 30 50C30 39 39 30 50 30C61 30 70 39 70 50Z" 
              fill="currentColor" 
              fillOpacity="0.4"
            />
          </svg>
        </div>
        <h1 className="text-4xl display-text tracking-tighter text-center leading-[0.9] uppercase max-w-[280px]">
          Donnez une seconde vie à vos appareils
        </h1>
      </div>

      {/* Steps Mini */}
      <div className="flex-1 px-6 pt-6 space-y-8">
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#0D46F2]/5 flex items-center justify-center text-[#0D46F2]">
            <span className="material-symbols-outlined !text-2xl">document_scanner</span>
          </div>
          <p className="text-[17px] font-bold tracking-tight text-[#0A0A0A]">Scanner pour un diagnostic</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#0D46F2]/5 flex items-center justify-center text-[#0D46F2]">
            <span className="material-symbols-outlined !text-2xl">calendar_today</span>
          </div>
          <p className="text-[17px] font-bold tracking-tight text-[#0A0A0A]">Prendre RV avec un expert</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#0D46F2]/5 flex items-center justify-center text-[#0D46F2]">
            <span className="material-symbols-outlined !text-2xl">quick_reorder</span>
          </div>
          <p className="text-[17px] font-bold tracking-tight text-[#0A0A0A]">Suivre l'intervention</p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 space-y-3">
        <Button onClick={() => navigate('/signup')}>
          Suivant
          <span className="material-symbols-outlined">chevron_right</span>
        </Button>
        <Button variant="ghost" onClick={() => navigate('/')}>Retour</Button>
      </div>
    </div>
  );
};

export default Onboarding;
