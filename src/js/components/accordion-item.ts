import { nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Base } from './shared/base';
import type { AccordionItemTitle } from './accordion-item-title';
import type { AccordionItemContent } from './accordion-item-content';

let __ACC_ITEM_ID_COUNTER__ = 0;

/**
 * fr-accordion-item
 *
 * Represents a single item inside an `fr-accordion`.
 *
 * Responsibilities
 * - Maintain its open/closed state and reflect it to an attribute.
 * - Coordinate ARIA attributes between its title and content subcomponents.
 * - Emit lifecycle events that allow consumers to intercept show/hide actions.
 * - Relay toggle requests to the parent accordion container via
 *   `fr-toggle-request` events (the container decides how to respond).
 *
 * Events
 * - `beforeShow` (cancellable) — fired before the item is opened.
 * - `show` — fired when the item has been opened.
 * - `beforeHide` (cancellable) — fired before the item is closed.
 * - `hide` — fired when the item has been closed.
 * - `fr-toggle-request` (bubbled from this item) — the parent accordion
 *   listens for this and coordinates open states across items.
 *
 * Accessibility notes
 * - Generates a unique id per item used to connect title and content
 *   ARIA attributes (e.g., `aria-controls` / `aria-labelledby`).
 * - Keyboard navigation between sibling items is supported via arrow keys
 *   (Up/Left = previous, Down/Right = next) and will move focus to the
 *   next/previous title.
 *
 * Usage example
 * ```html
 * <fr-accordion>
 *  <fr-accordion-item>
 *    <fr-accordion-item-title>
 *      <template data-fn="template">
 *        Title
 *      </template>
 *    </fr-accordion-item-title>
 *    <fr-accordion-item-content>
 *      <template data-fn="template">
 *        Content
 *      </template>
 *    </fr-accordion-item-content>
 *  </fr-accordion-item>
 * </fr-accordion>
 * ```
 */
@customElement('fr-accordion-item')
export class AccordionItem extends Base {
  /**
   * Whether the item is open. Reflected to attribute so CSS selectors can
   * target open state when needed.
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  // Unique id used to build ARIA ids for title/content
  @state()
  private iid = `fr-accordion-item-${++__ACC_ITEM_ID_COUNTER__}`;

  private get accordionItemTitle(): AccordionItemTitle | null {
    return this.querySelector('fr-accordion-item-title');
  }

  private get accordionItemContent(): AccordionItemContent | null {
    return this.querySelector('fr-accordion-item-content');
  }

  private get allItems(): AccordionItem[] {
    const accordion = this.parentElement;
    if (!accordion) return [];
    return Array.from(
      accordion.querySelectorAll(':scope > fr-accordion-item'),
    ) as AccordionItem[];
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.addEventListener('fr-title-click', this.handleTitleClick);
    this.addEventListener(
      'fr-navigation-key',
      this.handleNavigationKey as EventListener,
    );

    // Initialize ARIA relationships if the item starts open
    if (this.open) {
      requestAnimationFrame(() => {
        this.updateChildrenAria();
      });
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('fr-title-click', this.handleTitleClick);
    this.removeEventListener(
      'fr-navigation-key',
      this.handleNavigationKey as EventListener,
    );
  }

  private handleTitleClick(): void {
    this.dispatchEvent(
      new CustomEvent('fr-toggle-request', {
        bubbles: true,
        composed: true,
        detail: { item: this },
      }),
    );
  }

  /**
   * Handles keyboard navigation following WAI-ARIA Accordion Pattern
   */
  private handleNavigationKey(
    e: CustomEvent<{ key: string; originalEvent: KeyboardEvent }>,
  ): void {
    const { key, originalEvent } = e.detail;
    const items = this.allItems;
    const currentIndex = items.indexOf(this);

    if (currentIndex === -1) {
      return;
    }

    switch (key) {
      case 'ArrowDown':
      case 'ArrowRight':
        originalEvent.preventDefault();
        // Move to next item, or wrap to first
        const nextIndex = (currentIndex + 1) % items.length;
        items[nextIndex]?.focusTitle();
        break;

      case 'ArrowUp':
      case 'ArrowLeft':
        originalEvent.preventDefault();
        // Move to previous item, or wrap to last
        const prevIndex =
          currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        items[prevIndex]?.focusTitle();
        break;

      case 'Home':
        originalEvent.preventDefault();
        // Move to first item
        items[0]?.focusTitle();
        break;

      case 'End':
        originalEvent.preventDefault();
        // Move to last item
        items[items.length - 1]?.focusTitle();
        break;
    }
  }

  focusTitle() {
    (
      this.accordionItemTitle?.querySelector(
        '[data-accordion-trigger]',
      ) as HTMLElement
    ).focus();
  }

  private updateChildrenAria() {
    if (this.accordionItemTitle) {
      this.accordionItemTitle.updateAria(this.open, `${this.iid}-content`);
    }

    if (this.accordionItemContent) {
      this.accordionItemContent.updateAria(`${this.iid}-title`, this.open);
    }
  }

  /**
   * Toggle the open state.
   */
  public toggle(forceOpen?: boolean) {
    const shouldBeOpen = forceOpen === undefined ? !this.open : forceOpen;

    if (shouldBeOpen === this.open) {
      return;
    }

    const eventName = shouldBeOpen ? 'beforeShow' : 'beforeHide';
    const beforeEvent = new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { item: this },
    });

    this.dispatchEvent(beforeEvent);

    if (beforeEvent.defaultPrevented) {
      return;
    }

    this.open = shouldBeOpen;
  }

  protected updated(
    changedProperties: Map<string | number | symbol, unknown>,
  ): void {
    super.updated(changedProperties);

    if (changedProperties.has('open')) {
      this.updateChildrenAria();

      // Fire non-cancellable lifecycle event
      this.dispatchEvent(
        new CustomEvent(this.open ? 'show' : 'hide', {
          bubbles: true,
          composed: true,
          detail: { item: this },
        }),
      );
    }
  }

  render() {
    return nothing;
  }
}
