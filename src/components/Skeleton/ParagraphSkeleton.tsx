import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { getRowWidth } from './utils';

const paragraphSkeleton = cva('bg-gray-200 animate-pulse rounded-md', {
  variants: {
    active: {
      true: 'animate-pulse',
      false: '',
    },
  },
  defaultVariants: {
    active: true,
  },
});

export interface ParagraphSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof paragraphSkeleton> {
  active?: boolean; // Whether the skeleton is active or not
  rows?: number; // Number of rows in the paragraph
  width?: number | string | Array<number | string>; // Width of the paragraph rows
}

/**
 * ParagraphSkeleton component
 *
 * A skeleton component to represent a paragraph of text. Accepts a `rows`
 * prop to control the number of rows in the paragraph, and a `width` prop to
 * control the width of each row. The `width` prop can be a single value, or an
 * array of values to apply to each row individually.
 *
 * @param {number} [rows=3] - Number of rows in the paragraph
 * @param {number|string|Array<number|string>} [width='100%'] - Width of the paragraph rows
 * @param {string} [className] - Additional CSS classes to add to the component
 * @param {boolean} [active=false] - Whether the skeleton is active or not
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional props to pass to the component
 */
export const ParagraphSkeleton: React.FC<ParagraphSkeletonProps> = ({
  rows = 3,
  width = '100%',
  className,
  active = false,
  ...props
}) => {
  return (
    <div className={`w-full space-y-3 ${className}`} {...props}>
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className={`${paragraphSkeleton({ active })} h-4`}
          style={{
            width: getRowWidth(index, rows, width),
          }}
        />
      ))}
    </div>
  );
};

export default ParagraphSkeleton;
