import { customElement, property, state } from 'lit/decorators.js';
import { Base } from './shared/base';
import { type PropertyValues, html } from 'lit';
import ApexCharts from 'apexcharts';

/**
 * A headless Lit-based web component that wraps ApexCharts for declarative chart rendering.
 * All styling is delegated to `cls` and `stl` attributes for maximum flexibility.
 *
 * @element uk-chart
 * @extends {Base}
 *
 * Features:
 * - Declarative chart configuration via JSON script tags or attributes
 * - Optional reactive updates when configuration changes (via data-reactive attribute)
 * - Integration with Base class for i18n and custom CSS support
 * - Automatic chart lifecycle management
 * - Loading states and error handling
 * - Accessibility support with ARIA attributes
 * - Headless design with flexible styling
 *
 * @example
 * Basic usage:
 * ```html
 * <uk-chart>
 *   <script type="application/json">
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
 *   <script type="application/json" data-reactive>
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
 * With i18n and styling:
 * ```html
 * <uk-chart>
 *   <script type="application/json">
 *   {
 *     "apexCharts": {
 *       "chart": { "type": "area" },
 *       "series": [{ "name": "Revenue", "data": [100, 200, 150] }]
 *     },
 *     "i18n": {
 *       "chartLabel": "Revenue Chart",
 *       "loadingMessage": "Loading chart...",
 *       "errorMessage": "Failed to load chart"
 *     },
 *     "cls": {
 *       "container": "chart-wrapper shadow-lg rounded",
 *       "loading": "text-gray-500 animate-pulse"
 *     }
 *   }
 *   </script>
 * </uk-chart>
 * ```
 *
 * @example
 * With loading state:
 * ```html
 * <uk-chart loading>
 *   <script type="application/json">
 *   {
 *     "apexCharts": { "chart": { "type": "pie" } }
 *   }
 *   </script>
 * </uk-chart>
 * ```
 */
@customElement('uk-chart')
export class Chart extends Base {
  /**
   * The default element key used for applying simple string CSS classes via `cls`.
   * For this component, it targets the container div element.
   */
  protected readonly 'cls-default-element': string = 'container';

  /**
   * The default element key used for applying simple string inline styles via `stl`.
   * For this component, it targets the container div element.
   */
  protected readonly 'stl-default-element': string = 'container';

  /**
   * Shows a loading state before the chart is rendered.
   * Useful when chart data is being fetched asynchronously.
   *
   * @default false
   * @example
   * ```html
   * <uk-chart loading></uk-chart>
   * ```
   */
  @property({ type: Boolean })
  loading: boolean = false;

  /**
   * Width of the chart container.
   * Can be a number (pixels) or string with units.
   *
   * @example
   * ```html
   * <uk-chart width="500"></uk-chart>
   * <uk-chart width="100%"></uk-chart>
   * ```
   */
  @property({ type: String })
  width: string = '100%';

  /**
   * Height of the chart container.
   * Can be a number (pixels) or string with units.
   *
   * @example
   * ```html
   * <uk-chart height="400"></uk-chart>
   * <uk-chart height="50vh"></uk-chart>
   * ```
   */
  @property({ type: String })
  height: string = 'auto';

  /**
   * ARIA label for the chart container.
   * Overrides i18n label if provided.
   *
   * @example
   * ```html
   * <uk-chart aria-label="Sales performance chart"></uk-chart>
   * ```
   */
  @property({ type: String })
  'aria-label': string = '';

  /**
   * Tracks whether an error occurred during chart initialization.
   * @internal
   */
  @state()
  protected hasError: boolean = false;

  /**
   * Error message if chart initialization fails.
   * @internal
   */
  @state()
  protected errorMessage: string = '';

  /**
   * ApexCharts instance for rendering and managing the chart.
   * @internal
   */
  private apexCharts: ApexCharts | null = null;

  /**
   * Default i18n strings for labels and messages.
   * These can be overridden via the i18n attribute or config script.
   * @internal
   */
  private readonly defaultI18n = {
    chartLabel: 'Chart',
    loadingMessage: 'Loading chart...',
    errorMessage: 'Failed to load chart. Please try again.',
    noDataMessage: 'No data available',
  };

  /**
   * Extracts ApexCharts-specific configuration from $config.
   * Returns the apexCharts object if present, otherwise returns an empty object.
   *
   * @returns ApexCharts configuration object
   *
   * @example
   * With apexCharts wrapper:
   * ```json
   * { "apexCharts": { "chart": { "type": "bar" } } }
   * ```
   * Returns: `{ "chart": { "type": "bar" } }`
   */
  protected get $apexChartsConfig(): object {
    if ('apexCharts' in this.$config && typeof this.$config === 'object') {
      return (this.$config as { apexCharts: object }).apexCharts;
    }

    return {};
  }

  /**
   * Checks if the chart has valid configuration.
   * @returns True if chart config exists
   * @internal
   */
  private hasValidConfig(): boolean {
    return Object.keys(this.$apexChartsConfig).length > 0;
  }

