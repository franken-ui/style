// refactored base-select.ts
import { state } from 'lit/decorators.js';
import { html, type PropertyValues, type TemplateResult } from 'lit';
import { type OptionGrouped, type OptionItem } from '../../helpers/select';
import { repeat } from 'lit/directives/repeat.js';
import type { Base } from './base';

/**
 * Type helper for constructor functions (supports abstract classes)
 */
type Constructor<T = {}> = abstract new (...args: any[]) => T;

/**
 * Mixin that adds select functionality to components.
 *
 * This mixin provides:
 * - reactive state for search term, focus index and open state
 * - keyboard navigation and focus management
 * - filtered option grouping and counts
 * - rendering helpers for list and headers
 *
 * @template TBase - Constructor of a class extending Base
 * @param BaseClass - Base class to extend
 * @returns Extended class with select-related behavior
 */
export const BaseSelectMixin = <TBase extends Constructor<Base>>(
  BaseClass: TBase,
) => {
  /**
   * Abstract class returned by the mixin. Implementers must provide
   * concrete values/overrides for the abstract members below.
   */
  abstract class BaseSelectClass extends BaseClass {
    /**
     * Name of event to dispatch when search term changes.
     * Implement the exact event string in the subclass.
     */
    protected abstract readonly 'search-event': string;

    /**
     * Default internationalization strings for labels and accessibility.
     * Implement the exact event string in the subclass.
     * @internal
     */
    protected abstract readonly defaultI18n: { [key: string]: string };

    /**
     * Return class map for element parts.
     * Implement to provide scoped class names used for rendering.
     */
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

    /**
     * Handle click on an item. Receives the item and its index in the group.
     */
    protected abstract onClick(context: {
      item: OptionItem;
      index: number;
    }): void;

    /**
     * Select the given option item (update state/value).
     */
    protected abstract select(item: OptionItem): void;

    /**
     * Handler invoked when Enter is pressed while an option is focused.
     */
    protected abstract onKeydownEnter(): void;

    /**
     * Render a single list item. Return a TemplateResult or undefined to skip.
     *
     * @param key - Group key the item belongs to
     * @param item - OptionItem to render
     * @param index - Index of the item within the group
     */
    protected abstract renderListItem(
      key: string,
      item: OptionItem,
      index: number,
    ): TemplateResult | undefined;

    /**
     * Current search term used to filter options.
     */
    @state()
    $term: string = '';

    /**
     * Index of the currently focused option in the flattened/filtered list.
     * -1 means no focus.
     */
    @state()
    $focused: number = -1;

    /**
     * Whether the dropdown/list is open.
     */
    @state()
    $open: boolean = false;

    protected selected: OptionItem | null = null;

    /**
     * Reference to the parent container element for scrolling calculations.
     * Used for focus management and keyboard navigation.
     */
    protected HTMLRectParent: HTMLElement | null = null;

    /**
     * Reference to the currently active/focused option element.
     * Used for visual focus indicators and scrolling.
     */
    protected HTMLRectActive: HTMLElement | null = null;

    /**
     * Compute grouped options filtered by the current search term.
     *
     * Only options whose keywords contain the lowercase search term are included.
     * Returns an OptionGrouped object with the same grouping keys.
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
     * Total count of filtered options across all groups.
     *
     * Note: subtracts 1 to make indexing align with zero-based focused index.
     */
    get count(): number {
      let total = 0;

      for (const parent in this.options) {
        const count = this.options[parent].options.length;
        total += count;
      }

      return total - 1;
    }

    /**
     * Lit lifecycle callback: react to changes on tracked properties.
     *
     * - Emits search-event when $term changes.
     * - Updates focused element attributes and scroll on $focused changes.
     */
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

      if (_changedProperties.has('$focused') && this.HTMLRectParent) {
        this.HTMLRectParent.querySelector(
          '[role="option"][aria-selected="true"]',
        )?.removeAttribute('aria-selected');

        const options = Array.from(
          this.HTMLRectParent.querySelectorAll('[role="option"]'),
        );

        this.HTMLRectActive = options[this.$focused] as HTMLElement;

        if (this.HTMLRectActive) {
          this.HTMLRectActive.setAttribute('aria-selected', 'true');
          this.focusActiveOption();
        }
      }
    }

    /**
     * Move focus index up ('t' = top) or down ('d' = down).
     *
     * Wraps around when reaching boundaries.
     *
     * @param direction - 't' to move up, 'd' to move down
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
     * Scroll the listbox so the active option is centered (or visible).
     *
     * @param behavior - Scroll behavior: 'smooth' or 'auto'
     */
    protected focusActiveOption(behavior: ScrollBehavior = 'smooth'): void {
      if (this.HTMLRectParent && this.HTMLRectActive) {
        const rects = {
          parent: this.HTMLRectParent.getBoundingClientRect(),
          active: this.HTMLRectActive.getBoundingClientRect(),
        };

        this.HTMLRectParent.scrollTo({
          top:
            this.HTMLRectActive.offsetTop -
            this.HTMLRectParent.offsetTop -
            rects.parent.height / 2 +
            rects.active.height / 2,
          behavior: behavior,
        });
      }
    }

    /**
     * Keyboard handler for listbox navigation.
     *
     * Handles ArrowUp/ArrowDown/Home/End/Enter when dropdown is open.
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
     * Render the listbox element with grouped options.
     *
     * The list has role="listbox" and delegates item rendering to renderListItem.
     */
    protected renderList(): TemplateResult {
      const cls = this._cls();

      return html`
        <ul
          class="${cls['list']}"
          style="${this.$stl['list']}"
          role="listbox"
          tabindex="-1"
          aria-label="${this.getI18nText('list-label', this.defaultI18n)}"
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
     * Render a group header. Returns an empty string for the default group '__'.
     *
     * @param header - Group key string
     */
    protected renderListHeader(header: string): TemplateResult | string {
      const cls = this._cls();

      return header !== '__'
        ? html`<li
            class="${cls['item-header']}"
            style="${this.$cls['item-header']}"
            role="presentation"
          >
            ${header}
          </li>`
        : '';
    }

    /**
     * Reset transient select UI state when dropdown closes.
     * Clears focus and search term.
     */
    protected onDropClose(): void {
      this.$focused = -1;
      this.$term = '';
    }

    /**
     * Internal icon repository for the component.
     *
     * Delegates to super.$icons first so host classes can override icons.
     *
     * @param icon - The name of the icon to retrieve.
     * @returns A Lit HTML template containing the requested SVG icon or undefined.
     */
    protected $icons(icon: string) {
      const customIcon = super.$icons(icon);

      if (customIcon) {
        return customIcon;
      }

      switch (icon) {
        case 'search':
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
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          `;
        case 'check':
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
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          `;
        case 'chevrons-up-down':
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
            >
              <path d="m7 15 5 5 5-5" />
              <path d="m7 9 5-5 5 5" />
            </svg>
          `;
      }
    }
  }

  return BaseSelectClass;
};
