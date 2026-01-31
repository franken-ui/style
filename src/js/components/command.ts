/**
 * @fileoverview
 * Command Palette Component - A searchable command palette with keyboard shortcuts.
 *
 * This component provides a modal-based command palette that displays categorized
 * commands with keyboard shortcuts. It supports global keyboard activation via
 * modifier + key combination (e.g., Ctrl+K) and enables keyboard navigation through
 * command items.
 *
 * Features:
 * - Global keyboard activation with configurable modifier + key
 * - Real-time search filtering across command categories
 * - Keyboard navigation (arrow keys, Enter, Escape)
 * - Accessibility support (ARIA labels, roles, semantic HTML)
 * - Customizable styling via CSS classes and inline styles
 * - Icon support for commands and keyboard shortcuts
 * - Internationalization support for labels and placeholders
 */
import { html, nothing, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { type OptionItem } from '../helpers/select';
import { BaseSelectMixin } from './shared/base-select';
import { Base } from './shared/base';
import { titleCase } from '../helpers/common';

/**
 * Class definition mapping for Command component styling.
 * @internal
 */
type Cls = {
  modal: string;
  dialog: string;
  header: string;
  'header-icon': string;
  'header-input': string;
  'header-esc': string;
  list: string;
  item: string;
  'item-header': string;
  'item-link': string;
  'item-wrapper': string;
  'item-icon': string;
  'item-text': string;
  'item-key': string;
  'item-subtitle': string;
  'escape-button': string;
};

/**
 * Style definition mapping for Command component styling.
 * @internal
 */
type Stl = {
  modal: string;
  dialog: string;
  header: string;
  'header-icon': string;
  'header-input': string;
  'header-esc': string;
  list: string;
  item: string;
  'item-header': string;
  'item-link': string;
  'item-wrapper': string;
  'item-icon': string;
  'item-text': string;
  'item-key': string;
  'item-subtitle': string;
  'escape-button': string;
};

/**
 * Command Palette Component
 *
 * A searchable command palette that displays categorized commands with keyboard shortcuts.
 * Supports global keyboard activation via modifier + key combination.
 *
 * @example
 * ```html
 * <uk-command
 *   key="k"
 *   modifier="ctrl"
 *   .options=${{ category: { title: 'Commands', options: [...] } }}
 * ></uk-command>
 * ```
 *
 * @fires uk-command:click - Dispatched when a command is selected
 * @fires uk-command:search - Dispatched on search term changes
 */
@customElement('uk-command')
export class Command extends BaseSelectMixin(Base) {
  protected 'cls-default-element' = 'modal';
  protected 'stl-default-element' = 'modal';
  protected readonly 'search-event': string = 'uk-command:search';
  protected readonly 'input-event': string = 'uk-command:click';

  /**
   * Keyboard key to trigger command palette toggle.
   * Used with modifier key (e.g., 'k' with 'ctrl' = Ctrl+K).
   */
  @property({ type: String })
  key: string | undefined;

  /**
   * Modifier key for global keyboard activation.
   * Supported values: 'ctrl', 'alt', 'shift', 'meta'.
   * @default 'ctrl'
   */
  @property({ type: String })
  modifier: string = 'ctrl';

  /**
   * Optional modal element ID for manual control.
   * If not provided, a unique ID will be generated.
   */
  @property({ type: String })
  toggle: string = '';

  /**
   * Default CSS class names for component elements.
   * Can be overridden via configuration.
   * @internal
   */
  @state()
  protected $cls: Cls = {
    modal: 'uk-modal uk-flex-top',
    dialog: 'uk-modal-dialog uk-margin-auto-vertical',
    header: 'uk-cmd-header',
    'header-icon': 'uk-cmd-header-icon',
    'header-input': 'uk-cmd-header-input',
    'header-esc': 'uk-cmd-header-esc',
    list: 'uk-overflow-auto uk-nav uk-nav-alt uk-nav-primary uk-nav-cmd uk-cmd-body',
    item: '',
    'item-header': 'uk-nav-header',
    'item-link': '',
    'item-wrapper': 'uk-cmd-item-wrapper',
    'item-icon': 'uk-cmd-item-icon',
    'item-text': 'uk-cmd-item-text',
    'item-key': 'uk-cmd-item-key',
    'item-subtitle': 'uk-nav-subtitle',
    'escape-button': 'uk-button uk-button-default uk-button-small',
  };

  /**
   * Default inline styles for component elements.
   * Can be overridden via configuration.
   * @internal
   */
  @state()
  protected $stl: Stl = {
    modal: '',
    dialog: '',
    header: '',
    'header-icon': '',
    'header-input': '',
    'header-esc': '',
    list: '',
    item: '',
    'item-header': '',
    'item-link': '',
    'item-wrapper': '',
    'item-icon': '',
    'item-text': '',
    'item-key': '',
    'item-subtitle': '',
    'escape-button': 'uk-button uk-button-default uk-button-small',
  };

  /**
   * Default internationalization strings for labels and accessibility.
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  protected readonly defaultI18n = {
    placeholder: 'Search commands...',
    'search-label': 'Search',
    'list-label': 'Commands',
    'close-label': 'Close',
    'modal-label': 'Command palette',
    'escape-button-label': 'Esc',
  };

  /** Reference to the modal DOM element. */
  private HTMLModal: Element | null = null;

  protected get $value(): string | string[] {
    return '';
  }

  protected get $text(): string {
    return '';
  }

  /**
   * Lifecycle hook: Called when element is attached to DOM.
   * Registers global keyboard listener if key property is set.
   */
  connectedCallback(): void {
    super.connectedCallback();

    if (this.key !== undefined) {
      document.addEventListener('keydown', this.handleGlobalKeydown);
    }
  }

  /**
   * Lifecycle hook: Called when element is removed from DOM.
   * Removes global keyboard listener if previously registered.
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.key !== undefined) {
      document.removeEventListener('keydown', this.handleGlobalKeydown);
    }
  }

  /**
   * Lifecycle hook: Called after first render.
   * Initializes modal element references and event listeners.
   */
  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated?.(_changedProperties);

    this.HTMLModal = this.renderRoot.querySelector('.uk-modal');

    if (this.HTMLModal) {
      this.HTMLRectParent = this.renderRoot.querySelector('ul');

      window.UIkit.util.on(this.HTMLModal, 'shown', () => {
        this.$open = true;
        this.focusSearchInput();
      });

      window.UIkit.util.on(this.HTMLModal, 'hidden', () => {
        this.$open = false;
        this.$focused = -1;
        this.$term = '';
      });
    }

    this.isRendered = true;
  }

  protected initializeValue(): void {}

  /**
   * Handles global keydown events for modal activation.
   * Toggles modal when the configured modifier + key combination is pressed.
   * @param e - KeyboardEvent from document
   */
  private handleGlobalKeydown = (e: KeyboardEvent): void => {
    const modifierPressed = this.getModifierPressed(e);

    if (modifierPressed && e.key === this.key) {
      e.preventDefault();
      if (this.HTMLModal) {
        window.UIkit.modal(this.HTMLModal).toggle();
      }
    }
  };

  /**
   * Sets focus to the search input field.
   * Called when modal is opened to enable immediate search input.
   */
  private focusSearchInput(): void {
    const input = this.renderRoot.querySelector(
      'input[type="text"]',
    ) as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }

  /**
   * Computes computed class names for list items and sub-elements.
   * Adds dynamic classes based on item state (disabled, focused, etc.).
   * @param options - Item and index information
   * @returns Object containing computed class names for all item parts
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
    search: string;
    'search-input': string;
    'search-icon': string;
    [key: string]: string;
  } {
    return {
      button: '',
      icon: '',
      list: this.$cls['list'],
      item: options?.item.disabled === true ? 'uk-disabled' : this.$cls['item'],
      'item-header': this.$cls['item-header'],
      'item-link':
        options?.item.disabled === false
          ? 'uk-modal-close'
          : this.$cls['item-link'],
      'item-wrapper': this.$cls['item-wrapper'],
      'item-icon': this.$cls['item-icon'],
      'item-text': this.$cls['item-text'],
      'item-check': '',
      search: '',
      'search-input': '',
      'search-icon': '',
      'item-key': this.$cls['item-key'],
      'item-subtitle': this.$cls['item-subtitle'],
    };
  }

  /**
   * Handles click events on command list items.
   * Selects the clicked item and closes the modal.
   * @param options - Item and index information
   */
  protected onClick(options: { item: OptionItem; index: number }): void {
    const { item } = options;
    this.select(item);
  }

  /**
   * Handles Enter key press on focused list item.
   * Selects the currently focused item.
   */
  protected onKeydownEnter(): void {
    const dataset = this.HTMLRectActive?.dataset;

    if (dataset) {
      const key: string = dataset.key as string;
      const index: number = dataset.index as unknown as number;

      this.select(this.options[key].options[index]);
    }
  }

  /**
   * Selects a command item and dispatches selection event.
   * Closes the modal and emits 'uk-command:click' event with selected item.
   * @param item - The command item to select
   */
  protected select(item: OptionItem): void {
    if (item.disabled) {
      return;
    }

    if (this.HTMLModal) {
      window.UIkit.modal(this.HTMLModal).hide();
    }

    this.dispatchEvent(
      new CustomEvent('uk-command:click', {
        detail: {
          value: item,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Renders a single command list item.
   * Includes icon, text, and keyboard shortcut if available.
   * @param key - Group key for the item
   * @param item - OptionItem data
   * @param index - Index within the group
   * @returns Template for the list item or undefined
   */
  protected renderListItem(
    key: string,
    item: OptionItem,
    index: number,
  ): TemplateResult | undefined {
    const cls = this._cls({ item, index });
    const globalIndex = this.getGlobalIndex(key, index);

    return html`
      <li
        data-part="item"
        class="${cls['item']}"
        style="${this.$stl['item']}"
        role="option"
        aria-selected="${globalIndex === this.$focused ? 'true' : 'false'}"
        aria-disabled="${item.disabled ? 'true' : 'false'}"
        data-key="${key}"
        data-index="${index}"
      >
        <a
          data-part="item-link"
          class="${cls['item-link']}"
          style="${this.$stl['item-link']}"
          @click="${() => this.onClick({ item, index })}"
          tabindex="-1"
          ?disabled="${item.disabled}"
          aria-label="${item.text}${item.data?.key
            ? ` (${titleCase(item.data?.modifier || 'ctrl')} + ${item.data.key.toUpperCase()})`
            : ''}"
        >
          <div
            data-part="item-wrapper"
            class="${cls['item-wrapper']}"
            style="${this.$stl['item-wrapper']}"
          >
            ${item.data.icon
              ? html`
                  <span
                    data-part="item-icon"
                    class="${cls['item-icon']}"
                    style="${this.$stl['item-icon']}"
                  >
                    ${this.$icons(item.data.icon) || nothing}
                  </span>
                `
              : nothing}
            <span
              data-part="item-text"
              class="${cls['item-text']}"
              style="${this.$stl['item-text']}"
            >
              ${item.text}
            </span>
            ${item.data.key
              ? html`
                  <span
                    data-part="item-key"
                    class="${cls['item-key']}"
                    style="${this.$stl['item-key']}"
                  >
                    ${titleCase(item.data?.modifier) || 'Ctrl'} +
                    ${item.data.key.toUpperCase()}
                  </span>
                `
              : ''}
          </div>
        </a>
      </li>
    `;
  }

  /**
   * Calculates the global index of an item across all groups.
   * Used for keyboard navigation and focus management.
   * @param key - Group key
   * @param index - Index within the group
   * @returns Global index or -1 if not found
   */
  private getGlobalIndex(key: string, index: number): number {
    let globalIndex = 0;
    let found = false;

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
   * Checks if the specified modifier key is pressed.
   * @param e - KeyboardEvent to check
   * @param modifier - Modifier name ('ctrl', 'alt', 'shift', 'meta')
   * @returns True if modifier is pressed
   */
  private getModifierPressed(e: KeyboardEvent, modifier?: string): boolean {
    const mod = modifier || this.modifier;

    switch (mod.toLowerCase()) {
      case 'ctrl':
        return e.ctrlKey;
      case 'alt':
        return e.altKey;
      case 'shift':
        return e.shiftKey;
      case 'meta':
        return e.metaKey;
      default:
        return e.ctrlKey;
    }
  }

  /**
   * Handles keydown events in the search input.
   * Supports keyboard navigation and direct command execution via shortcuts.
   */
  private onInputKeydown = (e: KeyboardEvent): void => {
    if (!this.$open) {
      return;
    }

    this.onKeydown(e);

    Object.values(this.options).forEach(group => {
      group.options.forEach(item => {
        if (item.data?.key) {
          const modifierPressed = this.getModifierPressed(
            e,
            item.data?.modifier || 'ctrl',
          );

          if (
            modifierPressed &&
            e.key.toLowerCase() === item.data.key.toLowerCase()
          ) {
            e.preventDefault();
            e.stopPropagation();

            this.select(item);
            return;
          }
        }
      });
    });
  };

  /**
   * Renders the search header with icon, input field, and close button.
   * @returns Template for the header section
   */
  private renderSearch(): TemplateResult {
    return html`
      <div
        data-part="header"
        class="${this.$cls['header']}"
        style="${this.$stl['header']}"
      >
        <div
          data-part="header-icon"
          class="${this.$cls['header-icon']}"
          style="${this.$stl['header-icon']}"
          aria-hidden="true"
        >
          ${this.$icons('search')}
        </div>
        <div
          data-part="header-input"
          class="${this.$cls['header-input']}"
          style="${this.$stl['header-input']}"
        >
          <input
            autofocus
            type="text"
            role="searchbox"
            aria-label="${this.getI18nText('search-label', this.defaultI18n)}"
            placeholder="${this.getI18nText('placeholder', this.defaultI18n)}"
            .value="${this.$term}"
            @keydown=${this.onInputKeydown}
            @input=${(e: InputEvent) => {
              const input = e.target as HTMLInputElement;
              this.$term = input.value;
            }}
          />
        </div>
        <div
          data-part="header-esc"
          class="${this.$cls['header-esc']}"
          style="${this.$stl['header-esc']}"
        >
          <button
            type="button"
            data-part="escape-button"
            class="${this.$cls['escape-button']} uk-modal-close"
            style="${this.$stl['escape-button']}"
            aria-label="${this.getI18nText('close-label', this.defaultI18n)}"
          >
            ${this.getI18nText('escape-button-label', this.defaultI18n)}
          </button>
        </div>
      </div>
      ${Object.keys(this.options).length > 0 ? html`<hr class="uk-hr" />` : ''}
    `;
  }

  /**
   * Renders the main component template.
   * Contains the modal wrapper, dialog, header, and command list.
   * @returns Template for the command palette component
   */
  render(): TemplateResult {
    const modalId =
      this.toggle ||
      `uk-command-${this.id || Math.random().toString(36).substr(2, 9)}`;

    return html`
      <div
        data-host-inner
        data-part="modal"
        class="${this.$cls['modal']}"
        style="${this.$stl['modal']}"
        id="${modalId}"
        data-uk-modal
        role="dialog"
        aria-modal="true"
        aria-label="${this.getI18nText('modal-label', this.defaultI18n)}"
      >
        <div
          data-part="dialog"
          class="${this.$cls['dialog']}"
          style="${this.$stl['dialog']}"
          role="document"
        >
          ${this.renderSearch()} ${this.renderList()}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-command': Command;
  }
}
