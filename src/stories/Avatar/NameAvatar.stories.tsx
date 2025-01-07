import React from 'react';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';
import { NameAvatar } from '@components/Avatar';

const meta = {
  title: 'Example/Avatar/NameAvatar',
  component: NameAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof NameAvatar>;

export default meta;

type NameAvatarStory = StoryObj<typeof meta>;

export const Standard: NameAvatarStory = {
  args: {
    size: 'sm',
    firstName: 'John',
    lastName: 'Doe',
  },
};
