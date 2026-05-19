# Sticky

## Usage

To create an element that remains at the top of the viewport when scrolling down the site, add the `data-uk-sticky` attribute to that element.

```html
<div data-uk-sticky></div>
```

```html
<div class="uk-placeholder h" style="--h: 80">
  <div
    class="uk-position-z-index bg/o color p text-center"
    style="
      --bg: var(--uk-muted);
      --bg-o: var(--uk-muted-o);
      --color: var(--uk-muted-f);
      --p: 4;
    "
    data-uk-sticky="end: !.h; offset: 80"
  >
    Stick to the top
  </div>
</div>
```

<span class="uk-label uk-label-primary">Note</span> Example elements on this
page are only sticky until you scroll down to the next heading and disappear
afterwards. This was done so as not to clutter your screen with all variations
of sticky containers.

## Position

By default, the element sticks to the top of the viewport. You can set the `position: bottom` option to stick it to the bottom of the viewport.

```html
<div data-uk-sticky="position: bottom"></div>
```

```html
<div class="uk-placeholder h" style="--h: 80">
  <div
    class="uk-position-z-index bg/o color p text-center"
    style="
      --bg: var(--uk-muted);
      --bg-o: var(--uk-muted-o);
      --color: var(--uk-muted-f);
      --p: 4;
    "
    data-uk-sticky="position: bottom; end: !.h"
  >
    Stick to the bottom
  </div>
</div>
```

## Start

To apply an offset to when the element should start being sticky, add the `start` option. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the element's top border and viewport's top border intersect. A CSS Selector will set start to the selected element's bottom border and the element's top border.

```html
<!-- Sticks after 200px scrolling -->
<div data-uk-sticky="start: 200"></div>

<!-- Sticks after scrolling the elements height -->
<div data-uk-sticky="start: 100%"></div>

<!-- Sticks after 20vh scrolling -->
<div data-uk-sticky="start: 20vh"></div>

<!-- Sticks after the top of the selected element -->
<div id="my-id">
  <div data-uk-sticky="start: #my-id"></div>
</div>
```

```html
<div class="uk-placeholder h" style="--h: 80">
  <div
    class="display-grid grid-cols gap sm:grid-cols"
    style="--grid-cols: 1; --gap: 4; --sm-grid-cols: 4"
  >
    <div>
      <div
        class="uk-position-z-index bg/o color p text-center"
        style="
          --bg: var(--uk-muted);
          --bg-o: var(--uk-muted-o);
          --color: var(--uk-muted-f);
          --p: 4;
        "
        data-uk-sticky="start: 200; end: !.h; offset: 80"
      >
        200px
      </div>
    </div>
    <div>
      <div
        class="uk-position-z-index bg/o color p text-center"
        style="
          --bg: var(--uk-muted);
          --bg-o: var(--uk-muted-o);
          --color: var(--uk-muted-f);
          --p: 4;
        "
        data-uk-sticky="start: 100%; end: !.h; offset: 80"
      >
        100%
      </div>
    </div>
    <div>
      <div
        class="uk-position-z-index bg/o color p text-center"
        style="
          --bg: var(--uk-muted);
          --bg-o: var(--uk-muted-o);
          --color: var(--uk-muted-f);
          --p: 4;
        "
        data-uk-sticky="start: 20vh; end: !.h; offset: 80"
      >
        20vh
      </div>
    </div>
    <div>
      <div
        class="uk-position-z-index bg/o color p text-center"
        style="
          --bg: var(--uk-muted);
          --bg-o: var(--uk-muted-o);
          --color: var(--uk-muted-f);
          --p: 4;
        "
        data-uk-sticky="start: !.h; end: !.h + div; offset: 80"
      >
        Selector
      </div>
    </div>
  </div>
</div>
<div style="height: 200px"></div>
```

## End

To apply an offset to when the element should stop being sticky, add the `stop` option. The value can be in vh, % and px. It supports basic mathematics operands + and -. A value of `0` means that the element's top border and viewport's top border intersect, which would cause the element not to be sticky at all if start is also set to `0`. A CSS Selector will set the end to the selected element's bottom border and the element's bottom border. `false` will make the element stick until the end of the page. `true` selects the parent element.

```html
<!-- Sticks until 200px scrolling -->
<div data-uk-sticky="end: 200"></div>

<!-- Sticks until scrolling the elements height -->
<div data-uk-sticky="end: 100%"></div>

<!-- Sticks until 20vh scrolling -->
<div data-uk-sticky="end: 20vh"></div>

<!-- Sticks until the bottom of the selected element -->
<div data-uk-sticky="end: #my-id"></div>
<div id="my-id"></div>

<!-- Sticks until the bottom of its parent container -->
<div>
  <div data-uk-sticky="end: true"></div>
</div>
```

