import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import TechNavBar from '../../components/technician/TechNavBar';

const TechnicianMessages = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f9f9f7] min-h-screen pb-32">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/technician/dashboard')}
            className="p-1 rounded-full active:scale-95 duration-200"
          >
            <span className="material-symbols-outlined text-[#1a1c1b]">chevron_left</span>
          </button>
          <img src="/logo.svg" alt="Loop" className="h-6 w-auto" />
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-100 overflow-hidden">
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
          <h1 className="text-6xl font-black italic tracking-tighter uppercase leading-none text-[#1a1c1b]">
            MESSAGES
          </h1>
          <div className="h-1 w-12 bg-[#003cdd] mt-4"></div>
        </div>

        {/* Active Conversations Section */}
        <section className="mb-12">
          <header className="flex items-baseline justify-between mb-6">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C8C8C]">Conversations actives</h2>
            <span className="text-[10px] font-black text-[#003cdd] bg-[#003cdd]/10 px-2 py-0.5 rounded-full uppercase">2 NOUVEAUX</span>
          </header>

          <div className="space-y-4">
            {/* Conversation 1: Active/Unread */}
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="relative bg-white p-5 rounded-xl border-l-4 border-[#003cdd] flex gap-4 shadow-sm"
            >
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3MXJkC7EsOmXB54F1IdC2Z1bHy0YBCcgeyIJ30rhbPMCytf9QP_ZISFFaMlN15nWSAjn5R8eTa1nITNCTZSQnmw-2BJ15oUn7nWNhqKb0AptGVvbzpyvR9dOuIOM6sZ10FKpN95_klgJCo1tEGp5BaBMLLZ8yLLdBjD0F-D-U6zbItBbwcVfpOX2VSsNZw9y0KQcuR0DBuYqkHKpYOBSFQ4i_51nOO4hCCZ9FPpooCN1MwAe8NpISLkezY7nqnFhQR9sNpZIiLZ0"
                    alt="Sophie M."
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#003cdd] border-4 border-white rounded-full"></div>
              </div>
              <div className="flex-grow min-w-0 py-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-[#1a1c1b] truncate">Sophie M.</h3>
                  <span className="text-[10px] font-medium text-[#003cdd]">9h08</span>
                </div>
                <p className="text-sm text-[#464545] font-medium truncate">Bonjour, êtes-vous bien en route ?</p>
              </div>
            </motion.div>

            {/* Conversation 2 */}
            <motion.div 
              whileTap={{ scale: 0.98 }}
              className="bg-white p-5 rounded-xl border border-gray-100 flex gap-4 shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100">
                  <img 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKD6jN_3A2Nn75mLcu4Ip5Ovwizjraw0z1b_vDty4DNqr1WV920vxeSR1ELQhsGWtw9--EpsqLFmlXPwxCScBMF0dnW3aLoXY3MXXX3Hi2LkNxb6pzTQK6EcQNRynb8LGTWkSbEPAiVKlf2Bqr7MoQa5OpVqi25qAuQRqNjZP4ZgBEoGKJMj_uJGaLYUszdB7e1FBzkWosOOWJnVVy-NxijNEQbTGeLPQrTKXvZ77ggqESsQ8cddPpuY27mrsxiYUTfnqXHsDpV1E"
                    alt="Marie L."
                  />
                </div>
              </div>
              <div className="flex-grow min-w-0 py-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-[#1a1c1b] truncate">Marie L.</h3>
                  <span className="text-[10px] font-medium text-[#8C8C8C]">Hier</span>
                </div>
                <p className="text-sm text-[#464545] truncate">Merci beaucoup pour l'intervention !</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Archived Conversations Section */}
        <section>
          <header className="mb-6">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#8C8C8C]">Conversations archivées</h2>
          </header>
          <div className="space-y-4 opacity-50">
            {/* Archive Row 1 */}
            <div className="bg-gray-100 p-5 rounded-xl flex gap-4">
              <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="flex-grow space-y-3 py-1">
                <div className="flex justify-between">
                  <div className="h-3 w-24 bg-gray-200 rounded"></div>
                  <div className="h-2 w-8 bg-gray-200 rounded"></div>
                </div>
                <div className="h-3 w-40 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-28 right-6">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#1a1c1b] text-white flex items-center justify-center rounded-full shadow-lg"
        >
          <span className="material-symbols-outlined">edit_square</span>
        </motion.button>
      </div>

      <TechNavBar />
    </div>
  );
};

export default TechnicianMessages;
