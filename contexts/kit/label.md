# Label

## Usage

To create a label, just add the `.uk-label` class to an inline element like `<a>` or `<span>` element.

```html
<span class="uk-label"></span>
```

```html
<span class="uk-label">Default</span>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.uk-label-danger`
- `.uk-label-warning`
- `.uk-label-success`
- `.uk-label-info`

```html
<span class="uk-label">Default</span>
<span class="uk-label uk-label-danger">Danger</span>
<span class="uk-label uk-label-warning">Warning</span>
<span class="uk-label uk-label-success">Success</span>
<span class="uk-label uk-label-info">Info</span>
```

## Customization

You can use CSS variables to customize this component in any way you prefer.

```html
<span
  class="uk-label"
  style="
    --uk-label-bg: var(--color-purple-500);
    --uk-label-bg-o: 8%;
    --uk-label-color: var(--color-purple-800);
    --uk-label-border: var(--color-purple-500);
    --uk-label-border-o: 32%;
    --uk-label-shadow: var(--shadow-xs);
  "
>
  Custom
</span>
```