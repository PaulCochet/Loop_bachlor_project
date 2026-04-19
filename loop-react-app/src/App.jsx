import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MobileFrame from './components/MobileFrame';

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

export default function App() {
  return (
    <BrowserRouter>
      <MobileFrame>
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
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileFrame>
    </BrowserRouter>
  );
}
