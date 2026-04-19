import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IOSBottomSheet = ({ isOpen, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[200] backdrop-blur-sm"
          />
          
          {/* Sheet */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[201] px-8 pt-4 pb-12 shadow-2xl"
          >
            {/* Grabber */}
            <div className="w-10 h-1 bg-[#F2F2F7] rounded-full mx-auto mb-6" />
            
            {title && (
              <h2 className="text-xl font-bold mb-6 text-center text-[#1a1c1b]">{title}</h2>
            )}
            
            <div className="space-y-3">
              {children}
            </div>
            
            <button 
              onClick={onClose}
              className="w-full mt-6 py-4 bg-[#F2F2F7] text-[#1a1c1b] font-bold rounded-xl"
            >
              Annuler
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default IOSBottomSheet;
