import { GoogleGrayIcon, GoogleIcon } from '@components/Icons';
import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef, ReactElement } from 'react';
import { Theme } from './types';

const button = cva(
  'shadow-social-button-standard border border-gray-300 rounded-lg font-semibold inline-flex justify-center items-center gap-3 focus:shadow-social-button-focus',
  {
    variants: {
      theme: {
        brand: ['bg-white', 'text-gray-700', 'text-base', 'hover:bg-gray-50'],
        'color-with-brand': [
          'bg-white',
          'text-gray-700',
          'text-base',
          'hover:bg-gray-50',
        ],
        gray: ['bg-white', 'text-gray-700', 'text-base', 'hover:bg-gray-50'],
      },
      supportingText: {
        false: ['p-2.5'],
        true: ['px-4', 'py-2.5'],
      },
    },
  },
);

export interface GoogleSignInButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  theme?: Theme;
  supportingText?: boolean;
  customText?: string;
}

const icon: Record<Theme, ReactElement> = {
  brand: <GoogleIcon />,
  'color-with-brand': <GoogleIcon />,
  gray: <GoogleGrayIcon />,
};

const GoogleSignInButton = forwardRef<
  HTMLButtonElement,
  GoogleSignInButtonProps
>(
  (
    { className, theme = 'brand', supportingText = true, customText, ...props },
    ref,
  ) => {
    return (
      <button
        className={button({ theme, supportingText, className })}
        {...props}
        ref={ref}
      >
        {icon[theme]}
        {supportingText && <span>{customText || 'Continue with Google'}</span>}
      </button>
    );
  },
);

export default GoogleSignInButton;
