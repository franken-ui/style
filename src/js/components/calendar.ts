import { type PropertyValues, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { validateDate } from '../helpers/date';
import { BaseCalendarMixin } from './shared/base-calendar';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

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

interface Day {
  date: number;
  month: 'prev' | 'current' | 'next';
  isToday: boolean;
  isDisabled: boolean;
  isMarked: boolean;
  ISOString: string;
}

@customElement('uk-calendar')
export class Calendar extends BaseCalendarMixin(InputMixin(Base)) {
  protected 'cls-default-element' = 'host-inner';

  protected 'stl-default-element' = 'host-inner';

  protected 'input-event' = 'uk-calendar:change';

  @state()
  private $active: string | undefined;

  @state()
  protected $cls: Cls = {
    'host-inner': 'uk-cal',
    header: 'uk-cal-header',
    'previous-button': 'uk-button uk-button-icon uk-button-small',
    'next-button': 'uk-button uk-button-icon uk-button-small',
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
    'jumper-button': 'uk-button uk-button-icon uk-button-small',
    'day-outside-month': 'uk-cal-oom',
    'day-selected': 'uk-active',
    'day-today': 'uk-nothing',
    'day-marked': 'uk-cal-marked',
    'button-outside-month': 'uk-nothing',
    'button-selected': 'uk-nothing',
    'button-today': 'uk-nothing',
    'button-marked': 'uk-nothing',
  };

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

  protected get $value(): string {
    return this.$active ? this.$active.slice(0, 10) : '';
  }

  protected get $text(): string {
    return '';
  }

  protected initializeValue(): void {
    if (this.value) {
      try {
        const date = validateDate(this.value);
        this.$active = date.toISOString();
        this['view-date'] = date.toISOString().slice(0, 10);
      } catch (e) {
        console.error(
          `[uk-calendar] Invalid date format for value: "${this.value}".`,
          e,
        );
      }
    } else if (this.today) {
      this.$active = this.getTodayUTC().toISOString();
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this.navigate);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.navigate);
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('$active')) {
      this.updateComplete.then(() => {
        const button = this.renderRoot.querySelector<HTMLButtonElement>(
          `button[data-iso="${this.$active}"]`,
        );

        if (button && this.isDirty) {
          button.focus();
        }
      });
      this.emit();
    }
  }

  private navigate = (event: KeyboardEvent): void => {
    const currentButton = event.target as HTMLButtonElement;
    if (!currentButton?.matches('button[data-iso]')) {
      return;
    }

    const buttons = Array.from(
      this.querySelectorAll<HTMLButtonElement>('button[data-iso]'),
    );
    const currentIndex = buttons.indexOf(currentButton);
    const grid = this.getGridPosition(currentButton);
    if (!grid) return;

    const { rowIndex, colIndex } = grid;
    let nextButton: HTMLButtonElement | undefined;

    const navigationMap: Record<string, () => HTMLButtonElement | undefined> = {
      ArrowLeft: () => this.findNextEnabled(buttons, currentIndex - 1, -1),
      ArrowRight: () => this.findNextEnabled(buttons, currentIndex + 1, 1),
      ArrowUp: () => this.getNextEnabledInColumn(rowIndex - 1, colIndex, -1),
      ArrowDown: () => this.getNextEnabledInColumn(rowIndex + 1, colIndex, 1),
      Home: () => this.getRowFirstEnabledButton(rowIndex),
      End: () => this.getRowLastEnabledButton(rowIndex),
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

    if (navigationMap[event.key]) {
      event.preventDefault();
      const button = navigationMap[event.key]();
      if (button) {
        nextButton = button;
      }
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      currentButton.click();
      return;
    }

    nextButton?.focus();
  };

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

  private getRowFirstEnabledButton(
    rowIndex: number,
  ): HTMLButtonElement | undefined {
    const row = this.querySelectorAll('tr')[rowIndex];
    return Array.from(
      row?.querySelectorAll<HTMLButtonElement>('button[data-iso]') || [],
    ).find(b => !b.disabled);
  }

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

  private getGridPosition(button: HTMLButtonElement) {
    const dayCell = button.closest('td');
    const weekRow = dayCell?.closest('tr');
    if (!weekRow || !dayCell) return null;

    return {
      rowIndex: Array.from(this.querySelectorAll('tr')).indexOf(weekRow),
      colIndex: Array.from(weekRow.children).indexOf(dayCell),
    };
  }

  private select(day: Day): void {
    this.$active = day.ISOString;
    if (day.month !== 'current') {
      this['view-date'] = day.ISOString.slice(0, 10);
    }
    if (!this.isDirty) {
      this.isDirty = true;
    }
  }

  private navigateYear(direction: 'prev' | 'next') {
    const [year, month, day] = this['view-date'].split('-');
    const newYear =
      direction === 'prev' ? parseInt(year) - 1 : parseInt(year) + 1;
    this['view-date'] = `${newYear}-${month}-${day}`;
  }

  private navigateMonth(direction: 'prev' | 'next') {
    const [year, month] = this['view-date'].split('-').map(Number);

    let newMonth = month;
    let newYear = year;

    if (direction === 'prev') {
      if (month === 1) {
        newMonth = 12;
        newYear -= 1;
      } else {
        newMonth -= 1;
      }
    } else {
      if (month === 12) {
        newMonth = 1;
        newYear += 1;
      } else {
        newMonth += 1;
      }
    }

    this['view-date'] = `${newYear}-${newMonth.toString().padStart(2, '0')}-01`;
  }

  private selectMonth(month: number) {
    const [year] = this['view-date'].split('-');
    this['view-date'] = `${year}-${(month + 1).toString().padStart(2, '0')}-01`;
  }

  private setYear(year: string) {
    if (/^\d{4}$/.test(year)) {
      const [, month, day] = this['view-date'].split('-');
      this['view-date'] = `${year}-${month}-${day}`;
    }
  }

  private get weekdays(): string[] {
    const locale = this.lang || undefined;
    const weekdays: string[] = [];

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

  private get calendar(): Day[][] {
    const [year, month] = this['view-date'].split('-').map(Number);
    const todayISO = this.getTodayUTC().toISOString().slice(0, 10);

    const markedDates = this.parseDates(this['marked-dates']);
    const disabledDatesSet = new Set(this.parseDates(this['disabled-dates']));

    const firstDayOfMonth = this.createUTCDate(year, month - 1, 1);
    const daysInMonth = this.createUTCDate(year, month, 0).getUTCDate();
    const daysInPrevMonth = this.createUTCDate(year, month - 1, 0).getUTCDate();

    let startingDay =
      (firstDayOfMonth.getUTCDay() - this['starts-with'] + 7) % 7;

    const grid: Day[][] = [];
    let currentMonthDay = 1;
    let prevMonthDay = daysInPrevMonth - startingDay + 1;
    let nextMonthDay = 1;

    for (let week = 0; week < 6; week++) {
      const weekDays: Day[] = [];

      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        let date: Date;
        let dayNumber: number;
        let monthType: 'prev' | 'current' | 'next';

        if (week === 0 && dayOfWeek < startingDay) {
          date = this.createUTCDate(year, month - 2, prevMonthDay);
          dayNumber = prevMonthDay;
          monthType = 'prev';
          prevMonthDay++;
        } else if (currentMonthDay > daysInMonth) {
          date = this.createUTCDate(year, month, nextMonthDay);
          dayNumber = nextMonthDay;
          monthType = 'next';
          nextMonthDay++;
        } else {
          date = this.createUTCDate(year, month - 1, currentMonthDay);
          dayNumber = currentMonthDay;
          monthType = 'current';
          currentMonthDay++;
        }

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

      if (currentMonthDay > daysInMonth && week >= 4) {
        break;
      }
    }

    return grid;
  }

  render() {
    return html`
      <div
        data-host-inner
        class=${this.$cls['host-inner']}
        style=${this.$stl['host-inner']}
        role="application"
        aria-label="Calendar"
      >
        ${this.renderHeader()}
        <table class=${this.$cls.grid} style=${this.$stl.grid} role="grid">
          <thead>
            <tr
              class=${this.$cls.weekdays}
              style=${this.$stl.weekdays}
              role="row"
            >
              ${repeat(
                this.weekdays,
                day => day,
                day =>
                  html`<th
                    class=${this.$cls.weekday}
                    style=${this.$stl.weekday}
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

  private renderHeader() {
    const { year, monthName } = this.getTimestampComponent(this.$viewDate);
    const prevMonthLabel = this.getI18nText('prevMonth', {
      prevMonth: 'Previous month',
    });
    const nextMonthLabel = this.getI18nText('nextMonth', {
      nextMonth: 'Next month',
    });

    return html`
      <div class=${this.$cls.header} style=${this.$stl.header}>
        ${this.jumpable
          ? nothing
          : html`
              <button
                class=${this.$cls['previous-button']}
                style=${this.$stl['previous-button']}
                @click=${() => this.navigateMonth('prev')}
                type="button"
                aria-label=${prevMonthLabel}
              >
                ${this.$icons('chevron-left')}
              </button>
            `}

        <div class=${this.$cls.title} style=${this.$stl.title}>
          ${this.jumpable
            ? this.renderJumper()
            : html`<span>${monthName} ${year}</span>`}
        </div>

        ${this.jumpable
          ? nothing
          : html`
              <button
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

  private renderJumper() {
    const { year, month } = this.getTimestampComponent(this.$viewDate);
    const locale = this.lang || undefined;

    const months = Array.from({ length: 12 }, (_, i) => {
      const date = this.createUTCDate(2000, i, 15);
      return date.toLocaleDateString(locale, {
        month: 'long',
        timeZone: 'UTC',
      });
    });

    const prevMonthLabel = this.getI18nText('prevMonth', {
      prevMonth: 'Previous month',
    });
    const nextMonthLabel = this.getI18nText('nextMonth', {
      nextMonth: 'Next month',
    });
    const prevYearLabel = this.getI18nText('prevYear', {
      prevYear: 'Previous year',
    });
    const nextYearLabel = this.getI18nText('nextYear', {
      nextYear: 'Next year',
    });

    return html`
      <div class=${this.$cls.jumper} style=${this.$stl.jumper}>
        <div
          class="${this.$cls['jumper-month']}"
          style=${this.$stl['jumper-month']}
        >
          <button
            class="${this.$cls['jumper-button']}"
            style=${this.$stl['jumper-button']}
            @click=${() => this.navigateMonth('prev')}
            type="button"
            aria-label=${prevMonthLabel}
          >
            ${this.$icons('chevron-left')}
          </button>
          <select
            class=${this.$cls['month-select']}
            style=${this.$stl['month-select']}
            aria-label=${this.getI18nText('selectMonth', {
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
            class="${this.$cls['jumper-button']}"
            style=${this.$stl['jumper-button']}
            @click=${() => this.navigateMonth('next')}
            type="button"
            aria-label=${nextMonthLabel}
          >
            ${this.$icons('chevron-right')}
          </button>
        </div>
        <div
          class="${this.$cls['jumper-year']}"
          style=${this.$stl['jumper-year']}
        >
          <button
            class="${this.$cls['jumper-button']}"
            style=${this.$stl['jumper-button']}
            @click=${() => this.navigateYear('prev')}
            type="button"
            aria-label=${prevYearLabel}
          >
            ${this.$icons('chevron-left')}
          </button>
          <input
            class=${this.$cls['year-input']}
            style=${this.$stl['year-input']}
            type="number"
            step="1"
            aria-label=${this.getI18nText('selectYear', {
              selectYear: 'Select year',
            })}
            .value=${year.toString()}
            @input=${(e: Event) => {
              const input = e.target as HTMLInputElement;
              if (input.value.length === 4) {
                this.setYear(input.value);
              }
            }}
          />
          <button
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

  private renderWeek(days: Day[]) {
    return html`
      <tr class=${this.$cls.week} style=${this.$stl.week} role="row">
        ${repeat(
          days,
          day => day.ISOString,
          day => this.renderDay(day),
        )}
      </tr>
    `;
  }

  private renderDay(day: Day) {
    const isSelected = this.$active === day.ISOString;
    const fullDate = new Date(day.ISOString);
    const locale = this.lang || undefined;
    const label = fullDate.toLocaleDateString(locale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    });

    const dayCellClasses = {
      [this.$cls['day']]: true,
      [this.$cls['day-outside-month']]: day.month !== 'current',
      [this.$cls['day-selected']]: isSelected,
      [this.$cls['day-today']]: day.isToday,
      [this.$cls['day-marked']]: day.isMarked,
    };

    const dayButtonClasses = {
      [this.$cls['day-button']]: true,
      [this.$cls['button-selected']]: isSelected,
      [this.$cls['button-today']]: day.isToday,
      [this.$cls['button-marked']]: day.isMarked,
      [this.$cls['button-outside-month']]: day.month !== 'current',
    };

    return html`
      <td
        class=${classMap(dayCellClasses)}
        style=${this.$stl.day}
        role="gridcell"
        aria-selected=${isSelected ? 'true' : 'false'}
      >
        <button
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

declare global {
  interface HTMLElementTagNameMap {
    'uk-calendar': Calendar;
  }
}
