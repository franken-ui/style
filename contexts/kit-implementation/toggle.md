# Toggle

## Usage

To apply this component, just add the `data-uk-toggle="target: #ID"` attribute to a `<button>` or `<a>` element. You can use any selector with the toggle attribute.

The toggle can be used to add or remove a class or attribute from the item. By default, it adds the `hidden` attribute to hide the element.

```html
<button data-uk-toggle="target: #my-id" type="button"></button>
<p id="my-id"></p>
```

```html
<div>
  <button
    class="uk-button uk-button-default"
    type="button"
    data-uk-toggle="target: #toggle-usage"
  >
    Toggle
  </button>
  <div class="uk-card uk-card-body mt" style="--mt: 2" id="toggle-usage">
    What's up?
  </div>
</div>
```

## Multiple items

You can also toggle multiple items at the same time. Just add the `target: SELECTOR` option to the `data-uk-toggle` attribute and use a selector that applies to all items.

```html
<button type="button" data-uk-toggle="target: .my-class"></button>
<p class="my-class"></p>
<p class="my-class"></p>
```

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: .toggle"
>
  Toggle
</button>
<div class="toggle uk-card uk-card-body mt" style="--mt: 2">Hello!</div>
<div class="toggle uk-card uk-card-body mt" style="--mt: 2" hidden>
  Bazinga!
</div>
```

<span class="uk-label uk-label-primary">Note</span> In this example we added the
`hidden` attribute to one of the items, so that only the other item will be
shown. The toggle will switch visible states between both elements.

## Custom class

If you don't want to toggle the `hidden` attribute, you can also toggle a custom class. Just add the `cls: CLASS` option to the `data-uk-toggle` attribute. In this example we used the `.uk-card-primary` class to switch between different card styles.

```html
<button
  type="button"
  data-uk-toggle="target: #my-id; cls: uk-card-primary"
></button>
<p id="my-id" class="uk-card"></p>
```

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #toggle-custom; cls: uk-card-primary"
>
  Toggle
</button>
<div id="toggle-custom" class="uk-card uk-card-body mt" style="--mt: 2">
  Custom class
</div>
```

## Animations

The Toggle component allows you to add animations to items when toggling between them. Just add one of the `.uk-animation-*` classes from the [Animation component](/docs/latest/kit/animation) to the animation parameter. The class will be applied to the in as well as the out animation. If you prefer a different animation, just add another class.

```html
<button
  type="button"
  data-uk-toggle="target: #my-id; animation: uk-animation-fade"
></button>
<p id="my-id"></p>
```

```html
<button
  href="#toggle-animation"
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #toggle-animation; animation: uk-animation-fade"
>
  Toggle
</button>
<div id="toggle-animation" class="uk-card uk-card-body mt" style="--mt: 2">
  Animation
</div>
```

### Multiple animations

You can also apply multiple animations from the [Animation component](/docs/latest/kit/animation). That way you can add different in and out animations.

```html
<button
  type="button"
  data-uk-toggle="target: #my-id; animation: uk-animation-slide-left, uk-animation-slide-bottom"
></button>
<p id="my-id"></p>
```

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #toggle-animation-multiple; animation:  uk-animation-slide-left, uk-animation-slide-bottom"
>
  Toggle
</button>
<div
  id="toggle-animation-multiple"
  class="uk-card uk-card-body mt"
  style="--mt: 2"
>
  Animation
</div>
```

### Queued animations

When toggling multiple items with an animation, you might want to wait until the first animation has run through before animating the second item. To do so, just add the `queued: true` option to the `data-uk-toggle` attribute.

```html
<button
  type="button"
  data-uk-toggle="target: .my-class; animation: uk-animation-fade; queued: true"
></button>
<p class="my-class"></p>
<p class="my-class"></p>
```

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: .toggle-animation-queued; animation: uk-animation-fade; queued: true; duration: 300"
>
  Toggle
</button>
<p class="toggle-animation-queued uk-card uk-card-body mt" style="--mt: 2">
  Animation
</p>
<p
  class="toggle-animation-queued uk-card uk-card-body uk-card-primary mt"
  style="--mt: 2"
  hidden
>
  Animation
</p>
```

