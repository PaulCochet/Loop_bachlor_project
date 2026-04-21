import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import NavBar from '../../components/user/UserNavBar';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-[#F2F2F7] sticky top-0 bg-white/90 backdrop-blur-md z-10">
        <img src="/logo.svg" alt="Loop" className="h-6 w-auto" />
        <button className="text-[#0A0A0A]">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </header>

      <main className="flex-1 px-6 pt-8 pb-32 overflow-y-auto space-y-10 no-scrollbar">
        {/* Impact Section */}
        <section className="space-y-6">
          <header>
            <h2 className="text-3xl display-text tracking-tighter leading-none mb-1 uppercase">
              Bonjour Sophie
            </h2>
            <p className="text-xs font-bold text-[#8C8C8C] uppercase tracking-widest">Votre impact est réel</p>
          </header>
          
          <div className="flex gap-4">
            <div className="flex-1 bg-[#0D46F2] p-6 rounded-[24px] text-white shadow-xl shadow-[#0D46F2]/20">
              <p className="text-3xl display-text mb-0.5">218 kg</p>
              <p className="text-[10px] display-text uppercase tracking-widest opacity-80">CO₂ évité</p>
            </div>
            <div className="flex-1 bg-[#F2F2F7] p-6 rounded-[24px]">
              <p className="text-3xl display-text mb-0.5 text-[#0A0A0A]">1</p>
              <p className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">appareil sauvé</p>
            </div>
          </div>
        </section>

        {/* Action Card */}
        <div className="bg-[#F2F2F7] p-8 rounded-[32px] border border-[#E5E5EA] space-y-6">
          <h3 className="text-xl font-bold italic uppercase tracking-tight leading-tight">Un problème avec un appareil ?</h3>
          <Button onClick={() => navigate('/photo')}>
            <span className="material-symbols-outlined !text-xl mr-1">qr_code_scanner</span>
            Nouvelle démarche
          </Button>
        </div>

        {/* Active Requests */}
        <section className="space-y-6">
          <header className="flex items-center gap-4">
            <h3 className="text-[10px] display-text tracking-[0.2em] uppercase text-[#8C8C8C]">En cours</h3>
            <div className="flex-1 h-[1px] bg-[#F2F2F7]"></div>
          </header>

          <div className="bg-white rounded-[24px] p-6 border border-[#F2F2F7] shadow-xl shadow-black/5 space-y-6">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-xl display-text uppercase tracking-tight leading-none">Lave-linge Samsung</h4>
                <p className="text-[10px] font-bold text-[#0D46F2] uppercase tracking-widest">Intervention terminée</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0D46F2] !text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 !py-3 !text-[11px]" onClick={() => navigate('/verdict')}>
                <span className="material-symbols-outlined !text-lg">description</span>
                DÉTAILS
              </Button>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="space-y-6">
          <header className="flex items-center gap-4">
            <h3 className="text-[10px] display-text tracking-[0.2em] uppercase text-[#8C8C8C]">Historique</h3>
            <div className="flex-1 h-[1px] bg-[#F2F2F7]"></div>
          </header>

          <div className="bg-white rounded-[24px] p-6 border border-[#F2F2F7] shadow-xl shadow-black/5 flex items-center justify-between">
            <div>
              <h4 className="text-lg display-text uppercase tracking-tight">Frigo Smeg</h4>
              <p className="text-[9px] font-bold text-[#8C8C8C] uppercase tracking-widest">Réparé le 12/04/2026</p>
            </div>
            <span className="material-symbols-outlined text-[#8C8C8C]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
          </div>
        </section>
      </main>

      <NavBar />
    </div>
  );
};

export default Dashboard;
