import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { AvatarShape, AvatarSize } from './types';
import { getAvatarSize } from './utils';

const avatarSkeleton = cva('bg-gray-200', {
  variants: {
    active: {
      true: 'animate-pulse',
      false: '',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-md',
    },
  },
  defaultVariants: {
    active: true,
    shape: 'circle',
  },
});

export interface AvatarSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarSkeleton> {
  size?: AvatarSize;
  active?: boolean;
  shape?: AvatarShape;
}

/**
 * A skeleton component to show a loading state of an avatar.
 *
 * @param {boolean} [active=true] - Show animation effect.
 * @param {AvatarShape} [shape='circle'] - The shape of the skeleton avatar.
 * @param {AvatarSize} [size='default'] - The size of the skeleton avatar.
 * @param {string} [className] - Additional CSS classes to add to the component.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props] - Additional props to pass to the component.
 */
export const AvatarSkeleton: React.FC<AvatarSkeletonProps> = ({
  active = true,
  shape = 'circle',
  size = 'default',
  className,
  ...props
}) => {
  const { width, height } = getAvatarSize(size);

  return (
    <div
      className={clsx(avatarSkeleton({ active, shape }), className)}
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    />
  );
};

export default AvatarSkeleton;
