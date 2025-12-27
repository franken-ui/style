// refactored lsh.ts
import { type PropertyValues, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Base } from './shared/base';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

type LSHConfig = {
  [group: string]: string;
};

/**
 * CSS class names interface for styling the button.
 */
interface Cls extends Record<string, string> {
  /** CSS classes for the button element. */
  button: string;
}

/**
 * Inline styles interface for the button.
 */
interface Stl extends Record<string, string> {
  /** Inline styles for the button element. */
  button: string;
}

/**
 * A theme/style switcher component that persists selections to localStorage and syncs with document classes.
 *
 * This component manages theme switching (light/dark mode) and other style configurations,
 * storing them in localStorage and applying them as classes to the document element.
 *
 * @element uk-lsh
 * @extends {Base}
 *
 * Features:
 * - Theme persistence via localStorage
 * - Automatic sync across multiple instances
 * - Toggle mode for light/dark switching
 * - Customizable via templates
 * - Full ARIA support
 * - Cancelable before-change events
 * - Multi-group configuration support
 *
 * @fires uk-lsh:before-change - Emitted before theme changes (cancelable)
 * @fires uk-lsh:change - Emitted after theme changes
 *
 * @example
 * Basic theme toggle:
 * ```html
 * <uk-lsh toggle group="mode">
 *   <template data-fn="template">
 *     <span class="sun-icon">☀️</span>
 *     <span class="moon-icon">🌙</span>
 *   </template>
 * </uk-lsh>
 * ```
 *
 * @example
 * Specific theme buttons:
 * ```html
 * <uk-lsh group="mode" value="light">Light</uk-lsh>
 * <uk-lsh group="mode" value="dark">Dark</uk-lsh>
 * ```
 *
 * @example
 * Color scheme switcher:
 * ```html
 * <uk-lsh group="color" value="uk-theme-blue">Blue</uk-lsh>
 * <uk-lsh group="color" value="uk-theme-red">Red</uk-lsh>
 * <uk-lsh group="color" value="uk-theme-green">Green</uk-lsh>
 * ```
 *
 * @example
 * With i18n:
 * ```html
 * <uk-lsh toggle group="mode" i18n='{"aria-label": "Cambiar tema", "switch-to-dark": "Cambiar a modo oscuro"}'>
 * </uk-lsh>
 * ```
 */
@customElement('uk-lsh')
export class Lsh extends Base {
  /**
   * The default element key used for applying simple string CSS classes via `cls`.
   * For this component, it targets the button element.
   */
  protected 'cls-default-element' = 'button';

  /**
   * The default element key used for applying simple string inline styles via `stl`.
   * For this component, it targets the button element.
   */
  protected 'stl-default-element' = 'button';

  /**
   * Name of the custom event emitted after a theme change occurs.
   * @readonly
   */
  protected readonly 'change-event': string = 'uk-lsh:change';

  /**
   * Name of the custom event emitted before a theme change (cancelable).
   * @readonly
   */
  protected readonly 'before-change-event': string = 'uk-lsh:before-change';

  /**
   * Default internationalization strings for labels and accessibility.
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  private readonly defaultI18n = {
    'aria-label': 'Toggle theme',
    'active-label': 'Active',
    'switch-to-dark': 'Switch to dark mode',
    'switch-to-light': 'Switch to light mode',
  };

  /**
   * The specific theme value to apply when this button is clicked.
   * For mode group: "light" or "dark"
   * For other groups: any class name (e.g., "uk-theme-blue")
   *
   * @default ''
   * @example
   * ```html
   * <uk-lsh group="mode" value="dark">Dark Mode</uk-lsh>
   * <uk-lsh group="color" value="uk-theme-blue">Blue Theme</uk-lsh>
   * ```
   */
  @property({ type: String })
  value: string = '';

  /**
   * The configuration group this button belongs to.
   * Common groups: "mode" (light/dark), "color", "font", etc.
   *
   * The "mode" group has special behavior:
   * - Adds/removes "dark" class on document element
   * - Works with toggle attribute for light/dark switching
   *
   * Other groups:
   * - Apply class names directly to document element
   * - Remove existing classes with same prefix
   *
   * @default ''
   * @example
   * ```html
   * <uk-lsh group="mode" value="dark">Dark</uk-lsh>
   * <uk-lsh group="color" value="uk-theme-red">Red</uk-lsh>
   * ```
   */
  @property({ type: String })
  group: string = '';

  /**
   * Prevents this instance from updating when other instances trigger changes.
   * Useful for standalone buttons that shouldn't sync with others.
   *
   * @default false
   * @example
   * ```html
   * <uk-lsh group="mode" value="dark" prevent-autoupdate>
   *   Independent Dark Mode
   * </uk-lsh>
   * ```
   */
  @property({ type: Boolean })
  'prevent-autoupdate': boolean = false;