## Modes

A toggle can be triggered in different ways. Just add the `mode` option to the `data-uk-toggle` attribute and apply one of these values.

| Value          | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| `hover`        | The toggle will be triggered on hover.                                           |
| `click `       | The toggle will be triggered on click. This is the default value.                |
| `click, hover` | The toggle will be triggered on click and hover.                                 |
| `media`        | The toggling behavior depends on the viewport width. [More information](#media). |

```html
<button type="button" data-uk-toggle="target: #my-id; mode: hover"></button>
<p id="my-id"></p>
```

```html
<button
  class="uk-button uk-button-default"
  type="button"
  data-uk-toggle="target: #toggle-hover; mode: hover"
>
  Hover
</button>
<div class="uk-card uk-card-body mt" style="--mt: 2" id="toggle-hover">
  What's up?
</div>
```

### Media

When using the `media` mode, the `media` option with one of possible values has to be added as well. For example, add a number in pixels, e.g. `640`, or a breakpoint, e.g. `@s`, `@m`, `@l` or `@xl`. Without the `target` option, the toggle applies the toggled state to itself. This means it will switch between the different states that are defined in the `cls` option depending on the viewport width that it is displayed on.

```html
<!-- The primary modifier will only be applied on large screens -->

<div
  class="uk-card"
  data-uk-toggle="cls: uk-card-primary; mode: media; media: @l"
></div>
```

```html
<div
  class="uk-card uk-card-body max-w-sm"
  data-uk-toggle="cls: uk-card-primary; mode: media; media: @l"
>
  Primary on large screens
</div>
```

<span class="uk-label uk-label-primary">Note</span> The initial toggle state
depends on the `cls` option. It is either the first given class in the space
separated list or if set to `false`, the `hidden` attribute. If more than one
class is given, the other classes are simply being toggled on state change.

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option      | Value          | Default | Description                                                                                                                                                                       |
| ----------- | -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target`    | String         | `false` | CSS selector of the element(s) to toggle.                                                                                                                                         |
| `mode`      | String         | `click` | Comma-separated list of trigger behaviour modes. (`hover`, `click`, `media`)                                                                                                      |
| `cls`       | String         | `false` | The class that is being toggled. Defaults to the `hidden` attribute.                                                                                                              |
| `media`     | Number, String | `false` | In media mode, the breakpoint that triggers the toggle - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)). |
| `animation` | String         | `false` | Space-separated names of [animations](/docs/latest/kit/animation). Comma-separated for animation out.                                                                                        |
| `duration`  | Number         | `200`   | Animation duration in milliseconds.                                                                                                                                               |
| `queued`    | Boolean        | `true`  | Toggle the targets successively.                                                                                                                                                  |

`target` is the _Primary_ option and its key may be omitted, if it's the only option in the attribute value.

```html
<span data-uk-toggle=".my-class"></span>
```

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
UIkit.toggle(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name         | Description                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------- |
| `beforeshow` | Fires before an item is shown. Can prevent showing by calling `preventDefault()` on the event. |
| `show`       | Fires after an item is shown.                                                                  |
| `shown`      | Fires after the item's show animation has completed.                                           |
| `beforehide` | Fires before an item is hidden. Can prevent hiding by calling `preventDefault()` on the event. |
| `hide`       | Fires after an item's hide animation has started.                                              |
| `hidden`     | Fires after an item is hidden.                                                                 |

### Methods

The following methods are available for the component:

#### Toggle

```js
UIkit.toggle(element).toggle();
```

Toggles the Toggle's target.

## Accessibility

The Toggle component automatically sets the appropriate WAI-ARIA roles, states and properties.

- The _toggle_ element has the `button` role if an `<a>` element is used.
- To implement the [Disclosure (Show/Hide) design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/), manually set an `aria-expanded` attribute. It will automatically update when toggling.