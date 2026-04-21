import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import IOSBottomSheet from '../../components/shared/IOSBottomSheet';
import { useGlobalState } from '../../context/GlobalStateContext';
import { motion } from 'framer-motion';

const Payment = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useGlobalState();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const paymentOptions = [
    { id: 'visa', label: '•••• 4242', type: 'Credit Card', icon: 'credit_card' },
    { id: 'mastercard', label: '•••• 1234', type: 'Credit Card', icon: 'credit_card' },
    { id: 'applepay', label: 'Apple Pay', type: 'Digital Wallet', icon: 'account_balance_wallet' }
  ];

  const handleSelectPayment = (option) => {
    updateFormData('paymentMethod', option);
    setIsSheetOpen(false);
  };

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-12 pb-8">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2 uppercase">
          Paiement final
        </h1>
        <p className="text-[#0D46F2] font-black uppercase text-[10px] tracking-[0.2em]">Intervention terminée • Lucas M.</p>
      </div>

      {/* Invoice */}
      <div className="flex-1 space-y-8 overflow-y-auto no-scrollbar pr-1">
        <section className="bg-[#F2F2F7] p-8 rounded-[32px] space-y-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#8C8C8C] font-black uppercase tracking-widest text-[10px]">Intervention</span>
            <span className="font-bold text-[#1a1c1b]">Lave-linge Samsung</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#8C8C8C] font-black uppercase tracking-widest text-[10px]">Déplacement & MO</span>
            <span className="font-bold text-[#0D46F2]">Inclus</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#8C8C8C] font-black uppercase tracking-widest text-[10px]">Supplément pièces</span>
            <span className="font-bold text-[#1a1c1b]">10€</span>
          </div>
          <div className="pt-6 border-t border-[#E5E5E5] flex justify-between items-center">
            <span className="font-black italic uppercase text-xl">Total</span>
            <span className="font-black italic tracking-tighter text-3xl">10€</span>
          </div>
        </section>

        {/* Payment Method */}
        <section className="space-y-4">
          <div className="flex justify-between items-end px-1">
            <h2 className="text-[10px] font-black uppercase tracking-widest text-[#8C8C8C]">Moyen de paiement</h2>
            <button 
              onClick={() => setIsSheetOpen(true)}
              className="text-[10px] font-black uppercase tracking-widest text-[#0D46F2] hover:opacity-70"
            >
              Modifier
            </button>
          </div>
          
          <motion.div 
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsSheetOpen(true)}
            className="flex items-center gap-4 bg-[#F2F2F7] p-5 rounded-[20px] cursor-pointer border-2 border-transparent active:border-[#0D46F2]/30 transition-all"
          >
            <div className="w-12 h-8 bg-white flex items-center justify-center rounded-lg shadow-sm border border-[#E5E5E5]">
              <span className="material-symbols-outlined text-[#0D46F2]" style={{ fontVariationSettings: "'FILL' 1" }}>
                {formData.paymentMethod.icon || 'credit_card'}
              </span>
            </div>
            <div className="flex-grow">
              <p className="font-black italic text-base">{formData.paymentMethod.label}</p>
              <p className="text-[9px] text-[#8C8C8C] uppercase font-black tracking-widest">{formData.paymentMethod.type}</p>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/dashboard-updated')}>Valider le paiement — 10€</Button>
      </div>

      {/* Payment Selection Sheet */}
      <IOSBottomSheet 
        isOpen={isSheetOpen} 
        onClose={() => setIsSheetOpen(false)}
        title="Choisir un paiement"
      >
        {paymentOptions.map((option) => (
          <motion.button
            key={option.id}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelectPayment(option)}
            className={`w-full flex items-center gap-4 p-5 rounded-[20px] transition-all ${
              formData.paymentMethod.id === option.id 
                ? 'bg-[#1a1c1b] text-white' 
                : 'bg-[#F2F2F7] text-[#1a1c1b]'
            }`}
          >
            <span className="material-symbols-outlined">{option.icon}</span>
            <div className="text-left">
              <p className="font-bold text-sm">{option.label}</p>
              <p className={`text-[9px] uppercase font-black tracking-widest ${
                formData.paymentMethod.id === option.id ? 'text-gray-400' : 'text-[#8C8C8C]'
              }`}>
                {option.type}
              </p>
            </div>
            {formData.paymentMethod.id === option.id && (
              <span className="material-symbols-outlined ml-auto text-white">check_circle</span>
            )}
          </motion.button>
        ))}
      </IOSBottomSheet>
    </div>
  );
};

export default Payment;
