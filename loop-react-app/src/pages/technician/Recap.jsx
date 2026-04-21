import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';
import ProgressBar from '../../components/shared/ProgressBar';
import ScreenLayout from '../../components/shared/ScreenLayout';
import { useGlobalState } from '../../context/GlobalStateContext';

const TechnicianRecap = () => {
  const navigate = useNavigate();
  const { formData } = useGlobalState();

  const handleDownloadCertificate = () => {
    // Mock download behavior
    console.log('[DEBUG] Generating certificate...');
    alert('Le certificat d\'intervention a été généré et envoyé à l\'usager.');
  };

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button onClick={handleDownloadCertificate}>
                    Générer le certificat
                    <span className="material-symbols-outlined">download</span>
                </Button>
                <Button 
                    variant="primary" 
                    className="!bg-[#0A0A0A] !text-white"
                    onClick={() => navigate('/technician/dashboard')}
                >
                    Clôturer la mission
                    <span className="material-symbols-outlined">task_alt</span>
                </Button>
            </div>
        }
    >
      <ProgressBar step={4} totalSteps={4} />

      <div className="pt-4 pb-12">
        <div className="mb-2 w-full">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#8C8C8C]">Étape 4 sur 4</span>
        </div>

        <div className="mb-10 w-full text-center">
            <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
                <span className="material-symbols-outlined text-green-600 !text-4xl">check_circle</span>
            </motion.div>
            <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2">
                Intervention terminée
            </h1>
            <p className="text-sm font-medium text-[#8C8C8C]">La mission a été clôturée avec succès</p>
        </div>

        <div className="space-y-8">
            {/* Mission Summary Card */}
            <section className="bg-[#F2F2F7] rounded-[32px] p-8 space-y-6">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Appareil</span>
                    <span className="font-bold">Lave-linge Samsung</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Usager</span>
                    <span className="font-bold">Sophie M.</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Calcul durée</span>
                    <span className="font-bold italic text-[#0D46F2]">38 min</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Pièce remplacée</span>
                    <span className="font-bold">{formData.identifiedPart || 'Pompe de vidange'}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Verdict</span>
                    <span className="px-3 py-1 bg-white rounded-full display-text uppercase text-[10px] text-[#0D46F2]">
                        {formData.verdict || 'Réparable'}
                    </span>
                </div>
            </section>

            {/* Quick Details List */}
            <section className="space-y-4 px-2">
                <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Détails techniques</h3>
                <div className="space-y-3">
                    {Object.entries(formData.diagnosticResults || {}).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            <p className="text-xs font-medium text-[#464545]">
                                {key}: <span className="font-bold text-[#1a1c1b]">{String(value)}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianRecap;
