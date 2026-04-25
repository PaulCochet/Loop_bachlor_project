import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ScreenLayout from '../../components/shared/ScreenLayout';

const TechnicianProfile = () => {
  const navigate = useNavigate();

  return (
    <ScreenLayout
      actions={
        <Button onClick={() => navigate(-1)}>Retour</Button>
      }
    >
      <div className="pt-4 pb-12">
        <header className="mb-10 flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center bg-[#F2F2F7] rounded-full active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <h1 className="text-3xl display-text tracking-tight uppercase">Profil</h1>
        </header>

        <div className="flex flex-col items-center text-center space-y-8">
          {/* Avatar Section */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-[#F2F2F7] border-4 border-white shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" 
                alt="Lucas M." 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 bg-[#0D46F2] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
              Certifié Loop
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl display-text tracking-tighter uppercase">Lucas M.</h2>
            <div className="flex items-center justify-center gap-1 text-[#FFCC00]">
              <span className="material-symbols-outlined !text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined !text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined !text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined !text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined !text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="text-sm font-bold text-[#0A0A0A] ml-1">5/5</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#F2F2F7] p-6 rounded-[24px]">
              <p className="text-2xl display-text mb-0.5">142</p>
              <p className="text-[10px] display-text uppercase tracking-widest text-[#8E8E93]">Interventions</p>
            </div>
            <div className="bg-[#F2F2F7] p-6 rounded-[24px]">
              <p className="text-2xl display-text mb-0.5">3 ans</p>
              <p className="text-[10px] display-text uppercase tracking-widest text-[#8E8E93]">Expérience</p>
            </div>
          </div>

          {/* Badge Bientôt Disponible */}
          <div className="w-full p-8 bg-[#F2F2F7] rounded-[32px] border border-dashed border-[#8E8E93]/30 flex flex-col items-center gap-4">
            <span className="material-symbols-outlined !text-4xl text-[#8E8E93]/40">bolt</span>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#8E8E93] mb-1">Bientôt disponible</p>
              <p className="text-[11px] text-[#8E8E93] leading-relaxed">
                Vous pourrez bientôt contacter directement votre technicien et consulter ses avis détaillés.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianProfile;
