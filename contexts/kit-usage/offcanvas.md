# Offcanvas

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/close.md
- https://franken.style/contexts/kit-usage/nav.md

## Usage

Add `data-uk-offcanvas` to a parent `<div>`. Toggle it with any element using `data-uk-toggle`.

| Class | Description |
| --- | --- |
| `.uk-offcanvas-bar` | Add to a child `<div>`. |
| `.uk-offcanvas-close` | Add to a `<button>` or `<a>` with `data-uk-close` to create a close button. |

```html
<button type="button" data-uk-toggle="target: #my-offcanvas">Open</button>
<!-- Or use an anchor: <a href="#my-offcanvas" data-uk-toggle>Open</a> -->

<div id="my-offcanvas" data-uk-offcanvas>
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button class="uk-offcanvas-close absolute right top" style="--right: 4; --top: 4" type="button" data-uk-close></button>
    <h3 class="uk-h3">Menu</h3>
    <p class="mt" style="--mt: 4">Sidebar content goes here.</p>
  </div>
</div>
```

### Overlay

Add `overlay: true` to blank out the page behind the offcanvas.

```html
<div id="my-offcanvas" data-uk-offcanvas="overlay: true">...</div>
```

## Flip Modifier

Add `flip: true` to slide in from the right instead of the left.

```html
<div id="my-offcanvas" data-uk-offcanvas="flip: true; overlay: true">...</div>
```

## Animation Modes

Set via the `mode` parameter. `mode` is the primary option; its key may be omitted if it's the only option.

| Parameter | Description |
| --- | --- |
| `mode: slide` | Slides out and overlays content. **Default.** |
| `mode: push` | Slides out and pushes the page. |
| `mode: reveal` | Reveals content while pushing the page. |
| `mode: none` | Appears instantly with no animation. |

```html
<!-- Replace mode: push with: mode: reveal, mode: none, or omit for default slide -->
<div id="my-offcanvas" data-uk-offcanvas="mode: push; overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <button class="uk-offcanvas-close absolute right top" style="--right: 4; --top: 4" type="button" data-uk-close></button>
    <h3 class="uk-h3">Menu</h3>
    <p class="mt" style="--mt: 4">Sidebar content goes here.</p>
  </div>
</div>
```

## Nav in Offcanvas

Use the Nav component inside an offcanvas for mobile navigation. See `nav.md`.

```html
<div id="my-offcanvas" data-uk-offcanvas="overlay: true">
  <div class="uk-offcanvas-bar p" style="--p: 4">
    <ul class="uk-nav-default" data-uk-nav>
      <li class="uk-active"><a href="#">Home</a></li>
      <li class="uk-parent">
        <a href="#">Products <span data-uk-nav-parent-icon></span></a>
        <ul class="uk-nav-sub">
          <li><a href="#">Item one</a></li>
          <li><a href="#">Item two</a></li>
        </ul>
      </li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</div>
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `mode` | String | `slide` | Animation mode: `slide`, `reveal`, `push`, or `none`. |
| `flip` | Boolean | `false` | Slide in from the right. |
| `overlay` | Boolean | `false` | Show a page overlay behind the offcanvas. |
| `esc-close` | Boolean | `true` | Close on _Esc_ key. |
| `bg-close` | Boolean | `true` | Close when background is clicked. |
| `container` | String | `false` | Selector for where to append the offcanvas in the DOM. `false` disables this. |

## JavaScript

### Initialization

```javascript
UIkit.offcanvas(element, options);
```

### Events

| Name | Description |
| --- | --- |
| `beforeshow` | Fires before shown. |
| `show` | Fires after shown. |
| `shown` | Fires after show animation completes. |
| `beforehide` | Fires before hidden. |
| `hide` | Fires after hide animation starts. |
| `hidden` | Fires after hidden. |

### Methods

```javascript
UIkit.offcanvas(element).show(); // Shows the offcanvas
UIkit.offcanvas(element).hide(); // Hides the offcanvas
```

## Accessibility

Follows the [Dialog (Modal) WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/). The offcanvas bar gets the `dialog` role; with `overlay: true`, also `aria-modal`. The close icon gets an `aria-label`; if an `<a>` is used, also the `button` role. Press <kbd>Esc</kbd> to close (disabled if `esc-close: false`).