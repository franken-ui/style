import { type PropertyValues, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { validateTime } from '../helpers/date';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

/**
 * A headless time input component with separate hour/minute fields and AM/PM selector (for 12h clock).
 * All styling is delegated to `cls` and `stl` attributes for maximum flexibility.
 *
 * @element fr-input-time
 * @extends {Input}
 *
 * Features:
 * - 12-hour format with AM/PM or 24-hour format
 * - Separate hour (1-12 for 12h clock or 0-23 for 24h clock) and minute (0-59) inputs
 * - Auto-current time option
 * - Input validation and formatting
 * - Enhanced keyboard navigation (Arrow keys, Page Up/Down)
 * - Form integration
 * - Full i18n support
 * - Headless design with flexible styling
 * - Comprehensive ARIA accessibility
 *
 * @fires fr-input-time:input - Emitted when the time value changes
 *
 * @example
 * Basic usage:
 * ```html
 * <fr-input-time
 *   name="appointment-time"
 *   now
 *   required
 *   clock="12h"
 *   autofocus>
 * </fr-input-time>
 * ```
 *
 * @example
 * With styling via cls attribute:
 * ```html
 * <fr-input-time
 *   cls='{
 *     "container": "time-input-wrapper",
 *     "hourInput": "hour-field",
 *     "minuteInput": "minute-field",
 *     "separator": "time-separator",
 *     "meridiemButton": "am-pm-toggle"
 *   }'
 * ></fr-input-time>
 * ```
 *
 * @example
 * With i18n and configuration via script:
 * ```html
 * <fr-input-time>
 *   <script type="application/json">
 *   {
 *     "i18n": {
 *       "am": "AM",
 *       "pm": "PM",
 *       "hourLabel": "Hour",
 *       "minuteLabel": "Minute",
 *       "meridiemLabel": "Time of day",
 *       "timeLabel": "Time input"
 *     },
 *     "cls": {
 *       "container": "my-time-input",
 *       "hourInput": "custom-hour"
 *     }
 *   }
 *   </script>
 * </fr-input-time>
 * ```
 */
@customElement('fr-input-time')
export class InputTime extends InputMixin(Base) {
  /**
   * The default element key for applying simple string CSS classes via `cls`.
   * For this component, it targets the container div element.
   */
  protected readonly 'cls-default-element' = 'container';

  /**
   * The default element key for applying simple string inline styles via `stl`.
   * For this component, it targets the container div element.
   */
  protected readonly 'stl-default-element' = 'container';

  /**
   * Name of the custom event emitted when the time value changes.
   * Used for dispatching input events from this component.
   */
  protected readonly 'input-event' = 'fr-input-time:input';

  /**
   * Automatically focuses the hour input when the component is rendered.
   *
   * @default false
   * @example
   * ```html
   * <fr-input-time autofocus></fr-input-time>
   * ```
   */
  @property({ type: Boolean })
  autofocus: boolean = false;

  /**
   * If true, initializes the input with the current system time.
   *
   * @default false
   * @example
   * ```html
   * <fr-input-time now></fr-input-time>
   * ```
   */
  @property({ type: Boolean })
  now: boolean = false;

  /**
   * Clock format, either '12h' or '24h'.
   *
   * @default '12h'
   * @example
   * ```html
   * <fr-input-time clock="24h"></fr-input-time>
   * ```
   */
  @property({ type: String })
  clock: '12h' | '24h' = '12h';

  /**
   * Minimum allowed time in HH:MM format.
   * @example
   * ```html
   * <fr-input-time min="09:00"></fr-input-time>
   * ```
   */
  @property({ type: String })
  min: string = '';

  /**
   * Maximum allowed time in HH:MM format.
   * @example
   * ```html
   * <fr-input-time max="17:00"></fr-input-time>
   * ```
   */
  @property({ type: String })
  max: string = '';

  /**
   * Hour value (1-12 or 0-23, depending on the clock). Undefined if not set.
   * @internal
   */
  @state()
  protected $hour: number | undefined;

  /**
   * Minute value (0-59).
   * @internal
   */
  @state()
  protected $min: number = 0;

  /**
   * AM/PM indicator for the selected time.
   * @internal
   */
  @state()
  protected $meridiem: 'am' | 'pm' = 'am';

  /**
   * Default i18n strings for labels and accessibility.
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  private readonly defaultI18n = {
    am: 'AM',
    pm: 'PM',
    hourLabel: 'Hour',
    minuteLabel: 'Minute',
    meridiemLabel: 'AM/PM',
    timeLabel: 'Time',
    hourPlaceholder: 'HH',
    minutePlaceholder: 'MM',
    invalidTime: 'Invalid time format',
  };

  /**
   * Returns the hour as a zero-padded string (e.g., '09').
   *
   * @returns Zero-padded hour string
   */
  get $HH(): string {
    return this.$hour !== undefined
      ? this.$hour.toString().padStart(2, '0')
      : '00';
  }

  /**
   * Returns the minute as a zero-padded string (e.g., '05').
   *
   * @returns Zero-padded minute string
   */
  get $MM(): string {
    return this.$min >= 0 ? this.$min.toString().padStart(2, '0') : '00';
  }

  /**
   * Returns the time in 24-hour format (HH:MM) for form submission.
   * Returns an empty string if hour is not set.
   *
   * @returns Time string in 24-hour format or empty string
   */
  protected get $value(): string {
    if (this.$hour === undefined || this.$hour === null) return '';

    let hour = this.$hour;
    if (this.clock === '12h') {
      if (this.$meridiem === 'pm') {
        hour = this.$hour === 12 ? 12 : this.$hour + 12;
      } else {
        hour = this.$hour === 12 ? 0 : this.$hour;
      }
    }

    return `${hour.toString().padStart(2, '0')}:${this.$min.toString().padStart(2, '0')}`;
  }

  /**
   * Returns a display text representation. Not used for time inputs.
   *
   * @returns An empty string
   */
  protected get $text(): string {
    return '';
  }

  /**
   * Initializes component value from the initial value property.
   * Initializes time value from property or current time.
   *
   * @protected
   */
  protected initializeValue(): void {
    if (this.value) {
      this.parseTimeValue();
    } else if (this.now) {
      this.setCurrentTime();
    }
  }

  /**
   * Emits a change event when any time component (hour, minute, meridiem) updates.
   *
   * @param changedProperties Changed properties
   * @protected
   */
  protected updated(changedProperties: PropertyValues): void {
    if (
      ['$hour', '$min', '$meridiem'].some(property =>
        changedProperties.has(property),
      )
    ) {
      this.emit();
    }
  }

  /**
   * Parses the initial time value from a string in HH:MM format.
   * Sets hour, minute, and meridiem accordingly.
   *
   * @internal
   */
  private parseTimeValue(): void {
    try {
      const validatedTime = validateTime(this.value);
      const [hours, minutes] = validatedTime.split(':').map(Number);

      if (this.clock === '12h') {
        this.$hour = hours % 12 || 12;
      } else {
        this.$hour = hours;
      }

      this.$min = minutes;
      this.$meridiem = hours < 12 ? 'am' : 'pm';
    } catch (error) {
      console.error(this.getI18nText('invalidTime', this.defaultI18n), error);
    }
  }

  /**
   * Sets the time to the current system time (hour, minute, meridiem).
   *
   * @internal
   */
  private setCurrentTime(): void {
    const date = new Date();

    if (this.clock === '12h') {
      this.$hour = date.getHours() % 12 || 12;
    } else {
      this.$hour = date.getHours();
    }

    this.$min = date.getMinutes();
    this.$meridiem = date.getHours() < 12 ? 'am' : 'pm';
  }

  /**
   * Validates if the current time is within min/max constraints.
   *
   * @returns True if valid, false otherwise
   * @internal
   */
  private isTimeValid(): boolean {
    const currentValue = this.$value;
    if (!currentValue) return true;

    if (this.min && currentValue < this.min) return false;
    if (this.max && currentValue > this.max) return false;

    return true;
  }

  /**
   * Handles input events for hour and minute fields, updating state accordingly.
   * Only numeric input is allowed, and values are clamped to valid ranges.
   *
   * @param e The keyboard event from the input field
   * @param state Indicates whether the hour or minute field is being edited
   * @internal
   */
  private handleInput(e: Event, state: '$hour' | '$min'): void {
    const input = e.target as HTMLInputElement;
    const value = input.value.replace(/[^0-9]/g, '').substring(0, 2);
    const numValue = parseInt(value);

    switch (state) {
      case '$hour':
        if (this.clock === '12h') {
          this.$hour = numValue <= 12 ? numValue : 12;
        } else {
          this.$hour = numValue <= 23 ? numValue : 23;
        }
        break;
      case '$min':
        this.$min = numValue <= 59 ? numValue : 59;
        break;
    }
    input.value = value;
  }

  /**
   * Handles blur events for hour and minute fields, validating and formatting input values.
   *
   * @param e The focus event from the input field
   * @param state Indicates whether the hour or minute field is being blurred
   * @internal
   */
  private handleBlur(e: Event, state: '$hour' | '$min'): void {
    const input = e.target as HTMLInputElement;
    const numValue = parseInt(input.value);

    switch (state) {
      case '$hour':
        if (input.value === '') {
          if (!this.required) {
            this.$hour = undefined;
          } else {
            input.value = this.$HH;
          }
          return;
        }

        if (this.clock === '12h' && numValue > 12) {
          this.$hour = 12;
          input.value = '12';
        } else if (this.clock === '12h' && numValue === 0) {
          this.$hour = 12;
          input.value = '12';
        } else if (this.clock === '24h' && numValue > 23) {
          this.$hour = 23;
          input.value = '23';
        } else {
          input.value = this.$HH;
        }
        break;

      case '$min':
        if (numValue > 59) {
          this.$min = 59;
        }
        input.value = this.$MM;
        break;
    }
  }

  /**
   * Handles keydown events for enhanced keyboard navigation.
   * Supports Arrow keys for increment/decrement and Page Up/Down for larger jumps.
   *
   * @param e The keyboard event from the input field
   * @param state Indicates whether the hour or minute field is being edited
   * @internal
   */
  private handleKeydown(e: KeyboardEvent, state: '$hour' | '$min'): void {
    const input = e.target as HTMLInputElement;
    const currentValue = state === '$hour' ? this.$hour : this.$min;

    if (currentValue === undefined && state === '$hour') return;

    let delta = 0;
    let shouldPrevent = false;

    switch (e.key) {
      case 'ArrowUp':
        delta = 1;
        shouldPrevent = true;
        break;
      case 'ArrowDown':
        delta = -1;
        shouldPrevent = true;
        break;
      case 'PageUp':
        delta = state === '$hour' ? 1 : 15; // 1 hour or 15 minutes
        shouldPrevent = true;
        break;
      case 'PageDown':
        delta = state === '$hour' ? -1 : -15; // -1 hour or -15 minutes
        shouldPrevent = true;
        break;
    }

    if (shouldPrevent && delta !== 0) {
      e.preventDefault();

      if (state === '$hour') {
        const maxHour = this.clock === '12h' ? 12 : 23;
        const minHour = this.clock === '12h' ? 1 : 0;
        let newHour = (this.$hour || 0) + delta;

        // Wrap around for hours
        if (newHour > maxHour) newHour = minHour;
        if (newHour < minHour) newHour = maxHour;

        this.$hour = newHour;
        input.value = newHour.toString().padStart(2, '0');
      } else {
        let newMin = this.$min + delta;

        // Wrap around for minutes
        if (newMin > 59) newMin = 0;
        if (newMin < 0) newMin = 59;

        this.$min = newMin;
        input.value = newMin.toString().padStart(2, '0');
      }
    }
  }

  /**
   * Toggles the AM/PM meridiem value.
   *
   * @internal
   */
  private toggleMeridiem(): void {
    this.$meridiem = this.$meridiem === 'am' ? 'pm' : 'am';
  }

  /**
   * Handles keyboard events on the meridiem button.
   *
   * @param e Keyboard event
   * @internal
   */
  private handleMeridiemKeydown(e: KeyboardEvent): void {
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === ' ') {
      e.preventDefault();
      this.toggleMeridiem();
    }
  }

  /**
   * Renders an input field for either hour or minute.
   *
   * @param options Configuration for the input field
   * @returns Rendered input template for hour or minute
   * @internal
   */
  private renderInput(options: {
    min: number;
    max: number;
    state: '$hour' | '$min';
    key: '$HH' | '$MM';
  }) {
    const { min, max, state, key } = options;
    const isHour = state === '$hour';

    const value = isHour
      ? this.$hour !== undefined
        ? this.$hour.toString().padStart(2, '0')
        : ''
      : this.$hour === undefined
        ? ''
        : this.$min >= 0
          ? this.$min.toString().padStart(2, '0')
          : '00';

    const label = this.getI18nText(
      isHour ? 'hourLabel' : 'minuteLabel',
      this.defaultI18n,
    );

    const placeholder = this.getI18nText(
      isHour ? 'hourPlaceholder' : 'minutePlaceholder',
      this.defaultI18n,
    );

    const inputClass = isHour
      ? this.$cls['hourInput'] || this.$cls['input'] || ''
      : this.$cls['minuteInput'] || this.$cls['input'] || '';

    const inputStyle = isHour
      ? this.$stl['hourInput'] || this.$stl['input'] || ''
      : this.$stl['minuteInput'] || this.$stl['input'] || '';

    return html`
      <input
        class="${inputClass}"
        part="${isHour ? 'hour-input' : 'minute-input'} input"
        style="${inputStyle}"
        data-key="${key}"
        data-field="${state}"
        type="number"
        inputmode="numeric"
        role="spinbutton"
        aria-label="${label}"
        aria-valuemin="${min}"
        aria-valuemax="${max}"
        aria-valuenow="${isHour ? this.$hour || 0 : this.$min}"
        aria-invalid="${!this.isTimeValid()}"
        min="${min}"
        max="${max}"
        step="1"
        placeholder="${placeholder}"
        maxlength="2"
        value="${value}"
        .autofocus="${isHour && this.autofocus}"
        ?disabled="${this.disabled || (!isHour && this.$hour === undefined)}"
        @keydown="${(e: KeyboardEvent) => this.handleKeydown(e, state)}"
        @input="${(e: Event) => this.handleInput(e, state)}"
        @blur="${(e: Event) => this.handleBlur(e, state)}"
      />
    `;
  }

  /**
   * Renders the complete time input component, including hour, minute, and AM/PM selector.
   * This is a headless component - all styling comes from cls/stl attributes.
   *
   * @returns Rendered template for the time input component
   */
  render() {
    const timeLabel = this.getI18nText('timeLabel', this.defaultI18n);
    const meridiemLabel = this.getI18nText('meridiemLabel', this.defaultI18n);

    let meridiemButton = html``;

    if (this.clock === '12h') {
      const amLabel = this.getI18nText('am', this.defaultI18n);
      const pmLabel = this.getI18nText('pm', this.defaultI18n);
      const currentLabel = this.$meridiem === 'am' ? amLabel : pmLabel;

      meridiemButton = html`
        <button
          class="${this.$cls['meridiemButton'] || this.$cls['button'] || ''}"
          part="meridiem-button button"
          style="${this.$stl['meridiemButton'] || this.$stl['button'] || ''}"
          data-key="meridiem"
          data-meridiem="${this.$meridiem}"
          type="button"
          role="switch"
          aria-label="${meridiemLabel}"
          aria-checked="${this.$meridiem === 'pm'}"
          ?disabled="${this.disabled || this.$hour === undefined}"
          @click="${(e: MouseEvent) => {
            e.preventDefault();
            this.toggleMeridiem();
          }}"
          @keydown="${this.handleMeridiemKeydown}"
        >
          ${currentLabel}
        </button>
      `;
    }

    return html`
      <div
        data-host-inner
        class="${this.$cls['container'] || ''}"
        part="container"
        style="${this.$stl['container'] || ''}"
        role="group"
        aria-label="${timeLabel}"
        data-disabled="${this.disabled}"
        data-clock="${this.clock}"
        data-valid="${this.isTimeValid()}"
      >
        ${this.renderInput({
          min: this.clock === '12h' ? 1 : 0,
          max: this.clock === '12h' ? 12 : 23,
          state: '$hour',
          key: '$HH',
        })}
        <span
          class="${this.$cls['separator'] || ''}"
          part="separator"
          style="${this.$stl['separator'] || ''}"
          aria-hidden="true"
        >
          :
        </span>
        ${this.renderInput({
          min: 0,
          max: 59,
          state: '$min',
          key: '$MM',
        })}
        ${meridiemButton} ${this.renderHidden()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fr-input-time': InputTime;
  }
}
