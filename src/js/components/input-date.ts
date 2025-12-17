// refactored input-date.ts
import { html, nothing, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { validateDate, formatDate } from '../helpers/date';
import { BaseCalendarMixin } from './shared/base-calendar';
import { InputMixin } from './shared/input';
import { Base } from './shared/base';

interface Cls extends Record<string, string> {
  container: string;
  button: string;
  'button-text': string;
  icon: string;
  dropdown: string;
  calendar: string;
  'time-wrapper': string;
  time: string;
}

interface Stl extends Record<string, string> {
  container: string;
  button: string;
  'button-text': string;
  icon: string;
  dropdown: string;
  calendar: string;
  'time-wrapper': string;
  time: string;
}

@customElement('uk-input-date')
export class InputDate extends BaseCalendarMixin(InputMixin(Base)) {
  protected 'cls-default-element' = 'button';
  protected 'stl-default-element' = 'button';
  protected 'input-event' = 'uk-input-date:change';

  @property({ type: String, attribute: 'display-format' })
  'display-format': string = 'MMMM DD, YYYY';

  @property({ type: Boolean, attribute: 'with-time' })
  'with-time': boolean = false;

  @property({ type: String })
  clock: '12h' | '24h' = '12h';

  @property({ type: Boolean, attribute: 'require-time' })
  'require-time': boolean = false;

  @property({ type: String })
  drop: string = 'mode: click; animation: uk-animation-slide-top-small;';

  @state()
  private $date: string | undefined;

  @state()
  private $time: string | undefined;

  @state()
  protected $cls: Cls = {
    container: '',
    button: 'uk-input-fake',
    'button-text': '',
    icon: '',
    dropdown: 'uk-datepicker-dropdown',
    calendar: '',
    'time-wrapper': '',
    time: '',
  };

  @state()
  protected $stl: Stl = {
    container: '',
    button: '',
    'button-text': '',
    icon: '',
    dropdown: '',
    calendar: '',
    'time-wrapper': '',
    time: '',
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
        console.error('[uk-input-date] Failed to format date:', error);

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
  }

  protected firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated?.(_changedProperties);

    // Listen for calendar date selection changes
    this.renderRoot
      .querySelector('uk-calendar')
      ?.addEventListener('uk-calendar:change', (e: any) => {
        this.$date = e.detail.value;
      });

    // Listen for time input changes if time selection is enabled
    if (this['with-time']) {
      this.renderRoot
        .querySelector('uk-input-time')
        ?.addEventListener('uk-input-time:input', (e: any) => {
          this.$time = e.detail.value;
        });
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
          '[uk-input-date] Failed to initialize date value:',
          error,
        );
      }
    }
  }

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

    return html`
      <div
        data-host-inner
        class="${this.$cls.container}"
        style="${this.$stl.container}"
      >
        <div class="uk-position-relative">
          <button
            class="${this.$cls.button}"
            style="${this.$stl.button}"
            type="button"
            ?disabled=${this.disabled}
            aria-label="${this.buttonLabel}"
            aria-haspopup="dialog"
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
            class="${this.$cls.dropdown} uk-drop"
            style="${this.$stl.dropdown}"
            data-uk-dropdown="${this.drop}"
            role="dialog"
            aria-label="${ariaLabel}"
          >
            <uk-calendar
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
            ></uk-calendar>

            ${this.renderTimeInput()}
          </div>
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
        <uk-input-time
          class="${this.$cls.time}"
          style="${this.$stl.time}"
          ?required=${this['require-time']}
          .i18n=${this.i18n}
          .value=${this.$time || ''}
          .clock=${this.clock}
          .lang=${this.lang}
        ></uk-input-time>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uk-input-date': InputDate;
  }
}
