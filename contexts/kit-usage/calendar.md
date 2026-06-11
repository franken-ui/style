# Calendar

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

## Usage

You can build a calendar manually using server-side rendering with specific classes, or use the custom web component `<uk-calendar>`.

### Manual Server-Side Rendering

| Class | Description |
| --- | --- |
| `uk-cal` | The calendar wrapper |
| `uk-cal-oom` | For dates that are out-of-month |
| `uk-active` | To show the active date |
| `uk-disabled` | To disable a date (add `disabled` attribute to the button for full disablement) |
| `uk-cal-marked` | To add an indicator for "marked dates" (dates with events) |
| `uk-cal-divider` | To add a divider between calendar weeks. |

```html
<div class="uk-cal uk-cal-divider">
  <table>
    <thead>
      <tr>
        <th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="uk-cal-oom"><button>31</button></td>
        <td class="uk-active"><button>1</button></td>
        <td class="uk-disabled"><button disabled>2</button></td>
        <td class="uk-cal-marked"><button>3</button></td>
        <td><button>4</button></td>
        <td><button>5</button></td>
        <td><button>6</button></td>
      </tr>
    </tbody>
  </table>
</div>

```

### Web Component Configuration

The `<uk-calendar>` component has multiple attributes to configure its behavior. You can combine them as needed. All date formats must be `YYYY-MM-DD`.

```html
<uk-calendar
  today
  jumpable
  starts-with="1"
  view-date="2023-06-01"
  min="2023-01-01"
  max="2023-12-31"
  disabled-dates="2023-06-15,2023-06-16"
  marked-dates="2023-06-20"
  value="2023-06-10"
  name="calendar_input"
></uk-calendar>

```

* **`today`**: Automatically highlights the current day.
* **`jumpable`**: Adds dropdowns to jump between months and years.
* **`starts-with="1"`**: Starts the week on Monday (`0` is Sunday).
* **`view-date`**: The initial month/year displayed.
* **`min` / `max**`: Restricts selectable date range.
* **`disabled-dates` / `marked-dates**`: Comma-separated list of dates.
* **`value`**: Sets the currently selected date (overrides `view-date` and `today`).
* **`name`**: Generates a hidden input field for form submission capturing the selected value.

## Internationalization (i18n)

Priority order for i18n configurations:

1. Component-level (via `i18n` attribute or `<script type="application/json" data-fn="config">`)
2. Global component namespace (`<script id="uk-i18n">`)
3. Default values

### Using global i18n

Place this in `<head>` or before components:

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

## Custom Classes & Styles

Use the `cls` and `stl` attributes to target inner elements of the web component. You can pass a string (targets `host-inner`) or a JSON object/config script to target specific elements.

```html
<uk-calendar cls="my-calendar-wrapper" stl="background: #f0f0f0"></uk-calendar>

<uk-calendar
  cls='{
    "header": "custom-header",
    "day-button": "custom-day-btn"
  }'
  stl='{
    "button-selected": "background: #1e87f0; color: white;"
  }'
></uk-calendar>

```

### Available Targets (`cls` and `stl`)

| Target | Description | Target | Description |
| --- | --- | --- | --- |
| `host-inner` | Main wrapper element | `day` | Individual day cell |
| `header` | Header (nav + title) | `day-button` | Day button element |
| `previous-button` | Prev nav button | `jumper-month` | Month jumper wrapper |
| `next-button` | Next nav button | `jumper-year` | Year jumper wrapper |
| `title` | Title (month/year) | `jumper-button` | Jumper nav buttons |
| `jumper` | Jumper container | `day-outside-month` | Cell outside current month |
| `month-select` | Month dropdown | `day-selected` | Selected day cell |
| `year-input` | Year input field | `day-today` | Today's day cell |
| `grid` | Grid table element | `day-marked` | Marked day cells |
| `weekdays` | Weekdays header row | `button-outside-month` | Button outside current month |
| `weekday` | Individual weekday cell | `button-selected` | Selected day button |
| `week` | Individual week row | `button-today` | Today's day button |
|  |  | `button-marked` | Marked day buttons |

## Custom Icons

Override the default icons by providing a `<template data-fn="icons">`.
Available keys: `chevron-left`, `chevron-right`.

```html
<uk-calendar>
  <template data-fn="icons">
    <svg data-key="chevron-left" viewBox="0 0 16 16">...</svg>
    <svg data-key="chevron-right" viewBox="0 0 16 16">...</svg>
  </template>
</uk-calendar>

```

## Component Options

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `today` | Boolean | `false` | Highlights current day. |
| `jumpable` | Boolean | `false` | Enables month dropdown & year input. |
| `starts-with` | Number | `0` | Starting day (0=Sunday, 1=Monday). |
| `disabled-dates` | String |  | Comma-separated `YYYY-MM-DD`. |
| `marked-dates` | String |  | Comma-separated `YYYY-MM-DD`. |
| `view-date` | String | Current | Initial month/year displayed. |
| `min` / `max` | String |  | Min/Max selectable dates. |
| `value` | String |  | Selected date. Overrides `today`. |
| `weekday-format` | String | `short` | Weekday label format (`long`, `short`, `narrow`). |
| `lang` | String | `en-us` | Locale string (e.g., `fr-FR`). |
| `name` | String |  | Creates hidden input for forms. |
| `disabled` | Boolean | `false` | Disables interaction. |
| `required` | Boolean | `false` | Marks required for form validation. |
| `placeholder` | String |  | Placeholder text for parent components. |
| `cls` / `stl` | String |  | Custom CSS classes or styles. |
| `i18n` | String |  | Internationalization strings. |
| `force-prevent-rerender` | Boolean | `false` | Prevents rerendering (HTMX/SPA). |

## Events

| Name | Description |
| --- | --- |
| `uk-calendar:change` | Fired on date change. Detail contains `{value: string}`. |