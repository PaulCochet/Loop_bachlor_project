import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import Button from '../../components/shared/Button';
import NavBar from '../../components/user/UserNavBar';

// Fix for default marker icons in Leaflet with React
const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const homeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const Tracking = () => {
  const navigate = useNavigate();
  const center = [47.2181, -1.5536];
  const techPos = [47.221, -1.556];
  const homePos = [47.215, -1.550];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Map Area */}
      <div className="flex-1 relative overflow-hidden">
        <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%' }} zoomControl={false}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />
          <Marker position={techPos} icon={blueIcon}>
            <Popup>Lucas (Technicien)</Popup>
          </Marker>
          <Marker position={homePos} icon={homeIcon}>
            <Popup>Votre Maison</Popup>
          </Marker>
        </MapContainer>
        
        {/* Status Pill */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-[rgba(0,0,0,0.1)] flex items-center gap-2 z-[1000]">
            <div className="w-2 h-2 bg-[#0D46F2] rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-tight">Lucas arrive dans 12 min</span>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="bg-white rounded-t-[32px] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] px-8 pt-4 pb-12 z-10 border-t border-[rgba(0,0,0,0.05)]">
        <div className="w-10 h-1 bg-[#F2F2F7] rounded-full mx-auto mb-6"></div>
        
        <header className="mb-6">
            <h2 className="text-3xl font-black italic tracking-tighter leading-tight uppercase">Lucas arrive</h2>
            <p className="text-sm font-medium text-[#8E8E93]">Arrivée estimée : 17:47</p>
        </header>

        {/* Technician Info */}
        <div className="flex items-center justify-between p-4 bg-[#F2F2F7] rounded-[20px] mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E5E5EA] rounded-full overflow-hidden"></div>
                <div>
                    <p className="text-sm font-bold">Lucas M.</p>
                    <p className="text-[9px] font-bold text-[#0D46F2] uppercase tracking-wider">Technicien certifié</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0D46F2] shadow-sm active:scale-95"><span className="material-symbols-outlined !text-sm">call</span></button>
                <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#000000] shadow-sm active:scale-95"><span className="material-symbols-outlined !text-sm">chat_bubble</span></button>
            </div>
        </div>

        {/* Action to progress */}
        <Button onClick={() => navigate('/intervention')}>Voir l'intervention</Button>
      </div>

      <NavBar />
    </div>
  );
};

export default Tracking;
