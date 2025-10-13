import { html, type PropertyValues } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

/**
 * A headless, customizable range slider component that supports single and dual knob modes.
 * Provides touch-friendly interaction with improved mobile compatibility and full accessibility.
 *
 * This is a headless component - all styling is delegated to `cls` and `stl` attributes.
 *
 * @element fr-input-range
 * @extends {Input}
 *
 * Features:
 * - Single and dual knob (range) modes
 * - Configurable min, max, and step values
 * - Optional value labels and label positioning
 * - Touch and pointer drag support
 * - Full keyboard accessibility (Arrow keys, Home, End, Page Up/Down)
 * - Form integration
 * - Mobile-friendly event handling
 * - Headless design with flexible styling via cls/stl
 * - Comprehensive i18n support
 *
 * @fires fr-input-range:input - Dispatched when the range value changes
 *
 * @example
 * Basic usage:
 * ```html
 * <fr-input-range min="0" max="100" step="1"></fr-input-range>
 * <fr-input-range multiple min="10" max="50" step="5"></fr-input-range>
 * ```
 *
 * @example
 * With styling via cls attribute:
 * ```html
 * <fr-input-range
 *   cls='{
 *     "container": "custom-range",
 *     "track": "range-track",
 *     "runnable": "range-runnable",
 *     "fill": "range-fill",
 *     "knob": "range-knob",
 *     "knobLow": "range-knob-low",
 *     "knobHigh": "range-knob-high",
 *     "label": "range-label"
 *   }'
 * ></fr-input-range>
 * ```
 *
 * @example
 * With i18n and configuration via script:
 * ```html
 * <fr-input-range>
 *   <script type="application/json">
 *   {
 *     "i18n": {
 *       "ariaValueText": "Value: {value}",
 *       "ariaRangeText": "Range from {low} to {high}",
 *       "lowKnobLabel": "Minimum value",
 *       "highKnobLabel": "Maximum value"
 *     },
 *     "cls": {
 *       "container": "my-range-container",
 *       "knob": "my-knob"
 *     }
 *   }
 *   </script>
 * </fr-input-range>
 * ```
 */
@customElement('fr-input-range')
export class InputRange extends InputMixin(Base) {
  /**
   * The default element key used for applying simple string CSS classes via `cls`.
   * For this component, it targets the container div element.
   */
  protected readonly 'cls-default-element' = 'container';

  /**
   * The default element key used for applying simple string inline styles via `stl`.
   * For this component, it targets the container div element.
   */
  protected readonly 'stl-default-element' = 'container';

  /**
   * Custom event name emitted when the value changes.
   * Used for dispatching input events from this component.
   */
  protected readonly 'input-event' = 'fr-input-range:input';

  /**
   * Enables dual-knob mode for selecting a value range.
   * When true, two knobs are shown for low and high values.
   *
   * @default false
   * @example
   * ```html
   * <fr-input-range multiple></fr-input-range>
   * ```
   */
  @property({ type: Boolean })
  multiple = false;

  /**
   * Minimum allowed value for the slider.
   *
   * @default 0
   * @example
   * ```html
   * <fr-input-range min="10"></fr-input-range>
   * ```
   */
  @property({ type: Number })
  min = 0;

  /**
   * Maximum allowed value for the slider.
   *
   * @default 100
   * @example
   * ```html
   * <fr-input-range max="200"></fr-input-range>
   * ```
   */
  @property({ type: Number })
  max = 100;

  /**
   * Step increment for value changes.
   *
   * @default 1
   * @example
   * ```html
   * <fr-input-range step="5"></fr-input-range>
   * ```
   */
  @property({ type: Number })
  step = 1;

  /**
   * Label content or boolean to show/hide labels on knobs.
   * Can be a string label or true/false to toggle visibility.
   *
   * @default false
   * @example
   * ```html
   * <fr-input-range label="Value"></fr-input-range>
   * <fr-input-range label></fr-input-range>
   * ```
   */
  @property({ type: String })
  label: string | boolean = false;

  /**
   * Position of the label relative to the knob.
   *
   * @default 'top'
   * @example
   * ```html
   * <fr-input-range label-position="bottom"></fr-input-range>
   * ```
   */
  @property({ type: String })
  'label-position': 'top' | 'bottom' = 'top';

  /**
   * ARIA label for the entire range component.
   * Overrides default i18n aria label.
   *
   * @example
   * ```html
   * <fr-input-range aria-label="Volume control"></fr-input-range>
   * ```
   */
  @property({ type: String })
  'aria-label': string = '';

  /**
   * Internal value for the low knob (single or range mode).
   * @internal
   */
  private _lowValue = this.min;

