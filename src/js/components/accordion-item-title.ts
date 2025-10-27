import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Base } from './shared/base';

interface Cls extends Record<string, string> {
  container: string;
  trigger: string;
}

interface Stl extends Record<string, string> {
  container: string;
  trigger: string;
}

/**
 * fr-accordion-item-title
 *
 * The interactive header portion of an accordion item. Acts as the user
 * visible trigger that opens/closes the corresponding content panel.
 */
@customElement('fr-accordion-item-title')
export class AccordionItemTitle extends Base {
  @state()
  private isExpanded = false;

  @state()
  private controlsId = '';

  @state()
  protected $cls: Cls = {
    container: '',
    trigger: '',
  };

  @state()
  protected $stl: Stl = {
    container: '',
    trigger: '',
  };

  protected 'cls-default-element' = 'trigger';

  protected 'stl-default-element' = 'trigger';

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent('fr-title-click', { bubbles: true, composed: true }),
    );
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleClick();
      return;
    }

    // Forward arrow keys and Home/End to parent item
    // Don't call preventDefault here - let parent handle it
    if (
      [
        'ArrowDown',
        'ArrowRight',
        'ArrowUp',
        'ArrowLeft',
        'Home',
        'End',
      ].includes(e.key)
    ) {
      // Dispatch a custom event that parent can listen to
      this.dispatchEvent(
        new CustomEvent('fr-navigation-key', {
          bubbles: true,
          composed: true,
          detail: { key: e.key, originalEvent: e },
        }),
      );
    }
  }

  /**
   * Called by the parent item to update ARIA state.
   */
  public updateAria(isExpanded: boolean, controlsId: string) {
    this.isExpanded = isExpanded;
    this.controlsId = controlsId;
  }

  focus() {
    const button = this.querySelector(
      'button[data-host-inner]',
    ) as HTMLButtonElement;
    button?.focus();
  }

  render() {
    return html`
      <div
        class="${this.$cls.container}"
        style="${this.$stl.container}"
        data-host-inner
      >
        <button
          id="${this.parentElement?.id ? `${this.parentElement.id}-title` : ''}"
          class="${this.$cls.trigger || ''}"
          style="${this.$stl.trigger || ''}"
          type="button"
          aria-expanded="${this.isExpanded}"
          aria-controls="${this.controlsId}"
          @click="${this.handleClick}"
          @keydown="${this.handleKeydown}"
          data-accordion-trigger
        >
          ${this.$template ? unsafeHTML(this.$template) : nothing}
        </button>
      </div>
    `;
  }
}
