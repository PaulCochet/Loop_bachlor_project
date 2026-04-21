import React from 'react';

const ScreenLayout = ({ children, actions, className = "" }) => {
  return (
    <div className={`h-full w-full flex flex-col bg-white overflow-hidden ${className}`}>
      {/* Scrollable Content Zone */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-6 pb-0">
        {children}
      </div>
      
      {/* Fixed Actions Zone */}
      <div className="flex-shrink-0 p-6 pt-4 pb-[34px] bg-white border-t border-[#E5E5E5] shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
        {actions}
      </div>
    </div>
  );
};

export default ScreenLayout;
