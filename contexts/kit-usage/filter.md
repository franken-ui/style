# Filter

## Important AI Instructions

* **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
* `uk-*` classes are FrankenstyleKit component classes.
* Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
* Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.

### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/nav.md
- https://franken.style/contexts/kit-usage/subnav.md
- https://franken.style/contexts/kit-usage/tab.md
- https://franken.style/contexts/kit-usage/masonry-grid.md
- https://franken.style/contexts/kit-usage/javascript.md

## Usage

Add `data-uk-filter="target: SELECTOR"` to a wrapper element. Inside it:

* Add filter controls using `data-uk-filter-control`
* Add filterable items inside the target container
* Use classes or `data-*` attributes as metadata

```html
<div data-uk-filter="target: .js-filter">
  <!-- Filter controls -->
  <ul class="uk-subnav uk-subnav-primary">
    <li class="uk-active" data-uk-filter-control>
      <a href="#">All</a>
    </li>

    <!-- Can also use: data-uk-filter-control="filter: .tag-blue" -->
    <li data-uk-filter-control=".tag-blue">
      <a href="#">Blue</a>
    </li>

    <li data-uk-filter-control=".tag-black">
      <a href="#">Black</a>
    </li>
  </ul>

  <!-- Filter items -->
  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols gap text-center"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3; --gap: 4"
  >
    <li class="tag-blue">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        Blue Item
      </div>
    </li>

    <li class="tag-black">
      <div
        class="bg p color"
        style="--bg: var(--color-black); --p: 4; --color: var(--color-white)"
      >
        Black Item
      </div>
    </li>

    <li class="tag-blue">
      <div class="p" style="--p: 4">Another Blue Item</div>
    </li>
  </ul>
</div>
```

If `target` is the only option, shorthand is allowed:

```html
<div data-uk-filter=".js-filter"></div>
```

If `filter` is the only option, shorthand is allowed:

```html
<li data-uk-filter-control=".tag-blue"></li>
```

The component is unstyled. Common control components include `Nav`, `Subnav`, and `Tab`.

## Animations

Default animation: `slide`

Options:

* `slide`
* `fade`
* `delayed-fade`
* `false`

```html
<!-- Replace fade with: slide, delayed-fade, false -->
<div data-uk-filter="target: .js-filter; animation: fade">
  ...
</div>
```

## Active State

Add `.uk-active` to apply a filter initially.

```html
<li class="uk-active" data-uk-filter-control="[data-color='blue']">
  <a href="#">Blue</a>
</li>
```

## Reset Filter

Use `data-uk-filter-control` without a selector to target all items.

```html
<li data-uk-filter-control>
  <a href="#">All</a>
</li>
```

## Metadata

Metadata can use classes or `data-*` attributes.

```html
<div data-uk-filter="target: .js-filter">
  <ul class="uk-subnav uk-subnav-primary">
    <li data-uk-filter-control="[data-tags*='blue']">
      <a href="#">Blue</a>
    </li>

    <li data-uk-filter-control="[data-tags*='dark']">
      <a href="#">Dark</a>
    </li>
  </ul>

  <ul class="js-filter">
    <li data-tags="blue dark"></li>
    <li data-tags="white"></li>
  </ul>
</div>
```

## Multiple Filters

Without groups, filters are exclusive: only one criterion is active at a time.

```html
<div data-uk-filter="target: .js-filter">
  <!-- Color filters -->
  <ul class="uk-subnav uk-subnav-primary">
    <li data-uk-filter-control="[data-color='blue']">
      <a href="#">Blue</a>
    </li>

    <li data-uk-filter-control="[data-color='black']">
      <a href="#">Black</a>
    </li>
  </ul>

  <!-- Size filters -->
  <ul class="uk-subnav uk-subnav-primary">
    <li data-uk-filter-control="[data-size='small']">
      <a href="#">Small</a>
    </li>

    <li data-uk-filter-control="[data-size='large']">
      <a href="#">Large</a>
    </li>
  </ul>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols text-center"
    data-uk-grid="masonry: true"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3"
  >
    <!-- Add more items with different metadata combinations -->
    <li class="p" data-color="blue" data-size="small" style="--p: 4">
      <div
        class="h bg color"
        style="
          --h: 60;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="uk-position-center">Small Blue</div>
      </div>
    </li>

    <li class="p" data-color="black" data-size="large" style="--p: 4">
      <div
        class="h bg color"
        style="--h: 96; --bg: var(--color-black); --color: var(--color-white)"
      >
        <div class="uk-position-center">Large Black</div>
      </div>
    </li>
  </ul>
</div>
```

