import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function Card({ 
  children, 
  className,
  hover = true,
  delay = 0 
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        'bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg',
        hover && 'hover:shadow-xl transition-shadow',
        className
      )}
    >
      {children}
    </motion.div>
  );
}