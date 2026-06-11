# Sticky

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/animation.md
- https://franken.style/contexts/kit-usage/javascript.md

## Usage

To create an element that remains at the top of the viewport when scrolling down the site, add the `data-uk-sticky` attribute.

```html
<div data-uk-sticky>Stick to the top</div>

```

## Position

By default, the element sticks to the top of the viewport. Use `position: bottom` to stick it to the bottom.

```html
<div data-uk-sticky="position: bottom">Stick to the bottom</div>

```

## Start

Apply an offset for when the element should start being sticky using the `start` option. Accepts `vh`, `%`, `px`, basic math (`+` and `-`), or a CSS selector.

```html
<div data-uk-sticky="start: 200"></div>

<div data-uk-sticky="start: 100%"></div>

<div data-uk-sticky="start: 20vh"></div>

<div id="my-id">
  <div data-uk-sticky="start: #my-id"></div>
</div>

```

## End

Apply an offset for when the element should stop being sticky using the `end` option. Accepts `vh`, `%`, `px`, basic math, or a CSS selector. `false` (default) makes it stick until the end of the page. `true` makes it stick until the end of its parent container.

```html
<div data-uk-sticky="end: 200"></div>

<div data-uk-sticky="end: #my-id"></div>
<div id="my-id"></div>

<div>
  <div data-uk-sticky="end: true"></div>
</div>

```

## Offset

Set an offset to the viewport's edge when the element is sticky using the `offset` option. Accepts `vh`, `%`, `px`, and math operands.

```html
<div data-uk-sticky="offset: 100">Sticks 100px below the top edge</div>

```

## Animation & Show On Up

Use an animation class from the Animation component to make the sticky element reappear smoothly.
Use `show-on-up: true` to make the element show only when scrolling up (great for saving space on mobile).

```html
<div data-uk-sticky="start: 200; animation: uk-animation-slide-top"></div>

<div data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top"></div>

```

## Responsive

Disable sticky behavior below certain device widths using the `media` option. Accepts integers (pixels) or breakpoints (e.g., `@s`, `@m`).

```html
<div data-uk-sticky="media: 640"></div>

```

## Oversized Content

If sticky content is taller than the viewport, it automatically scrolls down and sticks to the bottom of the viewport. Reversing scroll direction immediately scrolls the sticky content up and changes it to stick to the top.

## Overflow Flip

The `overflow-flip: true` option disables standard sticky behavior for oversized content. Instead, it flips the sticky position (top to bottom or vice-versa) if the element is larger than the viewport, preventing the internal scrolling behavior.

```html
<div data-uk-sticky="position: bottom; overflow-flip: true; start: -100%; end: 0"></div>

```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `position` | `top`, `bottom` | `top` | The position the element should be stuck to. |
| `start` | Length, CSS Selector | `0` | Start offset (vh, %, px, math operands). `0` = element top intersects viewport top. CSS Selector = element top intersects selected element bottom. |
| `end` | Length, CSS Selector, Boolean | `false` | End offset (vh, %, px, math operands). `0` = element top intersects viewport top. CSS Selector = element bottom intersects selected element bottom. `false` = stick until page end. `true` = stick until parent element end. |
| `offset` | Length | `0` | Viewport edge offset (vh, %, px, math operands). |
| `overflow-flip` | Boolean | `false` | Flips position if element overflows viewport, disabling standard overflow scrolling. |
| `animation` | String | `false` | Animation class used when becoming sticky. |
| `cls-active` | String | `uk-active` | The active class applied when sticky. |
| `cls-inactive` | String |  | The inactive class applied when not sticky. |
| `show-on-up` | Boolean | `false` | Only show sticky element when scrolling up. |
| `media` | Number, String | `false` | Activation condition (e.g., `640`, `@m`, `(min-width: 900px)`). |
| `target-offset` | `false`, Length | `false` | Prevents sticky element from covering an element targeted via a page location hash by setting a minimum distance above it. |

## JavaScript

### Initialization

```javascript
UIkit.sticky(element, options);
```

### Events

| Name | Description |
| --- | --- |
| `active` | Fires after the element becomes sticky. |
| `inactive` | Fires after the element is no longer sticky. |