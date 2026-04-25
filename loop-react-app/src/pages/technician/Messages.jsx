import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';
import Button from '../../components/shared/Button';

const TechnicianMessages = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('conversations');
  const [requests, setRequests] = useState([
    { id: 1, name: 'Lave-linge Samsung', address: '12 rue des Lilas, Nantes', slot: 'Demain 9h00 — 11h00', distance: '1,2 km', status: 'pending' }
  ]);

  const handleAccept = (id) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: 'accepted' } : r));
  };

  const handleRefuse = (id) => {
    setRequests(requests.filter(r => r.id !== id));
  };

  const tabs = [
    { id: 'conversations', label: 'Conversations' },
    { id: 'demandes', label: 'Demandes' },
    { id: 'archives', label: 'Archives' }
  ];

  return (
    <div className="bg-[#f9f9f7] min-h-screen pb-40">
      {/* Top Header (Clean) */}
      <header 
        className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 px-6 flex items-center justify-between"
        style={{ height: 'calc(env(safe-area-inset-top) + 64px)', paddingTop: 'env(safe-area-inset-top)' }}
      >
        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/technician/dashboard')}
            className="p-1 rounded-full active:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[#0D46F2] display-text">chevron_left</span>
          </motion.button>
          <h1 className="text-lg display-text uppercase tracking-wider">Messages</h1>
        </div>
      </header>

      {/* Tabs Navigation (Fixed below header) */}
      <div 
        className="fixed w-full z-40 bg-white border-b border-gray-100 px-6"
        style={{ top: 'calc(env(safe-area-inset-top) + 64px)' }}
      >
        <div className="flex justify-between max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative py-4 flex-1 text-center"
            >
              <span className={`text-[11px] display-text uppercase tracking-widest transition-all ${
                activeTab === tab.id ? 'text-[#0D46F2]' : 'text-[#8C8C8C]'
              }`}>
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0D46F2]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <main 
        className="px-6 max-w-2xl mx-auto"
        style={{ paddingTop: 'calc(env(safe-area-inset-top) + 160px)' }}
      >
        <AnimatePresence mode="wait">
          {activeTab === 'conversations' && (
            <motion.div 
              key="conv"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {[
                { name: 'Sophie M.', appliance: 'Lave-linge Samsung', msg: 'Merci beaucoup !', time: '9h08', unread: true },
                { name: 'Marie L.', appliance: 'Machine à laver', msg: 'Intervention terminée', time: 'Hier', unread: false }
              ].map((c, i) => (
                <motion.div 
                  key={i}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white p-4 rounded-[20px] border border-gray-100 flex gap-4 items-center shadow-sm"
                >
                  <div className="w-11 h-11 bg-[#F2F2F7] rounded-[10px] flex-shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#8C8C8C]">local_laundry_service</span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm tracking-tight text-[#1a1c1b]">{c.appliance}</h3>
                      <span className="text-[9px] font-bold text-[#8C8C8C] uppercase">{c.time}</span>
                    </div>
                    <div className="flex justify-between items-center mt-0.5">
                      <p className="text-xs text-[#8C8C8C] font-medium truncate italic">{c.name} — "{c.msg}"</p>
                      {c.unread && <span className="w-2 h-2 bg-[#0D46F2] rounded-full"></span>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'demandes' && (
            <motion.div 
              key="dem"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              <AnimatePresence>
                {requests.map((r) => (
                  <motion.div 
                    key={r.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, x: 50 }}
                    className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-xl shadow-black/5"
                  >
                    <div className="flex gap-4">
                      <div className="w-14 h-14 bg-[#F2F2F7] rounded-[12px] flex-shrink-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#8C8C8C] !text-2xl">local_laundry_service</span>
                      </div>
                      <div className="flex-grow space-y-1">
                        <h3 className="display-text uppercase text-sm tracking-tight">{r.name}</h3>
                        <p className="text-xs font-bold text-[#8C8C8C] flex items-center gap-1">
                          <span className="material-symbols-outlined !text-[14px]">location_on</span>
                          {r.address}
                        </p>
                        <p className="text-[10px] display-text uppercase tracking-widest text-[#0D46F2] mt-2">
                          {r.slot} • {r.distance}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6">
                      {r.status === 'pending' ? (
                        <div className="flex gap-3">
                          <button 
                            onClick={() => handleAccept(r.id)}
                            className="flex-1 bg-[#0D46F2] text-white py-3 rounded-xl display-text uppercase text-[10px] tracking-widest shadow-lg shadow-[#0D46F2]/20 active:scale-95 transition-all"
                          >
                            Accepter
                          </button>
                          <button 
                            onClick={() => handleRefuse(r.id)}
                            className="flex-1 border border-[#E5E5E5] text-[#8C8C8C] py-3 rounded-xl display-text uppercase text-[10px] tracking-widest active:scale-95 transition-all"
                          >
                            Refuser
                          </button>
                        </div>
                      ) : (
                        <div className="bg-green-50 text-green-600 py-3 rounded-xl display-text uppercase text-[10px] tracking-widest text-center flex items-center justify-center gap-2">
                          <span className="material-symbols-outlined !text-sm">check_circle</span>
                          Acceptée
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === 'archives' && (
            <motion.div 
              key="arc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {[
                { name: 'Lave-linge Samsung', date: '12 Avr. 2026' },
                { name: 'Machine à laver', date: '08 Avr. 2026' }
              ].map((a, i) => (
                <div key={i} className="bg-white p-4 rounded-[16px] border border-gray-50 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#F2F2F7] rounded-[8px] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#8C8C8C] !text-xl">local_laundry_service</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-xs text-[#1a1c1b]">{a.name}</h4>
                    <p className="text-[10px] text-[#8C8C8C]">{a.date}</p>
                  </div>
                  <div className="bg-[#F2F2F7] px-3 py-1 rounded-full text-[9px] display-text uppercase tracking-tighter text-[#8C8C8C]">
                    Terminée
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <TechNavBar />
    </div>
  );
};

export default TechnicianMessages;
