import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';
import IOSInput from '../../components/shared/IOSInput';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="flex flex-col h-[100dvh] bg-white w-full">
      {/* Content Area */}
      <div 
        className="flex-1 overflow-y-auto p-6 pb-[140px]"
        style={{ paddingTop: 'calc(env(safe-area-inset-top, 16px) + 24px)' }}
      >
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl display-text tracking-tight leading-tight mb-2">
            Bon retour
          </h1>
          <p className="text-lg font-medium text-[#8C8C8C]">Connectez-vous à votre compte</p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <IOSInput 
            label="Email"
            placeholder="votre@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <IOSInput 
            label="Mot de passe"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {/* Footer */}
      <div 
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '12px 24px',
          paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
          background: 'white',
          boxSizing: 'border-box',
          zIndex: 9999
        }}
      >
        <div className="space-y-3">
          <Button onClick={handleLogin}>Se connecter</Button>
          <Button variant="ghost" onClick={() => navigate('/')}>Retour</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
