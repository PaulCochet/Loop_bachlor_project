import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen w-full flex flex-col bg-white overflow-hidden">
      {/* TOP 50% */}
      <section 
        className="h-[50dvh] flex flex-col items-center justify-center text-center px-6"
        style={{ paddingTop: 'env(safe-area-inset-top)' }}
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-4"
        >
          <img 
            src="/logo.svg" 
            alt="Loop Logo" 
            className="w-40 h-auto"
          />
        </motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#8C8C8C] text-base max-w-[240px] leading-tight display-text uppercase tracking-tighter"
        >
          Donnez une seconde vie à vos appareils
        </motion.p>
      </section>

      {/* BOTTOM 50% */}
      <section 
        className="h-[50dvh] flex flex-col items-center justify-center px-6"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="w-full max-w-sm space-y-4">
          {/* Primary Action */}
          <Button onClick={() => navigate('/signup')} className="!bg-[#0A0A0A] !text-white">
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
          <div className="pt-2 flex justify-center">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/technician/login')}
              className="inline-flex items-center gap-2 text-[#8C8C8C] text-[10px] display-text uppercase tracking-[0.15em] hover:text-[#1a1c1b] transition-colors group"
            >
              Accès technicien
              <span className="material-symbols-outlined !text-xs group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </motion.button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Splash;
