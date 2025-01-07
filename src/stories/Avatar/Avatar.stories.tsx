import React from 'react';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';
import { Avatar } from '@components/Avatar';

const meta = {
  title: 'Example/Avatar/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type AvatarStory = StoryObj<typeof meta>;

export const Standard: AvatarStory = {
  args: {
    size: 'sm',
    imageUrl:
      'https://fastly.picsum.photos/id/75/200/200.jpg?hmac=iXY_MolS8m8RDrh8BblWo-XCw9TRR_YvkeuRIko1Q1A',
  },
};
