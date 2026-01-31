/**
 * @fileoverview
 * Chart Component - A headless Lit wrapper around ApexCharts that enables
 * declarative chart rendering via embedded JSON config scripts.
 *
 * Features:
 * - Accessible container and status/error states
 * - Customizable classes/styles via `cls` and `stl`
 * - Public APIs to update options and series programmatically
 * - Graceful error handling and lifecycle management of the ApexCharts instance
 */
import { customElement, property, state } from 'lit/decorators.js';
import { Base } from './shared/base';
import { type PropertyValues, html } from 'lit';
import ApexCharts from 'apexcharts';

/**
 * CSS class names interface for styling different parts of the component.
 */
interface Cls extends Record<string, string> {
  'host-inner': string;
  chart: string;
  loading: string;
  error: string;
}

/**
 * Inline styles interface for different parts of the component.
 */
interface Stl extends Record<string, string> {
  'host-inner': string;
  chart: string;
  loading: string;
  error: string;
}

/**
 * Internationalization keys for the chart component.
 */
interface I18n extends Record<string, string> {
  'chart-label': string;
  'loading-message': string;
  'error-message': string;
  'no-data-message': string;
}

/**
 * A headless Lit-based web component that wraps ApexCharts for declarative chart rendering.
 * All styling is delegated to `cls` and `stl` attributes for maximum flexibility.
 *
 * @element uk-chart
 * @extends {Base}
 *
 * @example
 * Basic usage with inline configuration:
 * ```html
 * <uk-chart>
 *   <script data-fn="config" type="application/json">
 *   {
 *     "apexCharts": {
 *       "chart": { "type": "bar" },
 *       "series": [{ "data": [1, 2, 3, 4] }]
 *     }
 *   }
 *   </script>
 * </uk-chart>
 * ```
 *
 * @example
 * With reactive updates:
 * ```html
 * <uk-chart>
 *   <script data-fn="config" type="application/json" data-reactive>
 *   {
 *     "apexCharts": {
 *       "chart": { "type": "line" },
 *       "series": [{ "data": [10, 20, 30] }]
 *     }
 *   }
 *   </script>
 * </uk-chart>
 * ```
 *
 * @example
 * With custom styling and i18n:
 * ```html
 * <uk-chart>
 *   <script data-fn="config" type="application/json">
 *   {
 *     "apexCharts": {
 *       "chart": { "type": "area" },
 *       "series": [{ "name": "Revenue", "data": [100, 200, 150] }]
 *     },
 *     "i18n": {
 *       "chart-label": "Revenue Chart",
 *       "loading-message": "Loading chart data...",
 *       "error-message": "Unable to display chart"
 *     },
 *     "cls": {
 *       "host-inner": "chart-wrapper shadow-lg rounded",
 *       "loading": "sr-only",
 *       "error": "text-red-500"
 *     }
 *   }
 *   </script>
 * </uk-chart>
 * ```
 *
 * @example
 * Area chart with custom styling:
 * ```html
 * <uk-chart>
 *   <script data-fn="config" type="application/json">
 *   {
 *     "apexCharts": {
 *       "series": [{ "name": "Desktops", "data": [186, 305, 237, 73, 209, 214] }],
 *       "chart": { "type": "area", "toolbar": { "show": false } },
 *       "stroke": { "curve": "smooth", "width": 2 },
 *       "colors": ["hsl(var(--chart-1))"],
 *       "xaxis": { "categories": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] }
 *     }
 *   }
 *   </script>
 * </uk-chart>
 * ```
 */
@customElement('uk-chart')
export class Chart extends Base {
  /**
   * The default element key for applying CSS classes via `cls` attribute.
   */
  protected readonly 'cls-default-element': string = 'host-inner';

  /**
   * The default element key for applying inline styles via `stl` attribute.
   */
  protected readonly 'stl-default-element': string = 'host-inner';

  /**
   * Default i18n strings for labels and messages.
   * These can be overridden via the i18n attribute or config script.
   */
  protected readonly defaultI18n: I18n = {
    'chart-label': 'Chart',
    'loading-message': 'Loading chart...',
    'error-message': 'Failed to load chart. Please try again.',
    'no-data-message': 'No data available',
  };

  /**
   * Shows a loading state before the chart is rendered.
   * Useful when chart data is being fetched asynchronously.
   *
   * @attr loading
   * @type {boolean}
   * @default false
   */
  @property({ type: Boolean })
  loading: boolean = false;

  /**
   * Width of the chart container.
   * Can be a number (pixels) or string with units (e.g., "100%", "500px").
   *
   * @attr width
   * @type {string}
   * @default "100%"
   */
  @property({ type: String })
  width: string = '100%';

