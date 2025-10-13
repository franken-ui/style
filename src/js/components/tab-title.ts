import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Base } from './shared/base';

/**
 * fr-tab-title
 *
 * Acts as the interactive button for its corresponding tab panel.
 */
@customElement('fr-tab-title')
export class TabTitle extends Base {
  @state()
  private isActive = false;

  @state()
  private controlsId = '';

  protected $cls = { container: '', button: '' };
  protected $stl = { container: '', button: '' };

  protected 'cls-default-element' = 'button';
  protected 'stl-default-element' = 'button';

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent('fr-tab-title-click', { bubbles: true, composed: true }),
    );
  }

  private handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleClick();
      return;
    }

    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
      this.dispatchEvent(
        new CustomEvent('fr-tab-navigation-key', {
          bubbles: true,
          composed: true,
          detail: { key: e.key, originalEvent: e },
        }),
      );
    }
  }

  public updateAria(isActive: boolean, controlsId: string) {
    this.isActive = isActive;
    this.controlsId = controlsId;
  }

  focus() {
    const btn = this.querySelector('button[data-tab-trigger]') as HTMLElement;
    btn?.focus();
  }

  render() {
    return html`
      <div
        class="${this.$cls.container}"
        style="${this.$stl.container}"
        data-host-inner
      >
        <button
          role="tab"
          class="${this.$cls.button}"
          style="${this.$stl.button}"
          type="button"
          aria-selected="${this.isActive}"
          aria-controls="${this.controlsId}"
          tabindex="${this.isActive ? '0' : '-1'}"
          @click="${this.handleClick}"
          @keydown="${this.handleKeydown}"
          data-tab-trigger
        >
          ${this.$template ? unsafeHTML(this.$template) : nothing}
        </button>
      </div>
    `;
  }
}
