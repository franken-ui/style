# Input PIN

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


## Usage

`<uk-input-pin>` is a web component for collecting a sequence of single-character alphanumeric inputs (OTP, 2FA codes, PINs, etc.).

Wrap it in a fixed-height container to prevent layout shift during hydration:

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-pin name="pin"></uk-input-pin>
</div>
```

Adding `name` auto-generates a hidden input for form submission.

## Length

Default is 6. Set `length` to any number:

```html
<uk-input-pin length="4"></uk-input-pin>
```

## Separated Input

Add `.uk-input-pin-separated` via `cls` to add gaps between fields:

```html
<uk-input-pin cls="uk-input-pin uk-input-pin-separated"></uk-input-pin>
```

## Size Modifiers

Pass via `cls`. Options: `.uk-form-xsmall`, `.uk-form-small`, `.uk-form-medium`, `.uk-form-large`

```html
<!-- Replace uk-form-xsmall with: uk-form-small, uk-form-medium, uk-form-large -->
<!-- Adjust --h accordingly: 2, 2.25, 2.75, 3 respectively -->
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2)">
  <uk-input-pin cls="uk-input-pin uk-form-xsmall"></uk-input-pin>
</div>
```

## Disable Input

```html
<uk-input-pin disabled></uk-input-pin>
```

## Error State

Add `.uk-form-danger` via `cls`:

```html
<div class="space-y" style="--space-y: 2">
  <label class="uk-form-label color display-block" style="--color: var(--uk-danger-f)">OTP</label>
  <div class="uk-form-controls [h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
    <uk-input-pin cls="uk-input-pin uk-form-danger"></uk-input-pin>
  </div>
  <p class="uk-form-help color" style="--color: var(--uk-danger-f)">This field is required.</p>
</div>
```

## Internationalization

Priority order: component-level `i18n` attribute/script → global `<script id="uk-i18n">` → defaults.

```html
<!-- Via i18n attribute -->
<uk-input-pin i18n='{"label": "Verification code", "description": "Enter {length}-digit code", "complete": "PIN entry complete"}'></uk-input-pin>

<!-- Via config script (inside component) -->
<uk-input-pin length="6">
  <script type="application/json" data-fn="config">
    {"i18n": {"label": "Code de vérification", "description": "Entrez le code à {length} chiffres", "field-label": "Chiffre {n} sur {total}", "complete": "Saisie du PIN terminée"}}
  </script>
</uk-input-pin>

<!-- Via global script (in <head> or before components) -->
<script id="uk-i18n" type="application/json">
  {"uk-input-pin": {"label": "Bestätigungscode", "description": "Geben Sie den {length}-stelligen Code ein", "field-label": "Ziffer {n} von {total}", "loaded": "PIN-Eingabe bereit", "complete": "PIN-Eingabe abgeschlossen", "field-filled": "Feld {n} ausgefüllt", "invalid-character": "Ungültiges Zeichen eingegeben"}}
</script>
```

### i18n Keys

| Key | Default | Description |
| --- | --- | --- |
| `label` | PIN Code | Label for the PIN group |
| `description` | Enter {length}-digit code | Supports `{length}` placeholder |
| `field-label` | Digit {n} of {total} | ARIA label per field; supports `{n}`, `{total}` |
| `loaded` | PIN input ready | Screen reader on load |
| `complete` | PIN entry complete | Screen reader when all fields filled |
| `field-filled` | Field {n} filled | Screen reader per field; supports `{n}` |
| `invalid-character` | Invalid character entered | Screen reader for invalid input |

## Custom Classes (`cls`)

Simple string targets `host-inner`. JSON object targets specific elements:

```html
<!-- Simple -->
<uk-input-pin cls="my-pin-input"></uk-input-pin>

<!-- JSON -->
<uk-input-pin cls='{"host-inner": "pin-container", "wrapper": "uk-input-pin uk-input-pin-separated", "input": "uk-input uk-form-large", "label": "pin-label", "description": "pin-desc"}'></uk-input-pin>

<!-- Config script -->
<uk-input-pin>
  <script type="application/json" data-fn="config">
    {"cls": {"wrapper": "uk-input-pin uk-input-pin-separated", "input": "uk-input"}}
  </script>
</uk-input-pin>
```

### cls/stl Targets

| Target | Description |
| --- | --- |
| `host-inner` | Main container div |
| `wrapper` | Div wrapping all input fields |
| `input` | Individual input fields |
| `label` | Label element (visually hidden by default) |
| `description` | Description element (visually hidden by default) |

## Custom Inline Styles (`stl`)

Same format and targets as `cls`:

```html
<!-- Simple -->
<uk-input-pin stl="margin\: 2rem 0;"></uk-input-pin>

<!-- JSON -->
<uk-input-pin stl='{"wrapper": "gap: 1rem; display: flex;", "input": "width: 50px; height: 60px; font-size: 24px; text-align: center; border: 2px solid #ddd; border-radius: 8px;"}'></uk-input-pin>
```

## Keyboard Navigation

| Key | Action |
| --- | --- |
| Type character | Auto-advances to next field |
| Backspace | Deletes and moves to previous field (if empty) |
| Delete | Moves to next field (if current empty) |
| Arrow Left/Right | Move between fields |
| Home / End | Jump to first / last filled field |
| Paste (Ctrl+V) | Distributes content across fields; trims to length; validates pattern; rejects invalid |

## Attributes

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `autofocus` | Boolean | false | Focus first field on render |
| `length` | Number | 6 | Number of PIN fields |
| `input-mode` | String | numeric | Mobile keyboard mode: `numeric` or `text` |
| `pattern` | String | | Validation pattern (e.g. `[0-9]`) |
| `show-labels` | Boolean | false | Show label/description visually (default: accessible but hidden) |
| `name` | String | | Generates hidden input for form submission |
| `disabled` | Boolean | false | Makes all fields read-only |
| `required` | Boolean | false | Marks as required for form validation |
| `value` | String | | Pre-populated value (validated against pattern) |
| `cls` | String | | Custom classes — simple string or JSON object |
| `stl` | String | | Custom inline styles — simple string or JSON object |
| `i18n` | String | | i18n strings — JSON object or config script |
| `force-prevent-rerender` | Boolean | false | Prevents rerender (useful for HTMX/SPA) |

## Events

| Name | Description |
| --- | --- |
| `uk-input-pin:change` | Value changed. Detail: `{value: string}` |
| `uk-input-pin:complete` | All fields filled. Detail: `{value: string}` |