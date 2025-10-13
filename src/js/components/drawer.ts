import { html, type TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Base } from './shared/base';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const drawerStack: Drawer[] = [];
const BASE_Z_INDEX = 1100;

export interface DrawerEventDetail {
  drawer: Drawer;
  trigger?: HTMLElement;
}

@customElement('fr-drawer')
export class Drawer extends Base {
  protected 'cls-default-element': string = 'drawer';
  protected 'stl-default-element': string = 'drawer';

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, attribute: 'close-on-backdrop' }) closeOnBackdrop =
    true;
  @property({ type: Boolean, attribute: 'close-on-escape' }) closeOnEscape =
    true;
  @property({ type: Boolean, attribute: 'restore-focus' }) restoreFocus = true;
  @property({ type: Boolean, attribute: 'lock-scroll' }) lockScroll = true;
  @property({ type: String }) position: 'left' | 'right' | 'top' | 'bottom' =
    'right';
  @property({ type: Number, attribute: 'animation-duration' })
  animationDuration = 300;

  // 🆕 Size property for convenience (sm, md, lg, full)
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'full' = 'md';

  private triggerElement: HTMLElement | null = null;
  private previouslyFocusedElement: HTMLElement | null = null;

  @state()
  protected $cls: Record<string, string> = {
    'host-inner': '',
    backdrop: '',
    drawer: '',
  };

  @state()
  protected $stl: Record<string, string> = {
    'host-inner': '',
    backdrop: '',
    drawer: '',
  };

  async show(trigger?: HTMLElement): Promise<void> {
    if (this.open) return;
    if (trigger) this.triggerElement = trigger;

    const openingEvent = new CustomEvent<DrawerEventDetail>('opening', {
      detail: { drawer: this, trigger: this.triggerElement || undefined },
      bubbles: true,
      composed: true,
      cancelable: true,
    });
    if (!this.dispatchEvent(openingEvent)) return;

    this.previouslyFocusedElement = document.activeElement as HTMLElement;
    drawerStack.push(this);
    this.open = true;

    if (this.lockScroll) {
      document.body.style.overflow = 'hidden';
    }

    await this.updateComplete;

    setTimeout(() => {
      const openedEvent = new CustomEvent<DrawerEventDetail>('opened', {
        detail: { drawer: this, trigger: this.triggerElement || undefined },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(openedEvent);
    }, this.animationDuration);
  }

  async hide(reason?: string): Promise<void> {
    if (!this.open) return;

    const closingEvent = new CustomEvent<
      DrawerEventDetail & { reason?: string }
    >('closing', {
      detail: {
        drawer: this,
        trigger: this.triggerElement || undefined,
        reason,
      },
      bubbles: true,
      composed: true,
      cancelable: true,
    });

    if (!this.dispatchEvent(closingEvent)) return;

    this.open = false;

    const index = drawerStack.indexOf(this);
    if (index > -1) drawerStack.splice(index, 1);

    if (this.lockScroll && drawerStack.length === 0) {
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

    setTimeout(() => {
      const closedEvent = new CustomEvent<
        DrawerEventDetail & { reason?: string }
      >('closed', {
        detail: { drawer: this, reason },
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

  private handleKeyDown = (e: KeyboardEvent): void => {
    if (!this.open) return;

    if (e.key === 'Escape' && this.closeOnEscape) {
      e.preventDefault();
      this.hide('escape');
    }
  };

  private handleBackdropClick = (e: MouseEvent): void => {
    if (e.target === e.currentTarget && this.closeOnBackdrop) {
      this.hide('backdrop');
    }
  };

  private getZIndex(): number {
    const stackIndex = drawerStack.indexOf(this);
    return BASE_Z_INDEX + (stackIndex >= 0 ? stackIndex * 10 : 0);
  }

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render(): TemplateResult {
    const visible = this.open;
    const zIndex = this.getZIndex();

    const translateHidden = {
      left: 'translateX(-100%)',
      right: 'translateX(100%)',
      top: 'translateY(-100%)',
      bottom: 'translateY(100%)',
    }[this.position];

    const displayStyle = visible ? 'display: flex;' : 'display: none;';
    const transformStyle = visible ? 'translate(0, 0)' : translateHidden;

    // 🆕 Size variable for CSS control
    const sizeValue = {
      sm: '240px',
      md: '400px',
      lg: '640px',
      full: '100%',
    }[this.size];

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
            data-drawer
            class="${this.$cls['drawer']}"
            style="
              --drawer-size: ${sizeValue};
              transform: ${transformStyle};
              transition: transform ${this.animationDuration}ms ease;
              z-index: ${zIndex + 1};
              ${this.$stl['drawer']}
            "
            role="dialog"
            aria-modal="true"
            tabindex="-1"
          >
            ${unsafeHTML(this.$template)}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fr-drawer': Drawer;
  }

  interface HTMLElementEventMap {
    draweropening: CustomEvent<DrawerEventDetail>;
    draweropened: CustomEvent<DrawerEventDetail>;
    drawerclosing: CustomEvent<DrawerEventDetail & { reason?: string }>;
    drawerclosed: CustomEvent<DrawerEventDetail & { reason?: string }>;
  }
}
