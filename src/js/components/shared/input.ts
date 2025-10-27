import { html } from 'lit';
import { property } from 'lit/decorators.js';
import type { Base } from './base';

/**
 * Type helper for constructor functions (supports abstract classes)
 */
type Constructor<T = {}> = abstract new (...args: any[]) => T;

/**
 * Mixin that adds input-related properties and methods
 * to a class that extends Base.
 *
 * Used to give components form-like behavior while allowing
 * flexible composition via mixins.
 */
export const InputMixin = <TBase extends Constructor<Base>>(
  BaseClass: TBase,
) => {
  abstract class Input extends BaseClass {
    /**
     * Whether the input is disabled and cannot be interacted with.
     */
    @property({ type: Boolean })
    disabled: boolean = false;

    /**
     * The name attribute for form submission.
     * Used in hidden inputs and form data collection.
     */
    @property({ type: String })
    name: string = '';

    /**
     * Placeholder text displayed when no value is selected/entered.
     */
    @property({ type: String })
    placeholder: string = '';

    /**
     * Whether the input is required for form validation.
     */
    @property({ type: Boolean })
    required: boolean = false;

    /**
     * The current value of the input as a string.
     * This is the external/attribute value, internal value is handled by $value getter.
     */
    @property({ type: String })
    value: string = '';

    /**
     * Renders hidden input elements to synchronize the component's value with form submission.
     * Creates hidden inputs that mirror the component's value, allowing server-side form processing
     * to capture data from custom UI components.
     *
     * For a single value, renders one hidden input with the value.
     * For arrays, renders multiple hidden inputs using array notation (name[]).
     *
     * @example
     * ```html
     * <!-- Single value -->
     * <input name="country" type="hidden" value="US" />
     *
     * <!-- Array value -->
     * <input name="tags[]" type="hidden" value="tag1" />
     * <input name="tags[]" type="hidden" value="tag2" />
     * ```
     */
    protected renderHidden() {
      return typeof this.$value === 'string'
        ? this.name
          ? html`
              <input name="${this.name}" type="hidden" value="${this.$value}" />
            `
          : ''
        : (this.$value as string[]).map(
            item => html`
              <input name="${this.name}[]" type="hidden" value="${item}" />
            `,
          );
    }

    /**
     * Emits a custom event when the input value changes.
     * Dispatches the event defined by the 'input-event' property with the current $value as detail.
     * The event bubbles and is composed to support cross-shadow DOM communication.
     */
    protected emit() {
      this.dispatchEvent(
        new CustomEvent(this['input-event'], {
          detail: { value: this.$value },
          bubbles: true,
          composed: true,
        }),
      );
    }

    /**
     * Lit lifecycle method called when component is added to DOM.
     * Calls parent initialization then sets up the component's initial value.
     */
    connectedCallback(): void {
      super.connectedCallback();

      this.initializeValue();
    }

    /**
     * The transformed/processed value used internally and for form submission.
     * Can be a single string or array of strings depending on component type.
     *
     * @example
     * // For select: transforms "1" to actual selected option value
     * // For multi-select: returns array of selected values ["option1", "option2"]
     */
    protected abstract get $value(): string | string[];

    /**
     * The display text representation of the current value.
     * Used for rendering human-readable text while $value contains the actual data.
     *
     * @example
     * // $value might be "1", but $text could be "Apple" (from lookup)
     * // For multi-select: "Apple, Orange, Banana" while $value is ["1", "2", "3"]
     */
    protected abstract get $text(): string;

    /**
     * The name of the custom event to dispatch when value changes.
     * Must be implemented by subclasses to define their specific event type.
     */
    protected abstract 'input-event': string;

    /**
     * Initializes the component's value from the value property or other sources.
     * Called during connectedCallback to set up initial state.
     * Implementation varies by component type (parsing strings, setting defaults, etc.).
     */
    protected abstract initializeValue(): void;
  }

  return Input;
};
