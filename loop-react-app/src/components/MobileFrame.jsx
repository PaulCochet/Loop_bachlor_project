import React from 'react';

const MobileFrame = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#f3f4f6]">
      <div 
        id="mobile-frame"
        className="relative bg-white shadow-2xl overflow-hidden"
        style={{
          width: '390px',
          height: '844px',
          minWidth: '390px',
          minHeight: '844px',
          maxWidth: '390px',
          maxHeight: '844px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '40px', // Premium rounded corners for the frame
          border: '8px solid #000', // Mocking a phone bezel
        }}
      >
        {/* Notch / Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 w-32 h-8 bg-black rounded-3xl z-50 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]"></div>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden pt-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFrame;
