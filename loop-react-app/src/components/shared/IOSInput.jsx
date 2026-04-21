import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IOSInput = ({ 
  label, 
  placeholder, 
  type = 'text', 
  value = '', 
  onChange, 
  onFocus,
  onBlur,
  multiline = false,
  rows = 4,
  ...props 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const clearInput = (e) => {
    e.stopPropagation();
    if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  const inputClasses = "flex-1 py-[14px] bg-transparent text-[17px] font-medium outline-none placeholder:text-[#C7C7CC] text-[#1a1c1b]";

  return (
    <div className={`flex flex-col w-full px-6 mb-4 ${props.className || ''}`}>
      {label && (
        <label className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-wider mb-2 ml-1">
          {label}
        </label>
      )}
      <div 
        className={`relative flex items-center bg-[#F2F2F7] rounded-[20px] transition-all duration-200 border-2 min-h-[52px] w-full ${
          isFocused ? 'border-[#0D46F2] bg-white ring-4 ring-[#0D46F2]/10' : 'border-transparent'
        }`}
      >
        <div className="relative flex-1 flex items-center h-full">
          {multiline ? (
            <textarea
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              rows={rows}
              className={`${inputClasses} resize-none min-h-[100px] w-full p-[14px_16px]`}
              {...props}
            />
          ) : (
            <input
              type={type}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              className={`${inputClasses} w-full p-[14px_16px] pr-10`}
              {...props}
            />
          )}
          
          <AnimatePresence>
            {value && value.length > 0 && !multiline && (
              <motion.button 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={clearInput}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#8E8E93]/20 rounded-full flex items-center justify-center text-[#8E8E93] hover:bg-[#8E8E93]/30 transition-colors z-10"
              >
                <span className="material-symbols-outlined !text-[16px] font-bold">close</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default IOSInput;
