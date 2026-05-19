# Input PIN

## Usage

The Input PIN component is a web component built from scratch to allow users to input a sequence of one-character alphanumeric inputs. This is particularly useful in scenarios such as:

- Entering a verification code sent via SMS or email
- Authenticating with a two-factor authentication system
- Creating a secure password or passphrase

To get started, simply use the `<uk-input-pin>` markup in your HTML code.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-pin></uk-input-pin>
</div>
```

## Capturing values

There are several ways to capture values from the `<uk-input-pin>` component. The simplest approach is to add a `name` attribute to the component. When you do this, a hidden input field with the specified name will be automatically generated, allowing you to easily capture the selected value on your server.

```html
<uk-input-pin name="pin"></uk-input-pin>
```

## Customize length

By default, the Input PIN component is set to accept 6 characters. However, you can easily customize this by adding the `length` attribute to the `<uk-input-pin>` element. Simply specify the desired length as a numerical value, and the component will automatically adjust to accommodate the specified number of inputs.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-pin length="4"></uk-input-pin>
</div>
```

## Separated input

By default, the input fields in the Input PIN component are displayed adjacent to each other. To add visual separation between each input, simply add the `.uk-input-pin-separated` class to the `cls` attribute. This will add gaps between each input, making it easier for users to distinguish between individual characters.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-pin cls="uk-input-pin uk-input-pin-separated"></uk-input-pin>
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
  <uk-input-pin cls="uk-input-pin uk-form-xsmall"></uk-input-pin>
</div>

<div
  class="mt [h]"
  style="--mt: 4; --h: calc(var(--uk-global-font-size) * 2.25)"
>
  <uk-input-pin cls="uk-input-pin uk-form-small"></uk-input-pin>
</div>

<div
  class="mt [h]"
  style="--mt: 4; --h: calc(var(--uk-global-font-size) * 2.75)"
>
  <uk-input-pin cls="uk-input-pin uk-form-medium"></uk-input-pin>
</div>

<div class="mt [h]" style="--mt: 4; --h: calc(var(--uk-global-font-size) * 3)">
  <uk-input-pin cls="uk-input-pin uk-form-large"></uk-input-pin>
</div>
```

## Disable input

To prevent user input, add the `disabled` attribute to the `<uk-input-pin>` element. This will disable all input fields, making it impossible for users to enter or modify the PIN sequence.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-pin disabled></uk-input-pin>
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
    OTP
  </label>
  <div
    class="uk-form-controls [h]"
    style="--h: calc(var(--uk-global-font-size) * 2.5)"
  >
    <uk-input-pin cls="uk-input-pin uk-form-danger"></uk-input-pin>
  </div>
  <p class="uk-form-help color" style="--color: var(--uk-danger-f)">
    This field is required.
  </p>
</div>
```

## Internationalization

The Input PIN component supports internationalization through multiple methods with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="uk-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-pin
    length="6"
    i18n='{"label": "Código de verificación", "description": "Ingrese el código de {length} dígitos", "complete": "Entrada de PIN completada"}'
  >
  </uk-input-pin>
</div>
```

### Using a configuration script

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-pin length="6">
    <script type="application/json" data-fn="config">
      {
        "i18n": {
          "label": "Code de vérification",
          "description": "Entrez le code à {length} chiffres",
          "field-label": "Chiffre {n} sur {total}",
          "complete": "Saisie du PIN terminée"
        }
      }
    </script>
  </uk-input-pin>
</div>
```

### Using global i18n

Place this in your document `<head>` or before any input-pin components:

```html
<script id="uk-i18n" type="application/json">
  {
    "uk-input-pin": {
      "label": "Bestätigungscode",
      "description": "Geben Sie den {length}-stelligen Code ein",
      "field-label": "Ziffer {n} von {total}",
      "loaded": "PIN-Eingabe bereit",
      "complete": "PIN-Eingabe abgeschlossen",
      "field-filled": "Feld {n} ausgefüllt",
      "invalid-character": "Ungültiges Zeichen eingegeben"
    }
  }
</script>
```

### Available i18n options

| Key                 | Default                       | Description                                                                      |
| ------------------- | ----------------------------- | -------------------------------------------------------------------------------- |
| `label`             | PIN Code                      | Main label for the PIN input group                                               |
| `description`       | Enter {'{length}'}-digit code | Description text (supports {'{length}'} placeholder)                             |
| `field-label`       | Digit {'{n}'} of {'{total}'}  | ARIA label for individual fields (supports {'{n}'}, {'{total}'} placeholders)    |
| `loaded`            | PIN input ready               | Screen reader announcement when component loads                                  |
| `complete`          | PIN entry complete            | Screen reader announcement when all fields are filled                            |
| `field-filled`      | Field {'{n}'} filled          | Screen reader announcement when a field is filled (supports {'{n}'} placeholder) |
| `invalid-character` | Invalid character entered     | Screen reader announcement for invalid input                                     |

## Custom classes

The Input PIN component supports custom CSS classes through the `cls` attribute. This allows you to style specific elements within the PIN input without modifying the component's internal structure.

### Using simple string format

Apply a class to the default element (host-inner):

