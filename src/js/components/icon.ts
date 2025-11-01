import { nothing, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import * as icons from 'lucide';
import { createElement } from 'lucide';
import { Base } from './shared/base';

/**
 * A headless icon component for displaying Lucide icons with full accessibility support.
 * Extends the Base class to support i18n, custom CSS classes, and inline styles.
 *
 * Features:
 * - 1000+ Lucide icons support
 * - Full ARIA accessibility (labels, roles, hidden states)
 * - i18n support for icon labels
 * - Decorative vs semantic icon modes
 * - Customizable size, stroke, and styling
 * - Configuration via attributes or script tags
 *
 * @element uk-icon
 * @extends {Base}
 *
 * @example
 * Basic usage:
 * ```html
 * <uk-icon icon="home" size="24"></uk-icon>
 * <uk-icon icon="arrow-right" label="Next page"></uk-icon>
 * ```
 *
 * @example
 * Accessible semantic icon:
 * ```html
 * <uk-icon icon="alert-circle" label="Warning" role="img"></uk-icon>
 * ```
 *
 * @example
 * Decorative icon (hidden from screen readers):
 * ```html
 * <uk-icon icon="sparkles" decorative></uk-icon>
 * ```
 *
 * @example
 * With i18n configuration:
 * ```html
 * <uk-icon icon="home">
 *   <script type="application/json">
 *   {
 *     "i18n": {
 *       "label": "Home page"
 *     },
 *     "cls": {
 *       "svg": "icon-primary"
 *     }
 *   }
 *   </script>
 * </uk-icon>
 * ```
 */
@customElement('uk-icon')
export class Icon extends Base {
  /**
   * The default element key used for applying simple string CSS classes via `cls`.
   * For this component, it targets the SVG element.
   */
  protected 'cls-default-element' = 'svg';

  /**
   * The default element key used for applying simple string inline styles via `stl`.
   * For this component, it targets the SVG element.
   */
  protected 'stl-default-element' = 'svg';

  /**
   * The name of the Lucide icon to display (kebab-case format).
   * Automatically converted to PascalCase for Lucide icon lookup.
   *
   * @example
   * ```html
   * <uk-icon icon="arrow-right"></uk-icon>
   * <uk-icon icon="user-circle"></uk-icon>
   * ```
   */
  @property({ type: String })
  icon: string = '';

  /**
   * Accessible label for the icon. Used for screen readers.
   * If provided, makes the icon semantic (role="img").
   * Can be overridden via i18n.
   *
   * @example
   * ```html
   * <uk-icon icon="home" label="Home page"></uk-icon>
   * ```
   */
  @property({ type: String })
  label: string = '';

  /**
   * Marks the icon as decorative (hidden from screen readers).
   * When true, sets aria-hidden="true" and removes role/label.
   * Use for icons that are purely visual or have accompanying text.
   *
   * @default false
   * @example
   * ```html
   * <uk-icon icon="sparkles" decorative></uk-icon>
   * <button><uk-icon icon="trash" decorative></uk-icon> Delete</button>
   * ```
   */
  @property({ type: Boolean })
  decorative: boolean = false;

  /**
   * ARIA role for the icon. Defaults to "img" when label is provided.
   * Set to null or empty string to remove role attribute.
   *
   * @example
   * ```html
   * <uk-icon icon="alert" role="img" label="Alert"></uk-icon>
   * ```
   */
  @property({ type: String })
  role: string = '';

  /**
   * SVG stroke width for the icon outline.
   * Accepts any valid SVG stroke-width value.
   *
   * @default "2"
   * @example
   * ```html
   * <uk-icon icon="home" stroke-width="1.5"></uk-icon>
   * ```
   */
  @property({ type: String })
  'stroke-width': string = '2';

  /**
   * Icon height in pixels. Overridden by `size` property if provided.
   *
   * @default "16"
   * @example
   * ```html
   * <uk-icon icon="home" height="32"></uk-icon>
   * ```
   */
  @property({ type: String })
  height: string = '16';

  /**
   * Icon width in pixels. Overridden by `size` property if provided.
   *
   * @default "16"
   * @example
   * ```html
   * <uk-icon icon="home" width="32"></uk-icon>
   * ```
   */
  @property({ type: String })
  width: string = '16';

  /**
   * Uniform size for both width and height. Takes precedence over individual width and height.
   *
   * @example
   * ```html
   * <uk-icon icon="home" size="24"></uk-icon>
   * ```
   */
  @property({ type: String })
  size: string | undefined;

  /**
   * Color of the icon. Can be any valid CSS color value.
   * Applied as the `color` CSS property (affects stroke color).
   *
   * @example
   * ```html
   * <uk-icon icon="heart" color="red"></uk-icon>
   * <uk-icon icon="star" color="#FFD700"></uk-icon>
   * ```
   */
  @property({ type: String })
  color: string = '';

  /**
   * Fill color for the icon. Use for filled icon variants.
   * When set, typically also want to set stroke-width="0".
   *
   * @example
   * ```html
   * <uk-icon icon="heart" fill="red" stroke-width="0"></uk-icon>
   * ```
   */
  @property({ type: String })
  fill: string = 'none';

  /**
   * Generated SVG element ready for rendering.
   * This is set internally and should not be set directly.
   * @internal
   */
  @state()
  protected $svg: SVGElement | undefined;

  /**
   * Default i18n strings for icon accessibility.
   * @internal
   */
  private readonly defaultI18n = {
    label: '',
  };

  /**
   * Converts kebab-case icon name to PascalCase for Lucide icon lookup.
   *
   * @example
   * "arrow-right" → "ArrowRight"
   * "user-circle" → "UserCircle"
   */
  get key() {
    return this.icon
      .trim()
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  /**
   * Gets the effective label for the icon with i18n support.
   * Returns i18n label if available, otherwise returns the label property.
   *
   * @returns The icon label text
   */
  private getEffectiveLabel(): string {
    const i18nLabel = this.getI18nText('label', this.defaultI18n);

    return i18nLabel || this.label;
  }

  /**
   * Handles property updates and regenerates the SVG when icon-related properties change.
   * Only updates when relevant properties are changed.
   *
   * @param changedProperties - Properties that changed in this update cycle
   */
  protected updated(changedProperties: PropertyValues): void {
    const iconProperties = [
      'icon',
      'stroke-width',
      'height',
      'width',
      'size',
      'color',
      'fill',
      'label',
      'decorative',
      'role',
      '$cls',
      '$stl',
    ];

    if (
      iconProperties.some(property => changedProperties.has(property)) ||
      changedProperties.has('$i18n')
    ) {
      this.updateComplete.then(() => {
        this.regenerateSvg();
      });
    }
  }

  /**
   * Regenerates the SVG element with current properties.
   * @internal
   */
  private regenerateSvg(): void {
    this.$svg = this.createSvg({
      icon: this.key,
      cls: this.$cls['svg'] || '',
      stl: this.$stl['svg'] || '',
      height: this.size || this.height,
      width: this.size || this.width,
      strokeWidth: this['stroke-width'],
      color: this.color,
      fill: this.fill,
      label: this.getEffectiveLabel(),
      decorative: this.decorative,
      role: this.role,
    });
  }

  /**
   * Creates an SVG element using Lucide's createElement function.
   * Applies custom styling, dimensions, and accessibility attributes to the generated SVG.
   *
   * @param options - Icon rendering options
   * @returns The generated SVG element, or undefined if icon is not found
   * @internal
   */
  private createSvg(options: {
    icon: string;
    cls: string;
    stl: string;
    height: string;
    width: string;
    strokeWidth: string;
    color: string;
    fill: string;
    label: string;
    decorative: boolean;
    role: string;
  }): SVGElement | undefined {
    const {
      icon,
      cls,
      stl,
      height,
      width,
      strokeWidth,
      color,
      fill,
      label,
      decorative,
      role,
    } = options;

    try {
      // @ts-ignore - Lucide icons are dynamically accessed
      const iconData = icons[icon];

      if (!iconData) {
        console.warn(`uk-icon: Icon "${this.icon}" not found in Lucide icons.`);

        return undefined;
      }

      const svgElement = createElement(iconData);

      // Apply basic attributes
      if (cls) {
        svgElement.setAttribute('class', cls);
      }

      if (stl) {
        svgElement.setAttribute('style', stl);
      }

      svgElement.setAttribute('height', height);
      svgElement.setAttribute('width', width);
      svgElement.setAttribute('stroke-width', strokeWidth);

      // Apply fill
      if (fill !== 'none') {
        svgElement.setAttribute('fill', fill);
      }

      // Apply color
      if (color) {
        const currentStyle = svgElement.getAttribute('style') || '';

        svgElement.setAttribute('style', `${currentStyle}; color: ${color};`);
      }

      // Apply accessibility attributes
      if (decorative) {
        // Decorative icon - hide from screen readers
        svgElement.setAttribute('aria-hidden', 'true');
        svgElement.removeAttribute('role');
        svgElement.removeAttribute('aria-label');
      } else if (label) {
        // Semantic icon with label
        svgElement.setAttribute('role', role || 'img');
        svgElement.setAttribute('aria-label', label);
        svgElement.removeAttribute('aria-hidden');
      } else if (role) {
        // Has role but no label
        svgElement.setAttribute('role', role);
        svgElement.removeAttribute('aria-hidden');
      }

      // Add data attributes for easier styling/selection
      svgElement.setAttribute('data-icon', this.icon);
      svgElement.setAttribute('data-lucide', this.icon);

      return svgElement;
    } catch (error) {
      console.warn(`uk-icon: Failed to create icon "${this.icon}":`, error);

      return undefined;
    }
  }

  render() {
    return this.renderRoot.children.length === 0 ? this.$svg : nothing;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-icon': Icon;
  }
}
