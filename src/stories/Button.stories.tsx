import React from 'react';
import { Button } from '@components/Button';
import { SampleIcon } from '@components/Icons';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    intent: 'primary',
    label: 'Button CTA',
    icon: {
      content: <SampleIcon />,
      position: 'leading',
      iconOnly: false,
    },
    size: 'lg',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    label: 'Button CTA',
    icon: {
      content: <SampleIcon />,
    },
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    intent: 'primary',
    label: 'Button CTA',
    disabled: true,
    icon: {
      content: <SampleIcon />,
    },
  },
};

export const IconOnly: Story = {
  args: {
    intent: 'primary',
    icon: {
      content: <SampleIcon />,
      position: 'leading',
      iconOnly: true,
    },
    size: 'lg',
  },
};
