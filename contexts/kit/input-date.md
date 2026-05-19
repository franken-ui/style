# Input Date

## Usage

The Input Date component is a web component built from scratch to allow users to easily select date and time. To get started, simply use the `<uk-input-date>` markup in your HTML code.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date cls="uk-input-fake justify-between"></uk-input-date>
</div>
```

## Capturing values

There are several ways to capture values from the `<uk-input-date>` component. The simplest approach is to add a `name` attribute to the component. When you do this, a hidden input field with the specified name will be automatically generated, allowing you to easily capture the selected value on your server.

```html
<uk-input-date name="date"></uk-input-date>
```

## Prepopulating values

To prepopulate the Input Date component with an existing value, simply pass the `value` attribute with a `YYYY-MM-DD` or `YYYY-MM-DDTHH:MM` format. To prepopulate with current date and time, just use the `today` attribute and it will automatically set the current date and time as the default value.

```html
<uk-input-date today></uk-input-date>
```

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date
    cls="uk-input-fake justify-between"
    value="2023-06-30T20:00"
    with-time
  ></uk-input-date>
</div>

<div
  class="[h] mt"
  style="--h: calc(var(--uk-global-font-size) * 2.5); --mt: 4"
>
  <uk-input-date
    cls="uk-input-fake justify-between"
    today
    with-time
  ></uk-input-date>
</div>
```

## Customize display format

To customize the display format, you can use the following parsing tokens and pass them to the `display-format` attribute.

| Input |     Example      |            Description            |
| :---: | :--------------: | :-------------------------------: |
|  YY   |        01        |          Two-digit year           |
| YYYY  |       2001       |          Four-digit year          |
|   M   |       1-12       |       Month, beginning at 1       |
|  MM   |      01-12       |          Month, 2-digits          |
|  MMM  |     Jan-Dec      |    The abbreviated month name     |
| MMMM  | January-December |        The full month name        |
|  ddd  |    Mon - Sun     |   The abbreviated weekday name    |
| DDDD  | Monday - Sunday  |       The full weekday name       |
|   D   |       1-31       |           Day of month            |
|  DD   |      01-31       |      Day of month, 2-digits       |
|   H   |       0-23       |               Hours               |
|  HH   |      00-23       |          Hours, 2-digits          |
|   h   |       1-12       |       Hours, 12-hour clock        |
|  hh   |      01-12       |  Hours, 12-hour clock, 2-digits   |
|   m   |       0-59       |              Minutes              |
|  mm   |      00-59       |         Minutes, 2-digits         |
|   A   |      AM PM       | Post or ante meridiem, upper-case |
|   a   |      am pm       | Post or ante meridiem, lower-case |
|  Do   |    1st - 31st    |     Day of Month with ordinal     |

```html
<uk-input-date display-format="YYYY/MM/DD"></uk-input-date>
```

## Position

Because the `<uk-input-date>` component uses the [Drop](/docs/latest/kit/drop) component under the hood, we can leverage its positioning capabilities and position our dropdown anywhere we want. To position it, just use the `drop` attribute with your drop options.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date
    cls="uk-button uk-button-default"
    stl="gap\: calc(var(--spacing) * 2)"
    drop="mode: click; pos: right-center"
  >
  </uk-input-date>
</div>
```

## Size modifiers

There are several size modifiers available. Just add one of the following classes to the `cls` attribute to make the input smaller or larger.

| Class             | Description               |
| ----------------- | ------------------------- |
| `.uk-form-xsmall` | Applies extra small size. |
| `.uk-form-small`  | Applies small size.       |
| `.uk-form-medium` | Applies medium size.      |
| `.uk-form-large`  | Applies large size.       |

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2)">
  <uk-input-date
    cls="uk-input-fake uk-form-xsmall justify-between"
  ></uk-input-date>
</div>

<div
  class="mt [h]"
  style="--mt: 4; --h: calc(var(--uk-global-font-size) * 2.25)"
>
  <uk-input-date
    cls="uk-input-fake uk-form-small justify-between"
  ></uk-input-date>
</div>

<div
  class="mt [h]"
  style="--mt: 4; --h: calc(var(--uk-global-font-size) * 2.75)"
>
  <uk-input-date
    cls="uk-input-fake uk-form-medium justify-between"
  ></uk-input-date>
</div>

<div class="mt [h]" style="--mt: 4; --h: calc(var(--uk-global-font-size) * 3)">
  <uk-input-date
    cls="uk-input-fake uk-form-large justify-between"
  ></uk-input-date>
</div>
```

## Disable input

To prevent user input, add the `disabled` attribute to the `<uk-input-date>` element. This will disable the component, making it impossible for users to enter or modify its value.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date cls="uk-input-fake justify-between" disabled></uk-input-date>
</div>
```

## Error state

To indicate an error state in the form, simply add the `.uk-form-danger` class to the `cls` attribute. This will apply a "danger" state to the component, providing visual feedback to the user.

```html
<div class="space-y" style="--space-y: 2">
  <label
    class="uk-form-label color display-block"
    style="--color: var(--uk-danger-f)"
  >
    Date
  </label>
  <div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
    <uk-input-date
      cls="uk-input-fake uk-form-danger justify-between"
    ></uk-input-date>
  </div>
  <p class="uk-form-help color" style="--color: var(--uk-danger-f)">
    This field is required.
  </p>
