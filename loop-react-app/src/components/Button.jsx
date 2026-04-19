import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = true, 
  className = '',
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center gap-2 font-bold transition-all active:scale-[0.98]";
  const variants = {
    primary: "bg-[#0D46F2] text-white",
    secondary: "bg-[#F2F2F0] text-[#0A0A0A]",
    outline: "bg-transparent border border-[#E5E5E5] text-[#0A0A0A]",
    ghost: "bg-transparent text-[#8C8C8C]"
  };

  const rounded = "rounded-[12px]";
  const padding = "py-4 px-6";
  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <div className={fullWidth ? "px-6 w-full" : ""}>
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
