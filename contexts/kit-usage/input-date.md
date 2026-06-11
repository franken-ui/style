# Input Date

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/drop.md

## Usage & Configuration

The `<uk-input-date>` is a custom web component. Use the `name` attribute to generate a hidden input for form submission. Wrap in a fixed-height container to prevent layout shift (see [Preventing Layout Shift](#preventing-layout-shift)).

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-date name="date" cls="uk-input-fake justify-between"></uk-input-date>
</div>

```

### Prepopulating Values

Set a default using the `value` attribute (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or automatically set the current date/time with the `today` attribute. Add `with-time` to enable time selection.

```html
<uk-input-date value="2023-06-30T20:00" with-time></uk-input-date>

<uk-input-date today with-time></uk-input-date>

```

### Dropdown Positioning

Since this uses the Drop component internally, you can pass Drop options via the `drop` attribute.

```html
<uk-input-date drop="mode: click; pos: right-center"></uk-input-date>

```

### Size Modifiers & States

Size options (add to `cls`): `.uk-form-xsmall`, `.uk-form-small`, `.uk-form-medium`, `.uk-form-large`.
States: `disabled` attribute, or `.uk-form-danger` (in `cls`) for errors.

```html
<!-- Replace uk-form-xsmall with: uk-form-small, uk-form-medium, uk-form-large -->
<!-- Adjust --h accordingly: 2, 2.25, 2.75, 3 respectively -->
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2)">
  <uk-input-date cls="uk-input-fake uk-form-small justify-between" disabled></uk-input-date>
</div>

```

## Customize Display Format

Pass tokens to `display-format` to format the selected date display. Example: `display-format="YYYY/MM/DD"`.

| Input | Example | Description | Input | Example | Description |
| --- | --- | --- | --- | --- | --- |
| `YY` | 01 | Two-digit year | `D` / `DD` | 1-31 / 01-31 | Day of month |
| `YYYY` | 2001 | Four-digit year | `H` / `HH` | 0-23 / 00-23 | Hours (24h) |
| `M`/`MM` | 1-12/01-12 | Month | `h` / `hh` | 1-12 / 01-12 | Hours (12h) |
| `MMM` | Jan-Dec | Abbreviated month | `m` / `mm` | 0-59 / 00-59 | Minutes |
| `MMMM` | January | Full month name | `A` / `a` | AM PM / am pm | Meridiem |
| `ddd` | Mon-Sun | Abbreviated weekday | `Do` | 1st - 31st | Day with ordinal |
| `DDDD` | Monday | Full weekday name |  |  |  |

## Internationalization (i18n)

Define strings via the `i18n` attribute, a local `<script>` config, or a global namespace. It inherits properties from the internal Calendar and Input Time components.

```html
<uk-input-date i18n="button-label: Pick a date; placeholder: Choose date;"></uk-input-date>

<uk-input-date lang="de-DE">
  <script type="application/json" data-fn="config">
    { "i18n": { "button-label": "Datum auswählen", "prev-month": "Vorheriger Monat" } }
  </script>
</uk-input-date>

<script id="uk-i18n" type="application/json">
  { "uk-input-date": { "button-label": "Select date", "placeholder": "Select a date" } }
</script>

```

### i18n Keys

* **Input Date:** `button-label`, `dialog-label`, `selected`, `placeholder`, `placeholder-with-time`
* **Calendar:** `prev-month`, `next-month`, `prev-year`, `next-year`, `select-month`, `select-year`
* **Input Time (if `with-time`):** `am`, `pm`, `hour-label`, `minute-label`, `meridiem-label`, `time-label`, `hour-placeholder`, `minute-placeholder`

## Custom Classes & Inline Styles (`cls` / `stl` targets)

You can pass a string to style the main button or a JSON object to target specific elements.

```html
<uk-input-date cls='{"button": "uk-input uk-form-large", "dropdown": "date-dropdown"}'></uk-input-date>

```

| Target | Description | Target | Description |
| --- | --- | --- | --- |
| `container` | Main wrapper container | `dropdown` | Dropdown holding calendar/time |
| `button` | Clickable trigger button | `calendar` | Calendar component inside dropdown |
| `button-text` | Text span inside button | `time-wrapper` | Wrapper for time input (if `with-time`) |
| `icon` | Icon element inside button | `time` | Time input component (if `with-time`) |

## Custom Icons

Override the default calendar icon via a template:

```html
<uk-input-date>
  <template data-fn="icons">
    <svg data-key="calendar" viewBox="0 0 16 16">...</svg>
  </template>
</uk-input-date>

```

## Attributes

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `today` | Boolean | `false` | Automatically sets today as initial selected date. |
| `jumpable` | Boolean | `false` | Enables month dropdown and year input for navigation. |
| `starts-with` | Number | `0` | Starting day (0=Sunday, 1=Monday). |
| `disabled-dates` / `marked-dates` | String |  | Comma-separated `YYYY-MM-DD` dates to disable/mark. |
| `view-date` | String | Current | Initial view date (`YYYY-MM-DD`). |
| `min` / `max` | String |  | Min/Max selectable date (`YYYY-MM-DD`). |
| `weekday-format` | String | `short` | Weekday labels (`long`, `short`, `narrow`). |
| `lang` | String | `en-us` | Locale string (e.g., `en-US`, `de-DE`). |
| `display-format` | String | `MMMM DD, YYYY` | Selected date display format. |
| `with-time` | Boolean | `false` | Enables time selection. |
| `clock` | String | `12h` | Clock format (`12h` or `24h`), used if `with-time` is enabled. |
| `require-time` | Boolean | `false` | Makes time required if `with-time` is enabled. |
| `drop` | String | `mode: click...` | Dropdown behavior options. |
| `name` | String |  | Hidden input name for form submission. |
| `disabled` / `required` | Boolean | `false` | Disables input / Marks as required. |
| `placeholder` | String |  | Custom placeholder text. |
| `value` | String |  | Pre-populated value (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`). |
| `cls` / `stl` | String |  | Custom CSS classes / inline styles. |
| `i18n` | String |  | Internationalization strings. |
| `force-prevent-rerender` | Boolean | `false` | Prevents rerendering (HTMX/SPA scenarios). |

## Events

| Name | Description |
| --- | --- |
| `uk-input-date:change` | Fired when value changes. Event detail contains `{value: string}`. |