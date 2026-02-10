# Frankenstyle

Frankenstyle is a value-driven utility framework. It takes inspiration from Tailwind CSS but simplifies setup by removing the need for a build pipeline. **Do not write CSS files.** Instead, use the provided utility classes in your HTML and define their values using inline styles.

**Key Differences from Tailwind**

- **This is not Tailwind CSS** → at first glance, it looks like it but this is Frankenstyle. 
- **No config, no file watchers** → everything is statically pre-built.
- **Value-driven utilities** → use `m` + `--m: 8` or `[m]` for arbitrary values, not `m-8` or `m-[8px]`.
- **State syntax is reversed** → `bg:hover` instead of `hover:bg-blue-600`.
- **Runtime state generation** → hover/active CSS is created on the fly, keeping static builds small.
- **Familiar patterns** → utilities, responsive prefixes, and naming feel similar to Tailwind.

## Installation

```html
<link rel="stylesheet" href="https://unpkg.com/frankenstyle@latest/dist/css/frankenstyle.min.css" />
<script src="https://unpkg.com/frankenstyle@latest/dist/js/frankenstyle.min.js"></script>
```

## Scaled vs. Raw Values

Many Layout and Spacing utilities (margin, padding, top/left, etc.) are **scaled**.

* **Scaled:** The value you provide is multiplied by `var(--spacing)` (default `0.25rem` or `4px`). Use integers here.
* **Raw:** To use a raw value (like `50%`, `100vh`, `13px`), wrap the class name in brackets `[]`.

```html
<div class="top" style="--top: 4"></div>

<div class="[top]" style="--top: 50%"></div>
```

## Colors & Opacity

Frankenstyle uses `color-mix()` for opacity. To use opacity, append `/o` to the class name. You **must** provide two variables: the color AND the opacity percentage.

| Syntax | Class Example | Required Variables |
| --- | --- | --- |
| **Solid** | `bg` | `--bg` |
| **Opacity** | `bg/o` | `--bg`, `--bg-o` |
| **Dark Mode** | `.dark:bg` | `--dark-bg` |
| **Dark Opacity** | `.dark:bg/o` | `--dark-bg`, `--dark-bg-o` |

```html
<div class="bg/o" style="--bg: red; --bg-o: 50%"></div>
```

## States

Interactive states (e.g., hover) are generated on demand. Mark an element with `data-fs`, and the runtime will generate the necessary pseudo-state CSS.

Supports the following states:

- `:hover`
- `:active`
- `:focus`
- `:focus-within`
- `:target`
- `:checked`
- `:disabled`
- `:group-hover`

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
  data-fs
>
  Default
</button>
```

## Responsiveness

Prefix classes with breakpoints:

- `sm:`
- `md:`
- `lg:`
- `xl:`
- `2xl:`

```html
<div class="p sm:p md:p" style="--p: 4; --sm-p: 8; --md-p: 16"></div>
```

---

## Layout

### aspect-ratio

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.aspect` | `<div class="aspect" style="--aspect: 16/9">` | `--aspect` |
| `.aspect-square` | `<div class="aspect-square">` | N/A |
| `.aspect-video` | `<div class="aspect-video">` | N/A |
| `.aspect-auto` | `<div class="aspect-auto">` | N/A |

### box-decoration-break

| Class | Usage Example | Options |
| --- | --- | --- |
| `.box-decoration-{val}` | `<span class="box-decoration-clone">` | slice, clone |

### box-sizing

| Class | Usage Example | Options |
| --- | --- | --- |
| `.box-{val}` | `<div class="box-border">` | border, content |

### break-after

| Class | Usage Example | Options |
| --- | --- | --- |
| `.break-after-{val}` | `<div class="break-after-page">` | auto, avoid, all, avoid-page, page, left, right, column |

### break-before

| Class | Usage Example | Options |
| --- | --- | --- |
| `.break-before-{val}` | `<div class="break-before-avoid">` | auto, avoid, all, avoid-page, page, left, right, column |

### break-inside

| Class | Usage Example | Options |
| --- | --- | --- |
| `.break-inside-{val}` | `<div class="break-inside-avoid">` | auto, avoid, avoid-page, avoid-column |

### clear

| Class | Usage Example | Options |
| --- | --- | --- |
| `.clear-{side}` | `<div class="clear-both">` | start, end, right, left, both, none |

### columns

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.columns` | `<div class="columns" style="--columns: 3">` | `--columns` |
| `.columns-{size}` | `<div class="columns-lg">` (3xs to 7xl) | N/A |
| `.columns-auto` | `<div class="columns-auto">` | N/A |

### display

**Note:** Frankenstyle uses `.display-{value}`, not just `.{value}`.

| Class | Usage Example |
| --- | --- |
| `.display-block` | `<div class="display-block">` |
| `.display-inline-block` | `<div class="display-inline-block">` |
| `.display-inline` | `<div class="display-inline">` |
| `.display-flex` | `<div class="display-flex">` |
| `.display-inline-flex` | `<div class="display-inline-flex">` |
| `.display-grid` | `<div class="display-grid">` |
| `.display-hidden` | `<div class="display-hidden">` (display: none) |
| `.display-contents` | `<div class="display-contents">` |

### float

| Class | Usage Example | Options |
| --- | --- | --- |
| `.float-{side}` | `<img class="float-left">` | start, end, right, left, none |

### isolation

| Class | Usage Example |
| --- | --- |
| `.isolate` | `<div class="isolate">` |
| `.isolation-auto` | `<div class="isolation-auto">` |

### object-fit

| Class | Usage Example | Options |
| --- | --- | --- |
| `.object-{fit}` | `<img class="object-cover">` | contain, cover, fill, none, scale-down |

### object-position

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.object-position` | `<img class="object-position" style="--object-position: 50% 50%">` | `--object-position` |
| `.object-{side}` | `<img class="object-center">` | top, bottom, left, right, center |

### overflow

| Class | Usage Example | Options |
| --- | --- | --- |
| `.overflow-{val}` | `<div class="overflow-hidden">` | auto, hidden, clip, visible, scroll |
| `.overflow-x-{val}` | `<div class="overflow-x-scroll">` | auto, hidden, clip, visible, scroll |
| `.overflow-y-{val}` | `<div class="overflow-y-auto">` | auto, hidden, clip, visible, scroll |

### overscroll-behavior

| Class | Usage Example | Options |
| --- | --- | --- |
| `.overscroll-{val}` | `<div class="overscroll-contain">` | auto, contain, none |
| `.overscroll-x-{val}` | `<div class="overscroll-x-auto">` | auto, contain, none |
| `.overscroll-y-{val}` | `<div class="overscroll-y-none">` | auto, contain, none |

### position

| Class | Usage Example |
| --- | --- |
| `.static` | `<div class="static">` |
| `.fixed` | `<div class="fixed">` |
| `.absolute` | `<div class="absolute">` |
| `.relative` | `<div class="relative">` |
| `.sticky` | `<div class="sticky">` |

### top / right / bottom / left

