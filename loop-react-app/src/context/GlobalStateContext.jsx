import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState('');
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for back

  // Form States
  const [formData, setFormData] = useState({
    // User Flow
    brand: '',
    problem: '',
    isPowerOn: null, // null, true, false
    hasErrorCode: null,
    selectedSlot: null,
    paymentMethod: { id: 'visa', label: '•••• 4242', type: 'Credit Card' },
    
    // Technician Flow
    techObservations: '',
    diagnosticResults: {
      abnormalNoise: null,
      electricalOk: null,
      pumpOk: null
    }
  });

  // Track navigation direction
  useEffect(() => {
    const pathHierarchy = {
      '/': 0,
      '/onboarding': 1,
      '/signup': 2,
      '/dashboard': 3,
      '/photo': 4,
      '/description': 5,
      '/slot': 6,
      '/recap': 7,
      '/confirmation': 8,
      '/notification': 9,
      '/tracking': 10,
      '/intervention': 11,
      '/verdict': 12,
      '/payment': 13,
      '/certificate': 14,
      '/technician/login': 1,
      '/technician/dashboard': 2,
      '/technician/mission': 3,
      '/technician/scan': 4,
      '/technician/diagnostic': 5,
      '/technician/verdict': 6,
      '/technician/messages': 3
    };

    const currentIdx = pathHierarchy[location.pathname] || 0;
    const prevIdx = pathHierarchy[prevPath] || 0;

    if (currentIdx > prevIdx) {
      setDirection(1);
    } else if (currentIdx < prevIdx) {
      setDirection(-1);
    }
    
    setPrevPath(location.pathname);
  }, [location.pathname]);

  const updateFormData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const updateDiagnostic = (key, value) => {
    setFormData(prev => ({
      ...prev,
      diagnosticResults: { ...prev.diagnosticResults, [key]: value }
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ 
      formData, 
      updateFormData, 
      updateDiagnostic, 
      direction 
    }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
