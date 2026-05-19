# Theming

FrankenstyleKit uses a simple background and foreground convention for colors. Take a look at the following CSS variables:

```css
--uk-primary: oklch(27.4% 0.006 286.033);
--uk-primary-f: oklch(98.5% 0 0);
```

The background color of the following component will be `oklch(27.4% 0.006 286.033)` and the foreground color will be `oklch(98.5% 0 0)`.

```html
<div class="bg color" style="--bg: var(--uk-primary); --color: var(--uk-primary-f);"></div>
```

## List of variables

Here's the list of variables available for customization:

```css
/* Background */
--uk-bg: #fff;
--uk-bg-f: oklch(21% 0.006 285.885);

/* Card */
--uk-card: #fff;
--uk-card-f: oklch(21% 0.006 285.885);

/* Popover/Dropdown */
--uk-drop: #fff;
--uk-drop-f: oklch(21% 0.006 285.885);

/* Primary */
--uk-primary: oklch(27.4% 0.006 286.033);
--uk-primary-f: oklch(98.5% 0 0);

/* Secondary */
--uk-secondary: #000;
--uk-secondary-o: 4%;
--uk-secondary-f: oklch(21% 0.006 285.885);

/* Muted */
--uk-muted: #000;
--uk-muted-o: 4%;
--uk-muted-f: oklch(44.2% 0.017 285.786);

/* Accent */
--uk-accent: #000;
--uk-accent-o: 4%;
--uk-accent-f: oklch(21% 0.006 285.885);

/* Destructive/Danger */
--uk-danger: oklch(63.7% 0.237 25.331);
--uk-danger-f: oklch(50.5% 0.213 27.518);

/* Info */
--uk-info: oklch(62.3% 0.214 259.815);
--uk-info-f: oklch(48.8% 0.243 264.376);

/* Success */
--uk-success: oklch(69.6% 0.17 162.48);
--uk-success-f: oklch(50.8% 0.118 165.612);

/* Warning */
--uk-warning: oklch(76.9% 0.188 70.08);
--uk-warning-f: oklch(55.5% 0.163 48.998);

/* Border & Input */
--uk-border: #000;
--uk-border-o: 10%;
--uk-input: #000;
--uk-input-o: 10%;

/* Focus Ring */
--uk-focus: oklch(70.5% 0.015 286.067);

/* Charts */
--uk-chart-1: oklch(64.6% 0.222 41.116);
--uk-chart-2: oklch(60% 0.118 184.704);
--uk-chart-3: oklch(30.2% 0.056 229.695);
--uk-chart-4: oklch(82.8% 0.189 84.429);
--uk-chart-5: oklch(76.9% 0.188 70.08);
```

## Adding new colors

To add new colors, simply add them to your main CSS file.

```css
:root {
  --uk-custom: oklch(0.84 0.16 84);
  --uk-custom-f: oklch(0.28 0.07 46);
}
 
.dark {
  --uk-custom: oklch(0.41 0.11 46);
  --uk-custom-f: oklch(0.99 0.02 95);
}

/* For Frankenstyle or vanilla CSS */
@layer theme {
  --color-custom: var(--uk-custom);
  --color-custom-f: var(--uk-custom-f);
}

/* If you are using Tailwind CSS, use this instead */
/* @theme {
  --color-custom: var(--uk-custom);
  --color-custom-foreground: var(--uk-custom-f);
} */
```

You can now use it via utility class in your components.

```html
<!-- Frankenstyle (direct) -->
<div class="bg color" style="--bg: var(--uk-custom); --color: var(--uk-custom-f);"></div>

<!-- Frankenstyle (proxy) -->
<div class="bg color" style="--bg: var(--color-custom); --color: var(--color-custom-f);"></div>

<!-- Tailwind CSS -->
<div class="bg-custom text-custom-f"></div>
```

## Custom palette

**1\.** Start by [picking your desired color](/#fs) and use that to assign values to the `--uk-primary`, `--uk-primary-f`, and `--uk-focus` tokens. These tokens represent your main theme color, its contrasting foreground color, and the focus color. 

**2\.** Use the CSS snippet below as your starting point and replace the * with your theme name (e.g. indigo, cyan, fuchsia, etc.). You only need to update the values for `--uk-primary`, `--uk-primary-f`, and `--uk-focus` for both light and dark modes, but you're free to customize everything else if needed.

```css
.uk-theme-emerald {
  --uk-primary: /* oklch(...) */;
  --uk-primary-f: /* oklch(...) */;
  --uk-focus: /* oklch(...) */;
}

.dark.uk-theme-emerald {
  --uk-primary: /* oklch(...) */;
  --uk-primary-f: /* oklch(...) */;
  --uk-focus: /* oklch(...) */;
}
```

## Setting the default palette

To set your newly added palette as the default, simply update the script in your `<head>` tag to reference the new theme name, like so:

```html
<script>
  const htmlElement = document.documentElement;

  const __FRANKEN__ = JSON.parse(
    localStorage.getItem("__FRANKEN__") || "{}",
  );

  if (
    __FRANKEN__.mode === "dark" ||
    (!__FRANKEN__.mode &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  htmlElement.classList.add(__FRANKEN__.layout || "uk-layout-small");
  htmlElement.classList.add(__FRANKEN__.ff || "uk-ff-a");
</script>
```

## Adding to LSH

To register your newly added palette with the [LSH](/docs/latest/kit/lsh#custom-groups) component, please refer to the corresponding documentation or guide for step-by-step instructions on how to integrate it.