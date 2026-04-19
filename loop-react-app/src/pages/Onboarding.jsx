import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header Visual */}
      <div className="flex flex-col items-center pt-12 pb-8 px-8">
        <div className="w-24 h-24 mb-6 text-[#0D46F2] opacity-20">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
            <path d="M30,50 C30,35 40,25 50,25 C60,25 70,35 70,50 C70,65 60,75 50,75 C40,75 30,65 30,50 Z" />
            <path d="M25,50 C25,30 40,15 55,15 C70,15 80,30 80,45 C80,60 70,85 50,85 C30,85 20,60 20,45 C20,30 30,15 45,15 C60,15 75,30 75,50" opacity="0.4" />
          </svg>
        </div>
        <h1 className="text-3xl font-black italic tracking-tight text-center leading-tight">
          Donnez une seconde vie à vos appareils
        </h1>
      </div>

      {/* Steps Mini */}
      <div className="flex-1 px-8 space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F2F2F0] flex items-center justify-center text-[#0D46F2]">
            <span className="material-symbols-outlined">document_scanner</span>
          </div>
          <p className="text-sm font-medium text-[#0A0A0A]">Scanner pour un diagnostic</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F2F2F0] flex items-center justify-center text-[#0D46F2]">
            <span className="material-symbols-outlined">calendar_today</span>
          </div>
          <p className="text-sm font-medium text-[#0A0A0A]">Prendre RV avec un expert</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#F2F2F0] flex items-center justify-center text-[#0D46F2]">
            <span className="material-symbols-outlined">quick_reorder</span>
          </div>
          <p className="text-sm font-medium text-[#0A0A0A]">Suivre l'intervention</p>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-1.5 pb-4">
        <div className="w-6 h-1.5 rounded-full bg-[#0D46F2]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]"></div>
      </div>

      {/* Footer Actions */}
      <div className="p-8 space-y-3">
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
