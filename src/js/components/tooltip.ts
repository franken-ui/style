// tooltip.ts
import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { BaseDropMixin } from './shared/base-drop';
import { Base } from './shared/base';

/**
 * A headless, accessible tooltip component - built with Floating UI
 *
 * Tooltips are specialized dropdowns optimized for showing brief contextual information.
 * They have sensible defaults: hover trigger, top placement, delays, and minimal styling needs.
 *
 * Custom events:
 * @fires open - Fires when tooltip opens
 * @fires close - Fires when tooltip closes
 * @fires positioned - Fires after Floating UI computes position
 *
 * @example
 * Basic usage:
 * ```html
 * <button>Hover me</button>
 * <fr-tooltip>
 *   <template data-fn="template">
 *     <div>Helpful tooltip text</div>
 *   </template>
 * </fr-tooltip>
 * ```
 *
 * @example
 * With custom placement and delays:
 * ```html
 * <button>Hover me</button>
 * <fr-tooltip placement="right" delay-show="500" delay-hide="200">
 *   <template data-fn="template">
 *     <div>This appears after 500ms delay</div>
 *   </template>
 * </fr-tooltip>
 * ```
 *
 * @example
 * With arrow and configuration:
 * ```html
 * <button>Hover me</button>
 * <fr-tooltip arrow>
 *   <template data-fn="template">
 *     <div>Tooltip with arrow</div>
 *   </template>
 *   <script type="application/json" data-reactive>
 *   {
 *     "floating": {
 *       "placement": "bottom"
 *     }
 *   }
 *   </script>
 * </fr-tooltip>
 * ```
 */
@customElement('fr-tooltip')
export class Tooltip extends BaseDropMixin(Base) {
  protected 'cls-default-element' = 'tooltip';

  constructor() {
    super();

    // Tooltip-specific defaults (override drop defaults)
    this.trigger = 'hover';
    this.placement = 'top';
    this.delayShow = 200;
    this.delayHide = 0;
    this.offset = 8;
    this.closeOnOutsideClick = false;
    this.closeOnEscape = false;
    this.closeOnScroll = false;
    this.focusTrap = false;
    this.returnFocus = false;
  }

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
        class="${this.$dropCls.tooltip || this.$dropCls.drop || ''} ${this
          .stackIndex > 0
          ? 'nested'
          : ''}"
        style="display: ${this.isOpen
          ? 'block'
          : 'none'}; position: absolute; --tooltip-duration: ${this
          .duration}ms; z-index: ${zIndex}; ${this.$dropStl.tooltip ||
        this.$dropStl.drop ||
        ''}"
        role="tooltip"
        aria-label="${ariaLabel || nothing}"
        aria-describedby="${ariaDescribedby || nothing}"
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
    'fr-tooltip': Tooltip;
  }
}
