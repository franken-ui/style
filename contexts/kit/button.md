# Button

## Usage

To apply this component, add the `.uk-button` class and a modifier such as `.uk-button-default` to an `<a>` or `<button>` element. Add the `disabled` attribute to a `<button>` element to disable the button.

```html
<a class="uk-button uk-button-default" href=""></a>

<button class="uk-button uk-button-default"></button>

<button class="uk-button uk-button-default" disabled></button>
```

```html
<div class="display-flex flex-wrap gap" style="--gap: 2">
  <a class="uk-button uk-button-default" href="#">Link</a>
  <button class="uk-button uk-button-default">Button</button>
  <button class="uk-button uk-button-default" disabled>Disabled</button>
</div>
```

## Style modifiers

There are several style modifiers available. Just add one of the following classes to apply a different look.

- `.uk-button-default`
- `.uk-button-ghost`
- `.uk-button-primary`
- `.uk-button-secondary`
- `.uk-button-success`
- `.uk-button-warning`
- `.uk-button-info`
- `.uk-button-danger`
- `.uk-button-text`

```html
<button class="uk-button uk-button-primary"></button>
```

```html
<div class="display-flex flex-wrap items-center gap" style="--gap: 2">
  <button class="uk-button uk-button-default">Default</button>
  <button class="uk-button uk-button-ghost">Ghost</button>
  <button class="uk-button uk-button-primary">Primary</button>
  <button class="uk-button uk-button-secondary">Secondary</button>
  <button class="uk-button uk-button-success">Success</button>
  <button class="uk-button uk-button-warning">Warning</button>
  <button class="uk-button uk-button-info">Info</button>
  <button class="uk-button uk-button-danger">Danger</button>
  <button class="uk-button uk-button-text">Text</button>
</div>
```

## Customization

You can use CSS variables to customize this component in any way you prefer.

```html
<div class="gap display-flex flex-wrap items-center" style="--gap: 2">
  <button
    class="uk-button"
    style="
      --uk-button-bg: var(--color-purple-500);
      --uk-button-color: white;
      --uk-button-border: var(--color-purple-500);
      --uk-button-hover-bg: var(--color-purple-600);
      --uk-button-hover-bg-o: 100%;
      --uk-button-hover-color: white;
    "
  >
    Custom Purple
  </button>
  <button
    class="uk-button"
    style="
      --uk-button-bg: var(--color-teal-500);
      --uk-button-color: white;
      --uk-button-border: var(--color-teal-500);
      --uk-button-hover-bg: var(--color-teal-600);
      --uk-button-hover-bg-o: 100%;
      --uk-button-hover-color: white;
    "
  >
    Custom Teal
  </button>
  <button
    class="uk-button"
    style="
      --uk-button-bg: var(--color-pink-500);
      --uk-button-color: white;
      --uk-button-border: var(--color-pink-500);
      --uk-button-hover-bg: var(--color-pink-600);
      --uk-button-hover-bg-o: 100%;
      --uk-button-hover-color: white;
    "
  >
    Custom Pink
  </button>
</div>
```

## Size modifiers

There are several size modifiers available. Just add one of the following classes to make the button smaller or larger.

| Class        | Description               |
| ------------ | ------------------------- |
| `.uk-button-xsmall` | Applies extra small size. |
| `.uk-button-small` | Applies small size.       |
| `.uk-button-medium` | Applies medium size.      |
| `.uk-button-large` | Applies large size.       |

```html
<div class="flex flex-wrap gap-2">
  <button class="uk-button uk-button-default uk-button-xsmall">xs</button>
  <button class="uk-button uk-button-primary uk-button-xsmall">xs</button>
  <button class="uk-button uk-button-secondary uk-button-xsmall">xs</button>
</div>

<div class="mt display-flex flex-wrap gap" style="--mt: 4; --gap: 2">
  <button class="uk-button uk-button-default uk-button-small">sm</button>
  <button class="uk-button uk-button-primary uk-button-small">sm</button>
  <button class="uk-button uk-button-secondary uk-button-small">sm</button>
</div>

<div class="mt display-flex flex-wrap gap" style="--mt: 4; --gap: 2">
  <button class="uk-button uk-button-default">md</button>
  <button class="uk-button uk-button-primary">md</button>
  <button class="uk-button uk-button-secondary">md</button>
</div>

<div class="mt display-flex flex-wrap gap" style="--mt: 4; --gap: 2">
  <button class="uk-button uk-button-default uk-button-large">lg</button>
  <button class="uk-button uk-button-primary uk-button-large">lg</button>
  <button class="uk-button uk-button-secondary uk-button-large">lg</button>
</div>
```