  /**
   * Height of the chart container.
   * Can be a number (pixels) or string with units (e.g., "400px", "50vh").
   *
   * @attr height
   * @type {string}
   * @default "auto"
   */
  @property({ type: String })
  height: string = 'auto';

  /**
   * Tracks whether an error occurred during chart initialization or updates.
   *
   * @internal
   */
  @state()
  protected hasError: boolean = false;

  /**
   * CSS class configuration for component styling.
   * Allows customization of different component parts.
   * @internal
   */
  @state()
  protected $cls: Cls = {
    'host-inner': '',
    chart: 'uk-chart',
    loading: 'sr-only',
    error: 'sr-only',
  };

  /**
   * Inline styles configuration for component styling.
   * @internal
   */
  @state()
  protected $stl: Stl = {
    'host-inner': '',
    chart: '',
    loading: '',
    error: '',
  };

  /**
   * ApexCharts instance for rendering and managing the chart.
   *
   * @internal
   */
  private apexCharts: ApexCharts | null = null;

  /**
   * Extracts ApexCharts configuration from `$config.apexCharts`.
   * Returns the chart configuration object or an empty object if not present.
   *
   * @returns {object} ApexCharts configuration object
   *
   * @example
   * Configuration structure:
   * ```json
   * {
   *   "apexCharts": {
   *     "chart": { "type": "bar" },
   *     "series": [{ "data": [1, 2, 3] }]
   *   }
   * }
   * ```
   */
  protected get $apexChartsConfig(): object {
    if ('apexCharts' in this.$config && typeof this.$config === 'object') {
      return (this.$config as { apexCharts: object }).apexCharts;
    }

    return {};
  }

  /**
   * Checks if the chart has valid configuration.
   *
   * @returns {boolean} True if chart config exists and is not empty
   * @internal
   */
  private hasValidConfig(): boolean {
    return Object.keys(this.$apexChartsConfig).length > 0;
  }

