import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = true, 
  className = '',
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[11px] transition-colors duration-200";
  const variants = {
    primary: "bg-[#0D46F2] text-white shadow-[0_8px_30px_rgba(13,70,242,0.15)]",
    secondary: "bg-[#F2F2F7] text-[#000000]",
    outline: "bg-transparent border border-[rgba(0,0,0,0.1)] text-[#000000]",
    ghost: "bg-transparent text-[#8E8E93]"
  };

  const rounded = "rounded-[14px]";
  const padding = "py-[18px] px-6";
  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <div className={fullWidth ? "w-full" : ""}>
      <motion.button 
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', damping: 15, stiffness: 300 }}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${rounded} ${padding} ${width} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  );
};

export default Button;
