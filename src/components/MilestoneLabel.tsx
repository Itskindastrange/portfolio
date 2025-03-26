'use client';

import { motion } from 'framer-motion';

interface MilestoneLabelProps {
  label: string;
  position: { x: number; y: number };
  isVisible: boolean;
}

export default function MilestoneLabel({ label, position, isVisible }: MilestoneLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.2 }}
      className="absolute bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -100%)',
      }}
    >
      {label}
    </motion.div>
  );
} 