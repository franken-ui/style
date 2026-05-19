# Input Range

## Usage

Input Range is a web component built from scratch to enable users to easily integrate customizable range sliders. With built-in support for keyboard navigation, ARIA attributes for accessibility, and a minimalist design.

To get started, simply use the `<uk-input-range>` markup in your HTML code.

```html
<div class="h" style="--h: 10">
  <uk-input-range></uk-input-range>
</div>
```

## Dual range

To enable dual range functionality (allowing you to select a range with both a minimum and maximum value), simply add the `multiple` attribute to your `<uk-input-range>` element. When this attribute is present, the component renders two knobs: one for the minimum value and one for the maximum value.

```html
<div class="h" style="--h: 10">
  <uk-input-range multiple></uk-input-range>
</div>
```

## Capturing values

There are several ways to capture values from the `<uk-input-range>` component. The simplest approach is to add a `name` attribute to the component. When you do this, a hidden input field with the specified name will be automatically generated, allowing you to easily capture the selected value on your server.

<span class="uk-label uk-label-primary">Note</span> When using the dual knob
mode by including the `multiple` attribute, the component renders two hidden
input fields—one for the lower value and one for the upper value. In this case,
the name attribute is automatically appended with `[]` (e.g., `name="range[]"`)
to indicate an array of values. This makes it straightforward to process both
values on the server side.

```html
<uk-input-range name="range"></uk-input-range>
```

## Prepopulating values

Prepopulating the Input Range component is straightforward. Simply pass a value (or values) via the `value` attribute when declaring the component in your HTML. This is particularly useful when you need to display existing data that users can adjust or confirm.

<span class="uk-label uk-label-primary">Note</span> When using the dual knob
mode, supply two values separated by a comma. The first value sets the lower
bound, and the second value sets the upper bound.

```html
<div class="h" style="--h: 10">
  <uk-input-range value="75"></uk-input-range>
</div>

<div class="h mt" style="--h: 10; --mt: 10">
  <uk-input-range multiple value="20,80"></uk-input-range>
</div>
```

## Labeling

The `label` attribute allows you to display a label on each knob of the slider. This label can be used to show the current numeric value, or a custom text concatenated with the value.

```html
<div class="h" style="--h: 10">
  <uk-input-range label></uk-input-range>
</div>

<div class="h mt" style="--h: 10; --mt: 10">
  <uk-input-range label="kg"></uk-input-range>
</div>
```

<span class="uk-label uk-label-primary">Note</span> If you simply include the
label attribute (or set it to true), the slider will display only the numeric
value. Otherwise, label will be concatenated.

### Position

In addition to the `label`, you can control its position relative to the knob using the `label-position` attribute. This attribute accepts two values:

- `top` (default): The label appears above the knob.
- `bottom`: The label appears below the knob.

```html
<div class="h" style="--h: 10">
  <uk-input-range label="kg"></uk-input-range>
</div>

<div class="h mt" style="--h: 10; --mt: 10">
  <uk-input-range label="kg" label-position="bottom"></uk-input-range>
</div>
```

## Min and max

The `min` and `max` attributes define the range boundaries of the slider. They determine the lowest and highest possible values that can be selected.

```html
<div class="h" style="--h: 10">
  <uk-input-range min="50" max="75" label></uk-input-range>
</div>
```

## Step

The step attribute determines the interval at which the slider's value increments or decrements. This attribute mimics the behavior of the native HTML `<input type="range">`, ensuring that as you drag or use keyboard navigation, the value snaps to defined increments. For example, if the step is set to `0.5`, the slider will move in increments of `0.5` units, such as `0.0`, `0.5`, `1.0`, etc.

```html
<div class="h" style="--h: 10">
  <uk-input-range label step="0.5"></uk-input-range>
</div>

<div class="h mt" style="--h: 10; --mt: 10">
  <uk-input-range label multiple step="0.5"></uk-input-range>
</div>
```

## Disable input

