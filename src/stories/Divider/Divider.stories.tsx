import React from 'react';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';
import { Divider } from '@components/Divider';

const dividerMeta = {
  title: 'Example/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Divider>;

export default dividerMeta;

type DividerStory = StoryObj<typeof dividerMeta>;

export const Horizontal: DividerStory = {
  args: {
    orientation: 'horizontal',
    thickness: '1px',
    color: 'black',
    length: '100%',
  },
};

export const Vertical: DividerStory = {
  args: {
    orientation: 'vertical',
    thickness: '1px',
    color: 'black',
    length: '100%',
  },
};
