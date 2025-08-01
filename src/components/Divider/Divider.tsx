import { clsx } from 'clsx';
import React, { forwardRef } from 'react';
import { DividerOrientation } from './types';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
  thickness?: string;
  color?: string;
  length?: string;
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = 'horizontal',
      thickness = '1px',
      color = 'black',
      length = '100%',
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const sharedStyles: React.CSSProperties = {
      borderRadius: '2px',
    };

    const defaultStyle: React.CSSProperties =
      orientation === 'vertical'
        ? {
            width: thickness,
            height: length,
            backgroundColor: color,
            minHeight: '1rem',
          }
        : {
            height: thickness,
            width: length,
            backgroundColor: color,
            minWidth: '1rem',
          };

    return (
      <div
        ref={ref}
        className={clsx('shrink-0', className)}
        style={{ ...sharedStyles, ...defaultStyle, ...style }}
        {...props}
      />
    );
  },
);