```html
<uk-input-pin cls="my-pin-input"></uk-input-pin>
```

### Using JSON object format

Target specific elements within the input pin:

```html
<uk-input-pin
  cls='{
    "host-inner": "pin-container",
    "wrapper": "uk-input-pin uk-input-pin-separated",
    "input": "uk-input uk-form-large",
    "label": "pin-label",
    "description": "pin-desc"
  }'
>
</uk-input-pin>
```

### Using configuration script

```html
<uk-input-pin>
  <script type="application/json" data-fn="config">
    {
      "cls": {
        "wrapper": "uk-input-pin uk-input-pin-separated",
        "input": "uk-input"
      }
    }
  </script>
</uk-input-pin>
```

### Available cls targets

| Target        | Description                                          |
| ------------- | ---------------------------------------------------- |
| `host-inner`  | The main container div                               |
| `wrapper`     | The div wrapping all input fields                    |
| `input`       | Individual input fields                              |
| `label`       | The label element (visually hidden by default)       |
| `description` | The description element (visually hidden by default) |

## Custom inline styles

The Input PIN component supports custom inline styles through the `stl` attribute. This allows you to apply specific CSS styles to individual elements within the PIN input.

### Using simple string format

Apply styles to the default element (host-inner):

```html
<uk-input-pin stl="margin\: 2rem 0;"></uk-input-pin>
```

### Using JSON object format

Target specific elements with custom styles:

```html
<uk-input-pin
  stl='{
    "container": "margin: 2rem 0;",
    "wrapper": "gap: 1rem; display: flex;",
    "input": "width: 50px; height: 60px; font-size: 24px; text-align: center; border: 2px solid #ddd; border-radius: 8px;",
    "label": "font-weight: 600; font-size: 1.125rem;",
    "description": "color: #666; font-size: 0.875rem;"
  }'
>
</uk-input-pin>
```

### Using configuration script

```html
<uk-input-pin>
  <script type="application/json" data-fn="config">
    {
      "stl": {
        "wrapper": "gap: 0.75rem;",
        "input": "width: 45px; height: 55px;"
      }
    }
  </script>
</uk-input-pin>
```

### Available stl targets

The `stl` attribute supports the same targets as the `cls` attribute. See the [Available cls targets](#available-cls-targets) table above for a complete list of targetable elements.

## Keyboard navigation

The Input PIN component provides comprehensive keyboard support:

| Key            | Action                                                   |
| -------------- | -------------------------------------------------------- |
| Type character | Auto-advances to next field                              |
| Backspace      | Deletes character and moves to previous field (if empty) |
| Delete         | Moves to next field (if current is empty)                |
| Arrow Left     | Move to previous field                                   |
| Arrow Right    | Move to next field                                       |
| Home           | Jump to first field                                      |
| End            | Jump to last filled field                                |
| Paste (Ctrl+V) | Distributes pasted content across fields                 |

## Paste support

The component supports pasting complete PIN codes. When a user pastes text:

- Content is automatically distributed across input fields
- Text is trimmed to the PIN length
- Pattern validation is applied (if configured)
- Focus moves to the next empty field or blurs if complete
- Invalid pastes are rejected with screen reader announcement

## Preventing layout shift

When loading Web Components, there may be a brief delay before the content is fully rendered. This can result in a flash of unstyled content or unprocessed templates. To mitigate this issue, consider setting a predefined height on the parent element to prevent layout shift and ensure a smooth user experience.

```html
<div class="[h]" style="--h: calc(var(--uk-global-font-size) * 2.5)">
  <uk-input-pin>...</uk-input-pin>
</div>
```

## Attributes

The following attributes are available for this component:

| Name                     | Type    | Default | Description                                                                       |
| ------------------------ | ------- | ------- | --------------------------------------------------------------------------------- |
| `autofocus`              | Boolean | false   | Automatically focuses on the first input field when the component is rendered     |
| `length`                 | Number  | 6       | Number of PIN digits/characters to collect                                        |
| `input-mode`             | String  | numeric | Input mode for mobile keyboards: `numeric` or `text`                              |
| `pattern`                | String  |         | Pattern for input validation (e.g., `[0-9]` for digits only)                      |
| `show-labels`            | Boolean | false   | Whether to show labels and descriptions visually (default: hidden but accessible) |
| `name`                   | String  |         | Name attribute for the hidden input field, enabling form submission               |
| `disabled`               | Boolean | false   | Disables all input fields, making the entire component read-only                  |
| `required`               | Boolean | false   | Marks the PIN input as required for form validation                               |
| `value`                  | String  |         | Pre-populated PIN value (validated against pattern if provided)                   |
| `cls`                    | String  |         | Custom CSS classes. Can be simple string or JSON object for targeting elements    |
| `stl`                    | String  |         | Custom inline styles. Can be simple string or JSON object for targeting elements  |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script           |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios)                 |

## Events

The Input PIN component triggers the following events:

| Name                    | Description                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| `uk-input-pin:change`   | Fired when the PIN value changes. Event detail contains `{value: string}`.     |
| `uk-input-pin:complete` | Fired when all PIN fields are filled. Event detail contains `{value: string}`. |