  /**
   * Lit lifecycle method called after first render.
   * Creates and renders the ApexCharts instance if not in loading state.
   *
   * @param changedProperties Changed properties in this update
   */
  protected firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);

    if (!this.loading) {
      this.initializeApexCharts();
    }
  }

  /**
   * Lit lifecycle method called on every update.
   * Handles loading state changes.
   *
   * @param changedProperties Changed properties in this update
   */
  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // If loading changed from true to false, initialize chart
    if (changedProperties.has('loading') && !this.loading && !this.apexCharts) {
      this.initializeApexCharts();
    }
  }

  /**
   * Lit lifecycle method called when component is removed from DOM.
   * Cleans up chart resources.
   */
  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.apexCharts) {
      this.apexCharts.destroy();
      this.apexCharts = null;
    }
  }

  /**
   * Hook called when script configuration changes (via reactive observer).
   * Updates the chart with the new configuration.
   */
  protected onConfigChanged(): void {
    if (this.apexCharts && this.hasValidConfig()) {
      try {
        this.apexCharts.updateOptions(this.$apexChartsConfig, true, true);
        this.hasError = false;
        this.errorMessage = '';
      } catch (error) {
        console.error('uk-chart: Failed to update chart:', error);

        this.hasError = true;
        this.errorMessage =
          error instanceof Error ? error.message : 'Unknown error';
      }
    } else if (!this.apexCharts && this.hasValidConfig()) {
      // If chart doesn't exist yet but we have config, initialize it
      this.initializeApexCharts();
    }
  }

  /**
   * Initializes the ApexCharts instance and renders the chart.
   * Handles errors gracefully and sets appropriate state.
   * @internal
   */
  private async initializeApexCharts(): Promise<void> {
    const chartContainer = this.renderRoot.querySelector(
      '[data-chart-container]',
    );

    if (!chartContainer) {
      console.warn('uk-chart: Chart container not found');

      return;
    }

    if (!this.hasValidConfig()) {
      console.warn('uk-chart: No valid chart configuration found');

      this.hasError = true;
      this.errorMessage = this.getI18nText('noDataMessage', this.defaultI18n);

      return;
    }

    if (this.apexCharts === null) {
      try {
        // Merge width/height into config if specified
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
        this.errorMessage = '';
      } catch (error) {
        console.error('uk-chart: Failed to initialize chart:', error);

        this.hasError = true;
        this.errorMessage =
          error instanceof Error
            ? error.message
            : this.getI18nText('errorMessage', this.defaultI18n);
      }
    }
  }

  /**
   * Renders the loading state.
   * @returns Template for loading state
   * @internal
   */
  private renderLoading() {
    const message = this.getI18nText('loadingMessage', this.defaultI18n);

    return html`
      <div
        class="${this.$cls['loading'] || ''}"
        style="${this.$stl['loading'] || ''}"
        role="status"
        aria-live="polite"
        aria-label="${message}"
      >
        <span>${message}</span>
      </div>
    `;
  }

  /**
   * Renders the error state.
   * @returns Template for error state
   * @internal
   */
  private renderError() {
    const message =
      this.errorMessage || this.getI18nText('errorMessage', this.defaultI18n);

    return html`
      <div
        class="${this.$cls['error'] || ''}"
        part="error"
        style="${this.$stl['error'] || ''}"
        role="alert"
        aria-live="assertive"
      >
        <span>${message}</span>
      </div>
    `;
  }

  /**
   * Renders the chart container element.
   * The container receives the chart instance and applies custom CSS classes and styles.
   * Handles loading and error states.
   *
   * @returns Template for the chart component
   */
  render() {
    const ariaLabel =
      this['aria-label'] || this.getI18nText('chartLabel', this.defaultI18n);

    return html`
      <div
        data-host-inner
        class="${this.$cls['container']}"
        style="${this.$stl['container']}"
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
                  class="${this.$cls['chart'] || ''}"
                  part="chart"
                  style="${this.$stl['chart'] || ''}"
                ></div>
              `}
      </div>
    `;
  }

  /**
   * Public API: Updates the chart with new options.
   * Useful for programmatic updates from JavaScript.
   *
   * @param options - New ApexCharts options to apply
   * @param redrawPaths - Whether to redraw paths (default: true)
   * @param animate - Whether to animate the update (default: true)
   * @returns Promise that resolves when update is complete
   *
   * @example
   * ```javascript
   * const chart = document.querySelector('uk-chart');
   * await chart.updateChart({
   *   series: [{ data: [5, 10, 15] }]
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
        this.errorMessage = '';
      } catch (error) {
        console.error('uk-chart: Failed to update chart:', error);

        this.hasError = true;
        this.errorMessage =
          error instanceof Error ? error.message : 'Unknown error';

        throw error;
      }
    } else {
      throw new Error('Chart not initialized');
    }
  }

  /**
   * Public API: Updates chart series data.
   * Convenient method for updating just the series.
   *
   * @param newSeries - New series data
   * @param animate - Whether to animate the update (default: true)
   * @returns Promise that resolves when update is complete
   *
   * @example
   * ```javascript
   * const chart = document.querySelector('uk-chart');
   * await chart.updateSeries([{ data: [20, 30, 40] }]);
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
        this.errorMessage = '';
      } catch (error) {
        console.error('uk-chart: Failed to update series:', error);

        this.hasError = true;
        this.errorMessage =
          error instanceof Error ? error.message : 'Unknown error';

        throw error;
      }
    } else {
      throw new Error('Chart not initialized');
    }
  }

  /**
   * Public API: Gets the current ApexCharts instance.
   * Useful for accessing ApexCharts methods directly.
   *
   * @returns The ApexCharts instance or null if not initialized
   *
   * @example
   * ```javascript
   * const chart = document.querySelector('uk-chart');
   * const apexInstance = chart.getChartInstance();
   * if (apexInstance) {
   *   apexInstance.toggleSeries('Series 1');
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
