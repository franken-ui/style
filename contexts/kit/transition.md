# Transition

## Usage

To toggle a transition on hover or focus, add the `.uk-transition-toggle` class to a parent element. Also add `tabindex="0"` to make the animation focusable through keyboard navigation and on touch devices. Add one of the `.uk-transition-*` classes to any child element to apply the actual effect.

| Class                                                                                                                                                           | Description                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `.uk-transition-fade`                                                                                                                                           | Lets the element fade in                                                           |
| `.uk-transition-scale-up`<br /> `.uk-transition-scale-down`                                                                                                     | The element scales up or down.                                                     |
| `.uk-transition-slide-top`<br /> `.uk-transition-slide-bottom`<br /> `.uk-transition-slide-left`<br /> `.uk-transition-slide-right`                             | Lets the element slide in from the top                                             |
| `.uk-transition-slide-top-small`<br /> `.uk-transition-slide-bottom-small`<br /> `.uk-transition-slide-left-small`<br /> `.uk-transition-slide-right-small`     | The element slides in from the top, bottom, left or right with a smaller distance. |
| `.uk-transition-slide-top-medium`<br /> `.uk-transition-slide-bottom-medium`<br /> `.uk-transition-slide-left-medium`<br /> `.uk-transition-slide-right-medium` | The element slides in from the top, bottom, left or right with a medium distance.  |

```html
<div class="uk-transition-toggle" tabindex="0">
  <div class="uk-transition-fade"></div>
</div>
```

```html
<div
  class="display-grid grid-cols gap sm:grid-cols-3"
  style="--grid-cols: 2; --gap: 4; --small-grid-cols: 3"
>
  <div class="text-center">
    <div class="uk-transition-toggle uk-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <div
        class="uk-position-cover uk-position-small uk-transition-fade bg/o p"
        style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
      >
        <p class="uk-h4">Fade</p>
      </div>
    </div>
    <p class="uk-h3 mt" style="--mt: 4">Fade</p>
  </div>
  <div class="text-center">
    <div class="uk-transition-toggle uk-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <div
        class="uk-position-bottom uk-transition-slide-bottom bg/o p"
        style="--bg: var(--color-white); --bg-o: 80%; --p: 4"
      >
        <p class="uk-h4">Bottom</p>
      </div>
    </div>
    <p class="uk-h3 mt" style="--mt: 4">Bottom</p>
  </div>
  <div class="text-center">
    <div class="uk-transition-toggle uk-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <div class="uk-position-center">
        <span
          class="uk-transition-fade color"
          style="--color: var(--color-white)"
        >
          <uk-icon icon="plus"></uk-icon>
        </span>
      </div>
    </div>
    <p class="uk-h3 mt" style="--mt: 4">Icon</p>
  </div>
  <div class="text-center">
    <div class="uk-transition-toggle uk-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <img
        class="uk-position-cover uk-transition-scale-up"
        src="/images/light.jpg"
        alt=""
      />
    </div>
    <p class="uk-h3 mt" style="--mt: 4">2 Images</p>
  </div>
  <div class="text-center">
    <div class="uk-transition-toggle uk-inline-clip" tabindex="0">
      <img
        class="uk-transition-scale-up uk-transition-opaque"
        src="/images/dark.jpg"
        width="1800"
        height="1200"
        alt=""
      />
    </div>
    <p class="uk-h3 mt" style="--mt: 4">Scale Up Image</p>
  </div>
  <div class="text-center">
    <div class="uk-transition-toggle uk-inline-clip" tabindex="0">
      <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
      <div class="uk-position-center">
        <div class="uk-transition-slide-top-small">
          <h4 class="color" style="--color: var(--color-white)">Headline</h4>
        </div>
        <div class="uk-transition-slide-bottom-small">
          <h4 class="color" style="--color: var(--color-white)">Subheadline</h4>
        </div>
      </div>
    </div>
    <p class="uk-h3 mt" style="--mt: 4">Small Top + Bottom</p>
  </div>
</div>
```