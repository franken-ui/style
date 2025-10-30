import { html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Base } from './shared/base';
import { animate } from 'animejs';

/**
 * fr-accordion-item-content
 *
 * The collapsible panel portion of an accordion item that contains the
 * associated content.
 *
 * Responsibilities
 * - Extract optional `<template>` child content for flexible markup.
 * - Maintain `aria-labelledby` to reference the corresponding title.
 * - Smooth show/hide animations using anime.js v4.
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

  private contentElement: HTMLElement | null = null;
  private currentAnimation: any = null;

  /**
   * Update ARIA linkage and open/close state with animation.
   * @param labelledById id of the title element that labels this panel
   * @param isOpen whether the panel should be visible
   */
  public updateAria(labelledById: string, isOpen: boolean) {
    this.labelledById = labelledById;

    // Only animate if state actually changes
    if (this.isOpen !== isOpen) {
      this.isOpen = isOpen;
      this.animateContent(isOpen);
    }
  }

  private animateContent(show: boolean) {
    if (!this.contentElement) return;

    // Cancel any ongoing animation
    if (this.currentAnimation) {
      this.currentAnimation.pause();
    }

    if (show) {
      // Opening animation
      // First make visible with 0 height
      this.contentElement.style.display = 'block';
      this.contentElement.style.overflow = 'hidden';

      // Get the natural height including padding
      const naturalHeight = this.contentElement.scrollHeight;

      // Set initial state
      this.contentElement.style.height = '0px';
      this.contentElement.style.opacity = '0';

      this.currentAnimation = animate(this.contentElement, {
        height: naturalHeight,
        opacity: 1,
        duration: 400,
        ease: 'outQuint',
        onComplete: () => {
          // Reset to auto height for responsiveness
          if (this.contentElement) {
            this.contentElement.style.height = 'auto';
            this.contentElement.style.overflow = 'visible';
          }
          this.currentAnimation = null;
        },
      });
    } else {
      // Closing animation
      const currentHeight = this.contentElement.offsetHeight;
      this.contentElement.style.height = `${currentHeight}px`;
      this.contentElement.style.overflow = 'hidden';

      // Force reflow to ensure the height is applied before animating
      this.contentElement.offsetHeight;

      this.currentAnimation = animate(this.contentElement, {
        height: 0,
        opacity: 0,
        duration: 400,
        ease: 'inOutQuint',
        onComplete: () => {
          if (this.contentElement) {
            // Keep display:block but hide with height:0 to preserve border
            this.contentElement.style.height = '0px';
            this.contentElement.style.opacity = '0';
          }
          this.currentAnimation = null;
        },
      });
    }
  }

  protected firstUpdated() {
    this.contentElement = this.querySelector(
      '[data-host-inner]',
    ) as HTMLElement;

    // Set initial state without animation
    if (this.contentElement) {
      if (!this.isOpen) {
        this.contentElement.style.height = '0px';
        this.contentElement.style.opacity = '0';
        this.contentElement.style.overflow = 'hidden';
      }
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    // Clean up animation on disconnect
    if (this.currentAnimation) {
      this.currentAnimation.pause();
      this.currentAnimation = null;
    }
  }

  render() {
    return html`
      <div
        id="${this.parentElement?.id ? `${this.parentElement.id}-content` : ''}"
        class="${this.$cls['host-inner'] || ''}"
        style="${this.$stl['host-inner'] || ''}"
        role="region"
        aria-labelledby="${this.labelledById}"
        aria-hidden="${!this.isOpen}"
        data-host-inner
      >
        ${this.$template ? unsafeHTML(this.$template) : nothing}
      </div>
    `;
  }
}