</div>
```

## Preventing layout shift

When loading Web Components, there may be a brief delay before the content is fully rendered. This can result in a flash of unstyled content or unprocessed templates. To mitigate this issue, consider setting a predefined height on the parent element to prevent layout shift and ensure a smooth user experience.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date>...</uk-input-date>
</div>
```

## Internationalization

The Input Date component supports internationalization through multiple methods with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="uk-i18n">`)
- **Default values**

Since this component uses Calendar and Input Time internally, you can provide i18n values for both components within a single configuration.

### Using the i18n attribute

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date
    cls="uk-input-fake justify-between"
    i18n="button-label: Pick a date; placeholder: Choose date; prev-month: Previous; next-month: Next"
  ></uk-input-date>
</div>
```

### Using a configuration script

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date cls="uk-input-fake justify-between" lang="de-DE">
    <script type="application/json" data-fn="config">
      {
        "i18n": {
          "button-label": "Datum auswählen",
          "dialog-label": "Datumsauswahl",
          "placeholder": "Datum wählen",
          "selected": "ausgewählt",
          "prev-month": "Vorheriger Monat",
          "next-month": "Nächster Monat"
        }
      }
    </script>
  </uk-input-date>
</div>
```

### Using global i18n

Place this in your document `<head>` or before any input-date components:

```html
<script id="uk-i18n" type="application/json">
  {
    "uk-input-date": {
      "button-label": "Select date",
      "dialog-label": "Date picker",
      "placeholder": "Select a date",
      "placeholder-with-time": "Select a date and time",
      "selected": "selected",
      "prev-month": "Previous month",
      "next-month": "Next month",
      "prev-year": "Previous year",
      "next-year": "Next year",
      "select-month": "Select month",
      "select-year": "Select year"
    }
  }
</script>
```

### Available i18n options

**Input Date specific:**

| Key                     | Default                | Description                                      |
| ----------------------- | ---------------------- | ------------------------------------------------ |
| `button-label`          | Select date            | Aria-label for the date picker button            |
| `dialog-label`          | Date picker            | Aria-label for the dropdown dialog               |
| `selected`              | selected               | Text added to button label when date is selected |
| `placeholder`           | Select a date          | Placeholder text when no date is selected        |
| `placeholder-with-time` | Select a date and time | Placeholder text when with-time is enabled       |

**Calendar specific (inherited):**

| Key            | Default        | Description                                         |
| -------------- | -------------- | --------------------------------------------------- |
| `prev-month`   | Previous month | Aria-label for the previous month navigation button |
| `next-month`   | Next month     | Aria-label for the next month navigation button     |
| `prev-year`    | Previous year  | Aria-label for the previous year navigation button  |
| `next-year`    | Next year      | Aria-label for the next year navigation button      |
| `select-month` | Select month   | Aria-label for the month dropdown selector          |
| `select-year`  | Select year    | Aria-label for the year input field                 |

**Input Time specific (when `with-time` is enabled):**

| Key                  | Default | Description                        |
| -------------------- | ------- | ---------------------------------- |
| `am`                 | AM      | Text for AM period                 |
| `pm`                 | PM      | Text for PM period                 |
| `hour-label`         | Hour    | Aria-label for hour input          |
| `minute-label`       | Minute  | Aria-label for minute input        |
| `meridiem-label`     | AM/PM   | Aria-label for AM/PM toggle button |
| `time-label`         | Time    | Aria-label for time input group    |
| `hour-placeholder`   | HH      | Placeholder for hour input         |
| `minute-placeholder` | MM      | Placeholder for minute input       |

## Custom classes

The Input Date component supports custom CSS classes through the `cls` attribute. This allows you to style specific elements within the date picker without modifying the component's internal structure.

### Using simple string format

Apply a class to the default element (button):

```html
<uk-input-date cls="my-custom-button"></uk-input-date>
```

### Using JSON object format

Target specific elements within the input date:

```html
<uk-input-date
  cls='{
    "container": "date-picker-wrapper",
    "button": "uk-input uk-form-large",
    "button-text": "date-display-text",
    "icon": "calendar-icon",
    "dropdown": "date-dropdown",
    "calendar": "calendar-component",
    "time-wrapper": "time-section",
    "time": "time-input"
  }'
></uk-input-date>
```

### Using configuration script

```html
<uk-input-date>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "button": "uk-input uk-form-medium",
        "dropdown": "uk-datepicker-dropdown",
        "calendar": "custom-calendar"
      }
    }
  </script>
