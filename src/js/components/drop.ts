// drop.ts
import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { BaseDropMixin } from './shared/base-drop';
import { Base } from './shared/base';

/**
 * A headless, accessible dropdown component - built with Floating UI
 *
 * Custom events:
 * @fires open - Fires when drop opens
 * @fires close - Fires when drop closes
 * @fires stack - Fires when drop is nested
 * @fires positioned - Fires after Floating UI computes position
 *
 * @example
 * Basic usage:
 * ```html
 * <button>Toggle</button>
 * <fr-drop>
 *   <template data-fn="template">
 *     <div>Dropdown content</div>
 *   </template>
 * </fr-drop>
 * ```
 *
 * @example
 * With Floating UI configuration:
 * ```html
 * <button>Toggle</button>
 * <fr-drop>
 *   <template data-fn="template">
 *     <div>Dropdown content</div>
 *   </template>
 *   <script type="application/json" data-reactive>
 *   {
 *     "floating": {
 *       "placement": "top",
 *       "middleware": []
 *     }
 *   }
 *   </script>
 * </fr-drop>
 * ```
 */
@customElement('fr-drop')
export class Drop extends BaseDropMixin(Base) {
  protected 'cls-default-element' = 'drop';

  render() {
    const ariaLabel =
      (this.$i18n['label'] as string) || this.label || undefined;
    const ariaDescribedby = this.describedby || undefined;

    const zIndex = 1000 + this.stackIndex;

    return html`
      <div
        data-host-inner
        data-drop
        id="${this.id}"
        class="${this.$dropCls.drop} ${this.stackIndex > 0 ? 'nested' : ''}"
        style="display: ${this.isOpen
          ? 'block'
          : 'none'}; position: absolute; --drop-duration: ${this
          .duration}ms; z-index: ${zIndex}; ${this.$dropStl.drop || ''}"
        role="dialog"
        aria-modal="${this.focusTrap}"
        aria-label="${ariaLabel || nothing}"
        aria-describedby="${ariaDescribedby || nothing}"
        aria-labelledby="${this.toggleEl?.id || nothing}"
        @mouseenter=${this.trigger.includes('hover')
          ? this.handleDropMouseEnter
          : nothing}
        @mouseleave=${this.trigger.includes('hover')
          ? this.handleDropMouseLeave
          : nothing}
      >
        ${unsafeHTML(this.$template)}
        ${this.arrow
          ? html`
              <div
                data-arrow
                class="${this.$dropCls.arrow || ''}"
                style="position: absolute; ${this.$dropStl.arrow || ''}"
              ></div>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fr-drop': Drop;
  }
}
