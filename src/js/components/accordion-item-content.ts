import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Base } from './shared/base';

/**
 * fr-accordion-item-content
 *
 * The collapsible panel portion of an accordion item that contains the
 * associated content.
 *
 * Responsibilities
 * - Extract optional `<template>` child content for flexible markup.
 * - Maintain `aria-labelledby` to reference the corresponding title.
 * - Simple show/hide with CSS transitions.
 *
 * Accessibility
 * - Uses `role="region"` and `aria-labelledby` so assistive technologies
 *   can associate the panel with its header.
 */
@customElement('fr-accordion-item-content')
export class AccordionItemContent extends Base {
  @state()
  private labelledById = '';

  @state()
  private isOpen = false;

  /**
   * Update ARIA linkage and open/close state.
   * @param labelledById id of the title element that labels this panel
   * @param isOpen whether the panel should be visible
   */
  public updateAria(labelledById: string, isOpen: boolean) {
    this.labelledById = labelledById;
    this.isOpen = isOpen;
  }

  render() {
    return html`
      <div
        id="${this.parentElement?.id ? `${this.parentElement.id}-content` : ''}"
        class="${this.$cls['host-inner'] || ''}"
        style="${this.$stl['host-inner'] || ''}"
        role="region"
        aria-labelledby="${this.labelledById}"
        ?hidden="${!this.isOpen}"
        data-host-inner
      >
        ${this.$template ? unsafeHTML(this.$template) : nothing}
      </div>
    `;
  }
}
