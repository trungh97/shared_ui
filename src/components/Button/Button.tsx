import React, { forwardRef, ReactElement, isValidElement } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { buttonIcon } from './ButtonIcon';
import { ButtonSize } from './types';

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
      iconOnly: {
        true: [],
        false: [],
      },
      size: {
        sm: ['text-sm', 'py-2', 'px-3.5'],
        md: ['text-sm', 'py-2.5', 'px-4'],
        lg: ['text-base', 'py-2.5', 'px-4'],
        xl: ['text-base', 'py-3', 'px-5'],
        '2xl': ['text-lg', 'py-4', 'px-7'],
      },
    },
    compoundVariants: [
      { size: 'sm', iconOnly: true, className: '!p-2' },
      { size: 'md', iconOnly: true, className: '!p-2.5' },
      { size: 'lg', iconOnly: true, className: '!p-3' },
      { size: 'xl', iconOnly: true, className: '!p-3.5' },
      { size: '2xl', iconOnly: true, className: '!p-4' },
    ],
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  label?: string;
  size?: ButtonSize;
  icon:
    | {
        content: ReactElement;
        iconOnly?: boolean;
        position?: 'leading' | 'trailing';
      }
    | undefined;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, size = 'md', intent = 'primary', label, icon, ...props },
    ref,
  ) => {
    const iconPosition = icon?.position ?? 'leading';
    const iconElement = icon?.content;
    const iconOnly = icon?.iconOnly ?? false;

    return (
      <button
        className={button({ intent, size, className, iconOnly })}
        {...props}
        ref={ref}
      >
        {iconElement && iconPosition === 'leading' && (
          <span
            className={buttonIcon({
              intent,
              size,
              position: iconPosition,
              iconOnly,
            })}
          >
            {isValidElement(iconElement) &&
              React.cloneElement(iconElement, {
                className: buttonIcon({
                  intent,
                  size,
                  position: iconPosition,
                  iconOnly,
                }),
              } as any)}
          </span>
        )}
        {!iconOnly && label}
        {iconElement && iconPosition === 'trailing' && (
          <span
            className={buttonIcon({
              intent,
              size,
              position: iconPosition,
              iconOnly,
            })}
          >
            {isValidElement(iconElement) &&
              React.cloneElement(iconElement, {
                className: buttonIcon({
                  intent,
                  size,
                  position: iconPosition,
                  iconOnly,
                }),
              } as any)}
          </span>
        )}
      </button>
    );
  },
);

export default Button;
