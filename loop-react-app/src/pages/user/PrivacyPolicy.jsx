import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const [agreedCGU, setAgreedCGU] = React.useState(true);
  const [agreedPrivacy, setAgreedPrivacy] = React.useState(true);

  return (
    <div className="flex flex-col h-full bg-white px-8 pt-12 pb-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl display-text tracking-tight leading-tight mb-2">
          Politique de l'application
        </h1>
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#8C8C8C]">NOS COOKIES</p>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-10 overflow-y-auto">
        <section className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight text-[#0A0A0A]">
              Conditions Générales d'Utilisation (CGU)*
            </h3>
            <div 
              onClick={() => setAgreedCGU(!agreedCGU)}
              className="relative inline-flex items-center cursor-pointer mt-1"
            >
              <div className={`w-11 h-6 rounded-full flex items-center px-[2px] transition-colors duration-200 ${agreedCGU ? 'bg-[#0D46F2] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                <div className="bg-white rounded-full h-5 w-5 shadow-sm"></div>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F2F0] p-5 rounded-[16px]">
            <p className="text-sm leading-relaxed text-[#8C8C8C]">
              En accédant à l'application Loop, vous acceptez d'être lié par les présentes conditions. Nous nous réservons le droit de modifier ces termes à tout moment. L'utilisation continue de nos services après modification constitue votre acceptation des nouveaux termes.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold tracking-tight text-[#0A0A0A]">
              Politique de confidentialité*
            </h3>
            <div 
              onClick={() => setAgreedPrivacy(!agreedPrivacy)}
              className="relative inline-flex items-center cursor-pointer mt-1"
            >
              <div className={`w-11 h-6 rounded-full flex items-center px-[2px] transition-colors duration-200 ${agreedPrivacy ? 'bg-[#0D46F2] justify-end' : 'bg-[#E5E5E5] justify-start'}`}>
                <div className="bg-white rounded-full h-5 w-5 shadow-sm"></div>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F2F0] p-5 rounded-[16px]">
            <p className="text-sm leading-relaxed text-[#8C8C8C]">
              Vos données sont précieuses. Loop collecte uniquement les informations nécessaires au bon fonctionnement de la maintenance de vos appareils. Nous ne revendons jamais vos données personnelles à des tiers.
            </p>
          </div>
        </section>
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <Button onClick={() => navigate('/dashboard')}>Suivant</Button>
        <Button variant="ghost" onClick={() => navigate('/signup')}>Retour</Button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
