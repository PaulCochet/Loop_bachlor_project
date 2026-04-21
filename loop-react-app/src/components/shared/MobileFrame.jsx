import React, { useState, useEffect } from 'react';
import StatusBar from './StatusBar';
import HomeIndicator from './HomeIndicator';
import IOSKeyboard from './IOSKeyboard';
import { useIOSKeyboard } from './IOSKeyboardContext';

const MobileFrame = ({ children }) => {
  const { isKeyboardVisible, hideKeyboard } = useIOSKeyboard();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto no-scrollbar pb-[34px]">
          {children}
        </div>
        <HomeIndicator />
        <IOSKeyboard isVisible={isKeyboardVisible} onDismiss={hideKeyboard} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#1a1a1a]">
      <div 
        id="mobile-frame"
        className="relative bg-white shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden"
        style={{
          width: '390px',
          height: '844px',
          minWidth: '390px',
          minHeight: '844px',
          maxWidth: '390px',
          maxHeight: '844px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '50px', 
          border: '12px solid #333',
          position: 'relative' // Ensure relative scope for fixed children
        }}
      >
        {/* Content area */}
        <div className="flex-1 overflow-y-auto no-scrollbar pt-6 pb-[34px] relative">
          {children}
        </div>

        <HomeIndicator />
        <IOSKeyboard isVisible={isKeyboardVisible} onDismiss={hideKeyboard} />
      </div>
    </div>
  );
};

export default MobileFrame;
