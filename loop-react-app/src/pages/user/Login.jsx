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
    <div 
      className="flex flex-col h-full bg-white px-6 pt-12 pb-8"
      style={{ paddingTop: 'calc(env(safe-area-inset-top) + 48px)' }}
    >
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl display-text tracking-tight leading-tight mb-2">
          Bon retour
        </h1>
        <p className="text-lg font-medium text-[#8C8C8C]">Connectez-vous à votre compte</p>
      </div>

      {/* Form */}
      <div className="flex-1 space-y-4">
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

      {/* Actions */}
      <div className="space-y-3">
        <Button onClick={handleLogin}>Se connecter</Button>
        <Button variant="ghost" onClick={() => navigate('/')}>Retour</Button>
      </div>
    </div>
  );
};

export default Login;
