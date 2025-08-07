import { ErrorCircleIcon } from '@components/Icons';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React, { forwardRef, ReactNode } from 'react';
import { TextAreaVariant } from './types';

const styles = cva(
  [
    'flex',
    'justify-between',
    'gap-2',
    'items-center',
    'font-normal',
    'rounded-lg',
    'border',
    'disabled:bg-gray-50',
    'shadow-input',
    'px-3.5',
    'py-2.5',
    'transition-all',
  ],
  {
    variants: {
      variant: {
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
  'outline-none disabled:cursor-not-allowed disabled:bg-gray-50 w-full',
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

export interface TextAreaElementProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof inputElementStyles> {}

const TextAreaElement = forwardRef<HTMLTextAreaElement, TextAreaElementProps>(
  (props, ref) => {
    return <textarea ref={ref} {...props} />;
  },
);

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof styles> {
  variant?: TextAreaVariant;
  disabled?: boolean;
  message?: string;
  label?: ReactNode;
  wrapperClassName?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant = 'default',
      className,
      disabled,
      message,
      label,
      wrapperClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={clsx('flex flex-col gap-y-2', wrapperClassName)}>
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className={styles({ variant, disabled, className })}>
          <TextAreaElement
            className={inputElementStyles({ className })}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {variant === 'error' && (
            <span className={inputIcon()}>
              <ErrorCircleIcon />
            </span>
          )}
        </div>
        {variant === 'error' && (
          <span className="text-sm text-error-500">{message}</span>
        )}
      </div>
    );
  },
);

export default TextArea;
