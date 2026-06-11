# Badge

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

## Usage

To create a badge, just add the `.uk-badge` class to an inline element like `<a>` or `<span>` element.

```html
<span class="uk-badge"></span>
```

```html
<span class="uk-badge">1</span>
<span class="uk-badge">100</span>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.uk-badge-danger`
- `.uk-badge-warning`
- `.uk-badge-success`
- `.uk-badge-info`

```html
<span class="uk-badge">1</span>
<span class="uk-badge uk-badge-danger">8</span>
<span class="uk-badge uk-badge-warning">15</span>
<span class="uk-badge uk-badge-success">26</span>
<span class="uk-badge uk-badge-info">37</span>
```

## Customization

You can use CSS variables to customize this component in any way you prefer.

```html
<span
  class="uk-badge"
  style="
    --uk-badge-bg: var(--color-purple-500);
    --uk-badge-bg-o: 8%;
    --uk-badge-color: var(--color-purple-800);
    --uk-badge-border: var(--color-purple-500);
    --uk-badge-border-o: 32%;
    --uk-badge-shadow: var(--shadow-xs);
  "
>
  99+
</span>
```