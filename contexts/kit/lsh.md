# Local Storage Head (Theme Switcher)

## Usage

The LSH (Local Storage Head) component provides an easy way to manage theme switching and style preferences. It stores selections in `localStorage` under the key `__FRANKEN__` and applies them as classes to the `<html>` element. Multiple instances automatically stay in sync.

To implement LSH, you'll need to make some modifications to your HTML code to allow users to change their preferences.

**1.** Start by setting a default theme and mode in the `<head>` tag of your HTML by checking the user's preference:

```html
<script>
  const htmlElement = document.documentElement;

  const __FRANKEN__ = JSON.parse(localStorage.getItem("__FRANKEN__") || "{}");

  if (
    __FRANKEN__.mode === "dark" ||
    (!__FRANKEN__.mode &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  /* below is just an example, feel free to implement your own */
  htmlElement.classList.add(__FRANKEN__.layout || "uk-layout-small");
  htmlElement.classList.add(__FRANKEN__.ff || "uk-ff-a");
</script>
```

This will first check if a user previously set the theme color preference manually using `localStorage`, and as a fallback, it will either set dark or light mode based on the browser's color scheme preference.

<span class="uk-label uk-label-primary">Note</span> You can replace `uk-[group]-[value]` with anything you want as the default.

**2\.** If you are using [Frankenstyle](/docs/latest/style/introduction), ensure that your `<body>` tag includes the classes `bg` and `color` to apply the proper background and text colors that automatically adapt to the currently set theme.

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body class="bg color" style="--bg: var(--uk-bg); --color: var(--uk-bg-f)">
    <!-- ... -->
  </body>