  /**
   * Lit lifecycle: Called after the component's first render.
   * Creates and renders the ApexCharts instance if not in loading state.
   *
   * @param {PropertyValues} changedProperties - Map of changed properties
   */
  protected firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);

    if (!this.loading) {
      this.initializeApexCharts();
    }
  }

  /**
   * Lit lifecycle: Called on every component update.
   * Handles loading state transitions and initializes chart when loading completes.
   *
   * @param {PropertyValues} changedProperties - Map of changed properties
   */
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Initialize chart when loading changes from true to false
    if (changedProperties.has('loading') && !this.loading && !this.apexCharts) {
      this.initializeApexCharts();
    }
  }

  /**
   * Lit lifecycle: Called when component is removed from the DOM.
   * Cleans up chart resources and destroys the ApexCharts instance.
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.apexCharts) {
      this.apexCharts.destroy();
      this.apexCharts = null;
    }
  }

  /**
   * Hook called when script configuration changes (via reactive observer from Base).
   * Updates the chart with new configuration or initializes if not yet created.
   *
   * @internal
   */
  protected onConfigChanged(): void {
    if (this.apexCharts && this.hasValidConfig()) {
      try {
        this.apexCharts.updateOptions(this.$apexChartsConfig, true, true);
        this.hasError = false;
      } catch (error) {
        console.error('uk-chart: Failed to update chart:', error);
        this.hasError = true;
      }
    } else if (!this.apexCharts && this.hasValidConfig()) {
      // Initialize chart if it doesn't exist but we have valid config
      this.initializeApexCharts();
    }
  }

  /**
   * Initializes the ApexCharts instance and renders the chart.
   * Handles errors gracefully and updates component state accordingly.
   *
   * @internal
   */
  private async initializeApexCharts(): Promise<void> {
    const chartContainer = this.renderRoot.querySelector(
      '[data-chart-container]',
    );

    if (!chartContainer) {
      console.warn('uk-chart: Chart container not found in render root');
      return;
    }

    if (!this.hasValidConfig()) {
      console.warn('uk-chart: No valid chart configuration found');
      this.hasError = true;
      return;
    }

    if (this.apexCharts === null) {
      try {
        // Merge width/height into config
        const config = {
          ...this.$apexChartsConfig,
          chart: {
            ...(this.$apexChartsConfig as any).chart,
            width: this.width,
            height: this.height,
          },
        };

        this.apexCharts = new ApexCharts(chartContainer, config);

        await this.apexCharts.render();

        this.isRendered = true;
        this.hasError = false;
      } catch (error) {
        console.error('uk-chart: Failed to initialize chart:', error);
        this.hasError = true;
      }
    }
  }

  /**
   * Renders the loading state with appropriate ARIA attributes.
   *
   * @returns {TemplateResult} Template for loading state
   * @internal
   */
  private renderLoading() {
    const message = this.getI18nText('loading-message', this.defaultI18n);

    return html`
      <div
        class="${this.$cls['loading']}"
        style="${this.$stl['loading']}"
        data-part="loading"
        role="status"
        aria-live="polite"
        aria-label="${message}"
      >
        <span>${message}</span>
      </div>
    `;
  }

  /**
   * Renders the error state with appropriate ARIA attributes.
   *
   * @returns {TemplateResult} Template for error state
   * @internal
   */
  private renderError() {
    const message = this.hasValidConfig()
      ? this.getI18nText('error-message', this.defaultI18n)
      : this.getI18nText('no-data-message', this.defaultI18n);

    return html`
      <div
        class="${this.$cls['error']}"
        style="${this.$stl['error']}"
        data-part="error"
        role="alert"
        aria-live="assertive"
      >
        <span>${message}</span>
      </div>
    `;
  }

  /**
   * Renders the chart component with conditional loading and error states.
   * The chart container receives the ApexCharts instance and applies custom CSS.
   *
   * @returns {TemplateResult} Template for the chart component
   */
  render() {
    const ariaLabel = this.getI18nText('chart-label', this.defaultI18n);

    return html`
      <div
        data-host-inner
        class="${this.$cls['host-inner']}"
        style="${this.$stl['host-inner']}"
        data-part="host-inner"
        role="img"
        aria-label="${ariaLabel}"
        data-loading="${this.loading}"
        data-error="${this.hasError}"
        data-rendered="${this.isRendered}"
      >
        ${this.loading
          ? this.renderLoading()
          : this.hasError
            ? this.renderError()
            : html`
                <div
                  data-chart-container
                  class="${this.$cls['chart']}"
                  style="${this.$stl['chart']}"
                  data-part="chart"
                ></div>
              `}
      </div>
    `;
  }

  /**
   * Public API: Updates the chart with new ApexCharts options.
   * Useful for programmatic updates from JavaScript.
   *
   * @param {object} options - New ApexCharts options to apply
   * @param {boolean} [redrawPaths=true] - Whether to redraw chart paths
   * @param {boolean} [animate=true] - Whether to animate the update
   * @returns {Promise<void>} Promise that resolves when update completes
   * @throws {Error} If chart is not initialized
   *
   * @example
   * ```javascript
   * const chart = document.querySelector('uk-chart');
   * await chart.updateChart({
   *   series: [{ data: [5, 10, 15, 20] }]
   * });
   * ```
   */
  public async updateChart(
    options: object,
    redrawPaths: boolean = true,
    animate: boolean = true,
  ): Promise<void> {
    if (this.apexCharts) {
      try {
        await this.apexCharts.updateOptions(options, redrawPaths, animate);
        this.hasError = false;
      } catch (error) {
        console.error('uk-chart: Failed to update chart:', error);
        this.hasError = true;
        throw error;
      }
    } else {
      throw new Error('Chart not initialized');
    }
  }

  /**
   * Public API: Updates chart series data.
   * Convenient method for updating only the series without changing other options.
   *
   * @param {ApexAxisChartSeries | ApexNonAxisChartSeries} newSeries - New series data
   * @param {boolean} [animate=true] - Whether to animate the update
   * @returns {Promise<void>} Promise that resolves when update completes
   * @throws {Error} If chart is not initialized
   *
   * @example
   * ```javascript
   * const chart = document.querySelector('uk-chart');
   * await chart.updateSeries([
   *   { name: 'Sales', data: [20, 30, 40, 50] }
   * ]);
   * ```
   */
  public async updateSeries(
    newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries,
    animate: boolean = true,
  ): Promise<void> {
    if (this.apexCharts) {
      try {
        await this.apexCharts.updateSeries(newSeries, animate);
        this.hasError = false;
      } catch (error) {
        console.error('uk-chart: Failed to update series:', error);
        this.hasError = true;
        throw error;
      }
    } else {
      throw new Error('Chart not initialized');
    }
  }

  /**
   * Public API: Gets the current ApexCharts instance.
   * Provides direct access to ApexCharts methods for advanced usage.
   *
   * @returns {ApexCharts | null} The ApexCharts instance or null if not initialized
   *
   * @example
   * ```javascript
   * const chart = document.querySelector('uk-chart');
   * const apexInstance = chart.getChartInstance();
   * if (apexInstance) {
   *   apexInstance.toggleSeries('Series 1');
   *   apexInstance.dataURI().then(({ imgURI }) => {
   *     // Download chart as image
   *   });
   * }
   * ```
   */
  public getChartInstance(): ApexCharts | null {
    return this.apexCharts;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-chart': Chart;
  }
}
