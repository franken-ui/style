// refactored command.ts
import { html, type PropertyValues, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { type OptionItem } from '../helpers/select';
import { BaseSelectMixin } from './shared/base-select';
import { Base } from './shared/base';
import { titleCase } from '../helpers/common';

type I18N = {
  placeholder: string;
  searchLabel: string;
  listLabel: string;
  closeLabel: string;
  modalLabel: string;
};

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
};

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
};

@customElement('uk-command')
export class Command extends BaseSelectMixin(Base) {
  protected 'cls-default-element' = 'modal';
  protected 'stl-default-element' = 'modal';
  protected readonly 'search-event': string = 'uk-command:search';
  protected readonly 'input-event': string = 'uk-command:click';

  @property({ type: String })
  key: string | undefined;

  @property({ type: String })
  modifier: string = 'ctrl';

  @property({ type: String })
  toggle: string = '';

  @state()
  $i18n: I18N = {
    placeholder: 'Search commands...',
    searchLabel: 'Search',
    listLabel: 'Commands',
    closeLabel: 'Close',
    modalLabel: 'Command palette',
  };

  @state()
  protected $cls: Cls = {
    modal: 'uk-modal uk-flex-top',
    dialog: 'uk-modal-dialog uk-margin-auto-vertical',
    header: 'uk-cmd-header',
    'header-icon': 'uk-cmd-header-icon',
    'header-input': 'uk-cmd-header-input',
    'header-esc': 'uk-cmd-header-esc',
    list: 'uk-overflow-auto uk-nav uk-nav-secondary uk-cmd-body',
    item: '',
    'item-header': 'uk-nav-header',
    'item-link': '',
    'item-wrapper': 'uk-cmd-item-wrapper',
    'item-icon': 'uk-cmd-item-icon',
    'item-text': 'uk-cmd-item-text',
    'item-key': 'uk-cmd-item-key',
    'item-subtitle': 'uk-nav-subtitle',
  };

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
  };

  private HTMLModal: Element | null = null;

  protected get $value(): string | string[] {
    return '';
  }

  protected get $text(): string {
    return '';
  }

  connectedCallback(): void {
    super.connectedCallback();

    if (this.key !== undefined) {
      document.addEventListener('keydown', this.handleGlobalKeydown);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.key !== undefined) {
      document.removeEventListener('keydown', this.handleGlobalKeydown);
    }
  }

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

  private handleGlobalKeydown = (e: KeyboardEvent): void => {
    const modifierPressed = this.getModifierPressed(e);

    if (modifierPressed && e.key === this.key) {
      e.preventDefault();
      if (this.HTMLModal) {
        window.UIkit.modal(this.HTMLModal).toggle();
      }
    }
  };

  private focusSearchInput(): void {
    const input = this.renderRoot.querySelector(
      'input[type="text"]',
    ) as HTMLInputElement;
    if (input) {
      input.focus();
    }
  }

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
      list: this.$cls.list,
      item:
        options?.item.disabled === true
          ? 'uk-disabled opacity-50'
          : this.$cls.item,
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

  protected onClick(options: { item: OptionItem; index: number }): void {
    const { item } = options;
    this.select(item);
  }

  protected onKeydownEnter(): void {
    const dataset = this.activeOptionEl?.dataset;

    if (dataset) {
      const key: string = dataset.key as string;
      const index: number = dataset.index as unknown as number;

      this.select(this.options[key].options[index]);
    }
  }

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

  protected renderListItem(
    key: string,
    item: OptionItem,
    index: number,
  ): TemplateResult | undefined {
    const cls = this._cls({ item, index });
    const globalIndex = this.getGlobalIndex(key, index);

    return html`
      <li
        class="${cls['item']}"
        role="option"
        aria-selected="${globalIndex === this.$focused ? 'true' : 'false'}"
        aria-disabled="${item.disabled ? 'true' : 'false'}"
        data-key="${key}"
        data-index="${index}"
      >
        <button
          type="button"
          class="${cls['item-link']}"
          @click="${() => this.onClick({ item, index })}"
          tabindex="-1"
          ?disabled="${item.disabled}"
          aria-label="${item.text}${item.data?.key
            ? ` (${titleCase(item.data?.modifier || 'ctrl')} + ${item.data.key.toUpperCase()})`
            : ''}"
        >
          <div class="${cls['item-wrapper']}">
            ${item.data.icon
              ? html`<span class="${cls['item-icon']}">${item.data.icon}</span>`
              : ''}
            <span class="${cls['item-text']}">${item.text}</span>
            ${item.data.key
              ? html`
                  <span class="${cls['item-key']}">
                    ${titleCase(item.data?.modifier) || 'Ctrl'} +
                    ${item.data.key.toUpperCase()}
                  </span>
                `
              : ''}
          </div>
        </button>
      </li>
    `;
  }

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

  private renderSearch(): TemplateResult {
    return html`
      <div class="${this.$cls.header}" style="${this.$stl.header}">
        <div
          class="${this.$cls['header-icon']}"
          style="${this.$stl['header-icon']}"
          aria-hidden="true"
        >
          ${this.getI18nText('searchIcon', { searchIcon: '🔍' })}
        </div>
        <div
          class="${this.$cls['header-input']}"
          style="${this.$stl['header-input']}"
        >
          <input
            type="text"
            role="searchbox"
            aria-label="${this.getI18nText('searchLabel', {
              searchLabel: 'Search',
            })}"
            placeholder="${this.getI18nText('placeholder', {
              placeholder: 'Search commands...',
            })}"
            .value="${this.$term}"
            @keydown=${this.onInputKeydown}
            @input=${(e: InputEvent) => {
              const input = e.target as HTMLInputElement;
              this.$term = input.value;
            }}
          />
        </div>
        <div
          class="${this.$cls['header-esc']}"
          style="${this.$stl['header-esc']}"
        >
          <button
            type="button"
            class="uk-modal-close uk-btn uk-btn-default uk-btn-sm"
            aria-label="${this.getI18nText('closeLabel', {
              closeLabel: 'Close',
            })}"
          >
            Esc
          </button>
        </div>
      </div>
      ${Object.keys(this.options).length > 0 ? html`<hr class="uk-hr" />` : ''}
    `;
  }

  protected override renderList(): TemplateResult {
    const cls = this._cls();

    return html`
      <ul
        class="${cls['list']}"
        style="${this.$stl.list}"
        role="listbox"
        tabindex="-1"
        aria-label="${this.getI18nText('listLabel', {
          listLabel: 'Commands',
        })}"
        @keydown="${this.onKeydown}"
      >
        ${super.renderList()}
      </ul>
    `;
  }

  render(): TemplateResult {
    const modalId =
      this.toggle ||
      `uk-command-${this.id || Math.random().toString(36).substr(2, 9)}`;

    return html`
      <div
        data-host-inner
        class="${this.$cls.modal}"
        style="${this.$stl.modal}"
        id="${modalId}"
        data-uk-modal
        role="dialog"
        aria-modal="true"
        aria-label="${this.getI18nText('modalLabel', {
          modalLabel: 'Command palette',
        })}"
      >
        <div
          class="${this.$cls.dialog}"
          style="${this.$stl.dialog}"
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
