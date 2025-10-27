import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Base } from './shared/base';

/**
 * fr-tab-panel
 *
 * The content region associated with a tab title.
 */
@customElement('fr-tab-panel')
export class TabPanel extends Base {
  @state()
  private labelledBy = '';

  @state()
  private visible = false;

  public updateAria(labelledById: string, isActive: boolean) {
    this.labelledBy = labelledById;
    this.visible = isActive;

    requestAnimationFrame(() => {
      const el = this.querySelector('[data-host-inner]') as HTMLElement;
      if (!el) return;

      el.hidden = !isActive;
      el.style.display = isActive ? 'block' : 'none';
    });
  }

  render() {
    return html`
      <div
        role="tabpanel"
        id="${this.parentElement?.id ? `${this.parentElement.id}-panel` : ''}"
        aria-labelledby="${this.labelledBy}"
        class="${this.$cls['host-inner'] || ''}"
        style="${this.$stl['host-inner'] || ''}"
        data-host-inner
        ?hidden="${!this.visible}"
      >
        ${this.$template ? unsafeHTML(this.$template) : nothing}
      </div>
    `;
  }
}
