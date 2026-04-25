import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Button from '../../components/shared/Button';

// Fix for default marker icons
const techIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const homeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Notification = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  // Debug log to trace navigation
  const handleNavigateToIntervention = () => {
    console.log('[DEBUG] Navigating to /intervention...');
    navigate('/intervention');
  };

  return (
    <div className="relative h-[100dvh] w-full bg-black overflow-hidden select-none">
      {/* Background Image (Lock Screen Wallpaper Style) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-75 blur-[20px] scale-110"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620121692029-d088224efc74?q=80&w=1932&auto=format&fit=crop)' }}
      />
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      {/* Lock Screen UI */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between pb-12 pt-20 px-6">
        {/* Date & Time */}
        <div className="text-center">
          <p className="text-white/90 text-sm font-semibold uppercase tracking-[0.2em] mb-1">Mardi 21 Avril</p>
          <p className="text-white text-[80px] font-bold tracking-tighter leading-none">08:47</p>
        </div>

        {/* Notification Banner at bottom */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
          onClick={() => setShowPopup(true)}
          className="w-full bg-white/20 backdrop-blur-3xl border border-white/20 rounded-[30px] p-5 flex gap-4 cursor-pointer active:scale-[0.98] transition-all shadow-2xl"
        >
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D46F2] shadow-sm">
            <img src="/logo.svg" alt="Loop" className="w-8 h-auto" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[17px] font-bold text-white leading-none mb-1">Lucas arrive</p>
            <p className="text-[14px] text-white/60 font-medium">Dans environ 12 min</p>
          </div>
        </motion.div>
      </div>

      {/* Interactive Popup Overlay (STATE 2) */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleNavigateToIntervention}
            className="absolute inset-0 z-50 bg-black/60 backdrop-blur-md flex items-end justify-center pb-12 px-6"
          >
            <motion.div 
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-white rounded-[40px] overflow-hidden shadow-2xl"
            >
              <div className="h-48 w-full relative">
                <MapContainer 
                  center={[47.2181, -1.5528]} 
                  zoom={14} 
                  zoomControl={false}
                  attributionControl={false}
                  className="h-full w-full"
                >
                  <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                  <Marker position={[47.2181, -1.5528]} icon={homeIcon} />
                  <Marker position={[47.2250, -1.5600]} icon={techIcon} />
                </MapContainer>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 bg-[#F2F2F7] rounded-full overflow-hidden border border-[#E5E5E5] shadow-sm">
                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop" alt="Lucas" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="display-text tracking-tighter uppercase text-lg leading-none mb-1">Lucas M.</h4>
                      <p className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Expert Loop</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] display-text uppercase text-[#0D46F2] tracking-widest">Temps estimé</p>
                    <p className="text-xl display-text tracking-tighter uppercase leading-none">12 MIN</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center gap-2 bg-[#F2F2F7] p-5 rounded-[24px] active:scale-[0.98] transition-all">
                    <span className="material-symbols-outlined !text-3xl text-[#0D46F2]">call</span>
                    <span className="text-[9px] display-text uppercase tracking-widest">Appeler</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-2 bg-[#F2F2F7] p-5 rounded-[24px] active:scale-[0.98] transition-all">
                    <span className="material-symbols-outlined !text-3xl text-[#0D46F2]">chat_bubble</span>
                    <span className="text-[9px] display-text uppercase tracking-widest">Message</span>
                  </button>
                </div>

                <Button 
                  fullWidth={true}
                  className="mt-6"
                  onClick={handleNavigateToIntervention}
                >
                  Suivre en direct
                  <span className="material-symbols-outlined">map</span>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
