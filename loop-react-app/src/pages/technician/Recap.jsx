import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Wrench, RefreshCw, Trash2, Download } from 'lucide-react';
import Button from '../../components/shared/Button';
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

  const verdictIcons = {
    'réparable': Wrench,
    'à reprendre': RefreshCw,
    'à recycler': Trash2
  };
  const VerdictIcon = verdictIcons[formData.verdict] || Wrench;

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button 
                    className="!bg-[#0D46F2] !text-white"
                    onClick={handleDownloadCertificate}
                >
                    Générer le certificat
                </Button>
                <Button 
                    className="!bg-[#0A0A0A] !text-white"
                    onClick={() => navigate('/technician/dashboard')}
                >
                    Clôturer la mission
                </Button>
            </div>
        }
    >
      <div className="pt-12 pb-12">

        {/* Header */}
        <div className="mb-10 w-full text-center">
            <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 bg-[#E8EEFF] rounded-full flex items-center justify-center mx-auto mb-6"
            >
                <CheckCircle className="text-[#0D46F2]" size={40} strokeWidth={2.5} />
            </motion.div>
            <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2 italic font-bold">
                Intervention terminée
            </h1>
        </div>

        <div className="space-y-8 px-2">
            {/* Section Appareil */}
            <section className="space-y-4">
                <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Appareil</h3>
                <div className="bg-[#F2F2F7] rounded-[24px] p-6 space-y-2">
                    <p className="font-bold text-[#1a1c1b]">Lave-linge Samsung EcoBubble</p>
                    <p className="text-sm font-medium text-[#8C8C8C]">Sophie M. — 12 rue des Lilas, Nantes</p>
                </div>
            </section>

            {/* Section Verdict */}
            <section className="space-y-4">
                <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Verdict</h3>
                <div className="bg-[#E8EEFF] border-2 border-[#0D46F2] rounded-[24px] p-6 flex items-center gap-4">
                    <div className="p-3 bg-[#0D46F2] text-white rounded-full">
                        <VerdictIcon size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-[#0D46F2]">Verdict sélectionné</p>
                        <p className="text-lg font-bold display-text uppercase text-[#0D46F2] capitalize">
                            {formData.verdict || 'Réparable'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Intervention */}
            <section className="space-y-4">
                <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Intervention</h3>
                <div className="bg-[#F2F2F7] rounded-[24px] p-6 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Durée</span>
                        <span className="font-bold italic text-[#0D46F2]">38 min</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Technicien</span>
                        <span className="font-bold">Lucas M.</span>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianRecap;
