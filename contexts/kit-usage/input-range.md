# Input Range

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


## Usage

Use `<uk-input-range>` as a custom element. Wrap in a container with a predefined height to prevent layout shift during Web Component initialization.

```html
<!-- Single knob -->
<div class="h" style="--h: 10">
  <uk-input-range name="range" value="50" label></uk-input-range>
</div>

<!-- Dual knob: add multiple. Submits as name="range[]" with two hidden inputs -->
<div class="h" style="--h: 10">
  <uk-input-range multiple name="range" value="20,80" label></uk-input-range>
</div>
```

## Labels

`label` (boolean) shows the numeric value on each knob. Pass a string to append a unit suffix. Control position with `label-position="top"` (default) or `"bottom"`.

```html
<!-- Value only -->
<uk-input-range label></uk-input-range>

<!-- With unit suffix, label below knob -->
<uk-input-range label="kg" label-position="bottom"></uk-input-range>
```

## Min, Max, Step, Disabled

```html
<!-- Bounded range with step -->
<div class="h" style="--h: 10">
  <uk-input-range min="0" max="100" step="0.5" label></uk-input-range>
</div>

<!-- Disabled -->
<div class="h" style="--h: 10">
  <uk-input-range disabled value="50"></uk-input-range>
</div>
```

## Internationalization

Priority order (highest to lowest): component-level `i18n` attribute → component config script → global `<script id="uk-i18n">` → defaults.

```html
<!-- Via i18n attribute -->
<uk-input-range value="50" label
  i18n="aria-value-text: Value: {value}; aria-label: Range slider; low-knob-label: Min; high-knob-label: Max">
</uk-input-range>

<!-- Via config script (inside the element) -->
<uk-input-range value="50" label>
  <script type="application/json" data-fn="config">
    { "i18n": { "aria-value-text": "Valeur: {value}", "aria-label": "Curseur" } }
  </script>
</uk-input-range>

<!-- Via global script (in <head> or before any input-range) -->
<script id="uk-i18n" type="application/json">
  { "uk-input-range": { "aria-value-text": "Wert: {value}", "aria-label": "Bereichsschieberegler" } }
</script>
```

### i18n options

| Key | Default | Description |
| --- | --- | --- |
| `aria-value-text` | `Value: {value}` | ARIA text for single mode |
| `aria-range-text` | `Range from {low} to {high}` | ARIA text for multiple mode |
| `low-knob-label` | `Minimum value` | ARIA label for low/single knob |
| `high-knob-label` | `Maximum value` | ARIA label for high knob (multiple mode) |
| `aria-label` | `Range slider` | ARIA label for the component group |

## Custom Classes (`cls`) and Styles (`stl`)

Both `cls` and `stl` accept a plain string (targets `host-inner`) or a JSON object to target specific elements. `stl` supports the same targets as `cls`.

```html
<!-- cls: simple string -->
<uk-input-range cls="my-slider"></uk-input-range>

<!-- stl: JSON, targets specific parts -->
<uk-input-range value="50" label
  stl='{
    "runnable": "height: 8px; background: #e0e0e0;",
    "fill": "background: #1e87f0;",
    "knob": "width: 24px; height: 24px; border-radius: 50%;"
  }'>
</uk-input-range>

<!-- cls/stl via config script -->
<uk-input-range value="50" label>
  <script type="application/json" data-fn="config">
    { "cls": { "knob": "custom-knob" }, "stl": { "host-inner": "padding: 1.5rem 0;" } }
  </script>
</uk-input-range>
```

### Targetable elements (for both `cls` and `stl`)

| Target | Description |
| --- | --- |
| `host-inner` | Main container wrapper |
| `runnable` | Track/rail the knobs slide along |
| `fill` | Filled portion of the track |
| `knob` | Base class for all knobs |
| `knob-low` | Low/single knob (overrides `knob`) |
| `knob-high` | High knob in multiple mode (overrides `knob`) |
| `knob-dragging` | Applied to knob while dragging |
| `label` | Base class for value labels |
| `label-top` | Applied when `label-position="top"` |
| `label-bottom` | Applied when `label-position="bottom"` |

## Attributes

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `multiple` | Boolean | false | Dual-knob mode |
| `min` | Number | 0 | Minimum value |
| `max` | Number | 100 | Maximum value |
| `step` | Number | 1 | Value increment |
| `value` | String | — | Pre-set value; comma-separated for multiple mode |
| `label` | String/Boolean | false | Show label on knob(s); boolean = numeric only, string = appended suffix |
| `label-position` | String | `top` | `top` or `bottom` |
| `aria-label` | String | — | Overrides i18n default ARIA label |
| `name` | String | — | Name for hidden input(s); auto-appended with `[]` in multiple mode |
| `disabled` | Boolean | false | Disables interaction |
| `required` | Boolean | false | Marks input required for form validation |
| `cls` | String | — | Custom CSS classes (string or JSON object) |
| `stl` | String | — | Custom inline styles (string or JSON object) |
| `i18n` | String | — | i18n strings (semicolon-separated or JSON via config script) |
| `force-prevent-rerender` | Boolean | false | Prevents rerender (useful for HTMX/SPA) |

## Events

| Name | Description |
| --- | --- |
| `uk-input-range:input` | Fires on value change. Detail: `{ value: string }` (single) or `{ value: string[] }` (multiple). |