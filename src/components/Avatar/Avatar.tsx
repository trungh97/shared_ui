import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { AvatarSize } from './types';

const avatarStyles = cva('bg-cover bg-center rounded-full', {
  variants: {
    size: {
      xs: ['w-6', 'h-6'],
      sm: ['w-8', 'h-8'],
      md: ['w-10', 'h-10'],
      lg: ['w-12', 'h-12'],
      xl: ['w-14', 'h-14'],
      '2xl': ['w-16', 'h-16'],
    },
  },
});

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarStyles> {
  size?: AvatarSize;
  imageUrl: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  imageUrl,
  className,
}) => {
  const backgroundImage = `url(${imageUrl})`;

  return (
    <div
      className={avatarStyles({ size, className })}
      style={{ backgroundImage }}
    ></div>
  );
};

export default Avatar;