  /**
   * Enables toggle behavior for mode switching.
   * When enabled and group="mode", clicking toggles between light and dark.
   * The value attribute is ignored in toggle mode.
   *
   * @default false
   * @example
   * ```html
   * <uk-lsh toggle group="mode">
   *   <template data-fn="template">Toggle Theme</template>
   * </uk-lsh>
   * ```
   */
  @property({ type: Boolean })
  toggle: boolean = false;

  /**
   * Tracks whether this button's value is currently active.
   * @internal
   */
  @state()
  private isActive: boolean = false;

  /**
   * Internal configuration object storing all group values.
   * Synced with localStorage under the key "__FRANKEN__".
   * @internal
   */
  @state()
  private lshConfig: LSHConfig = {};

  /**
   * CSS class configuration for the button.
   * @internal
   */
  @state()
  protected $cls: Cls = {
    button: 'uk-lsh',
  };

  /**
   * Inline styles configuration for the button.
   * @internal
   */
  @state()
  protected $stl: Stl = {
    button: '',
  };

  /**
   * Bound reference to handleExternalChange for proper event listener cleanup.
   * @internal
   */
  private boundHandleExternalChange = this.handleExternalChange.bind(this);

  /**
   * Initializes the component, loads configuration, and sets up event listeners.
   * @override
   */
  connectedCallback(): void {
    super.connectedCallback();
    this.initializeConfiguration();
    this.updateActiveState();

    if (!this['prevent-autoupdate']) {
      document.addEventListener(
        'uk-lsh:change' as keyof DocumentEventMap,
        this.boundHandleExternalChange,
      );
    }
  }

