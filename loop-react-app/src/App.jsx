import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScreenLayout from './components/ScreenLayout';

// ── Stitch screens (real HTML injected via dangerouslySetInnerHTML) ──
import Screen_db2694cd04d34806bb94057cc5ad8e79 from './components/screens/Screen_db2694cd04d34806bb94057cc5ad8e79'; // Splash
import Screen_6c48501f952e4c1a832be0a092f453ac   from './components/screens/Screen_6c48501f952e4c1a832be0a092f453ac'; // Onboarding
import Screen_bad02014b2ec432a889d4cdc4314fcd9   from './components/screens/Screen_bad02014b2ec432a889d4cdc4314fcd9'; // Sign up
import Screen_f5aac809be1a48fa8efc509e9e18cbd0   from './components/screens/Screen_f5aac809be1a48fa8efc509e9e18cbd0'; // Privacy
import Screen_750da93a983c4350822864c0d5cb1fe1   from './components/screens/Screen_750da93a983c4350822864c0d5cb1fe1'; // Home dashboard
import Screen_27f34b41a25f4c38a677f430eb857abb   from './components/screens/Screen_27f34b41a25f4c38a677f430eb857abb'; // Photo
import Screen_9ac6bee79b624681bc35976d6257a33c   from './components/screens/Screen_9ac6bee79b624681bc35976d6257a33c'; // Description
import Screen_02559d3a30d049adbfbc3630a4ca6973   from './components/screens/Screen_02559d3a30d049adbfbc3630a4ca6973'; // Slot
import Screen_d6c3ab2ba71942699032e86450769171   from './components/screens/Screen_d6c3ab2ba71942699032e86450769171'; // Récap
import Screen_47bde3dbd0a24e068fb9e378a507d680   from './components/screens/Screen_47bde3dbd0a24e068fb9e378a507d680'; // Payment / Confirmation
import Screen_0ca8491df56049769e47274fec0eb02b   from './components/screens/Screen_0ca8491df56049769e47274fec0eb02b'; // Notification
import Screen_70194fc16c674b41b09895cf48316395   from './components/screens/Screen_70194fc16c674b41b09895cf48316395'; // Tracking
import Screen_1956e3d80e834b5bae348b426afdd0be   from './components/screens/Screen_1956e3d80e834b5bae348b426afdd0be'; // Post-repair dashboard
import Screen_68a07eea97aa41a7ac61e15cc1af4b37   from './components/screens/Screen_68a07eea97aa41a7ac61e15cc1af4b37'; // Certificate

// ── Route map ──────────────────────────────────────────────────────
// Each entry: { path, component, label, next, nextLabel, showBack }
const FLOW = [
  { path: '/',                    Component: Screen_db2694cd04d34806bb94057cc5ad8e79, label: 'Splash',                      next: '/onboarding',       nextLabel: 'Commencer',   showBack: false },
  { path: '/onboarding',          Component: Screen_6c48501f952e4c1a832be0a092f453ac,   label: 'Onboarding',                 next: '/signup',           nextLabel: 'Créer un compte' },
  { path: '/signup',              Component: Screen_bad02014b2ec432a889d4cdc4314fcd9,   label: 'Créer un compte',            next: '/privacy',          nextLabel: 'Continuer' },
  { path: '/privacy',             Component: Screen_f5aac809be1a48fa8efc509e9e18cbd0,   label: 'Politique',                  next: '/dashboard',        nextLabel: "J'accepte" },
  { path: '/dashboard',           Component: Screen_750da93a983c4350822864c0d5cb1fe1,   label: 'Dashboard',                  next: '/photo',            nextLabel: 'Demander une réparation' },
  { path: '/photo',               Component: Screen_27f34b41a25f4c38a677f430eb857abb,   label: 'Photo (1/3)',                next: '/description',      nextLabel: 'Suivant (2/3)' },
  { path: '/description',         Component: Screen_9ac6bee79b624681bc35976d6257a33c,   label: 'Description (2/3)',          next: '/slot',             nextLabel: 'Suivant (3/3)' },
  { path: '/slot',                Component: Screen_02559d3a30d049adbfbc3630a4ca6973,   label: 'Créneau (3/3)',              next: '/recap',            nextLabel: 'Confirmer' },
  { path: '/recap',               Component: Screen_d6c3ab2ba71942699032e86450769171,   label: 'Récapitulatif',              next: '/confirmation',     nextLabel: 'Valider & payer' },
  { path: '/confirmation',        Component: Screen_47bde3dbd0a24e068fb9e378a507d680,   label: 'Paiement',                  next: '/notification',     nextLabel: 'Continuer' },
  { path: '/notification',        Component: Screen_0ca8491df56049769e47274fec0eb02b,   label: 'Notification verrou',        next: '/tracking',         nextLabel: 'Suivre ma réparation' },
  { path: '/tracking',            Component: Screen_70194fc16c674b41b09895cf48316395,   label: 'Suivi temps réel',           next: '/intervention',     nextLabel: 'Voir intervention' },
  { path: '/intervention',        Component: Screen_1956e3d80e834b5bae348b426afdd0be,   label: 'Tableau de bord post-répa.', next: '/verdict',          nextLabel: 'Voir le verdict' },
  { path: '/verdict',             Component: Screen_68a07eea97aa41a7ac61e15cc1af4b37,   label: "Certificat d'impact",        next: '/payment',          nextLabel: 'Voir le paiement' },
  { path: '/payment',             Component: Screen_47bde3dbd0a24e068fb9e378a507d680,   label: 'Paiement final',             next: '/certificate',      nextLabel: 'Valider le paiement' },
  { path: '/certificate',         Component: Screen_68a07eea97aa41a7ac61e15cc1af4b37,   label: "Certificat d'impact",        next: '/dashboard-updated',nextLabel: 'Voir mon dashboard' },
  { path: '/dashboard-updated',   Component: Screen_1956e3d80e834b5bae348b426afdd0be,   label: 'Dashboard mis à jour',       next: null,                nextLabel: null },
];

// ── Mobile shell ─────────────────────────────────────────────────
function MobileShell({ children }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 100%)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '24px 0 48px',
    }}>
      <div style={{
        width: '390px',
        minHeight: '844px',
        background: '#fff',
        borderRadius: '48px',
        overflow: 'hidden',
        boxShadow:
          '0 0 0 1px rgba(255,255,255,0.08), 0 24px 80px rgba(0,0,0,0.7), 0 8px 24px rgba(13,70,242,0.15)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Dynamic Island / notch */}
        <div style={{
          height: '10px',
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: '2px',
          flexShrink: 0,
        }}>
          <div style={{
            width: '126px',
            height: '36px',
            background: '#000',
            borderRadius: '0 0 20px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}>
            <div style={{ width: '10px', height: '10px', background: '#1a1a1a', borderRadius: '50%', border: '2px solid #333' }} />
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <MobileShell>
        <Routes>
          {FLOW.map(({ path, Component, next, nextLabel, showBack = true }) => (
            <Route
              key={path}
              path={path}
              element={
                <ScreenLayout
                  nextRoute={next}
                  nextLabel={nextLabel}
                  showBack={showBack}
                >
                  <Component />
                </ScreenLayout>
              }
            />
          ))}
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MobileShell>
    </BrowserRouter>
  );
}
