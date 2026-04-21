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
            <svg width="28" height="28" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10C27.9 10 10 27.9 10 50C10 72.1 27.9 90 50 90C72.1 90 90 72.1 90 50C90 27.9 72.1 10 50 10ZM50 80C33.4 80 20 66.6 20 50C20 33.4 33.4 20 50 20C66.6 20 80 33.4 80 50C80 66.6 66.6 80 50 80Z" />
              <path d="M70 50C70 61 61 70 50 70C39 70 30 61 30 50C30 39 39 30 50 30C61 30 70 39 70 50Z" fillOpacity="0.4" />
            </svg>
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

      {/* Interactive Popup Overlay */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="w-full bg-white rounded-[40px] overflow-hidden shadow-2xl"
            >
              {/* Map Preview */}
              <div className="h-64 w-full bg-[#F2F2F7] relative">
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
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-[#0D46F2] shadow-sm z-[1000]">
                  À 0.8 km de vous
                </div>
              </div>

              {/* Popup Content */}
              <div className="p-8">
                <div className="flex gap-5 items-center mb-8">
                  <div className="w-16 h-16 bg-[#F2F2F7] rounded-3xl overflow-hidden shadow-sm">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy8WCHJ6hx_dNYIfGoliCmdKi7fucEIoAm0R1ShodrNla_pvPG_iQIpJh3pPyVbKagMdYdBU_ZqcIYRslOESp3zKG4cIEYA2VgzLjZJ5FhOGIr8ThVCFmqQx0TTSuzcfd0TvJuPEt18_47eDy_ku-pLMsnxlVJfUVLPLppftbVhGjsW4u7yAyJFVsKnAwEK9UVnjBEZ_2g_h454YmewqZRBcZvxivPpq2TlO86w1SZNJe6Mmnq6kNTCGY0sFRefHDTVhfIOs5pbII" alt="Lucas" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black italic tracking-tighter uppercase leading-none mb-1">LUCAS M.</h2>
                    <p className="text-[10px] font-bold text-[#8C8C8C] uppercase tracking-[0.15em]">Expert agréé Loop</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => navigate('/tracking')}
                    className="w-full py-5 bg-[#0D46F2] text-white rounded-[24px] font-black italic uppercase tracking-widest flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                  >
                    <span className="material-symbols-outlined !text-xl">call</span>
                    Appeler Lucas
                  </button>
                  <button 
                    onClick={() => navigate('/technician/messages')}
                    className="w-full py-5 bg-[#F2F2F7] text-[#0A0A0A] rounded-[24px] font-black italic uppercase tracking-widest flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
                  >
                    <span className="material-symbols-outlined !text-xl">chat_bubble</span>
                    Envoyer un message
                  </button>
                  <button 
                    onClick={() => setShowPopup(false)}
                    className="w-full py-2 text-[#8C8C8C] text-[10px] font-black uppercase tracking-[0.2em] mt-2 active:opacity-50"
                  >
                    Ignorer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;
