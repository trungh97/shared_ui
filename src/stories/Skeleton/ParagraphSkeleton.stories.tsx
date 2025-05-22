import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ParagraphSkeleton from '@components/Skeleton/ParagraphSkeleton';

const meta: Meta<typeof ParagraphSkeleton> = {
  title: 'Components/Skeleton/ParagraphSkeleton',
  component: ParagraphSkeleton,
  argTypes: {
    rows: {
      control: 'number',
      description: 'The number of rows in the paragraph skeleton.',
    },
    width: {
      control: 'object',
      description:
        'The width of the paragraph rows. Can be a single value or an array of values for each row.',
    },
    active: {
      control: 'boolean',
      description: 'Whether the skeleton has an animation effect.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for the skeleton.',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ParagraphSkeleton>;

export default meta;

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-[600px] items-center justify-center">{children}</div>
);

export const Default: StoryObj<typeof ParagraphSkeleton> = {
  args: {
    rows: 3,
    width: '100%',
    active: true,
    className: '',
  },
  render: (args) => <ParagraphSkeleton {...args} />,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};

export const CustomWidths: StoryObj<typeof ParagraphSkeleton> = {
  args: {
    rows: 4,
    width: ['100%', '80%', '60%', '50%'],
    active: true,
    className: '',
  },
  render: (args) => <ParagraphSkeleton {...args} />,
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
};
