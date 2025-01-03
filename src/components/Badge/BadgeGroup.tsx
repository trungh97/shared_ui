import { cva, VariantProps } from 'class-variance-authority';
import React, { forwardRef } from 'react';
import type { BadgeColor, BadgeSize } from './types';

const smallBadgeStyles = cva(
  'text-center rounded-2xl flex justify-center items-center bg-white border',
  {
    variants: {
      size: {
        sm: ['text-xs', 'px-2', 'py-0.5'],
        md: ['text-sm', 'px-2.5', 'py-0.5'],
        lg: ['text-sm', 'px-3', 'py-1'],
      },
      color: {
        primary: ['border-brand-200', 'text-brand-700'],
        success: ['border-green-200', 'text-green-700'],
        error: ['border-error-200', 'text-error-700'],
        warning: ['border-warning-200', 'text-warning-700'],
        gray: ['border-gray-200', 'text-gray-700'],
      },
    },
  },
);

interface SmallBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof smallBadgeStyles> {
  size?: BadgeSize;
  color?: BadgeColor;
  content: string;
}

const defaultSmallBadgeContentMap: Record<BadgeColor, string> = {
  primary: 'Info',
  success: 'Success',
  error: 'Error',
  warning: 'Warning',
  gray: 'Info',
};

const SmallBadge: React.FC<SmallBadgeProps> = ({
  size = 'sm',
  color = 'primary',
  className,
  content,
  ...props
}) => {
  return (
    <div className={smallBadgeStyles({ size, color, className })} {...props}>
      {content}
    </div>
  );
};

type BadgeGroupType = 'leading' | 'trailing';

const badgeGroupStyles = cva(
  'text-center rounded-2xl inline-flex items-center gap-2',
  {
    variants: {
      type: {
        leading: ['py-1 pr-3 pl-1'],
        trailing: ['py-1 pr-1 pl-3'],
      },
      size: {
        md: ['text-xs', 'py-1 pr-3 pl-1'],
        lg: ['text-sm'],
      },
      color: {
        primary: ['bg-brand-50', 'text-brand-700'],
        success: ['bg-green-50', 'text-green-700'],
        error: ['bg-error-50', 'text-error-700'],
        warning: ['bg-warning-50', 'text-warning-700'],
        gray: ['bg-gray-100', 'text-gray-700'],
      },
    },
    compoundVariants: [
      { type: 'trailing', size: 'lg', className: 'py-1 pr-1.5 pl-3.5' },
    ],
    defaultVariants: {
      type: 'leading',
      size: 'md',
    },
  },
);

type BadgeGroupSize = 'md' | 'lg';

export interface BadgeGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeGroupStyles> {
  content: string;
  type?: BadgeGroupType;
  size?: 'md' | 'lg';
  color?: BadgeColor;
  smallBadgeContent?: string;
}

const SmallBadgeSizeMap: Record<BadgeGroupSize, BadgeSize> = {
  md: 'sm',
  lg: 'md',
};

export const BadgeGroup = forwardRef<HTMLDivElement, BadgeGroupProps>(
  (
    {
      content,
      smallBadgeContent: smallContent,
      type = 'leading',
      size = 'md',
      color = 'primary',
      className,
    },
    ref,
  ) => {
    const smallBadgeSize = SmallBadgeSizeMap[size];

    const smallBadgeContent =
      smallContent ?? defaultSmallBadgeContentMap[color];

    return (
      <div
        ref={ref}
        className={badgeGroupStyles({ type, size, color, className })}
      >
        {type === 'leading' && (
          <SmallBadge
            size={smallBadgeSize}
            color={color}
            content={smallBadgeContent}
          />
        )}
        {content}
        {type === 'trailing' && (
          <SmallBadge
            size={smallBadgeSize}
            color={color}
            content={smallBadgeContent}
          />
        )}
      </div>
    );
  },
);

export default BadgeGroup;
