import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef, ReactElement } from 'react';
import { ErrorCircleIcon } from '@components/Icons';

import { InputType } from './types';

const styles = cva(
  [
    'flex',
    'justify-between',
    'gap-2',
    'items-center',
    'font-normal',
    'rounded-lg',
    'border',
    'bg-white',
    'disabled:bg-gray-50',
    'shadow-input',
    'px-3.5',
    'py-2.5',
    'transition-all',
  ],
  {
    variants: {
      type: {
        default: [
          'focus-within:border-brand-300',
          'focus-within:shadow-input-focus',
          'border-gray-300',
        ],
        'leading-icon': [
          'focus-within:border-brand-300',
          'focus-within:shadow-input-focus',
          'border-gray-300',
        ],
        error: [
          'border-error-300',
          'focus-within:border-error-300',
          'focus-within:shadow-error-input-focus',
        ],
        'trailing-icon': [
          'focus-within:border-brand-300',
          'focus-within:shadow-input-focus',
          'border-gray-300',
        ],
      },
      disabled: {
        true: ['bg-gray-50', 'cursor-not-allowed'],
        false: '',
      },
    },
  },
);

const inputElementStyles = cva(
  'outline-none disabled:cursor-not-allowed disabled:bg-gray-50',
  {
    variants: {},
  },
);

const inputIcon = cva([], {
  variants: {},
});

const messageStyles = cva([''], {
  variants: {},
});

const dropdown = cva('', {
  variants: {},
});

export interface InputElementProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputElementStyles> {}

const InputElement = forwardRef<HTMLInputElement, InputElementProps>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof styles> {
  type?: InputType;
  disabled?: boolean;
  icon?: ReactElement;
  message?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'default', className, disabled, icon, message, ...props }, ref) => {
    return (
      <>
        <div className={styles({ type, disabled, className })}>
          {icon && type === 'leading-icon' && (
            <span className={inputIcon()}>{icon}</span>
          )}
          <InputElement
            className={inputElementStyles()}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {type === 'error' && (
            <span className={inputIcon()}>
              <ErrorCircleIcon />
            </span>
          )}
          {icon && type === 'trailing-icon' && (
            <span className={inputIcon()}>{icon}</span>
          )}
        </div>
        {type === 'error' && (
          <span className="mt-2 text-sm text-error-500">{message}</span>
        )}
      </>
    );
  },
);

export default Input;
