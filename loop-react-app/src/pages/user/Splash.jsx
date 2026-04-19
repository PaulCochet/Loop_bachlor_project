import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex flex-col justify-between items-center px-8 py-16 bg-white overflow-hidden">
      {/* Background Subtle Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#eeeeec 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Center Section: Brand Identity */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-20">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mb-8"
        >
          <img 
            src="/logo.svg" 
            alt="Loop Logo" 
            className="w-48 h-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#747688] text-lg max-w-[280px] leading-relaxed font-medium"
        >
          Donnez une seconde vie à vos appareils
        </motion.p>
      </div>

      {/* Bottom Section: Actions */}
      <div className="relative z-10 w-full max-w-sm space-y-4 mb-8">
        {/* Primary Action */}
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/onboarding')}
          className="w-full h-16 bg-[#1a1c1b] text-white font-semibold text-base rounded-xl flex items-center justify-center shadow-lg"
        >
          Créer un compte
        </motion.button>

        {/* Secondary Action */}
        <motion.button 
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate('/login')}
          className="w-full h-16 bg-transparent border-2 border-[#1a1c1b] text-[#1a1c1b] font-semibold text-base rounded-xl flex items-center justify-center"
        >
          Se connecter
        </motion.button>

        {/* Tertiary Action */}
        <div className="pt-4 flex justify-center">
          <button 
            onClick={() => navigate('/technician/login')}
            className="inline-flex items-center gap-2 text-[#747688] text-sm font-medium hover:text-[#1a1c1b] transition-colors group"
          >
            Accès technicien
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="fixed -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-[#003cdd]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed -top-[10%] -right-[10%] w-[40%] h-[40%] bg-[#003cdd]/5 rounded-full blur-[100px] pointer-events-none" />
    </main>
  );
};

export default Splash;
