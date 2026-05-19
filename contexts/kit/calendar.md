# Calendar

## Usage

You can build your calendar manually using server-side rendering with the following classes, or use our web components that have been built from scratch with the `<uk-calendar>` markup.

### Manual server-side rendering

Use the following classes to create your calendar:

| Class            | Description                                                                     |
| ---------------- | ------------------------------------------------------------------------------- |
| `uk-cal`         | The calendar wrapper                                                            |
| `uk-cal-oom`     | For dates that are out-of-month                                                 |
| `uk-active`      | To show the active date                                                         |
| `uk-disabled`    | To disable a date (add `disabled` attribute to the button for full disablement) |
| `uk-cal-marked`  | To add an indicator for "marked dates" (dates with events)                      |
| `uk-cal-divider` | To add a divider between calendar weeks.                                        |

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <div class="uk-cal uk-cal-divider">
      <table>
        <thead>
          <tr>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="uk-cal-oom">
              <button>28</button>
            </td>
            <td class="uk-cal-oom">
              <button>29</button>
            </td>
            <td class="uk-cal-oom">
              <button>30</button>
            </td>
            <td class="uk-cal-oom">
              <button>31</button>
            </td>
            <td class="uk-active">
              <button>1</button>
            </td>
            <td>
              <button>2</button>
            </td>
            <td class="uk-disabled">
              <button disabled>3</button>
            </td>
          </tr>
          <tr>
            <td>
              <button>4</button>
            </td>
            <td class="uk-cal-marked">
              <button>5</button>
            </td>
            <td>
              <button>6</button>
            </td>
            <td>
              <button>7</button>
            </td>
            <td>
              <button>8</button>
            </td>
            <td>
              <button>9</button>
            </td>
            <td>
              <button>10</button>
            </td>
          </tr>
          <tr>
            <td><button>11</button></td>
            <td><button>12</button></td>
            <td><button>13</button></td>
            <td><button>14</button></td>
            <td><button>15</button></td>
            <td><button>16</button></td>
            <td><button>17</button></td>
          </tr>
          <tr>
            <td><button>18</button></td>
            <td><button>19</button></td>
            <td><button>20</button></td>
            <td><button>21</button></td>
            <td><button>22</button></td>
            <td><button>23</button></td>
            <td><button>24</button></td>
          </tr>
          <tr>
            <td><button>25</button></td>
            <td><button>26</button></td>
            <td><button>27</button></td>
            <td><button>28</button></td>
            <td><button>29</button></td>
            <td><button>30</button></td>
            <td><button>31</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

### Web components

Alternatively, you can use our web components with the `<uk-calendar>` markup.

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar></uk-calendar>
  </div>
</div>
```

## Setting the current day

To automatically set today's date as the active date in the calendar, use the `today` attribute. This will highlight the current day in the calendar, making it easy for users to quickly identify the current date.

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar today></uk-calendar>
  </div>
</div>
```

By default, this attribute is set to `false`, meaning today's date will not be automatically highlighted.

## Enabling month and year selection

To allow month and year selection, use the `jumpable` attribute. This will enable a dropdown menu for selecting the month and a text input field for entering the year, allowing users to quickly "jump" to a specific date.

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar jumpable></uk-calendar>
  </div>
</div>
```

By default, this attribute is set to `false`, meaning the calendar will not provide month and year selection options.

## Setting the starting day of the week

To customize the starting day of the week in the calendar, use the `starts-with` attribute. This allows you to specify whether the week should start on Sunday (0) or Monday (1). By default, the week starts on Sunday (0).

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar starts-with="1"></uk-calendar>
  </div>
</div>
```

## Disabling specific dates

To disable specific dates in the calendar, use the `disabled-dates` attribute. This attribute accepts a comma-separated list of dates. Please note that dates must be in the format `YYYY-MM-DD` (e.g. `2022-07-25`). Dates that do not follow this format will be ignored and a console error will be thrown. The calendar will still render, but the invalid dates will not be disabled.

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar
      disabled-dates="2022-07-25,2022-08-01,2022-08-15"
      view-date="2022-07-01"
    ></uk-calendar>
  </div>
</div>
```

## Marking specific dates

To add an indicator to specific dates in the calendar, use the `marked-dates` attribute. This attribute accepts a comma-separated list of dates. Please note that dates must be in the format `YYYY-MM-DD` (e.g. `2022-07-25`). Dates that do not follow this format will be ignored and a console error will be thrown. The calendar will still render, but the invalid dates will not be marked.

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar
      marked-dates="2022-07-25,2022-08-01,2022-08-15"
      view-date="2022-07-01"
    ></uk-calendar>
  </div>
</div>
```

## Setting the view date

To customize the initial view date of the calendar, use the `view-date` attribute. By default, the calendar will display the current date. To set a custom view date, provide a date in the format `YYYY-MM-DD` (e.g. `2023-06-30`). This will cause the calendar to display the specified month and year.

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar view-date="2023-06-30"></uk-calendar>
  </div>
