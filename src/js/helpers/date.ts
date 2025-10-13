/**
 * Validates and parses a date string in ISO format.
 *
 * @param value - The date string to validate (YYYY-MM-DD or YYYY-MM-DDTHH:MM)
 * @returns A valid Date object
 * @throws Error if the date format is invalid or the date is not valid
 *
 * @example
 * validateDate('2023-12-25') // Returns: Date object for Christmas 2023
 * validateDate('2023-12-25T15:30') // Returns: Date object with time
 * validateDate('invalid') // Throws: Error
 */
export function validateDate(value: string): Date {
  const datePattern = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/;

  if (!datePattern.test(value)) {
    throw new Error(
      'Invalid date format. Expected YYYY-MM-DD or YYYY-MM-DDTHH:MM',
    );
  }

  const date = new Date(value);

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date value');
  }

  return date;
}

/**
 * Validates a time string in 24-hour format.
 *
 * @param value - The time string to validate (HH:MM format)
 * @returns The validated time string
 * @throws Error if the time format is invalid
 *
 * @example
 * validateTime('14:30') // Returns: "14:30"
 * validateTime('25:00') // Throws: Error
 * validateTime('invalid') // Throws: Error
 */
export function validateTime(value: string): string {
  const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;

  if (!timePattern.test(value)) {
    throw new Error('Invalid time format. Use HH:MM (24-hour format)');
  }

  return value;
}

/**
 * Locale configuration for date formatting.
 */
export interface DateLocales {
  months: string[];
  weekdays: string[];
}

/**
 * Formats a date according to the specified format string and language.
 *
 * @param date - The Date object to format
 * @param format - The format string with tokens (e.g., "YYYY-MM-DD", "MMM Do, YYYY")
 * @param lang - The locale/language string (e.g., "en-US", "fr-FR")
 * @returns The formatted date string
 *
 * @example
 * const date = new Date('2023-12-25T15:30:00');
 * formatDate(date, 'YYYY-MM-DD', 'en-US') // "2023-12-25"
 * formatDate(date, 'MMM Do, YYYY', 'en-US') // "Dec 25th, 2023"
 * formatDate(date, 'dddd, MMMM DD', 'fr-FR') // "lundi, décembre 25"
 */
export function formatDate(
  date: Date,
  format: string,
  lang: string = 'en-US',
): string {
  const getOrdinalSuffix = (day: number): string => {
    if (day >= 11 && day <= 13) return 'th';
    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  // Intl helpers for month and weekday names
  const monthFormatter = new Intl.DateTimeFormat(lang, { month: 'long' });
  const shortMonthFormatter = new Intl.DateTimeFormat(lang, { month: 'short' });
  const weekdayFormatter = new Intl.DateTimeFormat(lang, { weekday: 'long' });
  const shortWeekdayFormatter = new Intl.DateTimeFormat(lang, {
    weekday: 'short',
  });

  const formatTokens: Record<string, () => string> = {
    // Year tokens
    YYYY: () => date.getFullYear().toString(),
    YY: () => (date.getFullYear() % 100).toString().padStart(2, '0'),

    // Month tokens
    MMMM: () => monthFormatter.format(date),
    MMM: () => shortMonthFormatter.format(date),
    MM: () => (date.getMonth() + 1).toString().padStart(2, '0'),
    M: () => (date.getMonth() + 1).toString(),

    // Day tokens
    dddd: () => weekdayFormatter.format(date),
    ddd: () => shortWeekdayFormatter.format(date),
    Do: () =>
      date.getDate() +
      (lang.startsWith('en') ? getOrdinalSuffix(date.getDate()) : ''),
    DD: () => date.getDate().toString().padStart(2, '0'),
    D: () => date.getDate().toString(),

    // Hour tokens (24-hour)
    HH: () => date.getHours().toString().padStart(2, '0'),
    H: () => date.getHours().toString(),

    // Hour tokens (12-hour)
    hh: () => {
      const hour12 = date.getHours() % 12 || 12;
      return hour12.toString().padStart(2, '0');
    },
    h: () => (date.getHours() % 12 || 12).toString(),

    // Minute tokens
    mm: () => date.getMinutes().toString().padStart(2, '0'),
    m: () => date.getMinutes().toString(),

    // AM/PM tokens
    A: () => (date.getHours() >= 12 ? 'PM' : 'AM'),
    a: () => (date.getHours() >= 12 ? 'pm' : 'am'),
  };

  const tokenKeys = Object.keys(formatTokens).sort(
    (a, b) => b.length - a.length,
  );
  const tokenPattern = new RegExp(tokenKeys.join('|'), 'g');

  return format.replace(tokenPattern, match => formatTokens[match]());
}

/**
 * Converts a date string to a JavaScript Date object in local timezone
 *
 * Supports two formats:
 * - Date only: "YYYY-MM-DD" (e.g., "2024-03-15")
 * - Date with time: "YYYY-MM-DDTHH:MM" (e.g., "2024-03-15T14:30")
 *
 * @param {string} dateString - The date string to parse
 * @returns {Date} A Date object representing the parsed date in local timezone
 */
export function parseDateString(dateString: string): Date {
  if (dateString.includes('T')) {
    // Handle datetime strings (YYYY-MM-DDTHH:MM)
    const [datePart, timePart] = dateString.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hours, minutes] = timePart.split(':').map(Number);

    // Create date in local timezone
    return new Date(year, month - 1, day, hours, minutes);
  } else {
    // Handle date-only strings (YYYY-MM-DD)
    const [year, month, day] = dateString.split('-').map(Number);

    // Create date in local timezone (not UTC)
    return new Date(year, month - 1, day);
  }
}
