import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({
  children,
  className = "",
  blur = "backdrop-blur-lg",
  opacity = "bg-black/30", // darker glass effect
  border = "border border-white/10",
  shadow = "shadow-xl",
  ...props
}) => {
  return (
    <motion.div
      className={`${blur} ${opacity} ${border} ${shadow} rounded-2xl p-6 text-white ${className}`}
      {...props}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
