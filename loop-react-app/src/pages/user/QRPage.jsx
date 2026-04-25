import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRPage = () => {
  // Use the local IP discovered during research or the current host if accessed via IP
  const currentHost = window.location.hostname;
  const isIP = /^[0-9.]+$/.test(currentHost);
  const localIP = isIP ? currentHost : '10.8.4.195'; 
  const port = window.location.port || '5173';
  const url = `http://${localIP}:${port}`;

  return (
    <div 
      className="flex flex-col items-center justify-center h-full p-6 bg-white text-center"
      style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <h1 className="text-2xl display-text uppercase mb-4 tracking-tighter">Connect to iPhone</h1>
      <p className="text-sm text-[#8C8C8C] mb-8">Scan this code with your iPhone camera to open the app on your local network.</p>
      
      <div className="p-6 bg-white shadow-2xl rounded-3xl border border-[#F2F2F0] mb-8">
        <QRCodeSVG value={url} size={250} />
      </div>

      <code className="bg-[#F2F2F0] px-4 py-2 rounded-full text-xs font-bold text-[#0D46F2] mb-12">
        {url}
      </code>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center gap-4 p-4 bg-[#F2F2F0] rounded-2xl text-left">
            <span className="material-symbols-outlined text-[#0D46F2]">wifi</span>
            <p className="text-xs font-semibold leading-tight">Make sure your iPhone is on the same Wi-Fi network as this computer.</p>
        </div>
        <button 
            onClick={() => window.location.href = '/'}
            className="w-full py-4 bg-black text-white rounded-2xl font-bold uppercase tracking-widest text-xs"
        >
            Back to App
        </button>
      </div>
    </div>
  );
};

export default QRPage;
