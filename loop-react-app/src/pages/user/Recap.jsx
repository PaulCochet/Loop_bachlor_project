import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with React
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

import ScreenLayout from '../../components/shared/ScreenLayout';

const Recap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const photo = location.state?.photo;

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={() => navigate('/notification')}>Valider</Button>
                <Button variant="ghost" onClick={() => navigate('/slot')}>Modifier</Button>
            </div>
        }
    >
      <div className="pt-4 pb-8">
        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-4xl display-text tracking-tight leading-tight mb-2">
            Récapitulatif
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Vérifiez vos informations</p>
        </div>

        {/* Content Recap */}
        <div className="space-y-6">
          {/* Photo Preview Card */}
          <section className="bg-[#F2F2F7] p-5 rounded-[24px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-4">Votre appareil</p>
            <div className="flex gap-4 items-center">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-[#E5E5E5] group active:scale-95 transition-transform cursor-pointer">
                {photo ? (
                  <img src={photo} alt="Appareil" className="w-full h-full object-cover" />
                ) : (
                  <span className="material-symbols-outlined text-[#8C8C8C] text-3xl">image</span>
                )}
              </div>
              <div>
                <p className="font-bold text-[17px]">Lave-linge Samsung</p>
                <p className="text-xs text-[#8C8C8C]">Problème : S'arrête en cours</p>
              </div>
            </div>
          </section>

          {/* Address & Map Card */}
          <section className="bg-[#F2F2F7] p-5 rounded-[24px] overflow-hidden">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-4">Lieu d'intervention</p>
            <p className="font-bold text-[17px] mb-4 tracking-tight">4 rue Loop, Nantes</p>
            <div className="h-32 w-full rounded-[16px] overflow-hidden bg-white shadow-inner">
              <MapContainer 
                center={[47.2181, -1.5528]} 
                zoom={14} 
                zoomControl={false}
                attributionControl={false}
                dragging={false}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                <Marker position={[47.2181, -1.5528]} icon={customIcon} />
              </MapContainer>
            </div>
          </section>

          {/* Appointment Card */}
          <section className="bg-[#F2F2F7] p-5 rounded-[24px]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] mb-4">Rendez-vous</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#0D46F2] shadow-sm">
                <span className="material-symbols-outlined">event</span>
              </div>
              <div>
                <p className="font-bold text-[17px]">Demain 22 Avril</p>
                <p className="text-xs text-[#8C8C8C]">9:00 - 11:00 • Lucas M.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default Recap;