  /**
   * Internal value for the high knob (range mode).
   * @internal
   */
  private _highValue = this.max;

  /**
   * Internal label state (string or boolean).
   * @internal
   */
  private _label: boolean | string = false;

  /**
   * Tracks which knob is currently active during drag.
   * @internal
   */
  private activeKnob: 'low' | 'high' | null = null;

  /**
   * Reference to the track element for position calculations.
   * @internal
   */
  private trackElement: HTMLElement | null = null;

  /**
   * Indicates if a knob is currently being dragged.
   * @internal
   */
  private isDragging = false;

  /**
   * Default i18n strings for accessibility and labels.
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  private readonly defaultI18n = {
    ariaValueText: 'Value: {value}',
    ariaRangeText: 'Range from {low} to {high}',
    lowKnobLabel: 'Minimum value',
    highKnobLabel: 'Maximum value',
    ariaLabel: 'Range slider',
  };

  /**
   * Returns an empty string (not used for display text).
   *
   * @returns An empty string
   */
  protected get $text(): string {
    return '';
  }

  /**
   * Returns the current value(s) for form submission.
   * Returns a string for single knob, or an array for dual knob mode.
   *
   * @returns Value string or array of strings
   */
  protected get $value(): string | string[] {
    return this.multiple
      ? this.value.split(',').map(a => a.trim())
      : this.value;
  }

  /**
   * Initializes the component and sets up label state and touch event listeners.
   * @override
   */
  connectedCallback(): void {
    super.connectedCallback();
    const label = this.getAttribute('label');
    this._label = label === '' ? true : label || false;

    // Add document-level event listeners for better mobile support
    this.addEventListener('touchstart', this.preventScrolling, {
      passive: false,
    });
  }

  /**
   * Cleans up event listeners when the component is disconnected.
   * @override
   */
  disconnectedCallback(): void {
    this.removeEventListener('touchstart', this.preventScrolling);
    this.cleanupEventListeners();
    super.disconnectedCallback?.();
  }

  /**
   * Updates internal values when value or multiple properties change.
   * @override
   */
  protected updated(changedProps: PropertyValues) {
    if (changedProps.has('value') || changedProps.has('multiple')) {
      this.parseValue();
    }
  }

  /**
   * Initializes the value(s) for the slider based on the value property or defaults.
   * @override
   */
  protected initializeValue(): void {
    if (!this.value) {
      this._lowValue = this.min;
      this._highValue = this.max;
      this.value = this.multiple
        ? `${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`
        : this.formatValue(this._lowValue);
    } else {
      this.parseValue();
    }
  }

  /**
   * Parses the string value into internal numeric values for the knobs.
   * @internal
   */
  private parseValue(): void {
    if (this.multiple) {
      const [low, high] = this.value.split(',').map(val => parseFloat(val));
      if (low !== undefined && high !== undefined) {
        this._lowValue = this.clamp(low);
        this._highValue = this.clamp(high);
      }
    } else {
      this._lowValue = this.clamp(parseFloat(this.value));
    }
  }

  /**
   * Formats a numeric value to a string with appropriate decimal places.
   *
   * @param value Numeric value to format
   * @returns Formatted value string
   * @internal
   */
  private formatValue(value: number): string {
    const fixed = value.toFixed(2);
    return fixed.endsWith('.00') ? fixed.slice(0, -3) : fixed;
  }

  /**
   * Clamps a value within the min/max bounds.
   *
   * @param val Value to clamp
   * @returns Clamped value
   * @internal
   */
  private clamp(val: number): number {
    return parseFloat(Math.min(Math.max(val, this.min), this.max).toFixed(2));
  }

  /**
   * Converts a value to a percentage position on the track.
   *
   * @param val Value to convert
   * @returns Percentage (0-100)
   * @internal
   */
  private valueToPercent(val: number): number {
    return ((val - this.min) / (this.max - this.min)) * 100;
  }

  /**
   * Converts a pixel position to a value within the range.
   *
   * @param clientX X position in pixels
   * @returns Value within the slider range
   * @internal
   */
  private positionToValue(clientX: number): number {
    if (!this.trackElement) {
      this.trackElement = this.querySelector(
        '[data-range-track]',
      ) as HTMLElement;
    }

    const rect = this.trackElement!.getBoundingClientRect();
    const percent = Math.max(
      0,
      Math.min(1, (clientX - rect.left) / rect.width),
    );
    return this.min + percent * (this.max - this.min);
  }

  /**
   * Updates the component's value and emits a change event.
   * @internal
   */
  private updateValue(): void {
    this.value = this.multiple
      ? `${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`
      : this.formatValue(this._lowValue);
    this.emit();
  }

