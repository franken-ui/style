# Frankenstyle

Frankenstyle is a no-build, value-driven, fully responsive, utility-first CSS framework. It’s designed to be lightweight, production-ready, and to strike a balance between developer ergonomics and build size.

## Installation

Frankenstyle can be used via CDN or downloaded and referenced locally.

### CDN

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/frankenstyle@latest/dist/css/frankenstyle.min.css"
/>
```

### NPM

```bash
npm i frankenstyle@latest
```

Then import it in your `main.css`:

```css
@import 'frankenstyle/css/frankenstyle.css';
```

### JavaScript

JavaScript is optional, but important for interactive states:

```html
<script src="https://unpkg.com/frankenstyle@latest/dist/js/frankenstyle.min.js"></script>
```

## Core Concepts & Usage

Think of Frankenstyle as _Tailwind CSS, but de-valued_. Frankenstyle provides the class, you provide the value.

```html
<div class="m sm:m md:m" style="--m: 4; --sm-m: 8; --md-m: 16"></div>
```

Behind the scenes, values are multiplied by a base spacing variable (e.g., `var(--spacing)`).

Need arbitrary values? Wrap in brackets:

```html
<div class="[m]" style="--m: 4px;"></div>
```

You don’t need to memorize odd variable names — just drop special characters from the class.

- `sm:m` → `--sm-m`
- `dark:sm:bg:hover` → `--dark-sm-bg-hover`

### States

Interactive states (e.g., hover) are generated on demand. Mark an element with `data-uk`, and the runtime will generate the necessary pseudo-state CSS.

```html
<button
  type="button"
  class="color bg dark:bg bg:hover dark:bg:hover px py rounded-lg text-sm font-medium"
  style="
        --color: var(--color-white);
        --bg: var(--color-blue-700);
        --dark-bg: var(--color-pink-600);
        --bg-hover: var(--color-blue-800);
        --dark-bg-hover: var(--color-pink-700);
        --px: 5;
        --py: 2.5;
    "
  data-uk
>
  Default
</button>
```

This avoids shipping huge CSS files for states up front — everything is generated at runtime when needed.

### Dark Mode

Prefix color utilities with `dark:`:

- `bg` → `dark:bg`
- `color` → `dark:color`
- `border` → `dark:border`
- `fill` → `dark:fill`

### Opacity

Suffix color utilities with `/o`. These require two variables (base + opacity) to avoid inheritance issues:

```html
<div
  class="bg/o dark:bg/o"
  style="
    --bg: var(--color-blue-800);
    --bg-o: 80%;
    --dark-bg: var(--color-green-800);
    --dark-bg-o: 80%;
  "
