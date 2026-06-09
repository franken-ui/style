# Nav

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/dropdown.md
- https://franken.style/contexts/kit-usage/offcanvas.md
- https://franken.style/contexts/kit-usage/animation.md
- https://franken.style/contexts/kit-usage/javascript.md

## Usage

| Class | Description |
| --- | --- |
| `.uk-nav` | Add to a `<ul>` to define the Nav. Use `<a>` elements as items. |
| `.uk-active` | Add to a `<li>` to mark it active. |

By default, the nav has no styling — always add a modifier class (e.g. `.uk-nav-default`).

```html
<ul class="uk-nav uk-nav-default">
  <li class="uk-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
  <li><a href="#">Item</a></li>
</ul>
```

## Nested Navs

Add `.uk-parent` to a `<li>` and `.uk-nav-sub` to its child `<ul>` to create a subnav.

```html
<ul class="uk-nav uk-nav-default">
  <li class="uk-active"><a href="#">Active</a></li>
  <li class="uk-parent">
    <a href="#">Parent</a>
    <ul class="uk-nav-sub">
      <li><a href="#">Sub item</a></li>
      <li>
        <a href="#">Sub item</a>
        <ul>
          <li><a href="#">Nested</a></li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```

## Accordion

Add `data-uk-nav` to the `<ul>` for accordion behavior. This also sets `.uk-nav` automatically — no need to add it manually.

Add `data-uk-nav-parent-icon` to a `<span>` inside the parent link for a toggle icon. Use `multiple: true` to allow multiple open subnavs simultaneously.

```html
<!-- data-uk-nav enables accordion; add multiple:true to allow multiple open -->
<ul class="uk-nav-default" data-uk-nav="multiple: true">
  <li class="uk-active"><a href="#">Active</a></li>
  <li class="uk-parent">
    <a href="#">Parent <span data-uk-nav-parent-icon></span></a>
    <ul class="uk-nav-sub">
      <li><a href="#">Sub item</a></li>
      <li><a href="#">Sub item</a></li>
    </ul>
  </li>
  <li class="uk-parent">
    <a href="#">Parent <span data-uk-nav-parent-icon></span></a>
    <ul class="uk-nav-sub">
      <li><a href="#">Sub item</a></li>
    </ul>
  </li>
</ul>
```

## Header, Divider, and Subtitle

| Class | Description |
| --- | --- |
| `.uk-nav-header` | Add to a `<li>` to create a section header. |
| `.uk-nav-divider` | Add to a `<li>` to create a divider. |
| `.uk-nav-subtitle` | Add to a `<div>` inside a nav link to add a subtitle. |

```html
<ul class="uk-nav uk-nav-default">
  <li class="uk-nav-header">Section</li>
  <li>
    <a href="#">
      <div>
        Item
        <div class="uk-nav-subtitle">A short description for this item.</div>
      </div>
    </a>
  </li>
  <li class="uk-nav-divider"></li>
  <li><a href="#">Another item</a></li>
</ul>
```

## Style Modifiers

| Class | Description |
| --- | --- |
| `.uk-nav-default` | Default nav style; suitable for cards and sidebars. |
| `.uk-nav-alt` | More distinct styling with background highlights. |

```html
<!-- Replace uk-nav-default with uk-nav-alt for alternative style -->
<ul class="uk-nav uk-nav-default" data-uk-nav>
  <li class="uk-active"><a href="#">Active</a></li>
  <li class="uk-parent">
    <a href="#">Parent <span data-uk-nav-parent-icon></span></a>
    <ul class="uk-nav-sub">
      <li><a href="#">Sub item</a></li>
    </ul>
  </li>
  <li class="uk-nav-header">Header</li>
  <li>
    <a href="#">
      <uk-icon class="mr size" style="--mr: 2; --size: 4" icon="bell"></uk-icon>
      Item
    </a>
  </li>
  <li class="uk-nav-divider"></li>
  <li>
    <a href="#">
      <uk-icon class="mr size" style="--mr: 2; --size: 4" icon="trash"></uk-icon>
      Delete
    </a>
  </li>
</ul>
```

### Alt Customization via CSS Variables

```html
<ul
  class="uk-nav uk-nav-alt"
  style="
    --uk-nav-item-active-bg: var(--color-purple-500);
    --uk-nav-item-active-bg-o: 100%;
    --uk-nav-item-active-color: var(--color-white);
    --uk-nav-item-hover-bg: var(--color-purple-600);
    --uk-nav-item-hover-bg-o: 100%;
    --uk-nav-item-hover-color: var(--color-purple-100);
  "
>
  <li class="uk-active"><a href="#">Custom Purple</a></li>
  <li><a href="#">Regular Item</a></li>
</ul>
```

## Nav in Dropdown

Add `.uk-dropdown-nav` to a `<ul>` inside a dropdown. See `dropdown.md`.

```html
<button class="uk-button uk-button-default" type="button">Hover</button>
<div class="uk-drop min-w" style="--min-w: 52" data-uk-dropdown>
  <ul class="uk-nav uk-dropdown-nav">
    <li class="uk-active"><a href="#">Active</a></li>
    <li class="uk-nav-divider"></li>
    <li class="uk-nav-header">Header</li>
    <li><a href="#">Item</a></li>
  </ul>
</div>
```

## Nav in Offcanvas

No modifier class needed. See `offcanvas.md`.

```html
<a href="#offcanvas-nav" class="uk-button uk-button-default" data-uk-toggle>Open</a>

<div class="uk-offcanvas" id="offcanvas-nav" data-uk-offcanvas>
  <div class="uk-offcanvas-bar">
    <ul class="uk-nav-primary uk-nav-alt" data-uk-nav>
      <li class="uk-active"><a href="#">Active</a></li>
      <li class="uk-parent">
        <a href="#">Parent <span data-uk-nav-parent-icon></span></a>
        <ul class="uk-nav-sub">
          <li><a href="#">Sub item</a></li>
        </ul>
      </li>
      <li><a href="#">Item</a></li>
    </ul>
  </div>
</div>
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `targets` | CSS selector | `> .uk-parent` | Elements to toggle. |
| `toggle` | CSS selector | `> a` | The toggle element(s). |
| `content` | CSS selector | `> ul` | The content element(s). |
| `collapsible` | Boolean | `true` | Allow all items to be closed. |
| `multiple` | Boolean | `false` | Allow multiple open items. |
| `transition` | String | `ease` | Transition to use. |
| `animation` | Boolean, String | `true` | Animation name(s); comma-separated for out animation. |
| `duration` | Number | `200` | Animation duration in milliseconds. |

## JavaScript

### Initialization

```javascript
UIkit.nav(element, options);
```

### Methods

```javascript
// Toggle a pane by index (0-based); pass false to suppress animation
UIkit.nav(element).toggle(index, animate);
```