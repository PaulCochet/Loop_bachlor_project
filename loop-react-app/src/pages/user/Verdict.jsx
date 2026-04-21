import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';

const Verdict = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 px-8 pt-12 pb-32 overflow-y-auto no-scrollbar">
        {/* Success Header */}
        <div className="mb-10 text-center">
          <div className="w-20 h-20 bg-[#F2F2F7] rounded-full flex items-center justify-center mx-auto mb-6 text-[#0D46F2] shadow-sm">
            <span className="material-symbols-outlined !text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter leading-tight mb-2 uppercase">
            Intervention terminée
          </h1>
          <p className="text-sm font-medium text-[#8C8C8C]">Votre appareil est à nouveau fonctionnel</p>
        </div>

        {/* Verdict Details Card */}
        <section className="bg-[#F2F2F7] p-6 rounded-[32px] space-y-6 mb-8">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#8C8C8C] font-bold uppercase tracking-tight">Verdict technique</span>
            <span className="font-bold text-[#0D46F2]">Réparation réussie</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#8C8C8C] font-bold uppercase tracking-tight">Diagnostic</span>
            <span className="font-bold text-[#0A0A0A]">Inclus</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#8C8C8C] font-bold uppercase tracking-tight">Pièces utilisées</span>
            <span className="font-bold text-[#0A0A0A]">20€</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#8C8C8C] font-bold uppercase tracking-tight">Supplément</span>
            <span className="font-bold text-[#0A0A0A]">10€</span>
          </div>
          <div className="pt-6 border-t border-dashed border-[#8C8C8C]/30 flex justify-between items-center">
            <span className="font-black italic uppercase text-lg">Total facturé</span>
            <span className="font-black italic tracking-tighter text-2xl">79€</span>
          </div>
        </section>

        {/* Documents Section */}
        <div className="space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-4 ml-1">VOTRE DOSSIER</p>
          <button className="w-full p-5 bg-white border-2 border-[#F2F2F7] rounded-[24px] flex items-center gap-4 hover:bg-[#F2F2F7] transition-all active:scale-[0.98] group">
            <div className="w-10 h-10 bg-[#0D46F2]/5 rounded-full flex items-center justify-center text-[#0D46F2]">
              <span className="material-symbols-outlined !text-xl">description</span>
            </div>
            <div className="text-left flex-1">
              <p className="font-bold text-sm">Certificat d'intervention</p>
              <p className="text-[10px] text-[#8C8C8C] font-bold uppercase">Format PDF • 1.2 MB</p>
            </div>
            <span className="material-symbols-outlined text-[#8C8C8C] group-hover:text-[#0D46F2] transition-colors">download</span>
          </button>
        </div>
      </div>

      {/* Action Footer */}
      <div className="absolute bottom-0 left-0 w-full p-8 pt-4 bg-gradient-to-t from-white via-white to-transparent overflow-hidden">
        <div className="mb-4">
          <Button onClick={() => navigate('/payment')} className="bg-[#0D46F2]">
            Procéder au paiement
            <span className="material-symbols-outlined ml-1">arrow_forward</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Verdict;