></div>
```

### Responsiveness

Prefix classes with breakpoints:

- `sm:`
- `md:`
- `lg:`
- `xl:`
- `2xl:`

```html
<div class="p sm:p md:p" style="--p: 4; --sm-p: 8; --md-p: 16"></div>
```

## Key Differences from Tailwind

- **No config, no file watchers** → everything is statically pre-built.
- **Value-driven utilities** → use `m` + `--m: 8` or `[m]` for arbitrary values, not `m-8` or `m-[8px]`.
- **State syntax is reversed** → `bg:hover` instead of `hover:bg-blue-600`.
- **Runtime state generation** → hover/active CSS is created on the fly, keeping static builds small.
- **Familiar patterns** → utilities, responsive prefixes, and naming feel similar to Tailwind.



## Accent Color Opacity

### Utilities (value-driven)

| Selector         | Style                                                                                             | Variables Required                 |
| ---------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------- |
| `.accent/o`      | `accent-color: color-mix( in oklab, var(--accent) var(--accent-o, 100%), transparent )`           | `--accent`, `--accent-o`           |
| `.dark:accent/o` | `accent-color: color-mix( in oklab, var(--dark-accent) var(--dark-accent-o, 100%), transparent )` | `--dark-accent`, `--dark-accent-o` |



## Accent Color

### Utilities (value-driven)

| Selector       | Style                              | Variables Required |
| -------------- | ---------------------------------- | ------------------ |
| `.accent`      | `accent-color: var(--accent)`      | `--accent`         |
| `.dark:accent` | `accent-color: var(--dark-accent)` | `--dark-accent`    |



## Align Content

### Utilities (absolute values)

| Selector            | Style                          |
| ------------------- | ------------------------------ |
| `.content-normal`   | `align-content: normal`        |
| `.content-center`   | `align-content: center`        |
| `.content-start`    | `align-content: flex-start`    |
| `.content-end`      | `align-content: flex-end`      |
| `.content-between`  | `align-content: space-between` |
| `.content-around`   | `align-content: space-around`  |
| `.content-evenly`   | `align-content: space-evenly`  |
| `.content-baseline` | `align-content: baseline`      |
| `.content-stretch`  | `align-content: stretch`       |



## Align Items

### Utilities (absolute values)

| Selector               | Style                        |
| ---------------------- | ---------------------------- |
| `.items-start`         | `align-items: flex-start`    |
| `.items-end`           | `align-items: flex-end`      |
| `.items-center`        | `align-items: center`        |
| `.items-stretch`       | `align-items: stretch`       |
| `.items-baseline`      | `align-items: baseline`      |
| `.items-end-safe`      | `align-items: safe flex-end` |
| `.items-center-safe`   | `align-items: safe center`   |
| `.items-baseline-last` | `align-items: last baseline` |



## Align Self

### Utilities (absolute values)

| Selector              | Style                       |
| --------------------- | --------------------------- |
| `.self-auto`          | `align-self: auto`          |
| `.self-start`         | `align-self: flex-start`    |
| `.self-end`           | `align-self: flex-end`      |
| `.self-center`        | `align-self: center`        |
| `.self-stretch`       | `align-self: stretch`       |
| `.self-baseline`      | `align-self: baseline`      |
| `.self-end-safe`      | `align-self: safe flex-end` |
| `.self-center-safe`   | `align-self: safe center`   |
| `.self-baseline-last` | `align-self: last baseline` |



## Animate

### Utilities (value-driven)

| Selector   | Style                       | Variables Required |
| ---------- | --------------------------- | ------------------ |
| `.animate` | `animation: var(--animate)` | `--animate`        |

### Utilities (absolute values)

| Selector          | Style                              |
| ----------------- | ---------------------------------- |
| `.animate-spin`   | `animation: var(--animate-spin)`   |
| `.animate-ping`   | `animation: var(--animate-ping)`   |
| `.animate-pulse`  | `animation: var(--animate-pulse)`  |
| `.animate-bounce` | `animation: var(--animate-bounce)` |
| `.animate-none`   | `animation: none`                  |



## Appearance

### Utilities (absolute values)

| Selector           | Style              |
| ------------------ | ------------------ |
| `.appearance-none` | `appearance: none` |
| `.appearance-auto` | `appearance: auto` |



## Aspect Ratio

### Utilities (value-driven)

| Selector  | Style                         | Variables Required |
| --------- | ----------------------------- | ------------------ |
| `.aspect` | `aspect-ratio: var(--aspect)` | `--aspect`         |

### Utilities (absolute values)

| Selector         | Style                               |
| ---------------- | ----------------------------------- |
| `.aspect-square` | `aspect-ratio: 1/1`                 |
| `.aspect-video`  | `aspect-ratio: var(--aspect-video)` |
| `.aspect-auto`   | `aspect-ratio: auto`                |



## Backdrop Blur

### Utilities (value-driven)

| Selector         | Style                                    | Variables Required |
| ---------------- | ---------------------------------------- | ------------------ |
| `.backdrop-blur` | `backdrop-filter: blur(--backdrop-blur)` | -                  |

### Utilities (absolute values)

| Selector              | Style                           |
| --------------------- | ------------------------------- |
| `.backdrop-blur-xs`   | `filter: blur(var(--blur-xs))`  |
| `.backdrop-blur-sm`   | `filter: blur(var(--blur-sm))`  |
| `.backdrop-blur-md`   | `filter: blur(var(--blur-md))`  |
| `.backdrop-blur-lg`   | `filter: blur(var(--blur-lg))`  |
| `.backdrop-blur-xl`   | `filter: blur(var(--blur-xl))`  |
| `.backdrop-blur-2xl`  | `filter: blur(var(--blur-2xl))` |
| `.backdrop-blur-3xl`  | `filter: blur(var(--blur-3xl))` |
| `.backdrop-blur-none` | `filter: blur(0)`               |



## Backdrop Brightness

### Utilities (value-driven)

| Selector               | Style                                                | Variables Required |
| ---------------------- | ---------------------------------------------------- | ------------------ |
| `.backdrop-brightness` | `backdrop-filter: brightness(--backdrop-brightness)` | -                  |



## Backdrop Contrast

### Utilities (value-driven)

| Selector             | Style                                            | Variables Required |
| -------------------- | ------------------------------------------------ | ------------------ |
| `.backdrop-contrast` | `backdrop-filter: contrast(--backdrop-contrast)` | -                  |



## Backdrop Filter

### Utilities (value-driven)

| Selector           | Style                                     | Variables Required  |
| ------------------ | ----------------------------------------- | ------------------- |
| `.backdrop-filter` | `backdrop-filter: var(--backdrop-filter)` | `--backdrop-filter` |

### Utilities (absolute values)

| Selector                | Style                   |
| ----------------------- | ----------------------- |
| `.backdrop-filter-none` | `backdrop-filter: none` |



## Backdrop Grayscale

### Utilities (value-driven)

| Selector              | Style                                              | Variables Required |
| --------------------- | -------------------------------------------------- | ------------------ |
| `.backdrop-grayscale` | `backdrop-filter: grayscale(--backdrop-grayscale)` | -                  |



## Backdrop Hue Rotate

### Utilities (value-driven)

| Selector               | Style                                                | Variables Required |
| ---------------------- | ---------------------------------------------------- | ------------------ |
| `.backdrop-hue-rotate` | `backdrop-filter: hue-rotate(--backdrop-hue-rotate)` | -                  |



## Backdrop Invert

### Utilities (value-driven)

| Selector           | Style                                        | Variables Required |
| ------------------ | -------------------------------------------- | ------------------ |
| `.backdrop-invert` | `backdrop-filter: invert(--backdrop-invert)` | -                  |



## Backdrop Opacity

### Utilities (value-driven)

| Selector            | Style                                          | Variables Required |
| ------------------- | ---------------------------------------------- | ------------------ |
| `.backdrop-opacity` | `backdrop-filter: opacity(--backdrop-opacity)` | -                  |



## Backdrop Saturate

### Utilities (value-driven)

| Selector             | Style                                            | Variables Required |
| -------------------- | ------------------------------------------------ | ------------------ |
| `.backdrop-saturate` | `backdrop-filter: saturate(--backdrop-saturate)` | -                  |



## Backdrop Sepia

### Utilities (value-driven)

| Selector          | Style                                      | Variables Required |
| ----------------- | ------------------------------------------ | ------------------ |
| `.backdrop-sepia` | `backdrop-filter: sepia(--backdrop-sepia)` | -                  |



## Backface Visibility

### Utilities (absolute values)

| Selector            | Style                          |
| ------------------- | ------------------------------ |
| `.backface-hidden`  | `backface-visibility: hidden`  |
| `.backface-visible` | `backface-visibility: visible` |



## Background Attachment

### Utilities (absolute values)

| Selector     | Style                           |
| ------------ | ------------------------------- |
| `.bg-fixed`  | `background-attachment: fixed`  |
| `.bg-local`  | `background-attachment: local`  |
| `.bg-scroll` | `background-attachment: scroll` |



## Background Blend Mode

### Utilities (absolute values)

| Selector                | Style                                |
| ----------------------- | ------------------------------------ |
| `.bg-blend-normal`      | `background-blend-mode: normal`      |
| `.bg-blend-multiply`    | `background-blend-mode: multiply`    |
| `.bg-blend-screen`      | `background-blend-mode: screen`      |
| `.bg-blend-overlay`     | `background-blend-mode: overlay`     |
| `.bg-blend-darken`      | `background-blend-mode: darken`      |
| `.bg-blend-lighten`     | `background-blend-mode: lighten`     |
| `.bg-blend-color-dodge` | `background-blend-mode: color-dodge` |
| `.bg-blend-color-burn`  | `background-blend-mode: color-burn`  |
| `.bg-blend-hard-light`  | `background-blend-mode: hard-light`  |
| `.bg-blend-soft-light`  | `background-blend-mode: soft-light`  |
| `.bg-blend-difference`  | `background-blend-mode: difference`  |
| `.bg-blend-exclusion`   | `background-blend-mode: exclusion`   |
| `.bg-blend-hue`         | `background-blend-mode: hue`         |
| `.bg-blend-saturation`  | `background-blend-mode: saturation`  |
| `.bg-blend-color`       | `background-blend-mode: color`       |
| `.bg-blend-luminosity`  | `background-blend-mode: luminosity`  |



## Background Clip

### Utilities (absolute values)

| Selector           | Style                          |
| ------------------ | ------------------------------ |
| `.bg-clip-border`  | `background-clip: border-box`  |
| `.bg-clip-padding` | `background-clip: padding-box` |
| `.bg-clip-content` | `background-clip: content-box` |
| `.bg-clip-text`    | `background-clip: text`        |



## Background Color Opacity

### Utilities (value-driven)

| Selector     | Style                                                                                         | Variables Required         |
| ------------ | --------------------------------------------------------------------------------------------- | -------------------------- |
| `.bg/o`      | `background-color: color-mix( in oklab, var(--bg) var(--bg-o, 100%), transparent )`           | `--bg`, `--bg-o`           |
| `.dark:bg/o` | `background-color: color-mix( in oklab, var(--dark-bg) var(--dark-bg-o, 100%), transparent )` | `--dark-bg`, `--dark-bg-o` |



## Background Color

### Utilities (value-driven)

| Selector   | Style                              | Variables Required |
| ---------- | ---------------------------------- | ------------------ |
| `.bg`      | `background-color: var(--bg)`      | `--bg`             |
| `.dark:bg` | `background-color: var(--dark-bg)` | `--dark-bg`        |



## Background Image

### Utilities (value-driven)

| Selector    | Style                               | Variables Required |
| ----------- | ----------------------------------- | ------------------ |
| `.bg-image` | `background-image: var(--bg-image)` | `--bg-image`       |

### Utilities (absolute values)

| Selector         | Style                    |
| ---------------- | ------------------------ |
| `.bg-image-none` | `background-image: none` |



## Background Origin

### Utilities (absolute values)

| Selector             | Style                            |
| -------------------- | -------------------------------- |
| `.bg-origin-border`  | `background-origin: border-box`  |
| `.bg-origin-padding` | `background-origin: padding-box` |
| `.bg-origin-content` | `background-origin: content-box` |



## Background Position

### Utilities (value-driven)

| Selector       | Style                                     | Variables Required |
| -------------- | ----------------------------------------- | ------------------ |
| `.bg-position` | `background-position: var(--bg-position)` | `--bg-position`    |

### Utilities (absolute values)

| Selector           | Style                               |
| ------------------ | ----------------------------------- |
| `.bg-top-left`     | `background-position: top left`     |
| `.bg-top`          | `background-position: top`          |
| `.bg-top-right`    | `background-position: top right`    |
| `.bg-left`         | `background-position: left`         |
| `.bg-center`       | `background-position: center`       |
| `.bg-right`        | `background-position: right`        |
| `.bg-bottom-left`  | `background-position: bottom left`  |
| `.bg-bottom`       | `background-position: bottom`       |
| `.bg-bottom-right` | `background-position: bottom right` |



## Background Repeat

### Utilities (absolute values)

| Selector           | Style                          |
| ------------------ | ------------------------------ |
| `.bg-repeat`       | `background-repeat: repeat`    |
| `.bg-repeat-x`     | `background-repeat: repeat-x`  |
| `.bg-repeat-y`     | `background-repeat: repeat-y`  |
| `.bg-repeat-space` | `background-repeat: space`     |
| `.bg-repeat-round` | `background-repeat: round`     |
| `.bg-no-repeat`    | `background-repeat: no-repeat` |



## Background Size

### Utilities (value-driven)

| Selector   | Style                             | Variables Required |
| ---------- | --------------------------------- | ------------------ |
| `.bg-size` | `background-size: var(--bg-size)` | `--bg-size`        |

### Utilities (absolute values)

| Selector      | Style                      |
| ------------- | -------------------------- |
| `.bg-auto`    | `background-size: auto`    |
| `.bg-cover`   | `background-size: cover`   |
| `.bg-contain` | `background-size: contain` |



## Blur

### Utilities (value-driven)

| Selector | Style                  | Variables Required |
| -------- | ---------------------- | ------------------ |
| `.blur`  | `filter: blur(--blur)` | -                  |

### Utilities (absolute values)

| Selector     | Style                           |
| ------------ | ------------------------------- |
| `.blur-xs`   | `filter: blur(var(--blur-xs))`  |
| `.blur-sm`   | `filter: blur(var(--blur-sm))`  |
| `.blur-md`   | `filter: blur(var(--blur-md))`  |
| `.blur-lg`   | `filter: blur(var(--blur-lg))`  |
| `.blur-xl`   | `filter: blur(var(--blur-xl))`  |
| `.blur-2xl`  | `filter: blur(var(--blur-2xl))` |
| `.blur-3xl`  | `filter: blur(var(--blur-3xl))` |
| `.blur-none` | `filter: blur(0)`               |



## Border Collapse

### Utilities (absolute values)

| Selector           | Style                       |
| ------------------ | --------------------------- |
| `.border-collapse` | `border-collapse: collapse` |
| `.border-separate` | `border-collapse: separate` |



## Border Color Opacity

### Utilities (value-driven)

| Selector           | Style                                                                                                              | Variables Required                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------- |
| `.border/o`        | `border-color: color-mix( in oklab, var(--border) var(--border-o, 100%), transparent )`                            | `--border`, `--border-o`               |
| `.dark:border/o`   | `border-color: color-mix( in oklab, var(--dark-border) var(--dark-border-o, 100%), transparent )`                  | `--dark-border`, `--dark-border-o`     |
| `.border-t/o`      | `border-top-color: color-mix( in oklab, var(--border-t) var(--border-t-o, 100%), transparent )`                    | `--border-t`, `--border-t-o`           |
| `.dark:border-t/o` | `border-top-color: color-mix( in oklab, var(--dark-border-t) var(--dark-border-t-o, 100%), transparent )`          | `--dark-border-t`, `--dark-border-t-o` |
| `.border-r/o`      | `border-right-color: color-mix( in oklab, var(--border-r) var(--border-r-o, 100%), transparent )`                  | `--border-r`, `--border-r-o`           |
| `.dark:border-r/o` | `border-right-color: color-mix( in oklab, var(--dark-border-r) var(--dark-border-r-o, 100%), transparent )`        | `--dark-border-r`, `--dark-border-r-o` |
| `.border-b/o`      | `border-bottom-color: color-mix( in oklab, var(--border-b) var(--border-b-o, 100%), transparent )`                 | `--border-b`, `--border-b-o`           |
| `.dark:border-b/o` | `border-bottom-color: color-mix( in oklab, var(--dark-border-b) var(--dark-border-b-o, 100%), transparent )`       | `--dark-border-b`, `--dark-border-b-o` |
| `.border-l/o`      | `border-left-color: color-mix( in oklab, var(--border-l) var(--border-l-o, 100%), transparent )`                   | `--border-l`, `--border-l-o`           |
| `.dark:border-l/o` | `border-left-color: color-mix( in oklab, var(--dark-border-l) var(--dark-border-l-o, 100%), transparent )`         | `--dark-border-l`, `--dark-border-l-o` |
| `.border-s/o`      | `border-inline-start-color: color-mix( in oklab, var(--border-s) var(--border-s-o, 100%), transparent )`           | `--border-s`, `--border-s-o`           |
| `.dark:border-s/o` | `border-inline-start-color: color-mix( in oklab, var(--dark-border-s) var(--dark-border-s-o, 100%), transparent )` | `--dark-border-s`, `--dark-border-s-o` |
| `.border-e/o`      | `border-inline-end-color: color-mix( in oklab, var(--border-e) var(--border-e-o, 100%), transparent )`             | `--border-e`, `--border-e-o`           |
| `.dark:border-e/o` | `border-inline-end-color: color-mix( in oklab, var(--dark-border-e) var(--dark-border-e-o, 100%), transparent )`   | `--dark-border-e`, `--dark-border-e-o` |
| `.border-x/o`      | `border-inline-color: color-mix( in oklab, var(--border-x) var(--border-x-o, 100%), transparent )`                 | `--border-x`, `--border-x-o`           |
| `.dark:border-x/o` | `border-inline-color: color-mix( in oklab, var(--dark-border-x) var(--dark-border-x-o, 100%), transparent )`       | `--dark-border-x`, `--dark-border-x-o` |
| `.border-y/o`      | `border-block-color: color-mix( in oklab, var(--border-y) var(--border-y-o, 100%), transparent )`                  | `--border-y`, `--border-y-o`           |
| `.dark:border-y/o` | `border-block-color: color-mix( in oklab, var(--dark-border-y) var(--dark-border-y-o, 100%), transparent )`        | `--dark-border-y`, `--dark-border-y-o` |



## Border Color

### Utilities (value-driven)

| Selector         | Style                                             | Variables Required |
| ---------------- | ------------------------------------------------- | ------------------ |
| `.border`        | `border-color: var(--border)`                     | `--border`         |
| `.dark:border`   | `border-color: var(--dark-border)`                | `--dark-border`    |
| `.border-t`      | `border-top-color: var(--border-t)`               | `--border-t`       |
| `.dark:border-t` | `border-top-color: var(--dark-border-t)`          | `--dark-border-t`  |
| `.border-r`      | `border-right-color: var(--border-r)`             | `--border-r`       |
| `.dark:border-r` | `border-right-color: var(--dark-border-r)`        | `--dark-border-r`  |
| `.border-b`      | `border-bottom-color: var(--border-b)`            | `--border-b`       |
| `.dark:border-b` | `border-bottom-color: var(--dark-border-b)`       | `--dark-border-b`  |
| `.border-l`      | `border-left-color: var(--border-l)`              | `--border-l`       |
| `.dark:border-l` | `border-left-color: var(--dark-border-l)`         | `--dark-border-l`  |
| `.border-s`      | `border-inline-start-color: var(--border-s)`      | `--border-s`       |
| `.dark:border-s` | `border-inline-start-color: var(--dark-border-s)` | `--dark-border-s`  |
| `.border-e`      | `border-inline-end-color: var(--border-e)`        | `--border-e`       |
| `.dark:border-e` | `border-inline-end-color: var(--dark-border-e)`   | `--dark-border-e`  |
| `.border-x`      | `border-inline-color: var(--border-x)`            | `--border-x`       |
| `.dark:border-x` | `border-inline-color: var(--dark-border-x)`       | `--dark-border-x`  |
| `.border-y`      | `border-block-color: var(--border-y)`             | `--border-y`       |
| `.dark:border-y` | `border-block-color: var(--dark-border-y)`        | `--dark-border-y`  |



## Border Radius

### Utilities (value-driven)

| Selector      | Style                                                                                         | Variables Required |
| ------------- | --------------------------------------------------------------------------------------------- | ------------------ |
| `.rounded`    | `border-radius: var(--rounded)`                                                               | `--rounded`        |
| `.rounded-s`  | `border-start-start-radius: var(--rounded-s)`, `border-end-start-radius: var(--rounded-s)`    | `--rounded-s`      |
| `.rounded-e`  | `border-start-end-radius: var(--rounded-e)`, `border-end-end-radius: var(--rounded-e)`        | `--rounded-e`      |
| `.rounded-t`  | `border-top-left-radius: var(--rounded-t)`, `border-top-right-radius: var(--rounded-t)`       | `--rounded-t`      |
| `.rounded-r`  | `border-top-right-radius: var(--rounded-r)`, `border-bottom-right-radius: var(--rounded-r)`   | `--rounded-r`      |
| `.rounded-b`  | `border-bottom-right-radius: var(--rounded-b)`, `border-bottom-left-radius: var(--rounded-b)` | `--rounded-b`      |
| `.rounded-l`  | `border-top-left-radius: var(--rounded-l)`, `border-bottom-left-radius: var(--rounded-l)`     | `--rounded-l`      |
| `.rounded-ss` | `border-start-start-radius: var(--rounded-ss)`                                                | `--rounded-ss`     |
| `.rounded-se` | `border-start-end-radius: var(--rounded-se)`                                                  | `--rounded-se`     |
| `.rounded-ee` | `border-end-end-radius: var(--rounded-ee)`                                                    | `--rounded-ee`     |
| `.rounded-es` | `border-end-start-radius: var(--rounded-es)`                                                  | `--rounded-es`     |
| `.rounded-tl` | `border-top-left-radius: var(--rounded-tl)`                                                   | `--rounded-tl`     |
| `.rounded-tr` | `border-top-right-radius: var(--rounded-tr)`                                                  | `--rounded-tr`     |
| `.rounded-br` | `border-bottom-right-radius: var(--rounded-br)`                                               | `--rounded-br`     |
| `.rounded-bl` | `border-bottom-left-radius: var(--rounded-bl)`                                                | `--rounded-bl`     |

### Utilities (absolute values)

| Selector           | Style                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------- |
| `.rounded-xs`      | `border-radius: var(--radius-xs)`                                                                     |
| `.rounded-sm`      | `border-radius: var(--radius-sm)`                                                                     |
| `.rounded-md`      | `border-radius: var(--radius-md)`                                                                     |
| `.rounded-lg`      | `border-radius: var(--radius-lg)`                                                                     |
| `.rounded-xl`      | `border-radius: var(--radius-xl)`                                                                     |
| `.rounded-2xl`     | `border-radius: var(--radius-2xl)`                                                                    |
| `.rounded-3xl`     | `border-radius: var(--radius-3xl)`                                                                    |
| `.rounded-4xl`     | `border-radius: var(--radius-4xl)`                                                                    |
| `.rounded-none`    | `border-radius: 0`                                                                                    |
| `.rounded-full`    | `border-radius: calc(infinity * 1px)`                                                                 |
| `.rounded-s-xs`    | `border-start-start-radius: var(--radius-xs)`, `border-end-start-radius: var(--radius-xs)`            |
| `.rounded-s-sm`    | `border-start-start-radius: var(--radius-sm)`, `border-end-start-radius: var(--radius-sm)`            |
| `.rounded-s-md`    | `border-start-start-radius: var(--radius-md)`, `border-end-start-radius: var(--radius-md)`            |
| `.rounded-s-lg`    | `border-start-start-radius: var(--radius-lg)`, `border-end-start-radius: var(--radius-lg)`            |
| `.rounded-s-xl`    | `border-start-start-radius: var(--radius-xl)`, `border-end-start-radius: var(--radius-xl)`            |
| `.rounded-s-2xl`   | `border-start-start-radius: var(--radius-2xl)`, `border-end-start-radius: var(--radius-2xl)`          |
| `.rounded-s-3xl`   | `border-start-start-radius: var(--radius-3xl)`, `border-end-start-radius: var(--radius-3xl)`          |
| `.rounded-s-4xl`   | `border-start-start-radius: var(--radius-4xl)`, `border-end-start-radius: var(--radius-4xl)`          |
| `.rounded-s-none`  | `border-start-start-radius: 0`, `border-end-start-radius: 0`                                          |
| `.rounded-s-full`  | `border-start-start-radius: calc(infinity * 1px)`, `border-end-start-radius: calc(infinity * 1px)`    |
| `.rounded-e-xs`    | `border-start-end-radius: var(--radius-xs)`, `border-end-end-radius: var(--radius-xs)`                |
| `.rounded-e-sm`    | `border-start-end-radius: var(--radius-sm)`, `border-end-end-radius: var(--radius-sm)`                |
| `.rounded-e-md`    | `border-start-end-radius: var(--radius-md)`, `border-end-end-radius: var(--radius-md)`                |
| `.rounded-e-lg`    | `border-start-end-radius: var(--radius-lg)`, `border-end-end-radius: var(--radius-lg)`                |
| `.rounded-e-xl`    | `border-start-end-radius: var(--radius-xl)`, `border-end-end-radius: var(--radius-xl)`                |
| `.rounded-e-2xl`   | `border-start-end-radius: var(--radius-2xl)`, `border-end-end-radius: var(--radius-2xl)`              |
| `.rounded-e-3xl`   | `border-start-end-radius: var(--radius-3xl)`, `border-end-end-radius: var(--radius-3xl)`              |
| `.rounded-e-4xl`   | `border-start-end-radius: var(--radius-4xl)`, `border-end-end-radius: var(--radius-4xl)`              |
| `.rounded-e-none`  | `border-start-end-radius: 0`, `border-end-end-radius: 0`                                              |
| `.rounded-e-full`  | `border-start-end-radius: calc(infinity * 1px)`, `border-end-end-radius: calc(infinity * 1px)`        |
| `.rounded-t-xs`    | `border-top-left-radius: var(--radius-xs)`, `border-top-right-radius: var(--radius-xs)`               |
| `.rounded-t-sm`    | `border-top-left-radius: var(--radius-sm)`, `border-top-right-radius: var(--radius-sm)`               |
| `.rounded-t-md`    | `border-top-left-radius: var(--radius-md)`, `border-top-right-radius: var(--radius-md)`               |
| `.rounded-t-lg`    | `border-top-left-radius: var(--radius-lg)`, `border-top-right-radius: var(--radius-lg)`               |
| `.rounded-t-xl`    | `border-top-left-radius: var(--radius-xl)`, `border-top-right-radius: var(--radius-xl)`               |
| `.rounded-t-2xl`   | `border-top-left-radius: var(--radius-2xl)`, `border-top-right-radius: var(--radius-2xl)`             |
| `.rounded-t-3xl`   | `border-top-left-radius: var(--radius-3xl)`, `border-top-right-radius: var(--radius-3xl)`             |
| `.rounded-t-4xl`   | `border-top-left-radius: var(--radius-4xl)`, `border-top-right-radius: var(--radius-4xl)`             |
| `.rounded-t-none`  | `border-top-left-radius: 0`, `border-top-right-radius: 0`                                             |
| `.rounded-t-full`  | `border-top-left-radius: calc(infinity * 1px)`, `border-top-right-radius: calc(infinity * 1px)`       |
| `.rounded-r-xs`    | `border-top-right-radius: var(--radius-xs)`, `border-bottom-right-radius: var(--radius-xs)`           |
| `.rounded-r-sm`    | `border-top-right-radius: var(--radius-sm)`, `border-bottom-right-radius: var(--radius-sm)`           |
| `.rounded-r-md`    | `border-top-right-radius: var(--radius-md)`, `border-bottom-right-radius: var(--radius-md)`           |
| `.rounded-r-lg`    | `border-top-right-radius: var(--radius-lg)`, `border-bottom-right-radius: var(--radius-lg)`           |
| `.rounded-r-xl`    | `border-top-right-radius: var(--radius-xl)`, `border-bottom-right-radius: var(--radius-xl)`           |
| `.rounded-r-2xl`   | `border-top-right-radius: var(--radius-2xl)`, `border-bottom-right-radius: var(--radius-2xl)`         |
| `.rounded-r-3xl`   | `border-top-right-radius: var(--radius-3xl)`, `border-bottom-right-radius: var(--radius-3xl)`         |
| `.rounded-r-4xl`   | `border-top-right-radius: var(--radius-4xl)`, `border-bottom-right-radius: var(--radius-4xl)`         |
| `.rounded-r-none`  | `border-top-right-radius: 0`, `border-bottom-right-radius: 0`                                         |
| `.rounded-r-full`  | `border-top-right-radius: calc(infinity * 1px)`, `border-bottom-right-radius: calc(infinity * 1px)`   |
| `.rounded-b-xs`    | `border-bottom-right-radius: var(--radius-xs)`, `border-bottom-left-radius: var(--radius-xs)`         |
| `.rounded-b-sm`    | `border-bottom-right-radius: var(--radius-sm)`, `border-bottom-left-radius: var(--radius-sm)`         |
| `.rounded-b-md`    | `border-bottom-right-radius: var(--radius-md)`, `border-bottom-left-radius: var(--radius-md)`         |
| `.rounded-b-lg`    | `border-bottom-right-radius: var(--radius-lg)`, `border-bottom-left-radius: var(--radius-lg)`         |
| `.rounded-b-xl`    | `border-bottom-right-radius: var(--radius-xl)`, `border-bottom-left-radius: var(--radius-xl)`         |
| `.rounded-b-2xl`   | `border-bottom-right-radius: var(--radius-2xl)`, `border-bottom-left-radius: var(--radius-2xl)`       |
| `.rounded-b-3xl`   | `border-bottom-right-radius: var(--radius-3xl)`, `border-bottom-left-radius: var(--radius-3xl)`       |
| `.rounded-b-4xl`   | `border-bottom-right-radius: var(--radius-4xl)`, `border-bottom-left-radius: var(--radius-4xl)`       |
| `.rounded-b-none`  | `border-bottom-right-radius: 0`, `border-bottom-left-radius: 0`                                       |
| `.rounded-b-full`  | `border-bottom-right-radius: calc(infinity * 1px)`, `border-bottom-left-radius: calc(infinity * 1px)` |
| `.rounded-l-xs`    | `border-top-left-radius: var(--radius-xs)`, `border-bottom-left-radius: var(--radius-xs)`             |
| `.rounded-l-sm`    | `border-top-left-radius: var(--radius-sm)`, `border-bottom-left-radius: var(--radius-sm)`             |
| `.rounded-l-md`    | `border-top-left-radius: var(--radius-md)`, `border-bottom-left-radius: var(--radius-md)`             |
| `.rounded-l-lg`    | `border-top-left-radius: var(--radius-lg)`, `border-bottom-left-radius: var(--radius-lg)`             |
| `.rounded-l-xl`    | `border-top-left-radius: var(--radius-xl)`, `border-bottom-left-radius: var(--radius-xl)`             |
| `.rounded-l-2xl`   | `border-top-left-radius: var(--radius-2xl)`, `border-bottom-left-radius: var(--radius-2xl)`           |
| `.rounded-l-3xl`   | `border-top-left-radius: var(--radius-3xl)`, `border-bottom-left-radius: var(--radius-3xl)`           |
| `.rounded-l-4xl`   | `border-top-left-radius: var(--radius-4xl)`, `border-bottom-left-radius: var(--radius-4xl)`           |
| `.rounded-l-none`  | `border-top-left-radius: 0`, `border-bottom-left-radius: 0`                                           |
| `.rounded-l-full`  | `border-top-left-radius: calc(infinity * 1px)`, `border-bottom-left-radius: calc(infinity * 1px)`     |
| `.rounded-ss-xs`   | `border-start-start-radius: var(--radius-xs)`                                                         |
| `.rounded-ss-sm`   | `border-start-start-radius: var(--radius-sm)`                                                         |
| `.rounded-ss-md`   | `border-start-start-radius: var(--radius-md)`                                                         |
| `.rounded-ss-lg`   | `border-start-start-radius: var(--radius-lg)`                                                         |
| `.rounded-ss-xl`   | `border-start-start-radius: var(--radius-xl)`                                                         |
| `.rounded-ss-2xl`  | `border-start-start-radius: var(--radius-2xl)`                                                        |
| `.rounded-ss-3xl`  | `border-start-start-radius: var(--radius-3xl)`                                                        |
| `.rounded-ss-4xl`  | `border-start-start-radius: var(--radius-4xl)`                                                        |
| `.rounded-ss-none` | `border-start-start-radius: 0`                                                                        |
| `.rounded-ss-full` | `border-start-start-radius: calc(infinity * 1px)`                                                     |
| `.rounded-se-xs`   | `border-start-end-radius: var(--radius-xs)`                                                           |
| `.rounded-se-sm`   | `border-start-end-radius: var(--radius-sm)`                                                           |
| `.rounded-se-md`   | `border-start-end-radius: var(--radius-md)`                                                           |
| `.rounded-se-lg`   | `border-start-end-radius: var(--radius-lg)`                                                           |
| `.rounded-se-xl`   | `border-start-end-radius: var(--radius-xl)`                                                           |
| `.rounded-se-2xl`  | `border-start-end-radius: var(--radius-2xl)`                                                          |
| `.rounded-se-3xl`  | `border-start-end-radius: var(--radius-3xl)`                                                          |
| `.rounded-se-4xl`  | `border-start-end-radius: var(--radius-4xl)`                                                          |
| `.rounded-se-none` | `border-start-end-radius: 0`                                                                          |
| `.rounded-se-full` | `border-start-end-radius: calc(infinity * 1px)`                                                       |
| `.rounded-ee-xs`   | `border-end-end-radius: var(--radius-xs)`                                                             |
| `.rounded-ee-sm`   | `border-end-end-radius: var(--radius-sm)`                                                             |
| `.rounded-ee-md`   | `border-end-end-radius: var(--radius-md)`                                                             |
| `.rounded-ee-lg`   | `border-end-end-radius: var(--radius-lg)`                                                             |
| `.rounded-ee-xl`   | `border-end-end-radius: var(--radius-xl)`                                                             |
| `.rounded-ee-2xl`  | `border-end-end-radius: var(--radius-2xl)`                                                            |
| `.rounded-ee-3xl`  | `border-end-end-radius: var(--radius-3xl)`                                                            |
| `.rounded-ee-4xl`  | `border-end-end-radius: var(--radius-4xl)`                                                            |
| `.rounded-ee-none` | `border-end-end-radius: 0`                                                                            |
| `.rounded-ee-full` | `border-end-end-radius: calc(infinity * 1px)`                                                         |
| `.rounded-es-xs`   | `border-end-start-radius: var(--radius-xs)`                                                           |
| `.rounded-es-sm`   | `border-end-start-radius: var(--radius-sm)`                                                           |
| `.rounded-es-md`   | `border-end-start-radius: var(--radius-md)`                                                           |
| `.rounded-es-lg`   | `border-end-start-radius: var(--radius-lg)`                                                           |
| `.rounded-es-xl`   | `border-end-start-radius: var(--radius-xl)`                                                           |
| `.rounded-es-2xl`  | `border-end-start-radius: var(--radius-2xl)`                                                          |
| `.rounded-es-3xl`  | `border-end-start-radius: var(--radius-3xl)`                                                          |
| `.rounded-es-4xl`  | `border-end-start-radius: var(--radius-4xl)`                                                          |
| `.rounded-es-none` | `border-end-start-radius: 0`                                                                          |
| `.rounded-es-full` | `border-end-start-radius: calc(infinity * 1px)`                                                       |
| `.rounded-tl-xs`   | `border-top-left-radius: var(--radius-xs)`                                                            |
| `.rounded-tl-sm`   | `border-top-left-radius: var(--radius-sm)`                                                            |
| `.rounded-tl-md`   | `border-top-left-radius: var(--radius-md)`                                                            |
| `.rounded-tl-lg`   | `border-top-left-radius: var(--radius-lg)`                                                            |
| `.rounded-tl-xl`   | `border-top-left-radius: var(--radius-xl)`                                                            |
| `.rounded-tl-2xl`  | `border-top-left-radius: var(--radius-2xl)`                                                           |
| `.rounded-tl-3xl`  | `border-top-left-radius: var(--radius-3xl)`                                                           |
| `.rounded-tl-4xl`  | `border-top-left-radius: var(--radius-4xl)`                                                           |
| `.rounded-tl-none` | `border-top-left-radius: 0`                                                                           |
| `.rounded-tl-full` | `border-top-left-radius: calc(infinity * 1px)`                                                        |
| `.rounded-tr-xs`   | `border-top-right-radius: var(--radius-xs)`                                                           |
| `.rounded-tr-sm`   | `border-top-right-radius: var(--radius-sm)`                                                           |
| `.rounded-tr-md`   | `border-top-right-radius: var(--radius-md)`                                                           |
| `.rounded-tr-lg`   | `border-top-right-radius: var(--radius-lg)`                                                           |
| `.rounded-tr-xl`   | `border-top-right-radius: var(--radius-xl)`                                                           |
| `.rounded-tr-2xl`  | `border-top-right-radius: var(--radius-2xl)`                                                          |
| `.rounded-tr-3xl`  | `border-top-right-radius: var(--radius-3xl)`                                                          |
| `.rounded-tr-4xl`  | `border-top-right-radius: var(--radius-4xl)`                                                          |
| `.rounded-tr-none` | `border-top-right-radius: 0`                                                                          |
| `.rounded-tr-full` | `border-top-right-radius: calc(infinity * 1px)`                                                       |
| `.rounded-br-xs`   | `border-bottom-right-radius: var(--radius-xs)`                                                        |
| `.rounded-br-sm`   | `border-bottom-right-radius: var(--radius-sm)`                                                        |
| `.rounded-br-md`   | `border-bottom-right-radius: var(--radius-md)`                                                        |
| `.rounded-br-lg`   | `border-bottom-right-radius: var(--radius-lg)`                                                        |
| `.rounded-br-xl`   | `border-bottom-right-radius: var(--radius-xl)`                                                        |
| `.rounded-br-2xl`  | `border-bottom-right-radius: var(--radius-2xl)`                                                       |
| `.rounded-br-3xl`  | `border-bottom-right-radius: var(--radius-3xl)`                                                       |
| `.rounded-br-4xl`  | `border-bottom-right-radius: var(--radius-4xl)`                                                       |
| `.rounded-br-none` | `border-bottom-right-radius: 0`                                                                       |
| `.rounded-br-full` | `border-bottom-right-radius: calc(infinity * 1px)`                                                    |
| `.rounded-bl-xs`   | `border-bottom-left-radius: var(--radius-xs)`                                                         |
| `.rounded-bl-sm`   | `border-bottom-left-radius: var(--radius-sm)`                                                         |
| `.rounded-bl-md`   | `border-bottom-left-radius: var(--radius-md)`                                                         |
| `.rounded-bl-lg`   | `border-bottom-left-radius: var(--radius-lg)`                                                         |
| `.rounded-bl-xl`   | `border-bottom-left-radius: var(--radius-xl)`                                                         |
| `.rounded-bl-2xl`  | `border-bottom-left-radius: var(--radius-2xl)`                                                        |
| `.rounded-bl-3xl`  | `border-bottom-left-radius: var(--radius-3xl)`                                                        |
| `.rounded-bl-4xl`  | `border-bottom-left-radius: var(--radius-4xl)`                                                        |
| `.rounded-bl-none` | `border-bottom-left-radius: 0`                                                                        |
| `.rounded-bl-full` | `border-bottom-left-radius: calc(infinity * 1px)`                                                     |



## Border Spacing

### Utilities (value-driven)

| Selector              | Style                                                                                                                                            | Variables Required   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `.border-spacing`     | `border-spacing: calc(var(--spacing) * var(--border-spacing))`                                                                                   | `--border-spacing`   |
| `.[border-spacing]`   | `border-spacing: var(--border-spacing)`                                                                                                          | `--border-spacing`   |
| `.border-spacing-x`   | `--tw-border-spacing-x: calc(var(--spacing) * var(--border-spacing-x))`, `border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)` | `--border-spacing-x` |
| `.[border-spacing-x]` | `--tw-border-spacing-x: var(--border-spacing-x)`, `border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)`                        | `--border-spacing-x` |
| `.border-spacing-y`   | `--tw-border-spacing-y: calc(var(--spacing) * var(--border-spacing-y))`, `border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)` | `--border-spacing-y` |
| `.[border-spacing-y]` | `--tw-border-spacing-y: var(--border-spacing-y)`, `border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y)`                        | `--border-spacing-y` |



## Border Style

### Utilities (absolute values)

| Selector         | Style                                               |
| ---------------- | --------------------------------------------------- |
| `.border-solid`  | `--tw-border-style: solid`, `border-style: solid`   |
| `.border-dashed` | `--tw-border-style: dashed`, `border-style: dashed` |
| `.border-dotted` | `--tw-border-style: dotted`, `border-style: dotted` |
| `.border-double` | `--tw-border-style: double`, `border-style: double` |
| `.border-hidden` | `--tw-border-style: hidden`, `border-style: hidden` |
| `.border-none`   | `--tw-border-style: none`, `border-style: none`     |



## Border Width

### Utilities (value-driven)

| Selector      | Style                                          | Variables Required |
| ------------- | ---------------------------------------------- | ------------------ |
| `.border-w`   | `border-width: var(--border-w)`                | `--border-w`       |
| `.border-t-w` | `border-top-width: var(--border-t-w)`          | `--border-t-w`     |
| `.border-r-w` | `border-right-width: var(--border-r-w)`        | `--border-r-w`     |
| `.border-b-w` | `border-bottom-width: var(--border-b-w)`       | `--border-b-w`     |
| `.border-l-w` | `border-left-width: var(--border-l-w)`         | `--border-l-w`     |
| `.border-s-w` | `border-inline-start-width: var(--border-s-w)` | `--border-s-w`     |
| `.border-e-w` | `border-inline-end-width: var(--border-e-w)`   | `--border-e-w`     |
| `.border-x-w` | `border-inline-width: var(--border-x-w)`       | `--border-x-w`     |
| `.border-y-w` | `border-block-width: var(--border-y-w)`        | `--border-y-w`     |



## Bottom

### Utilities (value-driven)

| Selector    | Style                                          | Variables Required |
| ----------- | ---------------------------------------------- | ------------------ |
| `.bottom`   | `bottom: calc(var(--spacing) * var(--bottom))` | `--bottom`         |
| `.[bottom]` | `bottom: var(--bottom)`                        | `--bottom`         |



## Box Decoration Break

### Utilities (absolute values)

| Selector                | Style                                                                |
| ----------------------- | -------------------------------------------------------------------- |
| `.box-decoration-slice` | `-webkit-box-decoration-break: slice`, `box-decoration-break: slice` |
| `.box-decoration-clone` | `-webkit-box-decoration-break: clone`, `box-decoration-break: clone` |



## Box Shadow Opacity

### Utilities (value-driven)

| Selector         | Style                                                                                                                                                                                                                                                                                                                                      | Variables Required                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------- |
| `.shadow/o`      | `--tw-shadow-color: color-mix( in oklab, var(--shadow) var(--shadow-o, 100%), transparent )`, `--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`           | `--shadow`, `--shadow-o`           |
| `.dark:shadow/o` | `--tw-shadow-color: color-mix( in oklab, var(--dark-shadow) var(--dark-shadow-o, 100%), transparent )`, `--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)` | `--dark-shadow`, `--dark-shadow-o` |



## Box Shadow

### Utilities (value-driven)

| Selector         | Style                                                                                                                                                                                                                                                                                         | Variables Required |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.shadow`        | `--tw-shadow-color: var(--shadow, rgb(0 0 0 / 0.1))`, `--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`      | `--shadow`         |
| `.dark:shadow`   | `--tw-shadow-color: var(--dark-shadow, rgb(0 0 0 / 0.1))`, `--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)` | `--dark-shadow`    |
| `.[shadow]`      | `box-shadow: var(--shadow)`                                                                                                                                                                                                                                                                   | `--shadow`         |
| `.dark:[shadow]` | `box-shadow: var(--dark-shadow)`                                                                                                                                                                                                                                                              | `--dark-shadow`    |

