import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import ScreenLayout from '../../components/shared/ScreenLayout';
import IOSInput from '../../components/shared/IOSInput';
import TechDiagnosticToggle from '../../components/technician/TechDiagnosticToggle';
import { useGlobalState } from '../../context/GlobalStateContext';

const TechnicianVerification = () => {
  const navigate = useNavigate();
  const { formData, updateFormData, updateDiagnostic } = useGlobalState();

  const diagnosticLabels = {
    abnormalNoise: 'Bruit anormal',
    powerStatus: 'Alimentation',
    visibleLeak: 'Fuite visible',
    drumRotation: 'Rotation tambour'
  };

  const getVerdictStyle = (verdict) => {
    switch(verdict) {
      case 'réparable': return 'bg-green-500 text-white';
      case 'à reprendre': return 'bg-orange-500 text-white';
      case 'à recycler': return 'bg-red-500 text-white';
      default: return 'bg-[#F2F2F7] text-[#1a1c1b]';
    }
  };

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={() => navigate('/technician/recap')}>
                    Valider →
                </Button>
                <Button variant="ghost" onClick={() => navigate('/technician/diagnostic')}>
                    ‹ Retour
                </Button>
            </div>
        }
    >
      <ProgressBar step={3} totalSteps={4} label="Étape 3 sur 4" />

      <div className="pt-8 pb-12">

        <div className="mb-8 w-full text-left">
          <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2">
            Vérification
          </h1>
          <p className="text-sm font-medium text-[#8C8C8C]">Confirmez le diagnostic final</p>
        </div>

        <div className="space-y-10">
        {/* Summary of Questionnaire */}
        <section>
          <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C] mb-6 ml-1">Confirmation diagnostic</h3>
          <div className="space-y-6">
            {[
                { key: 'abnormalNoise', label: 'La pompe de vidange émet-elle un bruit anormal ?' },
                { key: 'powerStatus', label: 'L\'alimentation électrique est-elle correcte ?' },
                { key: 'visibleLeak', label: 'Y a-t-il des signes visibles de fuite ?' },
                { key: 'drumRotation', label: 'Le tambour tourne-t-il correctement ?' }
            ].map((q) => (
                <div key={q.key} className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
                    <h3 className="text-sm font-bold leading-snug text-[#1a1c1b] mb-4">{q.label}</h3>
                    <TechDiagnosticToggle 
                        value={formData.diagnosticResults?.[q.key]}
                        onChange={(val) => updateDiagnostic(q.key, val)}
                    />
                </div>
            ))}
          </div>
        </section>

          {/* Part Identification */}
          <section className="space-y-6">
            <div className="w-full">
              <label className="block text-[10px] display-text uppercase tracking-widest text-[#8C8C8C] mb-3 ml-1">Pièce(s) identifiée(s)</label>
              <IOSInput 
                placeholder="Ex: Pompe de vidange" 
                value={formData.identifiedPart || ''}
                onChange={(e) => updateFormData('identifiedPart', e.target.value)}
              />
            </div>

            <div className="w-full">
              <label className="block text-[10px] display-text uppercase tracking-widest text-[#8C8C8C] mb-3 ml-1">Observations</label>
              <IOSInput 
                placeholder="Précisez les détails de l'intervention..."
                value={formData.techObservations || ''}
                onChange={(e) => updateFormData('techObservations', e.target.value)}
                multiline={true}
                rows={4}
              />
            </div>
          </section>

          {/* Verdict Selection */}
          <section className="space-y-4">
            <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C] mb-4 ml-1">Verdict final</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: 'réparable', label: 'Réparable', icon: 'check_circle' },
                { id: 'à reprendre', label: 'À reprendre', icon: 'history' },
                { id: 'à recycler', label: 'À recycler', icon: 'recycling' }
              ].map((v) => {
                const isSelected = formData.verdict === v.id;
                return (
                  <motion.button
                    key={v.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => updateFormData('verdict', v.id)}
                    className={`flex items-center justify-between p-5 rounded-[20px] border-2 transition-all ${
                      isSelected 
                        ? 'border-[#0D46F2] bg-[#f0f4ff]' 
                        : 'border-transparent bg-[#F2F2F7]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`material-symbols-outlined ${isSelected ? 'text-[#0D46F2]' : 'text-[#8C8C8C]'}`}>
                        {v.icon}
                      </span>
                      <span className={`display-text uppercase text-sm ${isSelected ? 'text-[#0D46F2]' : 'text-[#1a1c1b]'}`}>
                        {v.label}
                      </span>
                    </div>
                    {isSelected && (
                      <span className="material-symbols-outlined text-[#0D46F2]">check_circle</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianVerification;