  /**
   * Cleans up event listeners when component is removed.
   * @override
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener(
      'uk-lsh:change' as keyof DocumentEventMap,
      this.boundHandleExternalChange,
    );
  }

  /**
   * Responds to property changes and updates state accordingly.
   * @override
   */
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('value') || changedProperties.has('group')) {
      this.updateActiveState();
    }

    if (changedProperties.has('prevent-autoupdate')) {
      if (this['prevent-autoupdate']) {
        document.removeEventListener(
          'uk-lsh:change' as keyof DocumentEventMap,
          this.boundHandleExternalChange,
        );
      } else {
        document.addEventListener(
          'uk-lsh:change' as keyof DocumentEventMap,
          this.boundHandleExternalChange,
        );
      }
    }
  }

  /**
   * Loads configuration from localStorage and detects current theme from document classes.
   * Initializes the mode group based on the presence of "dark" class on document element.
   * @internal
   */
  private initializeConfiguration(): void {
    this.lshConfig['mode'] = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';

    const storedConfig = localStorage.getItem('__FRANKEN__');
    if (storedConfig) {
      try {
        const parsed = JSON.parse(storedConfig);
        Object.keys(parsed).forEach(key => {
          this.lshConfig[key] = parsed[key];
        });
      } catch (error) {
        console.warn('[uk-lsh] Failed to parse stored configuration:', error);
      }
    }
  }

  /**
   * Persists the current configuration to localStorage.
   * @internal
   */
  private saveConfiguration(): void {
    try {
      localStorage.setItem('__FRANKEN__', JSON.stringify(this.lshConfig));
    } catch (error) {
      console.warn('[uk-lsh] Failed to save configuration:', error);
    }
  }

  /**
   * Emits a cancelable before-change event.
   * Returns false if the event was cancelled.
   *
   * @param group - Configuration group being changed
   * @param value - New value being applied
   * @param previousValue - Previous value before change
   * @returns true if change should proceed, false if cancelled
   * @internal
   */
  private emitBeforeChangeEvent(
    group: string,
    value: string,
    previousValue: string,
  ): boolean {
    const event = new CustomEvent(this['before-change-event'], {
      detail: {
        group,
        value,
        previousValue,
        config: { ...this.lshConfig },
      },
      bubbles: true,
      composed: true,
      cancelable: true,
    });

    return this.dispatchEvent(event);
  }

  /**
   * Emits a change event after a theme change has been applied.
   *
   * @param group - Configuration group that changed
   * @param value - New value that was applied
   * @param previousValue - Previous value before change
   * @internal
   */
  private emitChangeEvent(
    group: string,
    value: string,
    previousValue: string,
  ): void {
    this.dispatchEvent(
      new CustomEvent(this['change-event'], {
        detail: {
          group,
          value,
          previousValue,
          config: { ...this.lshConfig },
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /**
   * Applies a theme value to the document element and updates localStorage.
   *
   * For mode group:
   * - Adds/removes "dark" class on document element
   *
   * For other groups:
   * - Removes existing class with same prefix
   * - Adds new class to document element
   *
   * @param group - Configuration group to update
   * @param value - Value to apply
   * @internal
   */
  private applyThemeValue(group: string, value: string): void {
    if (!group || !value) return;

    const previousValue = this.lshConfig[group] || '';

    // Emit before-change event (cancelable)
    const shouldContinue = this.emitBeforeChangeEvent(
      group,
      value,
      previousValue,
    );
    if (!shouldContinue) {
      return;
    }

    const head = document.documentElement;

    this.lshConfig[group] = value;

    if (group === 'mode') {
      if (value === 'dark') {
        head.classList.add('dark');
      } else {
        head.classList.remove('dark');
      }
    } else {
      const prefix = value.split('-').slice(0, 2).join('-') + '-';
      const existingClass = Array.from(head.classList).find(cls =>
        cls.startsWith(prefix),
      );

      if (existingClass) {
        head.classList.remove(existingClass);
      }

      head.classList.add(value);
    }

    this.saveConfiguration();
    this.emitChangeEvent(group, value, previousValue);
  }

  /**
   * Checks if a specific value is currently active for a group.
   *
   * @param group - Configuration group to check
   * @param value - Value to check
   * @returns true if value is active, false otherwise
   * @internal
   */
  private isValueActive(group: string, value: string): boolean {
    if (!group || !value) return false;

    if (group === 'mode') {
      const isDarkMode = document.documentElement.classList.contains('dark');
      return (
        (value === 'dark' && isDarkMode) || (value === 'light' && !isDarkMode)
      );
    } else {
      return this.lshConfig[group] === value;
    }
  }

  /**
   * Updates the isActive state based on current configuration.
   * @internal
   */
  private updateActiveState(): void {
    this.isActive = this.isValueActive(this.group, this.value);
  }

  /**
   * Handles theme changes from other instances of this component.
   * Updates active state when the same group is modified elsewhere.
   *
   * @param event - Custom event from another instance
   * @internal
   */
  private handleExternalChange(event: Event): void {
    const customEvent = event as CustomEvent;

    if (customEvent.target === this) {
      return;
    }

    const { group } = customEvent.detail;

    if (group === this.group) {
      this.updateActiveState();
    }
  }

  /**
   * Handles button clicks to apply theme changes.
   * In toggle mode, switches between light and dark.
   * Otherwise, applies the specific value for the group.
   * @internal
   */
  private handleClick(): void {
    if (this.toggle && this.group === 'mode') {
      // Toggle mode behavior
      const currentMode = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
      const newMode = currentMode === 'dark' ? 'light' : 'dark';
      this.applyThemeValue('mode', newMode);
    } else {
      // Normal behavior
      this.applyThemeValue(this.group, this.value);
    }
    this.updateActiveState();
  }

  /**
   * Handles keyboard interactions for accessibility.
   * Triggers click on Enter or Space key.
   *
   * @param e - Keyboard event
   * @internal
   */
  private handleKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleClick();
    }
  }

  /**
   * Generates an accessible ARIA label for the button.
   * Includes current state and action description.
   *
   * @returns Descriptive ARIA label string
   * @internal
   */
  private getAriaLabel(): string {
    if (this.toggle && this.group === 'mode') {
      const currentMode = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
      const switchLabel =
        currentMode === 'dark'
          ? this.getI18nText('switch-to-light', this.defaultI18n)
          : this.getI18nText('switch-to-dark', this.defaultI18n);
      return `${this.getI18nText('aria-label', this.defaultI18n)} (${switchLabel})`;
    }

    const baseLabel = this.getI18nText('aria-label', this.defaultI18n);
    const valueLabel = this.value || '';
    const activeLabel = this.isActive
      ? `, ${this.getI18nText('active-label', this.defaultI18n)}`
      : '';

    return `${baseLabel}: ${valueLabel}${activeLabel}`;
  }

  /**
   * Renders the theme switcher button.
   * Displays template content and applies active state classes.
   *
   * @returns Template for the button element
   */
  render() {
    return html`
      <button
        data-host-inner
        class="${this.$cls.button} ${this.isActive ? 'uk-active' : ''}"
        style="${this.$stl.button}"
        @click="${this.handleClick}"
        @keydown="${this.handleKeydown}"
        type="button"
        aria-label="${this.getAriaLabel()}"
        aria-pressed="${this.isActive}"
      >
        ${unsafeHTML(this.$template)}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-lsh': Lsh;
  }
}