### Utilities (absolute values)

| Selector       | Style                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `.shadow-2xs`  | `--tw-shadow: 0 1px var(--tw-shadow-color)`                                                    |
| `.shadow-xs`   | `--tw-shadow: 0 1px 2px 0 var(--tw-shadow-color)`                                              |
| `.shadow-sm`   | `--tw-shadow: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color)`       |
| `.shadow-md`   | `--tw-shadow: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)`    |
| `.shadow-lg`   | `--tw-shadow: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)`  |
| `.shadow-xl`   | `--tw-shadow: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color)` |
| `.shadow-none` | `box-shadow: 0 0 #0000`                                                                        |



## Box Sizing

### Utilities (absolute values)

| Selector       | Style                     |
| -------------- | ------------------------- |
| `.box-border`  | `box-sizing: border-box`  |
| `.box-content` | `box-sizing: content-box` |



## Break After

### Utilities (absolute values)

| Selector                  | Style                     |
| ------------------------- | ------------------------- |
| `.break-after-auto`       | `break-after: auto`       |
| `.break-after-avoid`      | `break-after: avoid`      |
| `.break-after-all`        | `break-after: all`        |
| `.break-after-avoid-page` | `break-after: avoid-page` |
| `.break-after-page`       | `break-after: page`       |
| `.break-after-left`       | `break-after: left`       |
| `.break-after-right`      | `break-after: right`      |
| `.break-after-column`     | `break-after: column`     |



## Break Before

### Utilities (absolute values)

| Selector                   | Style                      |
| -------------------------- | -------------------------- |
| `.break-before-auto`       | `break-before: auto`       |
| `.break-before-avoid`      | `break-before: avoid`      |
| `.break-before-all`        | `break-before: all`        |
| `.break-before-avoid-page` | `break-before: avoid-page` |
| `.break-before-page`       | `break-before: page`       |
| `.break-before-left`       | `break-before: left`       |
| `.break-before-right`      | `break-before: right`      |
| `.break-before-column`     | `break-before: column`     |



## Break Inside

### Utilities (absolute values)

| Selector                     | Style                        |
| ---------------------------- | ---------------------------- |
| `.break-inside-auto`         | `break-inside: auto`         |
| `.break-inside-avoid`        | `break-inside: avoid`        |
| `.break-inside-avoid-page`   | `break-inside: avoid-page`   |
| `.break-inside-avoid-column` | `break-inside: avoid-column` |



## Brightness

### Utilities (value-driven)

| Selector      | Style                              | Variables Required |
| ------------- | ---------------------------------- | ------------------ |
| `.brightness` | `filter: brightness(--brightness)` | -                  |



## Caption Side

### Utilities (absolute values)

| Selector          | Style                  |
| ----------------- | ---------------------- |
| `.caption-top`    | `caption-side: top`    |
| `.caption-bottom` | `caption-side: bottom` |



## Caret Color Opacity

### Utilities (value-driven)

| Selector        | Style                                                                                          | Variables Required               |
| --------------- | ---------------------------------------------------------------------------------------------- | -------------------------------- |
| `.caret/o`      | `caret-color: color-mix( in oklab, var(--caret) var(--caret-o, 100%), transparent )`           | `--caret`, `--caret-o`           |
| `.dark:caret/o` | `caret-color: color-mix( in oklab, var(--dark-caret) var(--dark-caret-o, 100%), transparent )` | `--dark-caret`, `--dark-caret-o` |



## Caret Color

### Utilities (value-driven)

| Selector      | Style                            | Variables Required |
| ------------- | -------------------------------- | ------------------ |
| `.caret`      | `caret-color: var(--caret)`      | `--caret`          |
| `.dark:caret` | `caret-color: var(--dark-caret)` | `--dark-caret`     |



## Clear

### Utilities (absolute values)

| Selector       | Style                 |
| -------------- | --------------------- |
| `.clear-start` | `clear: inline-start` |
| `.clear-end`   | `clear: inline-end`   |
| `.clear-left`  | `clear: left`         |
| `.clear-right` | `clear: right`        |
| `.clear-both`  | `clear: both`         |
| `.clear-none`  | `clear: none`         |



## Color Opacity

### Utilities (value-driven)

| Selector        | Style                                                                                    | Variables Required               |
| --------------- | ---------------------------------------------------------------------------------------- | -------------------------------- |
| `.color/o`      | `color: color-mix(in oklab, var(--color) var(--color-o, 100%), transparent)`             | `--color`, `--color-o`           |
| `.dark:color/o` | `color: color-mix( in oklab, var(--dark-color) var(--dark-color-o, 100%), transparent )` | `--dark-color`, `--dark-color-o` |



## Color Scheme

### Utilities (absolute values)

| Selector             | Style                      |
| -------------------- | -------------------------- |
| `.scheme-normal`     | `color-scheme: normal`     |
| `.scheme-dark`       | `color-scheme: dark`       |
| `.scheme-light`      | `color-scheme: light`      |
| `.scheme-light-dark` | `color-scheme: light dark` |
| `.scheme-only-dark`  | `color-scheme: only dark`  |
| `.scheme-only-light` | `color-scheme: only light` |



## Color

### Utilities (value-driven)

| Selector      | Style                      | Variables Required |
| ------------- | -------------------------- | ------------------ |
| `.color`      | `color: var(--color)`      | `--color`          |
| `.dark:color` | `color: var(--dark-color)` | `--dark-color`     |



## Columns

### Utilities (value-driven)

| Selector   | Style                     | Variables Required |
| ---------- | ------------------------- | ------------------ |
| `.columns` | `columns: var(--columns)` | `--columns`        |

### Utilities (absolute values)

| Selector        | Style                           |
| --------------- | ------------------------------- |
| `.columns-3xs`  | `columns: var(--container-3xs)` |
| `.columns-2xs`  | `columns: var(--container-2xs)` |
| `.columns-xs`   | `columns: var(--container-xs)`  |
| `.columns-sm`   | `columns: var(--container-sm)`  |
| `.columns-md`   | `columns: var(--container-md)`  |
| `.columns-lg`   | `columns: var(--container-lg)`  |
| `.columns-xl`   | `columns: var(--container-xl)`  |
| `.columns-2xl`  | `columns: var(--container-2xl)` |
| `.columns-3xl`  | `columns: var(--container-3xl)` |
| `.columns-4xl`  | `columns: var(--container-4xl)` |
| `.columns-5xl`  | `columns: var(--container-5xl)` |
| `.columns-6xl`  | `columns: var(--container-6xl)` |
| `.columns-7xl`  | `columns: var(--container-7xl)` |
| `.columns-auto` | `columns: auto`                 |



## Content

### Utilities (absolute values)

| Selector        | Style           |
| --------------- | --------------- |
| `.content-none` | `content: none` |



## Contrast

### Utilities (value-driven)

| Selector    | Style                          | Variables Required |
| ----------- | ------------------------------ | ------------------ |
| `.contrast` | `filter: contrast(--contrast)` | -                  |



## Cursor

### Utilities (value-driven)

| Selector  | Style                   | Variables Required |
| --------- | ----------------------- | ------------------ |
| `.cursor` | `cursor: var(--cursor)` | `--cursor`         |

### Utilities (absolute values)

| Selector                | Style                   |
| ----------------------- | ----------------------- |
| `.cursor-auto`          | `cursor: auto`          |
| `.cursor-default`       | `cursor: default`       |
| `.cursor-pointer`       | `cursor: pointer`       |
| `.cursor-wait`          | `cursor: wait`          |
| `.cursor-text`          | `cursor: text`          |
| `.cursor-move`          | `cursor: move`          |
| `.cursor-help`          | `cursor: help`          |
| `.cursor-not-allowed`   | `cursor: not-allowed`   |
| `.cursor-none`          | `cursor: none`          |
| `.cursor-context-menu`  | `cursor: context-menu`  |
| `.cursor-progress`      | `cursor: progress`      |
| `.cursor-cell`          | `cursor: cell`          |
| `.cursor-crosshair`     | `cursor: crosshair`     |
| `.cursor-vertical-text` | `cursor: vertical-text` |
| `.cursor-alias`         | `cursor: alias`         |
| `.cursor-copy`          | `cursor: copy`          |
| `.cursor-no-drop`       | `cursor: no-drop`       |
| `.cursor-grab`          | `cursor: grab`          |
| `.cursor-grabbing`      | `cursor: grabbing`      |
| `.cursor-all-scroll`    | `cursor: all-scroll`    |
| `.cursor-col-resize`    | `cursor: col-resize`    |
| `.cursor-row-resize`    | `cursor: row-resize`    |
| `.cursor-n-resize`      | `cursor: n-resize`      |
| `.cursor-e-resize`      | `cursor: e-resize`      |
| `.cursor-s-resize`      | `cursor: s-resize`      |
| `.cursor-w-resize`      | `cursor: w-resize`      |
| `.cursor-ne-resize`     | `cursor: ne-resize`     |
| `.cursor-nw-resize`     | `cursor: nw-resize`     |
| `.cursor-se-resize`     | `cursor: se-resize`     |
| `.cursor-sw-resize`     | `cursor: sw-resize`     |
| `.cursor-ew-resize`     | `cursor: ew-resize`     |
| `.cursor-ns-resize`     | `cursor: ns-resize`     |
| `.cursor-nesw-resize`   | `cursor: nesw-resize`   |
| `.cursor-nwse-resize`   | `cursor: nwse-resize`   |
| `.cursor-zoom-in`       | `cursor: zoom-in`       |
| `.cursor-zoom-out`      | `cursor: zoom-out`      |



## Display

### Utilities (absolute values)

