import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef, ReactElement } from 'react';
import { InputType } from './types';

const styles = cva(
  [
    'flex',
    'justify-start',
    'gap-2',
    'items-center',
    'font-normal',
    'rounded-lg',
    'border',
    'border-gray-300',
    'bg-white',
    'disabled:bg-gray-50',
    'shadow-input',
    'px-3.5',
    'py-2.5',
    'focus-within:border-brand-300',
    'focus-within:shadow-input-focus',
    'transition-all',
  ],
  {
    variants: {
      type: {
        default: [''],
        'leading-icon': [''],
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

const inputIcon = cva([''], {
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
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'default', className, disabled, icon, ...props }, ref) => {
    return (
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
      </div>
    );
  },
);

export default Input;
