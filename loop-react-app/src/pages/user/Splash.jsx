import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen flex flex-col justify-between items-center px-8 py-20 bg-white overflow-hidden">
      {/* Background Subtle Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#F2F2F7 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Center Section: Brand Identity */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-10"
        >
          <img 
            src="/logo.svg" 
            alt="Loop Logo" 
            className="w-56 h-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#8C8C8C] text-lg max-w-[260px] leading-relaxed font-black italic uppercase tracking-tighter"
        >
          Donnez une seconde vie à vos appareils
        </motion.p>
      </div>

      {/* Bottom Section: Actions */}
      <div className="relative z-10 w-full max-w-sm space-y-4 mb-2">
        {/* Primary Action */}
        <Button onClick={() => navigate('/signup')}>
          Créer un compte
        </Button>

        {/* Secondary Action */}
        <Button 
          variant="outline"
          onClick={() => navigate('/login')}
        >
          Se connecter
        </Button>

        {/* Tertiary Action */}
        <div className="pt-6 flex justify-center">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/technician/login')}
            className="inline-flex items-center gap-2 text-[#8C8C8C] text-[11px] font-black uppercase tracking-[0.15em] hover:text-[#1a1c1b] transition-colors group italic"
          >
            Accès technicien
            <span className="material-symbols-outlined !text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </motion.button>
        </div>
      </div>

      {/* Background Decorative Gradient */}
      <div className="fixed -bottom-[20%] -left-[10%] w-[60%] h-[60%] bg-[#0D46F2]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed -top-[10%] -right-[10%] w-[40%] h-[40%] bg-[#0D46F2]/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Home Indicator Safe Area Bottom */}
      <div className="h-[34px] w-full" />
    </main>
  );
};

export default Splash;
