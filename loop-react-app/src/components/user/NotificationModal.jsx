import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationModal = ({ isOpen, onClose }) => {
  const notifications = [
    {
      id: 1,
      title: "Lucas arrive dans 12 min",
      time: "Il y a 2 min",
      unread: true,
      icon: "local_shipping"
    },
    {
      id: 2,
      title: "Votre intervention est terminée",
      time: "Hier",
      unread: false,
      icon: "check_circle"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-[100] backdrop-blur-sm"
          />

          {/* Bottom Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-[101] max-h-[80%] overflow-hidden flex flex-col"
          >
            {/* Handle */}
            <div className="w-full flex justify-center pt-3 pb-2">
              <div className="w-12 h-1.5 bg-[#E5E5E5] rounded-full" />
            </div>

            <header className="px-6 py-4 flex justify-between items-center border-b border-[#F2F2F7]">
              <h2 className="text-xl display-text uppercase">Notifications</h2>
              <button onClick={onClose} className="w-8 h-8 flex items-center justify-center bg-[#F2F2F7] rounded-full">
                <span className="material-symbols-outlined !text-xl text-[#8E8E93]">close</span>
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 pb-12">
              {notifications.length > 0 ? (
                notifications.map((notif) => (
                  <div key={notif.id} className="flex items-center gap-4 py-3 group">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${notif.unread ? 'bg-[#0D46F2]/10 text-[#0D46F2]' : 'bg-[#F2F2F7] text-[#8E8E93]'}`}>
                      <span className="material-symbols-outlined !text-2xl" style={{ fontVariationSettings: notif.unread ? "'FILL' 1" : "" }}>
                        {notif.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-bold ${notif.unread ? 'text-[#0A0A0A]' : 'text-[#8E8E93]'}`}>
                        {notif.title}
                      </p>
                      <p className="text-xs text-[#8E8E93]">{notif.time}</p>
                    </div>
                    {notif.unread && (
                      <div className="w-2.5 h-2.5 bg-[#0D46F2] rounded-full" />
                    )}
                  </div>
                ))
              ) : (
                <div className="py-20 text-center space-y-4">
                  <span className="material-symbols-outlined !text-5xl text-[#E5E5E5]">notifications_off</span>
                  <p className="text-[#8E8E93] font-medium italic">Aucune notification pour le moment</p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationModal;