  /**
   * Handles value changes for a specific knob with validation and clamping.
   *
   * @param knob Which knob ('low' or 'high')
   * @param newValue New value for the knob
   * @internal
   */
  private handleValueChange(knob: 'low' | 'high', newValue: number): void {
    newValue = this.clamp(Math.round(newValue / this.step) * this.step);

    if (knob === 'low') {
      this._lowValue = this.multiple
        ? Math.min(newValue, this._highValue)
        : newValue;
    } else {
      this._highValue = Math.max(newValue, this._lowValue);
    }

    this.updateValue();
    this.requestUpdate();
  }

  /**
   * Prevents page scrolling during touch interactions.
   *
   * @param e Touch event
   * @internal
   */
  private preventScrolling = (e: TouchEvent): void => {
    if (this.isDragging) {
      e.preventDefault();
    }
  };

  /**
   * Handles pointer/touch start events for knob dragging.
   *
   * @param e Pointer or touch event
   * @param knob Which knob is being interacted with ('low' or 'high')
   * @internal
   */
  private onPointerStart = (
    e: PointerEvent | TouchEvent,
    knob: 'low' | 'high',
  ): void => {
    if (this.disabled) return;

    e.preventDefault();
    e.stopPropagation();

    this.activeKnob = knob;
    this.isDragging = true;

    // Focus the button for accessibility
    (e.currentTarget as HTMLElement).focus();

    // Add event listeners to document for better tracking
    document.addEventListener('pointermove', this.onPointerMove, {
      passive: false,
    });
    document.addEventListener('pointerup', this.onPointerEnd);
    document.addEventListener('pointercancel', this.onPointerEnd);
    document.addEventListener('touchmove', this.onTouchMove, {
      passive: false,
    });
    document.addEventListener('touchend', this.onPointerEnd);
    document.addEventListener('touchcancel', this.onPointerEnd);
  };

  /**
   * Handles pointer/touch move events for knob dragging.
   *
   * @param e Pointer event
   * @internal
   */
  private onPointerMove = (e: PointerEvent): void => {
    if (!this.isDragging || !this.activeKnob || this.disabled) return;

    e.preventDefault();
    const newValue = this.positionToValue(e.clientX);
    this.handleValueChange(this.activeKnob, newValue);
  };

  /**
   * Handles touch move events separately for better mobile support.
   *
   * @param e Touch event
   * @internal
   */
  private onTouchMove = (e: TouchEvent): void => {
    if (!this.isDragging || !this.activeKnob || this.disabled) return;

    e.preventDefault();
    const newValue = this.positionToValue(e.touches[0].clientX);
    this.handleValueChange(this.activeKnob, newValue);
  };

  /**
   * Handles pointer/touch end events, finalizing knob position.
   * @internal
   */
  private onPointerEnd = (): void => {
    this.isDragging = false;
    this.activeKnob = null;
    this.cleanupEventListeners();
  };

