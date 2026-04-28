import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import ScreenLayout from '../../components/shared/ScreenLayout';
import TechDiagnosticToggle from '../../components/technician/TechDiagnosticToggle';
import { useGlobalState } from '../../context/GlobalStateContext';

const TechnicianDiagnostic = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { formData, updateGlobalState, updateDiagnostic } = useGlobalState();

  const handleUpdateDiagnostic = (key, value) => {
    updateDiagnostic(key, value);
  };

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={() => navigate('/technician/verification', { state: { photo: location.state?.photo } })}>
                    Continuer
                    <ArrowRight size={20} />
                </Button>
                <Button variant="ghost" onClick={() => navigate('/technician/scan')}>
                    <ChevronLeft size={20} className="mr-1 inline-block" /> Retour
                </Button>
            </div>
        }
    >
      <ProgressBar step={2} totalSteps={3} label="Étape 2 sur 3" />

      <div className="pt-8 pb-12">

        <div className="mb-8 w-full text-left">
          <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2">
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
              options={[{ label: 'OK', value: 'OK' }, { label: 'Non', value: 'Non' }, { label: 'Non accessible', value: 'Non accessible' }]}
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
