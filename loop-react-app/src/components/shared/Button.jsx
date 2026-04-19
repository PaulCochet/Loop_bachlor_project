import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = true, 
  className = '',
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center gap-2 font-bold transition-all active:scale-[0.96] uppercase tracking-widest text-[11px]";
  const variants = {
    primary: "bg-[#0D46F2] text-white",
    secondary: "bg-[#F2F2F7] text-[#000000]",
    outline: "bg-transparent border border-[rgba(0,0,0,0.1)] text-[#000000]",
    ghost: "bg-transparent text-[#8E8E93]"
  };

  const rounded = "rounded-[14px]";
  const padding = "py-[18px] px-6";
  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <div className={fullWidth ? "w-full" : ""}>
      <button 
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${rounded} ${padding} ${width} ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