```html
<div class="uk-placeholder h" style="--h: 80">
  <div
    class="display-grid grid-cols gap sm:grid-cols"
    style="--grid-cols: 1; --gap: 4; --sm-grid-cols: 4"
  >
    <div>
      <div
        class="uk-position-z-index bg/o color p text-center"
        style="
          --bg: var(--uk-muted);
          --bg-o: var(--uk-muted-o);
          --color: var(--uk-muted-f);
          --p: 4;
        "
        data-uk-sticky="end: 200; offset: 80"
      >
        200px
      </div>
    </div>
    <div>
      <div
        class="uk-position-z-index bg/o color p text-center"
        style="
          --bg: var(--uk-muted);
          --bg-o: var(--uk-muted-o);
          --color: var(--uk-muted-f);
          --p: 4;
        "
        data-uk-sticky="end: 100%; offset: 80"
      >
        100%
      </div>
    </div>
    <div>
      <div
        class="uk-position-z-index bg/o color p text-center"
        style="
          --bg: var(--uk-muted);
          --bg-o: var(--uk-muted-o);
          --color: var(--uk-muted-f);
          --p: 4;
        "
        data-uk-sticky="end: 20vh; offset: 80"
      >
        20vh
      </div>
    </div>
    <div>
      <div
        class="uk-position-z-index bg/o color p text-center"
        style="
          --bg: var(--uk-muted);
          --bg-o: var(--uk-muted-o);
          --color: var(--uk-muted-f);
          --p: 4;
        "
        data-uk-sticky="end: !.h; offset: 80"
      >
        Selector
      </div>
    </div>
  </div>
</div>
```

## Offset

To set an offset to the viewport's edge when the element is sticky, add the `offset` option. The value can be in vh, % and px. It supports basic mathematics operands + and -.

```html
<div data-uk-sticky="offset: 200"></div>
```

```html
<div class="uk-placeholder h" style="--h: 80">
  <div
    class="uk-position-z-index bg/o color p text-center"
    style="
      --bg: var(--uk-muted);
      --bg-o: var(--uk-muted-o);
      --color: var(--uk-muted-f);
      --p: 4;
    "
    data-uk-sticky="end: !.h; offset: 200"
  >
    Stick 200px below the top
  </div>
</div>
```

## Animation

Add an animation from the [Animation component](/docs/latest/kit/animation) in order to have the sticky element reappear smoothly if a start offset is set.

```html
<div data-uk-sticky="start: 200; animation: uk-animation-slide-top"></div>
```

```html
<div class="uk-placeholder h" style="--h: 80">
  <div
    class="uk-position-z-index bg/o color p text-center"
    style="
      --bg: var(--uk-muted);
      --bg-o: var(--uk-muted-o);
      --color: var(--uk-muted-f);
      --p: 4;
    "
    data-uk-sticky="start: 200; end: !.h; offset: 80; animation: uk-animation-slide-top"
  >
    Animation Slide Top
  </div>
</div>
```

## Show On Up

You can make the sticky element show only when scrolling up to save space. Together with an animation, this makes for a very smooth experience.

```html
<div data-uk-sticky="show-on-up: true"></div>
```

```html
<div class="uk-placeholder h" style="--h: 80">
  <div
    class="uk-position-z-index bg/o color p text-center"
    style="
      --bg: var(--uk-muted);
      --bg-o: var(--uk-muted-o);
      --color: var(--uk-muted-f);
      --p: 4;
    "
    data-uk-sticky="end: !.h; offset: 80; show-on-up: true; animation: uk-animation-slide-top"
  >
    Slide in on scroll up
  </div>
</div>
```

## Responsive

It's possible to disable the sticky behavior for different device widths by applying the `media` option to the attribute and adding the appropriate viewport width. Add a number in pixel, for example `media: 640`, or a breakpoint, for example `media: @m`. The element will be sticky from the specified viewport width and upwards, but not below.

```html
<div data-uk-sticky="media: 640"></div>
```

```html
<div class="uk-placeholder h" style="--h: 80">
  <div
    class="uk-position-z-index bg/o color p text-center"
    style="
      --bg: var(--uk-muted);
      --bg-o: var(--uk-muted-o);
      --color: var(--uk-muted-f);
      --p: 4;
    "
    data-uk-sticky="end: !.h; offset: 80; media: 640"
  >
    Only be sticky on viewports larger than 640px.
  </div>
</div>
```

## Oversized Content

Sticky content that is larger than the viewport will scroll down and stick to the bottom of the viewport. Changing the scroll direction will immediately scroll the sticky content up and change the sticky behavior to stick to the top of the viewport. Scrolling down will change the behavior again.

