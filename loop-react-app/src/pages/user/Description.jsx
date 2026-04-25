import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import IOSOuiNonToggle from '../../components/shared/IOSOuiNonToggle';
import IOSInput from '../../components/shared/IOSInput';
import ProgressBar from '../../components/shared/ProgressBar';
import { useGlobalState } from '../../context/GlobalStateContext';
import ScreenLayout from '../../components/shared/ScreenLayout';

const Description = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useGlobalState();

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={() => navigate('/slot')}>Continuer</Button>
                <Button variant="ghost" onClick={() => navigate('/photo')}>Retour</Button>
            </div>
        }
    >
      <ProgressBar step={2} totalSteps={3} label="Étape 2 sur 3" />
      
      <div className="pt-8 pb-8 text-scroll">

        {/* Hero */}
        <div className="mb-6">
          <h1 className="text-4xl display-text tracking-tight leading-tight mb-2">
            Décrivez le problème
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Répondez en quelques secondes</p>
        </div>

        {/* Form Slots */}
        <div className="flex flex-col gap-8">
          <IOSInput 
            label="Marque de votre appareil"
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

          <IOSInput 
            label="Détails du problème"
            placeholder="Décrivez les symptômes ici..."
            value={formData.problem}
            onChange={(e) => updateFormData('problem', e.target.value)}
            multiline={true}
          />
        </div>
      </div>
    </ScreenLayout>
  );
};

export default Description;
