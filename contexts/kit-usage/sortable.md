# Sortable

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/javascript.md

Drag and drop items to reorder within a sortable grid. Useful for galleries, menus, and similar layouts.

## Usage

Add `data-uk-sortable` to a container with child elements.

```html
<!-- Basic: entire item is draggable -->
<ul
  class="display-grid grid-cols gap md:grid-cols"
  style="--grid-cols: 2; --md-grid-cols: 4; --gap: 4"
  data-uk-sortable
>
  <li>
    <div
      class="bg/o color p text-center"
      style="--bg: var(--uk-muted); --bg-o: var(--uk-muted-o); --color: var(--uk-muted-f); --p: 4"
    >Item 1</div>
  </li>
  <!-- Repeat li > div pattern for additional items -->
</ul>
```

## Handle

Use `handle: SELECTOR` to restrict dragging to a specific child element.

```html
<!-- Add uk-sortable-handle to the drag grip; add handle option to the attribute -->
<ul
  class="display-grid grid-cols gap md:grid-cols"
  style="--grid-cols: 2; --md-grid-cols: 4; --gap: 4"
  data-uk-sortable="handle: .uk-sortable-handle"
>
  <li>
    <div
      class="display-flex items-center justify-center bg/o color p text-center"
      style="--bg: var(--uk-muted); --bg-o: var(--uk-muted-o); --color: var(--uk-muted-f); --p: 4"
    >
      <span class="uk-sortable-handle mr size" style="--size: 4; --mr: 2">
        <uk-icon icon="move"></uk-icon>
      </span>
      Item 1
    </div>
  </li>
  <!-- Repeat for additional items -->
</ul>
```

## Group

Add `group: GROUP-NAME` to multiple lists to allow dragging items between them.

```html
<div class="display-grid grid-cols gap md:grid-cols" style="--grid-cols: 1; --md-grid-cols: 3; --gap: 4">
  <div class="uk-placeholder">
    <h4 class="uk-h4 mb" style="--mb: 4">Group 1</h4>
    <div class="space-y" style="--space-y: 4" data-uk-sortable="group: sortable-group">
      <div class="bg/o color p text-center" style="--bg: var(--uk-muted); --bg-o: var(--uk-muted-o); --color: var(--uk-muted-f); --p: 4">Item 1</div>
      <!-- More items -->
    </div>
  </div>
  <div class="uk-placeholder">
    <h4 class="uk-h4 mb" style="--mb: 4">Group 2</h4>
    <div class="space-y" style="--space-y: 4" data-uk-sortable="group: sortable-group">
      <div class="bg/o color p text-center" style="--bg: var(--uk-muted); --bg-o: var(--uk-muted-o); --color: var(--uk-muted-f); --p: 4">Item 1</div>
      <!-- More items -->
    </div>
  </div>
  <!-- Empty group: omit children from the inner div -->
</div>
```

## Custom Class

Use `cls-custom: MY-CLASS` to apply a class to items while being dragged.

```html
<ul class="max-w-sm space-y" style="--space-y: 4" data-uk-sortable="cls-custom: uk-placeholder">
  <li class="bg/o color p text-center" style="--bg: var(--uk-muted); --bg-o: var(--uk-muted-o); --color: var(--uk-muted-f); --p: 4">
    <a href="#">Item 1</a>
  </li>
  <!-- Repeat for additional items -->
</ul>
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `group` | String | | The group name for cross-list sorting. |
| `animation` | String, Boolean | `slide` | Animation mode (`slide`, `false`). |
| `duration` | Number | `250` | Animation duration in milliseconds. |
| `threshold` | Number | `5` | Mouse move threshold before drag starts. |
| `cls-item` | String | `uk-sortable-item` | The item class. |
| `cls-placeholder` | String | `uk-sortable-placeholder` | The placeholder class. |
| `cls-drag` | String | `uk-sortable-drag` | The ghost class. |
| `cls-drag-state` | String | `uk-drag` | The body's dragging class. |
| `cls-base` | String | `uk-sortable` | The list's class. |
| `cls-no-drag` | String | `uk-sortable-nodrag` | Disables dragging on matching elements. |
| `cls-empty` | String | `uk-sortable-empty` | The empty list class. |
| `cls-custom` | String | | The ghost's custom class. |
| `handle` | String | `false` | The handle selector. |

## JavaScript

### Initialization

```javascript
UIkit.sortable(element, options);
```

### Events

| Name | Description |
| --- | --- |
| `start` | Fires after dragging starts. |
| `stop` | Fires after dragging stops. |
| `moved` | Fires after an element has been moved. |
| `added` | Fires after an element has been added. |
| `removed` | Fires after an element has been removed. |