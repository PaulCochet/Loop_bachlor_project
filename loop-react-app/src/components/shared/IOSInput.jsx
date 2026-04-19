import React, { useState } from 'react';
import { useIOSKeyboard } from './IOSKeyboardContext';

const IOSInput = ({ 
  label, 
  placeholder, 
  type = 'text', 
  value, 
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

  const clearInput = () => {
    if (onChange) onChange({ target: { value: '' } });
  };

  return (
    <div className="flex flex-col w-full px-6 mb-4">
      {label && <label className="text-[11px] font-bold text-[#8E8E93] uppercase tracking-wider mb-1 ml-1">{label}</label>}
      <div 
        className={`relative flex items-center border-b-2 transition-colors duration-200 ${isFocused ? 'border-[#0D46F2]' : 'border-[rgba(0,0,0,0.05)]'}`}
      >
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="flex-1 py-3 bg-transparent text-[16px] font-medium outline-none placeholder:text-[#C7C7CC]"
          {...props}
        />
        {value && value.length > 0 && (
          <button 
            onClick={clearInput}
            className="w-5 h-5 bg-[#C7C7CC] rounded-full flex items-center justify-center text-white"
          >
            <span className="material-symbols-outlined !text-[14px]">close</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default IOSInput;
