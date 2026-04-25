import React from 'react';

const ProgressBar = ({ step = 1, totalSteps = 3, label }) => {
  return (
    <div 
      className="sticky top-0 z-[50] bg-white border-b border-[#E5E5E5] w-full"
      style={{ padding: '12px 24px' }}
    >
      {label && (
        <div className="mb-3">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">{label}</span>
        </div>
      )}
      <div className="flex gap-2">
        {[...Array(totalSteps)].map((_, i) => (
          <div 
            key={i}
            className={`h-[6px] flex-1 rounded-full transition-all duration-500 ${
              i < step ? 'bg-[#0D46F2]' : 'bg-[#F2F2F7]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
