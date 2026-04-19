import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';
import { useGlobalState } from '../../context/GlobalStateContext';

const TimeSlot = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useGlobalState();

  const slots = [
    { id: 'morning', time: 'Demain 9h - 11h', tech: 'Lucas M. • 1,2 km' },
    { id: 'afternoon', time: 'Demain 14h - 16h', tech: 'Sarah K. • 2,4 km' }
  ];

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-12 pb-8">
      {/* Header */}
      <div className="mb-2">
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 3 sur 3</span>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
          Choisissez un créneau
        </h1>
        <p className="text-sm font-medium text-[#8C8C8C]">Techniciens disponibles près de chez vous</p>
      </div>

      {/* Calendar Mock */}
      <div className="flex-1 space-y-10 overflow-y-auto pr-2">
        <section className="bg-[#F2F2F7] p-6 rounded-[24px]">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-tight">Avril 2026</h3>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-y-4 text-center">
            {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(day => (
              <div key={day} className="text-[10px] font-bold text-[#8C8C8C]">{day}</div>
            ))}
            {[...Array(7)].map((_, i) => (
              <div key={i} className={`py-2 text-sm font-medium ${i === 3 ? 'bg-[#0D46F2] text-white rounded-full' : ''}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* Slots */}
        <section className="space-y-4">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C] ml-1">Créneaux disponibles</h3>
          
          {slots.map((slot) => {
            const isSelected = formData.selectedSlot === slot.id;
            return (
              <motion.div 
                key={slot.id}
                whileTap={{ scale: 0.98 }}
                onClick={() => updateFormData('selectedSlot', slot.id)}
                className={`p-6 rounded-[24px] border-2 transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'border-[#0D46F2] bg-white shadow-xl shadow-[#0D46F2]/5' 
                    : 'border-transparent bg-[#F2F2F7] opacity-70'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-black italic">{slot.time}</p>
                    <p className="text-xs text-[#8C8C8C] font-medium">{slot.tech}</p>
                  </div>
                  <span 
                    className={`material-symbols-outlined transition-all duration-300 ${isSelected ? 'text-[#0D46F2]' : 'text-[#8C8C8C]'}`}
                    style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}
                  >
                    {isSelected ? 'check_circle' : 'radio_button_unchecked'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </section>
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/recap')}>Continuer</Button>
        <Button variant="ghost" onClick={() => navigate('/description')}>Retour</Button>
      </div>
    </div>
  );
};

export default TimeSlot;
