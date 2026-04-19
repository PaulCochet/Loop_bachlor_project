import React from 'react';
import { motion } from 'framer-motion';

const IOSOuiNonToggle = ({ value, onChange, label }) => {
  return (
    <div className="flex items-center justify-between w-full py-2">
      {label && (
        <label className="text-[11px] font-bold uppercase tracking-tight text-[#0A0A0A]">
          {label}
        </label>
      )}
      <div className="flex gap-1 p-1 bg-[#F2F2F7] rounded-[16px]">
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => onChange(true)}
          className={`px-6 py-2 rounded-[14px] font-bold text-xs transition-all duration-200 ${
            value === true 
              ? 'bg-[#1a1c1b] text-white shadow-md' 
              : 'bg-transparent text-[#8C8C8C]'
          }`}
        >
          Oui
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => onChange(false)}
          className={`px-6 py-2 rounded-[14px] font-bold text-xs transition-all duration-200 ${
            value === false 
              ? 'bg-[#1a1c1b] text-white shadow-md' 
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
