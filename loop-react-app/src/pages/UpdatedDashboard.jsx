import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

const UpdatedDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-[#E5E5E5]">
        <h1 className="text-xl font-black italic tracking-tighter uppercase">Bonjour Sophie</h1>
        <button className="text-[#0A0A0A]">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className="flex-1 px-6 pt-6 pb-24 overflow-y-auto space-y-8">
        {/* Hero Greeting */}
        <section>
          <div className="flex gap-4 mb-4">
              <div className="flex-1 card bg-[#0D46F2] text-white p-4">
                  <p className="text-2xl font-black italic">218kg</p>
                  <p className="text-[8px] font-bold uppercase tracking-widest opacity-80">CO₂ Évité</p>
              </div>
              <div className="flex-1 card p-4">
                  <p className="text-2xl font-black italic">1</p>
                  <p className="text-[8px] font-bold uppercase tracking-widest text-[#8C8C8C]">Sauvé</p>
              </div>
          </div>
          <h2 className="text-3xl font-black italic tracking-tight leading-tight">
            Votre impact est réel.
          </h2>
        </section>

        {/* Main Action */}
        <Button onClick={() => navigate('/photo')}>
          Nouvelle demande
          <span className="material-symbols-outlined">add_circle</span>
        </Button>

        {/* History */}
        <section className="space-y-4">
          <div className="flex justify-between items-end">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Historique</h3>
            <div className="flex-1 ml-4 mb-1 border-b border-[#E5E5E5]"></div>
          </div>

          <div className="card space-y-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-lg font-bold leading-tight uppercase italic">Lave-linge Samsung</h4>
                <p className="text-xs font-medium">Réparé le 19/04/2026</p>
              </div>
              <span className="material-symbols-outlined text-[#0D46F2]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" fullWidth={false} className="flex-1 py-2 text-[10px]" onClick={() => navigate('/certificate')}>
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Certificat
              </Button>
            </div>
          </div>
        </section>
      </main>

      <NavBar />
    </div>
  );
};

export default UpdatedDashboard;
