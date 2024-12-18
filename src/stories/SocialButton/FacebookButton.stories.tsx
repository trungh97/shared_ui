import React from 'react';
import { FacebookSignInButton } from '@components/Button/SocialButton';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';

const facebookMeta = {
  title: 'Example/SocialButton/Facebook',
  component: FacebookSignInButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof FacebookSignInButton>;

export default facebookMeta;

type FacebookStory = StoryObj<typeof facebookMeta>;

export const Standard: FacebookStory = {
  args: {
    theme: 'brand',
    supportingText: true,
  },
};
