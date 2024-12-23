import * as React from 'react';
import { MailIcon } from '@components/Icons';
import { Input } from '@components/Input';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    type: 'default',
    placeholder: 'olivia@untitledui.com',
    disabled: false,
    icon: <MailIcon />,
    message: 'This is an error message',
  },
};
