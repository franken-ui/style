/**
 * @fileoverview
 * Select Component - A customizable dropdown select with search and multi-select support.
 *
 * This component provides a dropdown select interface with optional search functionality,
 * multi-select capability, and dynamic option insertion. It integrates with UIKit's
 * dropdown system and supports keyboard navigation, accessibility features, and
 * customizable styling.
 *
 * Features:
 * - Single and multi-select modes
 * - Optional search filtering
 * - Dynamic option insertion via API
 * - Keyboard navigation (arrow keys, Enter, Escape)
 * - Accessibility support (ARIA labels, roles, semantic HTML)
 * - Customizable styling via CSS classes and inline styles
 * - Icon support for options and buttons
 * - Internationalization support for labels and messages
 */
import { html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { type OptionItem } from '../helpers/select';
import { BaseSelectMixin } from './shared/base-select';
import { repeat } from 'lit/directives/repeat.js';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

type Cls = {
  'host-inner': string;
  button: string;
  'button-text': string;
  icon: string;
  list: string;
  item: string;
  'item-active': string;
  'item-disabled': string;
  'item-header': string;
  'item-link': string;
  'item-wrapper': string;
  'item-icon': string;
  'item-text': string;
  'item-check': string;
  'item-subtitle': string;
  search: string;
  'search-input': string;
  'search-icon': string;
  dropdown: string;
  divider: string;
};

type Stl = {
  'host-inner': string;
  button: string;
  'button-text': string;
  icon: string;
  list: string;
  item: string;
  'item-active': string;
  'item-disabled': string;
  'item-header': string;
  'item-link': string;
  'item-wrapper': string;
  'item-icon': string;
  'item-text': string;
  'item-check': string;
  'item-subtitle': string;
  search: string;
  'search-input': string;
  'search-icon': string;
  dropdown: string;
  divider: string;
};

@customElement('uk-select')
export class Select extends BaseSelectMixin(InputMixin(Base)) {
  protected 'cls-default-element' = 'button';
  protected 'stl-default-element' = 'button';
  protected readonly 'input-event': string = 'uk-select:input';
  protected readonly 'search-event': string = 'uk-select:search';

  @property({ type: String })
  drop: string = 'mode: click; animation: uk-animation-slide-top-small;';

  @property({ type: Boolean })
  searchable: boolean = false;

  @property({ type: Boolean })
  insertable: boolean = false;

  @property({ type: String, attribute: 'send-headers' })
  'send-headers': string = '';

  @property({ type: String, attribute: 'send-url' })
  'send-url': string = '';

  @property({ type: String, attribute: 'send-method' })
  'send-method': string = 'POST';

  @property({ type: Boolean })
  multiple: boolean = false;

  /**
   * Icon to display in the select button.
   * If not provided, defaults to 'chevrons-up-down'.
   */
  @property({ type: String })
  icon: string = '';

  /**
   * Array of currently selected values.
   * In single-select mode, contains at most one value.
   * In multi-select mode, can contain multiple values.
   */
  @state()
  $selected: string[] = [];

  @state()
  protected $cls: Cls = {
    'host-inner': 'uk-position-relative',
    button: '',
    'button-text': '',
    icon: '',
    list: 'uk-nav uk-dropdown-nav uk-overflow-auto uk-custom-select-list',
    item: '',
    'item-active': 'uk-active',
    'item-disabled': 'uk-disabled',
    'item-header': 'uk-nav-header',
    'item-link': '',
    'item-wrapper': 'uk-custom-select-item-wrapper',
    'item-icon': 'uk-custom-select-item-icon',
    'item-text': 'uk-custom-select-item-text',
    'item-check': '',
    'item-subtitle': '',
    search: 'uk-custom-select-search',
    'search-input': '',
    'search-icon': '',
    dropdown: 'uk-select-dropdown',
    divider: 'uk-hr',
  };

  @state()
  protected $stl: Stl = {
    'host-inner': '',
    button: '',
    'button-text': '',
    icon: '',
    list: '',
    item: '',
    'item-active': 'uk-active',
    'item-disabled': 'uk-disabled',
    'item-header': '',
    'item-link': '',
    'item-wrapper': '',
    'item-icon': '',
    'item-text': '',
    'item-check': '',
    'item-subtitle': '',
    search: '',
    'search-input': '',
    'search-icon': '',
    dropdown: '',
    divider: 'uk-hr',
  };

  /**
   * Default i18n strings for labels and messages.
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  protected readonly defaultI18n = {
    'button-label': 'Select an option',
    'selection-count': '{n} options selected',
    'search-placeholder': 'Search',
    insert: 'Insert',
    'list-label': 'Options',
  };

  private HTMLDrop: Element | null = null;

  protected get $text(): string {
    if (this.$selected.length === 0) {
      return this.placeholder !== ''
        ? this.placeholder
        : this.getI18nText('button-label', this.defaultI18n);
    }

    if (this.multiple === false && this.selected) {
      return this.selected.text;
    }

    if (this.$selected.length === 1 && this.selected) {
      return this.selected.text;
    }

    return this.getI18nText('selection-count', this.defaultI18n, {
      n: this.$selected.length,
    });
  }

  protected get $value(): string | string[] {
    return this.multiple
      ? this.$selected
      : this.$selected.length === 1
        ? this.$selected[0]
        : '';
  }

  /**
   * Calculates the total count of available options.
   * Includes the insertable option if search term is non-empty
   * and doesn't match an existing option.
   */
  override get count(): number {
    let total =
      this.insertable && this.$term !== '' && !this.hasOption(this.$term)
        ? 1
        : 0;

    for (const parent in this.options) {
      const count = this.options[parent].options.length;
      total += count;
    }

    return total - 1;
  }

  /**
   * Lifecycle hook called when the component is inserted into the DOM.
   * Automatically enables search if insertable mode is enabled.
   */
  connectedCallback(): void {
    super.connectedCallback();

    if (this.insertable) {
      this.searchable = true;
    }
  }

  /**
   * Lifecycle hook called after the component has rendered for the first time.
   * Initializes dropdown event handlers, sets up UIKit integration,
   * and processes initial selection state from attributes or options.
   */
  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated?.(_changedProperties);

    this.HTMLDrop = this.renderRoot.querySelector('.uk-drop');

    if (this.HTMLDrop) {
      this.HTMLRectParent = this.renderRoot.querySelector('ul');

      // Handle dropdown hide events
      window.UIkit.util.on(this.HTMLDrop, 'hidden', () => {
        this.$open = false;
        this.$focused = -1;
        this.$term = '';
      });

      // Handle dropdown show events
      window.UIkit.util.on(this.HTMLDrop, 'shown', () => {
        this.$open = true;
      });
    }

    // Initialize selection after component is fully rendered
    this.updateComplete.then(() => {
      if (this.hasAttribute('value')) {
        this.$selected = this.value.split(',').map(v => v.trim());

        if (!this.multiple) {
          this.$selected = this.$selected.slice(-1);
        }

        this.updateSelectedFromValues();
      } else {
        let values: string[] = [];

        for (const parent in this.$data) {
          const options = this.$data[parent].options;

          if (this.multiple) {
            options.forEach(option => {
              if (option.selected) {
                values.push(option.value);
              }
            });
          } else {
            const lastSelected = [...options]
              .reverse()
              .find(option => option.selected);

            if (lastSelected) {
              values = [lastSelected.value];
              this.selected = lastSelected;
              break;
            }
          }
        }

        this.$selected = values;

        if (this.multiple) {
          this.updateSelectedFromValues();
        }
      }
    });

    this.isRendered = true;
  }

  /**
   * Lifecycle hook called after properties have been updated.
   * Emits the input event only after initial render is complete
   * to avoid unnecessary event emissions.
   */
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Only emit after initial render is complete
    if (
      this.isRendered &&
      changedProperties.has('$selected') &&
      changedProperties.get('$selected') !== undefined
    ) {
      this.emit();
    }
  }

  /**
   * Initializes the component's value from attributes or default state.
   * This is handled in firstUpdated for this component.
   */
  protected initializeValue(): void {
    // Value initialization handled in firstUpdated
  }

  /**
   * Selects or deselects an option item.
   * In multi-select mode, toggles the item in the selection array.
   * In single-select mode, replaces the current selection.
   * Does nothing if the item is disabled.
   *
   * @param item - The option item to select/deselect
   */
  protected select(item: OptionItem): void {
    if (item.disabled) {
      return;
    }

    if (this.multiple) {
      const existingIndex = this.$selected.findIndex(a => a === item?.value);
      if (existingIndex === -1) {
        this.$selected = [...this.$selected, item.value];
      } else {
        this.$selected = this.$selected.filter(a => a !== item.value);
      }

      if (this.$selected.length > 0) {
        this.updateSelectedFromValues();
      }

      this.requestUpdate();
    } else {
      this.$selected = [item.value];
      this.selected = item;
    }
  }

  /**
   * Updates the `selected` property based on the current $selected values.
   * Finds the last selected value in the options and updates the selected item.
   * Useful after programmatic changes to $selected.
   */
  private updateSelectedFromValues(): void {
    if (this.$selected.length > 0) {
      const lastValue = this.$selected[this.$selected.length - 1];

      for (const parent in this.$data) {
        const lastSelected = this.$data[parent].options.find(
          option => option.value === lastValue,
        );

        if (lastSelected) {
          this.selected = lastSelected;
          break;
        }
      }
    }
  }

  /**
   * Handles keydown events on the search input.
   * Delegates to onKeydown for navigation and special key handling.
   * Prevents Tab key propagation when dropdown is open.
   *
   * @param e - The keyboard event
   */
  private onInputKeydown = (e: KeyboardEvent): void => {
    this.onKeydown(e);

    if (this.$open === true) {
      switch (e.key) {
        case 'Tab':
          if (!e.altKey && !e.shiftKey && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
          }
          break;
      }
    }
  };

  /**
   * Handles Enter key press when a list item is focused.
   * Selects the focused item or triggers insertion if the insert option is focused.
   */
  protected onKeydownEnter(): void {
    const dataset = this.HTMLRectActive?.dataset;

    if (dataset) {
      const key: string = dataset.key as string;
      const index: number = dataset.index as unknown as number;

      if (key === '__insert__') {
        this.insert();
      } else {
        this.select(this.options[key].options[index]);
      }
    }
  }

  /**
   * Handles click events on option items.
   * Delegates to the select method to update selection state.
   *
   * @param options - Object containing the clicked item and its index
   */
  protected onClick(options: { item: OptionItem; index: number }): void {
    const { item } = options;

    this.select(item);
  }

  /**
   * Builds the CSS class strings for various elements in the select component.
   * Applies active/disabled states based on item and focus state.
   *
   * @param options - Optional object containing the item and its index
   * @returns Object containing class strings for all select elements
   */
  protected _cls(options?: { item: OptionItem; index: number }): {
    button: string;
    icon: string;
    list: string;
    item: string;
    'item-header': string;
    'item-link': string;
    'item-wrapper': string;
    'item-icon': string;
    'item-text': string;
    'item-check': string;
    'item-subtitle': string;
    search: string;
    'search-input': string;
    'search-icon': string;
    dropdown: string;
    [key: string]: string;
  } {
    const item: string[] = [this.$cls['item']];

    if (options?.item.disabled) {
      item.push(this.$cls['item-disabled']);
    }

    if (this.$focused === options?.index) {
      item.push(this.$cls['item-active']);
    }

    return {
      button: this.$cls['button'],
      icon: this.$cls['icon'],
      list: this.$cls['list'],
      item: item.join(' '),
      'item-header': this.$cls['item-header'],
      'item-link': this.multiple === false ? 'uk-drop-close' : '',
      'item-wrapper': this.$cls['item-wrapper'],
      'item-icon': this.$cls['item-icon'],
      'item-text': this.$cls['item-text'],
      'item-check': this.$cls['item-check'],
      'item-subtitle': this.$cls['item-subtitle'],
      search: this.$cls['search'],
      'search-input': this.$cls['search-input'],
      'search-icon': this.$cls['search-icon'],
      dropdown: this.$cls['dropdown'],
    };
  }

  /**
   * Renders a single list item with optional icon, description, and selection indicator.
   * Sets up proper ARIA attributes for accessibility and click handlers.
   *
   * @param key - The option group key
   * @param item - The option item to render
   * @param index - The index within the group
   * @returns The template result for the list item
   */
  protected renderListItem(
    key: string,
    item: OptionItem,
    index: number,
  ): TemplateResult {
    const cls = this._cls({ item, index });
    const isSelected = this.$selected.includes(item.value);
    const globalIndex = this.getGlobalIndex(key, index);

    return html`
      <li
        data-part="item"
        class="${cls['item']}"
        role="option"
        aria-selected="${globalIndex === this.$focused ? 'true' : 'false'}"
        aria-disabled="${item.disabled ? 'true' : 'false'}"
        data-key="${key}"
        data-index="${index}"
      >
        <a
          data-part="item-link"
          class="${cls['item-link']}"
          @click="${() => this.onClick({ item, index })}"
          tabindex="-1"
          ?disabled="${item.disabled}"
          aria-label="${item.text}"
        >
          <div class="${cls['item-wrapper']}" data-part="item-wrapper">
            ${item.data.icon
              ? html`
                  <span class="${cls['item-icon']}" data-part="item-icon">
                    ${this.$icons(item.data.icon) || nothing}
                  </span>
                `
              : nothing}
            ${item.data.description
              ? html`
                  <div>
                    <span class="${cls['item-text']}" data-part="item-text"
                      >${item.text}</span
                    >
                    <div
                      class="${cls['item-subtitle']}"
                      data-part="item-subtitle"
                    >
                      ${item.data.description}
                    </div>
                  </div>
                `
              : html`<span class="${cls['item-text']}" data-part="item-text"
                  >${item.text}</span
                >`}
          </div>
          ${isSelected
            ? html`
                <span class="${cls['item-check']}" data-part="item-check">
                  ${this.$icons('check') || nothing}
                </span>
              `
            : nothing}
        </a>
      </li>
    `;
  }

  /**
   * Calculates the global index of an item across all groups.
   * Used for keyboard navigation and focus management.
   *
   * @param key - The option group key
   * @param index - The index within the group
   * @returns The global index, or -1 if not found
   */
  private getGlobalIndex(key: string, index: number): number {
    let globalIndex = 0;
    let found = false;

    if (this.insertable && this.$term && !this.hasOption(this.$term)) {
      globalIndex++;
    }

    for (const groupKey in this.options) {
      if (groupKey === key) {
        globalIndex += index;
        found = true;
        break;
      }
      globalIndex += this.options[groupKey].options.length;
    }

    return found ? globalIndex : -1;
  }

  /**
   * Checks if an option with the given value exists in any group.
   *
   * @param value - The value to search for
   * @returns True if the option exists, false otherwise
   */
  private hasOption(value: string): boolean {
    return Object.values(this.$data).some(group =>
      group.options.some(option => option.value === value),
    );
  }

  /**
   * Adds a new option to the specified group.
   * Creates the group if it doesn't exist.
   *
   * @param item - The option item to add
   * @param key - The group key (typically the group ID)
   * @returns True if the option was added, false if it already existed
   */
  private addOption(item: OptionItem, key: string): boolean {
    const options = this.$data[key]?.options || [];
    const exists = options.some(option => option.value === item.value);

    if (!exists) {
      this.$data = { ...this.$data };

      if (this.$data[key] === undefined) {
        this.$data[key] = {
          text: item.group || '__',
          options: [],
        };
      }

      this.$data[key].options.push(item);
    }

    return !exists;
  }

  /**
   * Sends the current search term to the server to fetch matching options.
   * Falls back to creating a local option if the request fails or returns invalid data.
   * Validates response data structure before returning.
   *
   * @returns Promise resolving to an OptionItem from the server or a fallback item
   */
  private async send(): Promise<OptionItem> {
    function validate(data: any): boolean {
      return (
        typeof data === 'object' &&
        'group' in data &&
        'value' in data &&
        'text' in data &&
        'disabled' in data &&
        'selected' in data &&
        'data' in data &&
        'key' in data.data &&
        'keywords' in data.data
      );
    }

    try {
      if (!this['send-url']) {
        throw new Error('No send URL provided');
      }

      const headers: HeadersInit = this['send-headers']
        ? JSON.parse(this['send-headers'])
        : { 'Content-Type': 'application/json' };

      const payload = {
        term: this.$term,
      };

      const response = await fetch(this['send-url'], {
        method: this['send-method'],
        headers,
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (validate(data)) {
        return data as OptionItem;
      }

      throw new Error('Invalid response format');
    } catch (error) {
      return {
        group: '__',
        text: this.$term,
        value: this.$term,
        data: {
          gid: '__',
          keywords: [this.$term],
        },
        selected: true,
        disabled: false,
      };
    }
  }

  /**
   * Inserts the current search term as a new option and selects it.
   * Fetches the option from the server via the send() method.
   * Clears the search term after insertion.
   */
  protected async insert(): Promise<void> {
    const item = await this.send();

    this.addOption(item, item.data.gid as string);

    if (this.multiple) {
      this.$selected = [...this.$selected, this.$term];
    } else {
      this.$selected = [this.$term];
    }

    this.selected = item;
    this.$term = '';
  }

  /**
   * Renders the search input field and divider.
   * Only rendered if searchable property is true.
   *
   * @returns The search section template or empty string
   */
  private renderSearch() {
    const cls = this._cls();

    return this.searchable === true
      ? html`
          <div class="${cls['search']}" data-part="search" role="search">
            <span class="${cls['search-icon']}" data-part="search-icon">
              ${this.$icons('search') || nothing}
            </span>
            <input
              class="${cls['search-input']}"
              data-part="search-input"
              placeholder="${this.getI18nText(
                'search-placeholder',
                this.defaultI18n,
              )}"
              type="text"
              role="searchbox"
              aria-label="${this.getI18nText(
                'search-placeholder',
                this.defaultI18n,
              )}"
              .value="${this.$term}"
              @input="${(e: InputEvent) => {
                const input = e.target as HTMLInputElement;
                this.$term = input.value;
              }}"
              @keydown="${this.onInputKeydown}"
            />
          </div>
          ${Object.keys(this.options).length > 0
            ? html`<hr
                class="${this.$cls['divider']}"
                data-part="divider"
                style="${this.$stl['divider']}"
              />`
            : ''}
        `
      : '';
  }

  /**
   * Renders the insertion button for adding new options.
   * Only shown when insertable is true, search term is non-empty,
   * and the term doesn't match an existing option.
   *
   * @returns The insertion button template
   */
  private renderInsertion() {
    const cls = this._cls();

    return html`
      <li
        class="${cls['item']}"
        data-part="item"
        role="option"
        data-key="__insert__"
      >
        <a
          class="${cls['item-link']}"
          data-part="item-link"
          @click="${(e: MouseEvent) => {
            e.preventDefault();
            this.insert();
          }}"
          tabindex="-1"
          aria-label="${this.getI18nText('insert', this.defaultI18n)} ${this
            .$term}"
        >
          ${this.getI18nText('insert', this.defaultI18n)} ${this.$term}
        </a>
      </li>
    `;
  }

  /**
   * Renders the main options list with all groups and items.
   * Includes the insertion option if applicable.
   * Sets up proper ARIA attributes for accessibility.
   *
   * @returns The options list template
   */
  protected override renderList() {
    const cls = this._cls();

    return html`
      <ul
        class="${cls['list']}"
        data-part="list"
        role="listbox"
        tabindex="-1"
        aria-label="${this.getI18nText('list-label', this.defaultI18n)}"
        aria-multiselectable="${this.multiple}"
        @keydown="${this.onKeydown}"
      >
        ${this.insertable && this.$term && !this.hasOption(this.$term)
          ? this.renderInsertion()
          : ''}
        ${repeat(
          Object.keys(this.options),
          groupKey => html`
            ${this.renderListHeader(groupKey)}
            ${repeat(this.options[groupKey].options, (option, index) =>
              this.renderListItem(groupKey, option, index),
            )}
          `,
        )}
      </ul>
    `;
  }

  /**
   * Renders the complete select component including button, dropdown, and hidden input.
   * Generates unique IDs for accessibility relationships (aria-controls, aria-labelledby).
   *
   * @returns The complete component template
   */
  render() {
    const cls = this._cls();
    const buttonId = this.id
      ? `${this.id}-button`
      : `uk-select-${Math.random().toString(36).substr(2, 9)}`;
    const listboxId = this.id
      ? `${this.id}-listbox`
      : `uk-listbox-${Math.random().toString(36).substr(2, 9)}`;

    return html`
      <div
        data-host-inner
        data-part="host-inner"
        class="${this.$cls['host-inner']}"
        style="${this.$stl['host-inner']}"
      >
        <button
          id="${buttonId}"
          class="${cls['button']}"
          data-part="button"
          style="${this.$stl['button']}"
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="${this.$open}"
          aria-controls="${listboxId}"
          aria-label="${this.getI18nText('button-label', this.defaultI18n)}"
          ?disabled="${this.disabled}"
          @keydown="${this.onKeydown}"
        >
          <span
            class="${cls['button-text']}"
            data-part="button-text"
            style="${this.$stl['button-text']}"
            >${this.$text}</span
          >
          <span
            class="${cls['icon']}"
            data-part="icon"
            style="${this.$stl['icon']}"
          >
            ${this.icon
              ? this.$icons(this.icon) || nothing
              : this.$icons('chevrons-up-down')}
          </span>
        </button>

        <div
          id="${listboxId}"
          class="${cls['dropdown']} uk-drop"
          data-part="dropdown"
          style="${this.$stl['dropdown']}"
          data-uk-dropdown="${this.drop}"
          role="dialog"
          aria-label="${this.getI18nText('button-label', this.defaultI18n)}"
        >
          ${this.renderSearch()} ${this.renderList()}
        </div>
        ${this.renderHidden()}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-select': Select;
  }
}
