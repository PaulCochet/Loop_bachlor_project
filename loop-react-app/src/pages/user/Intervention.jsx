import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import ScreenLayout from '../../components/shared/ScreenLayout';

const Intervention = () => {
  const navigate = useNavigate();

  return (
    <ScreenLayout
        actions={
            <Button onClick={() => navigate('/intervention-summary')}>Voir le verdict</Button>
        }
    >
      <div className="pt-4 pb-12 space-y-10">
        <header>
          <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2">Intervention</h1>
          <p className="text-sm font-medium text-[#8C8C8C]">En cours de réparation</p>
        </header>

        {/* Status Card */}
        <div className="card space-y-6">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F2F2F0] rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#0D46F2] animate-spin">settings</span>
                </div>
                <div>
                    <p className="text-lg font-bold">Remplacement de la pompe</p>
                    <p className="text-xs text-[#8C8C8C]">Installation de la pièce neuve</p>
                </div>
            </div>
            <div className="w-full h-2 bg-[#F2F2F0] rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-[#0D46F2]"></div>
            </div>
        </div>

        {/* Live Feed Mock */}
        <div className="space-y-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#8C8C8C]">Live Feed</h3>
            <div className="bg-[#F2F2F0] rounded-[16px] aspect-video flex items-center justify-center border border-[#E5E5E5] overflow-hidden">
                <span className="material-symbols-outlined text-4xl text-[#8C8C8C]">construction</span>
            </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default Intervention;
