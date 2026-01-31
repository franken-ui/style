/**
 * @fileoverview
 * Input Date Component - A date/time picker with calendar and optional time selection.
 *
 * This component provides a user-friendly interface for selecting dates and times
 * with an integrated calendar picker, optional time input, and support for date
 * constraints. It extends BaseCalendarMixin and InputMixin to provide comprehensive
 * form integration, keyboard navigation, and accessibility features.
 *
 * Features:
 * - Calendar date picker with dropdown interface
 * - Optional time selection with 12h/24h clock formats
 * - Customizable date display format
 * - Date range validation (min/max dates)
 * - Marked and disabled dates support
 * - Full keyboard navigation and ARIA accessibility
 * - Headless design with flexible styling via cls/stl
 * - Comprehensive i18n support for labels and messages
 * - Form integration with hidden input
 * - Week start customization
 */
import { html, nothing, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { validateDate, formatDate } from '../helpers/date';
import { BaseCalendarMixin } from './shared/base-calendar';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

interface Cls extends Record<string, string> {
  container: string;
  button: string;
  'button-text': string;
  icon: string;
  dropdown: string;
  calendar: string;
  'time-wrapper': string;
  time: string;
}

interface Stl extends Record<string, string> {
  container: string;
  button: string;
  'button-text': string;
  icon: string;
  dropdown: string;
  calendar: string;
  'time-wrapper': string;
  time: string;
}

/**
 * A date input component with calendar picker and optional time selection.
 * Provides a user-friendly interface for date/time selection with full keyboard navigation.
 *
 * @element uk-input-date
 * @extends {BaseCalendarMixin(InputMixin(Base))}
 *
 * Features:
 * - Calendar date picker with dropdown
 * - Optional time selection with clock formats (12h/24h)
 * - Customizable date display format
 * - Date range validation (min/max)
 * - Marked and disabled dates support
 * - Full keyboard navigation and ARIA accessibility
 * - Headless design with flexible styling via cls/stl
 * - Comprehensive i18n support
 * - Form integration with hidden input
 *
 * @fires uk-input-date:change - Emitted when the date/time value changes
 *
 * @example
 * Basic usage:
 * ```html
 * <uk-input-date
 *   name="appointment"
 *   placeholder="Choose date"
 *   required>
 * </uk-input-date>
 * ```
 *
 * @example
 * With time selection:
 * ```html
 * <uk-input-date
 *   name="meeting"
 *   with-time
 *   clock="24h"
 *   display-format="MMM DD, YYYY"
 *   value="2025-01-15T14:30">
 * </uk-input-date>
 * ```
 *
 * @example
 * With date constraints and custom icons:
 * ```html
 * <uk-input-date
 *   min="2025-01-01"
 *   max="2025-12-31"
 *   disabled-dates="2025-01-15,2025-02-14"
 *   marked-dates="2025-01-20,2025-03-15">
 *   <template data-fn="icons">
 *     <svg data-key="calendar"><!-- custom icon --></svg>
 *   </template>
 * </uk-input-date>
 * ```
 *
 * @example
 * With configuration and i18n via script:
 * ```html
 * <uk-input-date>
 *   <script type="application/json">
 *   {
 *     "i18n": {
 *       "button-label": "Pick a date",
 *       "dialog-label": "Calendar picker",
 *       "placeholder": "DD/MM/YYYY"
 *     },
 *     "cls": {
 *       "button": "custom-date-button",
 *       "dropdown": "custom-dropdown"
 *     }
 *   }
 *   </script>
 * </uk-input-date>
 * ```
 */
@customElement('uk-input-date')
export class InputDate extends BaseCalendarMixin(InputMixin(Base)) {
  protected 'cls-default-element' = 'button';
  protected 'stl-default-element' = 'button';
  protected 'input-event' = 'uk-input-date:change';

  /**
   * Format string for displaying the selected date.
   * Supports standard date format tokens (MMMM, DD, YYYY, etc.).
   * Combined with clock format when time selection is enabled.
   *
   * @default "MMMM DD, YYYY"
   * @example
   * ```html
   * <uk-input-date display-format="MM/DD/YYYY"></uk-input-date>
   * <uk-input-date display-format="DD.MM.YYYY"></uk-input-date>
   * ```
   */
  @property({ type: String, attribute: 'display-format' })
  'display-format': string = 'MMMM DD, YYYY';

  /**
   * Enables optional time selection input below the calendar.
   * When enabled, the component displays uk-input-time alongside the calendar.
   *
   * @default false
   * @example
   * ```html
   * <uk-input-date with-time></uk-input-date>
   * ```
   */
  @property({ type: Boolean, attribute: 'with-time' })
  'with-time': boolean = false;

  /**
   * Clock format for time display and input.
   * Supports 12-hour format with AM/PM or 24-hour military time.
   *
   * @default "12h"
   * @example
   * ```html
   * <uk-input-date with-time clock="24h"></uk-input-date>
   * ```
   */
  @property({ type: String })
  clock: '12h' | '24h' = '12h';

  /**
   * Makes time selection mandatory when time input is enabled.
   * When true, the date cannot be confirmed without selecting a time.
   *
   * @default false
   * @example
   * ```html
   * <uk-input-date with-time require-time></uk-input-date>
   * ```
   */
  @property({ type: Boolean, attribute: 'require-time' })
  'require-time': boolean = false;

  /**
   * UIKit dropdown configuration string.
   * Controls dropdown behavior, animation, and positioning.
   *
   * @default "mode: click; animation: uk-animation-slide-top-small;"
   */
  @property({ type: String })
  drop: string = 'mode: click; animation: uk-animation-slide-top-small;';

  /**
   * Currently selected date in ISO format (YYYY-MM-DD).
   * Updated when user selects a date from the calendar.
   * @internal
   */
  @state()
  private $date: string | undefined;

  /**
   * Currently selected time in ISO format (HH:mm or HH:mm:ss).
   * Updated when user selects a time from the time input.
   * Only populated when with-time is enabled.
   * @internal
   */
  @state()
  private $time: string | undefined;

  @state()
  protected $cls: Cls = {
    container: '',
    button: '',
    'button-text': '',
    icon: '',
    dropdown: 'uk-datepicker-dropdown',
    calendar: '',
    'time-wrapper': 'uk-datepicker-time',
    time: '',
  };

  @state()
  protected $stl: Stl = {
    container: '',
    button: '',
    'button-text': '',
    icon: '',
    dropdown: '',
    calendar: '',
    'time-wrapper': '',
    time: '',
  };

  /**
   * Default internationalization strings for labels and accessibility.
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  private readonly defaultI18n = {
    'button-label': 'Select date',
    'dialog-label': 'Date picker',
    selected: 'selected',
    placeholder: 'Select a date',
    'placeholder-with-time': 'Select a date and time',
  };

  /**
   * Gets the current value as an ISO-formatted string.
   * Returns combined date and time if both are available,
   * date only if time is not enabled, or empty string if nothing is selected.
   *
   * @returns ISO format string: "YYYY-MM-DD" or "YYYY-MM-DDTHH:mm"
   */
  protected get $value(): string {
    if (this.$date && this.$time) {
      return `${this.$date}T${this.$time}`;
    }

    if (this.$date) {
      return this.$date;
    }

    return '';
  }

  /**
   * Gets the display text for the input button.
   * Shows formatted date/time if available, placeholder otherwise.
   * Automatically includes time format when with-time is enabled.
   *
   * @returns Formatted date string or placeholder text
   */
  protected get $text(): string {
    if (this.$value) {
      try {
        const dateValue = this.$value.includes('T')
          ? new Date(this.$value)
          : new Date(this.$value + 'T00:00:00');

        let displayFormat = this['display-format'];

        if (this['with-time'] && this.$time) {
          const timeFormat = this.clock === '12h' ? 'h:mm A' : 'HH:mm';

          displayFormat = `${this['display-format']} ${timeFormat}`;
        }

        return formatDate(dateValue, displayFormat, this.lang);
      } catch (error) {
        console.error('[uk-input-date] Failed to format date:', error);

        return this.$value;
      }
    }

    if (this.placeholder) {
      return this.placeholder;
    }

    return this.getI18nText(
      this['with-time'] ? 'placeholder-with-time' : 'placeholder',
      this.defaultI18n,
    );
  }

  /**
   * Lifecycle hook called when the component is inserted into the DOM.
   * Initializes parent mixins and component state.
   */
  connectedCallback(): void {
    super.connectedCallback();
  }

  /**
   * Lifecycle hook called after the component has rendered for the first time.
   * Sets up event listeners for calendar date changes and time input changes.
   * Initializes the dropdown and child components.
   *
   * @param _changedProperties - Properties changed during initialization
   */
  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated?.(_changedProperties);

    // Listen for calendar date selection changes
    this.renderRoot
      .querySelector('uk-calendar')
      ?.addEventListener('uk-calendar:change', (e: any) => {
        this.$date = e.detail.value;
      });

    // Listen for time input changes if time selection is enabled
    if (this['with-time']) {
      this.renderRoot
        .querySelector('uk-input-time')
        ?.addEventListener('uk-input-time:input', (e: any) => {
          this.$time = e.detail.value;
        });
    }
  }

  /**
   * Lifecycle hook called after properties have been updated.
   * Emits change events when date or time values are modified.
   *
   * @param changedProperties - Properties that changed in this update cycle
   */
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('$date') || changedProperties.has('$time')) {
      this.emit();
    }
  }

  /**
   * Initializes the component's value from the value attribute.
   * Parses ISO format strings and separates date and time components.
   * Validates the date format and handles errors gracefully.
   */
  protected initializeValue(): void {
    if (this.value) {
      try {
        validateDate(this.value);

        const hasTime = this.value.includes('T');

        if (!hasTime) {
          this.$date = this.value;
        } else {
          const [datePart, timePart] = this.value.split('T');
          this.$date = datePart;
          this.$time = timePart;
        }
      } catch (error) {
        console.error(
          '[uk-input-date] Failed to initialize date value:',
          error,
        );
      }
    }
  }

  /**
   * Gets the accessible label for the button.
   * Includes the selected date/time if available.
   *
   * @returns Button label with optional selected date information
   */
  private get buttonLabel(): string {
    const baseLabel = this.getI18nText('button-text', this.defaultI18n);

    if (this.$value) {
      return `${baseLabel}, ${this.getI18nText('selected', this.defaultI18n)}: ${this.$text}`;
    }

    return baseLabel;
  }

  /**
   * Renders the complete date picker component.
   * Includes the button, calendar dropdown, optional time input, and hidden form input.
   *
   * @returns The component template
   */
  render() {
    const ariaLabel = this.getI18nText('dialog-label', this.defaultI18n);

    return html`
      <div
        data-host-inner
        data-part="host-inner"
        class="${this.$cls.container}"
        style="${this.$stl.container}"
      >
        <div class="uk-position-relative">
          <button
            data-part="button"
            class="${this.$cls.button}"
            style="${this.$stl.button}"
            type="button"
            ?disabled=${this.disabled}
            aria-label="${this.buttonLabel}"
            aria-haspopup="dialog"
          >
            <span
              data-part="button-text"
              class="${this.$cls['button-text']}"
              style="${this.$stl['button-text']}"
            >
              ${this.$text}
            </span>
            <span
              data-part="icon"
              class="${this.$cls.icon}"
              style="${this.$stl.icon}"
            >
              ${this.$icons('calendar') || nothing}
            </span>
          </button>

          <div
            data-part="dropdown"
            class="${this.$cls.dropdown} uk-drop"
            style="${this.$stl.dropdown}"
            data-uk-dropdown="${this.drop}"
            role="dialog"
            aria-label="${ariaLabel}"
          >
            <uk-calendar
              data-part="calendar"
              class="${this.$cls.calendar}"
              style="${this.$stl.calendar}"
              .starts-with=${this['starts-with']}
              .disabled-dates=${this['disabled-dates']}
              .marked-dates=${this['marked-dates']}
              .i18n=${this.i18n}
              .view-date=${this['view-date']}
              .min=${this.min}
              .max=${this.max}
              .value=${this.$date || ''}
              ?today=${this.today}
              ?jumpable=${this.jumpable}
              .weekday-format=${this['weekday-format']}
              .lang=${this.lang}
            ></uk-calendar>

            ${this.renderTimeInput()}
          </div>
        </div>

        ${this.renderHidden()}
      </div>
    `;
  }

  /**
   * Renders the optional time input section.
   * Only included in the template when with-time property is true.
   * Positioned below the calendar in the dropdown.
   *
   * @returns The time input template or nothing
   */
  private renderTimeInput() {
    if (!this['with-time']) {
      return nothing;
    }

    return html`
      <div
        data-part="time-wrapper"
        class="${this.$cls['time-wrapper']}"
        style="${this.$stl['time-wrapper']}"
      >
        <uk-input-time
          data-part="time"
          class="${this.$cls['time']}"
          style="${this.$stl['time']}"
          ?required=${this['require-time']}
          .i18n=${this.i18n}
          .value=${this.$time || ''}
          .clock=${this.clock}
          .lang=${this.lang}
          .now=${this.today}
        ></uk-input-time>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-input-date': InputDate;
  }
}