</div>
```

## Setting the minimum and maximum date

To set the minimum and maximum date that can be selected in the calendar, use the `min` and `max` attributes. These attributes accept dates in the format `YYYY-MM-DD` (e.g. `2022-07-25`).

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar
      min="2022-01-01"
      max="2022-12-31"
      view-date="2022-07-01"
    ></uk-calendar>
  </div>
</div>
```

## Setting the current value

To set the current value of the calendar, use the `value` attribute. This attribute accepts a date in the format `YYYY-MM-DD` (e.g. `2020-05-06`). Please note that this attribute takes precedence over `view-date` and `today`, so setting `value` will override any settings made with those attributes.

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar value="2022-07-01"></uk-calendar>
  </div>
</div>
```

## Capturing values

There are several ways to capture values from the `<uk-calendar>` component. The simplest approach is to add a `name` attribute to the component. When you do this, a hidden input field with the specified name will be automatically generated, allowing you to easily capture the selected value on your server.

```html
<uk-calendar name="calendar"></uk-calendar>
```

This is useful when you need to include the calendar component in a form and capture the selected date as part of the form submission.

## Internationalization

The Calendar component supports internationalization through multiple methods with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="uk-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar
      i18n="prev-month: Mois précédent; next-month: Mois suivant; select-month: Sélectionner le mois; select-year: Sélectionner l'année"
      lang="fr-FR"
    ></uk-calendar>
  </div>
</div>
```

### Using a configuration script

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar lang="de-DE">
      <script type="application/json" data-fn="config">
        {
          "i18n": {
            "prev-month": "Vorheriger Monat",
            "next-month": "Nächster Monat",
            "select-month": "Monat auswählen",
            "select-year": "Jahr auswählen"
          }
        }
      </script>
    </uk-calendar>
  </div>
</div>
```

### Using global i18n

Place this in your document `<head>` or before any components:

```html
<script id="uk-i18n" type="application/json">
  {
    "uk-calendar": {
      "prev-month": "Previous Month",
      "next-month": "Next Month",
      "select-month": "Select Month",
      "select-year": "Select Year"
    }
  }
</script>
```

### Available i18n options

| Key            | Default        | Description                                         |
| -------------- | -------------- | --------------------------------------------------- |
| `prev-month`   | Previous month | Aria-label for the previous month navigation button |
| `next-month`   | Next month     | Aria-label for the next month navigation button     |
| `prev-year`    | Previous year  | Aria-label for the previous year navigation button  |
| `next-year`    | Next year      | Aria-label for the next year navigation button      |
| `select-month` | Select month   | Aria-label for the month dropdown selector          |
| `select-year`  | Select year    | Aria-label for the year input field                 |

## Custom classes

The Calendar component supports custom CSS classes through the `cls` attribute. This allows you to style specific elements within the calendar without modifying the component's internal structure.

### Using simple string format

Apply a class to the default element (host-inner):

```html
<uk-calendar cls="my-calendar-wrapper"></uk-calendar>
```

### Using JSON object format

Target specific elements within the calendar:

```html
<uk-calendar
  cls='{
    "host-inner": "my-calendar",
    "header": "calendar-header",
    "previous-button": "prev-button",
    "next-button": "next-button",
    "title": "calendar-title",
    "grid": "calendar-grid",
    "day-button": "day-button",
    "button-selected": "active-day",
    "button-today": "today-highlight"
  }'
></uk-calendar>
```

### Using configuration script

```html
<uk-calendar>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "host-inner": "custom-calendar",
        "header": "custom-header",
        "day-button": "custom-day"
      }
    }
  </script>
</uk-calendar>
```

### Available cls targets

| Target                 | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `host-inner`           | The main calendar wrapper element                   |
| `header`               | The calendar header containing navigation and title |
| `previous-button`      | Previous month/year navigation button               |
| `next-button`          | Next month/year navigation button                   |
| `title`                | The calendar title (month and year display)         |
| `jumper`               | The jumper container (when jumpable is enabled)     |
| `month-select`         | Month dropdown selector (when jumpable is enabled)  |
| `year-input`           | Year input field (when jumpable is enabled)         |
| `grid`                 | The calendar grid table element                     |
| `weekdays`             | The weekdays header row                             |
| `weekday`              | Individual weekday header cell                      |
| `week`                 | Individual week row                                 |
| `day`                  | Individual day cell                                 |
| `day-button`           | Day button element                                  |
| `jumper-month`         | Month jumper wrapper                                |
| `jumper-year`          | Year jumper wrapper                                 |
| `jumper-button`        | Jumper navigation buttons                           |
| `day-outside-month`    | Class for days outside current month                |
| `day-selected`         | Class for the selected day cell                     |
| `day-today`            | Class for today's day cell                          |
| `day-marked`           | Class for marked day cells                          |
| `button-outside-month` | Class for day buttons outside current month         |
| `button-selected`      | Class for the selected day button                   |
| `button-today`         | Class for today's day button                        |
| `button-marked`        | Class for marked day buttons                        |

## Custom inline styles

The Calendar component supports custom inline styles through the `stl` attribute. This allows you to apply specific CSS styles to individual elements within the calendar.

### Using simple string format

Apply styles to the default element (host-inner):

```html
<uk-calendar stl="background\: #f0f0f0; padding\: 20px;"></uk-calendar>
```

### Using JSON object format

Target specific elements with custom styles:

<uk-calendar
  stl='{
    "host-inner": "padding: 1rem; background: white;",
    "header": "margin-bottom: 1rem; border-bottom: 2px solid #ddd;",
    "day-button": "border-radius: 50%; padding: 0.5rem;",
    "button-selected": "background: #1e87f0; color: white;"
  }'
></uk-calendar>

### Using configuration script

```html
<uk-calendar>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "host-inner": "background: #fafafa;",
        "header": "padding: 1rem;",
        "day-button": "font-weight: bold;"
      }
    }
  </script>
