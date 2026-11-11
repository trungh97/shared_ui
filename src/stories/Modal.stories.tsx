import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React, { useState } from 'react';
import { Button, Modal, ModalProps } from '../components';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    open: false,
    onClose: fn(),
    title: 'Contacts',
    children: null,
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

/** Opens from a button; Esc, a backdrop click or the close button closes it. */
const ModalWithTrigger = (args: ModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        {...args}
        open={open}
        onClose={() => {
          args.onClose();
          setOpen(false);
        }}
      />
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalWithTrigger {...args} />,
  args: {
    children: (
      <div className="flex flex-col gap-3">
        <p>Focus stays inside the modal while it is open.</p>
        <input
          className="rounded border border-gray-300 px-3 py-2"
          placeholder="Search people"
        />
      </div>
    ),
  },
};

export const LongContent: Story = {
  render: (args) => <ModalWithTrigger {...args} />,
  args: {
    title: 'A long list',
    children: (
      <ul className="flex flex-col gap-2">
        {Array.from({ length: 50 }, (_, i) => (
          <li key={i}>Contact {i + 1}</li>
        ))}
      </ul>
    ),
  },
};