These utilities control positioning.
* **Scaled:** Multiplied by `var(--spacing)`.
* **Raw:** Use `[]` for percentages or pixels.

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.top` | `<div class="top" style="--top: 4">` | `--top` |
| `.[top]` | `<div class="[top]" style="--top: 50%">` | `--top` |
| `.right` | `<div class="right" style="--right: 4">` | `--right` |
| `.[right]` | `<div class="[right]" style="--right: 1rem">` | `--right` |
| `.bottom` | `<div class="bottom" style="--bottom: 4">` | `--bottom` |
| `.[bottom]` | `<div class="[bottom]" style="--bottom: 10px">` | `--bottom` |
| `.left` | `<div class="left" style="--left: 4">` | `--left` |
| `.[left]` | `<div class="[left]" style="--left: 50%">` | `--left` |
| `.inset` | `<div class="inset" style="--inset: 4">` | `--inset` |
| `.[inset]` | `<div class="[inset]" style="--inset: 10px">` | `--inset` |

**Absolute Insets**
| Class | Description |
| :--- | :--- |
| `.{side}-full` | Sets value to 100% (e.g., `.top-full`) |
| `.{side}-auto` | Sets value to auto (e.g., `.left-auto`) |
| `.inset-full` | Sets all sides to 100% |

### visibility

| Class | Usage Example |
| --- | --- |
| `.visible` | `<div class="visible">` |
| `.invisible` | `<div class="invisible">` |
| `.collapse` | `<div class="collapse">` |

### z-index

**Note:** Z-Index is **not scaled**. It uses the raw integer value you provide.

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.z` | `<div class="z" style="--z: 50">` | `--z` |
| `.z-auto` | `<div class="z-auto">` | N/A |

## Flex & Grid

### align-content

| Class | Options |
| --- | --- |
| `.content-{val}` | normal, start, end, center, between, around, evenly, baseline, stretch |

### align-items

| Class | Options |
| --- | --- |
| `.items-{val}` | start, end, center, stretch, baseline, end-safe, center-safe, baseline-last |

### align-self

| Class | Options |
| --- | --- |
| `.self-{val}` | auto, start, end, center, stretch, baseline, end-safe, center-safe, baseline-last |

### flex

| Class | Usage Example | Variable | Description |
| --- | --- | --- | --- |
| `.flex` | `<div class="flex" style="--flex: 1 1 auto">` | `--flex` | Custom flex value |
| `.flex-1` | `<div class="flex-1">` | N/A | `flex: 1 1 0%` |
| `.flex-auto` | `<div class="flex-auto">` | N/A | `flex: 1 1 auto` |
| `.flex-none` | `<div class="flex-none">` | N/A | `flex: none` |

### flex-basis

**Note:** Basis is **Scaled** (multiplied by `var(--spacing)`). Use `[]` for raw values.

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.basis` | `<div class="basis" style="--basis: 4">` | `--basis` |
| `.[basis]` | `<div class="[basis]" style="--basis: 50%">` | `--basis` |
| `.basis-{size}` | `<div class="basis-full">` (container sizes: xs, sm... full) | N/A |

### flex-direction

| Class | Usage Example | Options |
| --- | --- | --- |
| `.flex-{dir}` | `<div class="flex-col">` | row, row-reverse, col, col-reverse |

### flex-grow

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.grow` | `<div class="grow" style="--grow: 1">` | `--grow` |
| `.grow-1` | `<div class="grow-1">` | N/A |
| `.grow-0` | `<div class="grow-0">` | N/A |

### flex-shrink

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.shrink` | `<div class="shrink" style="--shrink: 0">` | `--shrink` |
| `.shrink-1` | `<div class="shrink-1">` | N/A |
| `.shrink-0` | `<div class="shrink-0">` | N/A |

### flex-wrap

| Class | Usage Example | Options |
| --- | --- | --- |
| `.flex-{wrap}` | `<div class="flex-wrap">` | wrap, wrap-reverse, nowrap |

### gap

**Note:** Gap is **Scaled** (multiplied by `var(--spacing)`).

| Class | Usage Example | Variable | Description |
| --- | --- | --- | --- |
| `.gap` | `<div class="gap" style="--gap: 4">` | `--gap` | Gap between all items |
| `.gap-x` | `<div class="gap-x" style="--gap-x: 4">` | `--gap-x` | Column gap |
| `.gap-y` | `<div class="gap-y" style="--gap-y: 4">` | `--gap-y` | Row gap |

### grid-auto-flow

| Class | Options |
| :--- | :--- |
| `.grid-flow-{val}` | row, col, dense, row-dense, col-dense |

### grid-column

Values are **Raw Integers** (e.g., start at line 2, span 3).

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.col` | `<div class="col" style="--col: span 2">` | `--col` |
| `.col-span` | `<div class="col-span" style="--col-span: 2">` | `--col-span` |
| `.col-start` | `<div class="col-start" style="--col-start: 1">` | `--col-start` |
| `.col-end` | `<div class="col-end" style="--col-end: 3">` | `--col-end` |
| `.col-span-full` | `<div class="col-span-full">` | N/A |
| `.col-auto` | `<div class="col-auto">` | N/A |

### grid-row

Values are **Raw Integers**.

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.row` | `<div class="row" style="--row: span 2">` | `--row` |
| `.row-span` | `<div class="row-span" style="--row-span: 2">` | `--row-span` |
| `.row-span-full` | `<div class="row-span-full">` | N/A |
| `.row-auto` | `<div class="row-auto">` | N/A |

### grid-template-columns

| Class | Usage Example | Variable | logic |
| --- | --- | --- | --- |
| `.grid-cols` | `<div class="grid-cols" style="--grid-cols: 3">` | `--grid-cols` | Creates equal columns |
| `.[grid-cols]` | `<div class="[grid-cols]" style="--grid-cols: 200px 1fr">` | `--grid-cols` | Custom definition |
| `.grid-cols-none` | `<div class="grid-cols-none">` | N/A | Removes template columns |
| `.grid-cols-subgrid`| `<div class="grid-cols-subgrid">` | N/A | Inherits grid columns |

### grid-template-rows

| Class | Usage Example | Variable | logic |
| --- | --- | --- | --- |
| `.grid-rows` | `<div class="grid-rows" style="--grid-rows: 4">` | `--grid-rows` | Creates equal rows |

### justify-content

| Class | Options |
| --- | --- |
| `.justify-{val}` | normal, start, end, center, between, around, evenly, stretch, end-safe, center-safe |

### justify-items

| Class | Options |
| --- | --- |
| `.justify-items-{val}` | start, end, center, stretch, normal, end-safe, center-safe |

### justify-self

| Class | Options |
| --- | --- |
| `.justify-self-{val}` | auto, start, end, center, stretch, end-safe, center-safe |

### order

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.order` | `<div class="order" style="--order: 2">` | `--order` |
| `.order-first` | `<div class="order-first">` | N/A |
| `.order-last` | `<div class="order-last">` | N/A |

### place-content

| Class | Options |
| --- | --- |
| `.place-content-{val}` | center, start, end, between, around, evenly, baseline, stretch |

### place-items

| Class | Options |
| --- | --- |
| `.place-items-{val}` | start, end, center, baseline, stretch, end-safe, center-safe |

### place-self

| Class | Options |
| --- | --- |
| `.place-self-{val}` | auto, start, end, center, stretch, end-safe, center-safe |

## Spacing

**Note:** Standard classes (e.g., `.m`, `.p`) are **Scaled** (multiplied by `var(--spacing)`). Use `[]` (e.g., `.[m]`) for raw values.

### margin

