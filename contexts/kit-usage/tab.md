# Tab

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/switcher.md
- https://franken.style/contexts/kit-usage/dropdown.md
- https://franken.style/contexts/kit-usage/animation.md
- https://franken.style/contexts/kit-usage/javascript.md
- https://franken.style/contexts/kit-usage/nav.md

## Usage

Add `data-uk-tab` to a `<ul>` element. Use `<a>` elements as tab items.

| Class/Attribute | Description |
| --- | --- |
| `.uk-tab` | Defines the Tab component on a `<ul>`. |
| `.uk-active` | Marks the active tab item. |
| `.uk-disabled` | Disables a tab item. Also remove `href` for keyboard accessibility. |

```html
<ul class="uk-tab" data-uk-tab>
  <li class="uk-active"><a href="#">Dashboard</a></li>
  <li><a href="#">Settings</a></li>
  <li class="uk-disabled"><a>Disabled</a></li>
</ul>
```

## Alternative Layout

Use `.uk-tab-alt` for an alternative visual style.

```html
<ul class="uk-tab-alt">
  <li class="uk-active"><a href="#">Account</a></li>
  <li><a href="#">Password</a></li>
</ul>
```

## Position Modifiers

```html
<!-- Replace uk-tab-bottom with: uk-tab-left, uk-tab-right -->
<ul class="uk-tab-bottom" data-uk-tab>
  <li class="uk-active"><a href="#">Tab</a></li>
  <li><a href="#">Item</a></li>
</ul>
```

`uk-tab-left` / `uk-tab-right` align tabs vertically. They revert to horizontal below 960px by default. Override with the `media` option:

```html
<ul class="uk-tab-left" data-uk-tab="media: @s">...</ul>
```

For vertical layouts, pair with a grid — see `switcher.md` for a full example.

## Alignment

Use Frankenstyle utility classes on the `<ul>` to control alignment.

```html
<!-- Replace justify-center with: justify-end, justify-between -->
<ul class="justify-center" data-uk-tab>
  <li class="uk-active"><a href="#">Tab</a></li>
  <li><a href="#">Item</a></li>
</ul>
```

## Tabs with Dropdown

Tabs can trigger a dropdown from the Dropdown component.

```html
<ul class="uk-tab" data-uk-tab>
  <li class="uk-active"><a href="#">Active</a></li>
  <li><a href="#">Item</a></li>
  <li>
    <a href="#">
      <span class="mr" style="--mr: 2">More</span>
      <uk-icon icon="chevron-down"></uk-icon>
    </a>
    <div class="uk-drop min-w" style="--min-w: 52" data-uk-dropdown="mode: click">
      <ul class="uk-nav uk-dropdown-nav">
        <li class="uk-active"><a href="#">Active</a></li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-header">Header</li>
        <li><a href="#">Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#">Item</a></li>
      </ul>
    </div>
  </li>
</ul>
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `connect` | CSS selector | `false` | Related content container. Defaults to the next `.uk-switcher` element. |
| `toggle` | CSS selector | `> *` | Toggle selector that triggers content switching. |
| `active` | Number | `0` | Active index on init. Negative values count from the end. |
| `animation` | String | `false` | Space-separated animation names; comma-separated for out animation. |
| `duration` | Number | `200` | Animation duration in ms. |
| `swiping` | Boolean | `true` | Enable swipe gestures. |
| `media` | Number, String | `960` | Breakpoint to switch vertical↔horizontal. Accepts px integer, breakpoint token (`@s`, `@m`, `@l`, `@xl`), or media query string. |

## JavaScript

### Initialization

```javascript
UIkit.tab(element, options);
```

### Events

| Name | Description |
| --- | --- |
| `beforeshow` | Fires before an item is shown. Call `preventDefault()` to cancel. |
| `show` | Fires after an item is shown. |
| `shown` | Fires after the show animation completes. |
| `beforehide` | Fires before an item is hidden. Call `preventDefault()` to cancel. |
| `hide` | Fires after the hide animation starts. |
| `hidden` | Fires after an item is hidden. |

### Methods

```javascript
UIkit.tab(element).show(index); // Show tab by 0-based index
```

## Accessibility

Follows the [Tab WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/). Roles and properties are set automatically:

- Tab navigation → `tablist` role; `aria-orientation: vertical` if also a Nav.
- Tab items → `presentation` role.
- Tab links → `tab` role, `aria-selected`, `aria-controls` pointing to content item ID.
- Content list → `presentation` role; items → `tabpanel` role with `aria-labelledby`.

### Keyboard Interaction

| Key | Action |
| --- | --- |
| `Tab` / `Shift+Tab` | Focus active tab; if already focused, move outside the navigation. |
| `←/→` or `↑/↓` (by orientation) | Navigate between tabs; wraps at ends. |
| `Enter` / `Space` | Activate the focused tab's content. |
| `Home` / `End` | Jump to first or last tab. |

By default, activation is manual (`Enter`/`Space` required). Set `follow-focus: true` to activate automatically on arrow-key navigation.