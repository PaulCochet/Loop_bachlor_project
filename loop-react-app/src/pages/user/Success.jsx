import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 px-8 pt-20 pb-32 flex flex-col items-center text-center">
        {/* Animated Checkmark */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.2 }}
          className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-500/20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="material-symbols-outlined text-white !text-5xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </motion.span>
        </motion.div>

        <h1 className="text-4xl display-text tracking-tight uppercase mb-2">
          Félicitations !
        </h1>
        <p className="text-[#0D46F2] display-text uppercase tracking-[0.2em] text-xs mb-12">
          Appareil reconditionné
        </p>

        {/* Download Section */}
        <div className="w-full space-y-4">
          <p className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C] mb-4">Vos documents</p>
          <div className="grid grid-cols-2 gap-3">
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3 bg-[#F2F2F7] p-6 rounded-[28px] border border-transparent active:border-[#0D46F2] transition-all"
            >
              <span className="material-symbols-outlined text-[#0D46F2] !text-3xl">download</span>
              <span className="text-[9px] display-text uppercase tracking-widest leading-tight">Télécharger la facture</span>
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-3 bg-[#F2F2F7] p-6 rounded-[28px] border border-transparent active:border-[#0D46F2] transition-all"
            >
              <span className="material-symbols-outlined text-[#0D46F2] !text-3xl">description</span>
              <span className="text-[9px] display-text uppercase tracking-widest leading-tight">Télécharger certificat</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="absolute bottom-0 left-0 w-full p-8 pt-4">
        <Button 
          variant="primary" 
          className="!bg-[#0A0A0A]"
          onClick={() => navigate('/dashboard')}
        >
          Retour à l'accueil
        </Button>
      </div>
    </div>
  );
};

export default Success;