| Class | Usage Example | Variable | Target Side |
| --- | --- | --- | --- |
| `.m` | `<div class="m" style="--m: 4">` | `--m` | All sides |
| `.[m]` | `<div class="[m]" style="--m: 20px">` | `--m` | All sides (Raw) |
| `.mx` | `<div class="mx" style="--mx: 4">` | `--mx` | Left & Right |
| `.my` | `<div class="my" style="--my: 4">` | `--my` | Top & Bottom |
| `.mt` | `<div class="mt" style="--mt: 4">` | `--mt` | Top |
| `.mb` | `<div class="mb" style="--mb: 4">` | `--mb` | Bottom |
| `.ml` | `<div class="ml" style="--ml: 4">` | `--ml` | Left |
| `.mr` | `<div class="mr" style="--mr: 4">` | `--mr` | Right |
| `.ms` | `<div class="ms" style="--ms: 4">` | `--ms` | Inline Start |
| `.me` | `<div class="me" style="--me: 4">` | `--me` | Inline End |

**Absolute Margins**
| Class | Description |
| :--- | :--- |
| `.m-auto` | Sets all margins to auto |
| `.mx-auto` | Centers element horizontally (margin-inline: auto) |
| `.my-auto` | Centers element vertically (margin-block: auto) |
| `.mt-auto` / `.mb-auto` | Sets top/bottom margin to auto |
| `.ml-auto` / `.mr-auto` | Sets left/right margin to auto |

### padding

| Class | Usage Example | Variable | Target Side |
| --- | --- | --- | --- |
| `.p` | `<div class="p" style="--p: 4">` | `--p` | All sides |
| `.[p]` | `<div class="[p]" style="--p: 20px">` | `--p` | All sides (Raw) |
| `.px` | `<div class="px" style="--px: 4">` | `--px` | Left & Right |
| `.py` | `<div class="py" style="--py: 4">` | `--py` | Top & Bottom |
| `.pt` | `<div class="pt" style="--pt: 4">` | `--pt` | Top |
| `.pb` | `<div class="pb" style="--pb: 4">` | `--pb` | Bottom |
| `.pl` | `<div class="pl" style="--pl: 4">` | `--pl` | Left |
| `.pr` | `<div class="pr" style="--pr: 4">` | `--pr` | Right |
| `.ps` | `<div class="ps" style="--ps: 4">` | `--ps` | Inline Start (LTR: Left) |
| `.pe` | `<div class="pe" style="--pe: 4">` | `--pe` | Inline End (LTR: Right) |

### space

**Note:** `.space-x` and `.space-y` are **Scaled**.

| Class | Usage Example | Variable | Description |
| --- | --- | --- | --- |
| `.space-x` | `<div class="space-x" style="--space-x: 4">` | `--space-x` | Margin between children (Horizontal) |
| `.space-y` | `<div class="space-y" style="--space-y: 4">` | `--space-y` | Margin between children (Vertical) |
| `.space-{axis}-reverse` | `<div class="space-x-reverse">` | N/A | Reverses order logic |

## Sizing

### height

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.h` | `<div class="h" style="--h: 12">` | `--h` (Scaled) |
| `.[h]` | `<div class="[h]" style="--h: 50vh">` | `--h` (Raw) |

**Absolute Heights**
| Class | Description |
| :--- | :--- |
| `.h-full` | `height: 100%` |
| `.h-screen` | `height: 100vh` |
| `.h-dvh` / `.h-lvh` / `.h-svh` | Dynamic/Large/Small viewport height |
| `.h-auto` | `height: auto` |
| `.h-min` / `.h-max` / `.h-fit` | `min-content`, `max-content`, `fit-content` |

### max-height

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.max-h` | `<div class="max-h" style="--max-h: 30">` | `--max-h` (Scaled) |
| `.[max-h]` | `<div class="[max-h]" style="--max-h: 500px">` | `--max-h` (Raw) |

**Absolute Max-Heights**
| Class | Description |
| :--- | :--- |
| `.max-h-full` | `max-height: 100%` |
| `.max-h-screen` | `max-height: 100vh` |
| `.max-h-dvh` | `max-height: 100dvh` |

### max-width

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.max-w` | `<div class="max-w" style="--max-w: 60">` | `--max-w` (Scaled) |
| `.[max-w]` | `<div class="[max-w]" style="--max-w: 80ch">` | `--max-w` (Raw) |

**Absolute Max-Widths**
| Class | Description |
| :--- | :--- |
| `.max-w-none` | `max-width: none` |
| `.max-w-full` | `max-width: 100%` |
| `.max-w-{size}` | Container sizes: `.max-w-xs`, `.max-w-sm`... `.max-w-7xl` |
| `.max-w-prose` | Not strictly defined, use `.max-w-65ch` pattern via `.[max-w]` |

### min-height

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.min-h` | `<div class="min-h" style="--min-h: 10">` | `--min-h` (Scaled) |
| `.[min-h]` | `<div class="[min-h]" style="--min-h: 100vh">` | `--min-h` (Raw) |

**Absolute Min-Heights**
| Class | Description |
| :--- | :--- |
| `.min-h-full` | `min-height: 100%` |
| `.min-h-screen` | `min-height: 100vh` |
| `.min-h-dvh` | `min-height: 100dvh` |

### min-width

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.min-w` | `<div class="min-w" style="--min-w: 20">` | `--min-w` (Scaled) |
| `.[min-w]` | `<div class="[min-w]" style="--min-w: 300px">` | `--min-w` (Raw) |

**Absolute Min-Widths**
| Class | Description |
| :--- | :--- |
| `.min-w-full` | `min-width: 100%` |
| `.min-w-screen` | `min-width: 100vw` |
| `.min-w-{size}` | Container sizes: `.min-w-xs`, `.min-w-md`, `.min-w-xl`... |

### size

*Not found in the provided documentation.*

### width

| Class | Usage Example | Variable |
| --- | --- | --- |
| `.w` | `<div class="w" style="--w: 12">` | `--w` (Scaled) |
| `.[w]` | `<div class="[w]" style="--w: 50%">` | `--w` (Raw) |

**Absolute Widths**
| Class | Description |
| :--- | :--- |
| `.w-full` | `width: 100%` |
| `.w-screen` | `width: 100vw` |
| `.w-dvw` / `.w-lvw` / `.w-svw` | Dynamic/Large/Small viewport width |
| `.w-auto` | `width: auto` |
| `.w-min` / `.w-max` / `.w-fit` | `min-content`, `max-content`, `fit-content` |
| `.w-{size}` | Container sizes: `.w-3xs`, `.w-2xs`... `.w-sm`... `.w-7xl` |

## Typography

### color

Frankenstyle colors rely on CSS variables. You can use any valid CSS color value.

| Scenario | Class | Example | Variables |
| :--- | :--- | :--- | :--- |
| **Standard** | `.color` | `<span class="color" style="--color: red">` | `--color` |
| **Opacity** | `.color/o` | `<span class="color/o" style="--color: red; --color-o: 50%">` | `--color`, `--color-o` |
| **Dark Mode** | `.dark:color` | `<span class="dark:color" style="--dark-color: white">` | `--dark-color` |
| **Dark Opacity**| `.dark:color/o`| `<span class="dark:color/o" style="--dark-color: #fff; --dark-color-o: 0.8">` | `--dark-color`, `--dark-color-o` |

### content

| Class | Usage Example |
| :--- | :--- |
| `.content-none` | `<div class="content-none">` (Sets `content: none`) |

### font-family

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.font-family` | `<p class="font-family" style="--font-family: serif">` | `--font-family` |
| `.font-sans` | `<p class="font-sans">` | N/A |
| `.font-serif` | `<p class="font-serif">` | N/A |
| `.font-mono` | `<p class="font-mono">` | N/A |

