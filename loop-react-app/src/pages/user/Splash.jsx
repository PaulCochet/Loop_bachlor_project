import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';

const Splash = () => {
  const navigate = useNavigate();

  return (
    <main 
      className="w-full bg-white overflow-hidden"
      style={{
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      {/* Top section (logo + tagline) */}
      <section 
        className="text-center px-6"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
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

      {/* Bottom section (3 buttons) */}
      <section 
        style={{
          padding: '0 24px 32px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        <Button onClick={() => navigate('/signup')} className="!bg-[#0A0A0A] !text-white w-full">
          Créer un compte
        </Button>

        <Button 
          variant="outline"
          onClick={() => navigate('/login')}
          className="w-full"
        >
          Se connecter
        </Button>

        <div className="pt-2 flex justify-center w-full">
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
      </section>
    </main>
  );
};

export default Splash;
