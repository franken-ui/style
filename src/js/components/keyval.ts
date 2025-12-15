import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Base } from './shared/base';
import { randomString } from '../helpers/common';

/* New: kebab-case CLASSES / STYLES interfaces */
interface Cls extends Record<string, string> {
  container: string;
  table: string;
  'header-row': string;
  row: string;
  'add-button': string;
  button: string;
  'key-input': string;
  input: string;
  'value-wrapper': string;
  'random-button': string;
  'value-input': string;
  actions: string;
  'toggle-button': string;
  'remove-button': string;
}

interface Stl extends Record<string, string> {
  container: string;
  table: string;
  'header-row': string;
  row: string;
  'add-button': string;
  button: string;
  'key-input': string;
  input: string;
  'value-wrapper': string;
  'random-button': string;
  'value-input': string;
  actions: string;
  'toggle-button': string;
  'remove-button': string;
}

/**
 * A headless dynamic key-value table component with advanced features.
 * All styling is delegated to `cls` and `stl` attributes for maximum flexibility.
 *
 * @element uk-keyval
 * @extends {Base}
 *
 * Features:
 * - Dynamic row addition/removal
 * - Password masking and visibility toggle for sensitive values
 * - Integration with a child <select data-fn="data-source"> for form-driven options
 * - Reactive updates from external changes (via data-reactive attribute on select)
 * - Maximum row limits and random value generation
 * - Full i18n support
 * - Comprehensive ARIA accessibility
 * - Headless design with flexible styling
 * - Keyboard navigation support
 *
 * @example
 * Basic usage:
 * ```html
 * <uk-keyval></uk-keyval>
 * ```
 *
 * @example
 * With password masking and max rows:
 * ```html
 * <uk-keyval sensitive max="5"></uk-keyval>
 * ```
 *
 * @example
 * With form integration and reactive updates:
 * ```html
 * <uk-keyval>
 *   <select data-fn="data-source" data-reactive>
 *     <option value="value1" data-key="key1">Display Text</option>
 *   </select>
 * </uk-keyval>
 * ```
 *
 * @example
 * With styling via cls attribute:
 * ```html
 * <uk-keyval
 *   cls='{
 *     "container": "keyval-wrapper",
 *     "table": "data-table",
 *     "headerRow": "table-header",
 *     "row": "table-row",
 *     "keyInput": "key-field",
 *     "valueInput": "value-field",
 *     "addButton": "btn-add",
 *     "removeButton": "btn-remove",
 *     "toggleButton": "btn-toggle",
 *     "randomButton": "btn-random"
 *   }'
 * ></uk-keyval>
 * ```
 *
 * @example
 * With i18n configuration:
 * ```html
 * <uk-keyval>
 *   <script data-fn="config" type="application/json">
 *   {
 *     "i18n": {
 *       "headerKey": "Schlüssel",
 *       "headerValue": "Wert",
 *       "placeholderKey": "Schlüssel eingeben",
 *       "placeholderValue": "Wert eingeben",
 *       "addRowLabel": "Zeile hinzufügen",
 *       "removeRowLabel": "Zeile entfernen",
 *       "toggleVisibilityLabel": "Sichtbarkeit umschalten",
 *       "generateRandomLabel": "Zufälligen Wert generieren"
 *     },
 *     "cls": {
 *       "table": "custom-table",
 *       "keyInput": "custom-input"
 *     }
 *   }
 *   </script>
 * </uk-keyval>
 * ```
 */
@customElement('uk-keyval')
export class Keyval extends Base {
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
   * Comma-separated list of default keys to populate the table.
   *
   * @example
   * ```html
   * <uk-keyval keys="api_key,secret_key,token"></uk-keyval>
   * ```
   */
  @property({ type: String })
  keys: string = '';

  /**
   * Comma-separated list of default values corresponding to keys.
   *
   * @example
   * ```html
   * <uk-keyval values="abc123,def456,ghi789"></uk-keyval>
   * ```
   */
  @property({ type: String })
  values: string = '';

  /**
   * Enables password masking and visibility toggle for value fields.
   * When true, values are masked and include visibility toggle and random generation buttons.
   *
   * @default false
   */
  @property({ type: Boolean })
  sensitive: boolean = false;

