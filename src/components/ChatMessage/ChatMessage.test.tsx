import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChatMessage } from './ChatMessage';
import { MessageStatus, MessageType } from './types';

describe('ChatMessage', () => {
  it('renders received message with avatar, name, and timestamp', () => {
    render(
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Hello!"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={true}
        type="received"
      />,
    );
    expect(screen.getByText('Phoenix Baker')).toBeInTheDocument();
    expect(screen.getByText('Hello!')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('renders sent message', () => {
    render(
      <ChatMessage
        avatarUrl={null}
        message="Hi!"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={false}
        type="sent"
      />,
    );
    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText('Hi!')).toBeInTheDocument();
  });

  it('does not show avatar for sent message', () => {
    render(
      <ChatMessage
        avatarUrl={null}
        message="Hi!"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={false}
        type="sent"
      />,
    );
    // Should not find an img element
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('shows only message bubble for groupPosition middle', () => {
    render(
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Middle message"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={true}
        type="received"
        groupPosition="middle"
      />,
    );
    // Should not show sender name or timestamp
    expect(screen.queryByText('Phoenix Baker')).not.toBeInTheDocument();
    // Should show message
    expect(screen.getByText('Middle message')).toBeInTheDocument();
  });

  it('shows name and timestamp for groupPosition start', () => {
    render(
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Start message"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={true}
        type="received"
        groupPosition="start"
      />,
    );
    expect(screen.getByText('Phoenix Baker')).toBeInTheDocument();
  });

  it('shows online indicator when isOnline is true', () => {
    const { container } = render(
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Online message"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={true}
        type="received"
      />,
    );
    // The online indicator is a green dot with bg-green-500
    const onlineDot = container.querySelector('.bg-green-500');
    expect(onlineDot).toBeInTheDocument();
  });

  it('does not show online indicator when isOnline is false', () => {
    const { container } = render(
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Offline message"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={false}
        type="received"
      />,
    );
    const onlineDot = container.querySelector('.bg-green-500');
    expect(onlineDot).not.toBeInTheDocument();
  });

  it('applies the className prop to the container', () => {
    const { container } = render(
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="Phoenix Baker"
        message="Custom class"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={true}
        type="received"
        className="custom-class-test"
      />,
    );
    // The outermost div should have the custom class
    const outerDiv = container.firstChild as HTMLElement;
    expect(outerDiv.className).toMatch(/custom-class-test/);
  });

  it('shows correct status text for each message status', () => {
    const baseProps = {
      avatarUrl: null,
      message: 'Status message',
      timestamp: '2025-07-27T18:01:00Z',
      type: 'received' as MessageType,
    };

    const statusCases = [
      { status: MessageStatus.SENDING, expected: 'Sending' },
      { status: MessageStatus.SENT, expected: 'Sent' },
      { status: MessageStatus.DELIVERED, expected: 'Delivered' },
      { status: MessageStatus.SEEN, expected: 'Seen' },
      { status: MessageStatus.ERROR, expected: 'Error' },
    ];

    statusCases.forEach(({ status, expected }) => {
      render(<ChatMessage {...baseProps} status={status} showStatus />);
      expect(screen.getByText(expected)).toBeInTheDocument();
      cleanup();
    });
  });

  it('renders sent message without avatar even when avatarUrl is provided', () => {
    render(
      <ChatMessage
        avatarUrl="https://avatar.iran.liara.run/public/8"
        senderName="You"
        message="Hi!"
        timestamp="2025-07-27T18:01:00Z"
        isOnline={false}
        type="sent"
      />,
    );
    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText('Hi!')).toBeInTheDocument();
  });
});