</uk-calendar>
```

### Available stl targets

The `stl` attribute supports the same targets as the `cls` attribute. See the [Available cls targets](#available-cls-targets) table above for a complete list of targetable elements.

## Custom icons

The Calendar component allows you to customize navigation icons through the template system:

```html
<div class="display-flex justify-center">
  <div
    class="uk-rounded uk-shadow border-w border/o p"
    style="
      --border-w: 1px;
      --border: var(--uk-border);
      --border-o: var(--uk-border-o);
      --p: 3;
    "
  >
    <uk-calendar>
      <template data-fn="icons">
        <svg
          data-key="chevron-left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path
            fill-rule="evenodd"
            d="M3.22 7.595a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 0 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06l-3.25 3.25Zm8.25-3.25-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06l-2.72-2.72 2.72-2.72a.75.75 0 0 0-1.06-1.06Z"
            clip-rule="evenodd"
          />
        </svg>

        <svg
          data-key="chevron-right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          width="16"
          height="16"
        >
          <path
            fill-rule="evenodd"
            d="M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </template>
    </uk-calendar>
  </div>
</div>
```

### Available icon keys

| Key             | Description                 |
| --------------- | --------------------------- |
| `chevron-left`  | Left navigation arrow icon  |
| `chevron-right` | Right navigation arrow icon |

## Attributes

The following attributes are available for this component:

| Name                     | Type    | Default      | Description                                                                                  |
| ------------------------ | ------- | ------------ | -------------------------------------------------------------------------------------------- |
| `today`                  | Boolean | false        | Automatically sets today as the active date.                                                 |
| `jumpable`               | Boolean | false        | Enables month dropdown and year input for quick date navigation.                             |
| `starts-with`            | Number  | 0 (Sunday)   | Sets the starting day of the week. 0 for Sunday, 1 for Monday.                               |
| `disabled-dates`         | String  |              | Comma-separated list of dates to disable. Dates must be in format YYYY-MM-DD.                |
| `marked-dates`           | String  |              | Comma-separated list of dates to mark with indicator. Dates must be in format YYYY-MM-DD.    |
| `view-date`              | String  | Current date | Sets the initial view date of the calendar. Must be in format YYYY-MM-DD.                    |
| `min`                    | String  |              | Sets the minimum selectable date (inclusive). Must be in format YYYY-MM-DD.                  |
| `max`                    | String  |              | Sets the maximum selectable date (exclusive). Must be in format YYYY-MM-DD.                  |
| `value`                  | String  |              | Sets the selected date value. Must be in format YYYY-MM-DD. Takes precedence over `today`.   |
| `weekday-format`         | String  | short        | Format for weekday labels: `long`, `short`, or `narrow`.                                     |
| `lang`                   | String  | en-us        | Locale string for date formatting (e.g., "en-US", "fr-FR", "de-DE").                         |
| `name`                   | String  |              | Name attribute for the hidden input field, enabling form submission.                         |
| `disabled`               | Boolean | false        | Disables the entire calendar, preventing user interaction.                                   |
| `required`               | Boolean | false        | Marks the calendar as required for form validation.                                          |
| `placeholder`            | String  |              | Placeholder text (used in parent components like input-date).                                |
| `cls`                    | String  |              | Custom CSS classes. Can be a simple string or JSON object for targeting specific elements.   |
| `stl`                    | String  |              | Custom inline styles. Can be a simple string or JSON object for targeting specific elements. |
| `i18n`                   | String  |              | Internationalization strings as JSON object or via configuration script.                     |
| `force-prevent-rerender` | Boolean | false        | Prevents component rerendering (useful for HTMX or SPA scenarios).                           |

## Events

The Calendar component triggers the following event:

| Name                 | Description                                                                    |
| -------------------- | ------------------------------------------------------------------------------ |
| `uk-calendar:change` | Fired when the selected date changes. Event detail contains `{value: string}`. |