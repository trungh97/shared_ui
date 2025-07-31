import { formatChatDate } from '@utils/date';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { Avatar } from '../Avatar';
import { GroupPosition } from './types';

const messageContainerStyles = cva('flex gap-3', {
  variants: {
    type: {
      received: 'flex-row',
      sent: 'flex-row-reverse',
    },
    groupPosition: {
      start: 'px-4 pt-4',
      middle: 'px-4 pt-1',
      end: 'px-4 pt-1 pb-4',
      undefined: 'p-4',
    },
  },
});

const messageBubbleStyles = cva('flex-1 flex flex-col gap-1.5', {
  variants: {
    type: {
      received: 'items-start',
      sent: 'items-end',
    },
    groupPosition: {
      start: '',
      middle: '',
      end: '',
      undefined: '',
    },
  },
  compoundVariants: [
    {
      type: 'received',
      groupPosition: 'middle',
      className: 'pl-[52px]',
    },
    {
      type: 'received',
      groupPosition: 'end',
      className: 'pl-[52px]',
    },
  ],
});

const messageTextStyles = cva(
  'px-3.5 py-2.5 text-base leading-6 font-normal break-words max-w-xs',
  {
    variants: {
      type: {
        received: 'bg-gray-100 text-gray-900',
        sent: 'bg-brand-600 text-white',
      },
      groupPosition: {
        start: '',
        middle: 'rounded-lg',
        end: '',
      },
    },
    defaultVariants: {
      type: 'received',
      groupPosition: undefined,
    },
    compoundVariants: [
      {
        type: 'received',
        groupPosition: undefined,
        className:
          'bg-gray-100 text-gray-900 rounded-r-lg rounded-bl-lg rounded-tl-sm',
      },
      {
        type: 'sent',
        groupPosition: undefined,
        className:
          'bg-brand-600 text-white rounded-l-lg rounded-tr-lg rounded-br-sm',
      },
      {
        type: 'received',
        groupPosition: 'start',
        className: 'rounded-tl-lg rounded-r-lg rounded-bl-sm',
      },
      {
        type: 'received',
        groupPosition: 'end',
        className: 'rounded-bl-lg rounded-r-lg rounded-tl-sm',
      },
      {
        type: 'sent',
        groupPosition: 'start',
        className: 'rounded-tr-lg rounded-l-lg rounded-br-sm',
      },
      {
        type: 'sent',
        groupPosition: 'end',
        className: 'rounded-br-lg rounded-l-lg rounded-tr-sm',
      },
    ],
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
  senderName?: string | null;
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
  /** Whether the message is the middle of a group */
  groupPosition?: GroupPosition;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  senderName,
  message,
  timestamp,
  isOnline = false,
  type = 'received',
  className,
  avatarUrl = null,
  groupPosition = undefined,
}) => {
  const isShowingNameAndTimestamp =
    groupPosition === 'start' || groupPosition === undefined;

  const isShowingAvatar =
    type === 'received' &&
    avatarUrl &&
    groupPosition !== 'end' &&
    groupPosition !== 'middle';

  const dateTime = formatChatDate(timestamp);

  return (
    <div
      className={messageContainerStyles({
        type,
        className,
        groupPosition,
      })}
    >
      {/* Avatar with online indicator */}
      {isShowingAvatar && (
        <div className="relative h-fit w-fit flex-shrink-0">
          <Avatar imageUrl={avatarUrl} size="md" className="h-10 w-10" />
          {isOnline && (
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-[1.5px] border-white bg-green-500" />
          )}
        </div>
      )}

      {/* Message content */}
      <div className={messageBubbleStyles({ type, groupPosition })}>
        {/* Name and timestamp */}
        {isShowingNameAndTimestamp && (
          <div className={messageHeaderStyles({ type })}>
            <span className="text-sm font-medium leading-5 text-gray-700">
              {type === 'sent' ? 'You' : senderName}
            </span>
            <span className="leading-4.5 text-xs font-normal text-gray-600">
              {dateTime}
            </span>
          </div>
        )}

        {/* Message bubble */}
        <div className={messageTextStyles({ type, groupPosition })}>
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
