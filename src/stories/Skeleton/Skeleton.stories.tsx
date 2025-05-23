import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@components/Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton/BaseSkeleton',
  component: Skeleton,
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Show animation effect.',
    },
    avatar: {
      control: 'boolean',
      description: 'Show avatar placeholder.',
    },
    loading: {
      control: 'boolean',
      description: 'Display the skeleton when true.',
    },
    paragraph: {
      control: 'boolean',
      description: 'Show paragraph placeholder.',
    },
    round: {
      control: 'boolean',
      description: 'Show paragraph and title radius when true.',
    },
    title: {
      control: 'boolean',
      description: 'Show title placeholder.',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-[600px] items-center justify-center">{children}</div>
);

export const Default: StoryObj<typeof Skeleton> = {
  args: {
    active: true,
    avatar: true,
    loading: true,
    paragraph: true,
    round: false,
    title: true,
  },
  render: (args) => <Skeleton {...args} />,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const WithCustomAvatar: StoryObj<typeof Skeleton> = {
  args: {
    active: true,
    avatar: { shape: 'square', size: 'default' },
    loading: true,
    paragraph: true,
    round: true,
    title: true,
  },
  render: (args) => <Skeleton {...args} />,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const WithoutAvatar: StoryObj<typeof Skeleton> = {
  args: {
    active: true,
    avatar: false,
    loading: true,
    paragraph: true,
    round: true,
    title: true,
  },
  render: (args) => <Skeleton {...args} />,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const CustomParagraph: StoryObj<typeof Skeleton> = {
  args: {
    active: true,
    avatar: true,
    loading: true,
    paragraph: { rows: 4, width: ['100%', '80%', '60%', '40%'] },
    round: true,
    title: { width: '50%' },
  },
  render: (args) => <Skeleton {...args} />,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};
