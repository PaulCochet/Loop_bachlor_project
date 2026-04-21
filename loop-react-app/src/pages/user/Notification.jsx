import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

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

  return (
    <div className="relative h-full w-full bg-black overflow-hidden select-none">
      {/* Background Image (Lock Screen Wallpaper Style) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1620121692029-d088224efc74?q=80&w=1932&auto=format&fit=crop)' }}
      />
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex flex-col items-center pt-20 px-4">
        {/* Time */}
        <div className="text-center mb-2">
          <p className="text-white text-[84px] font-thin tracking-tight leading-none opacity-95">09:41</p>
          <p className="text-white text-xl font-medium opacity-90 mt-2">Mardi 21 Avril</p>
        </div>

        {/* Notification Banner */}
        <motion.div 
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          onClick={() => setShowPopup(true)}
          className="mt-12 w-full max-w-sm bg-white/80 backdrop-blur-2xl rounded-[32px] p-5 flex gap-4 cursor-pointer active:scale-[0.98] transition-all shadow-2xl"
        >
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D46F2] shadow-sm">
            <img src="/logo.svg" alt="Loop" className="w-8 h-auto" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start mb-0.5">
              <h3 className="text-[13px] font-black text-[#0A0A0A] uppercase tracking-wider">LOOP</h3>
              <span className="text-[10px] text-[#8C8C8C] font-bold">Maintenant</span>
            </div>
            <p className="text-[15px] text-[#0A0A0A] leading-tight"><span className="font-black">Lucas arrive</span> • Dans <span className="font-black">12 min</span> environ</p>
          </div>
        </motion.div>
      </div>

      {/* Interactive Popup Overlay */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => navigate('/intervention')}
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
                      <h4 className="font-black italic tracking-tighter uppercase text-lg leading-none mb-1">Lucas M.</h4>
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#8C8C8C]">Expert Loop</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase text-[#0D46F2] tracking-widest">Temps estimé</p>
                    <p className="text-xl font-black italic tracking-tighter uppercase leading-none">12 MIN</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="flex flex-col items-center justify-center gap-2 bg-[#F2F2F7] p-5 rounded-[24px] active:scale-[0.98] transition-all">
                    <span className="material-symbols-outlined !text-3xl text-[#0D46F2]">call</span>
                    <span className="text-[9px] font-black uppercase tracking-widest">Appeler</span>
                  </button>
                  <button className="flex flex-col items-center justify-center gap-2 bg-[#F2F2F7] p-5 rounded-[24px] active:scale-[0.98] transition-all">
                    <span className="material-symbols-outlined !text-3xl text-[#0D46F2]">chat_bubble</span>
                    <span className="text-[9px] font-black uppercase tracking-widest">Message</span>
                  </button>
                </div>

                <Button 
                  fullWidth={true}
                  className="mt-6"
                  onClick={() => navigate('/intervention')}
                >
                  Suivre en direct
                  <span className="material-symbols-outlined">map</span>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lock Screen Bottom Icons */}
      <div className="absolute bottom-16 left-0 w-full px-12 flex justify-between items-center z-10">
        <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white">
          <span className="material-symbols-outlined !text-3xl">flashlight_on</span>
        </div>
        <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white">
          <span className="material-symbols-outlined !text-3xl">photo_camera</span>
        </div>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white/40 rounded-full z-10"></div>
    </div>
  );
};

export default Notification;
