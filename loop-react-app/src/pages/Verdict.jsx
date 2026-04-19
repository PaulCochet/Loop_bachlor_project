import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

const Verdict = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white relative">
      <main className="flex-1 px-8 pt-12 pb-24 overflow-y-auto space-y-10">
        <header>
          <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2 uppercase">Verdict</h1>
          <p className="text-sm font-medium text-[#0D46F2]">Réparation réussie !</p>
        </header>

        {/* Hero Impact */}
        <div className="card bg-[#F2F2F0] p-10 flex flex-col items-center justify-center space-y-2 text-center">
            <span className="text-[64px] font-black italic tracking-tighter leading-none">218 kg</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0D46F2]">de CO₂ évité</span>
        </div>

        {/* Small Metrics */}
        <div className="grid grid-cols-2 gap-4">
            <div className="card p-6 flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-[#0D46F2]">history_toggle_off</span>
                <div className="mt-4">
                    <p className="text-2xl font-black italic">+4 ans</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-[#8C8C8C]">vie prolongée</p>
                </div>
            </div>
            <div className="card p-6 flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-[#0D46F2]" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                <div className="mt-4">
                    <p className="text-2xl font-black italic">1</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest text-[#8C8C8C]">appareil sauvé</p>
                </div>
            </div>
        </div>

        {/* Action to progress */}
        <Button onClick={() => navigate('/payment')}>Voir le paiement</Button>
      </main>

      <NavBar />
    </div>
  );
};

export default Verdict;
