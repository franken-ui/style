# Input Time

## Usage

The Input Time component is a web component built from scratch to allow users to easily select time in a 12-hour format, while outputting the selected time in a 24-hour format. To get started, simply use the `<uk-input-time>` markup in your HTML code.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-time></uk-input-time>
</div>
```

## Capturing values

There are several ways to capture values from the `<uk-input-time>` component. The simplest approach is to add a `name` attribute to the component. When you do this, a hidden input field with the specified name will be automatically generated, allowing you to easily capture the selected value on your server.

```html
<uk-input-time name="time"></uk-input-time>
```

## Prepopulating values

To prepopulate the Input Time component with an existing value, simply pass the `value` attribute with a 24-hour time format. To prepopulate with current time, just use the `now` attribute and it will automatically set the current time as the default value.

```html
<uk-input-time now></uk-input-time>
```

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-time value="20:00"></uk-input-time>
</div>

<div
  class="[h] mt"
  style="--h: calc(var(--uk-global-font-size) * 2.5); --mt: 4"
>
  <uk-input-time now></uk-input-time>
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
  <uk-input-time cls="uk-input-time uk-form-xsmall"></uk-input-time>
</div>

<div
  class="mt [h]"
  style="--mt: 4; --h: calc(var(--uk-global-font-size) * 2.25)"
>
  <uk-input-time cls="uk-input-time uk-form-small"></uk-input-time>
</div>

<div
  class="mt [h]"
  style="--mt: 4; --h: calc(var(--uk-global-font-size) * 2.75)"
>
  <uk-input-time cls="uk-input-time uk-form-medium"></uk-input-time>
</div>

<div class="mt [h]" style="--mt: 4; --h: calc(var(--uk-global-font-size) * 3)">
  <uk-input-time cls="uk-input-time uk-form-large"></uk-input-time>
</div>
```

## Disable input

To prevent user input, add the `disabled` attribute to the `<uk-input-time>` element. This will disable all input fields, making it impossible for users to enter or modify time.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-time disabled></uk-input-time>
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
    Time
  </label>
  <div
    class="uk-form-controls [h]"
    style="--h: calc(var(--uk-global-font-size) * 2.5)"
  >
    <uk-input-time
      cls="host-inner: uk-input-time; input: uk-input uk-form-danger; meridiem-button: uk-input-fake uk-form-danger"
    ></uk-input-time>
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
  <uk-input-time>...</uk-input-time>
</div>
```

## Internationalization

The Input Time component supports internationalization through multiple methods with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="uk-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-time
    i18n="am: Morning; pm: Evening; hour-label: Hour; minute-label: Minute"
  ></uk-input-time>
</div>
```

### Using a configuration script

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-time>
    <script type="application/json" data-fn="config">
      {
        "i18n": {
          "am": "Vormittag",
          "pm": "Nachmittag",
          "hour-label": "Stunde",
          "minute-label": "Minute",
          "meridiem-label": "Tageszeit",
          "time-label": "Uhrzeit"
        }
      }
    </script>
  </uk-input-time>
</div>
```

### Using global i18n

Place this in your document `<head>` or before any input-time components:

```html
<script id="uk-i18n" type="application/json">
  {
    "uk-input-time": {
      "am": "AM",
      "pm": "PM",
      "hour-label": "Hour",
      "minute-label": "Minute",
      "meridiem-label": "AM/PM",
      "time-label": "Time",
      "hour-placeholder": "HH",
      "minute-placeholder": "MM",
      "invalid-time": "Invalid time format"
    }
  }
