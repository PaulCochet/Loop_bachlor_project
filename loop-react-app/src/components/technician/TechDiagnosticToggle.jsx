import React from 'react';
import { motion } from 'framer-motion';

const TechDiagnosticToggle = ({ value, onChange, options = [
    { label: 'Oui', value: 'Oui' },
    { label: 'Non', value: 'Non' },
    { label: 'Non accessible', value: 'Non accessible' }
  ] }) => {

  return (
    <div className="flex gap-2 w-full">
      {options.map((option) => {
        const isSelected = value === option.value;
        return (
          <motion.button
            key={option.value}
            whileTap={{ scale: 0.96 }}
            onClick={() => onChange(option.value)}
            className={`flex-1 h-[44px] rounded-full text-[11px] display-text uppercase tracking-widest transition-all border ${
              isSelected 
                ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white' 
                : 'bg-white border-[#E5E5E5] text-[#0A0A0A]'
            }`}
          >
            {option.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default TechDiagnosticToggle;
