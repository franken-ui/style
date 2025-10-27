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
 * Designed to extend a class already mixed with InputMixin(Base).
 */
export const BaseCalendarMixin = <
  TBase extends Constructor<InstanceType<ReturnType<typeof InputMixin>>>,
>(
  BaseClass: TBase,
) => {
  abstract class BaseCalendar extends BaseClass {
    @property({ type: Boolean })
    today: boolean = false;

    @property({ type: Boolean })
    jumpable: boolean = false;

    @property({ type: Number })
    'starts-with' = 0;

    @property({ type: String })
    'disabled-dates': string = '';

    @property({ type: String })
    'marked-dates': string = '';

    @property({ type: String })
    'view-date': string = new Date().toISOString().split('T')[0];

    @property({ type: String })
    min: string = '';

    @property({ type: String })
    max: string = '';

    @property({ type: String })
    'weekday-format': 'long' | 'short' | 'narrow' = 'short';

    @property({ type: String })
    lang: string = '';

    protected isDirty = false;

    protected get $viewDate(): Date {
      const [year, month, day] = this['view-date'].split('-').map(Number);

      return this.createUTCDate(year, month - 1, day);
    }

    protected createUTCDate(year: number, month: number, day: number): Date {
      return new Date(Date.UTC(year, month, day));
    }

    protected dateToUTC(date: Date): Date {
      return this.createUTCDate(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
      );
    }

    protected getTodayUTC(): Date {
      return this.dateToUTC(new Date());
    }

    protected getUTCDate(date: Date): Date {
      return this.dateToUTC(date);
    }

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
     * @param icon - The name of the icon to retrieve.
     * @returns A Lit HTML template containing the requested SVG icon.
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

    protected abstract initializeValue(): void;
  }

  return BaseCalendar;
};
