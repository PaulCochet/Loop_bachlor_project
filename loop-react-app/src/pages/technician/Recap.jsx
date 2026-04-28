import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, TaskAlt } from 'lucide-react'; // TaskAlt is not in lucide, maybe CheckCircle or Check or CheckSquare
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

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button 
                    variant="primary" 
                    className="!bg-[#0D46F2] !text-white"
                    onClick={() => navigate('/technician/dashboard')}
                >
                    Clôturer la mission
                </Button>
            </div>
        }
    >
      <div className="pt-24 pb-12">

        <div className="mb-10 w-full text-center">
            <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
                <CheckCircle className="text-green-600" size={40} strokeWidth={2.5} />
            </motion.div>
            <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2 italic font-bold">
                Intervention terminée
            </h1>
            <p className="text-sm font-medium text-[#8C8C8C] mt-4">Technicien: Lucas</p>
            <p className="text-xs font-bold text-[#1a1c1b] uppercase tracking-widest mt-1">Réf: MISS-4829X</p>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianRecap;