```html
<div
  id="js-oversized"
  class="display-grid grid-cols gap"
  style="--grid-cols: 2; --gap: 4"
>
  <div>
    <div
      class="uk-position-z-index"
      data-uk-sticky="end: #js-oversized; offset: 80"
    >
      <h3 class="uk-h3">Sticky 1</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Sticky 2</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Sticky 3</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Sticky 4</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Sticky 5</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
  <div>
    <div class="uk-background-muted">
      <h3 class="uk-h3">Headline 1</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Headline 2</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Headline 3</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Headline 4</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Headline 5</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Headline 6</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Headline 7</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <h3 class="uk-h3 mt-4">Headline 8</h3>

      <p class="uk-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</div>
```

## Overflow Flip

The `overflow-flip` option disables the sticky behavior for oversized content. Instead, it only flips the sticky position if the element is larger than the viewport. Changing the scroll direction will not affect the sticky position. Together with the `start` and `end` options, two nice sticky effects can be achieved. Cover an element by following content or reveal it by previous content.

```html
<!-- Section will be covered by the next section -->
<div data-uk-sticky="overflow-flip: true; end: 100%"></div>

<div>Some section.</div>

<!-- Section will be revealed by the previous section -->
<div
  data-uk-sticky="position: bottom; overflow-flip: true; start: -100%; end: 0"
></div>
```

```html
<div class="uk-position-relative uk-position-z-index-zero">
  <div
    class="uk-position-z-index-negative display-flex h items-center justify-center bg color text-center"
    style="--h: 80; --bg: var(--uk-primary); --color: var(--uk-primary-f)"
    data-uk-sticky="overflow-flip: true; end: 100%; offset: 80"
  >
    overflow-flip: true<br />
    end: 100%
  </div>
  <div
    class="uk-position-z-index-negative display-flex h items-center justify-center bg/o color text-center"
    style="
      --h: 80;
      --bg: var(--uk-muted);
      --bg-o: var(--uk-muted-o);
      --color: var(--uk-muted-f);
    "
  >
    Cover previous section.<br />Reveal next section.
  </div>
  <div
    class="uk-position-z-index-negative display-flex h items-center justify-center bg color text-center"
    style="--h: 80; --bg: var(--uk-primary); --color: var(--uk-primary-f)"
    data-uk-sticky="position: bottom; overflow-flip: true; start: -100%; end: 0"
  >
    position: bottom<br />
    overflow-flip: true<br />
    start: -100%<br />
    end: 0
  </div>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option           | Value                         | Default     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------- | ----------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `position`       | `top`, `bottom`               | `top`       | The position the element should be stuck to.                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `start`          | Length, CSS Selector          | `0`         | Start offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. The default value of `0` means that the element's top border and viewport's top border intersect. A CSS Selector will set start to the selected element's bottom border and the element's top border.                                                                                                                                                                        |
| `end `           | Length, CSS Selector, Boolean | `false`     | End offset. The value can be in vh, % and px. It supports basic mathematics operands + and -. A value of `0` means that the element's top border and viewport's top border intersect, which would cause the element not to be sticky at all if start is also set to `0`. A CSS Selector will set the end to the selected element's bottom and the element's bottom border. `false` will make the element stick until the end of the page. `true` selects the parent element. |
| `offset `        | Length                        | `0`         | The offset the Sticky should be fixed to. The value can be in vh, % and px. It supports basic mathematics operands + and -.                                                                                                                                                                                                                                                                                                                                                  |
| `overflow-flip ` | Boolean                       | `false`     | Flip the Sticky's position option if the element overflows the viewport and disable overflow scrolling.                                                                                                                                                                                                                                                                                                                                                                      |
| `animation `     | String                        | `false`     | The animation to use when the element becomes sticky.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `cls-active`     | String                        | `uk-active` | The active class.                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `cls-inactive`   | String                        |             | The inactive class.                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `show-on-up`     | Boolean                       | `false`     | Only show sticky element when scrolling up.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `media `         | Number, String                | `false`     | Condition for the active status - a width as integer (e.g. 640) or a breakpoint (e.g. @s, @m, @l, @xl) or any valid media query (e.g. (min-width: 900px)).                                                                                                                                                                                                                                                                                                                   |
| `target-offset ` | `false`, Length               | `false`     | Initially make sure that the Sticky element is not over a referenced element via the page's location hash. The offset defines by how far the element will be above the referenced element. `false` will disable this behavior.                                                                                                                                                                                                                                               |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```javascript
UIkit.sticky(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name       | Description                                  |
| ---------- | -------------------------------------------- |
| `active`   | Fires after the element becomes sticky.      |
| `inactive` | Fires after the element is no longer sticky. |