import { html, nothing, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { validateDate, formatDate } from '../helpers/date';
import { BaseCalendarMixin } from './shared/base-calendar';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';
import { BaseDropMixin } from './shared/base-drop';

interface Cls extends Record<string, string> {
  container: string;
  button: string;
  'button-text': string;
  icon: string;
  drop: string;
  calendar: string;
  'time-wrapper': string;
  time: string;
  arrow: string;
}

interface Stl extends Record<string, string> {
  container: string;
  button: string;
  'button-text': string;
  icon: string;
  drop: string;
  calendar: string;
  'time-wrapper': string;
  time: string;
  arrow: string;
}

@customElement('fr-input-date')
// @ts-expect-error - TypeScript struggles with deeply nested mixin types
export class InputDate extends BaseDropMixin(
  BaseCalendarMixin(InputMixin(Base)),
) {
  protected 'cls-default-element' = 'container';
  protected 'stl-default-element' = 'container';
  protected 'input-event' = 'fr-input-date:change';

  @property({ type: String, attribute: 'display-format' })
  'display-format': string = 'MMMM DD, YYYY';

  @property({ type: Boolean, attribute: 'with-time' })
  'with-time': boolean = false;

  @property({ type: String })
  clock: '12h' | '24h' = '12h';

  @property({ type: Boolean, attribute: 'require-time' })
  'require-time': boolean = false;

  @state()
  private $date: string | undefined;

  @state()
  private $time: string | undefined;

  @state()
  protected $cls: Cls = {
    container: '',
    button: '',
    'button-text': '',
    icon: '',
    drop: '',
    calendar: '',
    'time-wrapper': '',
    time: '',
    arrow: '',
  };

  @state()
  protected $stl: Stl = {
    container: '',
    button: '',
    'button-text': '',
    icon: '',
    drop: '',
    calendar: '',
    'time-wrapper': '',
    time: '',
    arrow: '',
  };

  protected get $value(): string {
    if (this.$date && this.$time) {
      return `${this.$date}T${this.$time}`;
    }

    if (this.$date) {
      return this.$date;
    }

    return '';
  }

  protected get $text(): string {
    if (this.$value) {
      try {
        const dateValue = this.$value.includes('T')
          ? new Date(this.$value)
          : new Date(this.$value + 'T00:00:00');

        let displayFormat = this['display-format'];

        if (this['with-time'] && this.$time) {
          const timeFormat = this.clock === '12h' ? 'h:mm A' : 'HH:mm';

          displayFormat = `${this['display-format']} ${timeFormat}`;
        }

        return formatDate(dateValue, displayFormat, this.lang);
      } catch (error) {
        console.error('[fr-input-date] Failed to format date:', error);
        return this.$value;
      }
    }

    if (this.placeholder) {
      return this.placeholder;
    }

    return this.getI18nText(
      'placeholder',
      this['with-time']
        ? { placeholder: 'Select a date and time' }
        : { placeholder: 'Select a date' },
    );
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.toggleSelector = 'button';
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated?.(_changedProperties);

    const calendar = this.dropEl?.querySelector('fr-calendar');
    if (calendar) {
      calendar.addEventListener('fr-calendar:change', (e: any) => {
        this.$date = e.detail.value;
        if (!this['with-time']) {
          this.hide();
        }
      });
    }

    if (this['with-time']) {
      const timeInput = this.dropEl?.querySelector('fr-input-time');
      if (timeInput) {
        timeInput.addEventListener('fr-input-time:input', (e: any) => {
          this.$time = e.detail.value;
        });
      }
    }
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('$date') || changedProperties.has('$time')) {
      this.emit();
    }
  }

  protected initializeValue(): void {
    if (this.value) {
      try {
        validateDate(this.value);

        const hasTime = this.value.includes('T');

        if (!hasTime) {
          this.$date = this.value;
        } else {
          const [datePart, timePart] = this.value.split('T');
          this.$date = datePart;
          this.$time = timePart;
        }
      } catch (error) {
        console.error(
          '[fr-input-date] Failed to initialize date value:',
          error,
        );
      }
    }
  }

  protected onDropOpen(): void {}

  protected onDropClose(): void {}

  private get buttonLabel(): string {
    const baseLabel = this.getI18nText('buttonLabel', {
      buttonLabel: 'Select date',
    });

    if (this.$value) {
      return `${baseLabel}, ${this.getI18nText('selected', { selected: 'selected' })}: ${this.$text}`;
    }

    return baseLabel;
  }

  render() {
    const ariaLabel = this.getI18nText('dialogLabel', {
      dialogLabel: 'Date picker',
    });

    const zIndex = 1000 + this.stackIndex;

    return html`
      <div
        data-host-inner
        class="${this.$cls.container}"
        style="${this.$stl.container}"
      >
        <button
          class="${this.$cls.button}"
          style="${this.$stl.button}"
          type="button"
          ?disabled=${this.disabled}
          aria-label="${this.buttonLabel}"
          aria-haspopup="dialog"
          aria-expanded="${this.isOpen ? 'true' : 'false'}"
        >
          <span
            class="${this.$cls['button-text']}"
            style="${this.$stl['button-text']}"
          >
            ${this.$text}
          </span>
          ${this.$icons('calendar') || ''}
        </button>

        <div
          data-drop
          class="${this.$dropCls.drop} ${this.$cls.drop}"
          style="display: ${this.isOpen
            ? 'block'
            : 'none'}; position: absolute; z-index: ${zIndex}; ${this.$dropStl
            .drop || ''} ${this.$stl.drop}"
          role="dialog"
          aria-modal="${this.focusTrap}"
          aria-label="${ariaLabel}"
        >
          <fr-calendar
            class="${this.$cls.calendar}"
            style="${this.$stl.calendar}"
            .starts-with=${this['starts-with']}
            .disabled-dates=${this['disabled-dates']}
            .marked-dates=${this['marked-dates']}
            .i18n=${this.i18n}
            .view-date=${this['view-date']}
            .min=${this.min}
            .max=${this.max}
            .value=${this.$date || ''}
            ?today=${this.today}
            ?jumpable=${this.jumpable}
            .weekday-format=${this['weekday-format']}
            .lang=${this.lang}
          ></fr-calendar>

          ${this.renderTimeInput()}
          ${this.arrow
            ? html`
                <div
                  data-arrow
                  class="${this.$dropCls.arrow} ${this.$cls.arrow}"
                  style="position: absolute; ${this.$dropStl.arrow || ''} ${this
                    .$stl.arrow}"
                ></div>
              `
            : ''}
        </div>

        ${this.renderHidden()}
      </div>
    `;
  }

  private renderTimeInput() {
    if (!this['with-time']) {
      return nothing;
    }

    return html`
      <div
        class="${this.$cls['time-wrapper']}"
        style="${this.$stl['time-wrapper']}"
      >
        <fr-input-time
          class="${this.$cls.time}"
          style="${this.$stl.time}"
          ?required=${this['require-time']}
          .i18n=${this.i18n}
          .value=${this.$time || ''}
          .clock=${this.clock}
          .lang=${this.lang}
        ></fr-input-time>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'fr-input-date': InputDate;
  }
}
