import React from 'react';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';
import { Badge } from '@components/Badge';
import { Message } from '@components/Message';

const meta = {
  title: 'Example/Message',
  component: Message,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Message>;

export default meta;

type MessageStory = StoryObj<typeof meta>;

export const Standard: MessageStory = {
  args: {
    size: 'md',
    color: 'primary',
    content: 'We’ve just released a new feature',
    messageType: 'default',
  },
};
