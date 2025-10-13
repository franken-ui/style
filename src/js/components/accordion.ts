import { nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from './shared/base';
import type { AccordionItem } from './accordion-item';

/**
 * fr-accordion
 *
 * A headless accordion container component.
 *
 * Responsibilities
 * - Acts as a container and manager for `fr-accordion-item` children.
 * - Enforces the configured collapsing behavior (`single`, `multiple`, `none`).
 * - Listens for toggle requests from items and updates other items accordingly.
 *
 * Design notes
 * - This component is intentionally "headless": it doesn't provide visual
 *   styling other than applying optional classes through the `cls` API.
 * - It renders into the light DOM (via `Base#createRenderRoot`) so developers
 *   can style the accordion using page CSS.
 *
 * Attributes / Properties
 * - `collapsible: 'single' | 'multiple' | 'none'` (default: `'single'`)
 *   Controls how many items can be open at the same time:
 *   - `single` — only one item open at a time; opening another closes the rest.
 *   - `multiple` — items toggle independently.
 *   - `none` — items cannot be opened by default, but existing open items may
 *     remain open; toggle requests will only close items unless there are
 *     multiple open (see implementation notes).
 *
 * Events
 * - None emitted by the accordion itself; child items emit lifecycle events
 *   (`beforeShow`, `show`, `beforeHide`, `hide`) and request toggles via
 *   the `fr-toggle-request` CustomEvent which this component handles.
 *
 * Accessibility
 * - The accordion relies on each `fr-accordion-item` to manage ARIA attributes
 *   for its title and content. The container's responsibility is solely state
 *   coordination.
 *
 * Example
 * ```html
 * <fr-accordion collapsible="single">
 *   <fr-accordion-item>
 *     <fr-accordion-item-title>
 *       <template data-fn="hidden">
 *        Item 1
 *       </template>
 *     </fr-accordion-item-title>
 *     <fr-accordion-item-content>
 *       <template data-fn="hidden">
 *        Content 1
 *       </template>
 *     </fr-accordion-item-content>
 *   </fr-accordion-item>
 *   <!-- more items -->
 * </fr-accordion>
 * ```
 */
@customElement('fr-accordion')
export class Accordion extends Base {
  /**
   * Controls how the accordion allows items to be open.
   * See the class doc for behavior details and examples.
   */
  @property({ type: String })
  collapsible: 'single' | 'multiple' | 'none' = 'single';

  /**
   * A live list of direct child `fr-accordion-item` elements.
   * Implemented as a getter so it is always up-to-date when read.
   */
  private get items(): AccordionItem[] {
    return Array.from(
      this.querySelectorAll(':scope > fr-accordion-item'),
    ) as AccordionItem[];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(
      'fr-toggle-request',
      this.handleToggleRequest as EventListener,
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener(
      'fr-toggle-request',
      this.handleToggleRequest as EventListener,
    );
  }

  /**
   * Handles a child's request to toggle its open state.
   * Behavior depends on the `collapsible` mode:
   * - `single`: opens the requested item and closes all others.
   * - `multiple`: toggles the requested item without affecting others.
   * - `none`: only allows closing items unless more than one is open, in
   *   which case the requested item may be toggled. (This mirrors the
   *   original behavior in the codebase.)
   */
  private handleToggleRequest(e: CustomEvent<{ item: AccordionItem }>): void {
    e.stopPropagation(); // Prevent event from bubbling to parent accordions

    const requestedItem = e.detail.item;
    const currentlyOpenItems = this.items.filter(item => item.open);

    if (this.collapsible === 'single') {
      // For single mode: close all others first, then toggle the requested item
      this.items.forEach(item => {
        if (item === requestedItem) {
          // Toggle the requested item
          item.toggle(!item.open);
        } else if (item.open) {
          // Close other open items
          item.toggle(false);
        }
      });
    } else if (this.collapsible === 'none') {
      // Only allow closing or opening if multiple are open
      if (!requestedItem.open || currentlyOpenItems.length > 1) {
        requestedItem.toggle();
      }
    } else {
      // multiple - independent toggling
      requestedItem.toggle();
    }
  }

  render() {
    return nothing;
  }
}