  /**
   * Disables the ability to add new rows.
   * When true, the add button is hidden and users cannot insert new key-value pairs.
   *
   * @default false
   */
  @property({ type: Boolean })
  noninsertable: boolean = false;

  /**
   * Maximum number of rows allowed. When set to 0, there is no limit.
   * If set to a positive number, the add button is disabled once this limit is reached.
   *
   * @default 0
   */
  @property({ type: Number })
  max: number = 0;

  /**
   * Minimum number of rows required. Prevents deletion below this threshold.
   *
   * @default 1
   */
  @property({ type: Number })
  min: number = 1;

  /**
   * ARIA label for the key-value table.
   * Overrides i18n label if provided.
   *
   * @example
   * ```html
   * <uk-keyval aria-label="API Configuration"></uk-keyval>
   * ```
   */
  @property({ type: String })
  'aria-label': string = '';

  /**
   * Tracks password visibility state for each row when sensitive mode is enabled.
   * Key is the row index, value is a boolean indicating if the password is visible.
   * @internal
   */
  @state()
  protected valueVisibility: { [key: number]: boolean } = {};

  /**
   * Default i18n strings (kebab-case keys).
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  protected readonly $defaultI18n = {
    'header-key': 'Key',
    'header-value': 'Value',
    'placeholder-key': 'Enter key',
    'placeholder-value': 'Enter value',
    'add-row-label': 'Add row',
    'remove-row-label': 'Remove row',
    'toggle-visibility-label': 'Toggle visibility',
    'generate-random-label': 'Generate random value',
    'table-label': 'Key-value pairs',
    'actions-label': 'Actions',
    'key-label': 'Key for row {index}',
    'value-label': 'Value for row {index}',
  };

  /**
   * CSS class configuration (kebab-case keys).
   * Headless defaults can be overridden via `cls` attribute/config.
   * @internal
   */
  @state()
  protected $cls: Cls = {
    container: 'uk-keyval',
    table: 'uk-table uk-table-divider',
    'header-row': '',
    row: '',
    'add-button': 'uk-button uk-button-default',
    button: 'uk-keyval-button',
    'key-input': '',
    input: 'uk-input',
    'value-wrapper': 'uk-keyval-value-wrapper',
    'random-button': '',
    'value-input': 'uk-input',
    actions: 'uk-keyval-actions',
    'toggle-button': '',
    'remove-button': '',
  };

  /**
   * Inline styles configuration (kebab-case keys).
   * @internal
   */
  @state()
  protected $stl: Stl = {
    container: '',
    table: '',
    'header-row': '',
    row: '',
    'add-button': '',
    button: '',
    'key-input': '',
    input: '',
    'value-wrapper': '',
    'random-button': '',
    'value-input': '',
    actions: '',
    'toggle-button': '',
    'remove-button': '',
  };

  /**
   * Lit lifecycle method called when the element is added to the DOM.
   * Initializes data structure if no data source is present.
   * @override
   */
  connectedCallback(): void {
    super.connectedCallback();

    // Initialize empty data if no data source provided
    if (!this.HTMLDataSource) {
      this.initializeEmptyData();
      this.addRow();
    }

    this.initializePasswordVisibility();
  }

  /**
   * Hook called when data source changes (via reactive observer in Base class).
   * Ensures we have at least one row after data updates.
   * @override
   */
  protected onDataSourceChanged(): void {
    if (
      !this.$data.__ ||
      !this.$data.__.options ||
      this.$data.__.options.length === 0
    ) {
      this.initializeEmptyData();
      this.addRow();
    }
  }

  /**
   * Initializes empty data structure when no select element is present.
   * @private
   */
  private initializeEmptyData(): void {
    this.$data = {
      __: {
        text: '__',
        options: [],
      },
    };
  }

  /**
   * Initializes password visibility state for all rows when sensitive mode is enabled.
   * @private
   */
  private initializePasswordVisibility(): void {
    if (this.sensitive && this.$data.__ && this.$data.__.options) {
      this.$data.__.options.forEach((_, index) => {
        this.valueVisibility[index] = false;
      });
    }
  }