</script>
```

### Available i18n options

| Key                  | Default             | Description                             |
| -------------------- | ------------------- | --------------------------------------- |
| `am`                 | AM                  | Text for AM period (12-hour clock only) |
| `pm`                 | PM                  | Text for PM period (12-hour clock only) |
| `hour-label`         | Hour                | Aria-label for hour input field         |
| `minute-label`       | Minute              | Aria-label for minute input field       |
| `meridiem-label`     | AM/PM               | Aria-label for AM/PM toggle button      |
| `time-label`         | Time                | Aria-label for the time input group     |
| `hour-placeholder`   | HH                  | Placeholder text for hour input         |
| `minute-placeholder` | MM                  | Placeholder text for minute input       |
| `invalid-time`       | Invalid time format | Error message for invalid time format   |

## Custom classes

The Input Time component supports custom CSS classes through the `cls` attribute. This allows you to style specific elements within the time input without modifying the component's internal structure.

### Using simple string format

Apply a class to the default element (container):

```html
<uk-input-time cls="my-time-input"></uk-input-time>
```

### Using JSON object format

Target specific elements within the input time:

```html
<uk-input-time
  cls='{
    "container": "time-input-wrapper",
    "input": "uk-input uk-form-small",
    "hour-input": "hour-field",
    "minute-input": "minute-field",
    "separator": "time-separator",
    "meridiem-button": "am-pm-toggle uk-button",
    "button": "uk-button"
  }'
></uk-input-time>
```

### Using configuration script

```html
<uk-input-time>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "container": "uk-input-time",
        "input": "uk-input",
        "meridiem-button": "uk-input-fake"
      }
    }
  </script>
</uk-input-time>
```

### Available cls targets

| Target            | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `container`       | The main wrapper container for the entire component         |
| `input`           | Base class applied to both hour and minute inputs           |
| `hour-input`      | The hour input field (overrides `input` for hour field)     |
| `minute-input`    | The minute input field (overrides `input` for minute field) |
| `separator`       | The colon separator between hour and minute                 |
| `meridiem-button` | The AM/PM toggle button (12-hour clock only)                |
| `button`          | Base button class (fallback for meridiem-button)            |

## Custom inline styles

The Input Time component supports custom inline styles through the `stl` attribute. This allows you to apply specific CSS styles to individual elements within the time input.

### Using simple string format

Apply styles to the default element (container):

```html
<uk-input-time
  stl="display\: flex; gap\: 8px; align-items\: center;"
></uk-input-time>
```

### Using JSON object format

Target specific elements with custom styles:

```html
<uk-input-time
  stl='{
    "container": "display: flex; gap: 0.5rem;",
    "input": "width: 60px; text-align: center; font-size: 1rem;",
    "hour-input": "border: 2px solid #1e87f0;",
    "separator": "font-weight: bold; color: #666;",
    "meridiem-button": "min-width: 60px; padding: 0.5rem;"
  }'
></uk-input-time>
```

### Using configuration script

```html
<uk-input-time>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "container": "gap: 0.5rem;",
        "input": "font-size: 1.125rem;"
      }
    }
  </script>
</uk-input-time>
```

### Available stl targets

The `stl` attribute supports the same targets as the `cls` attribute. See the [Available cls targets](#available-cls-targets) table above for a complete list of targetable elements.

## Attributes

The following attributes are available for this component:

| Name                     | Type    | Default | Description                                                                                  |
| ------------------------ | ------- | ------- | -------------------------------------------------------------------------------------------- |
| `autofocus`              | Boolean | false   | Automatically focuses on the hour input field when the component is rendered.                |
| `now`                    | Boolean | false   | Automatically sets the current time as the default value.                                    |
| `clock`                  | String  | 12h     | Clock format: `12h` (with AM/PM) or `24h` (without AM/PM).                                   |
| `min`                    | String  |         | Minimum allowed time in HH:MM format.                                                        |
| `max`                    | String  |         | Maximum allowed time in HH:MM format.                                                        |
| `name`                   | String  |         | Name attribute for the hidden input field, enabling form submission.                         |
| `disabled`               | Boolean | false   | Disables all input fields, making the entire component read-only.                            |
| `required`               | Boolean | false   | Marks the time input as required for form validation.                                        |
| `value`                  | String  |         | Pre-populated time value in 24-hour format (HH:MM).                                          |
| `cls`                    | String  |         | Custom CSS classes. Can be a simple string or JSON object for targeting specific elements.   |
| `stl`                    | String  |         | Custom inline styles. Can be a simple string or JSON object for targeting specific elements. |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script.                     |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios).                           |

## Events

The Input Time component triggers the following event:

| Name                  | Description                                                                                   |
| --------------------- | --------------------------------------------------------------------------------------------- |
| `uk-input-time:input` | Fired when the time value changes. Event detail contains `{value: string}` in 24-hour format. |