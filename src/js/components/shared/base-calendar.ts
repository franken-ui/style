import { property } from 'lit/decorators.js';
import { html } from 'lit';
import { validateDate } from '../../helpers/date';
import type { InputMixin } from './input';

/**
 * Type helper for constructor functions (supports abstract classes)
 */
type Constructor<T = {}> = abstract new (...args: any[]) => T;

/**
 * Mixin that provides calendar-related logic and properties.
 *
 * This mixin is intended to be applied to a class that already includes the
 * InputMixin. It provides reactive properties (Lit @property) for calendar
 * configuration and a set of utility methods for UTC-safe date handling,
 * parsing, validation, and icon rendering.
 *
 * @template TBase - Constructor type of the base class that extends the InputMixin.
 * @param BaseClass - The base class to extend with calendar functionality.
 * @returns A new class that extends BaseClass with calendar features.
 */
export const BaseCalendarMixin = <
  TBase extends Constructor<InstanceType<ReturnType<typeof InputMixin>>>,
>(
  BaseClass: TBase,
) => {
  /**
   * Abstract base class that houses shared calendar behavior.
   *
   * Implementers should provide initializeValue() to set the component's
   * initial value and may override $icons to supply custom icons.
   */
  abstract class BaseCalendar extends BaseClass {
    /**
     * If true, includes "today" control in the UI.
     */
    @property({ type: Boolean })
    today: boolean = false;

    /**
     * If true, enables jumping between higher-level views (e.g. month/year).
     */
    @property({ type: Boolean })
    jumpable: boolean = false;

    /**
     * Index of the first weekday (0 = Sunday).
     */
    @property({ type: Number })
    'starts-with' = 0;

    /**
     * Comma-separated list of disabled dates. Parsed by parseDates().
     */
    @property({ type: String })
    'disabled-dates': string = '';

    /**
     * Comma-separated list of marked/highlighted dates. Parsed by parseDates().
     */
    @property({ type: String })
    'marked-dates': string = '';

    /**
     * ISO date (YYYY-MM-DD) used as the initial view date for the calendar.
     */
    @property({ type: String })
    'view-date': string = new Date().toISOString().split('T')[0];

    /**
     * Minimum selectable ISO date (inclusive).
     */
    @property({ type: String })
    min: string = '';

    /**
     * Maximum selectable ISO date (exclusive).
     */
    @property({ type: String })
    max: string = '';

    /**
     * Format for weekday labels (long | short | narrow).
     */
    @property({ type: String })
    'weekday-format': 'long' | 'short' | 'narrow' = 'short';

    /**
     * Locale string used when formatting month/day names (e.g. "en-US").
     */
    @property({ type: String })
    lang: string = 'en-us';

    protected isDirty = false;

    /**
     * View date represented as a Date instance in UTC (based on 'view-date').
     *
     * @returns Date in UTC corresponding to the component's view-date property.
     */
    protected get $viewDate(): Date {
      const [year, month, day] = this['view-date'].split('-').map(Number);

      return this.createUTCDate(year, month - 1, day);
    }

    /**
     * Create a Date instance at midnight UTC for the provided Y/M/D.
     *
     * @param year - Full year (e.g. 2025)
     * @param month - Zero-based month index (0 = Jan)
     * @param day - Day of month (1-31)
     * @returns Date set to UTC midnight for the given components.
     */
    protected createUTCDate(year: number, month: number, day: number): Date {
      return new Date(Date.UTC(year, month, day));
    }

    /**
     * Convert a Date to a UTC date at midnight (drop time and timezone).
     *
     * @param date - Date to normalize to UTC midnight.
     * @returns New Date representing the same calendar day in UTC.
     */
    protected dateToUTC(date: Date): Date {
      return this.createUTCDate(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      );
    }

    /**
     * Get today's date normalized to UTC midnight.
     *
     * @returns Date representing today at UTC midnight.
     */
    protected getTodayUTC(): Date {
      return this.dateToUTC(new Date());
    }

    /**
     * Alias to dateToUTC; kept for semantic clarity in call sites.
     *
     * @param date - Date to normalize.
     * @returns Date at UTC midnight.
     */
    protected getUTCDate(date: Date): Date {
      return this.dateToUTC(date);
    }

    /**
     * Check whether the provided ISO date string is within the configured min/max range.
     *
     * - If neither min nor max is set, all dates are considered in range.
     * - min is inclusive.
     * - max is treated as exclusive (the implementation adds one day to max then uses >=).
     *
     * @param date - ISO date string (parsable by Date).
     * @returns true if date is in range, false otherwise.
     */
    protected isDateInRange(date: string): boolean {
      if (!this.min && !this.max) {
        return true;
      }

      const current = new Date(date);

      if (this.min) {
        const minDate = validateDate(this.min);
        if (current < minDate) {
          return false;
        }
      }

      if (this.max) {
        const maxDate = validateDate(this.max);
        maxDate.setDate(maxDate.getDate() + 1);
        if (current >= maxDate) {
          return false;
        }
      }
      return true;
    }

    /**
     * Parse a comma-separated list of dates into an array of ISO date strings (YYYY-MM-DD).
     *
     * Ignores empty entries and logs a console.warn for invalid formats.
     *
     * @param dates - Comma-separated date strings.
     * @returns Array of validated ISO date strings.
     */
    protected parseDates(dates: string): string[] {
      if (!dates) {
        return [];
      }

      return dates
        .split(',')
        .map(d => d.trim())
        .filter(Boolean)
        .map(date => {
          try {
            return validateDate(date).toISOString().slice(0, 10);
          } catch (e) {
            console.warn(
              `[fr-calendar] Invalid date format in list: "${date}".`,
            );

            return '';
          }
        })
        .filter(Boolean);
    }

    /**
     * Extract year/month/day and localized names from a Date (UTC).
     *
     * @param date - Date instance (interpreted as UTC).
     * @returns Object containing numeric components, localized month/day names and ISO string.
     */
    protected getTimestampComponent(date: Date): {
      year: number;
      month: number;
      monthName: string;
      day: number;
      dayName: string;
      ISOString: string;
    } {
      const locale = this.lang || undefined;

      return {
        year: date.getUTCFullYear(),
        month: date.getUTCMonth() + 1,
        monthName: date.toLocaleDateString(locale, {
          month: 'long',
          timeZone: 'UTC',
        }),
        day: date.getUTCDate(),
        dayName: date.toLocaleDateString(locale, {
          weekday: 'long',
          timeZone: 'UTC',
        }),
        ISOString: date.toISOString(),
      };
    }

    /**
     * Internal icon repository for the component.
     *
     * Delegates to super.$icons first so host classes can override icons.
     *
     * @param icon - The name of the icon to retrieve.
     * @returns A Lit HTML template containing the requested SVG icon or undefined.
     */
    protected $icons(icon: string) {
      const customIcon = super.$icons(icon);
      if (customIcon) return customIcon;

      switch (icon) {
        case 'chevron-left':
          return html`
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          `;
        case 'chevron-right':
          return html`
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          `;
        case 'calendar':
          return html`
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
          `;
      }
    }

    /**
     * Implementing classes must set the initial value for the calendar input.
     * This method is intentionally abstract to force implementation.
     */
    protected abstract initializeValue(): void;
  }

  return BaseCalendar;
};
