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
    timestamp: '2025-07-27T18:01:00Z',
    isOnline: true,
    type: 'received',
  },
};

export const SentMessage: Story = {
  args: {
    avatarUrl: 'https://avatar.iran.liara.run/public/8',
    senderName: 'You',
    message: "Sure, I'll take a look at it this afternoon!",
    timestamp: '2025-07-28T12:46:49.109Z',
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
    timestamp: '2025-07-27T18:01:00Z',
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
    timestamp: '2025-07-27T18:01:00Z',
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
        timestamp="2025-07-27T18:01:00Z"
        isOnline
        type="received"
      />
      <ChatMessage
        avatarUrl={null}
        senderName="You"
        message="Sure, I'll take a look at it this afternoon!"
        timestamp="2025-07-27T18:06:00Z"
        isOnline={false}
        type="sent"
      />
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Perfect, thank you!"
        timestamp="2025-07-28T18:01:00Z"
        isOnline
        type="received"
      />
    </div>
  ),
};

export const ConversationWithSameSender: Story = {
  render: () => (
    <div className="max-w-4xl">
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Hey Olivia, can you please review the latest design when you can?"
        timestamp="2025-07-27T18:01:00Z"
        isOnline
        type="received"
        groupPosition="start"
      />
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Sure, I'll take a look at it this afternoon!"
        timestamp="2025-07-27T18:02:00Z"
        type="received"
        isOnline
        groupPosition="middle"
      />
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Perfect, thank you!"
        timestamp="2025-07-27T18:04:00Z"
        isOnline
        type="received"
        groupPosition="end"
      />
      <ChatMessage
        avatarUrl={null}
        senderName="You"
        message="Hey Olivia, can you please review the latest design when you can?"
        timestamp="2025-07-28T18:05:00Z"
        isOnline
        type="sent"
        groupPosition="start"
      />
      <ChatMessage
        avatarUrl={null}
        senderName="You"
        message="Sure, I'll take a look at it this afternoon!"
        timestamp="2025-07-28T18:05:00Z"
        type="sent"
        isOnline
        groupPosition="middle"
      />
      <ChatMessage
        avatarUrl={null}
        senderName="You"
        message="Perfect, thank you!"
        timestamp="2025-07-28T18:08:00Z"
        isOnline
        type="sent"
        groupPosition="end"
      />
    </div>
  ),
};