| Selector                      | Style                         |
| ----------------------------- | ----------------------------- |
| `.display-block`              | `display: block`              |
| `.display-inline-block`       | `display: inline-block`       |
| `.display-inline`             | `display: inline`             |
| `.display-flex`               | `display: flex`               |
| `.display-inline-flex`        | `display: inline-flex`        |
| `.display-table`              | `display: table`              |
| `.display-inline-table`       | `display: inline-table`       |
| `.display-table-caption`      | `display: table-caption`      |
| `.display-table-cell`         | `display: table-cell`         |
| `.display-table-column`       | `display: table-column`       |
| `.display-table-column-group` | `display: table-column-group` |
| `.display-table-footer-group` | `display: table-footer-group` |
| `.display-table-header-group` | `display: table-header-group` |
| `.display-table-row-group`    | `display: table-row-group`    |
| `.display-table-row`          | `display: table-row`          |
| `.display-flow-root`          | `display: flow-root`          |
| `.display-grid`               | `display: grid`               |
| `.display-inline-grid`        | `display: inline-grid`        |
| `.display-contents`           | `display: contents`           |
| `.display-list-item`          | `display: list-item`          |
| `.display-hidden`             | `display: none`               |



## Divide

### Utilities (value-driven)

| Selector                                    | Style                                                                                                                                                                                                                                                                                 | Variables Required |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.divide-x :where(& > :not(:last-child))`   | `--tw-divide-x-reverse: 0`, `border-inline-style: var(--tw-border-style)`, `border-inline-start-width: calc( var(--spacing) * var(--border-w) * var(--tw-divide-x-reverse) )`, `border-inline-end-width: calc( var(--spacing) * var(--border-w) * (1 - var(--tw-divide-x-reverse)) )` | `--border-w`       |
| `.[divide-x] :where(& > :not(:last-child))` | `--tw-divide-x-reverse: 0`, `border-inline-style: var(--tw-border-style)`, `border-inline-start-width: calc( var(--border-w) * var(--tw-divide-x-reverse) )`, `border-inline-end-width: calc( var(--border-w) * (1 - var(--tw-divide-x-reverse)) )`                                   | `--border-w`       |
| `.divide-y :where(& > :not(:last-child))`   | `--tw-divide-y-reverse: 0`, `border-block-style: var(--tw-border-style)`, `border-block-start-width: calc( var(--spacing) * var(--border-w) * var(--tw-divide-y-reverse) )`, `border-block-end-width: calc( var(--spacing) * var(--border-w) * (1 - var(--tw-divide-y-reverse)) )`    | `--border-w`       |
| `.[divide-y] :where(& > :not(:last-child))` | `--tw-divide-y-reverse: 0`, `border-block-style: var(--tw-border-style)`, `border-block-start-width: calc( var(--border-w) * var(--tw-divide-y-reverse) )`, `border-block-end-width: calc( var(--border-w) * (1 - var(--tw-divide-y-reverse)) )`                                      | `--border-w`       |

### Utilities (absolute values)

| Selector                                          | Style                      |
| ------------------------------------------------- | -------------------------- |
| `.divide-x-reverse :where(& > :not(:last-child))` | `--tw-divide-x-reverse: 1` |
| `.divide-y-reverse :where(& > :not(:last-child))` | `--tw-divide-y-reverse: 1` |



## Field Sizing

### Utilities (absolute values)

| Selector                | Style                   |
| ----------------------- | ----------------------- |
| `.field-sizing-fixed`   | `field-sizing: fixed`   |
| `.field-sizing-content` | `field-sizing: content` |



## Fill Opacity

### Utilities (value-driven)

| Selector       | Style                                                                                 | Variables Required             |
| -------------- | ------------------------------------------------------------------------------------- | ------------------------------ |
| `.fill/o`      | `fill: color-mix(in oklab, var(--fill) var(--fill-o, 100%), transparent)`             | `--fill`, `--fill-o`           |
| `.dark:fill/o` | `fill: color-mix( in oklab, var(--dark-fill) var(--dark-fill-o, 100%), transparent )` | `--dark-fill`, `--dark-fill-o` |



## Fill

### Utilities (value-driven)

| Selector     | Style                    | Variables Required |
| ------------ | ------------------------ | ------------------ |
| `.fill`      | `fill: var(--fill)`      | `--fill`           |
| `.dark:fill` | `fill: var(--dark-fill)` | `--dark-fill`      |



## Filter

### Utilities (value-driven)

| Selector  | Style                   | Variables Required |
| --------- | ----------------------- | ------------------ |
| `.filter` | `filter: var(--filter)` | `--filter`         |

### Utilities (absolute values)

| Selector       | Style          |
| -------------- | -------------- |
| `.filter-none` | `filter: none` |



## Flex Basis

### Utilities (value-driven)

| Selector   | Style                                             | Variables Required |
| ---------- | ------------------------------------------------- | ------------------ |
| `.basis`   | `flex-basis: calc(var(--spacing) * var(--basis))` | `--basis`          |
| `.[basis]` | `flex-basis: var(--basis)`                        | `--basis`          |

### Utilities (absolute values)

| Selector      | Style                              |
| ------------- | ---------------------------------- |
| `.basis-3xs`  | `flex-basis: var(--container-3xs)` |
| `.basis-2xs`  | `flex-basis: var(--container-2xs)` |
| `.basis-xs`   | `flex-basis: var(--container-xs)`  |
| `.basis-sm`   | `flex-basis: var(--container-sm)`  |
| `.basis-md`   | `flex-basis: var(--container-md)`  |
| `.basis-lg`   | `flex-basis: var(--container-lg)`  |
| `.basis-xl`   | `flex-basis: var(--container-xl)`  |
| `.basis-2xl`  | `flex-basis: var(--container-2xl)` |
| `.basis-3xl`  | `flex-basis: var(--container-3xl)` |
| `.basis-4xl`  | `flex-basis: var(--container-4xl)` |
| `.basis-5xl`  | `flex-basis: var(--container-5xl)` |
| `.basis-6xl`  | `flex-basis: var(--container-6xl)` |
| `.basis-7xl`  | `flex-basis: var(--container-7xl)` |
| `.basis-auto` | `flex-basis: auto`                 |
| `.basis-full` | `flex-basis: 100%`                 |



## Flex Direction

### Utilities (absolute values)

| Selector            | Style                            |
| ------------------- | -------------------------------- |
| `.flex-row`         | `flex-direction: row`            |
| `.flex-row-reverse` | `flex-direction: row-reverse`    |
| `.flex-col`         | `flex-direction: column`         |
| `.flex-col-reverse` | `flex-direction: column-reverse` |



## Flex Grow

### Utilities (value-driven)

| Selector | Style                    | Variables Required |
| -------- | ------------------------ | ------------------ |
| `.grow`  | `flex-grow: var(--grow)` | `--grow`           |

### Utilities (absolute values)

| Selector  | Style          |
| --------- | -------------- |
| `.grow-1` | `flex-grow: 1` |
| `.grow-0` | `flex-grow: 0` |



## Flex Shrink

### Utilities (value-driven)

| Selector  | Style                        | Variables Required |
| --------- | ---------------------------- | ------------------ |
| `.shrink` | `flex-shrink: var(--shrink)` | `--shrink`         |

### Utilities (absolute values)

| Selector    | Style            |
| ----------- | ---------------- |
| `.shrink-1` | `flex-shrink: 1` |
| `.shrink-0` | `flex-shrink: 0` |



## Flex Wrap

### Utilities (absolute values)

| Selector             | Style                     |
| -------------------- | ------------------------- |
| `.flex-wrap`         | `flex-wrap: wrap`         |
| `.flex-wrap-reverse` | `flex-wrap: wrap-reverse` |
| `.flex-nowrap`       | `flex-wrap: nowrap`       |



## Flex

### Utilities (value-driven)

| Selector | Style               | Variables Required |
| -------- | ------------------- | ------------------ |
| `.flex`  | `flex: var(--flex)` | `--flex`           |

### Utilities (absolute values)

| Selector        | Style            |
| --------------- | ---------------- |
| `.flex-1`       | `flex: 1 1 0%`   |
| `.flex-auto`    | `flex: 1 1 auto` |
| `.flex-initial` | `flex: 0 1 auto` |
| `.flex-none`    | `flex: none`     |



## Float

### Utilities (absolute values)

| Selector       | Style                 |
| -------------- | --------------------- |
| `.float-start` | `float: inline-start` |
| `.float-end`   | `float: inline-end`   |
| `.float-right` | `float: right`        |
| `.float-left`  | `float: left`         |
| `.float-none`  | `float: none`         |



## Font Family

### Utilities (value-driven)

| Selector       | Style                             | Variables Required |
| -------------- | --------------------------------- | ------------------ |
| `.font-family` | `font-family: var(--font-family)` | `--font-family`    |

### Utilities (absolute values)

| Selector      | Style                                   |
| ------------- | --------------------------------------- |
| `.font-mono`  | `font-family: var(--font-family-mono)`  |
| `.font-sans`  | `font-family: var(--font-family-sans)`  |
| `.font-serif` | `font-family: var(--font-family-serif)` |



## Font Size

### Utilities (value-driven)

| Selector     | Style                         | Variables Required |
| ------------ | ----------------------------- | ------------------ |
| `.font-size` | `font-size: var(--font-size)` | `--font-size`      |

### Utilities (absolute values)

| Selector     | Style                                                                                 |
| ------------ | ------------------------------------------------------------------------------------- |
| `.text-xs`   | `font-size: var(--font-size-xs)`, `line-height: var(--font-size-xs--line-height)`     |
| `.text-sm`   | `font-size: var(--font-size-sm)`, `line-height: var(--font-size-sm--line-height)`     |
| `.text-base` | `font-size: var(--font-size-base)`, `line-height: var(--font-size-base--line-height)` |
| `.text-lg`   | `font-size: var(--font-size-lg)`, `line-height: var(--font-size-lg--line-height)`     |
| `.text-xl`   | `font-size: var(--font-size-xl)`, `line-height: var(--font-size-xl--line-height)`     |
| `.text-2xl`  | `font-size: var(--font-size-2xl)`, `line-height: var(--font-size-2xl--line-height)`   |
| `.text-3xl`  | `font-size: var(--font-size-3xl)`, `line-height: var(--font-size-3xl--line-height)`   |
| `.text-4xl`  | `font-size: var(--font-size-4xl)`, `line-height: var(--font-size-4xl--line-height)`   |
| `.text-5xl`  | `font-size: var(--font-size-5xl)`, `line-height: var(--font-size-5xl--line-height)`   |
| `.text-6xl`  | `font-size: var(--font-size-6xl)`, `line-height: var(--font-size-6xl--line-height)`   |
| `.text-7xl`  | `font-size: var(--font-size-7xl)`, `line-height: var(--font-size-7xl--line-height)`   |
| `.text-8xl`  | `font-size: var(--font-size-8xl)`, `line-height: var(--font-size-8xl--line-height)`   |
| `.text-9xl`  | `font-size: var(--font-size-9xl)`, `line-height: var(--font-size-9xl--line-height)`   |



## Font Smoothing

### Utilities (absolute values)

| Selector                | Style                                                                       |
| ----------------------- | --------------------------------------------------------------------------- |
| `.antialiased`          | `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale` |
| `.subpixel-antialiased` | `-webkit-font-smoothing: auto`, `-moz-osx-font-smoothing: auto`             |



## Font Style

### Utilities (absolute values)

| Selector      | Style                |
| ------------- | -------------------- |
| `.italic`     | `font-style: italic` |
| `.not-italic` | `font-style: normal` |



## Font Variant Numeric

### Utilities (absolute values)

| Selector              | Style                                                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `.normal-nums`        | `font-variant-numeric: normal`                                                                                                                                                                   |
| `.ordinal`            | `--tw-ordinal: ordinal`, `font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`                     |
| `.slashed-zero`       | `--tw-slashed-zero: slashed-zero`, `font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`           |
| `.lining-nums`        | `--tw-numeric-figure: lining-nums`, `font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`          |
| `.oldstyle-nums`      | `--tw-numeric-figure: oldstyle-nums`, `font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`        |
| `.proportional-nums`  | `--tw-numeric-spacing: proportional-nums`, `font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`   |
| `.tabular-nums`       | `--tw-numeric-spacing: tabular-nums`, `font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`        |
| `.diagonal-fractions` | `--tw-numeric-fraction: diagonal-fractions`, `font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)` |
| `.stacked-fractions`  | `--tw-numeric-fraction: stacked-fractions`, `font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)`  |



## Font Weight

### Utilities (absolute values)

| Selector           | Style              |
| ------------------ | ------------------ |
| `.font-black`      | `font-weight: 900` |
| `.font-bold`       | `font-weight: 700` |
| `.font-extrabold`  | `font-weight: 800` |
| `.font-extralight` | `font-weight: 200` |
| `.font-light`      | `font-weight: 300` |
| `.font-medium`     | `font-weight: 500` |
| `.font-normal`     | `font-weight: 400` |
| `.font-semibold`   | `font-weight: 600` |
| `.font-thin`       | `font-weight: 100` |



## Forced Color Adjust

### Utilities (absolute values)

| Selector                    | Style                       |
| --------------------------- | --------------------------- |
| `.forced-color-adjust-auto` | `forced-color-adjust: auto` |
| `.forced-color-adjust-none` | `forced-color-adjust: none` |



## Gap

### Utilities (value-driven)

| Selector   | Style                                             | Variables Required |
| ---------- | ------------------------------------------------- | ------------------ |
| `.gap`     | `gap: calc(var(--spacing) * var(--gap))`          | `--gap`            |
| `.gap-x`   | `column-gap: calc(var(--spacing) * var(--gap-x))` | `--gap-x`          |
| `.gap-y`   | `row-gap: calc(var(--spacing) * var(--gap-y))`    | `--gap-y`          |
| `.[gap]`   | `gap: var(--gap)`                                 | `--gap`            |
| `.[gap-x]` | `column-gap: var(--gap-x)`                        | `--gap-x`          |
| `.[gap-y]` | `row-gap: var(--gap-y)`                           | `--gap-y`          |



## Gradient

### Utilities (value-driven)

| Selector             | Style                                                                                                                                                                                                                                                                                                                                                                                 | Variables Required             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `.from-position`     | `--tw-gradient-from-position: var(--from-position)`                                                                                                                                                                                                                                                                                                                                   | `--from-position`              |
| `.from`              | `--tw-gradient-from: var(--from)`, `--tw-gradient-stops: var( --tw-gradient-from-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-from) var(--tw-gradient-from-position) )`                                                                                                                                            | `--from`                       |
| `.dark:from`         | `--tw-gradient-from: var(--dark-from)`, `--tw-gradient-stops: var( --tw-gradient-from-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-from) var(--tw-gradient-from-position) )`                                                                                                                                       | `--dark-from`                  |
| `.from/o`            | `--tw-gradient-from: color-mix( in oklab, var(--from) var(--from-o, 100%), transparent )`, `--tw-gradient-stops: var( --tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )`                                                                                         | `--from`, `--from-o`           |
| `.dark:from/o`       | `--tw-gradient-from: color-mix( in oklab, var(--dark-from) var(--dark-from-o, 100%), transparent )`, `--tw-gradient-stops: var( --tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )`                                                                               | `--dark-from`, `--dark-from-o` |
| `.via`               | `--tw-gradient-via: var(--via)`, `--tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)`, `--tw-gradient-stops: var(--tw-gradient-via-stops)`                                                                  | `--via`                        |
| `.dark:via`          | `--tw-gradient-via: var(--dark-via)`, `--tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)`, `--tw-gradient-stops: var(--tw-gradient-via-stops)`                                                             | `--dark-via`                   |
| `.via/o`             | `--tw-gradient-via: color-mix( in oklab, var(--via) var(--via-o, 100%), transparent )`, `--tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)`, `--tw-gradient-stops: var(--tw-gradient-via-stops)`           | `--via`, `--via-o`             |
| `.dark:via/o`        | `--tw-gradient-via: color-mix( in oklab, var(--dark-via) var(--dark-via-o, 100%), transparent )`, `--tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position)`, `--tw-gradient-stops: var(--tw-gradient-via-stops)` | `--dark-via`, `--dark-via-o`   |
| `.via-position`      | `--tw-gradient-via-position: var(--via-position)`                                                                                                                                                                                                                                                                                                                                     | `--via-position`               |
| `.to`                | `--tw-gradient-to: var(--to)`, `--tw-gradient-stops: var( --tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )`                                                                                                                                                     | `--to`                         |
| `.dark:to`           | `--tw-gradient-to: var(--dark-to)`, `--tw-gradient-stops: var( --tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )`                                                                                                                                                | `--dark-to`                    |
| `.to/o`              | `--tw-gradient-to: color-mix( in oklab, var(--to) var(--to-o, 100%), transparent )`, `--tw-gradient-stops: var( --tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )`                                                                                               | `--to`, `--to-o`               |
| `.dark:to/o`         | `--tw-gradient-to: color-mix( in oklab, var(--dark-to) var(--dark-to-o, 100%), transparent )`, `--tw-gradient-stops: var( --tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position) )`                                                                                     | `--dark-to`, `--dark-to-o`     |
| `.to-position`       | `--tw-gradient-to-position: var(--to-position)`                                                                                                                                                                                                                                                                                                                                       | `--to-position`                |
| `.gradient-position` | `--tw-gradient-position: var(--gradient-position, in oklab)`                                                                                                                                                                                                                                                                                                                          | `--gradient-position`          |

### Utilities (absolute values)

| Selector        | Style                                                         |
| --------------- | ------------------------------------------------------------- |
| `.linear`       | `background-image: linear-gradient(var(--tw-gradient-stops))` |
| `.radial`       | `background-image: radial-gradient(var(--tw-gradient-stops))` |
| `.conic`        | `background-image: conic-gradient(var(--tw-gradient-stops))`  |
| `.linear-to-t`  | `--tw-gradient-position: to top in oklab`                     |
| `.linear-to-tr` | `--tw-gradient-position: to top right in oklab`               |
| `.linear-to-r`  | `--tw-gradient-position: to right in oklab`                   |
| `.linear-to-br` | `--tw-gradient-position: to bottom right in oklab`            |
| `.linear-to-b`  | `--tw-gradient-position: to bottom in oklab`                  |
| `.linear-to-bl` | `--tw-gradient-position: to bottom left in oklab`             |
| `.linear-to-l`  | `--tw-gradient-position: to left in oklab`                    |
| `.linear-to-tl` | `--tw-gradient-position: to top left in oklab`                |



## Grayscale

### Utilities (value-driven)

| Selector     | Style                            | Variables Required |
| ------------ | -------------------------------- | ------------------ |
| `.grayscale` | `filter: grayscale(--grayscale)` | -                  |



## Grid Auto Flow

### Utilities (absolute values)

| Selector               | Style                          |
| ---------------------- | ------------------------------ |
| `.grid-flow-row`       | `grid-auto-flow: row`          |
| `.grid-flow-col`       | `grid-auto-flow: column`       |
| `.grid-flow-dense`     | `grid-auto-flow: dense`        |
| `.grid-flow-row-dense` | `grid-auto-flow: row dense`    |
| `.grid-flow-col-dense` | `grid-auto-flow: column dense` |



## Grid Column

### Utilities (value-driven)

| Selector     | Style                                                      | Variables Required |
| ------------ | ---------------------------------------------------------- | ------------------ |
| `.col`       | `grid-column: var(--col)`                                  | `--col`            |
| `.col-span`  | `grid-column: span var(--col-span) / span var(--col-span)` | `--col-span`       |
| `.col-start` | `grid-column-start: var(--col-start)`                      | `--col-start`      |
| `.col-end`   | `grid-column-end: var(--col-end)`                          | `--col-end`        |

### Utilities (absolute values)

| Selector          | Style                     |
| ----------------- | ------------------------- |
| `.col-auto`       | `grid-column: auto`       |
| `.col-span-full`  | `grid-column: 1 / -1`     |
| `.col-start-auto` | `grid-column-start: auto` |
| `.col-end-auto`   | `grid-column-end: auto`   |



## Grid Row

### Utilities (value-driven)

| Selector     | Style                                                   | Variables Required |
| ------------ | ------------------------------------------------------- | ------------------ |
| `.row`       | `grid-row: var(--row)`                                  | `--row`            |
| `.row-span`  | `grid-row: span var(--row-span) / span var(--row-span)` | `--row-span`       |
| `.row-start` | `grid-row-start: var(--row-start)`                      | `--row-start`      |
| `.row-end`   | `grid-row-end: var(--row-end)`                          | `--row-end`        |

### Utilities (absolute values)

| Selector          | Style                  |
| ----------------- | ---------------------- |
| `.row-auto`       | `grid-row: auto`       |
| `.row-span-full`  | `grid-row: 1 / -1`     |
| `.row-start-auto` | `grid-row-start: auto` |
| `.row-end-auto`   | `grid-row-end: auto`   |



## Grid Template Columns

### Utilities (value-driven)

| Selector       | Style                                                             | Variables Required |
| -------------- | ----------------------------------------------------------------- | ------------------ |
| `.grid-cols`   | `grid-template-columns: repeat(var(--grid-cols), minmax(0, 1fr))` | `--grid-cols`      |
| `.[grid-cols]` | `grid-template-columns: var(--grid-cols)`                         | `--grid-cols`      |

### Utilities (absolute values)

| Selector             | Style                            |
| -------------------- | -------------------------------- |
| `.grid-cols-none`    | `grid-template-columns: none`    |
| `.grid-cols-subgrid` | `grid-template-columns: subgrid` |



## Grid Template Rows

### Utilities (value-driven)

| Selector       | Style                                                          | Variables Required |
| -------------- | -------------------------------------------------------------- | ------------------ |
| `.grid-rows`   | `grid-template-rows: repeat(var(--grid-rows), minmax(0, 1fr))` | `--grid-rows`      |
| `.[grid-rows]` | `grid-template-rows: var(--grid-rows)`                         | `--grid-rows`      |

### Utilities (absolute values)

| Selector             | Style                         |
| -------------------- | ----------------------------- |
| `.grid-rows-none`    | `grid-template-rows: none`    |
| `.grid-rows-subgrid` | `grid-template-rows: subgrid` |



## Height

### Utilities (value-driven)

| Selector | Style                                     | Variables Required |
| -------- | ----------------------------------------- | ------------------ |
| `.h`     | `height: calc(var(--spacing) * var(--h))` | `--h`              |
| `.[h]`   | `height: var(--h)`                        | `--h`              |

### Utilities (absolute values)

| Selector    | Style                 |
| ----------- | --------------------- |
| `.h-auto`   | `height: auto`        |
| `.h-full`   | `height: 100%`        |
| `.h-screen` | `height: 100vh`       |
| `.h-dvh`    | `height: 100dvh`      |
| `.h-dvw`    | `height: 100dvw`      |
| `.h-lvh`    | `height: 100lvh`      |
| `.h-lvw`    | `height: 100lvw`      |
| `.h-svh`    | `height: 100svh`      |
| `.h-svw`    | `height: 100svw`      |
| `.h-min`    | `height: min-content` |
| `.h-max`    | `height: max-content` |
| `.h-fit`    | `height: fit-content` |
| `.h-lh`     | `height: 1lh`         |



## Hue Rotate

### Utilities (value-driven)

| Selector      | Style                              | Variables Required |
| ------------- | ---------------------------------- | ------------------ |
| `.hue-rotate` | `filter: hue-rotate(--hue-rotate)` | -                  |



## Hyphens

### Utilities (absolute values)

| Selector          | Style                                        |
| ----------------- | -------------------------------------------- |
| `.hyphens-none`   | `-webkit-hyphens: none`, `hyphens: none`     |
| `.hyphens-manual` | `-webkit-hyphens: manual`, `hyphens: manual` |
| `.hyphens-auto`   | `-webkit-hyphens: auto`, `hyphens: auto`     |



## Inset Ring Opacity

### Utilities (value-driven)

| Selector             | Style                                                                                                                                                                                                                                                                                                                                                                                   | Variables Required                         |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `.inset-ring/o`      | `--tw-inset-ring-width: 1px`, `--tw-inset-ring-color: color-mix( in oklab, var(--inset-ring) var(--inset-ring-o, 100%), transparent )`, `--tw-inset-ring-shadow: inset 0 0 0 var(--tw-inset-ring-width) var(--tw-inset-ring-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`           | `--inset-ring`, `--inset-ring-o`           |
| `.dark:inset-ring/o` | `--tw-inset-ring-width: 1px`, `--tw-inset-ring-color: color-mix( in oklab, var(--dark-inset-ring) var(--dark-inset-ring-o, 100%), transparent )`, `--tw-inset-ring-shadow: inset 0 0 0 var(--tw-inset-ring-width) var(--tw-inset-ring-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)` | `--dark-inset-ring`, `--dark-inset-ring-o` |



## Inset Ring Width

### Utilities (value-driven)

| Selector        | Style                                        | Variables Required |
| --------------- | -------------------------------------------- | ------------------ |
| `.inset-ring-w` | `--tw-inset-ring-width: var(--inset-ring-w)` | `--inset-ring-w`   |



## Inset Ring

### Utilities (value-driven)

| Selector           | Style                                                                                                                                                                                                                                                                                                                              | Variables Required  |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `.inset-ring`      | `--tw-inset-ring-width: 1px`, `--tw-inset-ring-color: var(--inset-ring, currentColor)`, `--tw-inset-ring-shadow: inset 0 0 0 var(--tw-inset-ring-width) var(--tw-inset-ring-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`      | `--inset-ring`      |
| `.dark:inset-ring` | `--tw-inset-ring-width: 1px`, `--tw-inset-ring-color: var(--dark-inset-ring, currentColor)`, `--tw-inset-ring-shadow: inset 0 0 0 var(--tw-inset-ring-width) var(--tw-inset-ring-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)` | `--dark-inset-ring` |



## Inset

### Utilities (value-driven)

| Selector     | Style                                                     | Variables Required |
| ------------ | --------------------------------------------------------- | ------------------ |
| `.inset`     | `inset: calc(var(--spacing) * var(--inset))`              | `--inset`          |
| `.start`     | `inset-inline-start: calc(var(--spacing) * var(--start))` | `--start`          |
| `.end`       | `inset-inline-end: calc(var(--spacing) * var(--end))`     | `--end`            |
| `.inset-x`   | `inset-inline: calc(var(--spacing) * var(--inset-x))`     | `--inset-x`        |
| `.inset-y`   | `inset-block: calc(var(--spacing) * var(--inset-y))`      | `--inset-y`        |
| `.[inset]`   | `inset: var(--inset)`                                     | `--inset`          |
| `.[start]`   | `inset-inline-start: var(--start)`                        | `--start`          |
| `.[end]`     | `inset-inline-end: var(--end)`                            | `--end`            |
| `.[inset-x]` | `inset-inline: var(--inset-x)`                            | `--inset-x`        |
| `.[inset-y]` | `inset-block: var(--inset-y)`                             | `--inset-y`        |

### Utilities (absolute values)

| Selector        | Style                      |
| --------------- | -------------------------- |
| `.top-full`     | `top: 100%`                |
| `.top-auto`     | `top: auto`                |
| `.right-full`   | `right: 100%`              |
| `.right-auto`   | `right: auto`              |
| `.bottom-full`  | `bottom: 100%`             |
| `.bottom-auto`  | `bottom: auto`             |
| `.left-full`    | `left: 100%`               |
| `.left-auto`    | `left: auto`               |
| `.inset-full`   | `inset: 100%`              |
| `.inset-auto`   | `inset: auto`              |
| `.inset-x-full` | `inset-inline: 100%`       |
| `.inset-y-full` | `inset-block: 100%`        |
| `.start-full`   | `inset-inline-start: 100%` |
| `.end-full`     | `inset-inline-end: 100%`   |



# Frankenstyle

Frankenstyle is a no-build, value-driven, fully responsive, utility-first CSS framework. It’s designed to be lightweight, production-ready, and to strike a balance between developer ergonomics and build size.

## Installation

Frankenstyle can be used via CDN or downloaded and referenced locally.

### CDN

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/frankenstyle@latest/dist/css/frankenstyle.min.css"
/>
```

### NPM

```bash
npm i frankenstyle@latest
```

Then import it in your `main.css`:

```css
@import 'frankenstyle/css/frankenstyle.css';
```

### JavaScript

JavaScript is optional, but important for interactive states:

```html
<script src="https://unpkg.com/frankenstyle@latest/dist/js/frankenstyle.min.js"></script>
```

## Core Concepts & Usage

Think of Frankenstyle as _Tailwind CSS, but de-valued_. Frankenstyle provides the class, you provide the value.

```html
<div class="m sm:m md:m" style="--m: 4; --sm-m: 8; --md-m: 16"></div>
```

Behind the scenes, values are multiplied by a base spacing variable (e.g., `var(--spacing)`).

Need arbitrary values? Wrap in brackets:

```html
<div class="[m]" style="--m: 4px;"></div>
```

You don’t need to memorize odd variable names — just drop special characters from the class.

- `sm:m` → `--sm-m`
- `dark:sm:bg:hover` → `--dark-sm-bg-hover`

### States

Interactive states (e.g., hover) are generated on demand. Mark an element with `data-uk`, and the runtime will generate the necessary pseudo-state CSS.

```html
<button
  type="button"
  class="color bg dark:bg bg:hover dark:bg:hover px py rounded-lg text-sm font-medium"
  style="
        --color: var(--color-white);
        --bg: var(--color-blue-700);
        --dark-bg: var(--color-pink-600);
        --bg-hover: var(--color-blue-800);
        --dark-bg-hover: var(--color-pink-700);
        --px: 5;
        --py: 2.5;
    "
  data-uk
>
  Default
</button>
```

This avoids shipping huge CSS files for states up front — everything is generated at runtime when needed.

### Dark Mode

Prefix color utilities with `dark:`:

- `bg` → `dark:bg`
- `color` → `dark:color`
- `border` → `dark:border`
- `fill` → `dark:fill`

### Opacity

Suffix color utilities with `/o`. These require two variables (base + opacity) to avoid inheritance issues:

```html
<div
  class="bg/o dark:bg/o"
  style="
    --bg: var(--color-blue-800);
    --bg-o: 80%;
    --dark-bg: var(--color-green-800);
    --dark-bg-o: 80%;
  "
></div>
```

### Responsiveness

Prefix classes with breakpoints:

- `sm:`
- `md:`
- `lg:`
- `xl:`
- `2xl:`

```html
<div class="p sm:p md:p" style="--p: 4; --sm-p: 8; --md-p: 16"></div>
```

## Key Differences from Tailwind

- **No config, no file watchers** → everything is statically pre-built.
- **Value-driven utilities** → use `m` + `--m: 8` or `[m]` for arbitrary values, not `m-8` or `m-[8px]`.
- **State syntax is reversed** → `bg:hover` instead of `hover:bg-blue-600`.
- **Runtime state generation** → hover/active CSS is created on the fly, keeping static builds small.
- **Familiar patterns** → utilities, responsive prefixes, and naming feel similar to Tailwind.



## Invert

### Utilities (value-driven)

| Selector  | Style                      | Variables Required |
| --------- | -------------------------- | ------------------ |
| `.invert` | `filter: invert(--invert)` | -                  |



## Isolation

### Utilities (absolute values)

| Selector          | Style                |
| ----------------- | -------------------- |
| `.isolate`        | `isolation: isolate` |
| `.isolation-auto` | `isolation: auto`    |



## Justify Content

### Utilities (absolute values)

| Selector               | Style                                                |
| ---------------------- | ---------------------------------------------------- |
| `.justify-normal`      | `justify-content: normal`, `justify-content: normal` |
| `.justify-start`       | `justify-content: flex-start`                        |
| `.justify-end`         | `justify-content: flex-end`                          |
| `.justify-center`      | `justify-content: center`                            |
| `.justify-between`     | `justify-content: space-between`                     |
| `.justify-around`      | `justify-content: space-around`                      |
| `.justify-evenly`      | `justify-content: space-evenly`                      |
| `.justify-stretch`     | `justify-content: stretch`                           |
| `.justify-end-safe`    | `justify-content: safe flex-end`                     |
| `.justify-center-safe` | `justify-content: safe center`                       |



## Justify Items

### Utilities (absolute values)

| Selector                     | Style                        |
| ---------------------------- | ---------------------------- |
| `.justify-items-start`       | `justify-items: start`       |
| `.justify-items-end`         | `justify-items: end`         |
| `.justify-items-center`      | `justify-items: center`      |
| `.justify-items-stretch`     | `justify-items: stretch`     |
| `.justify-items-end-safe`    | `justify-items: safe end`    |
| `.justify-items-center-safe` | `justify-items: safe center` |
| `.justify-items-normal`      | `justify-items: normal`      |



## Justify Self

### Utilities (absolute values)

| Selector                    | Style                       |
| --------------------------- | --------------------------- |
| `.justify-self-auto`        | `justify-self: auto`        |
| `.justify-self-start`       | `justify-self: start`       |
| `.justify-self-end`         | `justify-self: end`         |
| `.justify-self-center`      | `justify-self: center`      |
| `.justify-self-stretch`     | `justify-self: stretch`     |
| `.justify-self-end-safe`    | `justify-self: safe end`    |
| `.justify-self-center-safe` | `justify-self: safe center` |



## Left

### Utilities (value-driven)

| Selector  | Style                                      | Variables Required |
| --------- | ------------------------------------------ | ------------------ |
| `.left`   | `left: calc(var(--spacing) * var(--left))` | `--left`           |
| `.[left]` | `left: var(--left)`                        | `--left`           |



## Letter Spacing

### Utilities (value-driven)

| Selector    | Style                             | Variables Required |
| ----------- | --------------------------------- | ------------------ |
| `.tracking` | `letter-spacing: var(--tracking)` | `--tracking`       |

### Utilities (absolute values)

| Selector             | Style                      |
| -------------------- | -------------------------- |
| `.-tracking-normal`  | `letter-spacing: -0em`     |
| `.-tracking-tight`   | `letter-spacing: 0.025em`  |
| `.-tracking-tighter` | `letter-spacing: 0.05em`   |
| `.-tracking-wide`    | `letter-spacing: -0.025em` |
| `.-tracking-wider`   | `letter-spacing: -0.05em`  |
| `.-tracking-widest`  | `letter-spacing: -0.1em`   |
| `.tracking-normal`   | `letter-spacing: 0em`      |
| `.tracking-tight`    | `letter-spacing: -0.025em` |
| `.tracking-tighter`  | `letter-spacing: -0.05em`  |
| `.tracking-wide`     | `letter-spacing: 0.025em`  |
| `.tracking-wider`    | `letter-spacing: 0.05em`   |
| `.tracking-widest`   | `letter-spacing: 0.1em`    |



## Line Clamp

### Utilities (absolute values)

| Selector           | Style                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| `.line-clamp-1`    | `overflow: hidden`, `display: -webkit-box`, `-webkit-box-orient: vertical`, `-webkit-line-clamp: 1` |
| `.line-clamp-2`    | `overflow: hidden`, `display: -webkit-box`, `-webkit-box-orient: vertical`, `-webkit-line-clamp: 2` |
| `.line-clamp-3`    | `overflow: hidden`, `display: -webkit-box`, `-webkit-box-orient: vertical`, `-webkit-line-clamp: 3` |
| `.line-clamp-4`    | `overflow: hidden`, `display: -webkit-box`, `-webkit-box-orient: vertical`, `-webkit-line-clamp: 4` |
| `.line-clamp-5`    | `overflow: hidden`, `display: -webkit-box`, `-webkit-box-orient: vertical`, `-webkit-line-clamp: 5` |
| `.line-clamp-6`    | `overflow: hidden`, `display: -webkit-box`, `-webkit-box-orient: vertical`, `-webkit-line-clamp: 6` |
| `.line-clamp-none` | `overflow: visible`, `display: block`, `-webkit-box-orient: horizontal`, `-webkit-line-clamp: none` |



## Line Height

### Utilities (value-driven)

| Selector     | Style                                                | Variables Required |
| ------------ | ---------------------------------------------------- | ------------------ |
| `.leading`   | `line-height: calc(var(--spacing) * var(--leading))` | `--leading`        |
| `.[leading]` | `line-height: var(--leading)`                        | `--leading`        |

### Utilities (absolute values)

| Selector           | Style                |
| ------------------ | -------------------- |
| `.leading-loose`   | `line-height: 2`     |
| `.leading-none`    | `line-height: 1`     |
| `.leading-normal`  | `line-height: 1.5`   |
| `.leading-relaxed` | `line-height: 1.625` |
| `.leading-snug`    | `line-height: 1.375` |
| `.leading-tight`   | `line-height: 1.25`  |



## List Style Image

### Utilities (value-driven)

| Selector      | Style                                 | Variables Required |
| ------------- | ------------------------------------- | ------------------ |
| `.list-image` | `list-style-image: var(--list-image)` | `--list-image`     |

### Utilities (absolute values)

| Selector           | Style                    |
| ------------------ | ------------------------ |
| `.list-image-none` | `list-style-image: none` |



## List Style Position

### Utilities (absolute values)

| Selector        | Style                          |
| --------------- | ------------------------------ |
| `.list-inside`  | `list-style-position: inside`  |
| `.list-outside` | `list-style-position: outside` |



## List Style Type

### Utilities (value-driven)

| Selector | Style                          | Variables Required |
| -------- | ------------------------------ | ------------------ |
| `.list`  | `list-style-type: var(--list)` | `--list`           |

### Utilities (absolute values)

| Selector        | Style                      |
| --------------- | -------------------------- |
| `.list-decimal` | `list-style-type: decimal` |
| `.list-disc`    | `list-style-type: disc`    |
| `.list-none`    | `list-style-type: none`    |



## Margin

### Utilities (value-driven)

| Selector | Style                                                   | Variables Required |
| -------- | ------------------------------------------------------- | ------------------ |
| `.m`     | `margin: calc(var(--spacing) * var(--m))`               | `--m`              |
| `.[m]`   | `margin: var(--m)`                                      | `--m`              |
| `.mt`    | `margin-top: calc(var(--spacing) * var(--mt))`          | `--mt`             |
| `.[mt]`  | `margin-top: var(--mt)`                                 | `--mt`             |
| `.mb`    | `margin-bottom: calc(var(--spacing) * var(--mb))`       | `--mb`             |
| `.[mb]`  | `margin-bottom: var(--mb)`                              | `--mb`             |
| `.ml`    | `margin-left: calc(var(--spacing) * var(--ml))`         | `--ml`             |
| `.[ml]`  | `margin-left: var(--ml)`                                | `--ml`             |
| `.mr`    | `margin-right: calc(var(--spacing) * var(--mr))`        | `--mr`             |
| `.[mr]`  | `margin-right: var(--mr)`                               | `--mr`             |
| `.ms`    | `margin-inline-start: calc(var(--spacing) * var(--ms))` | `--ms`             |
| `.[ms]`  | `margin-inline-start: var(--ms)`                        | `--ms`             |
| `.me`    | `margin-inline-end: calc(var(--spacing) * var(--me))`   | `--me`             |
| `.[me]`  | `margin-inline-end: var(--me)`                          | `--me`             |
| `.mx`    | `margin-inline: calc(var(--spacing) * var(--mx))`       | `--mx`             |
| `.[mx]`  | `margin-inline: var(--mx)`                              | `--mx`             |
| `.my`    | `margin-block: calc(var(--spacing) * var(--my))`        | `--my`             |
| `.[my]`  | `margin-block: var(--my)`                               | `--my`             |

### Utilities (absolute values)

| Selector   | Style                       |
| ---------- | --------------------------- |
| `.m-auto`  | `margin: auto`              |
| `.mt-auto` | `margin-top: auto`          |
| `.mb-auto` | `margin-bottom: auto`       |
| `.ml-auto` | `margin-left: auto`         |
| `.mr-auto` | `margin-right: auto`        |
| `.ms-auto` | `margin-inline-start: auto` |
| `.me-auto` | `margin-inline-end: auto`   |
| `.mx-auto` | `margin-inline: auto`       |
| `.my-auto` | `margin-block: auto`        |



## Mask Clip

### Utilities (absolute values)

| Selector             | Style                    |
| -------------------- | ------------------------ |
| `.mask-clip-border`  | `mask-clip: border-box`  |
| `.mask-clip-padding` | `mask-clip: padding-box` |
| `.mask-clip-content` | `mask-clip: content-box` |
| `.mask-clip-fill`    | `mask-clip: fill-box`    |
| `.mask-clip-stroke`  | `mask-clip: stroke-box`  |
| `.mask-clip-view`    | `mask-clip: view-box`    |
| `.mask-no-clip`      | `mask-clip: no-clip`     |



## Mask Composite

### Utilities (absolute values)

| Selector          | Style                       |
| ----------------- | --------------------------- |
| `.mask-add`       | `mask-composite: add`       |
| `.mask-subtract`  | `mask-composite: subtract`  |
| `.mask-intersect` | `mask-composite: intersect` |
| `.mask-exclude`   | `mask-composite: exclude`   |



## Mask Mode

### Utilities (absolute values)

| Selector          | Style                     |
| ----------------- | ------------------------- |
| `.mask-alpha`     | `mask-mode: alpha`        |
| `.mask-luminance` | `mask-mode: luminance`    |
| `.mask-match`     | `mask-mode: match-source` |



## Mask Origin

### Utilities (absolute values)

| Selector               | Style                      |
| ---------------------- | -------------------------- |
| `.mask-origin-border`  | `mask-origin: border-box`  |
| `.mask-origin-padding` | `mask-origin: padding-box` |
| `.mask-origin-content` | `mask-origin: content-box` |
| `.mask-origin-fill`    | `mask-origin: fill-box`    |
| `.mask-origin-stroke`  | `mask-origin: stroke-box`  |
| `.mask-origin-view`    | `mask-origin: view-box`    |



## Mask Position

### Utilities (value-driven)

| Selector         | Style                                 | Variables Required |
| ---------------- | ------------------------------------- | ------------------ |
| `.mask-position` | `mask-position: var(--mask-position)` | `--mask-position`  |

### Utilities (absolute values)

| Selector             | Style                         |
| -------------------- | ----------------------------- |
| `.mask-top-left`     | `mask-position: top left`     |
| `.mask-top`          | `mask-position: top`          |
| `.mask-top-right`    | `mask-position: top right`    |
| `.mask-left`         | `mask-position: left`         |
| `.mask-center`       | `mask-position: center`       |
| `.mask-right`        | `mask-position: right`        |
| `.mask-bottom-left`  | `mask-position: bottom left`  |
| `.mask-bottom`       | `mask-position: bottom`       |
| `.mask-bottom-right` | `mask-position: bottom right` |



## Mask Repeat

### Utilities (absolute values)

| Selector             | Style                    |
| -------------------- | ------------------------ |
| `.mask-repeat`       | `mask-repeat: repeat`    |
| `.mask-no-repeat`    | `mask-repeat: no-repeat` |
| `.mask-repeat-x`     | `mask-repeat: repeat-x`  |
| `.mask-repeat-y`     | `mask-repeat: repeat-y`  |
| `.mask-repeat-space` | `mask-repeat: space`     |
| `.mask-repeat-round` | `mask-repeat: round`     |



## Mask Size

### Utilities (value-driven)

| Selector     | Style                         | Variables Required |
| ------------ | ----------------------------- | ------------------ |
| `.mask-size` | `mask-size: var(--mask-size)` | `--mask-size`      |

### Utilities (absolute values)

| Selector        | Style                |
| --------------- | -------------------- |
| `.mask-auto`    | `mask-size: auto`    |
| `.mask-cover`   | `mask-size: cover`   |
| `.mask-contain` | `mask-size: contain` |



## Mask Type

### Utilities (absolute values)

| Selector               | Style                  |
| ---------------------- | ---------------------- |
| `.mask-type-alpha`     | `mask-type: alpha`     |
| `.mask-type-luminance` | `mask-type: luminance` |



## Max Height

### Utilities (value-driven)

| Selector   | Style                                             | Variables Required |
| ---------- | ------------------------------------------------- | ------------------ |
| `.max-h`   | `max-height: calc(var(--spacing) * var(--max-h))` | `--max-h`          |
| `.[max-h]` | `max-height: var(--max-h)`                        | `--max-h`          |

### Utilities (absolute values)

| Selector        | Style                     |
| --------------- | ------------------------- |
| `.max-h-none`   | `max-height: none`        |
| `.max-h-full`   | `max-height: 100%`        |
| `.max-h-screen` | `max-height: 100vh`       |
| `.max-h-dvh`    | `max-height: 100dvh`      |
| `.max-h-dvw`    | `max-height: 100dvw`      |
| `.max-h-lvh`    | `max-height: 100lvh`      |
| `.max-h-lvw`    | `max-height: 100lvw`      |
| `.max-h-svh`    | `max-height: 100svh`      |
| `.max-h-svw`    | `max-height: 100svw`      |
| `.max-h-min`    | `max-height: min-content` |
| `.max-h-max`    | `max-height: max-content` |
| `.max-h-fit`    | `max-height: fit-content` |
| `.max-h-lh`     | `max-height: 1lh`         |



## Max Width

### Utilities (value-driven)

| Selector   | Style                                            | Variables Required |
| ---------- | ------------------------------------------------ | ------------------ |
| `.max-w`   | `max-width: calc(var(--spacing) * var(--max-w))` | `--max-w`          |
| `.[max-w]` | `max-width: var(--max-w)`                        | `--max-w`          |

### Utilities (absolute values)

| Selector        | Style                             |
| --------------- | --------------------------------- |
| `.max-w-3xs`    | `max-width: var(--container-3xs)` |
| `.max-w-2xs`    | `max-width: var(--container-2xs)` |
| `.max-w-xs`     | `max-width: var(--container-xs)`  |
| `.max-w-sm`     | `max-width: var(--container-sm)`  |
| `.max-w-md`     | `max-width: var(--container-md)`  |
| `.max-w-lg`     | `max-width: var(--container-lg)`  |
| `.max-w-xl`     | `max-width: var(--container-xl)`  |
| `.max-w-2xl`    | `max-width: var(--container-2xl)` |
| `.max-w-3xl`    | `max-width: var(--container-3xl)` |
| `.max-w-4xl`    | `max-width: var(--container-4xl)` |
| `.max-w-5xl`    | `max-width: var(--container-5xl)` |
| `.max-w-6xl`    | `max-width: var(--container-6xl)` |
| `.max-w-7xl`    | `max-width: var(--container-7xl)` |
| `.max-w-full`   | `max-width: 100%`                 |
| `.max-w-screen` | `max-width: 100vw`                |
| `.max-w-dvw`    | `max-width: 100dvw`               |
| `.max-w-dvh`    | `max-width: 100dvh`               |
| `.max-w-lvw`    | `max-width: 100lvw`               |
| `.max-w-lvh`    | `max-width: 100lvh`               |
| `.max-w-svw`    | `max-width: 100svw`               |
| `.max-w-svh`    | `max-width: 100svh`               |
| `.max-w-min`    | `max-width: min-content`          |
| `.max-w-max`    | `max-width: max-content`          |
| `.max-w-fit`    | `max-width: fit-content`          |
| `.max-w-none`   | `max-width: none`                 |



## Min Height

### Utilities (value-driven)

| Selector   | Style                                             | Variables Required |
| ---------- | ------------------------------------------------- | ------------------ |
| `.min-h`   | `min-height: calc(var(--spacing) * var(--min-h))` | `--min-h`          |
| `.[min-h]` | `min-height: var(--min-h)`                        | `--min-h`          |

### Utilities (absolute values)

| Selector        | Style                     |
| --------------- | ------------------------- |
| `.min-h-auto`   | `min-height: auto`        |
| `.min-h-full`   | `min-height: 100%`        |
| `.min-h-screen` | `min-height: 100vh`       |
| `.min-h-dvh`    | `min-height: 100dvh`      |
| `.min-h-dvw`    | `min-height: 100dvw`      |
| `.min-h-lvh`    | `min-height: 100lvh`      |
| `.min-h-lvw`    | `min-height: 100lvw`      |
| `.min-h-svh`    | `min-height: 100svh`      |
| `.min-h-svw`    | `min-height: 100svw`      |
| `.min-h-min`    | `min-height: min-content` |
| `.min-h-max`    | `min-height: max-content` |
| `.min-h-fit`    | `min-height: fit-content` |
| `.min-h-lh`     | `min-height: 1lh`         |



## Min Width

### Utilities (value-driven)

| Selector   | Style                                            | Variables Required |
| ---------- | ------------------------------------------------ | ------------------ |
| `.min-w`   | `min-width: calc(var(--spacing) * var(--min-w))` | `--min-w`          |
| `.[min-w]` | `min-width: var(--min-w)`                        | `--min-w`          |

### Utilities (absolute values)

| Selector        | Style                             |
| --------------- | --------------------------------- |
| `.min-w-3xs`    | `min-width: var(--container-3xs)` |
| `.min-w-2xs`    | `min-width: var(--container-2xs)` |
| `.min-w-xs`     | `min-width: var(--container-xs)`  |
| `.min-w-sm`     | `min-width: var(--container-sm)`  |
| `.min-w-md`     | `min-width: var(--container-md)`  |
| `.min-w-lg`     | `min-width: var(--container-lg)`  |
| `.min-w-xl`     | `min-width: var(--container-xl)`  |
| `.min-w-2xl`    | `min-width: var(--container-2xl)` |
| `.min-w-3xl`    | `min-width: var(--container-3xl)` |
| `.min-w-4xl`    | `min-width: var(--container-4xl)` |
| `.min-w-5xl`    | `min-width: var(--container-5xl)` |
| `.min-w-6xl`    | `min-width: var(--container-6xl)` |
| `.min-w-7xl`    | `min-width: var(--container-7xl)` |
| `.min-w-auto`   | `min-width: auto`                 |
| `.min-w-full`   | `min-width: 100%`                 |
| `.min-w-screen` | `min-width: 100vw`                |
| `.min-w-dvw`    | `min-width: 100dvw`               |
| `.min-w-dvh`    | `min-width: 100dvh`               |
| `.min-w-lvw`    | `min-width: 100lvw`               |
| `.min-w-lvh`    | `min-width: 100lvh`               |
| `.min-w-svw`    | `min-width: 100svw`               |
| `.min-w-svh`    | `min-width: 100svh`               |
| `.min-w-min`    | `min-width: min-content`          |
| `.min-w-max`    | `min-width: max-content`          |
| `.min-w-fit`    | `min-width: fit-content`          |



## Mix Blend Mode

### Utilities (absolute values)

| Selector                  | Style                          |
| ------------------------- | ------------------------------ |
| `.mix-blend-normal`       | `mix-blend-mode: normal`       |
| `.mix-blend-multiply`     | `mix-blend-mode: multiply`     |
| `.mix-blend-screen`       | `mix-blend-mode: screen`       |
| `.mix-blend-overlay`      | `mix-blend-mode: overlay`      |
| `.mix-blend-darken`       | `mix-blend-mode: darken`       |
| `.mix-blend-lighten`      | `mix-blend-mode: lighten`      |
| `.mix-blend-color-dodge`  | `mix-blend-mode: color-dodge`  |
| `.mix-blend-color-burn`   | `mix-blend-mode: color-burn`   |
| `.mix-blend-hard-light`   | `mix-blend-mode: hard-light`   |
| `.mix-blend-soft-light`   | `mix-blend-mode: soft-light`   |
| `.mix-blend-difference`   | `mix-blend-mode: difference`   |
| `.mix-blend-exclusion`    | `mix-blend-mode: exclusion`    |
| `.mix-blend-hue`          | `mix-blend-mode: hue`          |
| `.mix-blend-saturation`   | `mix-blend-mode: saturation`   |
| `.mix-blend-color`        | `mix-blend-mode: color`        |
| `.mix-blend-luminosity`   | `mix-blend-mode: luminosity`   |
| `.mix-blend-plus-darker`  | `mix-blend-mode: plus-darker`  |
| `.mix-blend-plus-lighter` | `mix-blend-mode: plus-lighter` |



## Object Fit

### Utilities (absolute values)

| Selector             | Style                    |
| -------------------- | ------------------------ |
| `.object-contain`    | `object-fit: contain`    |
| `.object-cover`      | `object-fit: cover`      |
| `.object-fill`       | `object-fit: fill`       |
| `.object-none`       | `object-fit: none`       |
| `.object-scale-down` | `object-fit: scale-down` |



## Object Position

### Utilities (value-driven)

| Selector           | Style                                     | Variables Required  |
| ------------------ | ----------------------------------------- | ------------------- |
| `.object-position` | `object-position: var(--object-position)` | `--object-position` |

### Utilities (absolute values)

| Selector               | Style                           |
| ---------------------- | ------------------------------- |
| `.object-bottom`       | `object-position: bottom`       |
| `.object-center`       | `object-position: center`       |
| `.object-left`         | `object-position: left`         |
| `.object-left-bottom`  | `object-position: left bottom`  |
| `.object-left-top`     | `object-position: left top`     |
| `.object-right`        | `object-position: right`        |
| `.object-right-bottom` | `object-position: right bottom` |
| `.object-right-top`    | `object-position: right top`    |
| `.object-top`          | `object-position: top`          |



## Opacity

### Utilities (value-driven)

| Selector   | Style                     | Variables Required |
| ---------- | ------------------------- | ------------------ |
| `.opacity` | `opacity: var(--opacity)` | `--opacity`        |



## Order

### Utilities (value-driven)

| Selector | Style                 | Variables Required |
| -------- | --------------------- | ------------------ |
| `.order` | `order: var(--order)` | `--order`          |

### Utilities (absolute values)

| Selector        | Style          |
| --------------- | -------------- |
| `.-order-first` | `order: 9999`  |
| `.-order-last`  | `order: -9999` |
| `.-order-none`  | `order: 0`     |
| `.order-first`  | `order: -9999` |
| `.order-last`   | `order: 9999`  |
| `.order-none`   | `order: 0`     |



## Outline Color Opacity

### Utilities (value-driven)

| Selector          | Style                                                                                                | Variables Required                   |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `.outline/o`      | `outline-color: color-mix( in oklab, var(--outline) var(--outline-o, 100%), transparent )`           | `--outline`, `--outline-o`           |
| `.dark:outline/o` | `outline-color: color-mix( in oklab, var(--dark-outline) var(--dark-outline-o, 100%), transparent )` | `--dark-outline`, `--dark-outline-o` |



## Outline Color

### Utilities (value-driven)

| Selector        | Style                                | Variables Required |
| --------------- | ------------------------------------ | ------------------ |
| `.outline`      | `outline-color: var(--outline)`      | `--outline`        |
| `.dark:outline` | `outline-color: var(--dark-outline)` | `--dark-outline`   |



## Outline Offset

### Utilities (value-driven)

| Selector          | Style                                   | Variables Required |
| ----------------- | --------------------------------------- | ------------------ |
| `.outline-offset` | `outline-offset: var(--outline-offset)` | `--outline-offset` |



## Outline Style

### Utilities (absolute values)

| Selector          | Style                                                   |
| ----------------- | ------------------------------------------------------- |
| `.outline-none`   | `outline: none`                                         |
| `.outline-hidden` | `outline: 2px solid transparent`, `outline-offset: 2px` |
| `.outline`        | `outline-style: solid`                                  |
| `.outline-dashed` | `outline-style: dashed`                                 |
| `.outline-dotted` | `outline-style: dotted`                                 |
| `.outline-double` | `outline-style: double`                                 |



## Outline Width

### Utilities (value-driven)

| Selector     | Style                             | Variables Required |
| ------------ | --------------------------------- | ------------------ |
| `.outline-w` | `outline-width: var(--outline-w)` | `--outline-w`      |



## Overflow Wrap

### Utilities (absolute values)

| Selector           | Style                       |
| ------------------ | --------------------------- |
| `.wrap-break-word` | `overflow-wrap: break-word` |
| `.wrap-anywhere`   | `overflow-wrap: anywhere`   |
| `.wrap-normal`     | `overflow-wrap: normal`     |



## Overflow

### Utilities (absolute values)

| Selector              | Style                 |
| --------------------- | --------------------- |
| `.overflow-auto`      | `overflow: auto`      |
| `.overflow-hidden`    | `overflow: hidden`    |
| `.overflow-clip`      | `overflow: clip`      |
| `.overflow-visible`   | `overflow: visible`   |
| `.overflow-scroll`    | `overflow: scroll`    |
| `.overflow-x-auto`    | `overflow-x: auto`    |
| `.overflow-y-auto`    | `overflow-y: auto`    |
| `.overflow-x-hidden`  | `overflow-x: hidden`  |
| `.overflow-y-hidden`  | `overflow-y: hidden`  |
| `.overflow-x-clip`    | `overflow-x: clip`    |
| `.overflow-y-clip`    | `overflow-y: clip`    |
| `.overflow-x-visible` | `overflow-x: visible` |
| `.overflow-y-visible` | `overflow-y: visible` |
| `.overflow-x-scroll`  | `overflow-x: scroll`  |
| `.overflow-y-scroll`  | `overflow-y: scroll`  |



## Overscroll Behavior

### Utilities (absolute values)

| Selector                | Style                            |
| ----------------------- | -------------------------------- |
| `.overscroll-auto`      | `overscroll-behavior: auto`      |
| `.overscroll-contain`   | `overscroll-behavior: contain`   |
| `.overscroll-none`      | `overscroll-behavior: none`      |
| `.overscroll-y-auto`    | `overscroll-behavior-y: auto`    |
| `.overscroll-y-contain` | `overscroll-behavior-y: contain` |
| `.overscroll-y-none`    | `overscroll-behavior-y: none`    |
| `.overscroll-x-auto`    | `overscroll-behavior-x: auto`    |
| `.overscroll-x-contain` | `overscroll-behavior-x: contain` |
| `.overscroll-x-none`    | `overscroll-behavior-x: none`    |



## Padding

### Utilities (value-driven)

| Selector | Style                                                    | Variables Required |
| -------- | -------------------------------------------------------- | ------------------ |
| `.p`     | `padding: calc(var(--spacing) * var(--p))`               | `--p`              |
| `.[p]`   | `padding: var(--p)`                                      | `--p`              |
| `.pt`    | `padding-top: calc(var(--spacing) * var(--pt))`          | `--pt`             |
| `.pb`    | `padding-bottom: calc(var(--spacing) * var(--pb))`       | `--pb`             |
| `.pl`    | `padding-left: calc(var(--spacing) * var(--pl))`         | `--pl`             |
| `.pr`    | `padding-right: calc(var(--spacing) * var(--pr))`        | `--pr`             |
| `.ps`    | `padding-inline-start: calc(var(--spacing) * var(--ps))` | `--ps`             |
| `.pe`    | `padding-inline-end: calc(var(--spacing) * var(--pe))`   | `--pe`             |
| `.[pt]`  | `padding-top: var(--pt)`                                 | `--pt`             |
| `.[pb]`  | `padding-bottom: var(--pb)`                              | `--pb`             |
| `.[pl]`  | `padding-left: var(--pl)`                                | `--pl`             |
| `.[pr]`  | `padding-right: var(--pr)`                               | `--pr`             |
| `.[ps]`  | `padding-inline-start: var(--ps)`                        | `--ps`             |
| `.[pe]`  | `padding-inline-end: var(--pe)`                          | `--pe`             |
| `.px`    | `padding-inline: calc(var(--spacing) * var(--px))`       | `--px`             |
| `.py`    | `padding-block: calc(var(--spacing) * var(--py))`        | `--py`             |
| `.[px]`  | `padding-inline: var(--px)`                              | `--px`             |
| `.[py]`  | `padding-block: var(--py)`                               | `--py`             |



## Perspective Origin

### Utilities (value-driven)

| Selector              | Style                                           | Variables Required     |
| --------------------- | ----------------------------------------------- | ---------------------- |
| `.perspective-origin` | `perspective-origin: var(--perspective-origin)` | `--perspective-origin` |



## Perspective

### Utilities (value-driven)

| Selector       | Style                             | Variables Required |
| -------------- | --------------------------------- | ------------------ |
| `.perspective` | `perspective: var(--perspective)` | `--perspective`    |

### Utilities (absolute values)

| Selector                | Style                                      |
| ----------------------- | ------------------------------------------ |
| `.perspective-dramatic` | `perspective: var(--perspective-dramatic)` |
| `.perspective-near`     | `perspective: var(--perspective-near)`     |
| `.perspective-normal`   | `perspective: var(--perspective-normal)`   |
| `.perspective-midrange` | `perspective: var(--perspective-midrange)` |
| `.perspective-distant`  | `perspective: var(--perspective-distant)`  |
| `.perspective-none`     | `perspective: none`                        |



## Place Content

### Utilities (absolute values)

| Selector                     | Style                          |
| ---------------------------- | ------------------------------ |
| `.place-content-center`      | `place-content: center`        |
| `.place-content-start`       | `place-content: start`         |
| `.place-content-end`         | `place-content: end`           |
| `.place-content-between`     | `place-content: space-between` |
| `.place-content-around`      | `place-content: space-around`  |
| `.place-content-evenly`      | `place-content: space-evenly`  |
| `.place-content-baseline`    | `place-content: baseline`      |
| `.place-content-stretch`     | `place-content: stretch`       |
| `.place-content-end-safe`    | `place-content: safe end`      |
| `.place-content-center-safe` | `place-content: safe center`   |



## Place Items

### Utilities (absolute values)

| Selector                   | Style                      |
| -------------------------- | -------------------------- |
| `.place-items-start`       | `place-items: start`       |
| `.place-items-end`         | `place-items: end`         |
| `.place-items-center`      | `place-items: center`      |
| `.place-items-baseline`    | `place-items: baseline`    |
| `.place-items-stretch`     | `place-items: stretch`     |
| `.place-items-end-safe`    | `place-items: safe end`    |
| `.place-items-center-safe` | `place-items: safe center` |



## Place Self

### Utilities (absolute values)

| Selector                  | Style                     |
| ------------------------- | ------------------------- |
| `.place-self-auto`        | `place-self: auto`        |
| `.place-self-start`       | `place-self: start`       |
| `.place-self-end`         | `place-self: end`         |
| `.place-self-center`      | `place-self: center`      |
| `.place-self-stretch`     | `place-self: stretch`     |
| `.place-self-end-safe`    | `place-self: safe end`    |
| `.place-self-center-safe` | `place-self: safe center` |



## Pointer Events

### Utilities (absolute values)

| Selector               | Style                  |
| ---------------------- | ---------------------- |
| `.pointer-events-auto` | `pointer-events: auto` |
| `.pointer-events-none` | `pointer-events: none` |



## Position

### Utilities (absolute values)

| Selector    | Style                |
| ----------- | -------------------- |
| `.static`   | `position: static`   |
| `.fixed`    | `position: fixed`    |
| `.absolute` | `position: absolute` |
| `.relative` | `position: relative` |
| `.sticky`   | `position: sticky`   |



## Resize

### Utilities (absolute values)

| Selector       | Style                |
| -------------- | -------------------- |
| `.resize-none` | `resize: none`       |
| `.resize`      | `resize: both`       |
| `.resize-y`    | `resize: vertical`   |
| `.resize-x`    | `resize: horizontal` |



## Right

### Utilities (value-driven)

| Selector   | Style                                        | Variables Required |
| ---------- | -------------------------------------------- | ------------------ |
| `.right`   | `right: calc(var(--spacing) * var(--right))` | `--right`          |
| `.[right]` | `right: var(--right)`                        | `--right`          |



## Ring Opacity

### Utilities (value-driven)

| Selector       | Style                                                                                                                                                                                                                                                                                                                                                                                             | Variables Required             |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| `.ring/o`      | `--tw-ring-width: 1px`, `--tw-ring-color: color-mix( in oklab, var(--ring) var(--ring-o, 100%), transparent )`, `--tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(var(--tw-ring-width) + var(--tw-ring-offset-width)) var(--tw-ring-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`           | `--ring`, `--ring-o`           |
| `.dark:ring/o` | `--tw-ring-width: 1px`, `--tw-ring-color: color-mix( in oklab, var(--dark-ring) var(--dark-ring-o, 100%), transparent )`, `--tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(var(--tw-ring-width) + var(--tw-ring-offset-width)) var(--tw-ring-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)` | `--dark-ring`, `--dark-ring-o` |



## Ring Width

### Utilities (value-driven)

| Selector  | Style                            | Variables Required |
| --------- | -------------------------------- | ------------------ |
| `.ring-w` | `--tw-ring-width: var(--ring-w)` | `--ring-w`         |



## Ring

### Utilities (value-driven)

| Selector     | Style                                                                                                                                                                                                                                                                                                                                              | Variables Required |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.ring`      | `--tw-ring-width: 1px`, `--tw-ring-color: var(--ring, currentColor)`, `--tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(var(--tw-ring-width) + var(--tw-ring-offset-width)) var(--tw-ring-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`      | `--ring`           |
| `.dark:ring` | `--tw-ring-width: 1px`, `--tw-ring-color: var(--dark-ring, currentColor)`, `--tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(var(--tw-ring-width) + var(--tw-ring-offset-width)) var(--tw-ring-color)`, `box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)` | `--dark-ring`      |



## Rotate

### Utilities (value-driven)

| Selector    | Style                                                                                                                                              | Variables Required |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.rotate`   | `rotate: var(--rotate)`                                                                                                                            | `--rotate`         |
| `.rotate-x` | `--tw-rotate-x: rotateX(--rotate-x)`, `transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)` | -                  |
| `.rotate-y` | `--tw-rotate-y: rotateY(--rotate-y)`, `transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)` | -                  |
| `.rotate-z` | `--tw-rotate-z: rotateZ(--rotate-z)`, `transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)` | -                  |

### Utilities (absolute values)

| Selector       | Style             |
| -------------- | ----------------- |
| `.rotate-none` | `transform: none` |



## Saturate

### Utilities (value-driven)

| Selector    | Style                          | Variables Required |
| ----------- | ------------------------------ | ------------------ |
| `.saturate` | `filter: saturate(--saturate)` | -                  |



## Scale

### Utilities (value-driven)

| Selector   | Style                                                                                                                                  | Variables Required |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.scale`   | `--tw-scale-x: var(--scale)`, `--tw-scale-y: var(--scale)`, `--tw-scale-z: var(--scale)`, `scale: var(--tw-scale-x) var(--tw-scale-y)` | `--scale`          |
| `.scale-x` | `--tw-scale-x: var(--scale-x)`, `scale: var(--tw-scale-x) var(--tw-scale-y)`                                                           | `--scale-x`        |
| `.scale-y` | `--tw-scale-y: var(--scale-y)`, `scale: var(--tw-scale-x) var(--tw-scale-y)`                                                           | `--scale-y`        |
| `.scale-z` | `--tw-scale-z: var(--scale-z)`, `scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)`                                         | `--scale-z`        |

### Utilities (absolute values)

| Selector      | Style                                                          |
| ------------- | -------------------------------------------------------------- |
| `.scale-none` | `transform: none`                                              |
| `.scale-3d`   | `scale: var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)` |



## Scroll Behavior

### Utilities (absolute values)

| Selector         | Style                     |
| ---------------- | ------------------------- |
| `.scroll-auto`   | `scroll-behavior: auto`   |
| `.scroll-smooth` | `scroll-behavior: smooth` |



## Scroll Margin

### Utilities (value-driven)

| Selector       | Style                                                                 | Variables Required |
| -------------- | --------------------------------------------------------------------- | ------------------ |
| `.scroll-m`    | `scroll-margin: calc(var(--spacing) * var(--scroll-m))`               | `--scroll-m`       |
| `.[scroll-m]`  | `scroll-margin: var(--scroll-m)`                                      | `--scroll-m`       |
| `.scroll-mt`   | `scroll-margin-top: calc(var(--spacing) * var(--scroll-mt))`          | `--scroll-mt`      |
| `.[scroll-mt]` | `scroll-margin-top: var(--scroll-mt)`                                 | `--scroll-mt`      |
| `.scroll-mb`   | `scroll-margin-bottom: calc(var(--spacing) * var(--scroll-mb))`       | `--scroll-mb`      |
| `.[scroll-mb]` | `scroll-margin-bottom: var(--scroll-mb)`                              | `--scroll-mb`      |
| `.scroll-ml`   | `scroll-margin-left: calc(var(--spacing) * var(--scroll-ml))`         | `--scroll-ml`      |
| `.[scroll-ml]` | `scroll-margin-left: var(--scroll-ml)`                                | `--scroll-ml`      |
| `.scroll-mr`   | `scroll-margin-right: calc(var(--spacing) * var(--scroll-mr))`        | `--scroll-mr`      |
| `.[scroll-mr]` | `scroll-margin-right: var(--scroll-mr)`                               | `--scroll-mr`      |
| `.scroll-ms`   | `scroll-margin-inline-start: calc(var(--spacing) * var(--scroll-ms))` | `--scroll-ms`      |
| `.[scroll-ms]` | `scroll-margin-inline-start: var(--scroll-ms)`                        | `--scroll-ms`      |
| `.scroll-me`   | `scroll-margin-inline-end: calc(var(--spacing) * var(--scroll-me))`   | `--scroll-me`      |
| `.[scroll-me]` | `scroll-margin-inline-end: var(--scroll-me)`                          | `--scroll-me`      |
| `.scroll-mx`   | `scroll-margin-inline: calc(var(--spacing) * var(--scroll-mx))`       | `--scroll-mx`      |
| `.[scroll-mx]` | `scroll-margin-inline: var(--scroll-mx)`                              | `--scroll-mx`      |
| `.scroll-my`   | `scroll-margin-block: calc(var(--spacing) * var(--scroll-my))`        | `--scroll-my`      |
| `.[scroll-my]` | `scroll-margin-block: var(--scroll-my)`                               | `--scroll-my`      |



## Scroll Padding

### Utilities (value-driven)

| Selector       | Style                                                                  | Variables Required |
| -------------- | ---------------------------------------------------------------------- | ------------------ |
| `.scroll-p`    | `scroll-padding: calc(var(--spacing) * var(--scroll-p))`               | `--scroll-p`       |
| `.[scroll-p]`  | `scroll-padding: var(--scroll-p)`                                      | `--scroll-p`       |
| `.scroll-pt`   | `scroll-padding-top: calc(var(--spacing) * var(--scroll-pt))`          | `--scroll-pt`      |
| `.scroll-pb`   | `scroll-padding-bottom: calc(var(--spacing) * var(--scroll-pb))`       | `--scroll-pb`      |
| `.scroll-pl`   | `scroll-padding-left: calc(var(--spacing) * var(--scroll-pl))`         | `--scroll-pl`      |
| `.scroll-pr`   | `scroll-padding-right: calc(var(--spacing) * var(--scroll-pr))`        | `--scroll-pr`      |
| `.scroll-ps`   | `scroll-padding-inline-start: calc(var(--spacing) * var(--scroll-ps))` | `--scroll-ps`      |
| `.scroll-pe`   | `scroll-padding-inline-end: calc(var(--spacing) * var(--scroll-pe))`   | `--scroll-pe`      |
| `.[scroll-pt]` | `scroll-padding-top: var(--scroll-pt)`                                 | `--scroll-pt`      |
| `.[scroll-pb]` | `scroll-padding-bottom: var(--scroll-pb)`                              | `--scroll-pb`      |
| `.[scroll-pl]` | `scroll-padding-left: var(--scroll-pl)`                                | `--scroll-pl`      |
| `.[scroll-pr]` | `scroll-padding-right: var(--scroll-pr)`                               | `--scroll-pr`      |
| `.[scroll-ps]` | `scroll-padding-inline-start: var(--scroll-ps)`                        | `--scroll-ps`      |
| `.[scroll-pe]` | `scroll-padding-inline-end: var(--scroll-pe)`                          | `--scroll-pe`      |
| `.scroll-px`   | `scroll-padding-inline: calc(var(--spacing) * var(--scroll-px))`       | `--scroll-px`      |
| `.scroll-py`   | `scroll-padding-block: calc(var(--spacing) * var(--scroll-py))`        | `--scroll-py`      |
| `.[scroll-px]` | `scroll-padding-inline: var(--scroll-px)`                              | `--scroll-px`      |
| `.[scroll-py]` | `scroll-padding-block: var(--scroll-py)`                               | `--scroll-py`      |



## Scroll Snap Align

### Utilities (absolute values)

| Selector           | Style                       |
| ------------------ | --------------------------- |
| `.snap-start`      | `scroll-snap-align: start`  |
| `.snap-end`        | `scroll-snap-align: end`    |
| `.snap-center`     | `scroll-snap-align: center` |
| `.snap-align-none` | `scroll-snap-align: none`   |



## Scroll Snap Stop

### Utilities (absolute values)

| Selector       | Style                      |
| -------------- | -------------------------- |
| `.snap-normal` | `scroll-snap-stop: normal` |
| `.snap-always` | `scroll-snap-stop: always` |



## Scroll Snap Type

### Utilities (absolute values)

| Selector          | Style                                                     |
| ----------------- | --------------------------------------------------------- |
| `.snap-none`      | `scroll-snap-type: none`                                  |
| `.snap-x`         | `scroll-snap-type: x var(--tw-scroll-snap-strictness)`    |
| `.snap-y`         | `scroll-snap-type: y var(--tw-scroll-snap-strictness)`    |
| `.snap-both`      | `scroll-snap-type: both var(--tw-scroll-snap-strictness)` |
| `.snap-mandatory` | `--tw-scroll-snap-strictness: mandatory`                  |
| `.snap-proximity` | `--tw-scroll-snap-strictness: proximity`                  |



## Sepia

### Utilities (value-driven)

| Selector | Style                    | Variables Required |
| -------- | ------------------------ | ------------------ |
| `.sepia` | `filter: sepia(--sepia)` | -                  |



## Size

### Utilities (value-driven)

| Selector  | Style                                                                                     | Variables Required |
| --------- | ----------------------------------------------------------------------------------------- | ------------------ |
| `.size`   | `width: calc(var(--spacing) * var(--size))`, `height: calc(var(--spacing) * var(--size))` | `--size`           |
| `.[size]` | `width: var(--size)`, `height: var(--size)`                                               | `--size`           |

### Utilities (absolute values)

| Selector     | Style                                       |
| ------------ | ------------------------------------------- |
| `.size-auto` | `width: auto`, `height: auto`               |
| `.size-full` | `width: 100%`, `height: 100%`               |
| `.size-dvw`  | `width: 100dvw`, `height: 100dvw`           |
| `.size-dvh`  | `width: 100dvh`, `height: 100dvh`           |
| `.size-lvw`  | `width: 100lvw`, `height: 100lvw`           |
| `.size-lvh`  | `width: 100lvh`, `height: 100lvh`           |
| `.size-svw`  | `width: 100svw`, `height: 100svw`           |
| `.size-svh`  | `width: 100svh`, `height: 100svh`           |
| `.size-min`  | `width: min-content`, `height: min-content` |
| `.size-max`  | `width: max-content`, `height: max-content` |
| `.size-fit`  | `width: fit-content`, `height: fit-content` |



## Skew

### Utilities (value-driven)

| Selector  | Style                                                                                                                                                                              | Variables Required |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.skew`   | `--tw-skew-x: skewX(var(--skew))`, `--tw-skew-y: skewY(var(--skew))`, `transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)` | `--skew`           |
| `.skew-x` | `--tw-skew-x: skewX(var(--skew-x))`, `transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)`                                  | `--skew-x`         |
| `.skew-y` | `--tw-skew-y: skewY(var(--skew-y))`, `transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)`                                  | `--skew-y`         |



