import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IOSKeyboard = ({ isVisible, onDismiss }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="absolute bottom-0 left-0 w-full z-[150] shadow-[0_-10px_30px_rgba(0,0,0,0.1)]"
        >
          {/* Dismiss Bar (Barre de retour) */}
          <div className="bg-[#F2F2F7] border-t border-[rgba(0,0,0,0.1)] px-4 py-2 flex justify-end">
            <button 
              onClick={onDismiss}
              className="text-[#0D46F2] font-bold text-[15px] active:opacity-50"
            >
              Retour
            </button>
          </div>

          {/* Simulated Keyboard Body */}
          <div className="bg-[#D1D3D9] w-full h-[250px] p-2 flex flex-col gap-2">
            {[1, 2, 3].map(row => (
              <div key={row} className="flex justify-center gap-1.5 h-[42px]">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="flex-1 bg-white rounded-md shadow-sm border-b-[1px] border-[rgba(0,0,0,0.3)]"></div>
                ))}
              </div>
            ))}
            <div className="flex justify-center gap-1.5 h-[42px]">
                <div className="flex-[1.5] bg-[#ACB0B4] rounded-md"></div>
                <div className="flex-[6] bg-white rounded-md"></div>
                <div className="flex-[1.5] bg-[#ACB0B4] rounded-md"></div>
            </div>
          </div>
          
          {/* Safe Area Spacer for bottom */}
          <div className="h-[34px] bg-[#D1D3D9]"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IOSKeyboard;
