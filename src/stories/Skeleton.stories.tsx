import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@components/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Example/Skeleton',
  component: Skeleton,
  argTypes: {
    shape: {
      control: 'select',
      options: ['rectangle', 'circle'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },
    block: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

export const Default: StoryObj<typeof Skeleton> = {
  args: {
    shape: 'rectangle',
    size: 'md',
    block: false,
    className: '',
  },
};

export const Circle: StoryObj<typeof Skeleton> = {
  args: {
    shape: 'circle',
    size: 'lg',
    block: false,
    className: '',
  },
};

export const FullBlock: StoryObj<typeof Skeleton> = {
  args: {
    shape: 'rectangle',
    size: 'full',
    block: true,
    className: '',
  },
  decorators: [
    (Story) => (
      <div className="flex w-screen items-center justify-center">
        <Story />
      </div>
    ),
  ],
};
