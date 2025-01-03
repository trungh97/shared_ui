import { BadgeGroup, BadgeGroupProps } from '@components/Badge';
import { BadgeColor } from '@components/Badge/types';
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

type MessageType = 'default' | 'error' | 'success' | 'warning' | 'info';

export interface MessageProps extends BadgeGroupProps {
  messageType?: MessageType;
  content: string;
  duration?: number;
}

const MessageTypeMap: Record<MessageType, BadgeColor> = {
  default: 'primary',
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'gray',
};

export const Message: React.FC<MessageProps> = ({
  duration = 3000,
  messageType = 'default',
  content,
  type = 'trailing',
  size = 'lg',
  ...props
}) => {
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <BadgeGroup
      className="fixed left-1/2 top-5 -translate-x-1/2 transform animate-message-fade-in transition-opacity duration-300"
      type={type}
      color={MessageTypeMap[messageType]}
      content={content}
      {...props}
    />
  );
};

const createMessage = (props: MessageProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);

  root.render(<Message {...props} />);

  // Automatically destroy after the duration
  setTimeout(() => {
    root.unmount();
    div.remove();
  }, props.duration || 3000);
};

export const message = {
  /**
   * Displays a success message in a toast above the bottom of the viewport.
   * @param content The content of the message.
   * @param duration The duration of the message in milliseconds. Defaults to 3000.
   */
  success: (content: string, duration?: number) =>
    createMessage({ messageType: 'success', content, duration }),
  /**
   * Displays an error message in a toast above the bottom of the viewport.
   * @param content The content of the message.
   * @param duration The duration of the message in milliseconds. Defaults to 3000.
   */

  error: (content: string, duration?: number) =>
    createMessage({ messageType: 'error', content, duration }),
  /**
   * Displays a warning message in a toast above the bottom of the viewport.
   * @param content The content of the message.
   * @param duration The duration of the message in milliseconds. Defaults to 3000.
   */
  warning: (content: string, duration?: number) =>
    createMessage({ messageType: 'warning', content, duration }),
  /**
   * Displays an informational message in a toast above the bottom of the viewport.
   * @param content The content of the message.
   * @param duration The duration of the message in milliseconds. Defaults to 3000.
   */
  info: (content: string, duration?: number) =>
    createMessage({ messageType: 'info', content, duration }),
};

export default message;