## Space

### Utilities (value-driven)

| Selector                         | Style                                                                                                                                                                                      | Variables Required |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `.space-x > :not(:last-child)`   | `margin-inline-start: calc( var(--spacing) * var(--space-x) * var(--tw-space-x-reverse) )`, `margin-inline-end: calc( var(--spacing) * var(--space-x) * (1 - var(--tw-space-x-reverse)) )` | `--space-x`        |
| `.[space-x] > :not(:last-child)` | `margin-inline-start: calc(var(--space-x) * var(--tw-space-x-reverse))`, `margin-inline-end: calc(var(--space-x) * (1 - var(--tw-space-x-reverse)))`                                       | `--space-x`        |
| `.space-y > :not(:last-child)`   | `margin-block-start: calc( var(--spacing) * var(--space-y) * var(--tw-space-y-reverse) )`, `margin-block-end: calc( var(--spacing) * var(--space-y) * (1 - var(--tw-space-y-reverse)) )`   | `--space-y`        |
| `.[space-y] > :not(:last-child)` | `margin-block-start: calc(var(--space-y) * var(--tw-space-y-reverse))`, `margin-block-end: calc(var(--space-y) * (1 - var(--tw-space-y-reverse)))`                                         | `--space-y`        |

### Utilities (absolute values)

