import { type PropertyValues } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import {
  computePosition,
  autoUpdate,
  flip,
  shift,
  offset,
  arrow as arrowMiddleware,
  size,
  type Placement,
  type Middleware,
  type ComputePositionReturn,
} from '@floating-ui/dom';
import merge from 'lodash/merge';
import type { Base } from './base';

/**
 * CSS class names interface for styling different parts of the drop component.
 */
export interface DroppableCls extends Record<string, string> {
  /** CSS classes for the main drop container. */
  drop: string;
  /** CSS classes for the arrow element (if enabled). */
  arrow: string;
}

/**
 * Inline styles interface for different parts of the component.
 */
export interface DroppableStl extends Record<string, string> {
  /** Inline styles for the main drop container. */
  drop: string;
  /** Inline styles for the arrow element (if enabled). */
  arrow: string;
}

/**
 * Floating UI configuration interface
 */
export interface FloatingConfig {
  placement?: Placement;
  middleware?: Middleware[];
  strategy?: 'absolute' | 'fixed';
}

/**
 * Type helper for constructor functions (supports abstract classes)
 */
type Constructor<T = {}> = abstract new (...args: any[]) => T;

/**
 * Mixin that adds droppable/floating UI functionality to any LitElement component
 *
 * @fires open - Fires when drop opens
 * @fires close - Fires when drop closes
 * @fires stack - Fires when drop is nested
 * @fires positioned - Fires after Floating UI computes position
 */
