import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { parseOptions } from '../helpers/options';
import slugify from 'slugify';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

type SlugOptions = {
  replacement: string;
  remove: undefined | RegExp;
  lower: boolean;
  strict: boolean;
  locale: string;
  trim: boolean;
};

/**
 * A headless tag input component that allows users to add, edit, and remove tags.
 * All styling is delegated to `cls` and `stl` attributes for maximum flexibility.
 *
 * @element fr-input-tag
 * @extends {Input}
 *
 * Features:
 * - Tag creation via comma/enter key
 * - Optional slug transformation
 * - Click-to-edit functionality
 * - Length validation
 * - Keyboard navigation (Backspace, Arrow keys)
 * - Form integration
 * - Full i18n support
 * - Headless design with flexible styling
 * - ARIA accessibility
 *
 * @fires fr-input-tag:input - Emitted when tags are added or removed
 *
 * @example
 * Basic usage:
 * ```html
 * <fr-input-tag
 *   name="tags"
 *   placeholder="Add tags..."
 *   slugify
 *   minlength="2"
 *   maxlength="15">
 * </fr-input-tag>
 * ```
 *
 * @example
 * With styling via cls attribute:
 * ```html
 * <fr-input-tag
 *   cls='{
 *     "container": "tag-input-wrapper",
 *     "tagList": "tags-list",
 *     "tag": "tag-item",
 *     "tagText": "tag-text",
 *     "tagRemove": "tag-remove-btn",
 *     "input": "tag-input-field"
 *   }'
 * ></fr-input-tag>
 * ```
 *
 * @example
 * With i18n and configuration via script:
 * ```html
 * <fr-input-tag>
 *   <script type="application/json">
 *   {
 *     "i18n": {
 *       "placeholder": "Add a tag...",
 *       "removeLabel": "Remove tag",
 *       "editLabel": "Edit tag",
 *       "tagListLabel": "Tags",
 *       "minLengthError": "Tag must be at least {min} characters",
 *       "maxLengthError": "Tag cannot exceed {max} characters",
 *       "duplicateError": "Tag already exists"
 *     },
 *     "cls": {
 *       "container": "my-tag-input",
 *       "tag": "my-tag"
 *     }
 *   }
 *   </script>
 * </fr-input-tag>
 * ```
 */
@customElement('fr-input-tag')
export class InputTag extends InputMixin(Base) {
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
  protected readonly 'input-event' = 'fr-input-tag:input';

  /**
   * Maximum character length allowed for each tag.
   * Tags exceeding this length will be truncated or rejected.
   *
   * @default 20
   * @example
   * ```html
   * <fr-input-tag maxlength="10"></fr-input-tag>
   * ```
   */
  @property({ type: Number })
  maxlength: number = 20;

  /**
   * Minimum character length required for each tag.
   * Tags shorter than this length will not be added.
   *
   * @default 1
   * @example
   * ```html
   * <fr-input-tag minlength="3"></fr-input-tag>
   * ```
   */
  @property({ type: Number })
  minlength: number = 1;

  /**
   * Enables slug transformation for tags, converting them to a URL-friendly format.
   * When enabled, tags are automatically slugified on entry.
   *
   * @default false
   * @example
   * ```html
   * <fr-input-tag slugify></fr-input-tag>
   * ```
   */
  @property({ type: Boolean })
  slugify: boolean = false;

  /**
   * Slugify configuration options as a JSON string.
   * Allows customization of slugification behavior (e.g., replacement character, case, strictness).
   *
   * @example
   * ```html
   * <fr-input-tag slugify slugify-options='{"lower": true, "replacement": "-", "strict": true}'></fr-input-tag>
   * ```
   */
  @property({ type: String })
  'slugify-options': string = '';

  /**
   * Delimiter characters that trigger tag creation.
   * Can be a single character or comma-separated list.
   *
   * @default ','
   * @example
   * ```html
   * <fr-input-tag delimiters=",;"></fr-input-tag>
   * ```
   */
  @property({ type: String })
  delimiters: string = ',';

  /**
   * Allows duplicate tags when enabled.
   *
   * @default false
   * @example
   * ```html
   * <fr-input-tag allow-duplicates></fr-input-tag>
   * ```
   */
  @property({ type: Boolean })
  'allow-duplicates': boolean = false;

  /**
   * Maximum number of tags allowed.
   * Set to 0 for unlimited.
   *
   * @default 0
   * @example
   * ```html
   * <fr-input-tag max-tags="10"></fr-input-tag>
   * ```
   */
  @property({ type: Number })
  'max-tags': number = 0;

  /**
   * Current value of the input field being typed by the user.
   * Used for creating new tags.
   * @internal
   */
  @state()
  protected $input: string = '';

  /**
   * Parsed slugify options with defaults, used for tag transformation.
   * @internal
   */
  @state()
  protected $slugOptions: Partial<SlugOptions> = {
    lower: true,
    strict: true,
  };

  /**
   * Array of tags currently created by the user.
   * @internal
   */
  @state()
  protected $tags: string[] = [];

  /**
   * Error message to display for validation failures.
   * @internal
   */
  @state()
  protected $error: string = '';

