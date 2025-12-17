// refactored base-select.ts
import { state, query } from 'lit/decorators.js';
import { html, type PropertyValues, type TemplateResult } from 'lit';
import { type OptionGrouped, type OptionItem } from '../../helpers/select';
import { repeat } from 'lit/directives/repeat.js';
import type { Base } from './base';

/**
 * Type helper for constructor functions (supports abstract classes)
 */
type Constructor<T = {}> = abstract new (...args: any[]) => T;

/**
 * Mixin that adds select functionality to components
 * Provides filtering, navigation, and option management
 */
export const BaseSelectMixin = <TBase extends Constructor<Base>>(
  BaseClass: TBase,
) => {
  abstract class BaseSelectClass extends BaseClass {
    protected abstract readonly 'search-event': string;

    protected abstract _cls(options?: { item: OptionItem; index: number }): {
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
    };

    protected abstract onClick(context: {
      item: OptionItem;
      index: number;
    }): void;

    protected abstract select(item: OptionItem): void;

    protected abstract onKeydownEnter(): void;

    protected abstract renderListItem(
      key: string,
      item: OptionItem,
      index: number,
    ): TemplateResult | undefined;

    @state()
    $term: string = '';

    @state()
    $focused: number = -1;

    @state()
    $open: boolean = false;

    @query('[role="listbox"]')
    protected listboxEl?: HTMLElement;

    protected activeOptionEl?: HTMLElement;
    protected selected: OptionItem | null = null;
    protected HTMLRectParent: HTMLElement | null = null;

    /**
     * Get filtered options based on search term
     */
    get options(): OptionGrouped {
      const options: OptionGrouped = {};

      Object.entries(this.$data).forEach(([key, group]) => {
        const filtered = group.options.filter(option =>
          option.data.keywords?.some(k =>
            k.toLowerCase().includes(this.$term.toLowerCase()),
          ),
        );

        if (filtered.length > 0) {
          options[key] = {
            text: group.text,
            options: filtered,
            ...(group.data && { data: group.data }),
          };
        }
      });

      return options;
    }

    /**
     * Get total count of filtered options
     */
    get count(): number {
      let total = 0;

      for (const parent in this.options) {
        const count = this.options[parent].options.length;
        total += count;
      }

      return total - 1;
    }

    protected updated(_changedProperties: PropertyValues): void {
      super.updated(_changedProperties);

      if (
        _changedProperties.has('$term') &&
        _changedProperties.get('$term') !== undefined
      ) {
        this.dispatchEvent(
          new CustomEvent(this['search-event'], {
            detail: {
              value: this.$term,
            },
            bubbles: true,
            composed: true,
          }),
        );

        this.updateComplete.then(() => {
          this.$focused = -1;
        });
      }

      if (_changedProperties.has('$focused') && this.listboxEl) {
        this.listboxEl
          .querySelector('[role="option"][aria-selected="true"]')
          ?.removeAttribute('aria-selected');

        const options = Array.from(
          this.listboxEl.querySelectorAll('[role="option"]'),
        );
        this.activeOptionEl = options[this.$focused] as HTMLElement;

        if (this.activeOptionEl) {
          this.activeOptionEl.setAttribute('aria-selected', 'true');
          this.focusActiveOption();
        }
      }
    }

    /**
     * Navigate through options with keyboard
     */
    protected navigate(direction: 't' | 'd'): void {
      switch (direction) {
        case 't':
          if (this.$focused <= 0) {
            this.$focused = this.count;
          } else {
            this.$focused--;
          }
          break;

        case 'd':
          if (this.$focused < this.count) {
            this.$focused++;
          } else {
            this.$focused = 0;
          }
          break;
      }
    }

    /**
     * Scroll to active option in listbox
     */
    protected focusActiveOption(behavior: ScrollBehavior = 'smooth'): void {
      if (this.listboxEl && this.activeOptionEl) {
        const rects = {
          parent: this.listboxEl.getBoundingClientRect(),
          active: this.activeOptionEl.getBoundingClientRect(),
        };

        this.listboxEl.scrollTo({
          top:
            this.activeOptionEl.offsetTop -
            this.listboxEl.offsetTop -
            rects.parent.height / 2 +
            rects.active.height / 2,
          behavior: behavior,
        });
      }
    }

    /**
     * Handle keyboard navigation in listbox
     */
    protected onKeydown(e: KeyboardEvent): void {
      if (this.$open === true) {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            this.navigate('d');
            break;

          case 'ArrowUp':
            e.preventDefault();
            this.navigate('t');
            break;

          case 'Enter':
            e.preventDefault();

            if (this.$focused === -1) {
              return;
            }

            this.onKeydownEnter();
            break;

          case 'Home':
            e.preventDefault();
            this.$focused = 0;
            break;

          case 'End':
            e.preventDefault();
            this.$focused = this.count;
            break;
        }
      }
    }

    /**
     * Render the listbox with options
     */
    protected renderList(): TemplateResult {
      const cls = this._cls();

      return html`
        <ul
          class="${cls['list']}"
          role="listbox"
          tabindex="-1"
          aria-label="${this.getI18nText('listLabel', {
            listLabel: 'Options',
          })}"
          @keydown="${this.onKeydown}"
        >
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
     * Render group header
     */
    protected renderListHeader(header: string): TemplateResult | string {
      const cls = this._cls();

      return header !== '__'
        ? html`<li class="${cls['item-header']}" role="presentation">
            ${header}
          </li>`
        : '';
    }

    /**
     * Reset select state when drop closes
     */
    protected onDropClose(): void {
      this.$focused = -1;
      this.$term = '';
    }
  }

  return BaseSelectClass;
};
