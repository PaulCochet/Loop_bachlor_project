import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/shared/Button';
import ScreenLayout from '../../components/shared/ScreenLayout';
import { Star } from 'lucide-react';

const RateTechnician = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSend = () => {
    // In a real app, send data to backend
    navigate('/dashboard');
  };

  return (
    <ScreenLayout
      actions={
        <div className="space-y-3 w-full">
          <Button variant="primary" className="!bg-[#0A0A0A] !text-white" onClick={handleSend}>
            Envoyer mon avis
          </Button>
          <Button variant="ghost" onClick={() => navigate('/dashboard')}>
            Passer
          </Button>
        </div>
      }
    >
      <div className="pt-8 pb-12">
        <header className="mb-12">
          <h1 className="text-4xl display-text tracking-tight leading-tight uppercase mb-2">
            Noter votre technicien
          </h1>
          <p className="text-[#0D46F2] display-text uppercase text-[10px] tracking-[0.2em]">
            Lucas M. — Intervention terminée
          </p>
        </header>

        <div className="space-y-10">
          {/* Rating Component */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileTap={{ scale: 0.9 }}
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <Star
                  size={48}
                  fill={star <= rating ? '#0D46F2' : 'none'}
                  stroke={star <= rating ? '#0D46F2' : '#E5E5E5'}
                  strokeWidth={1.5}
                  className="transition-colors duration-200"
                />
              </motion.button>
            ))}
          </div>

          {/* Comment Field */}
          <div className="space-y-4">
            <label className="text-[10px] display-text uppercase tracking-widest text-[#8C8C8C] ml-1">
              Un commentaire ?
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Partagez votre expérience avec Lucas..."
              className="w-full h-32 p-6 rounded-[24px] bg-[#F2F2F7] border-none focus:ring-2 focus:ring-[#0D46F2]/20 resize-none text-base font-medium placeholder:text-[#8C8C8C]/50"
            />
          </div>
        </div>
      </div>
    </ScreenLayout>
  );
};

export default RateTechnician;
