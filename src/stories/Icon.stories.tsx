import { AddIcon, SendIcon } from '@components/Icons';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';

const iconMeta = {
  title: 'Example/Icon',
  component: SendIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof AddIcon>;

export default iconMeta;

type SearchIconStory = StoryObj<typeof iconMeta>;

export const Standard: SearchIconStory = {
  args: {
    color: 'red',
    transform: 'scale(0.75)',
  },
};
