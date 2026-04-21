import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MobileFrame from './components/shared/MobileFrame';
import { GlobalStateProvider, useGlobalState } from './context/GlobalStateContext';

// Pages
// ... (imports remain the same as before, skipping for brevity but they are included in actual file)
import Splash from './pages/user/Splash';
import Onboarding from './pages/user/Onboarding';
import Signup from './pages/user/Signup';
import PrivacyPolicy from './pages/user/PrivacyPolicy';
import Dashboard from './pages/user/Dashboard';
import Photo from './pages/user/Photo';
import Description from './pages/user/Description';
import TimeSlot from './pages/user/TimeSlot';
import Recap from './pages/user/Recap';
import Notification from './pages/user/Notification';
import Tracking from './pages/user/Tracking';
import Intervention from './pages/user/Intervention';
import InterventionSummary from './pages/user/InterventionSummary';
import Payment from './pages/user/Payment';
import Success from './pages/user/Success';
import Login from './pages/user/Login';
import QRPage from './pages/user/QRPage';

// Technician Pages
import TechnicianLogin from './pages/technician/Login';
import TechnicianDashboard from './pages/technician/Dashboard';
import TechnicianMission from './pages/technician/Mission';
import TechnicianScan from './pages/technician/Scan';
import TechnicianDiagnostic from './pages/technician/Diagnostic';
import TechnicianVerdict from './pages/technician/Verdict';
import TechnicianMessages from './pages/technician/Messages';
import ErrorBoundary from './components/shared/ErrorBoundary';

const PageWrapper = ({ children }) => {
  return (
    <div className="h-full w-full">
      {children}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStateProvider>
          <MobileFrame>
            <PageWrapper>
              <Routes>
                {/* User Flow */}
                <Route path="/" element={<Splash />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="/description" element={<Description />} />
                <Route path="/slot" element={<TimeSlot />} />
                <Route path="/recap" element={<Recap />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/tracking" element={<Tracking />} />
                <Route 
                  path="/intervention" 
                  element={
                    <ErrorBoundary fallback={<Navigate to="/dashboard" replace />}>
                      <Intervention />
                    </ErrorBoundary>
                  } 
                />
                <Route path="/intervention-summary" element={<InterventionSummary />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<Success />} />
                
                {/* Legacy Redirects */}
                <Route path="/verdict" element={<Navigate to="/intervention-summary" replace />} />
                <Route path="/dashboard-updated" element={<Navigate to="/dashboard" replace />} />
                
                <Route path="/qr" element={<QRPage />} />

                {/* Technician Flow */}
                <Route path="/technician/login" element={<TechnicianLogin />} />
                <Route path="/technician/dashboard" element={<TechnicianDashboard />} />
                <Route path="/technician/mission" element={<TechnicianMission />} />
                <Route path="/technician/scan" element={<TechnicianScan />} />
                <Route path="/technician/diagnostic" element={<TechnicianDiagnostic />} />
                <Route path="/technician/verdict" element={<TechnicianVerdict />} />
                <Route path="/technician/messages" element={<TechnicianMessages />} />
                
                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </PageWrapper>
          </MobileFrame>
        </GlobalStateProvider>
      </BrowserRouter>
  );
}
