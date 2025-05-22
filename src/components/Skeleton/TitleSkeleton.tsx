import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const titleSkeleton = cva('bg-gray-200 animate-pulse rounded-md', {
  variants: {},
});

export interface TitleSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string; // Width of the title in pixels
}

export const TitleSkeleton: React.FC<TitleSkeletonProps> = ({
  width,
  className,
  ...props
}) => {
  return (
    <div
      className={`${titleSkeleton()} h-4 ${className}`}
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
      {...props}
    />
  );
};

export default TitleSkeleton;
