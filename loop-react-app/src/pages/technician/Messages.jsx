import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';
import Button from '../../components/shared/Button';

const TechnicianMessages = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f9f7] min-h-screen pb-40">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate('/technician/dashboard')}
            className="p-1 rounded-full active:bg-gray-100 transition-colors"
          >
            <span className="material-symbols-outlined text-[#0D46F2] font-black">chevron_left</span>
          </motion.button>
          <img src="/logo.svg" alt="Loop" className="h-6 w-auto" />
        </div>
        <div className="w-9 h-9 rounded-full bg-white overflow-hidden border border-gray-100 shadow-sm">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy8WCHJ6hx_dNYIfGoliCmdKi7fucEIoAm0R1ShodrNla_pvPG_iQIpJh3pPyVbKagMdYdBU_ZqcIYRslOESp3zKG4cIEYA2VgzLjZJ5FhOGIr8ThVCFmqQx0TTSuzcfd0TvJuPEt18_47eDy_ku-pLMsnxlVJfUVLPLppftbVhGjsW4u7yAyJFVsKnAwEK9UVnjBEZ_2g_h454YmewqZRBcZvxivPpq2TlO86w1SZNJe6Mmnq6kNTCGY0sFRefHDTVhfIOs5pbII"
            alt="Technician"
          />
        </div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto">
        {/* Editorial Title */}
        <div className="mb-12">
          <h1 className="text-5xl font-black italic tracking-tighter uppercase leading-tight text-[#1a1c1b]">
            Conversation
          </h1>
          <p className="text-[#8C8C8C] font-black text-[11px] uppercase tracking-[0.2em] mt-2">Dernières interactions</p>
        </div>

        {/* Active Conversations Section */}
        <section className="mb-12">
          <header className="flex items-baseline justify-between mb-8">
            <h2 className="text-[10px] font-black tracking-[0.2em] uppercase text-[#8C8C8C]">Actives</h2>
            <span className="text-[9px] font-black text-[#0D46F2] bg-[#0D46F2]/10 px-3 py-1 rounded-full uppercase italic tracking-tighter">2 Nouveaux</span>
          </header>

          <div className="space-y-4">
            {/* Conversation 1: Active/Unread */}
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-[24px] border border-gray-100 flex gap-4 shadow-xl shadow-black/5 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0D46F2]"></div>
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border-2 border-white shadow-sm font-bold">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3MXJkC7EsOmXB54F1IdC2Z1bHy0YBCcgeyIJ30rhbPMCytf9QP_ZISFFaMlN15nWSAjn5R8eTa1nITNCTZSQnmw-2BJ15oUn7nWNhqKb0AptGVvbzpyvR9dOuIOM6sZ10FKpN95_klgJCo1tEGp5BaBMLLZ8yLLdBjD0F-D-U6zbItBbwcVfpOX2VSsNZw9y0KQcuR0DBuYqkHKpYOBSFQ4i_51nOO4hCCZ9FPpooCN1MwAe8NpISLkezY7nqnFhQR9sNpZIiLZ0"
                    alt="Sophie M."
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0D46F2] border-4 border-white rounded-full"></div>
              </div>
              <div className="flex-grow min-w-0 py-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-black italic uppercase text-[#1a1c1b] tracking-tight">Sophie M.</h3>
                  <span className="text-[10px] font-bold text-[#0D46F2] uppercase italic">9h08</span>
                </div>
                <p className="text-sm text-[#464545] font-medium truncate">Bonjour, êtes-vous bien en route ?</p>
              </div>
            </motion.div>

            {/* Conversation 2 */}
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-[24px] border border-gray-100 flex gap-4 shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 border border-gray-100">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKD6jN_3A2Nn75mLcu4Ip5Ovwizjraw0z1b_vDty4DNqr1WV920vxeSR1ELQhsGWtw9--EpsqLFmlXPwxCScBMF0dnW3aLoXY3MXXX3Hi2LkNxb6pzTQK6EcQNRynb8LGTWkSbEPAiVKlf2Bqr7MoQa5OpVqi25qAuQRqNjZP4ZgBEoGKJMj_uJGaLYUszdB7e1FBzkWosOOWJnVVy-NxijNEQbTGeLPQrTKXvZ77ggqESsQ8cddPpuY27mrsxiYUTfnqXHsDpV1E"
                    alt="Marie L."
                  />
                </div>
              </div>
              <div className="flex-grow min-w-0 py-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-[#1a1c1b] tracking-tight">Marie L.</h3>
                  <span className="text-[10px] font-bold text-[#8C8C8C] uppercase">Hier</span>
                </div>
                <p className="text-sm text-[#8C8C8C] font-medium truncate">Merci beaucoup pour l'intervention !</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Archived Conversations Section */}
        <section>
          <header className="mb-6">
            <h2 className="text-[10px] font-black tracking-[0.2em] uppercase text-[#8C8C8C]">Archives</h2>
          </header>
          <div className="space-y-4 opacity-40">
            {/* Archive Row 1 */}
            <div className="bg-white p-6 rounded-[24px] border border-gray-100 flex gap-4 grayscale">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex-shrink-0"></div>
              <div className="flex-grow space-y-2 py-2">
                <div className="flex justify-between">
                  <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
                  <div className="h-2 w-8 bg-gray-200 rounded-full"></div>
                </div>
                <div className="h-2 w-40 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-28 right-6">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#1a1c1b] text-white flex items-center justify-center rounded-[24px] shadow-2xl"
        >
          <span className="material-symbols-outlined !text-[28px]">edit_square</span>
        </motion.button>
      </div>

      <TechNavBar />
    </div>
  );
};

export default TechnicianMessages;
