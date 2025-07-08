import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChatMessage } from '../../components/ChatMessage';

const meta: Meta<typeof ChatMessage> = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['received', 'sent'],
    },
    isOnline: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ReceivedMessage: Story = {
  args: {
    avatarUrl: 'https://avatar.iran.liara.run/public/8',
    senderName: 'Phoenix Baker',
    message:
      'Hey Olivia, can you please review the latest design when you can?',
    timestamp: 'Friday 2:20pm',
    isOnline: true,
    type: 'received',
  },
};

export const SentMessage: Story = {
  args: {
    senderName: 'You',
    message: "Sure, I'll take a look at it this afternoon!",
    timestamp: 'Friday 2:25pm',
    isOnline: false,
    type: 'sent',
  },
};

export const OfflineUser: Story = {
  args: {
    avatarUrl: 'https://avatar.iran.liara.run/public/8',
    senderName: 'Sarah Wilson',
    message:
      "Thanks for the feedback on the project. I'll implement the changes by tomorrow.",
    timestamp: 'Thursday 5:45pm',
    isOnline: false,
    type: 'received',
  },
};

export const LongMessage: Story = {
  args: {
    avatarUrl: 'https://avatar.iran.liara.run/public/8',
    senderName: 'Alex Johnson',
    message:
      'This is a longer message to test how the component handles text wrapping and multiple lines. It should break appropriately and maintain good readability across different screen sizes.',
    timestamp: 'Friday 1:30pm',
    isOnline: true,
    type: 'received',
  },
};

export const Conversation: Story = {
  render: () => (
    <div className="max-w-md space-y-0">
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Hey Olivia, can you please review the latest design when you can?"
        timestamp="Friday 2:20pm"
        isOnline
        type="received"
      />
      <ChatMessage
        avatarUrl={null}
        senderName="You"
        message="Sure, I'll take a look at it this afternoon!"
        timestamp="Friday 2:25pm"
        isOnline={false}
        type="sent"
      />
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Perfect, thank you!"
        timestamp="Friday 2:26pm"
        isOnline
        type="received"
      />
    </div>
  ),
};
