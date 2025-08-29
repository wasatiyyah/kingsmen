import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  onClick,
}) => {
  const baseClasses = 'rounded-xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white shadow-lg border border-gray-100',
    elevated: 'bg-white shadow-xl border border-gray-100',
    outlined: 'bg-white border-2 border-gray-200',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20',
  };
  
  const hoverClasses = hover ? 'hover:shadow-xl hover:-translate-y-2 cursor-pointer' : '';

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`}
      onClick={onClick}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