| Selector                                         | Style                     |
| ------------------------------------------------ | ------------------------- |
| `.space-x-reverse :where(& > :not(:last-child))` | `--tw-space-x-reverse: 1` |
| `.space-y-reverse :where(& > :not(:last-child))` | `--tw-space-y-reverse: 1` |



## Stroke Opacity

### Utilities (value-driven)

| Selector         | Style                                                                                       | Variables Required                 |
| ---------------- | ------------------------------------------------------------------------------------------- | ---------------------------------- |
| `.stroke/o`      | `stroke: color-mix( in oklab, var(--stroke) var(--stroke-o, 100%), transparent )`           | `--stroke`, `--stroke-o`           |
| `.dark:stroke/o` | `stroke: color-mix( in oklab, var(--dark-stroke) var(--dark-stroke-o, 100%), transparent )` | `--dark-stroke`, `--dark-stroke-o` |



## Stroke Width

### Utilities (value-driven)

| Selector    | Style                           | Variables Required |
| ----------- | ------------------------------- | ------------------ |
| `.stroke-w` | `stroke-width: var(--stroke-w)` | `--stroke-w`       |



## Stroke

### Utilities (value-driven)

| Selector       | Style                        | Variables Required |
| -------------- | ---------------------------- | ------------------ |
| `.stroke`      | `stroke: var(--stroke)`      | `--stroke`         |
| `.dark:stroke` | `stroke: var(--dark-stroke)` | `--dark-stroke`    |



