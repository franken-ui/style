import { type PropertyValues, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

/**
 * CSS class names interface for styling different parts of the PIN input component.
 */
interface Cls extends Record<string, string> {
  /** CSS classes for the main div. */
  'host-inner': string;
  /** CSS classes for the inputs wrapper div. */
  wrapper: string;
  /** CSS classes for individual input fields. */
  input: string;
  /** CSS classes for the label element. */
  label: string;
  /** CSS classes for the description element. */
  description: string;
}

/**
 * Inline styles interface for different parts of the component.
 */
interface Stl extends Record<string, string> {
  /** Inline styles for the main container/group wrapper. */
  container: string;
  /** Inline styles for the inputs wrapper div. */
  wrapper: string;
  /** Inline styles for individual input fields. */
  input: string;
  /** Inline styles for the label element. */
  label: string;
  /** Inline styles for the description element. */
  description: string;
}

/**
 * A headless PIN/OTP input component that creates multiple single-character input fields.
 *
 * @element uk-input-pin
 * @extends {Input}
 *
 * Features:
 * - Configurable length (default 6 digits)
 * - Auto-focus progression between fields
 * - Paste support for full PIN entry
 * - Keyboard navigation (Backspace/Delete/Arrow keys/Home/End)
 * - Form integration via hidden input
 * - Disabled state management
 * - Full ARIA support for screen readers
 * - Headless design - all styling via cls/stl attributes
 * - Multi-level internationalization (global, local attribute, script tag)
 *
 * @fires uk-input-pin:change - Emitted when the PIN value changes
 * @fires uk-input-pin:complete - Emitted when all PIN fields are filled
 *
 * @slot label - Custom label content (overrides i18n label)
 * @slot description - Custom description content (overrides i18n description)
 *
 * @cls host-inner - The main div
 * @cls wrapper - The inputs wrapper div
 * @cls input - Individual input fields
 * @cls label - The label element
 * @cls description - The description element
 * @cls live-region - The screen reader announcement region
 *
 * @example
 * ```html
 * <!-- Basic usage -->
 * <uk-input-pin name="pin" length="6"></uk-input-pin>
 *
 * <!-- With i18n attribute -->
 * <uk-input-pin
 *   name="verification-code"
 *   length="4"
 *   autofocus
 *   i18n='{"label": "Verification Code"}'>
 * </uk-input-pin>
 *
 * <!-- With custom styling -->
 * <uk-input-pin
 *   cls='{"host-inner": "pin-group", "input": "pin-digit"}'
 *   stl='{"input": "width: 40px; height: 50px;"}'>
 * </uk-input-pin>
 *
 * <!-- Using script tag for configuration -->
 * <uk-input-pin name="pin" length="6">
 *   <script data-fn="config" type="application/json">
 *   {
 *     "i18n": {
 *       "label": "Security PIN",
 *       "description": "Enter your 6-digit PIN"
 *     },
 *     "cls": {
 *       "host-inner": "security-pin",
 *       "input": "pin-field"
 *     }
 *   }
 *   </script>
 * </uk-input-pin>
 * ```
 */
@customElement('uk-input-pin')
export class InputPin extends InputMixin(Base) {
  /**
   * The default element key used for applying simple string CSS classes via `cls` attribute.
   * This targets the main container.
   */
  protected 'cls-default-element' = 'host-inner';

  /**
   * The default element key used for applying simple string inline styles via `stl` attribute.
   * This targets the main container.
   */
  protected 'stl-default-element' = 'host-inner';

  /** Custom event name emitted when value changes */
  protected 'input-event' = 'uk-input-pin:change';

  /**
   * Whether to automatically focus the first input field when the component loads.
   *
   * @default false
   */
  @property({ type: Boolean })
  autofocus: boolean = false;

  /**
   * Number of PIN digits/characters to collect.
   * Determines how many single-character input fields are rendered.
   *
   * @default 6
   */
  @property({ type: Number })
  length: number = 6;

  /**
   * Type of input mode for mobile keyboards.
   * 'numeric' for numeric keypad, 'text' for full keyboard.
   *
   * @default 'numeric'
   */
  @property({ type: String, attribute: 'input-mode' })
  'input-mode': 'numeric' | 'text' = 'numeric';

  /**
   * Pattern for input validation (e.g., '[0-9]' for digits only).
   *
   * @default undefined
   */
  @property({ type: String })
  pattern?: string;

  /**
   * Whether to show visual labels (not recommended - use aria-label via i18n instead).
   * When false, labels are visually hidden but still accessible to screen readers.
   *
   * @default false
   */
  @property({ type: Boolean, attribute: 'show-labels' })
  'show-labels': boolean = false;

  /**
   * CSS class configuration for component styling.
   * Allows customization of different component parts.
   * @internal
   */
  @state()
  protected $cls: Cls = {
    'host-inner': '',
    wrapper: 'uk-input-pin',
    input: '',
    label: '',
    description: '',
  };

  /**
   * Inline styles configuration for component styling.
   * @internal
   */
  @state()
  protected $stl: Stl = {
    container: '',
    wrapper: '',
    input: '',
    label: '',
    description: '',
  };

  /**
   * Index of the currently focused input field.
   * Undefined when no field has focus.
   * @internal
   */
  @state()
  private $focus: undefined | number;

  /**
   * Internal PIN value as a concatenated string of all input fields.
   * @internal
   */
  @state()
  private $pin: string = '';

  /**
   * Returns the current PIN value for form submission and events.
   *
   * @returns The concatenated PIN string
   */
  protected get $value(): string {
    return this.$pin;
  }

  /**
   * Returns a display text representation (not used for PIN inputs).
   * Always returns an empty string as PIN should not be displayed.
   *
   * @returns An empty string
   */
  protected get $text(): string {
    return '';
  }

  /**
   * Collection of all PIN input elements for programmatic access.
   * Used internally for navigation and value updates.
   * @internal
   */
  private $inputs: NodeListOf<HTMLInputElement> | null = null;

  /**
   * Unique ID for the PIN input group (for ARIA labeling).
   * @internal
   */
  private groupId: string = '';

  /**
   * Initializes the PIN value from the value property.
   * Parses the string and validates length.
   * @internal
   */
  protected initializeValue(): void {
    // Generate unique ID for ARIA
    this.groupId = this.id
      ? `${this.id}-group`
      : `pin-${Math.random().toString(36).substr(2, 9)}`;

    if (this.value) {
      // Validate and trim to length
      const trimmedValue = this.value.substring(0, this.length);

      // Validate against pattern if provided
      if (this.pattern) {
        const regex = new RegExp(`^[${this.pattern}]*$`);
        if (!regex.test(trimmedValue)) {
          console.warn(
            `[uk-input-pin] Initial value "${this.value}" does not match pattern "${this.pattern}"`,
          );
          return;
        }
      }

      this.$pin = trimmedValue;
    }
  }

  /**
   * Called after the first render to set up input field event handlers.
   * Configures paste functionality and populates initial value.
   * @internal
   */
  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.$inputs = this.renderRoot.querySelectorAll(
      'input[data-pin-input]',
    ) as NodeListOf<HTMLInputElement>;

    this.setupPasteHandlers();
    this.populateInitialValue();

    // Announce loaded state
    this.announceToScreenReader(
      this.getI18nText('loaded', { loaded: 'PIN input ready' }),
    );
  }

  /**
   * Populates input fields with initial value if provided.
   * @internal
   */
  private populateInitialValue(): void {
    if (!this.$pin || !this.$inputs) return;

    this.$pin.split('').forEach((char, index) => {
      const input = this.$inputs![index];
      if (input) {
        input.value = char;
        input.disabled = false;
      }
    });

    // Enable the next empty field
    if (this.$pin.length < this.length) {
      const nextInput = this.$inputs[this.$pin.length];
      if (nextInput) {
        nextInput.disabled = false;
      }
    }
  }

  /**
   * Sets up paste event handlers for all PIN input fields.
   * Allows users to paste complete PIN codes which get distributed across fields.
   * @internal
   */
  private setupPasteHandlers(): void {
    this.$inputs?.forEach(input => {
      input.addEventListener('paste', (e: Event) => {
        e.preventDefault();
        const clipboardData = (e as ClipboardEvent).clipboardData;

        if (clipboardData) {
          this.handlePaste(clipboardData.getData('Text'));
        }
      });
    });
  }

  /**
   * Processes pasted text by distributing characters across PIN fields.
   * Enables and focuses appropriate fields, updates the PIN value, and blurs if complete.
   *
   * @param text Pasted text content (trimmed to PIN length)
   * @internal
   */
  private handlePaste(text: string): void {
    if (!this.$inputs) return;

    const trimmedText = text.substring(0, this.length);

    // Validate against pattern if provided
    if (this.pattern) {
      const regex = new RegExp(`^[${this.pattern}]*$`);
      if (!regex.test(trimmedText)) {
        this.announceToScreenReader(
          this.getI18nText('invalidCharacter', {
            invalidCharacter: 'Invalid character entered',
          }),
        );
        return;
      }
    }

    this.$pin = trimmedText;

    // Distribute characters across input fields
    trimmedText.split('').forEach((char, index) => {
      const input = this.$inputs![index];
      input.disabled = false;
      input.value = char;
    });

    // Clear remaining fields
    for (let i = trimmedText.length; i < this.length; i++) {
      const input = this.$inputs[i];
      input.value = '';
      input.disabled = i !== trimmedText.length;
    }

    // Focus next empty field or blur if complete
    if (trimmedText.length < this.length) {
      const nextInput = this.$inputs[trimmedText.length];
      nextInput.disabled = false;
      nextInput.focus();
      this.announceToScreenReader(
        this.getI18nText(
          'fieldFilled',
          { fieldFilled: 'Field {n} filled' },
          {
            n: trimmedText.length + 1,
          },
        ),
      );
    } else {
      const currentInput = this.$inputs[this.$focus as number];
      currentInput?.blur();
      this.announceToScreenReader(
        this.getI18nText('complete', { complete: 'PIN entry complete' }),
      );
      this.emitComplete();
    }

    this.emit();
  }

  /**
   * Handles keyboard navigation between PIN input fields.
   * Manages Backspace (move to previous), Delete (move to next), and Arrow key navigation.
   *
   * @param e Keyboard event
   * @param input Current input element
   * @internal
   */
  private handleKeyNavigation(e: KeyboardEvent, input: HTMLInputElement): void {
    if (this.$focus === undefined || !this.$inputs) {
      return;
    }

    switch (e.key) {
      case 'Backspace':
        if (input.value.length === 0 && this.$focus > 0) {
          e.preventDefault();
          const prevInput = this.$inputs[this.$focus - 1];
          prevInput.focus();
          prevInput.select(); // Select content for easier editing
          input.disabled = true;
        }
        break;

      case 'Delete':
        if (input.value.length === 0) {
          e.preventDefault();

          const nextInput = this.$inputs[this.$focus + 1];

          if (nextInput) {
            nextInput.focus();
            nextInput.setSelectionRange(0, 0);
          }
        }
        break;

      case 'ArrowLeft':
        e.preventDefault();
        if (this.$focus > 0) {
          const prevInput = this.$inputs[this.$focus - 1];
          prevInput.focus();
          prevInput.setSelectionRange(1, 1); // Move cursor to end
        }
        break;

      case 'ArrowRight':
        e.preventDefault();
        if (this.$focus < this.length - 1) {
          const nextInput = this.$inputs[this.$focus + 1];
          if (!nextInput.disabled) {
            nextInput.focus();
            nextInput.setSelectionRange(0, 0); // Move cursor to start
          }
        }
        break;

      case 'Home':
        e.preventDefault();
        this.$inputs[0]?.focus();
        break;

      case 'End':
        e.preventDefault();
        // Focus last filled input or last input
        for (let i = this.length - 1; i >= 0; i--) {
          const inp = this.$inputs[i];
          if (!inp.disabled) {
            inp.focus();
            break;
          }
        }
        break;
    }
  }

  /**
   * Handles input events to manage field progression and value updates.
   * Auto-advances to next field on character entry and emits change event.
   *
   * @param e Input event
   * @param fieldIndex Index of current input field
   * @internal
   */
  private handleInput(e: InputEvent, fieldIndex: number): void {
    if (!this.$inputs) return;

    const input = e.target as HTMLInputElement;

    // Validate against pattern if provided
    if (
      this.pattern &&
      input.value &&
      !new RegExp(`[${this.pattern}]`).test(input.value)
    ) {
      input.value = '';
      this.announceToScreenReader(
        this.getI18nText('invalidCharacter', {
          invalidCharacter: 'Invalid character entered',
        }),
      );
      return;
    }

    // Auto-advance to next field
    if (input.value.length === 1) {
      if (fieldIndex < this.length - 1) {
        const nextInput = this.$inputs[fieldIndex + 1];

        nextInput.disabled = false;
        nextInput.focus();
        this.announceToScreenReader(
          this.getI18nText(
            'fieldFilled',
            { fieldFilled: 'Field {n} filled' },
            {
              n: fieldIndex + 2,
            },
          ),
        );
      } else {
        // Last field - blur to complete entry
        input.blur();
        this.announceToScreenReader(
          this.getI18nText('complete', { complete: 'PIN entry complete' }),
        );
        this.emitComplete();
      }
    }

    // Update PIN value and emit change event
    this.updatePinValue();
    this.emit();
  }

  /**
   * Updates the internal PIN value by concatenating all input field values.
   * @internal
   */
  private updatePinValue(): void {
    if (!this.$inputs) return;

    let value = '';
    this.$inputs.forEach(input => {
      value += input.value;
    });
    this.$pin = value;
  }

  /**
   * Emits a custom event when all PIN fields are complete.
   * @internal
   */
  private emitComplete(): void {
    this.dispatchEvent(
      new CustomEvent('uk-input-pin:complete', {
        detail: {
          value: this.$value,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Announces text to screen readers via aria-live region.
   * @param message - The message to announce
   * @internal
   */
  private announceToScreenReader(message: string): void {
    if (!message) return;

    const liveRegion = this.renderRoot.querySelector('[role="status"]');
    if (liveRegion) {
      liveRegion.textContent = message;
      // Clear after announcement
      setTimeout(() => {
        liveRegion.textContent = '';
      }, 1000);
    }
  }

  /**
   * Gets the appropriate label for the group.
   * @internal
   */
  private get groupLabel(): string {
    return this.getI18nText('label', { label: 'PIN Code' });
  }

  /**
   * Gets the appropriate description for the group.
   * @internal
   */
  private get groupDescription(): string {
    return this.getI18nText(
      'description',
      { description: 'Enter {length}-digit code' },
      { length: this.length },
    );
  }

  /**
   * Gets the label for an individual field.
   * @param index - Field index (1-based for display)
   * @internal
   */
  private getFieldLabel(index: number): string {
    return this.getI18nText(
      'fieldLabel',
      { fieldLabel: 'Digit {n} of {total}' },
      { n: index + 1, total: this.length },
    );
  }

  /**
   * Renders a single PIN input field with all necessary event handlers and ARIA attributes.
   *
   * @param index Field index (0-based)
   * @returns Template for the input field
   * @internal
   */
  private renderInput(index: number) {
    const fieldLabel = this.getFieldLabel(index);

    return html`
      <input
        class=${this.$cls['input']}
        style=${this.$stl['input']}
        data-pin-input
        type="text"
        inputmode=${this['input-mode']}
        autocomplete=${index === 0 ? 'one-time-code' : 'off'}
        maxlength="1"
        placeholder="○"
        pattern=${this.pattern || ''}
        aria-label=${fieldLabel}
        .autofocus=${this.autofocus && index === 0}
        .disabled=${this.disabled ? true : index !== 0 ? true : false}
        .required=${this.required}
        @keydown=${(e: KeyboardEvent) =>
          this.handleKeyNavigation(e, e.target as HTMLInputElement)}
        @input=${(e: InputEvent) => this.handleInput(e, index)}
        @focus=${() => (this.$focus = index)}
        @blur=${() => (this.$focus = undefined)}
      />
    `;
  }

  /**
   * Renders the label element.
   * @internal
   */
  private renderLabel() {
    const hasCustomLabel = this.querySelector('[slot="label"]');

    if (hasCustomLabel) {
      return html`
        <span
          id="${this.groupId}-label"
          class=${classMap({
            [this.$cls['label']]: true,
            'sr-only': !this['show-labels'],
          })}
          style=${this.$stl['label']}
        >
          <slot name="label"></slot>
        </span>
      `;
    }

    return html`
      <span
        id="${this.groupId}-label"
        class=${classMap({
          [this.$cls['label']]: true,
          'sr-only': !this['show-labels'],
        })}
        style=${this.$stl['label']}
      >
        ${this.groupLabel}
      </span>
    `;
  }

  /**
   * Renders the description element.
   * @internal
   */
  private renderDescription() {
    const hasCustomDescription = this.querySelector('[slot="description"]');

    if (hasCustomDescription) {
      return html`
        <span
          id="${this.groupId}-desc"
          class=${classMap({
            [this.$cls['description']]: true,
            'sr-only': !this['show-labels'],
          })}
          style=${this.$stl['description']}
        >
          <slot name="description"></slot>
        </span>
      `;
    }

    return html`
      <span
        id="${this.groupId}-desc"
        class=${classMap({
          [this.$cls['description']]: true,
          'sr-only': !this['show-labels'],
        })}
        style=${this.$stl['description']}
      >
        ${this.groupDescription}
      </span>
    `;
  }

  /**
   * Renders the complete PIN input component, including all input fields, hidden form input,
   * ARIA labels, and live region for screen reader announcements.
   *
   * @returns Template for the component
   */
  render() {
    return html`
      <div
        data-host-inner
        class=${this.$cls['host-inner']}
        style=${this.$cls['host-inner']}
        role="group"
        aria-labelledby="${this.groupId}-label ${this.groupId}-desc"
      >
        ${this.renderLabel()} ${this.renderDescription()}

        <div
          class=${this.$cls['wrapper']}
          style=${this.$stl['wrapper']}
          role="presentation"
        >
          ${Array(this.length)
            .fill('')
            .map((_, index) => this.renderInput(index))}
        </div>

        <span
          role="status"
          aria-live="polite"
          aria-atomic="true"
          class="sr-only"
        ></span>

        ${this.renderHidden()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-input-pin': InputPin;
  }
}
