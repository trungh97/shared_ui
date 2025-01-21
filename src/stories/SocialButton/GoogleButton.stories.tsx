import React from 'react';
import { GoogleSignInButton } from '@components/Button/SocialButton';
import type { Meta, StoryObj } from '@storybook/react/*';
import { fn } from '@storybook/test';

const googleMeta = {
  title: 'Example/SocialButton/Google',
  component: GoogleSignInButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof GoogleSignInButton>;

export default googleMeta;

type GoogleStory = StoryObj<typeof googleMeta>;

export const Standard: GoogleStory = {
  args: {
    theme: 'brand',
    supportingText: true,
    customText: 'Continue with Google',
  },
};
