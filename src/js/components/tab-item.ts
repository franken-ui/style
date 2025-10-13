import { nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Base } from './shared/base';
import type { TabTitle } from './tab-title';
import type { TabPanel } from './tab-panel';

let __TAB_ITEM_COUNTER__ = 0;

/**
 * fr-tab-item
 *
 * A single tab with a title and panel.
 * Maintains its `active` state and updates ARIA attributes on its children.
 */
@customElement('fr-tab-item')
export class TabItem extends Base {
  @property({ type: Boolean, reflect: true })
  active = false;

  @state()
  private tid = `fr-tab-item-${++__TAB_ITEM_COUNTER__}`;

  private get titleElement(): TabTitle | null {
    return this.querySelector('fr-tab-title');
  }

  private get panelElement(): TabPanel | null {
    return this.querySelector('fr-tab-panel');
  }

  private get allItems(): TabItem[] {
    const parent = this.parentElement;
    if (!parent) return [];
    return Array.from(
      parent.querySelectorAll(':scope > fr-tab-item'),
    ) as TabItem[];
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('fr-tab-title-click', this.handleTitleClick);
    this.addEventListener(
      'fr-tab-navigation-key',
      this.handleNavigationKey as EventListener,
    );

    if (this.active) {
      requestAnimationFrame(() => this.updateChildrenAria());
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('fr-tab-title-click', this.handleTitleClick);
    this.removeEventListener(
      'fr-tab-navigation-key',
      this.handleNavigationKey as EventListener,
    );
  }

  private handleTitleClick() {
    this.dispatchEvent(
      new CustomEvent('fr-tab-activate-request', {
        bubbles: true,
        composed: true,
        detail: { item: this },
      }),
    );
  }

  private handleNavigationKey(
    e: CustomEvent<{ key: string; originalEvent: KeyboardEvent }>,
  ) {
    const { key, originalEvent } = e.detail;
    const items = this.allItems;
    const index = items.indexOf(this);
    if (index === -1) return;

    let nextIndex = index;
    switch (key) {
      case 'ArrowRight':
        originalEvent.preventDefault();
        nextIndex = (index + 1) % items.length;
        break;
      case 'ArrowLeft':
        originalEvent.preventDefault();
        nextIndex = index === 0 ? items.length - 1 : index - 1;
        break;
      case 'Home':
        originalEvent.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        originalEvent.preventDefault();
        nextIndex = items.length - 1;
        break;
      default:
        return;
    }

    items[nextIndex]?.focusTitle();
  }

  focusTitle() {
    this.titleElement?.focus();
  }

  private updateChildrenAria() {
    this.titleElement?.updateAria(this.active, `${this.tid}-panel`);
    this.panelElement?.updateAria(`${this.tid}-title`, this.active);
  }

  public setActive(isActive: boolean) {
    if (this.active === isActive) return;
    this.active = isActive;
  }

  protected updated(changed: Map<string | number | symbol, unknown>): void {
    super.updated(changed);

    if (changed.has('active')) {
      this.updateChildrenAria();

      this.dispatchEvent(
        new CustomEvent(this.active ? 'activate' : 'deactivate', {
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
