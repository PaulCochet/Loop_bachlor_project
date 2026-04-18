import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * ScreenLayout
 * Wraps any Stitch-generated screen component and adds:
 *  - optional "Retour" back button (top-left)
 *  - optional "Continuer / Suivant" forward button (bottom bar)
 */
export default function ScreenLayout({
  children,
  nextRoute,
  nextLabel = 'Continuer',
  showBack = true,
  hideSplashNav = false,
}) {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', minHeight: '100%', width: '100%' }}>

      {/* ── Back button ──────────────────────────────────────────── */}
      {showBack && !hideSplashNav && (
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: '50px',
            padding: '6px 14px 6px 10px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: 600,
            color: '#0A0A0A',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            fontFamily: '"Instrument Sans", sans-serif',
          }}
        >
          {/* Chevron left */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Retour
        </button>
      )}

      {/* ── Screen content ──────────────────────────────────────── */}
      <div style={{ paddingBottom: nextRoute ? '80px' : '0' }}>
        {children}
      </div>

      {/* ── Forward button ──────────────────────────────────────── */}
      {nextRoute && (
        <div
          style={{
            position: 'sticky',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '12px 20px 20px',
            background: 'linear-gradient(to top, rgba(255,255,255,1) 60%, rgba(255,255,255,0))',
            zIndex: 9998,
          }}
        >
          <button
            onClick={() => navigate(nextRoute)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              width: '100%',
              height: '52px',
              background: '#0D46F2',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: '"Instrument Sans", sans-serif',
              letterSpacing: '-0.01em',
              boxShadow: '0 4px 20px rgba(13,70,242,0.35)',
              transition: 'transform 0.1s, box-shadow 0.1s',
            }}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.97)'}
            onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {nextLabel}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
