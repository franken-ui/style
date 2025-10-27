import { nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Base } from './shared/base';
import type { TabItem } from './tab-item';

/**
 * fr-tab
 *
 * A headless tab container that coordinates tab items.
 *
 * Responsibilities:
 * - Manages which `fr-tab-item` is active.
 * - Listens for toggle requests and updates items accordingly.
 * - Ensures ARIA compliance per WAI-ARIA Tabs pattern.
 *
 * Accessibility:
 * - The container itself acts as the tablist (`role="tablist"`).
 * - Each title is a `button[role="tab"]`, each panel has `role="tabpanel"`.
 */
@customElement('fr-tab')
export class Tab extends Base {
  private get items(): TabItem[] {
    return Array.from(
      this.querySelectorAll(':scope > fr-tab-item'),
    ) as TabItem[];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(
      'fr-tab-activate-request',
      this.handleActivateRequest as EventListener,
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener(
      'fr-tab-activate-request',
      this.handleActivateRequest as EventListener,
    );
  }

  private handleActivateRequest(e: CustomEvent<{ item: TabItem }>) {
    e.stopPropagation();
    const requested = e.detail.item;

    // Only one active at a time
    this.items.forEach(item => {
      item.setActive(item === requested);
    });
  }

  render() {
    // The container itself is the "tablist"
    this.setAttribute('role', 'tablist');
    return nothing;
  }
}
