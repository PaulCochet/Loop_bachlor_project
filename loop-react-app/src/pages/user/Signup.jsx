import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import IOSInput from '../../components/shared/IOSInput';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '' });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-white w-full">
      {/* Content Area */}
      <div 
        className="flex-1 overflow-y-auto p-6 pb-[140px]"
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 16px) + 24px)' }}
      >
        {/* iOS Navigation Header */}
        <div className="mb-8 flex items-center -ml-2">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-[#0D46F2] font-semibold text-[17px] active:opacity-50"
          >
            <span className="material-symbols-outlined !text-[24px]">chevron_left</span>
            Retour
          </button>
        </div>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="text-4xl display-text tracking-tighter leading-tight mb-2 uppercase">
            Créer mon compte
          </h1>
          <p className="text-sm font-medium text-[#8E8E93]">Vos données restent confidentielles</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <IOSInput 
            label="Prénom" 
            placeholder="Votre prénom" 
            value={form.name} 
            onChange={handleChange('name')} 
          />
          <IOSInput 
            label="E-mail" 
            placeholder="votre@email.com" 
            type="email" 
            value={form.email} 
            onChange={handleChange('email')} 
          />
          <IOSInput 
            label="Téléphone" 
            placeholder="+33 0 00 00 00 00" 
            type="tel" 
            value={form.phone} 
            onChange={handleChange('phone')} 
          />
          <IOSInput 
            label="Adresse" 
            placeholder="Votre adresse complète" 
            value={form.address} 
            onChange={handleChange('address')} 
          />
        </div>
      </div>

      {/* Footer */}
      <div 
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '12px 24px',
          paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
          background: 'white',
          boxSizing: 'border-box',
          zIndex: 9999
        }}
      >
        <div className="space-y-3">
          <Button onClick={() => navigate('/privacy')}>Suivant</Button>
          <Button variant="ghost" onClick={() => navigate('/onboarding')}>Annuler</Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
