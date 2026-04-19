import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import IOSInput from '../../components/shared/IOSInput';

const TechnicianLogin = () => {
  const navigate = useNavigate();

  return (
    <main className="w-full min-h-screen bg-white flex flex-col px-8 py-12 relative overflow-hidden">
      {/* Back Button */}
      <div className="absolute top-[44px] left-6 z-50">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-1 text-[#464545] font-medium"
        >
          <span className="material-symbols-outlined">chevron_left</span>
          <span>Retour</span>
        </button>
      </div>

      {/* Subtle background texture */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#003cdd]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header: Brand Identity */}
      <header className="flex items-center gap-2 mb-16 mt-12">
        <div className="flex items-center">
          <span className="text-[#1a1c1b] font-black italic tracking-tighter text-2xl uppercase">LOOP</span>
        </div>
        <div className="h-4 w-[1px] bg-gray-200 mx-1" />
        <div className="flex items-center gap-1.5 text-[#0D46F2] font-semibold text-sm">
          <span className="material-symbols-outlined text-[18px]">build</span>
          <span className="tracking-tight">Espace technicien</span>
        </div>
      </header>

      {/* Title Section */}
      <section class="mb-12">
        <h1 className="text-4xl font-black italic tracking-tighter text-[#1a1c1b] mb-4 leading-none">
          Connexion technicien
        </h1>
        <p className="text-[#8C8C8C] text-sm leading-relaxed max-w-[240px]">
          Vos identifiants vous ont été fournis par Loop
        </p>
      </section>

      {/* Login Form */}
      <div className="flex-grow flex flex-col gap-6">
        <div className="space-y-6">
          <IOSInput 
            placeholder="Email professionnel" 
            type="email"
          />
          <IOSInput 
            placeholder="Mot de passe" 
            type="password"
          />
        </div>

        <div className="flex items-center gap-3 mt-2">
          <div className="relative flex items-center">
            <input 
              className="appearance-none h-5 w-5 rounded-md border-2 border-gray-300 checked:bg-[#003cdd] checked:border-[#003cdd] transition-all cursor-pointer peer" 
              id="remember" 
              type="checkbox"
            />
            <span className="material-symbols-outlined absolute text-white text-[14px] left-0.5 pointer-events-none opacity-0 peer-checked:opacity-100 font-bold">check</span>
          </div>
          <label className="text-sm font-medium text-gray-600 cursor-pointer" htmlFor="remember">Rester connecté</label>
        </div>

        <div className="mt-8">
          <motion.button 
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate('/technician/dashboard')}
            className="w-full py-5 bg-[#0A0A0A] text-white rounded-xl font-bold tracking-wide transition-transform duration-200 flex justify-center items-center gap-2 group"
          >
            <span>Se connecter</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </motion.button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="mt-12 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[120px] absolute -bottom-10 -right-10 rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>
          precision_manufacturing
        </span>
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-8 flex flex-col items-start gap-1">
        <p className="text-[11px] text-[#8C8C8C] font-medium tracking-wide">
          Problème de connexion ? <span className="text-[#003cdd] cursor-pointer hover:underline">Contactez Loop</span>
        </p>
      </footer>
    </main>
  );
};

export default TechnicianLogin;
