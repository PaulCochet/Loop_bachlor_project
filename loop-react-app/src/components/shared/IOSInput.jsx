import React, { useState } from 'react';
import { useIOSKeyboard } from './IOSKeyboardContext';
import { motion, AnimatePresence } from 'framer-motion';

const IOSInput = ({ 
  label, 
  placeholder, 
  type = 'text', 
  value = '', 
  onChange, 
  onFocus,
  onBlur,
  ...props 
}) => {
  const { showKeyboard } = useIOSKeyboard();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    showKeyboard();
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

  return (
    <div className="flex flex-col w-full px-6 mb-4">
      {label && (
        <label className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-wider mb-2 ml-1">
          {label}
        </label>
      )}
      <div 
        className={`relative flex items-center bg-[#F2F2F7] rounded-[16px] px-4 transition-all duration-200 border-2 ${
          isFocused ? 'border-[#0D46F2] bg-white ring-4 ring-[#0D46F2]/10' : 'border-transparent'
        }`}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="flex-1 py-4 bg-transparent text-[17px] font-medium outline-none placeholder:text-[#C7C7CC] text-[#1a1c1b]"
          {...props}
        />
        <AnimatePresence>
          {value && value.length > 0 && (
            <motion.button 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={clearInput}
              className="w-5 h-5 bg-[#8E8E93]/20 rounded-full flex items-center justify-center text-[#8E8E93] hover:bg-[#8E8E93]/30 transition-colors ml-2"
            >
              <span className="material-symbols-outlined !text-[14px] font-bold">close</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IOSInput;
