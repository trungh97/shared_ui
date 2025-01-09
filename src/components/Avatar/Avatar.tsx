import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { AvatarSize } from './types';

const avatarStyles = cva('rounded-full object-cover', {
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
  extends React.HTMLAttributes<HTMLImageElement>,
    VariantProps<typeof avatarStyles> {
  size?: AvatarSize;
  imageUrl: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 'md',
  imageUrl,
  className,
  ...props
}) => {
  return (
    <img
      src={imageUrl}
      className={avatarStyles({ size, className })}
      loading="lazy"
      alt="avatar"
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};

export default Avatar;
