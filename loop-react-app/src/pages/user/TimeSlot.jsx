import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import { useGlobalState } from '../../context/GlobalStateContext';

const TimeSlot = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useGlobalState();
  const [selectedDay, setSelectedDay] = useState(22); // Default to 22nd

  const days = [
    { label: 'Lun', num: 20 },
    { label: 'Mar', num: 21 },
    { label: 'Mer', num: 22 },
    { label: 'Jeu', num: 23 },
    { label: 'Ven', num: 24 },
    { label: 'Sam', num: 25 },
    { label: 'Dim', num: 26 },
  ];

  const slots = [
    { id: 'morning', time: 'Demain 9h - 11h', tech: 'Lucas M. • 1,2 km' },
    { id: 'afternoon', time: 'Demain 14h - 16h', tech: 'Sarah K. • 2,4 km' }
  ];

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Progress Bar */}
      <ProgressBar step={3} />
      
      <div className="flex-1 px-8 pt-4 pb-32 overflow-y-auto no-scrollbar">
        {/* Step Info */}
        <div className="mb-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 3 sur 3</span>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
            Prenez rendez-vous
          </h1>
          <p className="text-sm font-medium text-[#8C8C8C]">Techniciens disponibles près de chez vous</p>
        </div>

        {/* Calendar Grid */}
        <section className="bg-[#F2F2F7] p-5 rounded-[24px] mb-8">
          <div className="flex justify-between items-center mb-6 px-2">
            <h3 className="text-sm font-bold uppercase tracking-tight">Avril 2026</h3>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => {
              const isToday = day.num === 21;
              const isSelected = selectedDay === day.num;
              return (
                <button 
                  key={day.num}
                  onClick={() => setSelectedDay(day.num)}
                  className={`flex flex-col items-center justify-center py-3 rounded-xl transition-all ${
                    isSelected ? 'bg-white shadow-sm' : 'hover:bg-white/40'
                  }`}
                >
                  <span className={`text-[10px] uppercase mb-1 ${
                    isToday ? 'text-[#0D46F2] font-black' : 'text-[#8C8C8C] font-bold'
                  }`}>
                    {day.label}
                  </span>
                  <span className={`text-sm font-black ${
                    isSelected ? 'text-[#0D46F2]' : 'text-[#0A0A0A]'
                  }`}>
                    {day.num}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Slots */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] ml-1">Créneaux disponibles</h3>
          
          {slots.map((slot) => {
            const isSelected = formData.selectedSlot === slot.id;
            return (
              <div 
                key={slot.id}
                onClick={() => updateFormData('selectedSlot', slot.id)}
                className={`p-6 rounded-[24px] border-2 transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                  isSelected 
                    ? 'border-[#0D46F2] bg-white shadow-xl shadow-[#0D46F2]/5' 
                    : 'border-transparent bg-[#F2F2F7] opacity-70'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className={`text-lg font-black italic ${isSelected ? 'text-[#0D46F2]' : 'text-[#0A0A0A]'}`}>{slot.time}</p>
                    <p className="text-xs text-[#8C8C8C] font-medium">{slot.tech}</p>
                  </div>
                  <span 
                    className={`material-symbols-outlined transition-all duration-300 ${isSelected ? 'text-[#0D46F2]' : 'text-[#8C8C8C]'}`}
                    style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* Fixed Actions */}
      <div className="absolute bottom-0 left-0 w-full p-8 pt-4 bg-gradient-to-t from-white via-white to-transparent">
        <div className="space-y-3 mb-[32px]">
          <Button onClick={() => navigate('/recap')}>Continuer</Button>
          <Button variant="ghost" onClick={() => navigate('/description')}>Retour</Button>
        </div>
      </div>
    </div>
  );
};

export default TimeSlot;