### font-size

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.font-size` | `<p class="font-size" style="--font-size: 2rem">` | `--font-size` |
| `.text-{size}` | `<p class="text-lg">` (xs, sm, base, lg, xl... 9xl) | N/A |

### font-smoothing

| Class | Usage Example |
| :--- | :--- |
| `.antialiased` | `<p class="antialiased">` |
| `.subpixel-antialiased` | `<p class="subpixel-antialiased">` |

### font-style

| Class | Usage Example |
| :--- | :--- |
| `.italic` | `<p class="italic">` |
| `.not-italic` | `<p class="not-italic">` |

### font-variant-numeric

| Class | Description |
| :--- | :--- |
| `.normal-nums` | Reset numeric variants |
| `.ordinal`, `.slashed-zero` | Specific features |
| `.lining-nums`, `.oldstyle-nums` | Figure styles |
| `.proportional-nums`, `.tabular-nums` | Spacing styles |
| `.diagonal-fractions`, `.stacked-fractions` | Fraction styles |

### font-weight

| Class | Usage Example | Options |
| :--- | :--- | :--- |
| `.font-{weight}` | `<p class="font-bold">` | thin, extralight, light, normal, medium, semibold, bold, extrabold, black |

### hyphens

| Class | Options |
| :--- | :--- |
| `.hyphens-{val}` | none, manual, auto |

### letter-spacing

**Note:** `.tracking` uses the **raw value**.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.tracking` | `<p class="tracking" style="--tracking: 0.5em">` | `--tracking` |
| `.tracking-{val}` | `<p class="tracking-wide">` | tighter, tight, normal, wide, wider, widest |
| `.-tracking-{val}`| `<p class="-tracking-wide">` | Negative values |

### line-clamp

| Class | Options |
| :--- | :--- |
| `.line-clamp-{n}` | 1, 2, 3, 4, 5, 6, none |

### line-height

**Note:** `.leading` is **Scaled** (multiplied by spacing unit). Use `[]` for raw values.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.leading` | `<p class="leading" style="--leading: 6">` | `--leading` |
| `.[leading]` | `<p class="[leading]" style="--leading: 1.5">` | `--leading` |
| `.leading-{val}` | `<p class="leading-tight">` | none, tight, snug, normal, relaxed, loose |

### list-style-image

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.list-image` | `<ul class="list-image" style="--list-image: url(...)">` | `--list-image` |
| `.list-image-none`| `<ul class="list-image-none">` | N/A |

### list-style-position

| Class | Usage Example | Options |
| :--- | :--- | :--- |
| `.list-{pos}` | `<ul class="list-inside">` | inside, outside |

### list-style-type

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.list` | `<ul class="list" style="--list: square">` | `--list` |
| `.list-{type}` | `<ul class="list-disc">` (none, disc, decimal) | N/A |

### overflow-wrap

| Class | Options |
| :--- | :--- |
| `.overflow-wrap` | wrap-break-word, wrap-anywhere, wrap-normal |

### text-align

| Class | Options |
| :--- | :--- |
| `.text-{align}` | left, center, right, justify, start, end |

### text-decoration-color

Supports **Opacity** (`/o`) and **Dark Mode** (`dark:`).

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.decoration` | `<u class="decoration" style="--decoration: blue">` | `--decoration` |
| `.decoration/o` | `<u class="decoration/o" style="--decoration: blue; --decoration-o: 50%">` | `--decoration`, `--decoration-o` |
| `.dark:decoration` | `<u class="dark:decoration" style="--dark-decoration: white">` | `--dark-decoration` |

### text-decoration-line

| Class | Options |
| :--- | :--- |
| `.underline` | underline |
| `.overline` | overline |
| `.line-through` | line-through |
| `.no-underline` | no-underline |

### text-decoration-style

| Class | Options |
| :--- | :--- |
| `.decoration-{val}` | solid, double, dotted, dashed, wavy |

### text-decoration-thickness

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.decoration-thickness` | `<u class="decoration-thickness" style="--decoration-thickness: 2px">` | `--decoration-thickness` |
| `.decoration-auto` | `<u class="decoration-auto">` | N/A |
| `.decoration-from-font` | `<u class="decoration-from-font">` | N/A |

### text-indent

**Note:** `.indent` is **Scaled**.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.indent` | `<p class="indent" style="--indent: 8">` | `--indent` |
| `.[indent]` | `<p class="[indent]" style="--indent: 2rem">` | `--indent` |

### text-overflow

| Class | Description |
| :--- | :--- |
| `.truncate` | Truncate text with ellipsis (single line) |
| `.text-ellipsis` | `text-overflow: ellipsis` |
| `.text-clip` | `text-overflow: clip` |

### text-transform

| Class | Options |
| :--- | :--- |
| `.uppercase` | Uppercase |
| `.lowercase` | Lowercase |
| `.capitalize` | Capitalize |
| `.normal-case` | Normal case |

### text-underline-offset

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.underline-offset` | `<u class="underline-offset" style="--underline-offset: 4px">` | `--underline-offset` |
| `.underline-offset-auto`| `<u class="underline-offset-auto">` | N/A |

### text-wrap

| Class | Options |
| :--- | :--- |
| `.text-wrap` | wrap, nowrap, balance, pretty |

### vertical-align

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.align` | `<span class="align" style="--align: middle">` | `--align` |
| `.align-{val}` | `<img class="align-top">` (baseline, top, middle, bottom, text-top, text-bottom, sub, super) | N/A |

### white-space

| Class | Options |
| :--- | :--- |
| `.whitespace-{val}` | normal, nowrap, pre, pre-line, pre-wrap, break-spaces |

### word-break

| Class | Options |
| :--- | :--- |
| `.break-{val}` | normal, words, all, keep |

## Backgrounds

### background-attachment

| Class | CSS Value |
| :--- | :--- |
| `.bg-fixed` | `fixed` |
| `.bg-local` | `local` |
| `.bg-scroll` | `scroll` |

### background-clip

| Class | CSS Value |
| :--- | :--- |
| `.bg-clip-border` | `border-box` |
| `.bg-clip-padding` | `padding-box` |
| `.bg-clip-content` | `content-box` |
| `.bg-clip-text` | `text` |

### background-color

Frankenstyle background colors are **value-driven**. You must provide the color value via CSS variables.

**Solid Color**
| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.bg` | `<div class="bg" style="--bg: #3b82f6">` | `--bg` |
| `.dark:bg` | `<div class="dark:bg" style="--dark-bg: #1e293b">` | `--dark-bg` |

**Color with Opacity**
To use opacity, append `/o` to the class. You must provide **both** the color variable and the opacity variable (0-100% or decimal).

| Class | Usage Example | Variables |
| :--- | :--- | :--- |
| `.bg/o` | `<div class="bg/o" style="--bg: #000; --bg-o: 0.5">` | `--bg`, `--bg-o` |
| `.dark:bg/o` | `<div class="dark:bg/o" style="--dark-bg: #fff; --dark-bg-o: 0.2">` | `--dark-bg`, `--dark-bg-o` |

### background-image

Sets the background image (url or gradient).

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.bg-image` | `<div class="bg-image" style="--bg-image: url('/img.jpg')">` | `--bg-image` |
| `.bg-image-none`| `<div class="bg-image-none">` | N/A |

