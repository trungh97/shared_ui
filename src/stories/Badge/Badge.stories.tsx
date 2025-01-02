import React from 'react';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';
import { Badge } from '@components/Badge';

const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Badge>;

export default meta;

type BadgeStory = StoryObj<typeof meta>;

export const Standard: BadgeStory = {
  args: {
    size: 'sm',
    color: 'primary',
    content: 'Label',
  },
};