## Table Layout

### Utilities (absolute values)

| Selector       | Style                 |
| -------------- | --------------------- |
| `.table-auto`  | `table-layout: auto`  |
| `.table-fixed` | `table-layout: fixed` |



## Text Align

### Utilities (absolute values)

| Selector        | Style                 |
| --------------- | --------------------- |
| `.text-left`    | `text-align: left`    |
| `.text-center`  | `text-align: center`  |
| `.text-right`   | `text-align: right`   |
| `.text-justify` | `text-align: justify` |
| `.text-start`   | `text-align: start`   |
| `.text-end`     | `text-align: end`     |



## Text Decoration Color Opacity

### Utilities (value-driven)

| Selector             | Style                                                                                                              | Variables Required                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `.decoration/o`      | `text-decoration-color: color-mix( in oklab, var(--decoration) var(--decoration-o, 100%), transparent )`           | `--decoration`, `--decoration-o`           |
| `.dark:decoration/o` | `text-decoration-color: color-mix( in oklab, var(--dark-decoration) var(--dark-decoration-o, 100%), transparent )` | `--dark-decoration`, `--dark-decoration-o` |



## Text Decoration Color

### Utilities (value-driven)

| Selector           | Style                                           | Variables Required  |
| ------------------ | ----------------------------------------------- | ------------------- |
| `.decoration`      | `text-decoration-color: var(--decoration)`      | `--decoration`      |
| `.dark:decoration` | `text-decoration-color: var(--dark-decoration)` | `--dark-decoration` |