## Width modifiers

You can use Tailwind CSS utility classes alongside button classes and the it will follow its width.

```html
<div class="display-flex flex-col gap" style="--gap: 2">
  <button class="uk-button uk-button-default w" style="--w: 40">w-40</button>
  <button class="uk-button uk-button-primary w" style="--w: 44">w-44</button>
  <button class="uk-button uk-button-secondary w" style="--w: 48">w-48</button>
  <button class="uk-button uk-button-danger w" style="--w: 52">w-52</button>
  <button class="uk-button uk-button-destructive w-full">w-full</button>
</div>
```

## Icon

Use `.uk-button-icon` class to create an icon button, which can be used for social icons or toolbars.

```html
<div class="display-flex gap-x" style="--gap-x: 2">
  <button class="uk-button uk-button-default uk-button-icon">
    <uk-icon icon="copy"></uk-icon>
  </button>
  <button class="uk-button uk-button-default uk-button-icon">
    <uk-icon icon="file"></uk-icon>
  </button>
  <button class="uk-button uk-button-default uk-button-icon">
    <uk-icon icon="trash"></uk-icon>
  </button>
</div>
```

## Group

To create a button group, add the `.uk-button-group` class to a `<div>` element around the buttons. That's it! No further markup is needed.

```html
<div>
  <div class="uk-button-group">
    <button class="uk-button uk-button-secondary">Button</button>
    <button class="uk-button uk-button-secondary">Button</button>
    <button class="uk-button uk-button-secondary">Button</button>
  </div>
</div>

<div class="mt" style="--mt: 4">
  <div class="uk-button-group">
    <button class="uk-button uk-button-primary">Button</button>
    <button class="uk-button uk-button-primary">Button</button>
    <button class="uk-button uk-button-primary">Button</button>
  </div>
</div>

<div class="mt" style="--mt: 4">
  <div class="uk-button-group">
    <button class="uk-button uk-button-destructive">Button</button>
    <button class="uk-button uk-button-destructive">Button</button>
    <button class="uk-button uk-button-destructive">Button</button>
  </div>
</div>
```

## Button with dropdowns

A button can be used to trigger a dropdown menu from the [Dropdown component](/docs/latest/kit/dropdown).

```html
<!-- A button toggling a dropdown -->
<button class="uk-button uk-button-default" type="button"></button>
<div data-uk-dropdown></div>
```

```html
<div class="uk-inline">
  <button class="uk-button uk-button-default" type="button">Dropdown</button>
  <div class="uk-drop uk-dropdown min-w" style="--min-w: 52" data-uk-dropdown>
    <ul class="uk-nav uk-dropdown-nav">
      <li class="uk-active"><a href="#">Active</a></li>
      <li><a href="#">Item</a></li>
      <li class="uk-nav-header">Header</li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li class="uk-nav-divider"></li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
</div>
```

## Loading

You can use Frankenstyle utilities or the [Spinner component](/docs/latest/kit/spinner) to add a loading state.

```html
<div class="gap display-flex flex-wrap items-center" style="--gap: 2">
  <button class="uk-button uk-button-primary gap-x" style="--gap-x: 2">
    <uk-icon
      class="size animate-spin"
      style="--size: 4"
      icon="loader"
    ></uk-icon>
    <span>Loading</span>
  </button>
  <button class="uk-button gap-x" style="--gap-x: 2" disabled>
    <uk-icon
      class="size animate-spin"
      style="--size: 4"
      icon="loader"
    ></uk-icon>
    <span>Processing</span>
  </button>
  <button class="uk-button uk-button-info gap-x" style="--gap-x: 2">
    <span data-uk-spinner></span>
    <span>Logging in</span>
  </button>
</div>
```