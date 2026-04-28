import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, AlertTriangle } from 'lucide-react';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import ScreenLayout from '../../components/shared/ScreenLayout';

const TechnicianScan = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  const startCamera = async () => {
    try {
      setError(false);
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setStream(mediaStream);
      setIsScanning(true);
    } catch (err) {
      console.error("Camera access denied:", err);
      setError(true);
      setIsScanning(false);
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, isScanning]);

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const base64Image = canvas.toDataURL('image/jpeg');
    setPhoto(base64Image);
    
    // Stop stream after capture
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
      setIsScanning(false);
    }
  };

  const retakePhoto = () => {
    setPhoto(null);
    startCamera();
  };

  const handleContinue = () => {
    navigate('/technician/diagnostic', { state: { photo } });
  };

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={handleContinue} disabled={!photo && !isScanning}>
                    Continuer
                    <ArrowRight size={20} />
                </Button>
                <Button variant="ghost" onClick={() => navigate('/technician/mission')}>
                    <ChevronLeft size={20} className="mr-1 inline-block" /> Retour
                </Button>
            </div>
        }
    >
      <ProgressBar step={1} totalSteps={3} />
      
      <div className="pt-4 pb-12 flex flex-col items-center">
        <div className="mb-2 w-full">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 1 sur 3</span>
        </div>

        <div className="mb-10 w-full text-left">
          <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2">
            Scanner l'appareil
          </h1>
          <p className="text-sm font-medium text-[#8C8C8C]">Scannez le QR code ou prenez une photo</p>
        </div>

        {/* Live Camera Viewfinder */}
        <div className="relative w-full aspect-square max-w-[320px] mb-10">
          <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-[#0D46F2] rounded-tl-[24px] z-20"></div>
          <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-[#0D46F2] rounded-tr-[24px] z-20"></div>
          <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-[#0D46F2] rounded-bl-[24px] z-20"></div>
          <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-[#0D46F2] rounded-br-[24px] z-20"></div>

          <div className="w-full h-full rounded-[32px] overflow-hidden shadow-2xl bg-black relative border-2 border-white/20">
            {error ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 bg-[#f9f9f7]">
                <span className="material-symbols-outlined text-4xl text-red-500 mb-4">no_photography</span>
                <p className="text-sm font-bold text-red-700 mb-4">Autorisez l'accès à la caméra dans vos réglages pour continuer</p>
                <Button variant="primary" className="!bg-red-600 !text-white !py-2" onClick={startCamera}>Réessayer</Button>
              </div>
            ) : photo ? (
              <>
                <img src={photo} alt="Captured scan" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-0 right-0 flex justify-center z-30">
                  <button onClick={retakePhoto} className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">refresh</span>
                    Reprendre
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#0D46F2] rounded-full shadow-[0_0_12px_#0D46F2]"></div>
                  </div>
                  <div className="absolute bottom-4 right-6 text-[8px] font-bold text-white/50 uppercase tracking-widest">Scanning...</div>
                </div>

                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  className="w-full h-full object-cover"
                />

                <motion.div 
                  animate={{ top: ['20%', '80%', '20%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-x-0 h-0.5 bg-[#0D46F2] shadow-[0_0_15px_2px_#0D46F2] z-10" 
                />

                <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
                  <button 
                    onClick={capturePhoto} 
                    className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full border-2 border-white shadow-lg flex items-center justify-center active:scale-95 transition-transform"
                  >
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Detection Card */}
        {photo && (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-[#f9f9f7] rounded-[24px] p-6 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl display-text tracking-tight mb-1 text-[#1a1c1b] uppercase">Samsung WW90</h2>
                <p className="text-[#8C8C8C] display-text text-[10px] uppercase tracking-widest">WW90CGC04DAE — 2022</p>
              </div>
              <div className="bg-red-50 px-3 py-1 rounded-full border border-red-100">
                <span className="text-red-600 text-[10px] display-text uppercase tracking-tighter">Code: E21</span>
              </div>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-[#0D46F2] mt-0.5" size={18} />
                <p className="text-sm font-bold leading-tight">Panne connue: pompe de vidange défaillante</p>
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </ScreenLayout>
  );
};

export default TechnicianScan;