  /**
   * Checks if adding a new row is allowed based on max limit.
   * @returns True if can add, false otherwise
   * @private
   */
  private canAddRow(): boolean {
    if (this.max === 0) return true;
    return this.$data.__.options.length < this.max;
  }

  /**
   * Checks if removing a row is allowed based on min limit.
   * @returns True if can remove, false otherwise
   * @private
   */
  private canRemoveRow(): boolean {
    return this.$data.__.options.length > this.min;
  }

  /**
   * Adds a new empty row to the key-value table.
   * Initializes the row with empty key and value, and sets up password visibility if needed.
   * @protected
   */
  protected addRow(): void {
    if (!this.canAddRow()) return;

    if (!this.$data.__) {
      this.initializeEmptyData();
    }

    const newIndex = this.$data.__.options.length;

    this.$data.__.options.push({
      group: '__',
      value: '',
      text: '',
      disabled: false,
      selected: false,
      data: { gid: '' },
    });

    // Initialize visibility for new row based on sensitive setting
    if (this.sensitive) {
      this.valueVisibility[newIndex] = false;
    }

    this.requestUpdate();

    // Focus the key input of the new row after render
    this.updateComplete.then(() => {
      const inputs = this.renderRoot.querySelectorAll('[data-field="key"]');
      const newInput = inputs[newIndex] as HTMLInputElement;
      if (newInput) {
        newInput.focus();
      }
    });
  }

  /**
   * Removes a row from the key-value table at the specified index.
   * Prevents removal if minimum row count would be violated.
   * Reindexes visibility tracking after removal.
   *
   * @param index The zero-based index of the row to remove.
   * @protected
   */
  protected removeRow(index: number): void {
    if (!this.canRemoveRow()) return;

    if (this.$data.__ && this.$data.__.options) {
      this.$data.__.options.splice(index, 1);
      this.reindexVisibilityAfterRemoval(index);
      this.requestUpdate();
    }
  }

  /**
   * Reindexes the password visibility tracking object after a row is removed.
   * Shifts all indices greater than the removed index down by one.
   *
   * @param removedIndex The index of the removed row.
   * @private
   */
  private reindexVisibilityAfterRemoval(removedIndex: number): void {
    const newVisibility: { [key: number]: boolean } = {};

    Object.keys(this.valueVisibility).forEach(key => {
      const numKey = parseInt(key);
      if (numKey < removedIndex) {
        newVisibility[numKey] = this.valueVisibility[numKey];
      } else if (numKey > removedIndex) {
        newVisibility[numKey - 1] = this.valueVisibility[numKey];
      }
    });

    this.valueVisibility = newVisibility;
  }

  /**
   * Handles changes to the key input field for a specific row.
   * Updates the internal data structure and triggers a re-render.
   *
   * @param index The zero-based index of the row being modified.
   * @param event The input event containing the new key value.
   * @protected
   */
  protected handleKeyChange(index: number, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const keyValue = inputElement.value;

    if (this.$data.__ && this.$data.__.options[index]) {
      this.$data.__.options[index].data.gid = keyValue;
      this.requestUpdate();
    }
  }

  /**
   * Handles changes to the value input field for a specific row.
   * Updates the internal data structure and triggers a re-render.
   *
   * @param index The zero-based index of the row being modified.
   * @param event The input event containing the new value.
   * @protected
   */
  protected handleValueChange(index: number, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const value = inputElement.value;

    if (this.$data.__ && this.$data.__.options[index]) {
      this.$data.__.options[index].value = value;
      this.requestUpdate();
    }
  }

  /**
   * Generates and sets a random value for the specified row.
   * Uses a 16-character random ID. Only available in sensitive mode.
   *
   * @param index The zero-based index of the row to update.
   * @protected
   */
  protected setRandomValue(index: number): void {
    if (this.$data.__ && this.$data.__.options[index]) {
      this.$data.__.options[index].value = randomString(16);
      this.valueVisibility[index] = true; // Show the generated value
      this.requestUpdate();
    }
  }

  /**
   * Toggles the password visibility for a specific row.
   * Only functional when sensitive mode is enabled.
   *
   * @param index The zero-based index of the row to toggle.
   * @protected
   */
  protected togglePasswordVisibility(index: number): void {
    if (this.sensitive) {
      this.valueVisibility[index] = !this.valueVisibility[index];
      this.requestUpdate();
    }
  }

