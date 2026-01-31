/**
 * @fileoverview Calendar Web Component
 *
 * A fully-featured, accessible calendar component built with Lit that provides:
 * - Interactive date selection with keyboard navigation
 * - Month/year navigation with optional jumper controls
 * - Support for marked and disabled dates
 * - Comprehensive i18n support
 * - Full ARIA compliance for accessibility
 * - Customizable styling via CSS classes and inline styles
 */
import { type PropertyValues, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { validateDate } from '../helpers/date';
import { BaseCalendarMixin } from './shared/base-calendar';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

/**
 * CSS class names interface for all calendar elements.
 * Maps semantic names to their corresponding CSS class strings.
 * @interface Cls
 */
interface Cls extends Record<string, string> {
  'host-inner': string;
  header: string;
  'previous-button': string;
  'next-button': string;
  title: string;
  jumper: string;
  'month-select': string;
  'year-input': string;
  grid: string;
  weekdays: string;
  weekday: string;
  week: string;
  day: string;
  'day-button': string;
  'jumper-month': string;
  'jumper-year': string;
  'jumper-button': string;
  'day-outside-month': string;
  'day-selected': string;
  'day-today': string;
  'day-marked': string;
  'button-outside-month': string;
  'button-selected': string;
  'button-today': string;
  'button-marked': string;
}

/**
 * Inline style properties interface for all calendar elements.
 * Maps semantic names to their corresponding inline CSS strings.
 * @interface Stl
 */
interface Stl extends Record<string, string> {
  'host-inner': string;
  header: string;
  'previous-button': string;
  'next-button': string;
  title: string;
  jumper: string;
  'month-select': string;
  'year-input': string;
  grid: string;
  weekdays: string;
  weekday: string;
  week: string;
  day: string;
  'day-button': string;
  'jumper-month': string;
  'jumper-year': string;
  'jumper-button': string;
  'day-outside-month': string;
  'day-selected': string;
  'day-today': string;
  'day-marked': string;
  'button-outside-month': string;
  'button-selected': string;
  'button-today': string;
  'button-marked': string;
}

/**
 * Represents a single day in the calendar grid.
 * @interface Day
 * @property {number} date - The day of the month (1-31)
 * @property {'prev' | 'current' | 'next'} month - Whether day belongs to previous, current, or next month
 * @property {boolean} isToday - Whether this date is today's date
 * @property {boolean} isDisabled - Whether the date is disabled for selection
 * @property {boolean} isMarked - Whether the date has been marked as special
 * @property {string} ISOString - Full ISO 8601 date string for the day
 */
interface Day {
  date: number;
  month: 'prev' | 'current' | 'next';
  isToday: boolean;
  isDisabled: boolean;
  isMarked: boolean;
  ISOString: string;
}

/**
 * Calendar Web Component - A comprehensive, accessible calendar widget
 *
 * Features:
 * - Full keyboard navigation (arrow keys, Home, End, Page Up/Down)
 * - Mouse and touch support for date selection
 * - Customizable marked and disabled dates
 * - Optional quick-jump month/year selector
 * - Automatic focus management
 * - WCAG 2.1 AA accessibility compliance
 *
 * @element uk-calendar
 * @extends BaseCalendarMixin
 * @extends InputMixin
 * @extends Base
 * @fires uk-calendar:change - Emitted when a date is selected
 */
@customElement('uk-calendar')
export class Calendar extends BaseCalendarMixin(InputMixin(Base)) {
  /** Default element for CSS class application */
  protected 'cls-default-element' = 'host-inner';

  /** Default element for inline style application */
  protected 'stl-default-element' = 'host-inner';

  /** Event name emitted when calendar selection changes */
  protected 'input-event' = 'uk-calendar:change';

  /**
   * Currently active/selected date in ISO format.
   * Updates reactively and manages focus automatically.
   * @private
   */
  @state()
  private $active: string | undefined;

  /**
   * Default CSS class names for all calendar elements.
   * Structured by semantic purpose for easy customization.
   * @protected
   */
  @state()
  protected $cls: Cls = {
    'host-inner': 'uk-cal',
    header: 'uk-cal-header',
    'previous-button':
      'uk-button uk-button-secondary uk-button-icon uk-button-small',
    'next-button':
      'uk-button uk-button-secondary uk-button-icon uk-button-small',
    title: 'uk-cal-title',
    jumper: 'uk-cal-jumper',
    'month-select': 'uk-select uk-form-small',
    'year-input': 'uk-input uk-form-small',
    grid: '',
    weekdays: '',
    weekday: '',
    week: '',
    day: '',
    'day-button': '',
    'jumper-month': 'uk-cal-jumper-month',
    'jumper-year': 'uk-cal-jumper-year',
    'jumper-button':
      'uk-button uk-button-secondary uk-button-icon uk-button-small',
    'day-outside-month': 'uk-cal-oom',
    'day-selected': 'uk-active',
    'day-today': 'uk-nothing',
    'day-marked': 'uk-cal-marked',
    'button-outside-month': 'uk-nothing',
    'button-selected': 'uk-nothing',
    'button-today': 'uk-nothing',
    'button-marked': 'uk-nothing',
  };

  /**
   * Custom inline styles for all calendar elements.
   * Allows component consumers to inject custom styles alongside classes.
   * @protected
   */
  @state()
  protected $stl: Stl = {
    'host-inner': '',
    header: '',
    'previous-button': '',
    'next-button': '',
    title: '',
    jumper: '',
    'month-select': '',
    'year-input': '',
    grid: '',
    weekdays: '',
    weekday: '',
    week: '',
    day: '',
    'day-button': '',
    'jumper-month': '',
    'jumper-year': '',
    'jumper-button': '',
    'day-outside-month': '',
    'day-selected': '',
    'day-today': '',
    'day-marked': '',
    'button-outside-month': '',
    'button-selected': '',
    'button-today': '',
    'button-marked': '',
  };

  /**
   * Default internationalization strings for labels and accessibility.
   * These can be overridden via the i18n attribute or config script.
   * Keys correspond to common calendar UI labels.
   * @private
   * @readonly
   */
  private readonly defaultI18n = {
    'prev-month': 'Previous month',
    'next-month': 'Next month',
    'prev-year': 'Previous year',
    'next-year': 'Next year',
    'select-month': 'Select month',
    'select-year': 'Select year',
  };

  /**
   * Gets the current selected date value as a date string (YYYY-MM-DD format).
   * Returns empty string if no date is selected.
   * @protected
   * @returns {string} ISO date string or empty string
   */
  protected get $value(): string {
    return this.$active ? this.$active.slice(0, 10) : '';
  }

  /**
   * Gets the display text for the input field.
   * Currently returns empty as calendar uses date buttons for display.
   * @protected
   * @returns {string} Empty string
   */
  protected get $text(): string {
    return '';
  }

  /**
   * Initializes the calendar's active date from component attributes.
   * Attempts to parse and validate the `value` attribute or uses today's date.
   * Sets the view to the initial date and handles parsing errors gracefully.
   * @protected
   */
  protected initializeValue(): void {
    if (this.value) {
      try {
        // Validate and parse the provided date string
        const date = validateDate(this.value);
        this.$active = date.toISOString();
        this['view-date'] = date.toISOString().slice(0, 10);
      } catch (e) {
        // Log error but continue; calendar will show current month
        console.error(
          `[uk-calendar] Invalid date format for value: "${this.value}".`,
          e,
        );
      }
    } else if (this.today) {
      // If no value but today attribute is set, use today's date
      this.$active = this.getTodayUTC().toISOString();
    }
  }

  /**
   * Lifecycle hook: Component is added to the DOM.
   * Registers keyboard event listener for navigation.
   * @protected
   */
  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this.navigate);
  }

  /**
   * Lifecycle hook: Component is removed from the DOM.
   * Cleans up keyboard event listener to prevent memory leaks.
   * @protected
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.navigate);
  }

  /**
   * Lifecycle hook: Component state has been updated.
   * Manages focus restoration and emits change events.
   * When $active changes, focuses the newly selected button and emits the change event.
   * @protected
   * @param {PropertyValues} changedProperties - Map of changed properties
   */
  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('$active')) {
      this.updateComplete.then(() => {
        // Find and focus the button corresponding to the active date
        const button = this.renderRoot.querySelector<HTMLButtonElement>(
          `button[data-iso="${this.$active}"]`,
        );

        // Only focus if component has been interacted with
        if (button && this.isDirty) {
          button.focus();
        }
      });
      // Notify parent/listeners of the selection change
      this.emit();
    }
  }

  /**
   * Handles keyboard navigation within the calendar grid.
   * Supports arrow keys for directional movement, Home/End for row navigation,
   * and PageUp/PageDown for month/year navigation with optional Ctrl/Cmd modifier.
   * Implements proper focus management and prevents default browser behaviors.
   *
   * Key mappings:
   * - ArrowLeft/Right: Move between days in a row
   * - ArrowUp/Down: Move between days in a column
   * - Home/End: Jump to first/last day in row
   * - PageUp: Previous month (or year with Ctrl/Cmd)
   * - PageDown: Next month (or year with Ctrl/Cmd)
   * - Enter/Space: Select current day
   *
   * @private
   * @param {KeyboardEvent} event - The keyboard event
   */
  private navigate = (event: KeyboardEvent): void => {
    const currentButton = event.target as HTMLButtonElement;
    // Only handle navigation if a day button is focused
    if (!currentButton?.matches('button[data-iso]')) {
      return;
    }

    // Get all available day buttons for navigation
    const buttons = Array.from(
      this.querySelectorAll<HTMLButtonElement>('button[data-iso]'),
    );
    const currentIndex = buttons.indexOf(currentButton);
    const grid = this.getGridPosition(currentButton);
    if (!grid) return;

    const { rowIndex, colIndex } = grid;
    let nextButton: HTMLButtonElement | undefined;

    /**
     * Map of keyboard keys to their navigation handlers.
     * Each handler returns the next button to focus, or undefined for programmatic nav.
     */
    const navigationMap: Record<string, () => HTMLButtonElement | undefined> = {
      // Horizontal navigation within a row
      ArrowLeft: () => this.findNextEnabled(buttons, currentIndex - 1, -1),
      ArrowRight: () => this.findNextEnabled(buttons, currentIndex + 1, 1),
      // Vertical navigation within a column
      ArrowUp: () => this.getNextEnabledInColumn(rowIndex - 1, colIndex, -1),
      ArrowDown: () => this.getNextEnabledInColumn(rowIndex + 1, colIndex, 1),
      // Row-level navigation
      Home: () => this.getRowFirstEnabledButton(rowIndex),
      End: () => this.getRowLastEnabledButton(rowIndex),
      // Month/Year navigation with optional Ctrl/Cmd modifier
      PageUp:
        event.ctrlKey || event.metaKey
          ? () => {
              this.navigateYear('prev');
              return undefined;
            }
          : () => {
              this.navigateMonth('prev');
              return undefined;
            },
      PageDown:
        event.ctrlKey || event.metaKey
          ? () => {
              this.navigateYear('next');
              return undefined;
            }
          : () => {
              this.navigateMonth('next');
              return undefined;
            },
    };

    // Execute the appropriate navigation handler
    if (navigationMap[event.key]) {
      event.preventDefault();
      const button = navigationMap[event.key]();
      if (button) {
        nextButton = button;
      }
    } else if (event.key === 'Enter' || event.key === ' ') {
      // Selection keys activate the day button
      event.preventDefault();
      currentButton.click();
      return;
    }

    // Move focus to the next button if one was found
    nextButton?.focus();
  };

  /**
   * Finds the next enabled button starting from a given index.
   * Searches linearly in the given direction until an enabled button is found.
   * Used for horizontal navigation within the day grid.
   *
   * @private
   * @param {HTMLButtonElement[]} buttons - Array of all day buttons
   * @param {number} start - Starting index for search
   * @param {number} increment - Direction: 1 for forward, -1 for backward
   * @returns {HTMLButtonElement | undefined} Next enabled button or undefined if none found
   */
  private findNextEnabled(
    buttons: HTMLButtonElement[],
    start: number,
    increment: number,
  ): HTMLButtonElement | undefined {
    for (let i = start; i >= 0 && i < buttons.length; i += increment) {
      if (!buttons[i].disabled) return buttons[i];
    }
    return undefined;
  }

  /**
   * Finds the next enabled button in a specific column above or below.
   * Searches vertically through calendar rows to find an enabled button in the target column.
   * Skips disabled buttons and handles edge cases gracefully.
   *
   * @private
   * @param {number} startRow - Row index to begin search
   * @param {number} colIndex - Column index to search within
   * @param {number} increment - Direction: 1 for down, -1 for up
   * @returns {HTMLButtonElement | undefined} Next enabled button in column or undefined
   */
  private getNextEnabledInColumn(
    startRow: number,
    colIndex: number,
    increment: number,
  ): HTMLButtonElement | undefined {
    const rows = Array.from(this.querySelectorAll('tr'));
    for (let i = startRow; i >= 0 && i < rows.length; i += increment) {
      const button =
        rows[i]?.children[colIndex]?.querySelector<HTMLButtonElement>(
          'button[data-iso]',
        );
      if (button && !button.disabled) return button;
    }
    return undefined;
  }

  /**
   * Finds the first enabled button in a given row.
   * Used for Home key navigation to jump to row start.
   *
   * @private
   * @param {number} rowIndex - The row index to search
   * @returns {HTMLButtonElement | undefined} First enabled button in row or undefined
   */
  private getRowFirstEnabledButton(
    rowIndex: number,
  ): HTMLButtonElement | undefined {
    const row = this.querySelectorAll('tr')[rowIndex];
    return Array.from(
      row?.querySelectorAll<HTMLButtonElement>('button[data-iso]') || [],
    ).find(b => !b.disabled);
  }

  /**
   * Finds the last enabled button in a given row.
   * Used for End key navigation to jump to row end.
   *
   * @private
   * @param {number} rowIndex - The row index to search
   * @returns {HTMLButtonElement | undefined} Last enabled button in row or undefined
   */
  private getRowLastEnabledButton(
    rowIndex: number,
  ): HTMLButtonElement | undefined {
    const row = this.querySelectorAll('tr')[rowIndex];
    return Array.from(
      row?.querySelectorAll<HTMLButtonElement>('button[data-iso]') || [],
    )
      .reverse()
      .find(b => !b.disabled);
  }

  /**
   * Determines the grid position (row and column indices) of a button.
   * Traverses the DOM to find the containing row and cell for position calculation.
   *
   * @private
   * @param {HTMLButtonElement} button - The button element to locate
   * @returns {Object | null} Object with rowIndex and colIndex, or null if not found
   */
  private getGridPosition(button: HTMLButtonElement) {
    const dayCell = button.closest('td');
    const weekRow = dayCell?.closest('tr');
    if (!weekRow || !dayCell) return null;

    return {
      rowIndex: Array.from(this.querySelectorAll('tr')).indexOf(weekRow),
      colIndex: Array.from(weekRow.children).indexOf(dayCell),
    };
  }

  /**
   * Selects a date and updates the calendar view.
   * Sets the active date and updates the view-date if selecting from adjacent months.
   * Marks the component as dirty to enable focus management on next update.
   *
   * @private
   * @param {Day} day - The day object to select
   */
  private select(day: Day): void {
    this.$active = day.ISOString;
    // If selecting from previous or next month, scroll calendar to that month
    if (day.month !== 'current') {
      this['view-date'] = day.ISOString.slice(0, 10);
    }
    // Mark as dirty to enable automatic focus on the selected button
    if (!this.isDirty) {
      this.isDirty = true;
    }
  }

  /**
   * Navigates to the previous or next year while maintaining month and day.
   * Handles year transitions by parsing and reconstructing the view-date.
   *
   * @private
   * @param {'prev' | 'next'} direction - Direction to navigate (previous or next year)
   */
  private navigateYear(direction: 'prev' | 'next') {
    const [year, month, day] = this['view-date'].split('-');
    const newYear =
      direction === 'prev' ? parseInt(year) - 1 : parseInt(year) + 1;
    this['view-date'] = `${newYear}-${month}-${day}`;
  }

  /**
   * Navigates to the previous or next month with proper year wraparound.
   * Handles month boundaries (December to January, January to December).
   * Resets day to 1 to avoid invalid dates in months with fewer days.
   *
   * @private
   * @param {'prev' | 'next'} direction - Direction to navigate (previous or next month)
   */
  private navigateMonth(direction: 'prev' | 'next') {
    const [year, month] = this['view-date'].split('-').map(Number);

    let newMonth = month;
    let newYear = year;

    if (direction === 'prev') {
      // Handle January -> December transition
      if (month === 1) {
        newMonth = 12;
        newYear -= 1;
      } else {
        newMonth -= 1;
      }
    } else {
      // Handle December -> January transition
      if (month === 12) {
        newMonth = 1;
        newYear += 1;
      } else {
        newMonth += 1;
      }
    }

    this['view-date'] = `${newYear}-${newMonth.toString().padStart(2, '0')}-01`;
  }

  /**
   * Changes the displayed month while maintaining the current year.
   * Converts zero-based month index to 1-based format and resets day to 1.
   * Used by the month select dropdown in the jumper UI.
   *
   * @private
   * @param {number} month - Zero-based month index (0-11)
   */
  private selectMonth(month: number) {
    const [year] = this['view-date'].split('-');
    this['view-date'] = `${year}-${(month + 1).toString().padStart(2, '0')}-01`;
  }

  /**
   * Sets the displayed year to the provided value.
   * Validates that the input is a 4-digit number before updating.
   * Preserves the current month and day when changing years.
   *
   * @private
   * @param {string} year - Year value as string (must be 4 digits)
   */
  private setYear(year: string) {
    if (/^\d{4}$/.test(year)) {
      const [, month, day] = this['view-date'].split('-');
      this['view-date'] = `${year}-${month}-${day}`;
    }
  }

  /**
   * Generates localized weekday names for the calendar header.
   * Respects the component's configured start-of-week and language/locale.
   * Returns an array of 7 abbreviated weekday names in order.
   *
   * @private
   * @returns {string[]} Array of localized weekday names (Sunday-Saturday or locale equivalent)
   */
  private get weekdays(): string[] {
    const locale = this.lang || undefined;
    const weekdays: string[] = [];

    // Generate 7 days starting from configured start-of-week
    for (let i = 0; i < 7; i++) {
      const dayIndex = (this['starts-with'] + i) % 7;
      const date = this.createUTCDate(2023, 0, 1 + dayIndex);
      weekdays.push(
        date.toLocaleDateString(locale, {
          weekday: this['weekday-format'],
          timeZone: 'UTC',
        }),
      );
    }
    return weekdays;
  }

  /**
   * Generates the complete calendar grid for the current view month.
   * Returns a 6-week x 7-day array with Day objects for each cell.
   * Includes days from previous/next months to fill the grid completely.
   *
   * Calculation process:
   * 1. Parse current view-date to get year and month
   * 2. Calculate total days needed from previous month
   * 3. Build 6-week grid with proper month transitions
   * 4. Parse marked and disabled dates for filtering
   * 5. Populate each cell with Day metadata
   *
   * @private
   * @returns {Day[][]} 2D array representing 6 weeks of days
   */
  private get calendar(): Day[][] {
    // Parse the current view date
    const [year, month] = this['view-date'].split('-').map(Number);
    const todayISO = this.getTodayUTC().toISOString().slice(0, 10);

    // Parse special date lists
    const markedDates = this.parseDates(this['marked-dates']);
    const disabledDatesSet = new Set(this.parseDates(this['disabled-dates']));

    // Calculate days in this month and previous month
    const firstDayOfMonth = this.createUTCDate(year, month - 1, 1);
    const daysInMonth = this.createUTCDate(year, month, 0).getUTCDate();
    const daysInPrevMonth = this.createUTCDate(year, month - 1, 0).getUTCDate();

    // Calculate how many cells from previous month to show
    let startingDay =
      (firstDayOfMonth.getUTCDay() - this['starts-with'] + 7) % 7;

    // Initialize grid and day counters
    const grid: Day[][] = [];
    let currentMonthDay = 1;
    let prevMonthDay = daysInPrevMonth - startingDay + 1;
    let nextMonthDay = 1;

    // Build 6 weeks of calendar grid
    for (let week = 0; week < 6; week++) {
      const weekDays: Day[] = [];

      // Build each day in the week
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        let date: Date;
        let dayNumber: number;
        let monthType: 'prev' | 'current' | 'next';

        // Determine which month's day this cell represents
        if (week === 0 && dayOfWeek < startingDay) {
          // Days from previous month in first week
          date = this.createUTCDate(year, month - 2, prevMonthDay);
          dayNumber = prevMonthDay;
          monthType = 'prev';
          prevMonthDay++;
        } else if (currentMonthDay > daysInMonth) {
          // Days from next month when current month is exhausted
          date = this.createUTCDate(year, month, nextMonthDay);
          dayNumber = nextMonthDay;
          monthType = 'next';
          nextMonthDay++;
        } else {
          // Days from current month
          date = this.createUTCDate(year, month - 1, currentMonthDay);
          dayNumber = currentMonthDay;
          monthType = 'current';
          currentMonthDay++;
        }

        // Create Day object with computed metadata
        const ISOString = date.toISOString();
        const dateStr = ISOString.slice(0, 10);

        weekDays.push({
          date: dayNumber,
          month: monthType,
          isToday: dateStr === todayISO,
          isDisabled:
            disabledDatesSet.has(dateStr) || !this.isDateInRange(ISOString),
          isMarked: markedDates.includes(dateStr),
          ISOString,
        });
      }

      grid.push(weekDays);

      // Stop after 4 complete weeks if current month has ended
      if (currentMonthDay > daysInMonth && week >= 4) {
        break;
      }
    }

    return grid;
  }

  /**
   * Main render method: produces the complete calendar DOM.
   * Includes header with navigation, grid with weekday/day cells, and hidden input.
   *
   * Structure:
   * - Host container with accessibility attributes
   * - Header with prev/next buttons or month/year jumpers
   * - Table grid with semantic role for screen readers
   * - Weekday header row
   * - Calendar day rows
   * - Hidden input for form integration
   *
   * @returns {TemplateResult} Lit HTML template
   */
  render() {
    return html`
      <div
        data-host-inner
        data-part="host-inner"
        class=${this.$cls['host-inner']}
        style=${this.$stl['host-inner']}
        role="application"
        aria-label="Calendar"
      >
        ${this.renderHeader()}
        <table
          class=${this.$cls['grid']}
          style=${this.$stl['grid']}
          role="grid"
        >
          <thead>
            <tr
              class=${this.$cls['weekdays']}
              style=${this.$stl['weekdays']}
              role="row"
            >
              ${repeat(
                this.weekdays,
                day => day,
                day =>
                  html`<th
                    data-part="weekday"
                    class=${this.$cls['weekday']}
                    style=${this.$stl['weekday']}
                    role="columnheader"
                    scope="col"
                  >
                    ${day}
                  </th>`,
              )}
            </tr>
          </thead>
          <tbody>
            ${repeat(
              this.calendar,
              week => week[0].ISOString,
              week => this.renderWeek(week),
            )}
          </tbody>
        </table>
        ${this.renderHidden()}
      </div>
    `;
  }

  /**
   * Renders the calendar header with navigation controls.
   * Shows either simple prev/next buttons or the jumper with month/year selectors.
   * Conditionally renders based on the `jumpable` attribute.
   *
   * Features:
   * - Month/year title display
   * - Previous/next month navigation buttons with labels
   * - Chevron icons from the icon system
   * - Proper ARIA labels for accessibility
   *
   * @private
   * @returns {TemplateResult} Header HTML template
   */
  private renderHeader() {
    const { year, monthName } = this.getTimestampComponent(this.$viewDate);
    const prevMonthLabel = this.getI18nText('prev-month', this.defaultI18n);
    const nextMonthLabel = this.getI18nText('next-month', this.defaultI18n);

    return html`
      <div
        data-part="header"
        class=${this.$cls['header']}
        style=${this.$stl['header']}
      >
        ${this.jumpable
          ? nothing
          : html`
              <button
                data-part="previous-button"
                class=${this.$cls['previous-button']}
                style=${this.$stl['previous-button']}
                @click=${() => this.navigateMonth('prev')}
                type="button"
                aria-label=${prevMonthLabel}
              >
                ${this.$icons('chevron-left')}
              </button>
            `}

        <div
          data-part="title"
          class=${this.$cls['title']}
          style=${this.$stl['title']}
        >
          ${this.jumpable
            ? this.renderJumper()
            : html`<span>${monthName} ${year}</span>`}
        </div>

        ${this.jumpable
          ? nothing
          : html`
              <button
                data-part="next-button"
                class=${this.$cls['next-button']}
                style=${this.$stl['next-button']}
                @click=${() => this.navigateMonth('next')}
                type="button"
                aria-label=${nextMonthLabel}
              >
                ${this.$icons('chevron-right')}
              </button>
            `}
      </div>
    `;
  }

  /**
   * Renders the interactive month/year jumper UI.
   * Provides dropdown for months and input field for year with increment buttons.
   * Renders only when `jumpable` attribute is true.
   *
   * Components:
   * - Month selector with 12 abbreviated month names
   * - Year input field with next/prev year buttons
   * - All with proper ARIA labels and i18n support
   *
   * @private
   * @returns {TemplateResult} Jumper HTML template
   */
  private renderJumper() {
    const { year, month } = this.getTimestampComponent(this.$viewDate);
    const locale = this.lang || undefined;

    // Generate localized month names
    const months = Array.from({ length: 12 }, (_, i) => {
      const date = this.createUTCDate(2000, i, 15);
      return date.toLocaleDateString(locale, {
        month: 'long',
        timeZone: 'UTC',
      });
    });

    // Get i18n labels for all buttons and selects
    const prevMonthLabel = this.getI18nText('prev-month', this.defaultI18n);
    const nextMonthLabel = this.getI18nText('next-month', this.defaultI18n);
    const prevYearLabel = this.getI18nText('prev-year', this.defaultI18n);
    const nextYearLabel = this.getI18nText('next-year', this.defaultI18n);

    return html`
      <div
        data-part="jumper"
        class=${this.$cls['jumper']}
        style=${this.$stl['jumper']}
      >
        <!-- Month selector section -->
        <div
          data-part="jumper-month"
          class="${this.$cls['jumper-month']}"
          style=${this.$stl['jumper-month']}
        >
          <button
            data-part="jumper-button"
            class="${this.$cls['jumper-button']}"
            style=${this.$stl['jumper-button']}
            @click=${() => this.navigateMonth('prev')}
            type="button"
            aria-label=${prevMonthLabel}
          >
            ${this.$icons('chevron-left')}
          </button>
          <select
            data-part="month-select"
            class=${this.$cls['month-select']}
            style=${this.$stl['month-select']}
            aria-label=${this.getI18nText('select-month', {
              selectMonth: 'Select month',
            })}
            .value=${(month - 1).toString()}
            @change=${(e: Event) =>
              this.selectMonth(Number((e.target as HTMLSelectElement).value))}
          >
            ${months.map(
              (m, i) => html`<option value=${i}>${m.substring(0, 3)}</option>`,
            )}
          </select>
          <button
            data-part="jumper-button"
            class="${this.$cls['jumper-button']}"
            style=${this.$stl['jumper-button']}
            @click=${() => this.navigateMonth('next')}
            type="button"
            aria-label=${nextMonthLabel}
          >
            ${this.$icons('chevron-right')}
          </button>
        </div>
        <!-- Year selector section -->
        <div
          data-part="jumper-year"
          class="${this.$cls['jumper-year']}"
          style=${this.$stl['jumper-year']}
        >
          <button
            data-part="jumper-button"
            class="${this.$cls['jumper-button']}"
            style=${this.$stl['jumper-button']}
            @click=${() => this.navigateYear('prev')}
            type="button"
            aria-label=${prevYearLabel}
          >
            ${this.$icons('chevron-left')}
          </button>
          <input
            data-part="year-input"
            class=${this.$cls['year-input']}
            style=${this.$stl['year-input']}
            type="number"
            step="1"
            aria-label=${this.getI18nText('select-year', this.defaultI18n)}
            .value=${year.toString()}
            @input=${(e: Event) => {
              const input = e.target as HTMLInputElement;
              // Only update when a complete 4-digit year is entered
              if (input.value.length === 4) {
                this.setYear(input.value);
              }
            }}
          />
          <button
            data-part="jumper-button"
            class="${this.$cls['jumper-button']}"
            style=${this.$stl['jumper-button']}
            @click=${() => this.navigateYear('next')}
            type="button"
            aria-label=${nextYearLabel}
          >
            ${this.$icons('chevron-right')}
          </button>
        </div>
      </div>
    `;
  }

  /**
   * Renders a single week row in the calendar grid.
   * Iterates through 7 days and renders each as a day cell.
   * Uses repeat directive for efficient DOM updates.
   *
   * @private
   * @param {Day[]} days - Array of 7 Day objects for the week
   * @returns {TemplateResult} Week row HTML template
   */
  private renderWeek(days: Day[]) {
    return html`
      <tr
        data-part="week"
        class=${this.$cls['week']}
        style=${this.$stl['week']}
        role="row"
      >
        ${repeat(
          days,
          day => day.ISOString,
          day => this.renderDay(day),
        )}
      </tr>
    `;
  }

  /**
   * Renders a single day cell with its button and styling.
   * Applies appropriate CSS classes based on day state (today, selected, marked, disabled).
   * Includes comprehensive ARIA attributes for accessibility.
   *
   * Features:
   * - Dynamic class binding based on day properties
   * - Localized date label for screen readers
   * - Disabled state management for unavailable dates
   * - Focus management for keyboard navigation
   * - Selection state tracking
   *
   * @private
   * @param {Day} day - Day object with all necessary metadata
   * @returns {TemplateResult} Day cell HTML template
   */
  private renderDay(day: Day) {
    const isSelected = this.$active === day.ISOString;
    const fullDate = new Date(day.ISOString);
    const locale = this.lang || undefined;

    // Generate accessible label with full date information
    const label = fullDate.toLocaleDateString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });

    // Dynamically apply classes to the cell (td) element
    const dayCellClasses = {
      [this.$cls['day']]: true,
      [this.$cls['day-outside-month']]: day.month !== 'current',
      [this.$cls['day-selected']]: isSelected,
      [this.$cls['day-today']]: day.isToday,
      [this.$cls['day-marked']]: day.isMarked,
    };

    // Dynamically apply classes to the button element
    const dayButtonClasses = {
      [this.$cls['day-button']]: true,
      [this.$cls['button-selected']]: isSelected,
      [this.$cls['button-today']]: day.isToday,
      [this.$cls['button-marked']]: day.isMarked,
      [this.$cls['button-outside-month']]: day.month !== 'current',
    };

    return html`
      <td
        data-part="day"
        class=${classMap(dayCellClasses)}
        style=${this.$stl['day']}
        role="gridcell"
        aria-selected=${isSelected ? 'true' : 'false'}
      >
        <button
          data-part="day-button"
          class=${classMap(dayButtonClasses)}
          style=${this.$stl['day-button']}
          data-iso=${day.ISOString}
          @click=${() => this.select(day)}
          aria-label=${label}
          aria-pressed=${isSelected ? 'true' : 'false'}
          aria-disabled=${day.isDisabled ? 'true' : 'false'}
          .disabled=${day.isDisabled}
          tabindex=${isSelected || (!this.$active && day.isToday) ? '0' : '-1'}
        >
          ${day.date}
        </button>
      </td>
    `;
  }
}

/**
 * TypeScript global interface augmentation.
 * Allows proper type checking for uk-calendar in HTML templates.
 * @example
 * const cal = document.querySelector('uk-calendar') as HTMLElementTagNameMap['uk-calendar'];
 */
declare global {
  interface HTMLElementTagNameMap {
    'uk-calendar': Calendar;
  }
}
