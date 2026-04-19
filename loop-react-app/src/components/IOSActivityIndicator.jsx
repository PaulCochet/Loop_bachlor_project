import React from 'react';

const IOSActivityIndicator = ({ size = 'medium', color = '#8E8E93' }) => {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8'
  };

  return (
    <div className={`${sizes[size]} relative animate-spin`}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[10%] h-[30%] rounded-full origin-[center_165%]"
          style={{
            backgroundColor: color,
            transform: `translateX(-50%) rotate(${i * 30}deg)`,
            opacity: 1 - (i * 0.08)
          }}
        />
      ))}
    </div>
  );
};

export default IOSActivityIndicator;
