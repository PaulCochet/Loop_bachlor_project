import React from 'react';
import { motion } from 'framer-motion';

const IOSOuiNonToggle = ({ value, onChange, label }) => {
  return (
    <div className="flex flex-col items-start gap-4 w-full py-2">
      {label && (
        <label className="text-[11px] font-bold uppercase tracking-tight text-[#8C8C8C]">
          {label}
        </label>
      )}
      <div className="flex gap-1 p-1 bg-[#F2F2F7] rounded-[16px] w-[180px]">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => onChange(true)}
          className={`flex-1 py-3 rounded-[14px] font-bold text-xs transition-all duration-200 ${
            value === true 
              ? 'bg-white text-[#0D46F2] shadow-sm animate-in fade-in zoom-in duration-300' 
              : 'bg-transparent text-[#8C8C8C]'
          }`}
        >
          Oui
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => onChange(false)}
          className={`flex-1 py-3 rounded-[14px] font-bold text-xs transition-all duration-200 ${
            value === false 
              ? 'bg-white text-[#0D46F2] shadow-sm animate-in fade-in zoom-in duration-300' 
              : 'bg-transparent text-[#8C8C8C]'
          }`}
        >
          Non
        </motion.button>
      </div>
    </div>
  );
};

export default IOSOuiNonToggle;
