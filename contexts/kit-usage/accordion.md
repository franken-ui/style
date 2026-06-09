# Accordion

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/javascript.md

## Usage

| Class | Description |
| --- | --- |
| `.uk-accordion-title` | Toggle for each item. Use `<a>` elements. |
| `.uk-accordion-icon` | Icon part of the toggle. |
| `.uk-accordion-content` | Content part of each item. |

```html
<ul class="uk-accordion" data-uk-accordion>
  <li class="uk-open">
    <a class="uk-accordion-title" href>
      Item 1
      <span class="uk-accordion-icon"><uk-icon icon="chevron-down"></uk-icon></span>
    </a>
    <div class="uk-accordion-content"><p>Content goes here.</p></div>
  </li>
  <li>
    <a class="uk-accordion-title" href>
      Item 2
      <span class="uk-accordion-icon"><uk-icon icon="chevron-down"></uk-icon></span>
    </a>
    <div class="uk-accordion-content"><p>Content goes here.</p></div>
  </li>
</ul>
```

## No Collapsing

Prevent all items from closing with `collapsible: false`.

```html
<ul data-uk-accordion="collapsible: false"><!-- items --></ul>
```

## Multiple Open Items

Allow multiple items open simultaneously with `multiple: true`.

```html
<ul data-uk-accordion="multiple: true"><!-- items --></ul>
```

## Set Open Items

Add `.uk-open` to any `<li>` to open it initially. Combine with `multiple: true` for multiple open items.

> **Note:** You can also use `active: <index>` on the attribute (zero-based index) instead. This overwrites `.uk-open`.

```html
<ul data-uk-accordion>
  <li></li>
  <li class="uk-open"></li>
  <li></li>
</ul>
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `active` | Number | `false` | Index of the element to open initially. |
| `animation` | Boolean | `true` | Reveal item directly or with a transition. |
| `collapsible` | Boolean | `true` | Allow all items to be closed. |
| `content` | String | `> .uk-accordion-content` | Content selector. |
| `duration` | Number | `200` | Animation duration in milliseconds. |
| `multiple` | Boolean | `false` | Allow multiple open items. |
| `targets` | String | `> *` | CSS selector of elements to toggle. |
| `toggle` | String | `> .uk-accordion-title` | Toggle selector. |
| `transition` | String | `ease` | Transition easing. |
| `offset` | Number | `0` | Pixel offset added to scroll top. |

## JavaScript

### Initialization

```javascript
UIkit.accordion(element, options);
```

### Events

| Name | Description |
| --- | --- |
| `beforeshow` | Fires before an item is shown. Call `preventDefault()` to cancel. |
| `show` | Fires after an item is shown. |
| `shown` | Fires after the show animation completes. |
| `beforehide` | Fires before an item is hidden. Call `preventDefault()` to cancel. |
| `hide` | Fires after hide animation starts. |
| `hidden` | Fires after an item is hidden. |

### Methods

#### Toggle

```javascript
UIkit.accordion(element).toggle(index, animate);
```

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `index` | String, Number, Node | 0 | Pane to toggle (zero-based). |
| `animate` | Boolean | true | Pass `false` to suppress animation. |

## Accessibility

Follows the [Accordion WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/). Roles and properties are set automatically.

- Titles: `button` role, `aria-expanded`, `aria-controls`
- Contents: `region` role, `aria-labelledby`

**Keyboard:** `Tab`/`Shift+Tab` to navigate titles, `Enter`/`Space` to toggle.