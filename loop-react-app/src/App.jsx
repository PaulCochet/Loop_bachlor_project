import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MobileFrame from './components/MobileFrame';
import { IOSKeyboardProvider } from './components/IOSKeyboardContext';

// Pages
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Signup from './pages/Signup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Dashboard from './pages/Dashboard';
import Photo from './pages/Photo';
import Description from './pages/Description';
import TimeSlot from './pages/TimeSlot';
import Recap from './pages/Recap';
import Confirmation from './pages/Confirmation';
import Notification from './pages/Notification';
import Tracking from './pages/Tracking';
import Intervention from './pages/Intervention';
import Verdict from './pages/Verdict';
import Payment from './pages/Payment';
import Certificate from './pages/Certificate';
import UpdatedDashboard from './pages/UpdatedDashboard';
import QRPage from './pages/QRPage';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, duration: 0.3 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <IOSKeyboardProvider>
      <BrowserRouter>
        <MobileFrame>
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/description" element={<Description />} />
            <Route path="/slot" element={<TimeSlot />} />
            <Route path="/recap" element={<Recap />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/intervention" element={<Intervention />} />
            <Route path="/verdict" element={<Verdict />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/dashboard-updated" element={<UpdatedDashboard />} />
            <Route path="/qr" element={<QRPage />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </PageWrapper>
      </MobileFrame>
    </BrowserRouter>
    </IOSKeyboardProvider>
  );
}
