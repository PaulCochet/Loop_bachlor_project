import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Recap = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-12 pb-8">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
          Récapitulatif
        </h1>
        <p className="text-sm font-medium">Vérifiez avant de confirmer</p>
      </div>

      {/* Recap Card */}
      <div className="flex-1 space-y-8 overflow-y-auto">
        <div className="card space-y-8">
          <div className="grid grid-cols-2 gap-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C]">Appareil</span>
              <span className="text-sm font-bold">Lave-linge</span>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C]">Problème</span>
              <span className="text-sm font-bold">S'arrête en cours</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C]">Créneau</span>
              <span className="text-sm font-bold">Demain 9h–11h</span>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C]">Technicien</span>
              <span className="text-sm font-bold text-[#0D46F2]">Lucas M.</span>
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5E5E5]">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C]">Adresse</span>
            <p className="text-sm font-bold mt-1">4 rue Loop, Nantes</p>
          </div>

          {/* Map Mock */}
          <div className="h-24 bg-[#F2F2F0] rounded-[12px] flex items-center justify-center border border-[#E5E5E5] overflow-hidden">
            <div className="w-6 h-6 bg-[#0D46F2] rounded-full shadow-lg"></div>
          </div>
        </div>

        <div className="flex justify-center">
            <Button variant="outline" fullWidth={false} onClick={() => navigate('/slot')}>
                Modifier
            </Button>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/confirmation')}>Valider & payer</Button>
      </div>
    </div>
  );
};

export default Recap;
