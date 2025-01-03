import React from 'react';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';
import { BadgeGroup } from '@components/Badge';

const badgeGroupMeta = {
  title: 'Example/Badge/BadgeGroup',
  component: BadgeGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof BadgeGroup>;

export default badgeGroupMeta;

type BadgeGroupStory = StoryObj<typeof badgeGroupMeta>;

export const Standard: BadgeGroupStory = {
  args: {
    size: 'md',
    color: 'primary',
    content: 'We’ve just released a new feature',
    smallBadgeContent: 'New feature',
  },
};
