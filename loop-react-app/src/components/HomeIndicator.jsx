import React from 'react';

const HomeIndicator = () => {
    return (
        <div className="absolute bottom-0 left-0 w-full h-[34px] flex items-center justify-center z-[100] pointer-events-none">
            <div className="w-[134px] h-[5px] bg-black/20 rounded-full"></div>
        </div>
    );
};

export default HomeIndicator;
