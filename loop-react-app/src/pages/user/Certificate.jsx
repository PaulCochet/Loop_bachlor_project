import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import NavBar from '../../components/user/UserNavBar';

const Certificate = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white relative">
      <main className="flex-1 px-8 pt-12 pb-24 overflow-y-auto space-y-12">
        <header>
          <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2 uppercase">IMPACT</h1>
          <p className="text-sm font-medium text-[#8C8C8C]">Certificat officiel</p>
        </header>

        {/* Certificate Card */}
        <div className="card bg-[#F2F2F0] p-10 flex flex-col items-center justify-center space-y-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <span className="material-symbols-outlined !text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            </div>
            
            <div className="z-10 flex flex-col items-center">
                <h2 className="text-5xl font-black italic tracking-tighter leading-none mb-2">218 kg</h2>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0D46F2]">de CO₂ évité</p>
            </div>

            <div className="z-10 w-full pt-8 border-t border-[#E5E5E5] space-y-2">
                <p className="text-sm font-bold uppercase tracking-tighter italic">Lave-linge Samsung</p>
                <p className="text-[10px] text-[#8C8C8C] font-bold">RELACHÉ LE 31/03/2026</p>
            </div>
        </div>

        {/* Action to progress */}
        <div className="space-y-4">
            <Button onClick={() => navigate('/dashboard-updated')}>Voir mon dashboard</Button>
            <Button variant="outline">Télécharger le certificat</Button>
        </div>
      </main>

      <NavBar />
    </div>
  );
};

export default Certificate;
