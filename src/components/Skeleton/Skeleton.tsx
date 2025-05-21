import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const skeleton = cva('bg-gray-200 animate-pulse', {
  variants: {
    shape: {
      circle: 'rounded-full',
      rectangle: 'rounded-md',
    },
    size: {
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-10 w-10',
      full: 'h-8 w-full',
    },
    block: {
      true: 'w-full',
      false: '',
    },
  },
  defaultVariants: {
    shape: 'rectangle',
    size: 'md',
    block: false,
  },
});

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeleton> {}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  shape,
  size,
  block,
  ...props
}) => {
  return (
    <div className={skeleton({ shape, size, block, className })} {...props} />
  );
};

export default Skeleton;