  /**
   * Gets the current password visibility state for a specific row.
   *
   * @param index The zero-based index of the row to check.
   * @returns True if the password is currently visible, false otherwise.
   * @protected
   */
  protected getPasswordVisibility(index: number): boolean {
    return this.valueVisibility[index] || false;
  }

  /**
   * Determines the appropriate input type for a value field based on sensitivity and visibility.
   *
   * @param index The zero-based index of the row.
   * @returns 'password' for hidden sensitive fields, 'text' otherwise.
   * @protected
   */
  protected getInputType(index: number): 'text' | 'password' {
    if (!this.sensitive) {
      return 'text';
    }

    return this.getPasswordVisibility(index) ? 'text' : 'password';
  }

  /**
   * Handles keyboard events on the table for accessibility.
   * Supports keyboard shortcuts for common actions.
   *
   * @param e Keyboard event
   * @private
   */
  private handleKeyDown = (e: KeyboardEvent): void => {
    // Ctrl/Cmd + Enter to add row
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && !this.noninsertable) {
      e.preventDefault();
      this.addRow();
    }
  };

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
      case 'plus':
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        `;
      case 'wand':
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
            <path d="M15 4V2" />
            <path d="M15 16v-2" />
            <path d="M8 9h2" />
            <path d="M20 9h2" />
            <path d="M17.8 11.8 19 13" />
            <path d="M15 9h.01" />
            <path d="M17.8 6.2 19 5" />
            <path d="m3 21 9-9" />
            <path d="M12.2 6.2 11 5" />
          </svg>
        `;
      case 'eye-off':
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
            <path
              d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
            />
            <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
            <path
              d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
            />
            <path d="m2 2 20 20" />
          </svg>
        `;
      case 'eye':
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
            <path
              d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>
        `;
      case 'trash-2':
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        `;
    }
  }

  /**
   * Renders the key-value table component with all interactive features.
   * This is a headless component - all styling comes from cls/stl attributes.
   * Includes comprehensive ARIA attributes for accessibility.
   *
   * @returns Template result for the component.
   */
  render() {
    const tableLabel =
      this['aria-label'] || this.getI18nText('table-label', this.$defaultI18n);
    const headerKey = this.getI18nText('header-key', this.$defaultI18n);
    const headerValue = this.getI18nText('header-value', this.$defaultI18n);
    const actionsLabel = this.getI18nText('actions-label', this.$defaultI18n);
    const addRowLabel = this.getI18nText('add-row-label', this.$defaultI18n);

    return html`
      <div
        data-host-inner
        class="${this.$cls['container'] || ''}"
        style="${this.$stl['container'] || ''}"
        @keydown="${this.handleKeyDown}"
      >
        <table
          class="${this.$cls['table'] || ''}"
          style="${this.$stl['table'] || ''}"
          role="table"
          aria-label="${tableLabel}"
        >
          <thead>
            <tr
              class="${this.$cls['header-row'] || ''}"
              style="${this.$stl['header-row'] || ''}"
              role="row"
            >
              <th role="columnheader">${headerKey}</th>
              <th role="columnheader">${headerValue}</th>
              <th role="columnheader">
                ${actionsLabel}
                ${this.noninsertable
                  ? ''
                  : html`
                      <button
                        class="${this.$cls['add-button'] ||
                        this.$cls['button'] ||
                        ''}"
                        style="${this.$stl['add-button'] ||
                        this.$stl['button'] ||
                        ''}"
                        type="button"
                        aria-label="${addRowLabel}"
                        ?disabled="${!this.canAddRow()}"
                        @click=${() => this.addRow()}
                      >
                        ${this.$icons('plus')}
                      </button>
                    `}
              </th>
            </tr>
          </thead>
          <tbody>
            ${this.$data.__ && this.$data.__.options
              ? this.$data.__.options.map((option, index) => {
                  const keyLabel = this.getI18nText(
                    'key-label',
                    this.$defaultI18n,
                    { index: String(index + 1) },
                  );
                  const valueLabel = this.getI18nText(
                    'value-label',
                    this.$defaultI18n,
                    { index: String(index + 1) },
                  );
                  const placeholderKey = this.getI18nText(
                    'placeholder-key',
                    this.$defaultI18n,
                  );
                  const placeholderValue = this.getI18nText(
                    'placeholder-value',
                    this.$defaultI18n,
                  );
                  const removeLabel = this.getI18nText(
                    'remove-row-label',
                    this.$defaultI18n,
                  );
                  const toggleLabel = this.getI18nText(
                    'toggle-visibility-label',
                    this.$defaultI18n,
                  );
                  const randomLabel = this.getI18nText(
                    'generate-random-label',
                    this.$defaultI18n,
                  );

                  return html`
                    <tr
                      class="${this.$cls['row'] || ''}"
                      style="${this.$stl['row'] || ''}"
                      role="row"
                      data-row-index="${index}"
                    >
                      <td role="cell">
                        <input
                          class="${this.$cls['key-input'] ||
                          this.$cls['input'] ||
                          ''}"
                          style="${this.$stl['key-input'] ||
                          this.$stl['input'] ||
                          ''}"
                          autocomplete="off"
                          type="text"
                          placeholder="${placeholderKey}"
                          value="${option.data.gid || ''}"
                          aria-label="${keyLabel}"
                          data-field="key"
                          @input=${(e: Event) => this.handleKeyChange(index, e)}
                        />
                      </td>
                      <td role="cell">
                        <div
                          class="${this.$cls['value-wrapper'] || ''}"
                          style="${this.$stl['value-wrapper'] || ''}"
                        >
                          ${this.sensitive
                            ? html`
                                <button
                                  class="${this.$cls['random-button'] ||
                                  this.$cls['button'] ||
                                  ''}"
                                  style="${this.$stl['random-button'] ||
                                  this.$stl['button'] ||
                                  ''}"
                                  type="button"
                                  aria-label="${randomLabel}"
                                  ?disabled="${!!option.value}"
                                  @click=${() => this.setRandomValue(index)}
                                >
                                  ${this.$icons('wand')}
                                </button>
                              `
                            : ''}

                          <input
                            class="${this.$cls['value-input'] ||
                            this.$cls['input'] ||
                            ''}"
                            style="${this.$stl['value-input'] ||
                            this.$stl['input'] ||
                            ''}"
                            autocomplete="off"
                            type="${this.getInputType(index)}"
                            placeholder="${placeholderValue}"
                            name="${option.data.gid || ''}"
                            value="${option.value}"
                            aria-label="${valueLabel}"
                            data-field="value"
                            ?disabled=${!option.data.gid}
                            @input=${(e: Event) =>
                              this.handleValueChange(index, e)}
                          />
                        </div>
                      </td>
                      <td role="cell">
                        <div
                          class="${this.$cls['actions'] || ''}"
                          style="${this.$stl['actions'] || ''}"
                          role="group"
                          aria-label="${actionsLabel}"
                        >
                          ${this.sensitive
                            ? html`
                                <button
                                  class="${this.$cls['toggle-button'] ||
                                  this.$cls['button'] ||
                                  ''}"
                                  style="${this.$stl['toggle-button'] ||
                                  this.$stl['button'] ||
                                  ''}"
                                  type="button"
                                  aria-label="${toggleLabel}"
                                  aria-pressed="${this.getPasswordVisibility(
                                    index,
                                  )}"
                                  @click=${() =>
                                    this.togglePasswordVisibility(index)}
                                >
                                  ${this.getPasswordVisibility(index)
                                    ? this.$icons('eye-off')
                                    : this.$icons('eye')}
                                </button>
                              `
                            : ''}
                          <button
                            class="${this.$cls['remove-button'] ||
                            this.$cls['button'] ||
                            ''}"
                            style="${this.$stl['remove-button'] ||
                            this.$stl['button'] ||
                            ''}"
                            type="button"
                            aria-label="${removeLabel}"
                            ?disabled=${!this.canRemoveRow()}
                            @click=${() => this.removeRow(index)}
                          >
                            ${this.$icons('trash-2')}
                          </button>
                        </div>
                      </td>
                    </tr>
                  `;
                })
              : ''}
          </tbody>
        </table>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-keyval': Keyval;
  }
}
