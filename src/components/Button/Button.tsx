import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { buttonIcon } from './ButtonIcon';

const button = cva(
  'shadow-button rounded-lg border font-semibold inline-flex justify-center items-center',
  {
    variants: {
      intent: {
        primary: [
          'bg-purple-500',
          'text-white',
          'border-transparent',
          'hover:bg-purple-600',
          'border-purple-500',
        ],
        secondary: [
          'bg-white',
          'text-gray-800',
          'border-gray-400',
          'hover:bg-gray-100',
        ],
      },
      size: {
        sm: ['text-sm', 'py-2', 'px-3.5'],
        md: ['text-sm', 'py-2.5', 'px-4'],
        lg: ['text-base', 'py-2.5', 'px-4'],
        xl: ['text-base', 'py-3', 'px-5'],
        '2xl': ['text-lg', 'py-4', 'px-7'],
      },
    },
    compoundVariants: [{ intent: 'primary', size: 'md' }],
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  label: string;
  icon?: React.ReactNode;
  iconPosition?: 'leading' | 'trailing';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      intent,
      label,
      icon,
      iconPosition = 'leading',
      ...props
    },
    ref,
  ) => (
    <button
      className={button({ intent, size, className })}
      {...props}
      ref={ref}
    >
      {icon && iconPosition === 'leading' && (
        <span className={buttonIcon({ size })}>{icon}</span>
      )}
      {label}
      {icon && iconPosition === 'trailing' && (
        <span className={buttonIcon({ size, position: iconPosition })}>
          {icon}
        </span>
      )}
    </button>
  ),
);

export default Button;
