import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef, ReactNode } from 'react';

const styles = cva(
  'text-center rounded-2xl px-2 py-0.5 flex justify-center items-center',
  {
    variants: {
      size: {
        sm: ['text-xs'],
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

// TODO: Add more colors
// | 'blue'
// | 'blue-gray'
// | 'blue-light'
// | 'indigo'
// | 'purple'
// | 'pink'
// | 'rose'
// | 'orange';
type BadgeColor = 'gray' | 'primary' | 'success' | 'warning' | 'error';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof styles> {
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  iconPosition?: 'leading' | 'trailing';
  color?: BadgeColor;
  content: string;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ content, size = 'sm', color = 'primary', className }, ref) => (
    <div ref={ref} className={styles({ size, color, className })}>
      {content}
    </div>
  ),
);

export default Badge;
