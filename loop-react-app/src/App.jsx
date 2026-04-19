import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MobileFrame from './components/shared/MobileFrame';
import { IOSKeyboardProvider } from './components/shared/IOSKeyboardContext';

// Pages
import Splash from './pages/user/Splash';
import Onboarding from './pages/user/Onboarding';
import Signup from './pages/user/Signup';
import PrivacyPolicy from './pages/user/PrivacyPolicy';
import Dashboard from './pages/user/Dashboard';
import Photo from './pages/user/Photo';
import Description from './pages/user/Description';
import TimeSlot from './pages/user/TimeSlot';
import Recap from './pages/user/Recap';
import Confirmation from './pages/user/Confirmation';
import Notification from './pages/user/Notification';
import Tracking from './pages/user/Tracking';
import Intervention from './pages/user/Intervention';
import Verdict from './pages/user/Verdict';
import Payment from './pages/user/Payment';
import Certificate from './pages/user/Certificate';
import UpdatedDashboard from './pages/user/UpdatedDashboard';
import QRPage from './pages/user/QRPage';

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
