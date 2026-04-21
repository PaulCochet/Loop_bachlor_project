import React from 'react';

const ProgressBar = ({ step = 1, totalSteps = 3 }) => {
  return (
    <div className="w-full px-8 pt-2 pb-6">
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
