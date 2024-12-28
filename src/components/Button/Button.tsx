import 'tailwindcss/tailwind.css';
import React, { forwardRef, ReactElement, isValidElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { buttonIcon } from './ButtonIcon';

const button = cva(
  'shadow-button-normal rounded-lg font-semibold inline-flex justify-center items-center',
  {
    variants: {
      intent: {
        primary: [
          'bg-purple-600',
          'text-white',
          'hover:bg-purple-700',
          'focus:shadow-button-focus',
          'disabled:bg-brand-200',
          'disabled:cursor-not-allowed',
        ],
        secondary: [
          'bg-brand-50',
          'text-brand-700',
          'hover:bg-brand-100',
          'focus:shadow-button-focus',
          'disabled:bg-brand-50',
          'disabled:text-brand-300',
          'disabled:cursor-not-allowed',
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
  icon?: ReactElement;
  iconPosition?: 'leading' | 'trailing';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size,
      intent = 'primary',
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
        <span className={buttonIcon({ intent, size })}>
          {isValidElement(icon) &&
            React.cloneElement(icon, {
              className: buttonIcon({ intent, size }),
            } as any)}
        </span>
      )}
      {label}
      {icon && iconPosition === 'trailing' && (
        <span
          className={buttonIcon({
            intent,
            size,
            position: iconPosition,
          })}
        >
          {isValidElement(icon) &&
            React.cloneElement(icon, {
              className: buttonIcon({ intent, size }),
            } as any)}
        </span>
      )}
    </button>
  ),
);

export default Button;