### background-origin

| Class | CSS Value |
| :--- | :--- |
| `.bg-origin-border` | `border-box` |
| `.bg-origin-padding` | `padding-box` |
| `.bg-origin-content` | `content-box` |

### background-position

**Value-Driven**
| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.bg-position` | `<div class="bg-position" style="--bg-position: 50% 25%">` | `--bg-position` |

**Absolute Positioning**
| Class | Value |
| :--- | :--- |
| `.bg-center` | `center` |
| `.bg-top` | `top` |
| `.bg-bottom` | `bottom` |
| `.bg-left` | `left` |
| `.bg-right` | `right` |
| `.bg-top-left` | `top left` |
| `.bg-top-right` | `top right` |
| `.bg-bottom-left` | `bottom left` |
| `.bg-bottom-right`| `bottom right` |

### background-repeat

| Class | CSS Value |
| :--- | :--- |
| `.bg-repeat` | `repeat` |
| `.bg-no-repeat` | `no-repeat` |
| `.bg-repeat-x` | `repeat-x` |
| `.bg-repeat-y` | `repeat-y` |
| `.bg-repeat-space` | `space` |
| `.bg-repeat-round` | `round` |

### background-size

**Value-Driven**
| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.bg-size` | `<div class="bg-size" style="--bg-size: 50%">` | `--bg-size` |

**Absolute Sizing**
| Class | Value |
| :--- | :--- |
| `.bg-cover` | `cover` |
| `.bg-contain` | `contain` |
| `.bg-auto` | `auto` |

### Gradients

Frankenstyle gradients are built using a **3-part system**: Direction + Colors + Stops.

#### Direction (Linear)

Selects the direction of the linear gradient.

| Class | CSS Value |
| :--- | :--- |
| `.linear` | `linear-gradient(...)` (Default) |
| `.linear-to-t` | `to top` |
| `.linear-to-tr` | `to top right` |
| `.linear-to-r` | `to right` |
| `.linear-to-br` | `to bottom right` |
| `.linear-to-b` | `to bottom` |
| `.linear-to-bl` | `to bottom left` |
| `.linear-to-l` | `to left` |
| `.linear-to-tl` | `to top left` |

#### Gradient Colors (From / Via / To)

Defines the color stops. Supports **Opacity** (`/o`) and **Dark Mode** (`dark:`).

| Step | Class Pattern | Usage Example | Variables |
| :--- | :--- | :--- | :--- |
| **Start** | `.from` | `<div class="from" style="--from: #000">` | `--from` |
| **Middle** | `.via` | `<div class="via" style="--via: #555">` | `--via` |
| **End** | `.to` | `<div class="to" style="--to: #fff">` | `--to` |
| **Opacity** | `.from/o` | `<div class="from/o" style="--from: red; --from-o: 0.5">` | `--from`, `--from-o` |

#### Stop Positions

Optional. Defines exactly where the color stop should be placed (0% - 100%).

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.from-position` | `<div class="from-position" style="--from-position: 10%">` | `--from-position` |
| `.via-position` | `<div class="via-position" style="--via-position: 50%">` | `--via-position` |
| `.to-position` | `<div class="to-position" style="--to-position: 90%">` | `--to-position` |

## Borders

### border-color

Sets the border color. Supports opacity (`/o`) and dark mode (`dark:`).

| Scenario | Class Pattern | Usage Example | Variables |
| :--- | :--- | :--- | :--- |
| **All Sides** | `.border` | `<div class="border" style="--border: red">` | `--border` |
| **Specific Side** | `.border-{side}` | `<div class="border-t" style="--border-t: blue">` | `--border-t` |
| **Opacity** | `.border/o` | `<div class="border/o" style="--border: #000; --border-o: 0.5">` | `--border`, `--border-o` |
| **Dark Mode** | `.dark:border` | `<div class="dark:border" style="--dark-border: #fff">` | `--dark-border` |

*Sides available: `-t`, `-b`, `-l`, `-r`, `-x`, `-y`, `-s` (start), `-e` (end).*

### border-radius

**Value-Driven**
Define your own radius value using variables.

| Class | Usage Example | Variable | Target |
| :--- | :--- | :--- | :--- |
| `.rounded` | `<div class="rounded" style="--rounded: 10px">` | `--rounded` | All corners |
| `.rounded-t` | `<div class="rounded-t" style="--rounded-t: 10px">` | `--rounded-t` | Top corners |
| `.rounded-b` | `<div class="rounded-b" style="--rounded-b: 10px">` | `--rounded-b` | Bottom corners |
| `.rounded-l` | `<div class="rounded-l" style="--rounded-l: 10px">` | `--rounded-l` | Left corners |
| `.rounded-r` | `<div class="rounded-r" style="--rounded-r: 10px">` | `--rounded-r` | Right corners |
| `.rounded-tl` | `<div class="rounded-tl" style="--rounded-tl: 10px">` | `--rounded-tl` | Top-Left |
| `.rounded-tr` | `<div class="rounded-tr" style="--rounded-tr: 10px">` | `--rounded-tr` | Top-Right |
| `.rounded-bl` | `<div class="rounded-bl" style="--rounded-bl: 10px">` | `--rounded-bl` | Bottom-Left |
| `.rounded-br` | `<div class="rounded-br" style="--rounded-br: 10px">` | `--rounded-br` | Bottom-Right |

**Absolute Radius**
Standard size presets: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `none`, `full`.

| Class Pattern | Usage Example |
| :--- | :--- |
| `.rounded-{size}` | `<div class="rounded-lg">` |
| `.rounded-t-{size}` | `<div class="rounded-t-xl">` |
| `.rounded-b-{size}` | `<div class="rounded-b-full">` |
| `.rounded-l-{size}` | `<div class="rounded-l-md">` |
| `.rounded-r-{size}` | `<div class="rounded-r-none">` |
| `.rounded-{corner}-{size}` | `<div class="rounded-tl-lg">` |

### border-style

| Class | CSS Value |
| :--- | :--- |
| `.border-solid` | `solid` |
| `.border-dashed` | `dashed` |
| `.border-dotted` | `dotted` |
| `.border-double` | `double` |
| `.border-hidden` | `hidden` |
| `.border-none` | `none` |

### border-width

**Note:** These are **Raw Values** (not scaled). You must include the unit (e.g., `px`, `em`).

| Class | Usage Example | Variable | Target |
| :--- | :--- | :--- | :--- |
| `.border-w` | `<div class="border-w" style="--border-w: 2px">` | `--border-w` | All sides |
| `.border-x-w` | `<div class="border-x-w" style="--border-x-w: 1px">` | `--border-x-w` | Left & Right |
| `.border-y-w` | `<div class="border-y-w" style="--border-y-w: 1px">` | `--border-y-w` | Top & Bottom |
| `.border-t-w` | `<div class="border-t-w" style="--border-t-w: 4px">` | `--border-t-w` | Top |
| `.border-b-w` | `<div class="border-b-w" style="--border-b-w: 4px">` | `--border-b-w` | Bottom |
| `.border-l-w` | `<div class="border-l-w" style="--border-l-w: 4px">` | `--border-l-w` | Left |
| `.border-r-w` | `<div class="border-r-w" style="--border-r-w: 4px">` | `--border-r-w` | Right |

### outline-color

Supports opacity (`/o`) and dark mode (`dark:`).

| Class | Usage Example | Variables |
| :--- | :--- | :--- |
| `.outline` | `<div class="outline" style="--outline: blue">` | `--outline` |
| `.outline/o` | `<div class="outline/o" style="--outline: red; --outline-o: 0.5">` | `--outline`, `--outline-o` |

### outline-offset

**Note:** Uses **Raw Values**.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.outline-offset` | `<div class="outline-offset" style="--outline-offset: 2px">` | `--outline-offset` |