To prevent user input, add the `disabled` attribute to the `<uk-input-range>` element. This will disable the component, making it impossible for users to enter or modify value.

```html
<div class="h" style="--h: 10">
  <uk-input-range disabled value="50"></uk-input-range>
</div>
```

## Preventing layout shift

When loading Web Components, there may be a brief delay before the content is fully rendered. This can result in a flash of unstyled content or unprocessed templates. To mitigate this issue, consider setting a predefined height on the parent element to prevent layout shift and ensure a smooth user experience.

```html
<div class="h" style="--h: 10">
    <uk-input-range name="range"></uk-input-range>
</div>
```

## Internationalization

The Input Range component supports internationalization through multiple methods with the following priority order (highest to lowest):

1. **Component-level i18n** (via `i18n` attribute or script tag)
2. **Global component-specific namespace** (via `<script id="uk-i18n">`)
3. **Default values**

### Using the i18n attribute

```html
<div class="h" style="--h: 10">
  <uk-input-range
    min="0"
    max="100"
    value="50"
    label
    i18n="aria-value-text: Valor: {value}; aria-label: Control deslizante; low-knob-label: Valor mínimo; high-knob-label: Valor máximo"
  >
  </uk-input-range>
</div>
```

### Using a configuration script

```html
<div class="h" style="--h: 10">
  <uk-input-range min="0" max="100" value="50" label>
    <script type="application/json" data-fn="config">
      {
        "i18n": {
          "aria-value-text": "Valeur: {value}",
          "aria-range-text": "Plage de {low} à {high}",
          "low-knob-label": "Valeur minimale",
          "high-knob-label": "Valeur maximale",
          "aria-label": "Curseur de plage"
        }
      }
    </script>
  </uk-input-range>
</div>
```

### Using global i18n

Place this in your document `<head>` or before any input-range components:

```html
<script id="uk-i18n" type="application/json">
  {
    "uk-input-range": {
      "aria-value-text": "Wert: {value}",
      "aria-range-text": "Bereich von {low} bis {high}",
      "low-knob-label": "Mindestwert",
      "high-knob-label": "Höchstwert",
      "aria-label": "Bereichsschieberegler"
    }
  }
</script>
```

### Available i18n options

| Key               | Default                            | Description                                                                     |
| ----------------- | ---------------------------------- | ------------------------------------------------------------------------------- |
| `aria-value-text` | Value: {'{value}'}                 | ARIA value text for single mode (supports {'{value}'} placeholder)              |
| `aria-range-text` | Range from {'{low}'} to {'{high}'} | ARIA value text for multiple mode (supports {'{low}'}, {'{high}'} placeholders) |
| `low-knob-label`  | Minimum value                      | ARIA label for the low/single knob                                              |
| `high-knob-label` | Maximum value                      | ARIA label for the high knob (multiple mode only)                               |
| `aria-label`      | Range slider                       | ARIA label for the component group                                              |

## Custom classes

The Input Range component supports custom CSS classes through the `cls` attribute. This allows you to style specific elements within the slider without modifying the component's internal structure.

### Using simple string format

Apply a class to the default element (host-inner):

```html
<uk-input-range cls="my-range-slider"></uk-input-range>
```

### Using JSON object format

Target specific elements within the input range:

```html
<uk-input-range
  cls='{
    "host-inner": "range-container",
    "runnable": "range-track",
    "fill": "range-fill",
    "knob": "range-knob",
    "knob-low": "low-knob",
    "knob-high": "high-knob",
    "knob-dragging": "dragging",
    "label": "value-label",
    "label-top": "label-above",
    "label-bottom": "label-below"
  }'
  min="0"
  max="100"
  value="50"
  label
>
</uk-input-range>
```

### Using configuration script

```html
<uk-input-range min="0" max="100" value="50" label>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "host-inner": "uk-input-range",
        "knob": "custom-knob",
        "fill": "custom-fill"
      }
    }
  </script>
</uk-input-range>
```

