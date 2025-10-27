import { html, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Base } from './shared/base';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const modalStack: Modal[] = [];
const BASE_Z_INDEX = 1000;

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'button:not([disabled])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex^="-"])',
].join(',');

export interface ModalEventDetail {
  modal: Modal;
  trigger?: HTMLElement;
}

interface Cls extends Record<string, string> {
  'host-inner': string;
  backdrop: string;
  dialog: string;
  header: string;
  content: string;
  footer: string;
}

interface Stl extends Record<string, string> {
  'host-inner': string;
  backdrop: string;
  dialog: string;
  header: string;
  content: string;
  footer: string;
}

@customElement('fr-modal')
export class Modal extends Base {
  protected 'cls-default-element': string = 'dialog';
  protected 'stl-default-element': string = 'dialog';

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean }) draggable = false;
  @property({ type: Boolean, attribute: 'close-on-backdrop' }) closeOnBackdrop =
    true;
  @property({ type: Boolean, attribute: 'close-on-escape' }) closeOnEscape =
    true;
  @property({ type: Boolean, attribute: 'restore-focus' }) restoreFocus = true;
  @property({ type: Boolean, attribute: 'lock-scroll' }) lockScroll = true;
  @property({ type: String, attribute: 'aria-labelledby' }) ariaLabelledby:
    | string
    | null = null;
  @property({ type: String, attribute: 'aria-label' }) ariaLabel:
    | string
    | null = null;
  @property({ type: String, attribute: 'aria-describedby' }) ariaDescribedby:
    | string
    | null = null;
  @property({ type: Number, attribute: 'animation-duration' })
  animationDuration = 300;

  @state() private dragPosition: { x: number; y: number } | null = null;

  @state()
  protected $cls: Cls = {
    'host-inner': '',
    backdrop: '',
    dialog: '',
    header: '',
    content: '',
    footer: '',
  };

  @state()
  protected $stl: Stl = {
    'host-inner': '',
    backdrop: '',
    dialog: '',
    header: '',
    content: '',
    footer: '',
  };

  private dialogElement: HTMLElement | null = null;
  private triggerElement: HTMLElement | null = null;
  private previouslyFocusedElement: HTMLElement | null = null;
  private isDragging = false;
  private dragStartPos: { x: number; y: number } | null = null;
  private dragStartMousePos: { x: number; y: number } | null = null;

  private templates: Map<string, string> = new Map();

  private defaultI18n = {
    closeLabel: 'Close modal',
    modalLabel: 'Modal dialog',
  };

  private getTemplate(name: string): string {
    return this.templates.get(name) || '';
  }

  private parseTemplates(): void {
    const templateElements = this.querySelectorAll(
      'template[data-fn="template"][data-name]',
    );

    templateElements.forEach(template => {
      const name = template.getAttribute('data-name');
      if (name && template instanceof HTMLTemplateElement) {
        this.templates.set(name, template.innerHTML.trim());
      }
    });
  }

  async show(trigger?: HTMLElement): Promise<void> {
    if (this.open) return;
    if (trigger) this.triggerElement = trigger;

    const openingEvent = new CustomEvent<ModalEventDetail>('opening', {
      detail: { modal: this, trigger: this.triggerElement || undefined },
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    if (!this.dispatchEvent(openingEvent)) return;

    this.previouslyFocusedElement = document.activeElement as HTMLElement;
    modalStack.push(this);
    this.open = true;

    if (this.lockScroll) {
      document.body.style.overflow = 'hidden';
    }

    await this.updateComplete;
    this.focusFirstElement();

    setTimeout(() => {
      const openedEvent = new CustomEvent<ModalEventDetail>('opened', {
        detail: { modal: this, trigger: this.triggerElement || undefined },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(openedEvent);
    }, this.animationDuration);
  }

  async hide(reason?: string): Promise<void> {
    if (!this.open) return;

    const closingEvent = new CustomEvent<
      ModalEventDetail & { reason?: string }
    >('closing', {
      detail: {
        modal: this,
        trigger: this.triggerElement || undefined,
        reason,
      },
      bubbles: true,
      composed: true,
      cancelable: true,
    });

    if (!this.dispatchEvent(closingEvent)) return;

    this.open = false;

    const index = modalStack.indexOf(this);
    if (index > -1) modalStack.splice(index, 1);

    if (this.lockScroll && modalStack.length === 0) {
      document.body.style.overflow = '';
    }

    if (this.restoreFocus) {
      if (this.triggerElement && document.contains(this.triggerElement)) {
        this.triggerElement.focus();
      } else if (
        this.previouslyFocusedElement &&
        document.contains(this.previouslyFocusedElement)
      ) {
        this.previouslyFocusedElement.focus();
      }
    }

    this.triggerElement = null;
    this.previouslyFocusedElement = null;
    this.dragPosition = null;

    setTimeout(() => {
      const closedEvent = new CustomEvent<
        ModalEventDetail & { reason?: string }
      >('closed', {
        detail: { modal: this, reason },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(closedEvent);
    }, this.animationDuration);
  }

  toggle(trigger?: HTMLElement): void {
    if (this.open) this.hide();
    else this.show(trigger);
  }

  private focusFirstElement(): void {
    if (!this.dialogElement) {
      this.dialogElement = this.querySelector('[data-dialog]') as HTMLElement;
    }

    const focusableElements = this.getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    } else if (this.dialogElement) {
      this.dialogElement.focus();
    }
  }

  private getFocusableElements(): HTMLElement[] {
    if (!this.dialogElement) return [];
    return Array.from(this.dialogElement.querySelectorAll(FOCUSABLE_SELECTORS));
  }

  private handleKeyDown = (e: KeyboardEvent): void => {
    if (!this.open) return;

    if (e.key === 'Escape' && this.closeOnEscape) {
      e.preventDefault();
      this.hide('escape');
      return;
    }

    if (e.key === 'Tab') {
      this.handleTabKey(e);
    }
  };

  private handleTabKey(e: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    if (focusableElements.length === 0) {
      e.preventDefault();
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement;

    if (e.shiftKey) {
      if (
        activeElement === firstElement ||
        !this.dialogElement?.contains(activeElement)
      ) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      if (activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  private handleBackdropClick = (e: MouseEvent): void => {
    if (e.target === e.currentTarget && this.closeOnBackdrop) {
      this.hide('backdrop');
    }
  };

  private handleCloseClick = (e: Event): void => {
    const target = e.target as HTMLElement;
    if (
      target.hasAttribute('data-modal-close') ||
      target.closest('[data-modal-close]')
    ) {
      e.preventDefault();
      this.hide('button');
    }
  };

  private handleMouseDown = (e: MouseEvent): void => {
    if (!this.draggable) return;

    const target = e.target as HTMLElement;
    const header = target.closest('[data-header]');
    if (!header) return;

    if (
      target.matches('button, a, input, select, textarea') ||
      target.closest('button, a, input, select, textarea')
    ) {
      return;
    }

    e.preventDefault();
    this.isDragging = true;
    this.dragStartMousePos = { x: e.clientX, y: e.clientY };
    const currentPos = this.dragPosition || { x: 0, y: 0 };
    this.dragStartPos = { ...currentPos };

    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);

    this.dialogElement?.setAttribute('data-dragging', '');
  };

  private handleMouseMove = (e: MouseEvent): void => {
    if (!this.isDragging || !this.dragStartPos || !this.dragStartMousePos)
      return;

    const deltaX = e.clientX - this.dragStartMousePos.x;
    const deltaY = e.clientY - this.dragStartMousePos.y;

    const newPos = {
      x: this.dragStartPos.x + deltaX,
      y: this.dragStartPos.y + deltaY,
    };

    this.dragPosition = newPos;

    const draggingEvent = new CustomEvent<
      ModalEventDetail & { x: number; y: number }
    >('dragging', {
      detail: { modal: this, x: newPos.x, y: newPos.y },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(draggingEvent);
  };

  private handleMouseUp = (): void => {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.dragStartPos = null;
    this.dragStartMousePos = null;

    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    this.dialogElement?.removeAttribute('data-dragging');
  };

  private getZIndex(): number {
    const stackIndex = modalStack.indexOf(this);
    return BASE_Z_INDEX + (stackIndex >= 0 ? stackIndex * 10 : 0);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.parseTemplates();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    this.templates.clear();
  }

  updated(changedProperties: Map<string, any>): void {
    super.updated(changedProperties);
    if (this.open && !this.dialogElement) {
      this.dialogElement = this.querySelector('[data-dialog]') as HTMLElement;
    }
  }

  render(): TemplateResult {
    const visible = this.open;
    const zIndex = this.getZIndex();
    const modalLabel =
      this.ariaLabel || this.getI18nText('modalLabel', this.defaultI18n);
    const transformStyle = this.dragPosition
      ? `translate(${this.dragPosition.x}px, ${this.dragPosition.y}px)`
      : '';

    const headerContent = this.getTemplate('header');
    const footerContent = this.getTemplate('footer');
    const bodyContent = this.getTemplate('body') || this.$template;

    const displayStyle = visible ? 'display: flex;' : 'display: none;';

    return html`
      <div
        data-host-inner
        class="${this.$cls['host-inner']}"
        style="${this.$stl['host-inner']}"
      >
        <div
          class="${this.$cls['backdrop']}"
          style="${displayStyle} z-index: ${zIndex}; ${this.$stl['backdrop']}"
          @click="${this.handleBackdropClick}"
        >
          <div
            data-dialog
            class="${this.$cls['dialog']}"
            style="z-index: ${zIndex + 1}; ${transformStyle
              ? `transform: ${transformStyle};`
              : ''} ${this.$stl['dialog']}"
            role="dialog"
            aria-modal="true"
            aria-labelledby="${this.ariaLabelledby || ''}"
            aria-label="${modalLabel}"
            aria-describedby="${this.ariaDescribedby || ''}"
            tabindex="-1"
            @mousedown="${this.handleMouseDown}"
            @click="${this.handleCloseClick}"
          >
            ${headerContent
              ? html`
                  <div
                    data-header
                    class="${this.$cls['header']}"
                    style="${this.$stl['header']}"
                  >
                    ${unsafeHTML(headerContent)}
                  </div>
                `
              : ''}
            <div
              data-content
              class="${this.$cls['content']}"
              style="${this.$stl['content']}"
            >
              ${unsafeHTML(bodyContent)}
            </div>
            ${footerContent
              ? html`
                  <div
                    data-footer
                    class="${this.$cls['footer']}"
                    style="${this.$stl['footer']}"
                  >
                    ${unsafeHTML(footerContent)}
                  </div>
                `
              : ''}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fr-modal': Modal;
  }

  interface HTMLElementEventMap {
    modalopening: CustomEvent<ModalEventDetail>;
    modalopened: CustomEvent<ModalEventDetail>;
    modalclosing: CustomEvent<ModalEventDetail & { reason?: string }>;
    modalclosed: CustomEvent<ModalEventDetail & { reason?: string }>;
    modaldragging: CustomEvent<ModalEventDetail & { x: number; y: number }>;
  }
}