</uk-input-date>
```

### Available cls targets

| Target         | Description                                              |
| -------------- | -------------------------------------------------------- |
| `container`    | The main wrapper container for the entire component      |
| `button`       | The clickable button that opens the date picker          |
| `button-text`  | The text span inside the button showing selected date    |
| `icon`         | The icon element inside the button                       |
| `dropdown`     | The dropdown container holding calendar and time inputs  |
| `calendar`     | The calendar component within the dropdown               |
| `time-wrapper` | The wrapper for time input (when `with-time` is enabled) |
| `time`         | The time input component (when `with-time` is enabled)   |

## Custom inline styles

The Input Date component supports custom inline styles through the `stl` attribute. This allows you to apply specific CSS styles to individual elements within the date picker.

### Using simple string format

Apply styles to the default element (button):

```html
<uk-input-date stl="width\: 300px; padding\: 12px;"></uk-input-date>
```

### Using JSON object format

```html
<uk-input-date
  stl='{
    "container": "position: relative;",
    "button": "background: #f8f9fa; border: 1px solid #dee2e6; padding: 0.5rem 1rem;",
    "button-text": "color: #495057; font-weight: 500;",
    "icon": "margin-left: auto;",
    "dropdown": "min-width: 320px; padding: 1rem;"
  }'
></uk-input-date>
```

Target specific elements with custom styles:

### Using configuration script

```html
<uk-input-date>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "button": "min-width: 250px;",
        "dropdown": "box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
      }
    }
  </script>
</uk-input-date>
```

### Available stl targets

The `stl` attribute supports the same targets as the `cls` attribute. See the [Available cls targets](#available-cls-targets) table above for a complete list of targetable elements.

## Custom icons

The Input Date component allows you to customize the calendar icon through the template system:

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date cls="uk-input-fake justify-between">
    <template data-fn="icons">
      <svg
        data-key="calendar"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
          clip-rule="evenodd"
        />
      </svg>
    </template>
  </uk-input-date>
</div>
```

### Available icon keys

| Key        | Description                           |
| ---------- | ------------------------------------- |
| `calendar` | Calendar icon displayed in the button |

## Attributes

The following attributes are available for this component:

| Name                     | Type    | Default                                               | Description                                                                                                           |
| ------------------------ | ------- | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `today`                  | Boolean | false                                                 | Automatically sets today as the initial selected date.                                                                |
| `jumpable`               | Boolean | false                                                 | Enables month dropdown and year input for quick date navigation in the calendar.                                      |
| `starts-with`            | Number  | 0 (Sunday)                                            | Sets the starting day of the week. 0 for Sunday, 1 for Monday.                                                        |
| `disabled-dates`         | String  |                                                       | Comma-separated list of dates to disable. Dates must be in format YYYY-MM-DD.                                         |
| `marked-dates`           | String  |                                                       | Comma-separated list of dates to mark with indicator. Dates must be in format YYYY-MM-DD.                             |
| `view-date`              | String  | Current date                                          | Sets the initial view date of the calendar. Must be in format YYYY-MM-DD.                                             |
| `min`                    | String  |                                                       | Sets the minimum selectable date (inclusive). Must be in format YYYY-MM-DD.                                           |
| `max`                    | String  |                                                       | Sets the maximum selectable date (exclusive). Must be in format YYYY-MM-DD.                                           |
| `weekday-format`         | String  | short                                                 | Format for weekday labels: `long`, `short`, or `narrow`.                                                              |
| `lang`                   | String  | en-us                                                 | Locale string for date formatting (e.g., "en-US", "fr-FR", "de-DE").                                                  |
| `display-format`         | String  | MMMM DD, YYYY                                         | Display format for the selected date. See [Customize display format](#customize-display-format) for available tokens. |
| `with-time`              | Boolean | false                                                 | Enables time selection alongside date selection.                                                                      |
| `clock`                  | String  | 12h                                                   | Clock format for time input: `12h` or `24h`. Only used when `with-time` is enabled.                                   |
| `require-time`           | Boolean | false                                                 | Makes time input required when `with-time` is enabled.                                                                |
| `drop`                   | String  | mode: click; animation: uk-animation-slide-top-small; | Dropdown options. See [Drop](/docs/latest/kit/drop) component for more options.                                       |
| `name`                   | String  |                                                       | Name attribute for the hidden input field, enabling form submission.                                                  |
| `disabled`               | Boolean | false                                                 | Disables the entire component, preventing user interaction.                                                           |
| `required`               | Boolean | false                                                 | Marks the input as required for form validation.                                                                      |
| `placeholder`            | String  |                                                       | Custom placeholder text. Overrides default i18n placeholder.                                                          |
| `value`                  | String  |                                                       | Pre-populated value in YYYY-MM-DD or YYYY-MM-DDTHH:MM format.                                                         |
| `cls`                    | String  |                                                       | Custom CSS classes. Can be a simple string or JSON object for targeting specific elements.                            |
| `stl`                    | String  |                                                       | Custom inline styles. Can be a simple string or JSON object for targeting specific elements.                          |
| `i18n`                   | String  |                                                       | Internationalization strings as JSON object or via configuration script.                                              |
| `force-prevent-rerender` | Boolean | false                                                 | Prevents component rerendering (useful for HTMX or SPA scenarios).                                                    |

## Events

The Input Date component triggers the following event:

| Name                   | Description                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `uk-input-date:change` | Fired when the date or time value changes. Event detail contains `{value: string}`. |