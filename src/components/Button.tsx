'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  href,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-900 shadow-lg hover:shadow-xl',
    secondary: 'bg-accent-50 text-accent-700 hover:bg-accent-100 focus:ring-accent-500',
    outline: 'border-2 border-navy-200 text-navy-900 hover:border-navy-400 hover:bg-navy-50 focus:ring-navy-400',
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Component
        href={href}
        onClick={onClick}
        type={type}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}