import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Wrench, RefreshCw, Trash2, Download, QrCode, ArrowRight, Send } from 'lucide-react';
import Button from '../../components/shared/Button';
import ScreenLayout from '../../components/shared/ScreenLayout';
import { useGlobalState } from '../../context/GlobalStateContext';

const TechnicianRecap = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const photo = location.state?.photo;
  const { formData } = useGlobalState();
  const [showVoucher, setShowVoucher] = useState(false);

  const verdictIcons = {
    'réparable': Wrench,
    'à reprendre': RefreshCw,
    'à recycler': Trash2
  };
  const VerdictIcon = verdictIcons[formData.verdict || 'à reprendre'] || RefreshCw;

  if (showVoucher) {
    return (
      <ScreenLayout
        actions={
          <div className="space-y-3 w-full">
            <Button className="!bg-[#0D46F2] !text-white" onClick={() => navigate('/technician/dashboard')}>
              Envoyer à Marie D.
              <Send size={18} className="ml-2" />
            </Button>
            <Button variant="ghost" onClick={() => navigate('/technician/dashboard')} className="!text-[#0A0A0A]">
              Clôturer la mission
            </Button>
          </div>
        }
      >
        <div className="pt-12 pb-12 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mb-8"
          >
            <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2 italic font-bold">
              Bon d'achat généré
            </h1>
            <p className="text-sm font-medium text-[#8C8C8C]">Valable chez nos partenaires</p>
          </motion.div>

          {/* Voucher Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0D46F2] rounded-[32px] p-8 text-white shadow-2xl shadow-[#0D46F2]/30 mb-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <p className="text-[11px] display-text uppercase tracking-[0.3em] opacity-80 mb-6">Bon d'achat reconditionneur</p>
            <h2 className="text-7xl display-text tracking-tighter mb-2">50€</h2>
            <p className="text-sm font-medium opacity-80">Valable 3 mois</p>
          </motion.div>

          {/* Partner Logos */}
          <div className="space-y-6 mb-10">
            <p className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Partenaires officiels</p>
            <div className="flex justify-center gap-8 items-center opacity-40 grayscale">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                <p className="text-[9px] font-bold">Underdog Nantes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mb-2"></div>
                <p className="text-[9px] font-bold">Back Market</p>
              </div>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="bg-[#F2F2F7] rounded-[24px] p-8 border-2 border-dashed border-[#D1D1D6] flex flex-col items-center gap-3">
            <QrCode size={64} className="text-[#8C8C8C]" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C]">Scannez pour utiliser</p>
          </div>
        </div>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout
        actions={
            <div className="space-y-3 w-full">
                <Button 
                    className="!bg-[#0D46F2] !text-white"
                    onClick={() => setShowVoucher(true)}
                >
                    Générer le bon d'achat
                    <ArrowRight size={20} className="ml-2" />
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
                <div className="bg-[#F2F2F7] rounded-[24px] p-6 space-y-4">
                    <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-[#E5E5E5]">
                            {photo ? (
                            <img src={photo} alt="Appareil" className="w-full h-full object-cover" />
                            ) : (
                            <span className="material-symbols-outlined text-[#8C8C8C] text-2xl">image</span>
                            )}
                        </div>
                        <div>
                            <p className="font-bold text-[#1a1c1b]">Lave-linge Bosch Serie 4</p>
                            <p className="text-sm font-medium text-[#8C8C8C]">Marie D. — 7 rue du Calvaire</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Verdict */}
            <section className="space-y-4">
                <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Verdict</h3>
                <div className="bg-[#E8EEFF] border-2 border-[#0D46F2] rounded-[24px] p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-[#0D46F2] text-white rounded-full">
                            <VerdictIcon size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[#0D46F2]">Verdict sélectionné</p>
                            <p className="text-lg font-bold display-text uppercase text-[#0D46F2] capitalize">
                                {formData.verdict || 'À reprendre'}
                            </p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-[#0D46F2]/20">
                        <p className="text-xs font-bold text-[#0D46F2] uppercase tracking-widest mb-1">Raison</p>
                        <p className="text-sm font-medium text-[#1a1c1b]">Réparation non rentable — valeur de revente possible</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-[9px] font-bold text-[#8C8C8C] uppercase tracking-widest mb-1">Pièce identifiée</p>
                            <p className="text-xs font-bold">Joint de hublot + Pompe</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-bold text-[#8C8C8C] uppercase tracking-widest mb-1">Durée</p>
                            <p className="text-xs font-bold">18 min</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Financial Summary */}
            <section className="space-y-4">
                <h3 className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C]">Récapitulatif financier</h3>
                <div className="bg-[#F2F2F7] rounded-[24px] p-6 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Diagnostic</span>
                        <span className="font-bold text-green-600">0€ (offert)</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Estimation valeur revente</span>
                        <span className="font-bold text-[#1a1c1b]">80€</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-[#8C8C8C] display-text uppercase tracking-widest text-[9px]">Bon d'achat remis</span>
                        <span className="font-bold text-[#0D46F2]">50€</span>
                    </div>
                    <div className="pt-4 border-t border-[#E5E5E5] flex justify-between items-center">
                        <span className="display-text uppercase text-sm">Net pour l'usager</span>
                        <span className="display-text tracking-tighter text-2xl text-[#0D46F2]">+50€</span>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default TechnicianRecap;