  /**
   * Default i18n strings for labels and messages.
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  private readonly defaultI18n = {
    placeholder: 'Add a tag...',
    removeLabel: 'Remove tag',
    editLabel: 'Edit tag',
    tagListLabel: 'Tags',
    minLengthError: 'Tag must be at least {min} characters',
    maxLengthError: 'Tag cannot exceed {max} characters',
    duplicateError: 'Tag already exists',
    maxTagsError: 'Maximum {max} tags allowed',
    inputLabel: 'Tag input',
  };

  /**
   * Returns the array of tags for form submission and events.
   *
   * @returns Array of tag strings
   */
  protected get $value(): string[] {
    return this.$tags;
  }

  /**
   * Returns a display text representation (not used for tag inputs).
   *
   * @returns An empty string
   */
  protected get $text(): string {
    return '';
  }

  /**
   * Returns array of delimiter characters.
   * @internal
   */
  private get delimiterChars(): string[] {
    return this.delimiters.split('');
  }

  /**
   * Initializes the component value from a comma-separated string and parses slug options.
   * Called on component initialization.
   */
  protected initializeValue(): void {
    this.initializeTags();
    this.initializeSlugOptions();
  }

  /**
   * Parses initial tags from the value property and populates the tag array.
   * @internal
   */
  private initializeTags(): void {
    this.$tags = this.value === '' ? [] : this.value.split(',');
  }

  /**
   * Parses and applies slugify options from the slugify-options property.
   * @internal
   */
  private initializeSlugOptions(): void {
    if (!this['slugify-options']) return;

    const options = parseOptions(this['slugify-options']) as Record<
      string,
      string
    >;

    if (options.replacement) {
      this.$slugOptions.replacement = options.replacement;
    }

    if (options.remove) {
      this.$slugOptions.remove = new RegExp(options.remove, 'g');
    }

    if (options.lower) {
      this.$slugOptions.lower = options.lower === 'true';
    }

    if (options.strict) {
      this.$slugOptions.strict = options.strict === 'true';
    }

    if (options.locale) {
      this.$slugOptions.locale = options.locale;
    }

    if (options.trim) {
      this.$slugOptions.trim = options.trim === 'true';
    }
  }

  /**
   * Validates a tag against length and duplicate constraints.
   *
   * @param tag Tag to validate
   * @returns True if valid, false otherwise
   * @internal
   */
  private validateTag(tag: string): boolean {
    this.$error = '';

    if (tag.length < this.minlength) {
      this.$error = this.getI18nText('minLengthError', this.defaultI18n, {
        min: String(this.minlength),
      });
      return false;
    }

    if (tag.length > this.maxlength) {
      this.$error = this.getI18nText('maxLengthError', this.defaultI18n, {
        max: String(this.maxlength),
      });
      return false;
    }

    if (!this['allow-duplicates'] && this.$tags.includes(tag)) {
      this.$error = this.getI18nText('duplicateError', this.defaultI18n);
      return false;
    }

    if (this['max-tags'] > 0 && this.$tags.length >= this['max-tags']) {
      this.$error = this.getI18nText('maxTagsError', this.defaultI18n, {
        max: String(this['max-tags']),
      });
      return false;
    }

    return true;
  }

  /**
   * Adds the current input as a new tag if it is valid and not a duplicate.
   * Applies slug transformation if enabled.
   * Emits an input event on success.
   * @internal
   */
  private addTag(): void {
    if (!this.$input.trim()) {
      return;
    }

    let tag = this.$input.trim();

    if (this.slugify) {
      tag = slugify(tag, this.$slugOptions);
    }

    if (this.validateTag(tag)) {
      this.$tags = [...this.$tags, tag];
      this.$input = '';
      this.$error = '';
      this.emit();
      this.requestUpdate();
    }
  }

  /**
   * Removes the tag at the specified index.
   * Emits an input event after removal.
   *
   * @param index Index of the tag to remove
   * @internal
   */
  private removeTag(index: number): void {
    if (this.disabled) return;

    this.$tags = this.$tags.filter((_, i) => i !== index);
    this.$error = '';
    this.emit();
    this.requestUpdate();
  }

  /**
   * Moves the tag at the specified index back to the input field for editing.
   * Focuses the input after state update.
   *
   * @param index Index of the tag to edit
   * @internal
   */
  private editTag(index: number): void {
    if (this.disabled) return;

    this.$input = this.$tags[index];
    this.removeTag(index);

    // Focus input after state update
    this.updateComplete.then(() => {
      this.renderRoot.querySelector('input')?.focus();
    });
  }

  /**
   * Handles keyboard interactions for tag management (add, edit, remove, navigate).
   * Supports Backspace, delimiter keys, Enter, and Arrow keys.
   *
   * @param e Keyboard event
   * @internal
   */
  private handleKeydown(e: KeyboardEvent): void {
    switch (e.key) {
      case 'Backspace':
        if (this.$tags.length > 0 && this.$input.length === 0) {
          e.preventDefault();
          this.editTag(this.$tags.length - 1);
        }
        break;

      case 'Enter':
        e.preventDefault();
        this.addTag();
        break;

      case 'Escape':
        if (this.$input) {
          e.preventDefault();
          this.$input = '';
          this.$error = '';
          this.requestUpdate();
        }
        break;

      default:
        // Check if key is a delimiter
        if (this.delimiterChars.includes(e.key)) {
          e.preventDefault();
          this.addTag();
        }
        break;
    }
  }

