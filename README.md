> If you’re already happy with Tailwind CSS, there’s no reason for you to be here.

# Frankenstyle

Frankenstyle is a no-build, value-driven, fully responsive, utility-first CSS framework. It’s designed to be lightweight, production-ready, and to strike a balance between developer ergonomics and build size.

⚠️ **Early development project** — expect changes and rough edges. Feedback and testing are welcome!

📖 **Documentation is coming soon** — for now, explore the examples and notes below.

## Installation

Frankenstyle can be used via CDN or installed locally.

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
@import "frankenstyle/css/frankenstyle.css";
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

Interactive states (e.g., hover) are generated on demand. Mark an element with `data-fs-interactive`, and the runtime will generate the necessary pseudo-state CSS.

```html
<button
    type="button"
    class="color bg dark:bg bg:hover dark:bg:hover font-medium rounded-lg text-sm px py"
    style="
        --color: var(--color-white);
        --bg: var(--color-blue-700);
        --dark-bg: var(--color-pink-600);
        --bg-hover: var(--color-blue-800);
        --dark-bg-hover: var(--color-pink-700);
        --px: 5;
        --py: 2.5;
    "
    data-fs-interactive
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

## License

Licensed under the [MIT license](https://github.com/franken-ui/ui/blob/master/LICENSE.md).
