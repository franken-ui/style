import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Base } from './shared/base';

/**
 * fr-accordion-item-content
 *
 * The collapsible panel portion of an accordion item that contains the
 * associated content. This component manages simple show/hide animations and
 * ARIA attributes linking it to its title.
 *
 * Note: While styling is generally delegated to cls/stl, the basic expand/collapse
 * animation is baked in for consistent behavior. Additional styling can be applied
 * via cls/stl attributes.
 *
 * Responsibilities
 * - Extract optional `<template>` child content for flexible markup.
 * - Maintain `aria-labelledby` to reference the corresponding title.
 * - Animate open/close by manipulating inline styles (max-height, opacity).
 *
 * Notes on animation
 * - This component uses a simple `max-height` + `opacity` approach for
 *   expand/collapse. This is small and robust but not ideal for dynamic
 *   content that changes height after being opened. For fluid content
 *   consider recalculating the `maxHeight` when content changes.
 *
 * Accessibility
 * - Uses `role="region"` and `aria-labelledby` so assistive technologies
 *   can associate the panel with its header.
 *
 * Usage
 * ```html
 * <fr-accordion-item-content>
 *   <template>Panel contents here</template>
 * </fr-accordion-item-content>
 * ```
 */
@customElement('fr-accordion-item-content')
export class AccordionItemContent extends Base {
  @state()
  private labelledById = '';

  /**
   * Update ARIA linkage and run a simple open/close transition on the
   * internal content container.
   * @param labelledById id of the title element that labels this panel
   * @param isOpen whether the panel should be visible
   */
  public updateAria(labelledById: string, isOpen: boolean) {
    this.labelledById = labelledById;

    // Use requestAnimationFrame to ensure DOM is updated
    requestAnimationFrame(() => {
      const contentEl = this.querySelector('[data-host-inner]') as HTMLElement;

      if (contentEl) {
        if (isOpen) {
          contentEl.style.maxHeight = contentEl.scrollHeight + 'px';
          contentEl.style.opacity = '1';
        } else {
          contentEl.style.maxHeight = '0';
          contentEl.style.opacity = '0';
        }
      }
    });
  }

  render() {
    // Base styles for animation - users can override/extend via stl attribute
    const baseStyle = 'max-height: 0; opacity: 0; overflow: hidden;';
    const customStyle = this.$stl['host-inner'] || '';
    const combinedStyle = customStyle
      ? `${baseStyle} ${customStyle}`
      : baseStyle;

    return html`
      <div
        id="${this.parentElement?.id ? `${this.parentElement.id}-content` : ''}"
        class="${this.$cls['host-inner'] || ''}"
        style="${combinedStyle}"
        role="region"
        aria-labelledby="${this.labelledById}"
        data-host-inner
      >
        ${this.$template ? unsafeHTML(this.$template) : nothing}
      </div>
    `;
  }
}
