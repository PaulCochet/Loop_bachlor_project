import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';

  import ScreenLayout from '../../components/shared/ScreenLayout';
  
  const Success = () => {
    const navigate = useNavigate();
  
    React.useEffect(() => {
      document.body.style.backgroundColor = '#0D46F2';
      return () => {
        document.body.style.backgroundColor = 'white';
      };
    }, []);

    return (
      <ScreenLayout
        className="!bg-[#0D46F2]"
        actions={
          <Button 
            variant="black" 
            onClick={() => navigate('/rate-technician')}
          >
            Retour à l'accueil
          </Button>
        }
      >
        <div className="flex flex-col items-center text-center text-white pt-12 pb-24">
          {/* Animated Checkmark */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-10 shadow-2xl"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="material-symbols-outlined text-white !text-6xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </motion.span>
          </motion.div>
  
          <h1 className="text-5xl display-text tracking-tighter uppercase italic mb-4 leading-none">
            Félicitations !
          </h1>
          <p className="text-white/80 display-text uppercase tracking-[0.2em] text-xs mb-4">
            Appareil sauvé
          </p>
          <p className="text-white font-bold text-2xl display-text mb-16">36€</p>
  
          {/* Download Section (Glassmorphism cards) */}
          <div className="w-full space-y-4">
            <p className="text-[10px] display-text uppercase tracking-widest text-white/60 mb-6">Vos documents</p>
            <div className="grid grid-cols-2 gap-4">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/10 active:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-white !text-3xl">download</span>
                <span className="text-[9px] display-text uppercase tracking-widest leading-tight text-white/80">Facture</span>
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-6 rounded-[32px] border border-white/10 active:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-white !text-3xl">description</span>
                <span className="text-[9px] display-text uppercase tracking-widest leading-tight text-white/80">Certificat</span>
              </motion.button>
            </div>
          </div>
        </div>
      </ScreenLayout>
    );
  };

export default Success;
