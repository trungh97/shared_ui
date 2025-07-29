import { format, isToday, parseISO } from 'date-fns';

/**
 * Checks if the given string is an ISO 8601 date string.
 *
 * @param str The string to check.
 * @returns true if the string is an ISO 8601 date string, false otherwise.
 */
export function isISO8601String(str: string): boolean {
  const date = new Date(str);
  return (
    !isNaN(date.getTime()) &&
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(Z|([+-]\d{2}:\d{2}))?$/.test(
      str,
    )
  );
}

/**
 * Formats an ISO 8601 date string:
 * - If the date is today, returns 'HH:mm'
 * - Otherwise, returns 'EEEE, MMM d'
 * @param isoString ISO 8601 date string
 */
export function formatChatDate(isoString: string): string {
  if (!isISO8601String(isoString)) {
    throw new Error('Invalid ISO 8601 date string');
  }
  const date = parseISO(isoString);
  if (isToday(date)) {
    return format(date, 'HH:mm');
  }
  return format(date, 'EEEE, MMM d');
}
