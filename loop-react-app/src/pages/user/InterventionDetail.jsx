import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ScreenLayout from '../../components/shared/ScreenLayout';

const InterventionDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { intervention } = location.state || {
    intervention: {
      appliance: 'Lave-linge Samsung',
      status: 'Réparé',
      date: 'il y a 1 semaine',
      technician: 'Lucas M.',
      parts: 'Pompe de vidange',
      duration: '38 min',
      co2: '218 kg',
      verdict: 'Réparable'
    }
  };

  const InfoRow = ({ label, value, isTechnician = false }) => (
    <div className={`flex justify-between items-center py-4 border-b border-[#F2F2F7] last:border-0`}>
      <span className="text-[10px] display-text uppercase tracking-widest text-[#8E8E93]">{label}</span>
      {isTechnician ? (
        <div 
          onClick={() => navigate('/technician-profile')}
          className="flex items-center gap-2 cursor-pointer active:opacity-60 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-[#F2F2F7] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" 
              alt={value} 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-[#0A0A0A]">{value}</span>
          <span className="material-symbols-outlined text-[#0D46F2] !text-sm">chevron_right</span>
        </div>
      ) : (
        <span className="font-bold text-[#0A0A0A] text-right">{value}</span>
      )}
    </div>
  );

  return (
    <ScreenLayout
      actions={
        <Button variant="outline" onClick={() => {}}>
          <span className="material-symbols-outlined !text-lg mr-1">download</span>
          Télécharger le certificat
        </Button>
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
          <h1 className="text-3xl display-text tracking-tight uppercase">Détails</h1>
        </header>

        <div className="space-y-8">
          {/* Appliance Photo Placeholder */}
          <div className="w-full aspect-square bg-[#F2F2F7] rounded-[32px] flex flex-col items-center justify-center border border-[#E5E5EA] overflow-hidden relative">
            <span className="material-symbols-outlined !text-6xl text-[#D1D1D6] mb-4">inventory_2</span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8E8E93]">Photo de l'appareil</p>
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-black/5">
              <p className="text-[10px] font-bold text-[#0D46F2] uppercase tracking-widest">{intervention.status}</p>
            </div>
          </div>

          {/* Structured Sheet */}
          <div className="bg-white rounded-[28px] border border-[#F2F2F7] shadow-xl shadow-black/5 p-6 space-y-2">
            <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8E8E93] mb-4">Fiche intervention</h3>
            <InfoRow label="Appareil" value={intervention.appliance} />
            <InfoRow label="Date" value={intervention.date} />
            <InfoRow label="Technicien" value={intervention.technician} isTechnician={true} />
            <InfoRow label="Pièce remplacée" value={intervention.parts} />
            <InfoRow label="Durée" value={intervention.duration} />
            <InfoRow label="Verdict" value={intervention.verdict} />
            <div className="pt-4 mt-2 border-t-2 border-dashed border-[#F2F2F7] flex justify-between items-center">
              <span className="text-[10px] display-text uppercase tracking-widest text-[#8E8E93]">CO₂ évité</span>
              <span className="text-xl display-text text-[#0D46F2]">{intervention.co2}</span>
            </div>
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default InterventionDetail;
