import React from 'react';
import { Avatar } from '../Avatar';
import { cva, VariantProps } from 'class-variance-authority';

const messageContainerStyles = cva('flex gap-3 p-4', {
  variants: {
    type: {
      received: 'flex-row',
      sent: 'flex-row-reverse',
    },
  },
});

const messageBubbleStyles = cva('flex-1 flex flex-col gap-1.5', {
  variants: {
    type: {
      received: 'items-start',
      sent: 'items-end',
    },
  },
});

const messageTextStyles = cva(
  'px-3.5 py-2.5 text-base leading-6 font-normal break-words max-w-xs',
  {
    variants: {
      type: {
        received: 'bg-gray-100 text-gray-900 rounded-r-lg rounded-bl-lg',
        sent: 'bg-brand-600 text-white rounded-l-lg rounded-br-lg',
      },
    },
  },
);

const messageHeaderStyles = cva('flex items-center gap-2', {
  variants: {
    type: {
      received: 'flex-row',
      sent: 'flex-row-reverse',
    },
  },
});

export interface ChatMessageProps
  extends VariantProps<typeof messageContainerStyles> {
  /** The avatar URL for the sender */
  // if the type is 'received', the avatar must has value, otherwise it can be null
  // if the type is 'sent', the avatar can be null
  avatarUrl: string | null;
  /** The name of the message sender */
  senderName: string;
  /** The message content */
  message: string;
  /** The timestamp for the message */
  timestamp: string;
  /** Whether the sender is online */
  isOnline?: boolean;
  /** Message type - received or sent */
  type?: 'sent' | 'received';
  /** Additional className for the container */
  className?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  senderName,
  message,
  timestamp,
  isOnline = false,
  type = 'received',
  className,
  avatarUrl = null,
}) => {
  return (
    <div className={messageContainerStyles({ type, className })}>
      {/* Avatar with online indicator */}
      {avatarUrl && type === 'received' && (
        <div className="relative h-fit w-fit flex-shrink-0">
          <Avatar imageUrl={avatarUrl} size="md" className="h-10 w-10" />
          {isOnline && (
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-green-500" />
          )}
        </div>
      )}

      {/* Message content */}
      <div className={messageBubbleStyles({ type })}>
        {/* Name and timestamp */}
        <div className={messageHeaderStyles({ type })}>
          <span className="text-sm font-medium leading-5 text-gray-700">
            {type === 'sent' ? 'You' : senderName}
          </span>
          <span className="leading-4.5 text-xs font-normal text-gray-600">
            {timestamp}
          </span>
        </div>

        {/* Message bubble */}
        <div className={messageTextStyles({ type })}>{message}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
