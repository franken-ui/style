# Switcher

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `flex`, `flex-1`, `flex-none`, `display-flex`, `flex-col`, `gap`, `w`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload them:

- https://franken.style/contexts/kit-usage/subnav.md
- https://franken.style/contexts/kit-usage/tab.md
- https://franken.style/contexts/kit-usage/button.md
- https://franken.style/contexts/kit-usage/nav.md
- https://franken.style/contexts/kit-usage/animation.md
- https://franken.style/contexts/kit-usage/javascript.md

## Usage

Add `data-uk-switcher` to the toggle list and `.uk-switcher` to the content list. By default the content list must immediately follow the toggle list. Use `connect: SELECTOR` to link a content container elsewhere in the DOM.

```html
<ul class="uk-switcher" data-uk-switcher>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher mt" style="--mt: 4">
  <li>Content 1.</li>
  <li>Content 2.</li>
</ul>
```

Switcher toggles are typically styled via other components (Subnav, Tab, Button, Nav).

## Navigation Controls

Use `data-uk-switcher-item` inside content items to switch tabs from within content. Target by index, or use `next`/`previous`.

```html
<ul class="uk-subnav uk-subnav-primary" data-uk-switcher>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher mt" style="--mt: 4">
  <li>
    Content 1.
    <a class="uk-link" href="#" data-uk-switcher-item="2">Switch to item 3</a>
  </li>
  <li>
    Content 2.
    <a class="uk-link" href="#" data-uk-switcher-item="next">Next</a>
  </li>
  <li>
    Content 3.
    <a class="uk-link" href="#" data-uk-switcher-item="previous">Previous</a>
  </li>
</ul>
```

## Connect Multiple Containers

Use a shared selector on `connect` to sync multiple content containers to the same toggle.

```html
<ul class="uk-subnav uk-subnav-primary" data-uk-switcher="connect: .switcher-container">
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>

<h4 class="mt" style="--mt: 4">Container 1</h4>
<ul class="switcher-container uk-switcher mt" style="--mt: 4">
  <li>Content 1.</li>
  <li>Content 2.</li>
  <li>Content 3.</li>
</ul>

<h4 class="mt" style="--mt: 4">Container 2</h4>
<ul class="switcher-container uk-switcher mt" style="--mt: 4">
  <li>Also content 1.</li>
  <li>Also content 2.</li>
  <li>Also content 3.</li>
</ul>
```

## Animations

Pass any animation class from `animation.md` to the `animation` option. Comma-separate two classes for different in/out animations.

```html
<!-- Single animation -->
<ul data-uk-switcher="animation: uk-animation-fade"><!-- items --></ul>

<!-- Different in/out animations -->
<ul data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"><!-- items --></ul>
```

## Switcher and Subnav

See `subnav.md` for styling the toggle nav.

```html
<ul class="uk-subnav uk-subnav-primary" data-uk-switcher>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher mt" style="--mt: 4">
  <li>Content 1.</li>
  <li>Content 2.</li>
  <li>Content 3.</li>
</ul>
```

## Switcher and Tab

Use `data-uk-tab` instead of `data-uk-switcher` when combining with the Tab component (see `tab.md`).

```html
<ul class="uk-tab" data-uk-tab>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>

<ul class="uk-switcher mt" style="--mt: 4">
  <li>Content 1.</li>
  <li>Content 2.</li>
  <li>Content 3.</li>
</ul>
```

### Vertical Tabs

Use `.uk-tab-left` or `.uk-tab-right` with `connect` to link a separate content container. Use Frankenstyle flex utilities for layout.

```html
<!-- Replace uk-tab-left with uk-tab-right and move flex-none to lg:order-last for right-side tabs -->
<div class="display-flex flex-col gap lg:flex-row" style="--gap: 4">
  <div class="flex-none">
    <ul class="uk-tab-left" data-uk-tab="connect: #tab-content; animation: uk-animation-fade">
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
  <div class="flex-1">
    <ul id="tab-content" class="uk-switcher">
      <li>Content 1.</li>
      <li>Content 2.</li>
      <li>Content 3.</li>
    </ul>
  </div>
</div>
```

## Switcher and Button

Add `data-uk-switcher` to a wrapper div with `toggle: > *` to use buttons as toggles. See `button.md`.

```html
<div class="display-flex flex-wrap gap" style="--gap: 2"
  data-uk-switcher="animation: uk-animation-fade; toggle: > *">
  <button class="uk-button uk-button-primary" type="button">Item</button>
  <button class="uk-button uk-button-primary" type="button">Item</button>
  <button class="uk-button uk-button-primary" type="button">Item</button>
</div>

<ul class="uk-switcher mt" style="--mt: 4">
  <li>Content 1.</li>
  <li>Content 2.</li>
  <li>Content 3.</li>
</ul>
```

> **Note:** Buttons are not wrapped in `<li>` elements, so `toggle: > *` is required to target them directly.

## Switcher and Nav

Add `data-uk-switcher` to a Nav `<ul>` with `connect` pointing to the content container. See `nav.md`.

```html
<div class="display-flex">
  <div class="w" style="--w: 40">
    <ul class="uk-nav uk-nav-default"
      data-uk-switcher="connect: #nav-content; animation: uk-animation-fade">
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
  <div class="flex-1">
    <ul id="nav-content" class="uk-switcher">
      <li>Content 1.</li>
      <li>Content 2.</li>
      <li>Content 3.</li>
    </ul>
  </div>
</div>
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `connect` | CSS selector | `~.uk-switcher` | Content container. Default: next sibling with `.uk-switcher`. |
| `toggle` | CSS selector | `> * > :first-child` | Clickable toggle elements. |
| `itemNav` | CSS selector | `false` | Related nav container. |
| `active` | Number | `0` | Active index on init. Negative counts from end. |
| `animation` | String | `false` | Animation class(es). Comma-separate for in/out. |
| `duration` | Number | `200` | Animation duration in ms. |
| `swiping` | Boolean | `true` | Enable swipe gestures. |
| `followFocus` | Boolean | `false` | Activate item on focus (not just Enter/Space). |

`connect` is the primary option and may be passed without a key: `data-uk-switcher=".my-class"`.

## JavaScript

### Initialization

```javascript
UIkit.switcher(element, options);
```

### Events

| Name | Description |
| --- | --- |
| `beforeshow` | Fires before an item is shown. Call `preventDefault()` to cancel. |
| `show` | Fires after an item is shown. |
| `shown` | Fires after show animation completes. |
| `beforehide` | Fires before an item is hidden. Call `preventDefault()` to cancel. |
| `hide` | Fires after hide animation starts. |
| `hidden` | Fires after an item is hidden. |

### Methods

```javascript
UIkit.switcher(element).show(index); // Show item by index (zero-based)
```

## Accessibility

Follows the [Tab WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/). Roles set automatically:

- Toggle nav: `tablist`; vertical nav also gets `aria-orientation="vertical"`
- Toggle items: `presentation`
- Toggle links: `tab`, `aria-selected`, `aria-controls`
- Content list: `presentation`
- Content items: `tabpanel`, `aria-labelledby`

**Keyboard:** `Tab`/`Shift+Tab` to focus active toggle; `←`/`→` or `↑`/`↓` (vertical) to navigate; `Enter`/`Space` to activate; `Home`/`End` to jump to first/last.

By default activation is manual (`Enter`/`Space`). Set `followFocus: true` for automatic activation on arrow key navigation.