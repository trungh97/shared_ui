import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@components/Skeleton';
import AvatarSkeleton from '@components/Skeleton/AvatarSkeleton';

const meta: Meta<typeof AvatarSkeleton> = {
  title: 'Components/Skeleton/AvatarSkeleton',
  component: AvatarSkeleton,
  argTypes: {
    shape: {
      control: 'radio',
      options: ['square', 'circle'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    active: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AvatarSkeleton>;

export default meta;

export const Avatar: StoryObj<typeof AvatarSkeleton> = {
  args: {
    shape: 'circle',
    active: true,
    size: 'default',
    className: '',
  },
  render: (args) => <Skeleton.Avatar {...args} />,
};