### Available cls targets

| Target          | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| `host-inner`    | The main container wrapper for the entire component                   |
| `runnable`      | The track/rail element that knobs slide along                         |
| `fill`          | The filled portion of the track (from start to knob or between knobs) |
| `knob`          | Base class for all knobs                                              |
| `knob-low`      | The low/single knob (overrides `knob` for this knob)                  |
| `knob-high`     | The high knob in multiple mode (overrides `knob`)                     |
| `knob-dragging` | Additional class applied to knob while being dragged                  |
| `label`         | Base class for value labels                                           |
| `label-top`     | Class applied when label-position="top"                               |
| `label-bottom`  | Class applied when label-position="bottom"                            |

## Custom inline styles

The Input Range component supports custom inline styles through the `stl` attribute. This allows you to apply specific CSS styles to individual elements within the slider.

### Using simple string format

Apply styles to the default element (host-inner):

```html
<uk-input-range stl="padding\: 2rem 0; margin\: 1rem 0;"></uk-input-range>
```

### Using JSON object format

Target specific elements with custom styles:

```html
<uk-input-range
  stl='{
    "host-inner": "position: relative; padding: 2rem 0;",
    "runnable": "height: 8px; background: #e0e0e0; border-radius: 4px;",
    "fill": "background: #1e87f0; height: 8px; border-radius: 4px;",
    "knob": "width: 24px; height: 24px; border-radius: 50%; background: white; border: 2px solid #1e87f0; box-shadow: 0 2px 4px rgba(0,0,0,0.2);",
    "label": "font-size: 14px; font-weight: 500; color: #333;"
  }'
  min="0"
  max="100"
  value="50"
  label
>
</uk-input-range>
```

### Using configuration script

```html
<uk-input-range min="0" max="100" value="50" label>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "host-inner": "padding: 1.5rem 0;",
        "knob": "width: 20px; height: 20px;"
      }
    }
  </script>
</uk-input-range>
```

### Available stl targets

The `stl` attribute supports the same targets as the `cls` attribute. See the [Available cls targets](#available-cls-targets) table above for a complete list of targetable elements.

## Attributes

The following attributes are available for this component:

| Name                     | Type           | Default | Description                                                                      |
| ------------------------ | -------------- | ------- | -------------------------------------------------------------------------------- |
| `multiple`               | Boolean        | false   | Enables dual-knob mode for selecting a value range                               |
| `min`                    | Number         | 0       | Minimum allowed value for the slider                                             |
| `max`                    | Number         | 100     | Maximum allowed value for the slider                                             |
| `step`                   | Number         | 1       | Step increment for value changes                                                 |
| `label`                  | String/Boolean | false   | Show value label on knob(s). Can be boolean (true/false) or custom text          |
| `label-position`         | String         | top     | Position of the label relative to knob: `top` or `bottom`                        |
| `aria-label`             | String         |         | Custom ARIA label for the component (overrides i18n default)                     |
| `name`                   | String         |         | Name attribute for hidden input(s), enabling form submission                     |
| `disabled`               | Boolean        | false   | Disables the entire component, preventing user interaction                       |
| `required`               | Boolean        | false   | Marks the input as required for form validation                                  |
| `value`                  | String         |         | Pre-set value (single) or comma-separated values (multiple mode)                 |
| `cls`                    | String         |         | Custom CSS classes. Can be simple string or JSON object for targeting elements   |
| `stl`                    | String         |         | Custom inline styles. Can be simple string or JSON object for targeting elements |
| `i18n`                   | String         |         | Internationalization strings as JSON object or via configuration script          |
| `force-prevent-rerender` | Boolean        | false   | Prevents component rerendering (useful for HTMX or SPA scenarios)                |

## Events

The Input Range component triggers the following event:

| Name                   | Description                                                                                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `uk-input-range:input` | Fired when the range value changes. Event detail contains `{value: string \| string[]}`. In single mode, value is a string. In multiple mode, value is an array of two strings. |