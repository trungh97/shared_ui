import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef, ReactNode } from 'react';
import type { BadgeColor, BadgeSize } from './types';

export const badgeStyles = cva(
  'text-center rounded-2xl flex justify-center items-center',
  {
    variants: {
      size: {
        sm: ['text-xs', 'px-2', 'py-0.5'],
        md: ['text-sm', 'px-2.5', 'py-0.5'],
        lg: ['text-sm', 'px-3', 'py-1'],
      },
      color: {
        primary: ['bg-brand-50', 'text-brand-700'],
        success: ['bg-green-50', 'text-green-700'],
        error: ['bg-error-50', 'text-error-700'],
        warning: ['bg-warning-50', 'text-warning-700'],
        gray: ['bg-gray-100', 'text-gray-700'],
      },
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeStyles> {
  size?: BadgeSize;
  icon?: ReactNode;
  iconPosition?: 'leading' | 'trailing';
  color?: BadgeColor;
  content: string;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ content, size = 'sm', color = 'primary', className }, ref) => (
    <div ref={ref} className={badgeStyles({ size, color, className })}>
      {content}
    </div>
  ),
);

export default Badge;
