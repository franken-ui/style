# Masonry Grid

## Usage

To create the masonry grid, add the `uk-grid="masonry: true"` attribute to a `<div>` element with either `.flex` and `.flex-wrap` or with `.grid` class to create a layout free of gaps.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-uk-grid="masonry: true"
>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 100px"
    >
      Item 1
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 150px"
    >
      Item 2
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 300px"
    >
      Item 3
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 120px"
    >
      Item 4
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 180px"
    >
      Item 5
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 250px"
    >
      Item 6
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 140px"
    >
      Item 7
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 210px"
    >
      Item 8
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="uk-card display-flex items-center justify-center"
      style="height: 200px"
    >
      Item 9
    </div>
  </div>
</div>
```

## Masonry pack

To sort items into columns with the most room to make column heights as equal as possible, you can use the `uk-grid="masonry: pack"` attribute.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-uk-grid="masonry: pack"
>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #f7fee7; color: #3f6212; height: 140px"
    >
      Item 1
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #ecfccb; color: #3f6212; height: 180px"
    >
      Item 2
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #d9f99d; color: #3f6212; height: 220px"
    >
      Item 3
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #bef264; color: #3f6212; height: 280px"
    >
      Item 4
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #a3e635; color: #3f6212; height: 140px"
    >
      Item 5
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #84cc16; color: #f7fee7; height: 200px"
    >
      Item 6
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #65a30d; color: #f7fee7; height: 250px"
    >
      Item 7
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #4d7c0f; color: #f7fee7; height: 320px"
    >
      Item 8
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #3f6212; color: #f7fee7; height: 160px"
    >
      Item 9
    </div>
  </div>
</div>
```

## Masonry next

To sort items with their natural order, simply use the `uk-grid="masonry: next"` attribute.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-uk-grid="masonry: next"
>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #f0f9ff; color: #082f49; height: 140px"
    >
      Item 1
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #e0f2fe; color: #082f49; height: 180px"
    >
      Item 2
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #bae6fd; color: #082f49; height: 220px"
    >
      Item 3
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #7dd3fc; color: #082f49; height: 280px"
    >
      Item 4
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #38bdf8; color: #082f49; height: 140px"
    >
      Item 5
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #0ea5e9; color: #f0f9ff; height: 200px"
    >
      Item 6
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #0284c7; color: #f0f9ff; height: 250px"
    >
      Item 7
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #0369a1; color: #f0f9ff; height: 320px"
    >
      Item 8
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #075985; color: #f0f9ff; height: 160px"
    >
      Item 9
    </div>
  </div>
</div>
```

## With parallax

To move single columns of a grid at different speeds while scrolling, just add `parallax: NUMBER` to the `uk-grid` attribute. The number sets the parallax translation in pixels.

```html
<div
  class="display-grid sm:grid-cols md:grid-cols"
  style="--sm-grid-cols: 2; --md-grid-cols: 3"
  data-uk-grid="masonry: pack; parallax: 150"
>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #fdf4ff; color: #4a044e; height: 140px"
    >
      Item 1
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #fae8ff; color: #4a044e; height: 180px"
    >
      Item 2
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #f5d0fe; color: #4a044e; height: 220px"
    >
      Item 3
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #f0abfc; color: #4a044e; height: 280px"
    >
      Item 4
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #e879f9; color: #4a044e; height: 140px"
    >
      Item 5
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #d946ef; color: #fdf4ff; height: 200px"
    >
      Item 6
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #c026d3; color: #fdf4ff; height: 250px"
    >
      Item 7
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #a21caf; color: #fdf4ff; height: 320px"
    >
      Item 8
    </div>
  </div>
  <div class="p" style="--p: 4">
    <div
      class="display-flex items-center justify-center"
      style="background: #4a044e; color: #fdf4ff; height: 160px"
    >
      Item 9
    </div>
  </div>
</div>
```

To adjust the grid parallax duration, set the `parallax-start` and `parallax-end` options. The `parallax-start` option defines when the animation starts. The default value of `0` means that the grid's top border and the viewport's bottom border intersect. The `end` option defines when the animation ends. The default value of `0` means that the grid's bottom border and the viewport's top border intersect. Values can be set in any dimension units, namely `vh`, `%` and `px`. The `%` unit relates to the grid's height. Both options allow basic mathematics operands, `+` and `-`.

```html
<div data-uk-grid="parallax: 150; parallax-start: 100%; parallax-end: 100%;">
  <!-- ... -->
</div>
```

To justify the grid parallax if columns have different heights, for example in masonry grids, set the `parallax-justify: true` option so all grid columns reach the bottom at the same time. Set `parallax: 0` to only move the columns by their height until they justify. But of course an additional parallax translation value can be set as well.

```html
<div data-uk-grid="parallax: 0; parallax-justify: true; masonry: pack">
  <!-- ... -->
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option             | Value           | Default                 | Description                                                                                                                                                                                         |
| ------------------ | --------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `margin `          | String          | `uk-grid-margin`        | This class is added to items that break into the next row, typically to create margin to the previous row.                                                                                          |
| `first-column`     | String          | `uk-first-column`       | This class is added to the first element in each row.                                                                                                                                               |
| `masonry`          | String, Boolean | `false`, `pack`, `next` | Enables masonry layout for this grid.                                                                                                                                                               |
| `parallax`         | Number          | `0`                     | Parallax translation value. The value can be in vh, % and px. Falsy disables the parallax effect (default).                                                                                         |
| `parallax-start`   | Length          | `0`                     | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the grid's top border and viewport's bottom border intersect.   |
| `parallax-end`     | Length          | `0`                     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the grid's bottom border and the viewport's top border intersect. |
| `parallax-justify` | Boolean         | `false`                 | With parallax enabled, all columns will reach the bottom at the same time.                                                                                                                          |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
UIkit.grid(element, options);
```