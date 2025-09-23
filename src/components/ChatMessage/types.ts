export type GroupPosition = 'start' | 'middle' | 'end' | undefined;
export enum MessageStatus {
  SENDING = 'SENDING',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  SEEN = 'SEEN',
  ERROR = 'ERROR',
}

export const MessageStatusText: {
  [key in MessageStatus]: string;
} = {
  SENDING: 'Sending',
  SENT: 'Sent',
  DELIVERED: 'Delivered',
  SEEN: 'Seen',
  ERROR: 'Error',
};
