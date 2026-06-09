# Parallax

## Important AI Instructions

- **Framework:** This is **Frankenstyle**, not Tailwind CSS. They look similar but are not the same.
- `uk-*` classes are FrankenstyleKit component classes.
- Non-`uk-*` classes (e.g. `display-flex`, `h`, `bg-cover`, `bg-image`, `m-auto`, `mx-auto`, `w`, `mt`, `gap`, `p`, `color`) are Frankenstyle utility classes — not Tailwind.
- Unfamiliar with Frankenstyle? Try to download https://franken.style/contexts/fs-usage.md — if you can't, ask the user to upload it manually.


### Relevant documents

For better context, please download the following or ask the user to manually upload them:

- https://franken.style/contexts/kit-usage/svg.md
- https://franken.style/contexts/kit-usage/javascript.md

## Usage

Add `data-uk-parallax` to any element. Use these options to animate CSS properties:

| Option | Description | Values | Start Value |
| --- | --- | --- | --- |
| `x` | Animate translateX. | Length | `0` |
| `y` | Animate translateY. | Length | `0` |
| `bgy` | Animate background Y position. | Length | *Initial* |
| `bgx` | Animate background X position. | Length | *Initial* |
| `rotate` | Animate rotation clockwise. | `deg` | `0` |
| `scale` | Animate scaling. | Number, Length | `1` |
| `color` | Animate color. | Color | *Initial* |
| `background-color` | Animate background-color. | Color | *Initial* |
| `border-color` | Animate border color. | Color | *Initial* |
| `opacity` | Animate opacity. | Number | *Initial* |
| `blur` | Animate blur filter. | `px` | `0` |
| `hue` | Animate hue rotation filter. | `deg` | `0` |
| `grayscale` | Animate grayscale filter. | `%` | `0` |
| `invert` | Animate invert filter. | `%` | `0` |
| `saturate` | Animate saturate filter. | `%` | `0` |
| `sepia` | Animate sepia filter. | `%` | `0` |
| `stroke` | Animate SVG strokes. | | `0` |

Length values accept `px`, `%`, `vw`, `vh`. The `px` unit can be omitted (`x: 200` = `x: 200px`). Supports `+` and `-` math.

```html
<div data-uk-parallax="bgy: -200"><!-- content --></div>
```

Full example (hero with background parallax):

```html
<div class="display-flex h bg-cover bg-image" data-uk-parallax="bgy: -200"
  style="--h: 80; --bg-image: url('/images/dark.jpg')">
  <h1 class="uk-h1 uk-margin-auto-vertical mx-auto w text-center color"
    style="--w: 50%; --color: var(--color-white)">Headline</h1>
</div>
```

## Start / Stop

A single value animates from the start value to the stop. Two comma-separated values define a custom start and end.

```html
<!-- Single stop: animates from default start to -200 -->
<div data-uk-parallax="bgy: -200"><!-- content --></div>

<!-- Start/stop: animates from 0 to 1 -->
<div data-uk-parallax="opacity: 0,1"><!-- content --></div>

<!-- Combined properties -->
<div data-uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;"><!-- content --></div>
```

## Multiple Stops

Add more comma-separated values for intermediate stops. Animation is equally distributed between them.

```html
<div data-uk-parallax="x: 0,50,150"><!-- content --></div>
<div data-uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; end: 50vh + 50%;"><!-- content --></div>
```

## Stop Positions

Append a percentage after a value to set when that stop occurs along the animation sequence.

```html
<div data-uk-parallax="x: 0,50 10%,150 50%"><!-- content --></div>
```

## Nesting

Parallax animations nest freely. Use `target` to sync inner animations to an outer element's scroll position.

```html
<div data-uk-parallax="bgx: -50">
  <div data-uk-parallax="x: -100,100"><!-- content --></div>
</div>
```

## Target

By default, animation ties to the element's own viewport position. Use `target` to use another element's visibility as the reference.

```html
<div id="target">
  <div data-uk-parallax="target: #target; y: 100,0"><!-- content --></div>
</div>
```

## Start and End

Control when the animation starts and ends relative to the viewport. Values accept `vh`, `%`, `px`, and `+`/`-` math. Default `0` = element border meets viewport border.

```html
<div data-uk-parallax="start: 100%; end: 100%;"><!-- content --></div>
<div data-uk-parallax="start: 30vh; end: 30vh;"><!-- content --></div>
<div data-uk-parallax="start: 100% + 100; end: 100% + 100;"><!-- content --></div>
```

## Easing

Controls animation speed curve. `0` = linear. Negative = fast start, slow end. Positive = slow start, fast end.

```html
<div data-uk-parallax="y: 200; easing: -2"><!-- fast→slow --></div>
<div data-uk-parallax="y: 200; easing: 0"><!-- linear --></div>
<div data-uk-parallax="y: 200; easing: 2"><!-- slow→fast --></div>
```

## Colors

Animate `color`, `background-color`, or `border-color`. Use `rgb()`, color keywords, or hex values.

```html
<div data-uk-parallax="background-color: yellow,white; border-color: #00f,#f00;"><!-- content --></div>
<div data-uk-parallax="color: #0f0;"><!-- content --></div>
```

## Filters

Animate CSS filter properties (`blur`, `sepia`, `grayscale`, `hue`, `invert`, `saturate`).

```html
<div data-uk-parallax="blur: 10; sepia: 100;"><!-- content --></div>
<div data-uk-parallax="start: 100%; end: 100%; sepia: 100;"><!-- content --></div>
```

## SVG Strokes

Wrap the SVG in a parent with `data-uk-parallax="stroke: ..."`. Use `%` so you don't need to know the exact stroke length. Use the SVG component (`svg.md`) to inject the SVG automatically.

```html
<div data-uk-parallax="start: 100%; end: 100%; stroke: 100%;">
  <img src="/images/strokes.svg" width="250" height="250" alt="" data-uk-svg />
</div>
```

## SVG Images

Apply parallax directly to SVG elements like `rect`, `circle`, and `path`.

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="10" height="10" data-uk-parallax="rotate: 360" />
</svg>
```

## Responsive

Use `vw`/`vh` units for viewport-relative animations. Use `media` to activate parallax only above a certain viewport width.

```html
<!-- Active at @m breakpoint and above -->
<div data-uk-parallax="media: @m"><!-- content --></div>

<!-- Values: a px integer (e.g. 640), breakpoint (@s, @m, @l, @xl), or media query -->
```

## Component Options

| Option | Value | Default | Description |
| --- | --- | --- | --- |
| `easing` | Number | `1` | Animation easing during scrolling. |
| `target` | CSS Selector | `false` | Element used as dimension reference for animation duration. |
| `start` | Length | `0` | Animation start offset (`vh`, `%`, `px`, supports `+`/`-`). Default: target top meets viewport bottom. |
| `end` | Length | `0` | Animation end offset. Default: target bottom meets viewport top. |
| `media` | Boolean, Number, String | `false` | Activation condition: px integer, breakpoint (`@s`–`@xl`), or media query. |

## JavaScript

### Initialization

```javascript
UIkit.parallax(element, options);
```