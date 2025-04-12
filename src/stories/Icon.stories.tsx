import { AddIcon } from '@components/Icons';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';

const iconMeta = {
  title: 'Example/Icon',
  component: AddIcon,
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
  },
};