### outline-style

| Class | CSS Value |
| :--- | :--- |
| `.outline` | `solid` |
| `.outline-dashed` | `dashed` |
| `.outline-dotted` | `dotted` |
| `.outline-double` | `double` |
| `.outline-none` | `none` |
| `.outline-hidden` | `hidden` |

### outline-width

**Note:** Uses **Raw Values**.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.outline-w` | `<div class="outline-w" style="--outline-w: 2px">` | `--outline-w` |

### divide

Adds borders between child elements.
**Note:** `.divide-x` and `.divide-y` are **Scaled** (multiplied by spacing unit). Use `[]` for raw pixel values.

| Class | Usage Example | Variable | Description |
| --- | --- | --- | --- |
| `.divide-x` | `<div class="divide-x" style="--divide-x: 1">` | `--border-w` | Width of border between children (Horizontal) |
| `.divide-y` | `<div class="divide-y" style="--divide-y: 1">` | `--border-w` | Width of border between children (Vertical) |
| `.divide-{axis}-reverse` | `<div class="divide-x-reverse">` | N/A | Reverses order logic |

## Effects

### background-blend-mode

Controls how an element's background image blends with its background color.

| Class Pattern | Options |
| :--- | :--- |
| `.bg-blend-{val}` | normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity |

### box-shadow

**Value-Driven**
Define custom shadows using variables. Supports opacity via `/o`.

| Class | Usage Example | Variables | Description |
| :--- | :--- | :--- | :--- |
| `.shadow` | `<div class="shadow" style="--shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)">` | `--shadow` | Applies custom shadow box |
| `.shadow/o` | `<div class="shadow/o" style="--shadow: rgb(0 0 0); --shadow-o: 0.5">` | `--shadow`, `--shadow-o` | Applies shadow color with opacity override |
| `.[shadow]` | `<div class="[shadow]" style="--shadow: 10px 10px #000">` | `--shadow` | Raw box-shadow value |

**Absolute Shadows**
Standard shadow presets.

| Class | CSS Value |
| :--- | :--- |
| `.shadow-2xs` | Extra small shadow |
| `.shadow-xs` | Extra small shadow |
| `.shadow-sm` | Small shadow |
| `.shadow-md` | Medium shadow |
| `.shadow-lg` | Large shadow |
| `.shadow-xl` | Extra large shadow |
| `.shadow-none` | Removes shadow |

### ring-width

**Note:** `.ring-w` uses **Raw Values** (e.g., `2px`).

| Class | Usage Example | Variable | Description |
| --- | --- | --- | --- |
| `.ring` | `<div class="ring" style="--ring: blue">` | `--ring` | Color only (defaults 1px width) |
| `.ring-w` | `<div class="ring-w" style="--ring-w: 2px">` | `--ring-w` | Ring width |
| `.inset-ring` | `<div class="inset-ring" style="--inset-ring: blue">` | `--inset-ring` | Inset ring color |
| `.inset-ring-w` | `<div class="inset-ring-w" style="--inset-ring-w: 2px">` | `--inset-ring-w` | Inset ring width |

### ring-color

Supports **Opacity** (`/o`) and **Dark Mode** (`dark:`).

| Class | Usage Example | Variables |
| --- | --- | --- |
| `.ring` | `<div class="ring" style="--ring: blue">` | `--ring` |
| `.ring/o` | `<div class="ring/o" style="--ring: blue; --ring-o: 0.5">` | `--ring`, `--ring-o` |
| `.dark:ring` | `<div class="dark:ring" style="--dark-ring: white">` | `--dark-ring` |

### mask-clip

| Class Pattern | Options |
| :--- | :--- |
| `.mask-clip-{val}` | border, padding, content, fill, stroke, view, no-clip |

### mask-composite

| Class Pattern | Options |
| :--- | :--- |
| `.mask-{val}` | add, subtract, intersect, exclude |

### mask-mode

| Class Pattern | Options |
| :--- | :--- |
| `.mask-{val}` | alpha, luminance, match |

### mask-origin

| Class Pattern | Options |
| :--- | :--- |
| `.mask-origin-{val}` | border, padding, content, fill, stroke, view |

### mask-position

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.mask-position` | `<div class="mask-position" style="--mask-position: 50% 50%">` | `--mask-position` |
| `.mask-{side}` | `<div class="mask-center">` (top, bottom, left, right, center, top-left, etc.) | N/A |

### mask-repeat

| Class Pattern | Options |
| :--- | :--- |
| `.mask-{val}` | repeat, no-repeat, repeat-x, repeat-y, repeat-space, repeat-round |

### mask-size

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.mask-size` | `<div class="mask-size" style="--mask-size: 100%">` | `--mask-size` |
| `.mask-{size}` | `<div class="mask-cover">` (auto, cover, contain) | N/A |

### mask-type

| Class Pattern | Options |
| :--- | :--- |
| `.mask-type-{val}` | alpha, luminance |

### mix-blend-mode

Controls how an element's content blends with the background.

| Class Pattern | Options |
| :--- | :--- |
| `.mix-blend-{val}` | normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion, hue, saturation, color, luminosity, plus-darker, plus-lighter |

### opacity

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.opacity` | `<div class="opacity" style="--opacity: 0.5">` | `--opacity` |

## Filters

### backdrop-blur

**Value-Driven**
| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-blur` | `<div class="backdrop-blur" style="--backdrop-blur: 4px">` | `--backdrop-blur` |

**Absolute (Presets)**
| Class | Value |
| :--- | :--- |
| `.backdrop-blur-xs` | Extra small blur |
| `.backdrop-blur-sm` | Small blur |
| `.backdrop-blur-md` | Medium blur |
| `.backdrop-blur-lg` | Large blur |
| `.backdrop-blur-xl` | Extra large blur |
| `.backdrop-blur-2xl` | 2x Extra large blur |
| `.backdrop-blur-3xl` | 3x Extra large blur |
| `.backdrop-blur-none`| Removes backdrop blur |

### backdrop-brightness

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-brightness` | `<div class="backdrop-brightness" style="--backdrop-brightness: 1.5">` | `--backdrop-brightness` |

### backdrop-contrast

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-contrast` | `<div class="backdrop-contrast" style="--backdrop-contrast: 1.2">` | `--backdrop-contrast` |

### backdrop-filter

**Base Utility**
| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-filter` | `<div class="backdrop-filter" style="--backdrop-filter: blur(4px)">` | `--backdrop-filter` |
| `.backdrop-filter-none` | `<div class="backdrop-filter-none">` | N/A |

### backdrop-grayscale

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-grayscale` | `<div class="backdrop-grayscale" style="--backdrop-grayscale: 100%">` | `--backdrop-grayscale` |

### backdrop-hue-rotate

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-hue-rotate` | `<div class="backdrop-hue-rotate" style="--backdrop-hue-rotate: 90deg">` | `--backdrop-hue-rotate` |

