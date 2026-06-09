# Button

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `gap`, `display-flex`, `flex-wrap`, `w`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload them:

- https://franken.style/contexts/kit-usage/dropdown.md
- https://franken.style/contexts/kit-usage/spinner.md

## Usage

Add `.uk-button` plus a style modifier to an `<a>` or `<button>`. Add `disabled` to disable.

```html
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <a class="uk-button uk-button-default" href="#">Link</a>
  <button class="uk-button uk-button-default">Button</button>
  <button class="uk-button uk-button-default" disabled>Disabled</button>
</div>
```

## Style Modifiers

Add one modifier alongside `.uk-button`. Options: `.uk-button-default`, `.uk-button-ghost`, `.uk-button-primary`, `.uk-button-secondary`, `.uk-button-success`, `.uk-button-warning`, `.uk-button-info`, `.uk-button-danger`, `.uk-button-text`

```html
<!-- Replace uk-button-primary with any modifier above -->
<div class="display-flex flex-wrap items-center gap" style="--gap: 2">
  <button class="uk-button uk-button-default">Default</button>
  <button class="uk-button uk-button-primary">Primary</button>
  <button class="uk-button uk-button-danger">Danger</button>
</div>
```

## Customization

Override CSS variables inline to create custom-colored buttons.

```html
<!-- Replace color values; same pattern applies for any brand color -->
<button class="uk-button" style="
  --uk-button-bg: var(--color-purple-500);
  --uk-button-color: white;
  --uk-button-border: var(--color-purple-500);
  --uk-button-hover-bg: var(--color-purple-600);
  --uk-button-hover-bg-o: 100%;
  --uk-button-hover-color: white;
">Custom Purple</button>
```

## Size Modifiers

| Class | Description |
| --- | --- |
| `.uk-button-xsmall` | Extra small. |
| `.uk-button-small` | Small. |
| *(none)* | Medium (default). |
| `.uk-button-large` | Large. |

```html
<!-- Replace uk-button-small with any size modifier; omit for default medium -->
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <button class="uk-button uk-button-default uk-button-small">Small</button>
  <button class="uk-button uk-button-primary uk-button-small">Small</button>
</div>
```

## Width Modifiers

Use Frankenstyle `w` utility or `w-full` to control button width.

```html
<div class="display-flex flex-col gap" style="--gap: 2">
  <button class="uk-button uk-button-default w" style="--w: 40">w-40</button>
  <button class="uk-button uk-button-primary w-full">Full width</button>
</div>
```

## Icon Button

Add `.uk-button-icon` for square icon-only buttons.

```html
<!-- Works with any uk-icon value -->
<div class="display-flex gap-x" style="--gap-x: 2">
  <button class="uk-button uk-button-default uk-button-icon"><uk-icon icon="copy"></uk-icon></button>
  <button class="uk-button uk-button-default uk-button-icon"><uk-icon icon="trash"></uk-icon></button>
</div>
```

## Group

Wrap buttons in a `<div class="uk-button-group">` — no extra markup needed.

```html
<!-- Replace uk-button-secondary with any style modifier -->
<div class="uk-button-group">
  <button class="uk-button uk-button-secondary">One</button>
  <button class="uk-button uk-button-secondary">Two</button>
  <button class="uk-button uk-button-secondary">Three</button>
</div>
```

## Button with Dropdown

Place a button and a `data-uk-dropdown` `<div>` inside `.uk-inline`. See `dropdown.md`.

```html
<div class="uk-inline">
  <button class="uk-button uk-button-default" type="button">Dropdown</button>
  <div class="uk-drop uk-dropdown min-w" style="--min-w: 52" data-uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">
      <li class="uk-active"><a href="#">Active</a></li>
      <li><a href="#">Item</a></li>
      <li class="uk-nav-header">Header</li>
      <li><a href="#">Item</a></li>
      <li class="uk-nav-divider"></li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
</div>
```

## Loading State

Use a spinning icon or the Spinner component inside a button for loading states. See `spinner.md`.

```html
<!-- uk-button-primary with animated loader icon; add disabled for non-interactive state -->
<button class="uk-button uk-button-primary gap-x" style="--gap-x: 2">
  <uk-icon class="size animate-spin" style="--size: 4" icon="loader"></uk-icon>
  <span>Loading</span>
</button>

<!-- Using data-uk-spinner instead of uk-icon -->
<button class="uk-button uk-button-info gap-x" style="--gap-x: 2">
  <span data-uk-spinner></span>
  <span>Logging in</span>
</button>
```