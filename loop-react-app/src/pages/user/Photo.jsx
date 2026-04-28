import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import ScreenLayout from '../../components/shared/ScreenLayout';

const Photo = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const startCamera = async () => {
    try {
      setError(false);
      const mediaStream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      setStream(mediaStream);
      setIsCameraOpen(true);
    } catch (err) {
      console.error("Camera access denied:", err);
      setError(true);
    }
  };

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream, isCameraOpen]);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [stream]);

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
      setIsCameraOpen(false);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const retakePhoto = () => {
    setPhoto(null);
    startCamera();
  };

  const handleContinue = () => {
    navigate('/description', { state: { photo } });
  };

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={handleContinue} disabled={!photo && !isCameraOpen}>Continuer</Button>
                <Button variant="ghost" onClick={() => navigate('/dashboard')}>Retour</Button>
            </div>
        }
    >
      <ProgressBar step={1} totalSteps={3} label="Étape 1 sur 3" />
      
      <div className="pt-8">

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-4xl display-text tracking-tight leading-tight mb-2">
            Prenez une photo
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Capturez le problème de votre appareil</p>
        </div>

        {/* Capture Area */}
        <div className="flex flex-col justify-center">
          {error ? (
            <div className="w-full aspect-square bg-red-50 border-2 border-dashed border-red-200 rounded-[32px] flex flex-col items-center justify-center p-6 text-center">
              <span className="material-symbols-outlined text-4xl text-red-500 mb-4">no_photography</span>
              <p className="text-sm font-bold text-red-700 mb-4">Autorisez l'accès à la caméra dans vos réglages pour continuer</p>
              <Button variant="primary" className="!bg-red-600 !text-white !py-2" onClick={startCamera}>Réessayer</Button>
            </div>
          ) : photo ? (
            <div className="w-full relative aspect-square rounded-[32px] overflow-hidden">
              <img src={photo} alt="Captured" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <button onClick={retakePhoto} className="bg-white/80 backdrop-blur-md px-6 py-2 rounded-full font-bold text-sm shadow-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">refresh</span>
                  Reprendre
                </button>
              </div>
            </div>
          ) : isCameraOpen ? (
            <div className="w-full relative aspect-square rounded-[32px] overflow-hidden bg-black">
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
                <button 
                  onClick={capturePhoto} 
                  className="w-16 h-16 bg-white rounded-full border-4 border-gray-300 shadow-lg flex items-center justify-center active:scale-95 transition-transform"
                >
                  <div className="w-12 h-12 border-2 border-black rounded-full"></div>
                </button>
              </div>
            </div>
          ) : (
            <div 
              onClick={startCamera}
              className="w-full aspect-square bg-[#F2F2F7] border-2 border-dashed border-[#E5E5E5] rounded-[32px] flex flex-col items-center justify-center cursor-pointer active:scale-[0.98] transition-all group"
            >
              <div className="bg-white p-6 rounded-full shadow-sm mb-4 group-active:scale-95 transition-transform">
                <span className="material-symbols-outlined text-4xl text-[#0A0A0A]">photo_camera</span>
              </div>
              <span className="text-sm font-bold">Ouvrir l'appareil photo</span>
            </div>
          )}
          
          {!isCameraOpen && !photo && !error && (
            <div className="mt-6 flex justify-center pb-8 relative">
              <input 
                type="file" 
                accept="image/*" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
              />
              <button className="w-full py-5 rounded-[24px] border-2 border-[#F2F2F7] text-[#0A0A0A] display-text uppercase tracking-widest text-[13px] bg-transparent active:scale-[0.98] transition-all flex items-center justify-center gap-3 pointer-events-none">
                <span className="material-symbols-outlined !text-xl">image</span>
                Choisir depuis ma galerie
              </button>
            </div>
          )}
        </div>
      </div>
    </ScreenLayout>
  );
};

export default Photo;