  /**
   * Removes all document-level event listeners for drag/touch.
   * @internal
   */
  private cleanupEventListeners(): void {
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerEnd);
    document.removeEventListener('pointercancel', this.onPointerEnd);
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onPointerEnd);
    document.removeEventListener('touchcancel', this.onPointerEnd);
  }

  /**
   * Handles keyboard navigation for the knobs with enhanced accessibility.
   * Supports Arrow keys, Home, End, Page Up/Down.
   *
   * @param e Keyboard event
   * @param knob Which knob ('low' or 'high')
   * @internal
   */
  private onKeyDown = (e: KeyboardEvent, knob: 'low' | 'high'): void => {
    if (this.disabled) return;

    const currentValue = knob === 'low' ? this._lowValue : this._highValue;
    let delta = 0;

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        delta = this.step;
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        delta = -this.step;
        break;
      case 'Home':
        // Go to minimum
        this.handleValueChange(
          knob,
          knob === 'low' ? this.min : this._lowValue,
        );
        e.preventDefault();
        return;
      case 'End':
        // Go to maximum
        this.handleValueChange(
          knob,
          knob === 'high' ? this.max : this._highValue,
        );
        e.preventDefault();
        return;
      case 'PageUp':
        // Large increment (10x step)
        delta = this.step * 10;
        break;
      case 'PageDown':
        // Large decrement (10x step)
        delta = -this.step * 10;
        break;
      default:
        return;
    }

    if (delta) {
      e.preventDefault();
      this.handleValueChange(knob, currentValue + delta);
    }
  };

  /**
   * Gets the ARIA value text for a knob with i18n support.
   *
   * @param value Current value
   * @returns ARIA value text
   * @internal
   */
  private getAriaValueText(value: number): string {
    if (this.multiple) {
      return this.getI18nText('ariaRangeText', this.defaultI18n, {
        low: this.formatValue(this._lowValue),
        high: this.formatValue(this._highValue),
      });
    }
    return this.getI18nText('ariaValueText', this.defaultI18n, {
      value: this.formatValue(value),
    });
  }

  /**
   * Gets the ARIA label for a specific knob with i18n support.
   *
   * @param type Knob type ('low' or 'high')
   * @returns ARIA label text
   * @internal
   */
  private getKnobAriaLabel(type: 'low' | 'high'): string {
    const key = type === 'low' ? 'lowKnobLabel' : 'highKnobLabel';
    return this.getI18nText(key, this.defaultI18n);
  }

  /**
   * Renders a single knob with label if enabled.
   * Includes full ARIA attributes for accessibility.
   *
   * @param type Which knob to render ('low' or 'high')
   * @returns Template for the knob
   * @internal
   */
  private renderKnob(type: 'low' | 'high') {
    const value = type === 'low' ? this._lowValue : this._highValue;
    const percent = this.valueToPercent(value);
    const min = type === 'low' ? this.min : this._lowValue;
    const max =
      type === 'low' ? (this.multiple ? this._highValue : this.max) : this.max;

    const isDraggingThis = this.isDragging && this.activeKnob === type;
    const knobClasses = [
      this.$cls['knob'] || '',
      this.$cls[type === 'low' ? 'knobLow' : 'knobHigh'] || '',
      isDraggingThis ? this.$cls['knobDragging'] || '' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return html`
      <button
        type="button"
        class="${knobClasses}"
        part="knob knob-${type} ${isDraggingThis ? 'knob-dragging' : ''}"
        role="slider"
        aria-label="${this.getKnobAriaLabel(type)}"
        aria-valuemin="${min}"
        aria-valuemax="${max}"
        aria-valuenow="${value}"
        aria-valuetext="${this.getAriaValueText(value)}"
        aria-disabled="${this.disabled}"
        ?disabled=${this.disabled}
        style="${this.$stl['knob'] || ''}${this.$stl[
          type === 'low' ? 'knobLow' : 'knobHigh'
        ] || ''}left: ${percent}%;"
        data-knob="${type}"
        data-dragging="${isDraggingThis}"
        @pointerdown=${(e: PointerEvent) => this.onPointerStart(e, type)}
        @touchstart=${(e: TouchEvent) => this.onPointerStart(e, type)}
        @keydown=${(e: KeyboardEvent) => this.onKeyDown(e, type)}
      >
        ${this._label
          ? html`
              <span
                class="${this.$cls['label'] || ''} ${this.$cls[
                  `label-${this['label-position']}`
                ] || ''}"
                part="label label-${this['label-position']}"
                style="${this.$stl['label'] || ''}"
                data-label-position="${this['label-position']}"
              >
                ${type === 'low' ? this.formatValue(value) : ''}
                ${typeof this.label === 'string' ? this.label : ''}
                ${type === 'high' ? this.formatValue(value) : ''}
              </span>
            `
          : ''}
      </button>
    `;
  }

  /**
   * Renders the complete range slider component, including track, knobs, and labels.
   * This is a headless component - all styling comes from cls/stl attributes.
   *
   * @returns Template for the component
   */
  render() {
    const lowPercent = this.valueToPercent(this._lowValue);
    const highPercent = this.multiple
      ? this.valueToPercent(this._highValue)
      : lowPercent;
    const rangeStyle = `left: ${this.multiple ? lowPercent : 0}%; width: ${this.multiple ? highPercent - lowPercent : lowPercent}%`;

    const ariaLabel =
      this['aria-label'] || this.getI18nText('ariaLabel', this.defaultI18n);

    return html`
      <div
        data-host-inner
        class="${this.$cls['container'] || ''}"
        part="container"
        style="${this.$stl['container'] || ''}"
        role="group"
        aria-label="${ariaLabel}"
        data-disabled="${this.disabled}"
        data-multiple="${this.multiple}"
      >
        <div
          class="${this.$cls['runnable'] || ''}"
          part="runnable-track"
          style="${this.$stl['runnable'] || ''}"
          data-range-track
        ></div>
        <div
          class="${this.$cls['fill'] || ''} ${this.$cls['track'] || ''}"
          part="fill-track"
          style="${this.$stl['fill'] || ''}${this.$stl['track'] ||
          ''}${rangeStyle}"
          data-fill-track
        ></div>
        ${this.renderKnob('low')}
        ${this.multiple ? this.renderKnob('high') : ''} ${this.renderHidden()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fr-input-range': InputRange;
  }
}