### backdrop-invert

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-invert` | `<div class="backdrop-invert" style="--backdrop-invert: 100%">` | `--backdrop-invert` |

### backdrop-opacity

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-opacity` | `<div class="backdrop-opacity" style="--backdrop-opacity: 0.5">` | `--backdrop-opacity` |

### backdrop-saturate

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-saturate` | `<div class="backdrop-saturate" style="--backdrop-saturate: 1.5">` | `--backdrop-saturate` |

### backdrop-sepia

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.backdrop-sepia` | `<div class="backdrop-sepia" style="--backdrop-sepia: 100%">` | `--backdrop-sepia` |

### blur

**Value-Driven**
| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.blur` | `<img class="blur" style="--blur: 4px">` | `--blur` | Gaussian blur |

**Absolute (Presets)**
| Class | CSS Value |
| :--- | :--- |
| `.blur-xs` | Extra small blur |
| `.blur-sm` | Small blur |
| `.blur-md` | Medium blur |
| `.blur-lg` | Large blur |
| `.blur-xl` | Extra large blur |
| `.blur-2xl` | 2x Extra large blur |
| `.blur-3xl` | 3x Extra large blur |
| `.blur-none` | Removes blur |

### brightness

| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.brightness` | `<img class="brightness" style="--brightness: 1.5">` | `--brightness` | Brightness multiplier |

### contrast

| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.contrast` | `<img class="contrast" style="--contrast: 200%">` | `--contrast` | Contrast multiplier |

### filter

**Base Utility**
| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.filter` | `<div class="filter" style="--filter: blur(4px)">` | `--filter` |
| `.filter-none` | `<div class="filter-none">` | N/A |

### grayscale

| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.grayscale` | `<img class="grayscale" style="--grayscale: 100%">` | `--grayscale` | Grayscale conversion |

### hue-rotate

| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.hue-rotate` | `<img class="hue-rotate" style="--hue-rotate: 90deg">` | `--hue-rotate` | Hue rotation |

### invert

| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.invert` | `<img class="invert" style="--invert: 100%">` | `--invert` | Color inversion |

### saturate

| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.saturate` | `<img class="saturate" style="--saturate: 0">` | `--saturate` | Saturation multiplier |

### sepia

| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.sepia` | `<img class="sepia" style="--sepia: 100%">` | `--sepia` | Sepia conversion |

## Tables

### border-collapse

Control whether table borders should collapse or be separated.

| Class | CSS Value |
| :--- | :--- |
| `.border-collapse` | `collapse` |
| `.border-separate` | `separate` |

### border-spacing

Controls the spacing between table borders (requires `.border-separate`).

**Note:** These utilities are **Scaled** (multiplied by the base spacing unit). Use `[]` for raw values (e.g., pixels).

| Class | Usage Example | Variable | Target |
| :--- | :--- | :--- | :--- |
| `.border-spacing` | `<table class="border-spacing" style="--border-spacing: 4">` | `--border-spacing` | Horizontal & Vertical |
| `.border-spacing-x` | `<table class="border-spacing-x" style="--border-spacing-x: 4">` | `--border-spacing-x` | Horizontal only |
| `.border-spacing-y` | `<table class="border-spacing-y" style="--border-spacing-y: 4">` | `--border-spacing-y` | Vertical only |
| `.[border-spacing]` | `<table class="[border-spacing]" style="--border-spacing: 10px">` | `--border-spacing` | Raw value |
| `.[border-spacing-x]` | `<table class="[border-spacing-x]" style="--border-spacing-x: 5px">` | `--border-spacing-x` | Raw value |

### caption-side

Controls the positioning of the table caption.

| Class | CSS Value |
| :--- | :--- |
| `.caption-top` | `top` |
| `.caption-bottom` | `bottom` |

### table-layout

Controls the algorithm used to lay out table cells, rows, and columns.

| Class | CSS Value | Description |
| :--- | :--- | :--- |
| `.table-auto` | `auto` | Automatic table layout (adapts to content) |
| `.table-fixed` | `fixed` | Fixed table layout (respects width) |

## Transitions & Animations

### animate

**Value-Driven Animation**
Define your own animation string using variables.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.animate` | `<div class="animate" style="--animate: spin 1s linear infinite">` | `--animate` |

**Absolute Animations (Presets)**
| Class | Description |
| :--- | :--- |
| `.animate-spin` | Infinite rotation (useful for loading spinners) |
| `.animate-ping` | Radar-like ping animation |
| `.animate-pulse` | Gentle fading in and out |
| `.animate-bounce` | Bouncing up and down |
| `.animate-none` | Removes animation |

### transition-behavior

Controls whether discrete properties (like `display` or `overlay`) can be animated.

| Class | CSS Value |
| :--- | :--- |
| `.transition-normal` | `normal` |
| `.transition-discrete` | `allow-discrete` |

### transition-delay

Sets the wait time before the transition starts.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.delay` | `<div class="delay" style="--delay: 200ms">` | `--delay` |

### transition-duration

Sets the length of time a transition animation should take to complete.
**Note:** This utility is **Value-Driven**. You must provide the duration (e.g., `300ms`, `0.5s`).

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.duration` | `<div class="duration" style="--duration: 500ms">` | `--duration` |
| `.duration-initial`| `<div class="duration-initial">` | N/A |

### transition-property

Specifies which CSS properties should be transitioned.

| Class | CSS Value | Description |
| :--- | :--- | :--- |
| `.transition-all` | `all` | Transitions all properties |
| `.transition-colors` | `color`, `background-color`, `border-color`, `outline-color`, `text-decoration-color`, `fill`, `stroke`, gradient stops | Transitions color-related properties |
| `.transition-opacity` | `opacity` | Transitions opacity only |
| `.transition-shadow` | `box-shadow` | Transitions shadow only |
| `.transition-transform`| `transform`, `translate`, `scale`, `rotate` | Transitions transform properties |
| `.transition-none` | `none` | Removes transitions |

**Custom Transition:**
| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.transition` | `<div class="transition" style="--transition: opacity">` | `--transition` |

### transition-timing-function

Sets the speed curve of the transition.

| Class | CSS Value | Variable |
| :--- | :--- | :--- |
| `.ease` | `var(--ease)` | `--ease` |
| `.ease-linear` | `linear` | N/A |
| `.ease-in` | `var(--ease-in)` | N/A |
| `.ease-out` | `var(--ease-out)` | N/A |
| `.ease-in-out` | `var(--ease-in-out)` | N/A |

## Transforms

### backface-visibility

| Class | CSS Value |
| :--- | :--- |
| `.backface-hidden` | `hidden` |
| `.backface-visible` | `visible` |

### perspective

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.perspective` | `<div class="perspective" style="--perspective: 1000px">` | `--perspective` |
| `.perspective-{val}` | `<div class="perspective-dramatic">` (dramatic, near, normal, midrange, distant, none) | N/A |

### perspective-origin

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.perspective-origin` | `<div class="perspective-origin" style="--perspective-origin: center">` | `--perspective-origin` |

### rotate

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.rotate` | `<div class="rotate" style="--rotate: 45deg">` | `--rotate` |
| `.rotate-x` | `<div class="rotate-x" style="--rotate-x: 180deg">` | `--rotate-x` |
| `.rotate-y` | `<div class="rotate-y" style="--rotate-y: 180deg">` | `--rotate-y` |
| `.rotate-z` | `<div class="rotate-z" style="--rotate-z: 90deg">` | `--rotate-z` |

