import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import IOSInput from '../../components/shared/IOSInput';
import Button from '../../components/shared/Button';

const TechnicianLogin = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-white flex flex-col px-8 py-12 relative overflow-hidden">
      {/* Back Button */}
      <div 
        className="absolute left-6 z-50"
        style={{ top: 'calc(env(safe-area-inset-top) + 12px)' }}
      >
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-[#0D46F2] font-semibold text-[17px]"
        >
          <span className="material-symbols-outlined !text-[24px]">chevron_left</span>
          <span>Retour</span>
        </motion.button>
      </div>

      {/* Subtle background texture */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0D46F2]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header: Brand Identity */}
      <header className="flex items-center gap-3 mb-16 mt-16 ml-1">
        <img src="/logo.svg" alt="Loop" className="h-7 w-auto" />
        <div className="h-5 w-[1px] bg-[#F2F2F7] mx-1" />
        <div className="flex items-center gap-1.5 text-[#0D46F2] display-text uppercase tracking-widest  pt-1">
          <span className="material-symbols-outlined !text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>build</span>
          <span>Espace technicien</span>
        </div>
      </header>

      {/* Title Section */}
      <section className="mb-12">
        <h1 className="text-4xl display-text tracking-tighter text-[#1a1c1b] mb-4 leading-none uppercase">
          Connexion
        </h1>
        <p className="text-[#8C8C8C] text-sm leading-relaxed max-w-[240px] font-medium">
          Vos identifiants vous ont été fournis par le support Loop
        </p>
      </section>

      {/* Login Form */}
      <div className="flex-grow flex flex-col gap-8">
        <div className="space-y-6">
          <IOSInput 
            placeholder="Identifiant" 
            type="text"
          />
          <IOSInput 
            placeholder="Mot de passe" 
            type="password"
          />
        </div>

        <div className="flex items-center gap-3 px-1">
          <div className="relative flex items-center">
            <input 
              className="appearance-none h-6 w-6 rounded-lg border-2 border-[#F2F2F7] checked:bg-[#0D46F2] checked:border-[#0D46F2] transition-all cursor-pointer peer" 
              id="remember" 
              type="checkbox"
            />
            <span className="material-symbols-outlined absolute text-white text-[16px] left-1 pointer-events-none opacity-0 peer-checked:opacity-100 font-bold">check</span>
          </div>
          <label className="text-[13px] font-bold text-[#8C8C8C] cursor-pointer" htmlFor="remember">Rester connecté</label>
        </div>

        <div className="mt-4">
          <Button onClick={() => navigate('/technician/dashboard')}>
            Se connecter
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </Button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="mt-12 opacity-[0.03] pointer-events-none">
        <span className="material-symbols-outlined text-[200px] absolute -bottom-20 -right-20 rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>
          precision_manufacturing
        </span>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-8 flex flex-col items-start gap-1">
        <p className="text-[11px] text-[#8C8C8C] display-text uppercase tracking-widest">
          Problème ? <span className="text-[#0D46F2] cursor-pointer hover:underline italic">Contactez Loop</span>
        </p>
      </footer>
    </main>
  );
};

export default TechnicianLogin;