## Groups

Use `group: NAME` to combine multiple filter criteria simultaneously.

```html
<div data-uk-filter="target: .js-filter">
  <!-- Color group -->
  <ul class="uk-subnav uk-subnav-primary">
    <li
      data-uk-filter-control="filter: [data-color='blue']; group: color"
    >
      <a href="#">Blue</a>
    </li>

    <li
      data-uk-filter-control="filter: [data-color='white']; group: color"
    >
      <a href="#">White</a>
    </li>
  </ul>

  <!-- Size group -->
  <ul class="uk-subnav uk-subnav-primary">
    <li
      data-uk-filter-control="filter: [data-size='small']; group: size"
    >
      <a href="#">Small</a>
    </li>

    <li
      data-uk-filter-control="filter: [data-size='large']; group: size"
    >
      <a href="#">Large</a>
    </li>
  </ul>

  <ul class="js-filter">
    <li data-color="blue" data-size="small"></li>
  </ul>
</div>
```

## Sorting

Use `sort: ATTRIBUTE` to sort alphanumerically.

Ascending is default. Add `order: desc` for descending.

```html
<div data-uk-filter="target: .js-filter">
  <ul class="uk-subnav uk-subnav-primary">
    <li class="uk-active" data-uk-filter-control="sort: data-date">
      <a href="#">Asc</a>
    </li>

    <li data-uk-filter-control="sort: data-date; order: desc">
      <a href="#">Desc</a>
    </li>
  </ul>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols gap text-center"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3; --gap: 4"
  >
    <!-- Add more items -->
    <li data-date="2026-01-15">
      <div class="p" style="--p: 4">2026-01-15</div>
    </li>

    <li data-date="2026-08-22">
      <div
        class="bg p color"
        style="
          --bg: var(--color-blue-500);
          --p: 4;
          --color: var(--color-blue-50);
        "
      >
        2026-08-22
      </div>
    </li>
  </ul>
</div>
```

## Masonry Grid

Filter works with any layout, including Masonry Grid and parallax masonry layouts.

```html
<div data-uk-filter="target: .js-filter">
  <div class="display-flex items-center justify-between">
    <!-- Filter groups -->
    <div class="flex-1">
      <div
        class="display-flex gap-x divide-x border/o"
        style="
          --gap-x: 4;
          --divide-x: 1;
          --border: var(--uk-border);
          --border-o: var(--uk-border-o);
        "
      >
        <!-- Add filter controls here -->
      </div>
    </div>

    <!-- Sorting -->
    <div class="display-flex flex-none gap-x" style="--gap-x: 4">
      <span class="uk-active" data-uk-filter-control="sort: data-name">
        <a class="uk-icon-link" href="#" aria-label="Sort ascending">
          <uk-icon icon="arrow-down"></uk-icon>
        </a>
      </span>

      <span data-uk-filter-control="sort: data-name; order: desc">
        <a class="uk-icon-link" href="#" aria-label="Sort descending">
          <uk-icon icon="arrow-up"></uk-icon>
        </a>
      </span>
    </div>
  </div>

  <ul
    class="js-filter mt display-grid grid-cols md:grid-cols text-center"
    data-uk-grid="masonry: true"
    style="--mt: 4; --grid-cols: 2; --md-grid-cols: 3"
  >
    <!-- Example item -->
    <li
      class="p"
      data-name="A"
      data-color="blue"
      data-size="medium"
      style="--p: 4"
    >
      <div
        class="h bg color"
        style="
          --h: 80;
          --bg: var(--color-blue-500);
          --color: var(--color-blue-50);
        "
      >
        <div class="uk-position-center">A</div>
      </div>
    </li>
  </ul>
</div>
```

## Component Options

| Option      | Value           | Default | Description                                  |
| ----------- | --------------- | ------- | -------------------------------------------- |
| `target`    | String          |         | Target list to filter.                       |
| `selActive` | String, Boolean | `false` | Initially active controls selector.          |
| `animation` | String, Boolean | `slide` | `slide`, `fade`, `delayed-fade`, or `false`. |
| `duration`  | Number          | `250`   | Animation duration in ms.                    |

`target` is the primary option; its key may be omitted if it's the only option.

## JavaScript

### Initialization

```js
UIkit.filter(element, options);
```

### Events

| Name           | Description             |
| -------------- | ----------------------- |
| `beforeFilter` | Fires before filtering. |
| `afterFilter`  | Fires after filtering.  |

## Accessibility

The component automatically applies appropriate WAI-ARIA roles and states.

* Filter controls use `aria-selected`
