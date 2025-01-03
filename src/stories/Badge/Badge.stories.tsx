import React from 'react';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';
import { Badge } from '@components/Badge';

const badgeMeta = {
  title: 'Example/Badge/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Badge>;

export default badgeMeta;

type BadgeStory = StoryObj<typeof badgeMeta>;

export const Standard: BadgeStory = {
  args: {
    size: 'sm',
    color: 'primary',
    content: 'Label',
  },
};
