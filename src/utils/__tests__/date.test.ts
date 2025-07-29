import { formatChatDate } from '../date';

describe('formatChatDate', () => {
  it('should format today as HH:mm', () => {
    const now = new Date();
    const iso = now.toISOString();
    const formatted = formatChatDate(iso);
    // The result should be HH:mm
    expect(formatted).toMatch(/^\d{2}:\d{2}$/);
  });

  it('should format previous day as EEEE, MMM d', () => {
    const date = new Date('2023-01-01T12:34:56Z');
    const formatted = formatChatDate(date.toISOString());
    // The result should be like 'Sunday, Jan 1'
    expect(formatted).toMatch(/\w+, \w+ \d{1,2}/);
  });

  it('should throw an error for invalid input', () => {
    expect(() => formatChatDate('not-a-date')).toThrow(
      'Invalid ISO 8601 date string',
    );
    expect(() => formatChatDate('')).toThrow('Invalid ISO 8601 date string');
    expect(() => formatChatDate('2025-99-99T99:99:99Z')).toThrow(
      'Invalid ISO 8601 date string',
    );
  });
});
