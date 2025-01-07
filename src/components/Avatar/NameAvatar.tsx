import { cva, VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import React from 'react';
import { AvatarSize } from './types';
import { getAvatarURLBasedOnName } from './utils';

const nameAvatarStyles = cva('bg-cover bg-center rounded-full', {
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

export interface NameAvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof nameAvatarStyles> {
  firstName: string;
  lastName: string;
  size?: AvatarSize;
}

export const NameAvatar: React.FC<NameAvatarProps> = ({
  firstName,
  lastName,
  size = 'md',
}) => {
  const initialAvatar = getAvatarURLBasedOnName(firstName, lastName);
  const backgroundImage = `url(${initialAvatar})`;

  return (
    <div
      className={nameAvatarStyles({ size })}
      style={{ backgroundImage }}
    ></div>
  );
};

export default NameAvatar;
