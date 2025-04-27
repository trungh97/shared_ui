import { Placement } from '@floating-ui/react';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Popover } from '../components';
import { Button } from '../components/Button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ] as Placement[],
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const CenterWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex h-[300vh] w-[300vw] items-center justify-center">
    {children}
  </div>
);

export const Basic: Story = {
  args: {
    content: 'This is a basic popover',
    children: <Button label="Hover me" />,
  },
};

export const LongContent: Story = {
  args: {
    content: (
      <div>
        <p className="mb-2">This is a detailed explanation of the feature:</p>
        <ul className="list-disc space-y-2 pl-4">
          <li>
            First point of interest with some additional details that make this
            line longer than usual.
          </li>
          <li>
            Second important aspect that needs to be highlighted for the user's
            understanding.
          </li>
          <li>
            Third consideration that might affect the user's decision making
            process.
          </li>
          <li>
            Fourth element that completes the set of information needed for
            proper context.
          </li>
          <li>
            Fifth and final point that wraps up the explanation with a
            concluding remark.
          </li>
        </ul>
        <p className="mt-2">Additional notes:</p>
        <p className="text-sm text-gray-600">
          This is some supplementary information that provides more context
          about the feature. It includes details about implementation, usage
          scenarios, and potential edge cases that users should be aware of when
          working with this component.
        </p>
      </div>
    ),
    children: <Button label="Show Details" />,
  },
  decorators: [
    (Story) => (
      <CenterWrapper>
        <Story />
      </CenterWrapper>
    ),
  ],
};