  /**
   * Handles input field changes and updates the current input value.
   *
   * @param e Input event
   * @internal
   */
  private handleInput(e: InputEvent): void {
    const input = e.target as HTMLInputElement;
    this.$input = input.value;
    this.$error = ''; // Clear error on new input
  }

  /**
   * Handles paste events to allow pasting multiple tags at once.
   *
   * @param e Clipboard event
   * @internal
   */
  private handlePaste(e: ClipboardEvent): void {
    const pastedText = e.clipboardData?.getData('text');

    if (!pastedText) return;

    // Check if pasted text contains delimiters
    const hasDelimiters = this.delimiterChars.some(d => pastedText.includes(d));

    if (hasDelimiters) {
      e.preventDefault();

      // Split by all delimiters
      const delimiterRegex = new RegExp(`[${this.delimiterChars.join('')}]`);
      const tags = pastedText
        .split(delimiterRegex)
        .map(t => t.trim())
        .filter(t => t.length > 0);

      // Add each tag
      tags.forEach(tag => {
        if (this.slugify) {
          tag = slugify(tag, this.$slugOptions);
        }

        if (this.validateTag(tag)) {
          this.$tags = [...this.$tags, tag];
        }
      });

      this.$input = '';
      this.emit();
      this.requestUpdate();
    }
  }

  /**
   * Renders a single tag element with edit and remove functionality.
   * Includes ARIA attributes for accessibility.
   *
   * @param tag Tag text
   * @param index Tag index
   * @returns Template for the tag element
   * @internal
   */
  private renderTag(tag: string, index: number) {
    const removeLabel = this.getI18nText('removeLabel', this.defaultI18n);
    const editLabel = this.getI18nText('editLabel', this.defaultI18n);

    return html`
      <div
        class="${this.$cls['tag'] || ''}"
        part="tag"
        style="${this.$stl['tag'] || ''}"
        role="listitem"
        data-tag-index="${index}"
      >
        <span
          class="${this.$cls['tagText'] || ''}"
          part="tag-text"
          style="${this.$stl['tagText'] || ''}"
          role="button"
          tabindex="${this.disabled ? '-1' : '0'}"
          aria-label="${editLabel}: ${tag}"
          @click="${() => this.editTag(index)}"
          @keydown="${(e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.editTag(index);
            }
          }}"
        >
          ${tag}
        </span>
        <button
          type="button"
          class="${this.$cls['tagRemove'] || ''}"
          part="tag-remove"
          style="${this.$stl['tagRemove'] || ''}"
          aria-label="${removeLabel}: ${tag}"
          ?disabled="${this.disabled}"
          @click="${() => this.removeTag(index)}"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;
  }

  /**
   * Renders an error message if validation fails.
   *
   * @returns Template for the error message
   * @internal
   */
  private renderError() {
    if (!this.$error) return '';

    return html`
      <div
        class="${this.$cls['error'] || ''}"
        part="error"
        style="${this.$stl['error'] || ''}"
        role="alert"
        aria-live="polite"
      >
        ${this.$error}
      </div>
    `;
  }

  /**
   * Renders the complete tag input component, including tags, input field, and hidden input for form integration.
   * This is a headless component - all styling comes from cls/stl attributes.
   *
   * @returns Template for the component
   */
  render() {
    const placeholder =
      this.placeholder || this.getI18nText('placeholder', this.defaultI18n);
    const tagListLabel = this.getI18nText('tagListLabel', this.defaultI18n);
    const inputLabel = this.getI18nText('inputLabel', this.defaultI18n);

    return html`
      <div
        data-host-inner
        class="${this.$cls['container'] || ''}"
        part="container"
        style="${this.$stl['container'] || ''}"
        data-disabled="${this.disabled}"
        data-has-error="${!!this.$error}"
      >
        <div
          class="${this.$cls['tagList'] || ''}"
          part="tag-list"
          style="${this.$stl['tagList'] || ''}"
          role="list"
          aria-label="${tagListLabel}"
        >
          ${this.$tags.map((tag, index) => this.renderTag(tag, index))}
        </div>

        <input
          class="${this.$cls['input'] || ''}"
          part="input"
          style="${this.$stl['input'] || ''}"
          type="text"
          role="textbox"
          aria-label="${inputLabel}"
          aria-invalid="${!!this.$error}"
          aria-describedby="${this.$error ? 'tag-error' : ''}"
          autocomplete="off"
          placeholder="${placeholder}"
          maxlength="${this.maxlength}"
          .value="${this.$input}"
          ?disabled="${this.disabled}"
          @keydown="${this.handleKeydown}"
          @input="${this.handleInput}"
          @paste="${this.handlePaste}"
        />

        ${this.renderError()} ${this.renderHidden()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fr-input-tag': InputTag;
  }
}
