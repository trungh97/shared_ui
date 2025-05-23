import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

const titleSkeleton = cva('bg-gray-200', {
  variants: {
    active: {
      true: 'animate-pulse',
      false: '',
    },
    round: {
      true: 'rounded-md',
      false: '',
    },
  },
});

export interface TitleSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof titleSkeleton> {
  width?: number | string; // Width of the title in pixels
  active?: boolean; // Whether the skeleton has an animation effect
  round?: boolean; // Whether the skeleton has rounded corners
  className?: string; // Additional CSS classes for the skeleton
}

/**
 * A skeleton component to represent a title.
 *
 * @param {number|string} [width] - Width of the title in pixels
 * @param {boolean} [active=false] - Whether the skeleton has an animation effect
 * @param {boolean} [round=false] - Whether the skeleton has rounded corners
 * @param {string} [className] - Additional CSS classes for the skeleton
 */
export const TitleSkeleton: React.FC<TitleSkeletonProps> = ({
  width,
  className,
  round = false,
  active = false,
  ...props
}) => {
  return (
    <div
      className={clsx(titleSkeleton({ active, round }), className, 'h-4')}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
      {...props}
    />
  );
};

export default TitleSkeleton;
