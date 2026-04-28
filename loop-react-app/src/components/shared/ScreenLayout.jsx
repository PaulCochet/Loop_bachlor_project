import React from 'react';

const ScreenLayout = ({ children, actions, className = "" }) => {
  return (
    <div className={`h-full w-full flex flex-col bg-white overflow-hidden ${className}`}>
      {/* Scrollable Content Zone */}
      <div 
        className="flex-1 overflow-y-auto no-scrollbar p-6"
        style={{ 
          paddingTop: 'env(safe-area-inset-top, 16px)',
          paddingBottom: 'calc(60px + env(safe-area-inset-bottom) + 16px)' 
        }}
      >
        {children}
      </div>
      
      {/* Fixed Actions Zone */}
      <div 
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '12px 24px',
          paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
          background: 'white',
          borderTop: '0.5px solid #E5E5E5',
          zIndex: 9999,
          boxSizing: 'border-box',
          margin: 0
        }}
      >
        {actions}
      </div>
    </div>
  );
};

export default ScreenLayout;
