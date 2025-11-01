import {
  LitElement,
  html,
  type PropertyValues,
  type TemplateResult,
} from 'lit';
import { property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { parseOptions } from '../../helpers/options';
import { selectToObject, type OptionGrouped } from '../../helpers/select';

/**
 * A cached, private store for global internationalization data.
 * Loaded once from a <script id="uk-i18n"> tag in the document.
 */
let __GI18N__: { [key: string]: string } | null = null;

let __IS_GI18N_INITIALIZED__: boolean = false;

/**
 * Abstract base class for all components, providing:
 * - Centralized and local Internationalization (i18n) support
 * - Icon repository system for custom SVG icons
 * - Template content management
 * - Custom CSS class management
 * - Custom inline style management
 * - JSON configuration parsing from script tags
 * - Render optimization controls with duplicate render prevention
 *
 * Components extending this class automatically support `i18n`, `cls`, and `stl` attributes.
 */
export abstract class Base extends LitElement {
  /**
   * Custom CSS classes that can be applied to component elements.
   * Can be a simple string or a serialized object for targeting multiple elements.
   *
   * @example
   * Simple string:
   * ```html
   * <my-component cls="my-class"></my-component>
   * ```
   * Object:
   * ```html
   * <my-component cls='{"container": "uk-wrapper", "button": "uk-btn-primary"}'></my-component>
   * ```
   */
  @property({ type: String })
  cls: string = '';

  /**
   * Custom inline styles that can be applied to component elements.
   * Can be a simple string or a serialized object for targeting multiple elements.
   *
   * @example
   * Simple string:
   * ```html
   * <my-component stl="color: red; font-size: 16px;"></my-component>
   * ```
   * Object:
   * ```html
   * <my-component stl='{"container": "padding: 20px;", "button": "background: blue;"}'></my-component>
   * ```
   */
  @property({ type: String })
  stl: string = '';

  /**
   * Internationalization strings for component localization.
   * Should be a serialized object containing translation keys and values.
   * These strings will be merged with and override the global i18n source.
   *
   * @example
   * ```html
   * <my-component i18n='{"greeting": "Hello", "weekdays": "Mon, Tue, Wed"}'></my-component>
   * ```
   */
  @property({ type: String })
  i18n: string = '';

  /**
   * Prevents component re-rendering by detecting already-rendered content.
   * Useful for scenarios where the component is instantiated multiple times
   * (e.g., HTMX restoration, sub-components) but should only render once.
   */
  @property({ type: Boolean })
  'force-prevent-rerender': boolean = false;

  /**
   * Internal representation of parsed i18n data.
   * Populated from the global i18n source and the local `i18n` property.
   */
  @state()
  protected $i18n: { [key: string]: string } = {};

  /**
   * Internal representation of parsed CSS classes.
   * Maps element keys to their corresponding CSS classes.
   */
  @state()
  protected $cls: { [key: string]: string } = {};

  /**
   * Internal representation of parsed inline styles.
   * Maps element keys to their corresponding style strings.
   */
  @state()
  protected $stl: { [key: string]: string } = {};

  /**
   * User-defined configuration options from the JSON script element.
   * This object is populated from <script data-fn="config" type="application/json"> content.
   */
  @state()
  protected $config: object = {};

  /**
   * Internal icon repository mapping icon names to their SVG templates.
   * Populated from <template data-fn="icons"> element within the component.
   */
  @state()
  protected $i: Map<string, TemplateResult> = new Map();

  /**
   * Template content innerHTML from <template data-fn="template"> element.
   * Can be used for custom template rendering within components.
   */
  @state()
  protected $template: string = '';

  @state()
  protected $data: OptionGrouped = {};

  /**
   * Tracks whether the component has been rendered.
   * Used for preventing duplicate renders.
   */
  protected isRendered: boolean = false;

  /**
   * Reference to the JSON script element containing component configuration.
   * This element's content is parsed to create the $config state.
   */
  protected HTMLScript: HTMLScriptElement | null = null;

  /**
   * Reference to the div element containing icon definitions.
   */
  protected HTMLIconContainer: HTMLDivElement | null = null;

  /**
   * Reference to the div element containing template content.
   */
  protected HTMLTemplateContainer: HTMLDivElement | null = null;

  protected HTMLDataSource: HTMLSelectElement | null = null;

  /**
   * MutationObserver instance for watching changes to the reactive script element.
   * Only active when script has data-reactive attribute.
   */
  protected configObserver: MutationObserver | null = null;

  protected dataSourceObserver: MutationObserver | null = null;

  /**
   * Returns a normalized version of `$i18n` where comma-separated strings
   * are automatically split into arrays and trimmed.
   *
   * This helps components consume translation values that may represent
   * lists (e.g., weekdays, labels) without manual parsing.
   *
   * @example
   * Input:
   * ```typescript
   * { weekdays: "Mon, Tue, Wed", greeting: "Hello" }
   * ```
   * Output:
   * ```typescript
   * { weekdays: ["Mon", "Tue", "Wed"], greeting: "Hello" }
   * ```
   */
  protected get $normalizedI18n(): { [key: string]: string | string[] } {
    const normalized: { [key: string]: string | string[] } = {};

    Object.keys(this.$i18n).forEach(key => {
      const value = this.$i18n[key];

      normalized[key] = value.includes(',')
        ? value.split(',').map(item => item.trim())
        : value;
    });

    return normalized;
  }

  /**
   * Retrieves an icon from the icon repository.
   * Can be overridden by subclasses to provide default icons.
   *
   * @param icon - The name/key of the icon to retrieve.
   * @returns A Lit HTML template containing the requested SVG icon, or undefined if not found.
   *
   * @example
   * Override in subclass:
   * ```typescript
   * protected $icons(icon: string): TemplateResult | undefined {
   *   switch (icon) {
   *     case 'chevron-left':
   *       return html`<svg>...</svg>`;
   *     case 'chevron-right':
   *       return html`<svg>...</svg>`;
   *     default:
   *       return super.$icons(icon);
   *   }
   * }
   * ```
   *
   * Usage in template:
   * ```html
   * <my-component>
   *   <template data-fn="icons">
   *     <svg data-key="chevron-left">...</svg>
   *     <svg data-key="chevron-right">...</svg>
   *   </template>
   * </my-component>
   * ```
   */
  protected $icons(icon: string): TemplateResult | undefined {
    return this.$i.get(icon);
  }

  /**
   * Gets internationalized text with support for placeholders and three-level resolution.
   *
   * Resolution order (highest to lowest priority):
   * 1. Component-level i18n (from script tag or i18n attribute)
   * 2. Global component-specific namespace (uk-i18n > component-name)
   * 3. Provided defaults object
   * 4. Empty string fallback
   *
   * Supports placeholder replacement:
   * - Named placeholders: {placeholder} replaced by values from replacements object
   * - Numbered placeholder: {n} replaced by single numeric value
   *
   * @param key - The i18n key to look up
   * @param defaults - Object containing fallback default values for keys
   * @param replacements - Object with values to replace {placeholder} patterns, or single number for {n}
   * @returns The translated and processed text
   *
   * @example
   * ```typescript
   * // Simple usage
   * this.getI18nText('greeting', { greeting: 'Hello' });
   * // Returns: 'Hello' (from defaults if not found in i18n)
   *
   * // With single numeric placeholder
   * this.getI18nText('page', { page: 'Page {n}' }, 5);
   * // Returns: 'Page 5'
   *
   * // With named placeholders
   * this.getI18nText('welcome',
   *   { welcome: 'Hello {name}, you have {count} messages' },
   *   { name: 'John', count: '3' }
   * );
   * // Returns: 'Hello John, you have 3 messages'
   *
   * // Using component namespace in global i18n
   * // <script id="uk-i18n">{ "my-component": { "title": "My Title" } }</script>
   * this.getI18nText('title', { title: 'Default' });
   * // Returns: 'My Title' (from global component namespace)
   * ```
   */
  protected getI18nText(
    key: string,
    defaults: { [key: string]: string } = {},
    replacements?: { [key: string]: string | number } | number,
  ): string {
    // Try to get from component-level i18n (highest priority)
    let text = this.$i18n[key];

    // If not found and we have global i18n, check for component-specific namespace
    if (!text) {
      const componentName = this.tagName.toLowerCase();
      const componentI18n = this.$i18n[componentName];

      if (
        typeof componentI18n === 'object' &&
        componentI18n !== null &&
        key in componentI18n
      ) {
        text = (componentI18n as any)[key];
      }
    }

    // Fall back to provided defaults
    if (!text) {
      text = defaults[key] || '';
    }

    // Handle placeholder replacements
    if (replacements !== undefined) {
      if (typeof replacements === 'number') {
        // Single numeric replacement for {n}
        text = text.replace('{n}', String(replacements));
      } else {
        // Named replacements for {key} patterns
        Object.keys(replacements).forEach(placeholder => {
          const value = replacements[placeholder];
          text = text.replace(
            new RegExp(`\\{${placeholder}\\}`, 'g'),
            String(value),
          );
        });
      }
    }

    return text;
  }

  /**
   * Processes the `cls` property and populates the `$cls` state.
   * - If `cls` is a string: assigns it to the default element class.
   * - If `cls` is an object: merges it with existing `$cls` mappings.
   */
  private initializeCls(): void {
    if (this.cls) {
      const cls = parseOptions(this.cls) as { [key: string]: string } | string;

      if (typeof cls === 'string') {
        this.$cls[this['cls-default-element']] = cls;
      } else {
        Object.keys(cls).forEach(key => {
          this.$cls[key] = cls[key];
        });
      }
    }
  }

  /**
   * Processes the `stl` property and populates the `$stl` state.
   * - If `stl` is a string: assigns it to the default element style.
   * - If `stl` is an object: merges it with existing `$stl` mappings.
   */
  private initializeStl(): void {
    if (this.stl) {
      const stl = parseOptions(this.stl) as { [key: string]: string } | string;

      if (typeof stl === 'string') {
        this.$stl[this['stl-default-element']] = stl;
      } else {
        Object.keys(stl).forEach(key => {
          this.$stl[key] = stl[key];
        });
      }
    }
  }

  /**
   * Initializes the global i18n store by reading from the DOM.
   * This function runs only once for performance.
   */
  private initializeGI18n(): void {
    if (__IS_GI18N_INITIALIZED__) {
      return;
    }

    __IS_GI18N_INITIALIZED__ = true; // Mark as initialized to prevent re-running

    const scriptEl = document.getElementById('uk-i18n');

    if (scriptEl && scriptEl.textContent) {
      try {
        __GI18N__ = JSON.parse(scriptEl.textContent);
      } catch (e) {
        console.error(
          'Failed to parse global i18n from <script id="uk-i18n">.',
          e,
        );
        __GI18N__ = {}; // Set to empty to prevent future errors
      }
    } else {
      __GI18N__ = {}; // Set to empty if script tag is not found
    }
  }

  /**
   * Processes and merges global and local i18n properties into the `$i18n` state.
   * Local component `i18n` attributes will always override global values.
   */
  private initializeI18n(): void {
    this.initializeGI18n(); // Ensure global source is loaded

    const LI18N = this.i18n ? parseOptions(this.i18n) : {};

    // Merge global translations first, then overlay with local translations
    if (typeof LI18N === 'object' && LI18N !== null) {
      this.$i18n = Object.assign({}, __GI18N__, LI18N);
    }
  }

  /**
   * Finds and stores a reference to the JSON script element.
   * Looks for <script data-fn="config" type="application/json"> within the component.
   */
  private initializeConfig(): void {
    this.HTMLScript = this.querySelector(
      'script[data-fn="config"][type="application/json"]',
    );
  }

  /**
   * Finds and stores a reference to the icon container element.
   * Looks for <template data-fn="icons"> within the component.
   */
  private initializeIcons(): void {
    this.HTMLIconContainer = this.querySelector('template[data-fn="icons"]');
  }

  /**
   * Finds and stores a reference to the template container element.
   * Looks for <template data-fn="template"> within the component.
   */
  private initializeTemplate(): void {
    this.HTMLTemplateContainer = this.querySelector(
      'template[data-fn="template"]',
    );
  }

  private initializeDataSource(): void {
    this.HTMLDataSource = this.querySelector('select[data-fn="data-source"]');
  }

  /**
   * Parses the icon container and populates the $i repository.
   * Extracts all elements with data-key attributes from the container.
   */
  private parseIcons(): void {
    if (!this.HTMLIconContainer) {
      return;
    }

    const icons = this.HTMLIconContainer.querySelectorAll('[data-key]');

    icons.forEach(iconElement => {
      const key = iconElement.getAttribute('data-key');

      if (key) {
        // Clone the element to avoid modifying the original
        const clonedIcon = iconElement.cloneNode(true) as Element;
        // Remove the data-key attribute from the cloned element
        clonedIcon.removeAttribute('data-key');

        const iconHTML = clonedIcon.outerHTML;
        this.$i.set(key, html`${unsafeHTML(iconHTML)}`);
      }
    });
  }

  /**
   * Parses the template container and extracts its innerHTML into $template.
   * The template content can be used for custom rendering within components.
   */
  private parseTemplate(): void {
    if (!this.HTMLTemplateContainer) {
      return;
    }

    this.$template = this.HTMLTemplateContainer.innerHTML.trim();
  }

  /**
   * Parses the JSON script element content to create $config.
   * Falls back to empty object if JSON parsing fails.
   * If config contains 'i18n', 'cls', or 'stl' properties, merges them with existing state.
   *
   * Can be overridden by subclasses to customize parsing behavior.
   */
  protected parseConfig(): void {
    if (this.HTMLScript) {
      try {
        const content = this.HTMLScript.textContent;

        this.$config = content ? JSON.parse(content) : {};

        if (this.$config && typeof this.$config === 'object') {
          // Check if config contains i18n and merge it
          if ('i18n' in this.$config) {
            const configI18n = (this.$config as any).i18n;

            if (typeof configI18n === 'object' && configI18n !== null) {
              // Merge with existing $i18n, giving priority to script-based i18n
              this.$i18n = { ...this.$i18n, ...configI18n };
            }
          }

          // Check if config contains cls and merge it
          if ('cls' in this.$config) {
            const configCls = (this.$config as any).cls;

            if (typeof configCls === 'string') {
              this.$cls[this['cls-default-element']] = configCls;
            } else if (typeof configCls === 'object' && configCls !== null) {
              // Merge with existing $cls, giving priority to script-based cls
              this.$cls = { ...this.$cls, ...configCls };
            }
          }

          // Check if config contains stl and merge it
          if ('stl' in this.$config) {
            const configStl = (this.$config as any).stl;

            if (typeof configStl === 'string') {
              this.$stl[this['stl-default-element']] = configStl;
            } else if (typeof configStl === 'object' && configStl !== null) {
              // Merge with existing $stl, giving priority to script-based stl
              this.$stl = { ...this.$stl, ...configStl };
            }
          }
        }
      } catch (error) {
        console.warn(
          `${this.tagName.toLowerCase()}: Failed to parse config JSON:`,
          error,
        );

        this.$config = {};
      }
    }
  }

  private parseDataSource(): void {
    if (!this.HTMLDataSource) {
      return;
    }

    this.$data = selectToObject(this.HTMLDataSource);
  }

  /**
   * Sets up MutationObserver to watch for changes in the script element.
   * Only initializes if script element has data-reactive attribute.
   * Observes attributes, child nodes, character data, and subtree changes.
   */
  private initializeConfigObserver(): void {
    if (!this.HTMLScript || !this.HTMLScript.hasAttribute('data-reactive')) {
      return;
    }

    this.configObserver = new MutationObserver(() => {
      this.parseConfig();
      this.onConfigChanged();
    });

    this.configObserver.observe(this.HTMLScript, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  private initializeDataSourceObserver(): void {
    if (
      !this.HTMLDataSource ||
      !this.HTMLDataSource.hasAttribute('data-reactive')
    ) {
      return;
    }

    this.dataSourceObserver = new MutationObserver(() => {
      this.parseDataSource();
      this.onDataSourceChanged();
    });

    this.dataSourceObserver.observe(this.HTMLDataSource, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  /**
   * Hook called when script config changes (via reactive observer).
   * Override this in subclasses to perform actions when config is updated.
   */
  protected onConfigChanged(): void {}

  protected onDataSourceChanged(): void {}

  /**
   * Lit lifecycle method called when the component is added to the DOM.
   * Initializes CSS classes, inline styles, i18n data, icons, template, script parsing,
   * and handles duplicate render prevention.
   */
  connectedCallback(): void {
    super.connectedCallback();

    // Check if component has already been rendered (duplicate render prevention)
    if (this['force-prevent-rerender']) {
      const existing = this.querySelector('[data-host-inner]');

      if (existing) {
        // Content already exists, mark as rendered to prevent Lit from rendering
        this.isRendered = true;
      }
    }

    // It's important to initialize i18n first so other initializers can use it
    this.initializeI18n();
    this.initializeCls();
    this.initializeStl();
    this.initializeConfig();
    this.initializeIcons();
    this.initializeTemplate();
    this.initializeDataSource();

    if (this.HTMLScript) {
      this.parseConfig();
      this.initializeConfigObserver();
    }

    if (this.HTMLIconContainer) {
      this.parseIcons();
    }

    if (this.HTMLTemplateContainer) {
      this.parseTemplate();
    }

    if (this.HTMLDataSource) {
      this.parseDataSource();
      this.initializeDataSourceObserver();
    }
  }

  /**
   * Lit lifecycle method called when component is removed from DOM.
   * Cleans up the mutation observer.
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.configObserver) {
      this.configObserver.disconnect();
      this.configObserver = null;
    }

    if (this.dataSourceObserver) {
      this.dataSourceObserver.disconnect();
      this.dataSourceObserver = null;
    }
  }

  /**
   * Lit lifecycle method that controls whether the component should re-render.
   * When force-prevent-rerender is enabled and component has already rendered,
   * blocks all subsequent render attempts.
   *
   * @param changedProperties - Map of changed properties
   * @returns true if component should update, false otherwise
   */
  protected shouldUpdate(changedProperties: PropertyValues): boolean {
    if (this['force-prevent-rerender'] && this.isRendered) {
      return false; // Block all updates after content is detected/rendered
    }

    return super.shouldUpdate(changedProperties);
  }

  /**
   * Lit lifecycle method called after component updates.
   * Marks the component as rendered after the first render cycle completes.
   *
   * @param changedProperties - Map of changed properties
   */
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (!this.isRendered) {
      this.isRendered = true;
    }
  }

  /**
   * Default element key for CSS class targeting.
   */
  protected 'cls-default-element': string = 'host-inner';

  /**
   * Default element key for inline style targeting.
   */
  protected 'stl-default-element': string = 'host-inner';

  /**
   * Overrides the default Shadow DOM creation to render directly into the host element.
   * This allows the component to use Light DOM instead of being encapsulated in Shadow DOM,
   * enabling easier CSS styling and DOM manipulation from outside the component.
   *
   * @returns The host element itself, bypassing Shadow DOM.
   */
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
}