### scale

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.scale` | `<div class="scale" style="--scale: 1.1">` | `--scale` (X & Y) |
| `.scale-x` | `<div class="scale-x" style="--scale-x: 1.1">` | `--scale-x` |
| `.scale-y` | `<div class="scale-y" style="--scale-y: 1.1">` | `--scale-y` |
| `.scale-z` | `<div class="scale-z" style="--scale-z: 1.1">` | `--scale-z` |

### skew

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.skew` | `<div class="skew" style="--skew: 10deg">` | `--skew` (X & Y) |
| `.skew-x` | `<div class="skew-x" style="--skew-x: 10deg">` | `--skew-x` |
| `.skew-y` | `<div class="skew-y" style="--skew-y: 10deg">` | `--skew-y` |

### transform

| Class | Usage Example | Variable | Description |
| :--- | :--- | :--- | :--- |
| `.transform` | `<div class="transform" style="--transform: scale(1.5)">` | `--transform` | Custom transform string |
| `.transform-none`| `<div class="transform-none">` | N/A | Resets transform |
| `.transform-gpu` | `<div class="transform-gpu">` | N/A | Forces GPU acceleration (translateZ) |
| `.transform-cpu` | `<div class="transform-cpu">` | N/A | Forces CPU processing |

### transform-origin

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.origin` | `<div class="origin" style="--origin: top left">` | `--origin` |

### transform-style

| Class | CSS Value |
| :--- | :--- |
| `.transform-3d` | `preserve-3d` |
| `.transform-flat` | `flat` |

### translate

**Note:** Translate utilities are **Scaled** (multiplied by spacing unit). Use `[]` for raw values.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.translate` | `<div class="translate" style="--translate: 4">` | `--translate` (X & Y) |
| `.[translate]` | `<div class="[translate]" style="--translate: 50%">` | `--translate` |
| `.translate-x` | `<div class="translate-x" style="--translate-x: 4">` | `--translate-x` |
| `.translate-y` | `<div class="translate-y" style="--translate-y: 4">` | `--translate-y` |
| `.translate-z` | `<div class="translate-z" style="--translate-z: 4">` | `--translate-z` |

## Interactivity

### accent-color

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.accent` | `<input class="accent" style="--accent: red">` | `--accent` |
| `.accent/o` | `<input class="accent/o" style="--accent: red; --accent-o: 0.5">` | `--accent`, `--accent-o` |
| `.dark:accent` | `<input class="dark:accent" style="--dark-accent: blue">` | `--dark-accent` |

### appearance

| Class | CSS Value |
| :--- | :--- |
| `.appearance-none` | `none` |
| `.appearance-auto` | `auto` |

### caret-color

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.caret` | `<input class="caret" style="--caret: #000">` | `--caret` |

### color-scheme

| Class | CSS Value |
| :--- | :--- |
| `.scheme-normal` | `normal` |
| `.scheme-dark` | `.dark` |
| `.scheme-light` | `light` |
| `.scheme-light-dark` | `light dark` |

### cursor

**Value-Driven**
| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.cursor` | `<div class="cursor" style="--cursor: pointer">` | `--cursor` |

**Absolute**
| Class Pattern | Options |
| :--- | :--- |
| `.cursor-{val}` | auto, default, pointer, wait, text, move, help, not-allowed, none, context-menu, progress, cell, crosshair, vertical-text, alias, copy, no-drop, grab, grabbing, all-scroll, col-resize, row-resize, n-resize, e-resize, s-resize, w-resize, ne-resize, nw-resize, se-resize, sw-resize, ew-resize, ns-resize, nesw-resize, nwse-resize, zoom-in, zoom-out |

### field-sizing

| Class | CSS Value |
| :--- | :--- |
| `.field-sizing-fixed` | `fixed` |
| `.field-sizing-content` | `content` |

### pointer-events

| Class | CSS Value |
| :--- | :--- |
| `.pointer-events-auto` | `auto` |
| `.pointer-events-none` | `none` |

### resize

| Class | CSS Value |
| :--- | :--- |
| `.resize` | `both` |
| `.resize-x` | `horizontal` |
| `.resize-y` | `vertical` |
| `.resize-none` | `none` |

### scroll-behavior

| Class | CSS Value |
| :--- | :--- |
| `.scroll-auto` | `auto` |
| `.scroll-smooth` | `smooth` |

### scroll-margin

**Note:** Scroll Margin is **Scaled** (multiplied by spacing unit).

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.scroll-m` | `<div class="scroll-m" style="--scroll-m: 4">` | `--scroll-m` |

### scroll-padding

**Note:** Scroll Padding is **Scaled** (multiplied by spacing unit).

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.scroll-p` | `<div class="scroll-p" style="--scroll-p: 4">` | `--scroll-p` |

### scroll-snap-align

| Class | CSS Value |
| :--- | :--- |
| `.snap-start` | `start` |
| `.snap-end` | `end` |
| `.snap-center` | `center` |
| `.snap-align-none` | `none` |

### scroll-snap-stop

| Class | CSS Value |
| :--- | :--- |
| `.snap-normal` | `normal` |
| `.snap-always` | `always` |

### scroll-snap-type

| Class | CSS Value |
| :--- | :--- |
| `.snap-none` | `none` |
| `.snap-x` | `x` (Horizontal) |
| `.snap-y` | `y` (Vertical) |
| `.snap-both` | `both` |
| `.snap-mandatory` | `mandatory` |
| `.snap-proximity` | `proximity` |

### touch-action

| Class Pattern | Options |
| :--- | :--- |
| `.touch-{action}` | auto, none, pan-x, pan-y, pinch-zoom, manipulation |

### user-select

| Class | CSS Value |
| :--- | :--- |
| `.user-select-none` | `none` |
| `.user-select-text` | `text` |
| `.user-select-all` | `all` |
| `.user-select-auto` | `auto` |

### will-change

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.will-change` | `<div class="will-change" style="--will-change: transform">` | `--will-change` |

## SVG

### fill

Sets the fill color of the SVG. Supports **Opacity** (`/o`) and **Dark Mode** (`dark:`).

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.fill` | `<svg class="fill" style="--fill: red">` | `--fill` |
| `.fill/o` | `<svg class="fill/o" style="--fill: red; --fill-o: 0.5">` | `--fill`, `--fill-o` |
| `.dark:fill` | `<svg class="dark:fill" style="--dark-fill: white">` | `--dark-fill` |

### stroke

Sets the stroke color of the SVG. Supports **Opacity** (`/o`) and **Dark Mode** (`dark:`).

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.stroke` | `<svg class="stroke" style="--stroke: blue">` | `--stroke` |
| `.stroke/o` | `<svg class="stroke/o" style="--stroke: blue; --stroke-o: 0.5">` | `--stroke`, `--stroke-o` |
| `.dark:stroke` | `<svg class="dark:stroke" style="--dark-stroke: white">` | `--dark-stroke` |

### stroke-width

Sets the stroke width of the SVG.

| Class | Usage Example | Variable |
| :--- | :--- | :--- |
| `.stroke-w` | `<svg class="stroke-w" style="--stroke-w: 2px">` | `--stroke-w` |

## Accessibility

### forced-color-adjust

Useful for opting out of forced colors mode (e.g., Windows High Contrast mode).

| Class | CSS Value |
| :--- | :--- |
| `.forced-color-adjust-auto` | `auto` |
| `.forced-color-adjust-none` | `none` |