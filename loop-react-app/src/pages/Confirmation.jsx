import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-12 pb-8">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2 uppercase">
          Résumé & paiement
        </h1>
        <p className="text-[#0D46F2] font-medium">Intervention du mardi 31 mars</p>
      </div>

      {/* Invoice */}
      <div className="flex-1 space-y-8 overflow-y-auto">
        <section className="card space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-[#8C8C8C] font-medium">Diagnostic</span>
            <span className="font-bold">Inclus</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#8C8C8C] font-medium">Main d'oeuvre</span>
            <span className="font-bold">45€</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#8C8C8C] font-medium">Pièce pompe vidange</span>
            <span className="font-bold">38€</span>
          </div>
          <div className="pt-6 border-t border-[#E5E5E5] flex justify-between items-center text-xl">
            <span className="font-black italic uppercase">Total</span>
            <span className="font-black italic tracking-tighter">83€</span>
          </div>
        </section>

        {/* Payment Method */}
        <section className="space-y-4">
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C]">Moyen de paiement</h2>
          <div className="flex items-center gap-4 bg-[#F2F2F0] p-4 rounded-[16px]">
            <div className="w-12 h-8 bg-white flex items-center justify-center rounded-lg shadow-sm border border-[#E5E5E5]">
              <span className="material-symbols-outlined text-[#0D46F2]" style={{ fontVariationSettings: "'FILL' 1" }}>credit_card</span>
            </div>
            <div className="flex-grow">
              <p className="font-bold text-sm">•••• 4242</p>
              <p className="text-[10px] text-[#8C8C8C] uppercase font-bold">Expire 09/26</p>
            </div>
            <span className="material-symbols-outlined text-[#0D46F2] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
        </section>
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/notification')}>Payer 83€</Button>
        <div className="flex items-center justify-center gap-2 text-[#8C8C8C]">
            <span className="material-symbols-outlined text-xs">lock</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">Paiement 100% sécurisé</span>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
