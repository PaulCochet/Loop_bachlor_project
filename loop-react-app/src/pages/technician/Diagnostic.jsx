import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import ScreenLayout from '../../components/shared/ScreenLayout';
import TechDiagnosticToggle from '../../components/technician/TechDiagnosticToggle';
import { useGlobalState } from '../../context/GlobalStateContext';

const TechnicianDiagnostic = () => {
  const navigate = useNavigate();
  const { formData, updateGlobalState, updateDiagnostic } = useGlobalState();

  const handleUpdateDiagnostic = (key, value) => {
    updateDiagnostic(key, value);
  };

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={() => navigate('/technician/verification')}>
                    Continuer
                    <span className="material-symbols-outlined">arrow_forward</span>
                </Button>
                <Button variant="ghost" onClick={() => navigate('/technician/scan')}>
                    ‹ Retour
                </Button>
            </div>
        }
    >
      <ProgressBar step={2} totalSteps={4} />

      <div className="pt-4 pb-12">
        <div className="mb-2 w-full">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 2 sur 4</span>
        </div>

        <div className="mb-8 w-full text-left">
          <h1 className="text-4xl font-black italic tracking-tight leading-tight uppercase mb-2">
            Diagnostic
          </h1>
          <p className="text-sm font-medium text-[#8C8C8C]">Questionnaire technique approfondi</p>
        </div>

        {/* Diagnostic Questions Cards */}
        <div className="space-y-6">
          {/* Question 1 */}
          <section className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold leading-snug text-[#1a1c1b] mb-6">
              La pompe de vidange émet-elle un bruit anormal ?
            </h3>
            <TechDiagnosticToggle 
              value={formData.diagnosticResults?.abnormalNoise}
              onChange={(val) => handleUpdateDiagnostic('abnormalNoise', val)}
            />
          </section>

          {/* Question 2 */}
          <section className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold leading-snug text-[#1a1c1b] mb-6">
              L'alimentation électrique est-elle correcte ?
            </h3>
            <TechDiagnosticToggle 
              value={formData.diagnosticResults?.powerStatus}
              onChange={(val) => handleUpdateDiagnostic('powerStatus', val)}
            />
          </section>

          {/* Question 3 */}
          <section className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold leading-snug text-[#1a1c1b] mb-6">
              Y a-t-il des signes visibles de fuite ?
            </h3>
            <TechDiagnosticToggle 
              value={formData.diagnosticResults?.visibleLeak}
              onChange={(val) => handleUpdateDiagnostic('visibleLeak', val)}
            />
          </section>

          {/* Question 4 */}
          <section className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold leading-snug text-[#1a1c1b] mb-6">
              Le tambour tourne-t-il correctement ?
            </h3>
            <TechDiagnosticToggle 
              value={formData.diagnosticResults?.drumRotation}
              onChange={(val) => handleUpdateDiagnostic('drumRotation', val)}
            />
          </section>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianDiagnostic;