export const BaseDropMixin = <TBase extends Constructor<Base>>(
  BaseClass: TBase,
) => {
  abstract class Drop extends BaseClass {
    // Configuration Properties
    @property({ type: String, attribute: 'toggle' }) toggleSelector: string =
      '- *';
    @property({ type: String }) trigger: string = 'click';
    @property({ type: Boolean, reflect: true }) disabled: boolean = false;
    @property({ type: String }) placement: Placement = 'bottom-start';
    @property({ type: Number }) offset: number = 8;
    @property({ type: Boolean, attribute: 'match-width' }) matchWidth: boolean =
      false;
    @property({ type: Boolean }) arrow: boolean = false;
    @property({ type: String }) label: string = '';
    @property({ type: String }) describedby: string = '';
    @property({ type: Number, attribute: 'delay-show' }) delayShow: number = 0;
    @property({ type: Number, attribute: 'delay-hide' }) delayHide: number = 0;
    @property({ type: Number }) duration: number = 200;
    @property({ type: Boolean, attribute: 'close-on-outside-click' })
    closeOnOutsideClick: boolean = true;
    @property({ type: Boolean, attribute: 'close-on-escape' })
    closeOnEscape: boolean = true;
    @property({ type: Boolean, attribute: 'close-on-scroll' })
    closeOnScroll: boolean = false;
    @property({ type: Boolean, attribute: 'focus-trap' }) focusTrap: boolean =
      false;
    @property({ type: Boolean, attribute: 'return-focus' })
    returnFocus: boolean = true;

    // State
    @state() protected isOpen: boolean = false;
    @state() protected $dropCls: DroppableCls = { drop: '', arrow: '' };
    @state() protected $dropStl: DroppableStl = { drop: '', arrow: '' };

    // Element References
    @query('[data-drop]') protected dropEl?: HTMLElement;
    @query('[data-arrow]') protected arrowEl?: HTMLElement;
    protected toggleEl?: HTMLElement;
    private cleanupAutoUpdate?: () => void;
    private showTimeout?: number;
    private hideTimeout?: number;
    private focusableElements?: HTMLElement[];
    private lastFocusedElement?: HTMLElement;

    // Stack management for nested drops
    private static openDrops: Drop[] = [];
    protected stackIndex: number = 0;
    protected parentDrop?: Drop;

    /**
     * Extracts Floating UI-specific configuration from $config.
     * Only returns the floating namespace for better organization.
     *
     * @returns Floating UI configuration object
     *
     * @example
     * ```json
     * { "floating": { "placement": "top" } }
     * ```
     * Returns: `{ "placement": "top" }`
     */
    protected get $floatingConfig(): FloatingConfig {
      if ('floating' in this.$config && typeof this.$config === 'object') {
        return (this.$config as { floating: FloatingConfig }).floating;
      }

      return {};
    }

    /**
     * Hook called when drop opens - override in subclass for custom behavior
     */
    protected onDropOpen(): void {}

    /**
     * Hook called when drop closes - override in subclass for custom behavior
     */
    protected onDropClose(): void {}

    /**
     * Hook called when script configuration changes (via reactive observer).
     * Updates the floating position if drop is open.
     */
    protected onConfigChanged(): void {
      if (this.isOpen && this.dropEl && this.toggleEl) {
        this.updatePosition();
      }
    }

    /**
     * Hook called when position updates - override in subclass for custom behavior
     */
    protected onDropPositioned(_position: ComputePositionReturn): void {}

    connectedCallback(): void {
      super.connectedCallback();

      requestAnimationFrame(() => {
        this.initializeToggle();
        this.setupEventListeners();
      });
    }

    disconnectedCallback(): void {
      super.disconnectedCallback();
      this.cleanup();
      this.removeFromStack();
    }

    updated(changedProperties: PropertyValues): void {
      super.updated(changedProperties);

      if (changedProperties.has('disabled')) {
        if (this.disabled) {
          if (this.isOpen) {
            this.hide();
          }
          clearTimeout(this.showTimeout);
          clearTimeout(this.hideTimeout);
        }
        this.updateToggleDisabledState();
      }
    }

    private initializeToggle(): void {
      if (this.toggleSelector === '- *') {
        this.toggleEl = this.previousElementSibling as HTMLElement;
      } else {
        const parent = this.parentElement;
        if (parent) {
          this.toggleEl = parent.querySelector(
            this.toggleSelector,
          ) as HTMLElement;
        }
      }

      if (!this.toggleEl) {
        console.warn('Droppable: Toggle element not found');
        return;
      }

      const dropId =
        this.id || `drop-${Math.random().toString(36).substr(2, 9)}`;
      if (!this.id) this.id = dropId;

      this.toggleEl.setAttribute('aria-haspopup', 'dialog');
      this.toggleEl.setAttribute('aria-expanded', 'false');
      this.toggleEl.setAttribute('aria-controls', dropId);

      if (
        !this.toggleEl.hasAttribute('tabindex') &&
        this.toggleEl.tagName !== 'BUTTON' &&
        this.toggleEl.tagName !== 'A'
      ) {
        this.toggleEl.setAttribute('tabindex', '0');
      }

      this.updateToggleDisabledState();
    }

    private updateToggleDisabledState(): void {
      if (!this.toggleEl) return;

      if (this.disabled) {
        this.toggleEl.setAttribute('aria-disabled', 'true');
        if (this.toggleEl.tagName === 'BUTTON') {
          (this.toggleEl as HTMLButtonElement).disabled = true;
        }
      } else {
        this.toggleEl.removeAttribute('aria-disabled');
        if (this.toggleEl.tagName === 'BUTTON') {
          (this.toggleEl as HTMLButtonElement).disabled = false;
        }
      }
    }

    private setupEventListeners(): void {
      if (!this.toggleEl) return;

      const triggers = this.trigger.split(',').map(t => t.trim());

      triggers.forEach(trigger => {
        switch (trigger) {
          case 'click':
            this.toggleEl!.addEventListener('click', this.handleToggleClick);
            break;
          case 'hover':
            this.toggleEl!.addEventListener(
              'mouseenter',
              this.handleMouseEnter,
            );
            this.toggleEl!.addEventListener(
              'mouseleave',
              this.handleMouseLeave,
            );
            break;
        }
      });

      this.toggleEl.addEventListener('keydown', this.handleKeyDown);

      if (this.closeOnOutsideClick) {
        document.addEventListener('mousedown', this.handleOutsideClick);
      }

      if (this.closeOnEscape) {
        document.addEventListener('keydown', this.handleEscapeKey);
      }

      if (this.closeOnScroll) {
        window.addEventListener('scroll', this.handleScroll, true);
      }
    }

    private handleToggleClick = (e: Event): void => {
      if (this.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      this.toggle();
    };

    private clearHideTimeout = (): void => {
      clearTimeout(this.hideTimeout);
    };

    private handleMouseEnter = (): void => {
      if (this.disabled) return;
      this.clearHideTimeout();
      this.showTimeout = window.setTimeout(() => {
        this.show();
      }, this.delayShow);
    };

    private handleMouseLeave = (): void => {
      if (this.disabled) return;
      clearTimeout(this.showTimeout);
      this.hideTimeout = window.setTimeout(() => {
        this.hide();
      }, this.delayHide);
    };

    private handleKeyDown = (e: KeyboardEvent): void => {
      if (this.disabled) return;

      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggle();
      }

      if (this.focusTrap && this.isOpen && e.key === 'Tab') {
        this.handleFocusTrap(e);
      }
    };

    private handleEscapeKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && Drop.openDrops.length > 0) {
        const topDrop = Drop.openDrops[Drop.openDrops.length - 1];
        if (topDrop === this) {
          e.preventDefault();
          topDrop.hide();
        }
      }
    };

    private handleScroll = (): void => {
      if (this.isOpen) {
        this.hide();
      }
    };

    private handleFocusTrap(e: KeyboardEvent): void {
      if (!this.dropEl) return;

      if (!this.focusableElements) {
        this.focusableElements = Array.from(
          this.dropEl.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ) as HTMLElement[];
      }

      if (this.focusableElements.length === 0) return;

      const firstFocusable = this.focusableElements[0];
      const lastFocusable =
        this.focusableElements[this.focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }

    private handleOutsideClick = (e: Event): void => {
      if (Drop.openDrops.length === 0) return;

      if (Drop.openDrops[Drop.openDrops.length - 1] !== this) return;

      const target = e.target as Node;

      const clickedInStack = Drop.openDrops.some(
        drop =>
          drop.isConnected &&
          (drop.contains(target) ||
            drop.dropEl?.contains(target) ||
            drop.toggleEl?.contains(target)),
      );

      if (!clickedInStack) {
        const dropsToClose = [...Drop.openDrops].reverse();
        dropsToClose.forEach(drop => drop.hide());
      }
    };

    public toggle(): void {
      if (this.disabled) return;

      if (this.isOpen) {
        this.hide();
      } else {
        this.show();
      }
    }

    public async show(): Promise<void> {
      if (this.isOpen || this.disabled) return;

      this.isOpen = true;

      this.addToStack();

      if (this.returnFocus) {
        this.lastFocusedElement = document.activeElement as HTMLElement;
      }

      this.toggleEl?.setAttribute('aria-expanded', 'true');

      this.onDropOpen();

      this.dispatchEvent(
        new CustomEvent('open', {
          detail: { drop: this },
          bubbles: true,
        }),
      );

      await this.updateComplete;

      this.startAutoUpdate();

      if (this.focusTrap && this.dropEl) {
        const focusableElements = Array.from(
          this.dropEl.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        ) as HTMLElement[];

        if (focusableElements.length > 0) {
          focusableElements[0].focus();
          this.focusableElements = focusableElements;
        }
      }
    }

    public async hide(): Promise<void> {
      if (!this.isOpen) return;

      this.isOpen = false;

      this.toggleEl?.setAttribute('aria-expanded', 'false');

      this.onDropClose();

      this.dispatchEvent(
        new CustomEvent('close', {
          detail: { drop: this },
          bubbles: true,
        }),
      );

      if (this.returnFocus && this.lastFocusedElement) {
        this.lastFocusedElement.focus();
        this.lastFocusedElement = undefined;
      }

      this.focusableElements = undefined;

      this.removeFromStack();

      this.stopAutoUpdate();
    }

    private addToStack(): void {
      let parent: HTMLElement | null = this.parentElement;
      while (parent) {
        if (parent instanceof Drop) {
          const parentDrop = parent as Drop;
          if (parentDrop.isOpen) {
            this.parentDrop = parentDrop;
            break;
          }
        }
        parent = parent.parentElement;
      }

      this.stackIndex = Drop.openDrops.length;
      Drop.openDrops.push(this);

      if (this.stackIndex > 0) {
        this.dispatchEvent(
          new CustomEvent('stack', {
            detail: {
              drop: this,
              stackIndex: this.stackIndex,
              parentDrop: this.parentDrop,
            },
            bubbles: true,
          }),
        );
      }
    }

    private removeFromStack(): void {
      const index = Drop.openDrops.indexOf(this);

      if (index === -1) return;

      const childrenToClose = Drop.openDrops.slice(index + 1);
      childrenToClose.forEach(child => {
        if (child.isOpen) {
          child.hide();
        }
      });

      Drop.openDrops.splice(index, 1);

      this.parentDrop = undefined;
      this.stackIndex = 0;
    }

    /**
     * Builds middleware array for Floating UI
     */
    protected getMiddleware(): Middleware[] {
      const middleware: Middleware[] = [
        offset(this.offset),
        flip(),
        shift({ padding: 5 }),
      ];

      if (this.matchWidth) {
        middleware.push(
          size({
            apply({ rects, elements }) {
              Object.assign(elements.floating.style, {
                width: `${rects.reference.width}px`,
              });
            },
          }),
        );
      }

      if (this.arrow && this.arrowEl) {
        middleware.push(arrowMiddleware({ element: this.arrowEl, padding: 5 }));
      }

      return middleware;
    }

    /**
     * Starts auto-updating the dropdown position using Floating UI's autoUpdate
     */
    private startAutoUpdate(): void {
      if (!this.dropEl || !this.toggleEl) return;

      this.stopAutoUpdate();

      this.cleanupAutoUpdate = autoUpdate(
        this.toggleEl,
        this.dropEl,
        () => this.updatePosition(),
        {
          ancestorScroll: !this.closeOnScroll,
          ancestorResize: true,
          elementResize: true,
          layoutShift: true,
        },
      );
    }

    /**
     * Stops auto-updating the dropdown position
     */
    private stopAutoUpdate(): void {
      if (this.cleanupAutoUpdate) {
        this.cleanupAutoUpdate();
        this.cleanupAutoUpdate = undefined;
      }
    }

    /**
     * Computes and applies the dropdown position using Floating UI
     */
    protected async updatePosition(): Promise<void> {
      if (!this.dropEl || !this.toggleEl) return;

      const middleware = this.getMiddleware();

      const config: FloatingConfig = merge(
        {},
        {
          placement: this.placement,
          middleware,
          strategy: 'absolute' as const,
        },
        this.$floatingConfig,
      );

      const position: ComputePositionReturn = await computePosition(
        this.toggleEl,
        this.dropEl,
        config,
      );

      Object.assign(this.dropEl.style, {
        left: `${position.x}px`,
        top: `${position.y}px`,
      });

      if (this.arrow && this.arrowEl && position.middlewareData.arrow) {
        const { x, y } = position.middlewareData.arrow;

        Object.assign(this.arrowEl.style, {
          left: x != null ? `${x}px` : '',
          top: y != null ? `${y}px` : '',
        });

        const side = position.placement.split('-')[0];
        this.arrowEl.setAttribute('data-side', side);
      }

      this.onDropPositioned(position);

      this.dispatchEvent(
        new CustomEvent('positioned', {
          detail: { position },
          bubbles: true,
        }),
      );
    }

    /**
     * Public method to manually update position
     */
    public updateFloating(): void {
      if (this.isOpen) {
        this.updatePosition();
      }
    }

    /**
     * Expose clearHideTimeout for hover trigger support in subclasses
     */
    protected handleDropMouseEnter = (): void => {
      this.clearHideTimeout();
    };

    protected handleDropMouseLeave = (): void => {
      this.handleMouseLeave();
    };

    private cleanup(): void {
      if (this.toggleEl) {
        this.toggleEl.removeEventListener('click', this.handleToggleClick);
        this.toggleEl.removeEventListener('mouseenter', this.handleMouseEnter);
        this.toggleEl.removeEventListener('mouseleave', this.handleMouseLeave);
        this.toggleEl.removeEventListener('keydown', this.handleKeyDown);
      }

      document.removeEventListener('mousedown', this.handleOutsideClick);
      document.removeEventListener('keydown', this.handleEscapeKey);
      window.removeEventListener('scroll', this.handleScroll, true);

      this.stopAutoUpdate();
      clearTimeout(this.showTimeout);
      clearTimeout(this.hideTimeout);
    }
  }

  return Drop;
};
