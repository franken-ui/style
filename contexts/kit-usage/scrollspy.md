# Scrollspy

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/animation.md
- https://franken.style/contexts/kit-usage/card.md
- https://franken.style/contexts/kit-usage/javascript.md
- https://franken.style/contexts/kit-usage/scroll.md

## Usage

Add `data-uk-scrollspy` to any element. It triggers animations when the element enters the viewport. Typically used with [Animation component](https://franken.style/contexts/kit-usage/animation.md) classes.

`cls` is the primary option; its key may be omitted if it's the only option.

```html
<!-- Single element: fades in on scroll -->
<div data-uk-scrollspy="cls: uk-animation-fade">
  <p>Fades in when scrolled into view.</p>
</div>

<!-- Two elements with different slide directions; repeat: true re-triggers on each scroll -->
<div class="display-grid sm:grid-cols" style="--grid-cols: 1; --gap: 4; --sm-grid-cols: 2">
  <div class="uk-card uk-card-body" data-uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
    <h3 class="uk-card-title">Slides from Left</h3>
    <p>Animates each time it enters the viewport.</p>
  </div>
  <div class="uk-card uk-card-body" data-uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
    <h3 class="uk-card-title">Slides from Right</h3>
    <p>Animates each time it enters the viewport.</p>
  </div>
</div>
```

## Groups

Apply `data-uk-scrollspy` to a container with `target: SELECTOR` to animate multiple children without adding the attribute to each. When using `delay`, it's applied cumulatively to items as they scroll into view.

```html
<!-- Container targets .uk-card children; each fades in 500ms apart -->
<div
  class="display-grid sm:grid-cols"
  style="--grid-cols: 1; --gap: 4; --sm-grid-cols: 2"
  data-uk-scrollspy="cls: uk-animation-fade; target: .uk-card; delay: 500; repeat: true"
>
  <div><div class="uk-card-default uk-card uk-card-body"><h3 class="uk-card-title">Item</h3><p>Fades in with staggered delay.</p></div></div>
  <div><div class="uk-card-default uk-card uk-card-body"><h3 class="uk-card-title">Item</h3><p>Fades in with staggered delay.</p></div></div>
  <!-- Add more items as needed -->
</div>
```

## Per-target `cls` Override

Add `data-uk-scrollspy-class="CLASS"` to individual targets to override the container's `cls` option.

```html
<!-- Container default is slide-bottom; middle card overrides to slide-top -->
<div
  class="display-grid sm:grid-cols"
  style="--grid-cols: 1; --gap: 4; --sm-grid-cols: 2"
  data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .uk-card; delay: 300; repeat: true"
>
  <div><div class="uk-card uk-card-body"><h3 class="uk-card-title">Bottom</h3><p>Uses container cls.</p></div></div>
  <div><div class="uk-card uk-card-body" data-uk-scrollspy-class="uk-animation-slide-top"><h3 class="uk-card-title">Top</h3><p>Overrides with slide-top.</p></div></div><!-- data-uk-scrollspy-class overrides container cls -->
  <div><div class="uk-card uk-card-body"><h3 class="uk-card-title">Bottom</h3><p>Uses container cls.</p></div></div>
</div>
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `cls` | String | | Class toggled when element enters/leaves viewport. |
| `target` | Boolean, CSS selector | `false` | Children to apply scrollspy to. Defaults to element itself. |
| `hidden` | Boolean | `true` | Hides element while out of view. |
| `margin` | String | `-1px` | Viewport bounding box margin before intersection check. Must be `px` or `%`. |
| `repeat` | Boolean | `false` | Re-applies `cls` every time element enters view. |
| `delay` | Number | `0` | Delay in ms (cumulative for grouped targets). |

## JavaScript

### Initialization

```js
UIkit.scrollspy(element, options);
```

### Events

| Name | Description |
| --- | --- |
| `inview` | Fires after element moves into the viewport. |
| `outview` | Fires after element moves out of the viewport. |

## Scrollspy Nav

Add `data-uk-scrollspy-nav` to a navigation element to automatically update the active menu item based on scroll position. Each `<a>` must link to the `id` of its corresponding section.

```html
<ul class="uk-nav uk-nav-default" data-uk-scrollspy-nav="closest: li; scroll: true">
  <li><a href="#section-1">Section 1</a></li>
  <li><a href="#section-2">Section 2</a></li>
</ul>
```

### Scrollspy Nav Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `cls` | String | `uk-active` | Class added to active links. |
| `closest` | Boolean, CSS selector | `false` | Element to apply active class to. Defaults to element itself. |
| `scroll` | Boolean | `false` | Adds Scroll component behavior to links. |
| `target` | CSS selector | `a[href]` | Anchor elements used for nav tracking. |
| `offset` | Number | `0` | Offset added to scroll top. |

### Scrollspy Nav Initialization

```js
UIkit.scrollspyNav(element, options);
```

### Scrollspy Nav Events

| Name | Description |
| --- | --- |
| `active` | Fires after a nav item becomes active. |