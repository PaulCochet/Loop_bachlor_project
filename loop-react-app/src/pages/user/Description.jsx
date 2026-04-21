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
      
      <div className="flex-1 px-6 pt-4 pb-32 overflow-y-auto no-scrollbar">
        {/* Step Info */}
        <div className="mb-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 2 sur 3</span>
        </div>

        {/* Hero */}
        <div className="mb-6">
          <h1 className="text-4xl font-black italic tracking-tight leading-tight mb-2">
            Décrivez le problème
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Répondez en quelques secondes</p>
        </div>

        {/* Form Slots */}
        <div className="flex flex-col gap-6">
          <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-tight text-[#8C8C8C] ml-1 block">
              Marque de votre appareil
            </label>
            <div className="bg-[#F2F2F7] p-4 rounded-[24px]">
              <IOSInput 
                placeholder="Samsung, Smeg..."
                value={formData.brand}
                onChange={(e) => updateFormData('brand', e.target.value)}
                className="px-0 mb-0" 
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-tight text-[#8C8C8C] ml-1 block">
              L'appareil s'allume-t-il ?
            </label>
            <div className="bg-[#F2F2F7] p-4 rounded-[24px]">
              <IOSOuiNonToggle 
                value={formData.isPowerOn}
                onChange={(val) => updateFormData('isPowerOn', val)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-tight text-[#8C8C8C] ml-1 block">
              Y'a-t-il un code d'erreur ?
            </label>
            <div className="bg-[#F2F2F7] p-4 rounded-[24px]">
              <IOSOuiNonToggle 
                value={formData.hasErrorCode}
                onChange={(val) => updateFormData('hasErrorCode', val)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[11px] font-bold uppercase tracking-tight text-[#8C8C8C] block ml-1">
              Détails du problème
            </label>
            <div className="bg-[#F2F2F7] p-4 rounded-[24px]">
              <textarea 
                value={formData.problem}
                onChange={(e) => updateFormData('problem', e.target.value)}
                className="w-full bg-white border-2 border-transparent rounded-[16px] px-4 py-4 focus:border-[#0D46F2] outline-none resize-none transition-all duration-200 text-[#1a1c1b] font-medium min-h-[100px] text-[15px]" 
                placeholder="Décrivez les symptômes ici..." 
              ></textarea>
            </div>
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
