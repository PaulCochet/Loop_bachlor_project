import React, { useState } from 'react';

// Auto-generated screen components (real Stitch HTML injected)
import Screen_db2694cd04d34806bb94057cc5ad8e79 from './components/screens/Screen_db2694cd04d34806bb94057cc5ad8e79';
import Screen_6c48501f952e4c1a832be0a092f453ac   from './components/screens/Screen_6c48501f952e4c1a832be0a092f453ac';
import Screen_bad02014b2ec432a889d4cdc4314fcd9   from './components/screens/Screen_bad02014b2ec432a889d4cdc4314fcd9';
import Screen_750da93a983c4350822864c0d5cb1fe1   from './components/screens/Screen_750da93a983c4350822864c0d5cb1fe1';
import Screen_9ac6bee79b624681bc35976d6257a33c   from './components/screens/Screen_9ac6bee79b624681bc35976d6257a33c';
import Screen_27f34b41a25f4c38a677f430eb857abb   from './components/screens/Screen_27f34b41a25f4c38a677f430eb857abb';
import Screen_1956e3d80e834b5bae348b426afdd0be   from './components/screens/Screen_1956e3d80e834b5bae348b426afdd0be';
import Screen_02559d3a30d049adbfbc3630a4ca6973   from './components/screens/Screen_02559d3a30d049adbfbc3630a4ca6973';
import Screen_47bde3dbd0a24e068fb9e378a507d680   from './components/screens/Screen_47bde3dbd0a24e068fb9e378a507d680';
import Screen_d6c3ab2ba71942699032e86450769171   from './components/screens/Screen_d6c3ab2ba71942699032e86450769171';
import Screen_70194fc16c674b41b09895cf48316395   from './components/screens/Screen_70194fc16c674b41b09895cf48316395';
import Screen_0ca8491df56049769e47274fec0eb02b   from './components/screens/Screen_0ca8491df56049769e47274fec0eb02b';
import Screen_68a07eea97aa41a7ac61e15cc1af4b37   from './components/screens/Screen_68a07eea97aa41a7ac61e15cc1af4b37';
import Screen_f5aac809be1a48fa8efc509e9e18cbd0   from './components/screens/Screen_f5aac809be1a48fa8efc509e9e18cbd0';

const SCREENS = [
  { id: 'db2694cd04d34806bb94057cc5ad8e79', title: 'Splash Screen',                 component: Screen_db2694cd04d34806bb94057cc5ad8e79 },
  { id: '6c48501f952e4c1a832be0a092f453ac', title: 'Onboarding',                    component: Screen_6c48501f952e4c1a832be0a092f453ac },
  { id: 'bad02014b2ec432a889d4cdc4314fcd9', title: 'Sign Up',                       component: Screen_bad02014b2ec432a889d4cdc4314fcd9 },
  { id: '750da93a983c4350822864c0d5cb1fe1', title: 'Home Dashboard',                component: Screen_750da93a983c4350822864c0d5cb1fe1 },
  { id: '9ac6bee79b624681bc35976d6257a33c', title: 'Décrivez le problème',          component: Screen_9ac6bee79b624681bc35976d6257a33c },
  { id: '27f34b41a25f4c38a677f430eb857abb', title: "Photo de l'appareil",           component: Screen_27f34b41a25f4c38a677f430eb857abb },
  { id: '02559d3a30d049adbfbc3630a4ca6973', title: 'Choisissez un créneau',         component: Screen_02559d3a30d049adbfbc3630a4ca6973 },
  { id: '47bde3dbd0a24e068fb9e378a507d680', title: 'Résumé & paiement',             component: Screen_47bde3dbd0a24e068fb9e378a507d680 },
  { id: 'd6c3ab2ba71942699032e86450769171', title: 'Récapitulatif',                 component: Screen_d6c3ab2ba71942699032e86450769171 },
  { id: '70194fc16c674b41b09895cf48316395', title: 'Suivi en temps réel',           component: Screen_70194fc16c674b41b09895cf48316395 },
  { id: '1956e3d80e834b5bae348b426afdd0be', title: 'Tableau de bord post-répa.',   component: Screen_1956e3d80e834b5bae348b426afdd0be },
  { id: '0ca8491df56049769e47274fec0eb02b', title: 'Notification de verrouillage', component: Screen_0ca8491df56049769e47274fec0eb02b },
  { id: '68a07eea97aa41a7ac61e15cc1af4b37', title: "Certificat d'impact",          component: Screen_68a07eea97aa41a7ac61e15cc1af4b37 },
  { id: 'f5aac809be1a48fa8efc509e9e18cbd0', title: "Politique de l'application",   component: Screen_f5aac809be1a48fa8efc509e9e18cbd0 },
];

export default function App() {
  const [activeIdx, setActiveIdx] = useState(0);
  const Active = SCREENS[activeIdx].component;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#111', fontFamily: '"Instrument Sans", sans-serif' }}>
      {/* Sidebar nav */}
      <aside style={{
        width: '220px',
        flexShrink: 0,
        background: '#1a1a1a',
        borderRight: '1px solid #2a2a2a',
        display: 'flex',
        flexDirection: 'column',
        padding: '0',
        overflowY: 'auto',
      }}>
        <div style={{ padding: '1.25rem 1rem 1rem', borderBottom: '1px solid #2a2a2a' }}>
          <div style={{ color: '#0D46F2', fontWeight: 800, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>Loop</div>
          <div style={{ color: '#555', fontSize: '0.7rem', marginTop: '2px' }}>Screen Explorer</div>
        </div>
        <nav style={{ padding: '0.5rem 0' }}>
          {SCREENS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveIdx(i)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '0.6rem 1rem',
                background: activeIdx === i ? '#0D46F2' : 'transparent',
                color: activeIdx === i ? '#fff' : '#888',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.75rem',
                fontWeight: activeIdx === i ? 700 : 400,
                transition: 'all 0.15s',
                borderLeft: activeIdx === i ? '3px solid #fff' : '3px solid transparent',
              }}
            >
              <span style={{ display: 'block', color: activeIdx === i ? 'rgba(255,255,255,0.5)' : '#444', fontSize: '0.6rem', marginBottom: '1px' }}>{i + 1}/{SCREENS.length}</span>
              {s.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile preview frame */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '2rem',
        overflowY: 'auto',
      }}>
        <div style={{
          width: '390px',
          background: '#fff',
          borderRadius: '48px',
          boxShadow: '0 40px 120px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.1)',
          overflow: 'hidden',
          flexShrink: 0,
          minHeight: '800px',
        }}>
          {/* Phone notch */}
          <div style={{ height: '12px', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '4px' }}>
            <div style={{ width: '120px', height: '4px', background: '#e0e0e0', borderRadius: '2px' }}></div>
          </div>
          <div style={{ height: '100%', overflowY: 'auto' }}>
            <Active />
          </div>
        </div>
      </main>
    </div>
  );
}
