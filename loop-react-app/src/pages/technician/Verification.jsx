import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Wrench, RefreshCw, Trash2 } from 'lucide-react';
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
                    Valider <ArrowRight size={20} className="ml-2 inline-block" />
                </Button>
                <Button variant="ghost" onClick={() => navigate('/technician/diagnostic')}>
                    <ChevronLeft size={20} className="mr-1 inline-block" /> Retour
                </Button>
            </div>
        }
    >
      <ProgressBar step={3} totalSteps={3} label="Étape 3 sur 3" />

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

          <section className="space-y-4">
            <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C] mb-4 ml-1">Verdict final</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { id: 'réparable', label: 'Réparable', description: "L'appareil peut être remis en état sur place", Icon: Wrench },
                { id: 'à reprendre', label: 'À reprendre', description: "Valeur de revente ou reconditionnement possible", Icon: RefreshCw },
                { id: 'à recycler', label: 'À recycler', description: "Non réparable, orienter vers filière DEEE", Icon: Trash2 }
              ].map((v) => {
                const isSelected = formData.verdict === v.id;
                return (
                  <motion.button
                    key={v.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => updateFormData('verdict', v.id)}
                    className={`relative flex items-start gap-4 p-5 rounded-[20px] border-2 transition-all w-full text-left ${
                      isSelected 
                        ? 'border-[#0D46F2] bg-[#E8EEFF]' 
                        : 'border-[#E5E5E5] bg-white'
                    }`}
                  >
                    <div className={`p-3 rounded-full ${isSelected ? 'bg-[#0D46F2] text-white' : 'bg-[#F2F2F7] text-[#8C8C8C]'}`}>
                      <v.Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className={`display-text uppercase font-bold text-lg ${isSelected ? 'text-[#0D46F2]' : 'text-[#1a1c1b]'}`}>
                          {v.label}
                        </span>
                        {v.id === 'réparable' && (
                          <span className="px-2 py-0.5 bg-[#0D46F2] text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                            Recommandé
                          </span>
                        )}
                      </div>
                      <p className={`text-sm font-medium ${isSelected ? 'text-[#0D46F2]' : 'text-[#8C8C8C]'}`}>
                        {v.description}
                      </p>
                    </div>
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
