import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Brand Header */}
      <div className="flex flex-col items-center pt-12 pb-12">
        <div className="w-20 h-20 bg-[#0D46F2] flex items-center justify-center rounded-[24px] shadow-lg mb-4">
          <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>all_inclusive</span>
        </div>
        <h1 className="text-5xl font-black italic tracking-tighter text-[#0A0A0A]">LOOP</h1>
      </div>

      {/* Steps List */}
      <div className="flex-1 px-8 space-y-10">
        <div className="flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#F2F2F0] text-[#0A0A0A] font-black italic rounded-lg">1</div>
          <div className="flex flex-col">
            <h2 className="text-lg italic uppercase tracking-tight">Scanner</h2>
            <p className="text-sm">Scannez votre appareil pour un diagnostic instantané.</p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#F2F2F0] text-[#0A0A0A] font-black italic rounded-lg">2</div>
          <div className="flex flex-col">
            <h2 className="text-lg italic uppercase tracking-tight">Prendre RV</h2>
            <p className="text-sm">Choisissez un créneau avec un technicien certifié.</p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-[#F2F2F0] text-[#0A0A0A] font-black italic rounded-lg">3</div>
          <div className="flex flex-col">
            <h2 className="text-lg italic uppercase tracking-tight">Attendre le Feed</h2>
            <p className="text-sm">Suivez l'arrivée de votre expert en temps réel.</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-8 space-y-3">
        <Button onClick={() => navigate('/onboarding')}>Démarrer</Button>
        <Button variant="ghost" onClick={() => navigate('/signup')}>J'ai déjà un compte</Button>
      </div>
    </div>
  );
};

export default Splash;
