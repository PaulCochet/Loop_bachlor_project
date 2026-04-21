import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import IOSOuiNonToggle from '../../components/shared/IOSOuiNonToggle';
import IOSInput from '../../components/shared/IOSInput';
import ProgressBar from '../../components/shared/ProgressBar';
import { useGlobalState } from '../../context/GlobalStateContext';

const Description = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useGlobalState();

  return (
    <div className="flex flex-col h-full bg-white relative">
      {/* Progress Bar */}
      <ProgressBar step={2} />
      
      <div className="flex-1 px-8 pt-4 pb-32 overflow-y-auto no-scrollbar">
        {/* Step Info */}
        <div className="mb-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 2 sur 3</span>
        </div>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
            Décrivez le problème
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Répondez en quelques secondes</p>
        </div>

        {/* Form Slots */}
        <div className="space-y-8">
          <IOSInput 
            label="Indiquez la marque de votre appareil"
            placeholder="Samsung, Smeg..."
            value={formData.brand}
            onChange={(e) => updateFormData('brand', e.target.value)}
          />

          <div className="space-y-6">
            <IOSOuiNonToggle 
              label="L'appareil s'allume-t-il ?"
              value={formData.isPowerOn}
              onChange={(val) => updateFormData('isPowerOn', val)}
            />

            <IOSOuiNonToggle 
              label="Y'a-t-il un code d'erreur ?"
              value={formData.hasErrorCode}
              onChange={(val) => updateFormData('hasErrorCode', val)}
            />
          </div>

          <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-tight text-[#8C8C8C] mb-2 ml-1 block">
              Indiquez le problème de votre appareil
            </label>
            <textarea 
              value={formData.problem}
              onChange={(e) => updateFormData('problem', e.target.value)}
              className="w-full bg-[#F2F2F7] border-2 border-transparent rounded-[20px] px-5 py-4 focus:border-[#0D46F2] focus:bg-white outline-none resize-none transition-all duration-200 text-[#1a1c1b] font-medium min-h-[120px]" 
              placeholder="Décrivez les symptômes ici..." 
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>

      {/* Fixed Actions */}
      <div className="absolute bottom-0 left-0 w-full p-8 pt-4 bg-gradient-to-t from-white via-white to-transparent">
        <div className="space-y-3 mb-[32px]">
          <Button onClick={() => navigate('/slot')}>Continuer</Button>
          <Button variant="ghost" onClick={() => navigate('/photo')}>Retour</Button>
        </div>
      </div>
    </div>
  );
};

export default Description;