</html>
```

<span class="uk-label uk-label-primary">Note</span> If you are using a different
CSS framework, such as Tailwind CSS, ensure that you implement your own
background and foreground colors.

**3\.** You can now use any instance of `<uk-lsh>` component anywhere in your HTML.

## Theme toggle

Enable toggle mode to create a button that switches between light and dark modes:

```html
<style>
  @layer base {
    .dark\:display-hidden:where(.dark, .dark *) {
      display: none;
    }

    .dark\:display-inline-block:where(.dark, .dark *) {
      display: inline-block;
    }

    .dark-slide-icon {
      transition:
        transform 0.3s ease,
        opacity 0.3s ease,
        visibility 0.3s ease;
      overflow: hidden;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .dark-slide-sun {
      transform: translate(-50%, -100%);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .dark-slide-moon {
      transform: translate(-50%, 0);
      opacity: 1;
      visibility: visible;
    }

    .dark\:dark-slide-moon:where(.dark, .dark *) {
      transform: translate(-50%, 100%);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .dark\:dark-slide-sun:where(.dark, .dark *) {
      transform: translate(-50%, 0);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
  }
</style>

<uk-lsh
  class="size"
  style="--size: 8"
  toggle
  group="mode"
  cls="uk-button uk-button-icon uk-button-secondary uk-button-small relative"
>
  <template data-fn="template">
    <uk-icon
      class="dark-slide-icon dark-slide-moon dark:dark-slide-moon"
      icon="moon"
    >
    </uk-icon>
    <uk-icon
      class="dark-slide-icon dark-slide-sun dark:dark-slide-sun"
      icon="sun"
    >
    </uk-icon>
  </template>
</uk-lsh>
```

When `toggle` is enabled with `group="mode"`, the button automatically switches between light and dark modes, ignoring the `value` attribute.

## Configuration groups

The component supports multiple configuration groups beyond just light/dark mode:

### Mode group (special behavior)

The `mode` group has special handling:

- `value="light"` removes the `dark` class from `<html>`
- `value="dark"` adds the `dark` class to `<html>`

```html
<uk-lsh group="mode" value="light">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>

<uk-lsh group="mode" value="dark">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
```

### Custom groups

Other groups apply class names directly to the `<html>` element:

```html
<!-- Color themes -->
<uk-lsh group="color" value="uk-theme-blue">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
<uk-lsh group="color" value="uk-theme-red">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
<uk-lsh group="color" value="uk-theme-green">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>

<!-- Font sizes -->
<uk-lsh group="font" value="uk-font-small">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
<uk-lsh group="font" value="uk-font-medium">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
<uk-lsh group="font" value="uk-font-large">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
```

When switching within a group, the component automatically removes the previous class with **the same** prefix.

## Prevent auto-update

By default, all instances sync when one changes. Use `prevent-autoupdate` to create standalone buttons:

```html
<uk-lsh group="mode" value="dark" prevent-autoupdate>
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
```

## Programmatic control

Listen to events to respond to theme changes:

```html
<uk-lsh id="theme-toggle" toggle group="mode">
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>

<script>
  const toggle = document.getElementById("theme-toggle");

  // Before change (cancelable)
  toggle.addEventListener("uk-lsh:before-change", (e) => {
    console.log("About to change:", e.detail);
    // e.preventDefault(); // Cancel the change
  });

  // After change
  toggle.addEventListener("uk-lsh:change", (e) => {
    console.log("Changed:", e.detail);
    // e.detail.group - The configuration group
    // e.detail.value - The new value
    // e.detail.previousValue - The old value
    // e.detail.config - Complete configuration object
  });
</script>
```

## Local storage structure

The component stores configuration in localStorage under the key `__FRANKEN__`:

```json
{
  "mode": "dark",
  "color": "uk-theme-blue",
  "font": "uk-font-medium"
}
```

## Internationalization

The LSH component supports internationalization through multiple methods with the following priority order (highest to lowest):

- **Component-level i18n** (via `i18n` attribute or script tag)
- **Global component-specific namespace** (via `<script id="uk-i18n">`)
- **Default values**

### Using the i18n attribute

```html
<uk-lsh
  toggle
  group="mode"
  i18n='{"aria-label": "Cambiar tema", "switch-to-dark": "Cambiar a modo oscuro", "switch-to-light": "Cambiar a modo claro"}'
>
</uk-lsh>
```

### Using a configuration script

```html
<uk-lsh toggle group="mode">
  <script type="application/json" data-fn="config">
    {
      "i18n": {
        "aria-label": "Thème bascule",
        "switch-to-dark": "Passer en mode sombre",
        "switch-to-light": "Passer en mode clair"
      }
    }
  </script>
  
  <template data-fn="template">🌓</template>
</uk-lsh>
```

### Available i18n options

| Key               | Default              | Description                                            |
| ----------------- | -------------------- | ------------------------------------------------------ |
| `aria-label`      | Toggle theme         | ARIA label for the button                              |
| `active-label`    | Active               | Label appended to ARIA when button is active           |
| `switch-to-dark`  | Switch to dark mode  | ARIA description when switching to dark (toggle mode)  |
| `switch-to-light` | Switch to light mode | ARIA description when switching to light (toggle mode) |

## Custom classes

The LSH component supports custom CSS classes through the `cls` attribute.

### Using simple string format

```html
<uk-lsh cls="my-theme-button" toggle group="mode">
  <template data-fn="template">
      <!-- -->
  </template>
</uk-lsh>
```

### Using JSON object format

```html
<uk-lsh
  cls='{"button": "uk-button uk-button-primary uk-lsh"}'
  toggle
  group="mode"
>
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
```

### Available cls target

| Target   | Description        |
| -------- | ------------------ |
| `button` | The button element |

## Custom inline styles

The LSH component supports custom inline styles through the `stl` attribute.

### Example

```html
<uk-lsh
  stl='{"button": "padding: 0.5rem 1rem; border-radius: 8px;"}'
  toggle
  group="mode"
>
  <template data-fn="template">
    <!-- -->
  </template>
</uk-lsh>
```

## Attributes

| Name                     | Type    | Default | Description                                                             |
| ------------------------ | ------- | ------- | ----------------------------------------------------------------------- |
| `value`                  | String  |         | The specific theme value to apply (e.g., "dark", "uk-theme-blue")       |
| `group`                  | String  |         | Configuration group (e.g., "mode", "color", "font")                     |
| `toggle`                 | Boolean | false   | Enables toggle behavior for mode switching (ignores value attribute)    |
| `prevent-autoupdate`     | Boolean | false   | Prevents this instance from syncing with other instances                |
| `cls`                    | String  |         | Custom CSS classes for the button                                       |
| `stl`                    | String  |         | Custom inline styles for the button                                     |
| `i18n`                   | String  |         | Internationalization strings as JSON object or via configuration script |
| `force-prevent-rerender` | Boolean | false   | Prevents component rerendering (useful for HTMX or SPA scenarios)       |

## Events

| Name                   | Description                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------ |
| `uk-lsh:before-change` | Fired before theme change (cancelable). Event detail contains `{group, value, previousValue, config}`. |
| `uk-lsh:change`        | Fired after theme change. Event detail contains `{group, value, previousValue, config}`.               |