### Utilities (absolute values)

| Selector                  | Style                                 |
| ------------------------- | ------------------------------------- |
| `.decoration-inherit`     | `text-decoration-color: inherit`      |
| `.decoration-current`     | `text-decoration-color: currentColor` |
| `.decoration-transparent` | `text-decoration-color: transparent`  |



## Text Decoration Line

### Utilities (absolute values)

| Selector        | Style                                |
| --------------- | ------------------------------------ |
| `.underline`    | `text-decoration-line: underline`    |
| `.overline`     | `text-decoration-line: overline`     |
| `.line-through` | `text-decoration-line: line-through` |
| `.no-underline` | `text-decoration-line: none`         |



## Text Decoration Style

### Utilities (absolute values)

| Selector             | Style                           |
| -------------------- | ------------------------------- |
| `.decoration-solid`  | `text-decoration-style: solid`  |
| `.decoration-double` | `text-decoration-style: double` |
| `.decoration-dotted` | `text-decoration-style: dotted` |
| `.decoration-dashed` | `text-decoration-style: dashed` |
| `.decoration-wavy`   | `text-decoration-style: wavy`   |



## Text Decoration Thickness

### Utilities (value-driven)

| Selector                | Style                                                    | Variables Required       |
| ----------------------- | -------------------------------------------------------- | ------------------------ |
| `.decoration-thickness` | `text-decoration-thickness: var(--decoration-thickness)` | `--decoration-thickness` |

### Utilities (absolute values)

| Selector                | Style                                  |
| ----------------------- | -------------------------------------- |
| `.decoration-from-font` | `text-decoration-thickness: from-font` |
| `.decoration-auto`      | `text-decoration-thickness: auto`      |



## Text Indent

### Utilities (value-driven)

| Selector    | Style                                               | Variables Required |
| ----------- | --------------------------------------------------- | ------------------ |
| `.indent`   | `text-indent: calc(var(--spacing) * var(--indent))` | `--indent`         |
| `.[indent]` | `text-indent: var(--indent)`                        | `--indent`         |



## Text Overflow

### Utilities (absolute values)

| Selector         | Style                                                                |
| ---------------- | -------------------------------------------------------------------- |
| `.truncate`      | `overflow: hidden`, `text-overflow: ellipsis`, `white-space: nowrap` |
| `.text-ellipsis` | `text-overflow: ellipsis`                                            |
| `.text-clip`     | `text-overflow: clip`                                                |



## Text Transform

### Utilities (absolute values)

| Selector       | Style                        |
| -------------- | ---------------------------- |
| `.uppercase`   | `text-transform: uppercase`  |
| `.lowercase`   | `text-transform: lowercase`  |
| `.capitalize`  | `text-transform: capitalize` |
| `.normal-case` | `text-transform: none`       |



## Text Underline Offset

### Utilities (value-driven)

| Selector            | Style                                            | Variables Required   |
| ------------------- | ------------------------------------------------ | -------------------- |
| `.underline-offset` | `text-underline-offset: var(--underline-offset)` | `--underline-offset` |

### Utilities (absolute values)

| Selector                 | Style                         |
| ------------------------ | ----------------------------- |
| `.underline-offset-auto` | `text-underline-offset: auto` |



## Text Wrap

### Utilities (absolute values)

| Selector        | Style                |
| --------------- | -------------------- |
| `.text-wrap`    | `text-wrap: wrap`    |
| `.text-nowrap`  | `text-wrap: nowrap`  |
| `.text-balance` | `text-wrap: balance` |
| `.text-pretty`  | `text-wrap: pretty`  |



## Top

### Utilities (value-driven)

| Selector | Style                                    | Variables Required |
| -------- | ---------------------------------------- | ------------------ |
| `.top`   | `top: calc(var(--spacing) * var(--top))` | `--top`            |
| `.[top]` | `top: var(--top)`                        | `--top`            |



## Touch Action

### Utilities (absolute values)

| Selector              | Style                        |
| --------------------- | ---------------------------- |
| `.touch-auto`         | `touch-action: auto`         |
| `.touch-none`         | `touch-action: none`         |
| `.touch-pan-x`        | `touch-action: pan-x`        |
| `.touch-pan-left`     | `touch-action: pan-left`     |
| `.touch-pan-right`    | `touch-action: pan-right`    |
| `.touch-pan-y`        | `touch-action: pan-y`        |
| `.touch-pan-up`       | `touch-action: pan-up`       |
| `.touch-pan-down`     | `touch-action: pan-down`     |
| `.touch-pinch-zoom`   | `touch-action: pinch-zoom`   |
| `.touch-manipulation` | `touch-action: manipulation` |



## Transform Origin

### Utilities (value-driven)

| Selector  | Style                             | Variables Required |
| --------- | --------------------------------- | ------------------ |
| `.origin` | `transform-origin: var(--origin)` | `--origin`         |



## Transform Style

### Utilities (absolute values)

| Selector          | Style                          |
| ----------------- | ------------------------------ |
| `.transform-3d`   | `transform-style: preserve-3d` |
| `.transform-flat` | `transform-style: flat`        |



## Transform

### Utilities (value-driven)

| Selector     | Style                         | Variables Required |
| ------------ | ----------------------------- | ------------------ |
| `.transform` | `transform: var(--transform)` | `--transform`      |

### Utilities (absolute values)

| Selector          | Style                                                                                                                      |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `.transform-none` | `transform: none`                                                                                                          |
| `.transform-gpu`  | `transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)` |
| `.transform-cpu`  | `transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)`               |



## Transition Behavior

### Utilities (absolute values)

| Selector               | Style                                 |
| ---------------------- | ------------------------------------- |
| `.transition-normal`   | `transition-behavior: normal`         |
| `.transition-discrete` | `transition-behavior: allow-discrete` |



## Transition Delay

### Utilities (value-driven)

| Selector | Style                            | Variables Required |
| -------- | -------------------------------- | ------------------ |
| `.delay` | `transition-delay: var(--delay)` | `--delay`          |



## Transition Duration

### Utilities (value-driven)

| Selector    | Style                                  | Variables Required |
| ----------- | -------------------------------------- | ------------------ |
| `.duration` | `transition-duration: var(--duration)` | `--duration`       |

### Utilities (absolute values)

| Selector            | Style                          |
| ------------------- | ------------------------------ |
| `.duration-initial` | `transition-duration: initial` |



## Transition Property

### Utilities (value-driven)

| Selector      | Style                                                                                                                                                                                                            | Variables Required                              |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| `.transition` | `transition-property: var(--transition, var(--default-transition-property))`, `transition-timing-function: var(--default-transition-timing-function)`, `transition-duration: var(--default-transition-duration)` | `--default-transition-property`, `--transition` |

### Utilities (absolute values)

| Selector                | Style                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.transition-all`       | `--default-transition-property: all`                                                                                                                                                |
| `.transition-colors`    | `--default-transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to` |
| `.transition-opacity`   | `--default-transition-property: opacity`                                                                                                                                            |
| `.transition-shadow`    | `--default-transition-property: box-shadow`                                                                                                                                         |
| `.transition-transform` | `--default-transition-property: transform, translate, scale, rotate`                                                                                                                |
| `.transition-none`      | `transition-property: none`                                                                                                                                                         |



## Transition Timing Function

### Utilities (value-driven)

| Selector | Style                                     | Variables Required |
| -------- | ----------------------------------------- | ------------------ |
| `.ease`  | `transition-timing-function: var(--ease)` | `--ease`           |

### Utilities (absolute values)

| Selector        | Style                                            |
| --------------- | ------------------------------------------------ |
| `.ease-linear`  | `transition-timing-function: linear`             |
| `.ease-in`      | `transition-timing-function: var(--ease-in)`     |
| `.ease-out`     | `transition-timing-function: var(--ease-out)`    |
| `.ease-in-out`  | `transition-timing-function: var(--ease-in-out)` |
| `.ease-initial` | `transition-timing-function: initial`            |



## Translate

### Utilities (value-driven)

| Selector         | Style                                                                                                                                                                              | Variables Required |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `.translate`     | `--tw-translate-x: calc(var(--spacing) * var(--translate))`, `--tw-translate-y: calc(var(--spacing) * var(--translate))`, `translate: var(--tw-translate-x) var(--tw-translate-y)` | `--translate`      |
| `.[translate]`   | `--tw-translate-x: var(--translate)`, `--tw-translate-y: var(--translate)`, `translate: var(--tw-translate-x) var(--tw-translate-y)`                                               | `--translate`      |
| `.translate-x`   | `--tw-translate-x: calc(var(--spacing) * var(--translate-x))`, `translate: var(--tw-translate-x) var(--tw-translate-y)`                                                            | `--translate-x`    |
| `.[translate-x]` | `--tw-translate-x: var(--translate-x)`, `translate: var(--tw-translate-x) var(--tw-translate-y)`                                                                                   | `--translate-x`    |
| `.translate-y`   | `--tw-translate-y: calc(var(--spacing) * var(--translate-y))`, `translate: var(--tw-translate-x) var(--tw-translate-y)`                                                            | `--translate-y`    |
| `.[translate-y]` | `--tw-translate-y: var(--translate-y)`, `translate: var(--tw-translate-x) var(--tw-translate-y)`                                                                                   | `--translate-y`    |
| `.translate-z`   | `--tw-translate-z: calc(var(--spacing) * var(--translate-z))`, `translate: var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)`                                      | `--translate-z`    |
| `.[translate-z]` | `--tw-translate-z: var(--translate-z)`, `translate: var(--tw-translate-x) var(--tw-translate-y) var(--tw-translate-z)`                                                             | `--translate-z`    |

### Utilities (absolute values)

| Selector          | Style             |
| ----------------- | ----------------- |
| `.translate-none` | `translate: none` |



## User Select

### Utilities (absolute values)

| Selector       | Style               |
| -------------- | ------------------- |
| `.select-none` | `user-select: none` |
| `.select-text` | `user-select: text` |
| `.select-all`  | `user-select: all`  |
| `.select-auto` | `user-select: auto` |



## Vertical Align

### Utilities (value-driven)

| Selector | Style                          | Variables Required |
| -------- | ------------------------------ | ------------------ |
| `.align` | `vertical-align: var(--align)` | `--align`          |

### Utilities (absolute values)

| Selector             | Style                         |
| -------------------- | ----------------------------- |
| `.align-baseline`    | `vertical-align: baseline`    |
| `.align-top`         | `vertical-align: top`         |
| `.align-middle`      | `vertical-align: middle`      |
| `.align-bottom`      | `vertical-align: bottom`      |
| `.align-text-top`    | `vertical-align: text-top`    |
| `.align-text-bottom` | `vertical-align: text-bottom` |
| `.align-sub`         | `vertical-align: sub`         |
| `.align-super`       | `vertical-align: super`       |



## Visibility

### Utilities (absolute values)

| Selector     | Style                  |
| ------------ | ---------------------- |
| `.visible`   | `visibility: visible`  |
| `.invisible` | `visibility: hidden`   |
| `.collapse`  | `visibility: collapse` |



## White Space

### Utilities (absolute values)

| Selector                   | Style                       |
| -------------------------- | --------------------------- |
| `.whitespace-normal`       | `white-space: normal`       |
| `.whitespace-nowrap`       | `white-space: nowrap`       |
| `.whitespace-pre`          | `white-space: pre`          |
| `.whitespace-pre-line`     | `white-space: pre-line`     |
| `.whitespace-pre-wrap`     | `white-space: pre-wrap`     |
| `.whitespace-break-spaces` | `white-space: break-spaces` |



## Width

### Utilities (value-driven)

| Selector | Style                                    | Variables Required |
| -------- | ---------------------------------------- | ------------------ |
| `.w`     | `width: calc(var(--spacing) * var(--w))` | `--w`              |
| `.[w]`   | `width: var(--w)`                        | `--w`              |

### Utilities (absolute values)

| Selector    | Style                         |
| ----------- | ----------------------------- |
| `.w-3xs`    | `width: var(--container-3xs)` |
| `.w-2xs`    | `width: var(--container-2xs)` |
| `.w-xs`     | `width: var(--container-xs)`  |
| `.w-sm`     | `width: var(--container-sm)`  |
| `.w-md`     | `width: var(--container-md)`  |
| `.w-lg`     | `width: var(--container-lg)`  |
| `.w-xl`     | `width: var(--container-xl)`  |
| `.w-2xl`    | `width: var(--container-2xl)` |
| `.w-3xl`    | `width: var(--container-3xl)` |
| `.w-4xl`    | `width: var(--container-4xl)` |
| `.w-5xl`    | `width: var(--container-5xl)` |
| `.w-6xl`    | `width: var(--container-6xl)` |
| `.w-7xl`    | `width: var(--container-7xl)` |
| `.w-auto`   | `width: auto`                 |
| `.w-full`   | `width: 100%`                 |
| `.w-screen` | `width: 100vw`                |
| `.w-dvw`    | `width: 100dvw`               |
| `.w-dvh`    | `width: 100dvh`               |
| `.w-lvw`    | `width: 100lvw`               |
| `.w-lvh`    | `width: 100lvh`               |
| `.w-svw`    | `width: 100svw`               |
| `.w-svh`    | `width: 100svh`               |
| `.w-min`    | `width: min-content`          |
| `.w-max`    | `width: max-content`          |
| `.w-fit`    | `width: fit-content`          |



## Will Change

### Utilities (value-driven)

| Selector       | Style                             | Variables Required |
| -------------- | --------------------------------- | ------------------ |
| `.will-change` | `will-change: var(--will-change)` | `--will-change`    |

### Utilities (absolute values)

| Selector                 | Style                          |
| ------------------------ | ------------------------------ |
| `.will-change-auto`      | `will-change: auto`            |
| `.will-change-scroll`    | `will-change: scroll-position` |
| `.will-change-contents`  | `will-change: contents`        |
| `.will-change-transform` | `will-change: transform`       |



## Word Break

### Utilities (absolute values)

| Selector        | Style                                         |
| --------------- | --------------------------------------------- |
| `.break-normal` | `overflow-wrap: normal`, `word-break: normal` |
| `.break-words`  | `overflow-wrap: break-word`                   |
| `.break-all`    | `word-break: break-all`                       |
| `.break-keep`   | `word-break: keep-all`                        |



## Z Index

### Utilities (value-driven)

| Selector | Style               | Variables Required |
| -------- | ------------------- | ------------------ |
| `.z`     | `z-index: var(--z)` | `--z`              |

### Utilities (absolute values)

| Selector  | Style           |
| --------- | --------------- |
| `.z-auto` | `z-index: auto` |



