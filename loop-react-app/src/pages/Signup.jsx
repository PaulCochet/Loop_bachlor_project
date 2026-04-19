import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-12 pb-8">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
          Créer mon compte
        </h1>
        <p className="text-base font-medium">Vos données restent confidentielles</p>
      </div>

      {/* Form */}
      <form className="flex-1 space-y-6">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C] px-1">Prénom</label>
          <input 
            className="w-full bg-[#F2F2F0] border-0 rounded-[12px] px-4 py-4 text-[#0A0A0A] placeholder-[#8C8C8C] focus:ring-2 focus:ring-[#0D46F2] transition-all outline-none" 
            placeholder="Votre prénom" 
            type="text" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C] px-1">E-mail</label>
          <input 
            className="w-full bg-[#F2F2F0] border-0 rounded-[12px] px-4 py-4 text-[#0A0A0A] placeholder-[#8C8C8C] focus:ring-2 focus:ring-[#0D46F2] transition-all outline-none" 
            placeholder="votre@email.com" 
            type="email" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C] px-1">Téléphone</label>
          <input 
            className="w-full bg-[#F2F2F0] border-0 rounded-[12px] px-4 py-4 text-[#0A0A0A] placeholder-[#8C8C8C] focus:ring-2 focus:ring-[#0D46F2] transition-all outline-none" 
            placeholder="+33 0 00 00 00 00" 
            type="tel" 
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C] px-1">Adresse</label>
          <textarea 
            className="w-full bg-[#F2F2F0] border-0 rounded-[12px] px-4 py-4 text-[#0A0A0A] placeholder-[#8C8C8C] focus:ring-2 focus:ring-[#0D46F2] transition-all outline-none resize-none" 
            placeholder="Votre adresse complète"
            rows="2"
          ></textarea>
        </div>
      </form>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/privacy')}>Suivant</Button>
        <Button variant="ghost" onClick={() => navigate('/onboarding')}>Retour</Button>
      </div>
    </div>
  );
};

export default Signup;
