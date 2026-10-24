import { format, isToday, Locale, parseISO } from 'date-fns';

/**
 * Formats an ISO 8601 date string:
 * - If the date is today, returns 'HH:mm'
 * - Otherwise, returns 'EEEE, MMM d'
 * @param isoString ISO 8601 date string
 * @param locale date-fns locale for day and month names. Defaults to English
 */
export function formatChatDate(isoString: string, locale?: Locale): string {
  const date = parseISO(isoString);
  if (isToday(date)) {
    return format(date, 'HH:mm', { locale });
  }
  return format(date, 'EEEE, MMM d', { locale });
}
