# Animation

## Usage

Add one of the `.uk-animation-*` classes to any element. The animation is shown when the class is added, so usually immediately on page load. To show the animation at another point, for example when the element enters the viewport, you would add the class using JavaScript — with the [Scrollspy component](/docs/latest/kit/scrollspy) for instance. This is what happens in many of UIkit's components that make use of animations. All animations themselves are implemented with CSS, so they do not require JavaScript to play.

| Class                                                                                                                                                    | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `.uk-animation-fade`                                                                                                                                     | The element fades in.                                                                                                                  |
| `.uk-animation-scale-up`<br/> `.uk-animation-scale-down`                                                                                                 | The element fades in and scales up or down.                                                                                            |
| `.uk-animation-slide-top`<br/> `.uk-animation-slide-bottom`<br/> `.uk-animation-slide-left`<br/> `.uk-animation-slide-right`                             | The element fades and slides in from the top, bottom, left or right by its own height or width.                                        |
| `.uk-animation-slide-top-small`<br/> `.uk-animation-slide-bottom-small`<br/> `.uk-animation-slide-left-small`<br/> `.uk-animation-slide-right-small`     | The element fades and slides in from the top, bottom, left or right with a smaller distance which is specified by a fixed pixel value. |
| `.uk-animation-slide-top-medium`<br/> `.uk-animation-slide-bottom-medium`<br/> `.uk-animation-slide-left-medium`<br/> `.uk-animation-slide-right-medium` | The element fades and slides in from the top, bottom, left or right with a medium distance which is specified by a fixed pixel value.  |
| `.uk-animation-kenburns`                                                                                                                                 | The element scales very slowly up without fading in.                                                                                   |
| `.uk-animation-shake`                                                                                                                                    | The element shakes.                                                                                                                    |
| `.uk-animation-stroke`                                                                                                                                   | The SVG element strokes are drawn.                                                                                                     |

To toggle an animation on hover or focus, add the `.uk-animation-toggle` class to a parent element. Also add `tab to make the animation focusable through keyboard navigation and on touch devices.

```html
<div class="uk-animation-toggle" tabindex="0">
  <div class="uk-animation-fade"></div>
</div>
```

```html
<div class="display-grid grid-cols gap" style="--grid-cols: 2; --gap: 4">
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-fade bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Fade</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-scale-up bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Scale Up</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-scale-down bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Scale Down</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-shake bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Shake</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-left bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Left</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-top bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Top</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-bottom bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Bottom</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-right bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Right</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-left-small bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Left Small</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-top-small bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Top Small</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-bottom-small bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Bottom Small</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-right-small bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Right Small</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-left-medium bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Left Medium</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-top-medium bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Top Medium</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-bottom-medium bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Bottom Medium</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-right-medium bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Right Medium</p>
    </div>
  </div>
</div>
```

## Reverse modifier

By default, all animations are incoming. To reverse any animation, add the `.uk-animation-reverse` class.

```html
<div class="uk-animation-fade uk-animation-reverse"></div>
```

```html
<div class="display-grid grid-cols gap" style="--grid-cols: 2; --gap: 4">
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-fade uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Fade</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-scale-up uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Scale Up</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-scale-down uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Scale Down</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-shake uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Shake</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-left uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Left</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-top uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Top</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-bottom uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Bottom</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-right uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Right</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-left-small uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Left Small</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-top-small uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Top Small</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-bottom-small uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Bottom Small</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-right-small uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Right Small</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-left-medium uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Left Medium</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-top-medium uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Top Medium</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-bottom-medium uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Bottom Medium</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-slide-right-medium uk-animation-reverse bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Right Medium</p>
    </div>
  </div>
</div>
```

## Fast modifier

To play animations at a faster speed, add the `.uk-animation-fast` class to the element.

```html
<div class="uk-animation-fade uk-animation-fast"></div>
```

```html
<div class="display-grid grid-cols gap" style="--grid-cols: 2; --gap: 4">
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-fade uk-animation-fast bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Fade</p>
    </div>
  </div>
</div>
```

## Origin modifiers

By default, scaling animations originate from the center. To modify this behavior, add one of the `.uk-transform-origin-*` classes.

```html
<div class="uk-animation-scale-up uk-transform-origin-bottom-right"></div>
```

```html
<div class="display-grid gap md:grid-cols" style="--gap: 4; --md-grid-cols: 3">
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-scale-up uk-transform-origin-bottom-right bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Bottom Right</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-scale-up uk-transform-origin-top-center bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Top Center</p>
    </div>
  </div>
  <div class="uk-animation-toggle" tabindex="0">
    <div
      class="uk-animation-scale-up uk-transform-origin-bottom-center bg/o p color"
      style="
        --bg: var(--uk-muted);
        --bg-o: var(--uk-muted-o);
        --p: 4;
        --color: var(--uk-muted-f);
      "
    >
      <p class="text-center">Bottom Center</p>
    </div>
  </div>
</div>
```

## Ken Burns

To add a simple Ken Burns effect, add the `.uk-animation-kenburns` class to any image. You can also apply the `.uk-animation-reverse` or one of the `.uk-transform-origin-*` classes to modify the effect.

```html
<img class="uk-animation-kenburns" src="" width="" height="" alt="" />
```

By default, the animation starts on page load. In this example we used the [Scrollspy](/docs/latest/kit/scrollspy) component, to toggle the effect when the image enters the view.

```html
<div class="display-grid gap md:grid-cols" style="--gap: 4; --md-grid-cols: 2">
  <div>
    <div class="uk-overflow-hidden">
      <img
        src="/images/dark.jpg"
        width="1800"
        height="1200"
        alt="Example image"
        data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
      />
    </div>
  </div>
  <div>
    <div class="uk-overflow-hidden">
      <img
        src="/images/dark.jpg"
        width="1800"
        height="1200"
        alt="Example image"
        class="uk-animation-reverse uk-transform-origin-top-right"
        data-uk-scrollspy="cls: uk-animation-kenburns; repeat: true"
      />
    </div>
  </div>
</div>
```

## SVG Strokes

The Animation component can be used to animate SVG strokes. The effect looks like the SVG strokes are drawn before your eyes. The SVG image has to be injected into the markup as an inline SVG. This can be done manually or using the [SVG component](/docs/latest/kit/svg).

The following example shows how to add the inline SVG manually. Since you have to know the exact length of the stroke, UIkit requires you to set the length in the custom property `--uk-animation-stroke`. In this example the stroke length is `46`.

```html
<svg
  class="uk-animation-stroke"
  style="--uk-animation-stroke: 46;"
  viewBox="0 0 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <path fill="none" stroke="#000" stroke-width="1" d="" />
</svg>
```

A much easier way is to use the [SVG component](/docs/latest/kit/svg) by adding `uk-svg="stroke-animation: true"` to the image element. It will calculate the stroke length and add the `--uk-animation-stroke` custom property automatically.

```html
<img src="" width="" height="" alt="" data-uk-svg="stroke-animation: true" />
```

```html
<div class="display-grid gap md:grid-cols" style="--gap: 4; --md-grid-cols: 2">
  <div class="uk-animation-toggle flex justify-center" tabindex="0">
    <img
      class="uk-animation-stroke"
      src="/images/strokes.svg"
      width="250"
      height="250"
      alt=""
      data-uk-svg="stroke-animation: true"
    />
  </div>
  <div class="uk-animation-toggle flex justify-center" tabindex="0">
    <img
      class="uk-animation-stroke uk-animation-reverse"
      src="/images/strokes.svg"
      width="250"
      height="250"
      alt=""
      data-uk-svg="stroke-animation: true"
    />
  </div>
</div>
```