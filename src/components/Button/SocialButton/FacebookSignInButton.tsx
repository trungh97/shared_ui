import {
  FacebookGrayIcon,
  FacebookIcon,
  FacebookOutlinedIcon,
} from '@components/Icons';
import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef, ReactElement } from 'react';
import type { Theme } from './types';

const button = cva(
  'shadow-social-button-standard border text-base border-gray-300 rounded-lg font-semibold inline-flex justify-center items-center gap-3 focus:shadow-social-button-focus',
  {
    variants: {
      theme: {
        brand: [
          'bg-social-facebook-standard',
          'text-white',
          'hover:bg-social-facebook-hover',
        ],
        'color-with-brand': ['bg-white', 'text-gray-700', 'hover:bg-gray-50'],
        gray: ['bg-white', 'text-gray-700', 'hover:bg-gray-50'],
      },
      supportingText: {
        false: ['p-2.5'],
        true: ['px-4', 'py-2.5'],
      },
    },
  },
);

export interface FacebookSignInButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  theme?: Theme;
  supportingText?: boolean;
}

const icon: Record<Theme, ReactElement> = {
  brand: <FacebookOutlinedIcon />,
  'color-with-brand': <FacebookIcon />,
  gray: <FacebookGrayIcon />,
};

const FacebookSignInButton = forwardRef<
  HTMLButtonElement,
  FacebookSignInButtonProps
>(({ className, theme = 'brand', supportingText, ...props }, ref) => {
  return (
    <button
      className={button({ theme, supportingText, className })}
      {...props}
      ref={ref}
    >
      {icon[theme]}
      {supportingText && <span>Sign in with Facebook</span>}
    </button>
  );
});

export default FacebookSignInButton;
