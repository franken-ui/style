# Masonry Grid

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `mt`, `bg`, `display-flex`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload it:

- https://franken.style/contexts/kit-usage/javascript.md

## Usage

Add `data-uk-grid="masonry: true"` to a `<div>` with `.display-grid` (or `.flex.flex-wrap`) to create a gap-free masonry layout.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-uk-grid="masonry: true"
>
  <div class="p" style="--p: 4">
    <div class="uk-card display-flex items-center justify-center" style="height: 100px">Item 1</div>
  </div>
  <div class="p" style="--p: 4">
    <div class="uk-card display-flex items-center justify-center" style="height: 150px">Item 2</div>
  </div>
  <div class="p" style="--p: 4">
    <div class="uk-card display-flex items-center justify-center" style="height: 300px">Item 3</div>
  </div>
  <!-- add more items as needed -->
</div>
```

## Masonry Modes

Three values control how items are sorted into columns:

| Value | Behaviour |
| --- | --- |
| `masonry: true` | Default — items fill columns top-to-bottom in source order |
| `masonry: pack` | Items are redistributed so column heights are as equal as possible |
| `masonry: next` | Items fill columns in natural/source order (similar to `true` but column-first) |

```html
<!-- Replace masonry: pack with masonry: true or masonry: next -->
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-uk-grid="masonry: pack"
>
  <div class="p" style="--p: 4">
    <div class="display-flex items-center justify-center" style="height: 140px">Item 1</div>
  </div>
  <div class="p" style="--p: 4">
    <div class="display-flex items-center justify-center" style="height: 220px">Item 2</div>
  </div>
  <div class="p" style="--p: 4">
    <div class="display-flex items-center justify-center" style="height: 280px">Item 3</div>
  </div>
  <!-- add more items as needed -->
</div>
```

## With Parallax

Add `parallax: NUMBER` to `uk-grid` to move grid columns at different speeds while scrolling. The number is the translation in pixels.

```html
<!-- Basic parallax -->
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-uk-grid="masonry: pack; parallax: 150"
>
  <!-- items -->
</div>

<!-- Custom start/end offsets (vh, %, or px; supports + and -) -->
<!-- parallax-start: when animation begins (default 0 = grid top meets viewport bottom) -->
<!-- parallax-end:   when animation ends   (default 0 = grid bottom meets viewport top) -->
<div data-uk-grid="parallax: 150; parallax-start: 100%; parallax-end: 100%">
  <!-- items -->
</div>

<!-- parallax-justify: all columns reach the bottom at the same time -->
<!-- use parallax: 0 to move columns only by their height difference -->
<div data-uk-grid="parallax: 0; parallax-justify: true; masonry: pack">
  <!-- items -->
</div>
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `margin` | String | `uk-grid-margin` | Class added to items that break into the next row. |
| `first-column` | String | `uk-first-column` | Class added to the first element in each row. |
| `masonry` | Boolean / String | `false` | Enables masonry. Values: `true`, `pack`, `next`. |
| `parallax` | Number | `0` | Parallax translation in px/vh/%. `0` disables it. |
| `parallax-start` | Length | `0` | Animation start offset (vh, %, px; supports `+`/`-`). |
| `parallax-end` | Length | `0` | Animation end offset (vh, %, px; supports `+`/`-`). |
| `parallax-justify` | Boolean | `false` | All columns reach the bottom simultaneously. |

## JavaScript

### Initialization

```js
UIkit.grid(element, options);
```