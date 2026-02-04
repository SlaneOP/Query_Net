import React from 'react';
import { clsx } from 'clsx';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-foreground mb-1.5">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={clsx(
            'w-full px-4 py-2.5 bg-input-background border border-input rounded-lg',
            'text-foreground',
            'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary',
            'transition-colors duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            error && 'border-destructive focus:ring-destructive/20 focus:border-destructive',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="mt-1.5 text-sm text-destructive">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
