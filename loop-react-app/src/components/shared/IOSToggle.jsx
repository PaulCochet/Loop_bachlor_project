import React from 'react';
import { motion } from 'framer-motion';

const IOSToggle = ({ isOn, onToggle }) => {
  return (
    <div 
      onClick={onToggle}
      className={`w-[51px] h-[31px] rounded-full p-[2px] cursor-pointer transition-colors duration-300 ${isOn ? 'bg-[#34C759]' : 'bg-[#E9E9EB]'}`}
    >
      <motion.div 
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        className="w-[27px] h-[27px] bg-white rounded-full shadow-[0_3px_8px_rgba(0,0,0,0.15),0_1px_1px_rgba(0,0,0,0.16)]"
        animate={{ x: isOn ? 20 : 0 }}
      />
    </div>
  );
};

export default IOSToggle;
