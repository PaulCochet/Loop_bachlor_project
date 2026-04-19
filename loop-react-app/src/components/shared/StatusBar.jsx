import React, { useState, useEffect } from 'react';

const StatusBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false });
    };

    return (
        <div className="absolute top-0 left-0 w-full h-[44px] px-6 flex items-center justify-between z-[100] text-black pointer-events-none">
            <div className="text-[15px] font-bold tracking-tight">
                {formatTime(time)}
            </div>
            <div className="flex items-center gap-1.5 pt-0.5">
                <span className="material-symbols-outlined !text-[18px]">signal_cellular_4_bar</span>
                <span className="material-symbols-outlined !text-[18px]">wifi</span>
                <span className="material-symbols-outlined !text-[20px] rotate-90">battery_full</span>
            </div>
        </div>
    );
};

export default StatusBar;
