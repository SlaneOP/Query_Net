import React from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-lg transition-all duration-200',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        {
          // Variants
          'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm': variant === 'primary',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80': variant === 'secondary',
          'border-2 border-primary text-primary bg-transparent hover:bg-primary/5': variant === 'outline',
          'text-foreground hover:bg-muted': variant === 'ghost',
          
          // Sizes
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-5 py-2.5': size === 'md',
          'px-6 py-3 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
