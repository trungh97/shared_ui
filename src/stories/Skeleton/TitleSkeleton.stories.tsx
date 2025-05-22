import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TitleSkeleton from '@components/Skeleton/TitleSkeleton';

const meta: Meta<typeof TitleSkeleton> = {
  title: 'Components/Skeleton/TitleSkeleton',
  component: TitleSkeleton,
  argTypes: {
    width: {
      control: 'number',
      description: 'The width of the title skeleton in pixels or percents.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the skeleton.',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TitleSkeleton>;

export default meta;

export const Title: StoryObj<typeof TitleSkeleton> = {
  args: {
    width: 200,
    className: '',
  },
  render: (args) => <TitleSkeleton {...args} />,
};
