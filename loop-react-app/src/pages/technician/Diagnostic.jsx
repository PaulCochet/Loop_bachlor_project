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
              Y a-t-il de l'eau visible sous la machine ?
            </h3>
            <TechDiagnosticToggle 
              value={formData.diagnosticResults?.visibleWater}
              onChange={(val) => handleUpdateDiagnostic('visibleWater', val)}
            />
          </section>

          {/* Question 2 */}
          <section className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold leading-snug text-[#1a1c1b] mb-6">
              La fuite se produit-elle pendant le cycle de lavage ou à l'arrêt ?
            </h3>
            <TechDiagnosticToggle 
              value={formData.diagnosticResults?.leakTiming}
              onChange={(val) => handleUpdateDiagnostic('leakTiming', val)}
              options={[{ label: 'Cycle', value: 'Cycle' }, { label: 'Arrêt', value: 'Arrêt' }, { label: 'Les deux', value: 'Les deux' }]}
            />
          </section>

          {/* Question 3 */}
          <section className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold leading-snug text-[#1a1c1b] mb-6">
              Le joint de hublot présente-t-il des signes d'usure ou de déchirure ?
            </h3>
            <TechDiagnosticToggle 
              value={formData.diagnosticResults?.gasketWear}
              onChange={(val) => handleUpdateDiagnostic('gasketWear', val)}
            />
          </section>

          {/* Question 4 */}
          <section className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm">
            <h3 className="text-base font-bold leading-snug text-[#1a1c1b] mb-6">
              La machine affiche-t-elle le code erreur E18 ?
            </h3>
            <TechDiagnosticToggle 
              value={formData.diagnosticResults?.errorCodeE18}
              onChange={(val) => handleUpdateDiagnostic('errorCodeE18', val)}
            />
          </section>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianDiagnostic;
