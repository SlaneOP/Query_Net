import React from 'react';
import { clsx } from 'clsx';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-foreground mb-1.5">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={clsx(
            'w-full px-4 py-2.5 bg-input-background border border-input rounded-lg',
            'text-foreground placeholder:text-muted-foreground',
            'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary',
            'transition-colors duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'resize-none',
            error && 'border-destructive focus:ring-destructive/20 focus:border-destructive',
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
