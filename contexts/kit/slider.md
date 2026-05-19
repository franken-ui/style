# Slider

The Slider component is fully responsive and supports touch and swipe navigation as well as mouse drag for desktops. It even accelerates to keep up with your pace when you click through the `previous and next navigation. All animations are hardware accelerated for a smoother performance.

## Usage

To apply this component, add the `data-uk-slider` attribute to a container element and create a list of slides with the `.uk-slider-items` class. Add an image or any other content to each item.

To define the widths of the slider items, you can use the width utility classes from Tailwind CSS. If no specific width is set, each item's width depends on the dimensions of the content itself.

```html
<div data-uk-slider>
  <div class="uk-slider-items">
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
  </div>
</div>
```

```html
<div
  class="uk-visible-toggle uk-position-relative"
  tabindex="-1"
  data-uk-slider
>
  <div class="uk-slider-items">
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">2</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">3</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">4</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">5</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">6</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">7</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">8</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">9</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">10</span>
      </div>
    </div>
  </div>

  <a
    class="uk-hidden-hover uk-position-center-left uk-position-small"
    href
    data-uk-slidenav-previous
    data-uk-slider-item="previous"
  ></a>
  <a
    class="uk-hidden-hover uk-position-center-right uk-position-small"
    href
    data-uk-slidenav-next
    data-uk-slider-item="next"
  ></a>
</div>
```

<span class="uk-label uk-label-primary">Note</span> To lazy load images in the
slides, use the `loading="lazy"` attribute. The Slider will automatically remove
the attribute from images in adjacent slides.

## Container

The `.uk-slider-container` class is responsible for the clipping of the slider items. By default, the `data-uk-slider` attribute applies this class to the same element. Alternatively, you can add this class manually to any element within the slider. That way, you can control which container clips the slider items.

```html
<div data-uk-slider>
  <div class="uk-slider-container">
    <div class="uk-slider-items">
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider1.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
        </div>
      </div>
    </div>
  </div>
</div>
```

Since the slider effect needs a clipping container, box shadows of content items are also clipped. To widen the container to prevent box-shadows from clipping, add the `.uk-slider-container-offset` class.

## Gap

To apply a gap to the slider items, add left padding to each item, then add an equally negative margin on the parent element.

```html
<div data-uk-slider>
  <div class="uk-slider-items ml" style="--ml: -4">
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
  </div>
</div>
```

```html
<div
  class="uk-visible-toggle uk-position-relative"
  tabindex="-1"
  data-uk-slider
>
  <div class="uk-slider-items ml" style="--ml: -4">
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">2</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">3</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">4</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">5</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">6</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">7</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">8</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">9</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w] pl"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%; --pl: 4"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">10</span>
      </div>
    </div>
  </div>

  <a
    class="uk-hidden-hover uk-position-center-left uk-position-small"
    href
    data-uk-slidenav-previous
    data-uk-slider-item="previous"
  ></a>
  <a
    class="uk-hidden-hover uk-position-center-right uk-position-small"
    href
    data-uk-slidenav-next
    data-uk-slider-item="next"
  ></a>
</div>
```

## Center

By default, items of the slider always are aligned to the left. To center the list items, just add `center: true` to the attribute.

```html
<div data-uk-slider="center: true">
  <!-- ... -->
</div>
```

```html
<div
  class="uk-visible-toggle uk-position-relative"
  tabindex="-1"
  data-uk-slider="center: true"
>
  <div class="uk-slider-items ml" style="--ml: -4">
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">2</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">3</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">4</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">5</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">6</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">7</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">8</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">9</span>
      </div>
    </div>
    <div class="w pl" style="--w: 33.333%; --pl: 4">
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">10</span>
      </div>
    </div>
  </div>

  <a
    class="uk-hidden-hover uk-position-center-left uk-position-small"
    href
    data-uk-slidenav-previous
    data-uk-slider-item="previous"
  ></a>
  <a
    class="uk-hidden-hover uk-position-center-right uk-position-small"
    href
    data-uk-slidenav-next
    data-uk-slider-item="next"
  ></a>
</div>
```

## Autoplay

To activate autoplay, just add the `autoplay: true` option to the attribute. You can also set the interval in milliseconds between switching slides using `autoplay-interval: 6000`. To pause autoplay when hovering the slider, use `pause-on-hover: true`.

```html
<div data-uk-slider="autoplay: true">
  <!-- ... -->
</div>
```

## Infinite Scrolling

By default, infinite scrolling is enabled. To disable this behavior, just add the `finite: true` option to the attribute.

```html
<div data-uk-slider="finite: true">
  <!-- ... -->
</div>
```

## Slide Sets

To loop through a set of slides instead of single items, just add `sets: true` to the attribute.

```html
<div data-uk-slider="sets: true">
  <!-- ... -->
</div>
```

```html
<div
  class="uk-visible-toggle uk-position-relative"
  tabindex="-1"
  data-uk-slider="sets: true"
>
  <div class="uk-slider-items">
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">2</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">3</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">4</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">5</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">6</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">7</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">8</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">9</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">10</span>
      </div>
    </div>
  </div>

  <a
    class="uk-hidden-hover uk-position-center-left uk-position-small"
    href
    data-uk-slidenav-previous
    data-uk-slider-item="previous"
  ></a>
  <a
    class="uk-hidden-hover uk-position-center-right uk-position-small"
    href
    data-uk-slidenav-next
    data-uk-slider-item="next"
  ></a>
</div>
```

## Navigation

To navigate through your slides, just use the `data-uk-slider-item` attribute. To target the slides, set the attribute of every nav item to the index number of the respective slider item. The elements with the `data-uk-slider-item` attribute need to be inside the `uk-slider` container. Setting the attribute to `next` and `previous` will switch to the adjacent slides.

```html
<div data-uk-slider>
  <div class="uk-slider-items">
    <!-- ... -->
  </div>

  <a href uk-slider-item="previous">
    <!-- ... -->
  </a>
  <a href uk-slider-item="next">
    <!-- ... -->
  </a>

  <ul>
    <li uk-slider-item="0">
      <a href>
        <!-- ... -->
      </a>
    </li>
    <li uk-slider-item="1">
      <a href>
        <!-- ... -->
      </a>
    </li>
    <li uk-slider-item="2">
      <a href>
        <!-- ... -->
      </a>
    </li>
  </ul>
</div>
```

The flexibility of the Slideshow component allows you to use any of the other UIkit components to navigate through items. For example the [Slidenav](/docs/latest/kit/slidenav), [Dotnav](/docs/latest/kit/dotnav) and [Thumbnav](/docs/latest/kit/thumbnav) components can be used to style the slideshow navigations.

If there is no item specific content in the navigation items, you can also add the `.uk-slider-nav` class instead of adding navigation items manually. It will generate its items automatically using `<li><a href></a></li>` as markup. This is a useful shortcut when using the [Dotnav](/docs/latest/kit/dotnav).

```html
<div data-uk-slider>
  <div class="uk-slider-items">
    <!-- ... -->
  </div>

  <ul class="uk-slider-nav uk-dotnav"></ul>
</div>
```

```html
<div uk-slider>
  <div class="uk-visible-toggle uk-position-relative" tabindex="-1">
    <div class="uk-slider-items">
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider1.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider2.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">2</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider3.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">3</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider4.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">4</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider5.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">5</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider1.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">6</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider2.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">7</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider3.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">8</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider4.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)">9</span>
        </div>
      </div>
      <div
        class="[w] sm:[w] md:[w]"
        style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
      >
        <img src="/images/slider5.jpg" width="400" height="600" alt="" />
        <div class="uk-position-center">
          <span class="uk-h1 color" style="--color: var(--color-white)"
            >10</span
          >
        </div>
      </div>
    </div>

    <a
      class="uk-hidden-hover uk-position-center-left uk-position-small"
      href
      data-uk-slidenav-previous
      data-uk-slider-item="previous"
    ></a>
    <a
      class="uk-hidden-hover uk-position-center-right uk-position-small"
      href
      data-uk-slidenav-next
      data-uk-slider-item="next"
    ></a>
  </div>

  <ul class="uk-slider-nav uk-dotnav mt justify-center" style="--mt: 4"></ul>
</div>
```

## Navigation outside

To place a navigation outside of a slider, add the `.uk-position-center-left-out` and the `.uk-position-center-right-out` class from the [Position component](/docs/latest/kit/position) to the `previous` and `next` navigation. Make sure the `.uk-slider-container` class, which is responsible for the clipping of the slider items, doesn't clip the navigation, too.

```html
<div data-uk-slider>
  <div class="uk-position-relative">
    <div class="uk-slider-container">
      <div class="uk-slider-items">
        <!-- ... -->
      </div>
    </div>

    <a class="uk-position-center-left-out" href uk-slider-item="previous">
      <!-- ... -->
    </a>
    <a class="uk-position-center-right-out" href uk-slider-item="next">
      <!-- ... -->
    </a>
  </div>

  <ul class="uk-slider-nav uk-dotnav"></ul>
</div>
```

```html
<div id="uk-slider-navigation-outside" data-uk-slider>
  <div class="uk-position-relative">
    <div class="uk-slider-container">
      <div class="uk-slider-items">
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider1.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >1</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider2.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >2</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider3.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >3</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider4.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >4</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider5.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >5</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider1.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >6</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider2.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >7</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider3.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >8</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider4.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >9</span
            >
          </div>
        </div>
        <div
          class="[w] sm:[w] md:[w]"
          style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
        >
          <img src="/images/slider5.jpg" width="400" height="600" alt="" />
          <div class="uk-position-center">
            <span class="uk-h1 color" style="--color: var(--color-white)"
              >10</span
            >
          </div>
        </div>
      </div>
    </div>

    <a
      class="uk-position-center-left-out uk-position-small"
      href
      data-uk-slidenav-previous
      data-uk-slider-item="previous"
    ></a>
    <a
      class="uk-position-center-right-out uk-position-small"
      href
      data-uk-slidenav-next
      data-uk-slider-item="next"
    ></a>
  </div>

  <ul class="uk-slider-nav uk-dotnav mt justify-center" style="--mt: 4"></ul>
</div>
```

## Parallax animation

Instead of a step-by-step animation using navigation controls, the slider can use a stepless parallax animation based on its scroll position in the viewport. Just add `parallax: true` to the attribute. If a navigation is set in the markup it won't be clickable but it will get the active state of the current slide.

```html
<div data-uk-slider="parallax: true">
  <!-- ... -->
</div>
```

```html
<div uk-slider="parallax: true;">
  <div class="uk-slider-items">
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">2</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">3</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">4</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">5</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">6</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">7</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">8</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">9</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">10</span>
      </div>
    </div>
  </div>

  <ul class="uk-slider-nav uk-dotnav mt justify-center" style="--mt: 4"></ul>
</div>
```

To adjust the parallax duration, set the `parallax-start` and `parallax-end` options. The `parallax-start` option defines when the animation starts. The default value of `0` means that the slider's top border and viewport's bottom border intersect. The `end` option defines when the animation ends. The default value of `0` means that the slider's bottom border and the viewport's top border intersect. Values can be set in any dimension units, namely `vh`, `%` and `px`. The `%` unit relates to the slider's height. Both options allow basic mathematics operands, `+` and `-`.

```html
<div data-uk-slider="parallax: true; parallax-start: 100%; parallax-end: 100%;">
  <!-- ... -->
</div>
```

```html
<div uk-slider="parallax: true; parallax-start: 100%; parallax-end: 100%;">
  <div class="uk-slider-items">
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">1</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">2</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">3</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">4</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">5</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">6</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">7</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">8</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">9</span>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <span class="uk-h1 color" style="--color: var(--color-white)">10</span>
      </div>
    </div>
  </div>

  <ul class="uk-slider-nav uk-dotnav mt justify-center" style="--mt: 4"></ul>
</div>
```

## Card

The slider is not restricted to images. Any content can be used like text, videos, images with text overlays or ken burns effect. Here is an example using the [Card component](/docs/latest/kit/card).

```html
<div data-uk-slider>
  <div class="uk-visible-toggle uk-position-relative" tabindex="-1">
    <div class="uk-slider-items ml" style="--ml: -4">
      <div class="[w] pl" style="--w: 50%; --pl: 4">
        <div class="uk-card">
          <div class="uk-card-media-top">
            <img src="/images/photo.jpg" width="1800" height="1200" alt="" />
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Headline</h3>
            <p class="mt" style="--mt: 4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div class="[w] pl" style="--w: 50%; --pl: 4">
        <div class="uk-card">
          <div class="uk-card-media-top">
            <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Headline</h3>
            <p class="mt" style="--mt: 4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div class="[w] pl" style="--w: 50%; --pl: 4">
        <div class="uk-card">
          <div class="uk-card-media-top">
            <img src="/images/light.jpg" width="1800" height="1200" alt="" />
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Headline</h3>
            <p class="mt" style="--mt: 4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div class="[w] pl" style="--w: 50%; --pl: 4">
        <div class="uk-card">
          <div class="uk-card-media-top">
            <img src="/images/photo2.jpg" width="1800" height="1200" alt="" />
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Headline</h3>
            <p class="mt" style="--mt: 4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div class="[w] pl" style="--w: 50%; --pl: 4">
        <div class="uk-card">
          <div class="uk-card-media-top">
            <img src="/images/photo3.jpg" width="1800" height="1200" alt="" />
          </div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">Headline</h3>
            <p class="mt" style="--mt: 4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </div>
    </div>

    <a
      class="uk-hidden-hover uk-position-center-left uk-position-small"
      href
      data-uk-slidenav-previous
      data-uk-slider-item="previous"
    ></a>
    <a
      class="uk-hidden-hover uk-position-center-right uk-position-small"
      href
      data-uk-slidenav-next
      data-uk-slider-item="next"
    ></a>
  </div>

  <ul class="uk-slider-nav uk-dotnav mt justify-center" style="--mt: 4"></ul>
</div>
```

<span class="uk-label uk-label-primary">Note</span> Since the slider effect
needs a clipping container, box shadows of content items are also clipped. To
widen the container to prevent box-shadows from clipping, add the
`.uk-slider-container-offset` class. Alternatively, use the `uk-slider="center:
true"` mode if your content items have a box shadow.

## Content overlays

Add content overlays using the [Position component](/docs/latest/kit/position). It allows you to place the content anywhere inside the slide.

```html
<div data-uk-slider>
  <div class="uk-slider-items">
    <div>
      <img src="" width="" height="" alt="" />
      <div class="uk-position-center">
        <!-- The content goes here -->
      </div>
    </div>
  </div>
</div>
```

```html
<div
  class="uk-visible-toggle uk-position-relative"
  tabindex="-1"
  data-uk-slider
>
  <div class="uk-slider-items">
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">1</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">2</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">3</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">4</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">5</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">6</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">7</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">8</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">9</h1>
      </div>
    </div>
    <div
      class="[w] sm:[w] md:[w]"
      style="--w: 50%; --sm-w: 33.3333%; --md-w: 25%"
    >
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-position-center">
        <h1 class="uk-h1 color" style="--color: var(--color-white)">10</h1>
      </div>
    </div>
  </div>

  <a
    class="uk-hidden-hover uk-position-center-left uk-position-small"
    href
    data-uk-slidenav-previous
    data-uk-slider-item="previous"
  ></a>
  <a
    class="uk-hidden-hover uk-position-center-right uk-position-small"
    href
    data-uk-slidenav-next
    data-uk-slider-item="next"
  ></a>
</div>
```

## Content parallax

Add the `data-uk-slider-parallax` attribute to any element inside the slides to animate it together with the slider animation. Add an option with the desired animation values for each CSS property you want to animate. Define at least one start and end value. It can be done by passing two values separated by a comma.

This functionality is inherited from the [Parallax component](/docs/latest/kit/parallax), and it allows animating CSS properties depending on the scroll position of the slider animation. Take a look at the [possible properties](/docs/latest/kit/parallax#usage) that can be animated.

```html
<div data-uk-slider>
  <div class="uk-slider-items">
    <div>
      <img src="" width="" height="" alt="" />
      <div class="uk-position-center">
        <div data-uk-slider-parallax="x: 100,-100">
          <!-- The content goes here -->
        </div>
      </div>
    </div>
  </div>
</div>
```

In the example above, the content will start at `100` and animate halfway to `0` while the slide moves in. When the slide starts again to move out, the content will continue to animate to `-100`. This works because the start and end values have the same distance. For different distances, three values are needed: _Start_ (Slide animates in), _Middle_ (Slide is centered), _End_ (Slide animates out).

```html
<div data-uk-slider-parallax="x: 300,0,-100">
  <!-- ... -->
</div>
```

The next example defines different in and out animations. The content slides in by moving from `100` to `0` and fades out from `1` to `0`.

```html
<div data-uk-slider-parallax="x: 100,0,0; opacity: 1,1,0">
  <!-- ... -->
</div>
```

```html
<div
  class="uk-visible-toggle uk-position-relative"
  tabindex="-1"
  data-uk-slider
>
  <div class="uk-slider-items ml" style="--ml: -4">
    <div class="w-4/5 pl-4">
      <div class="">
        <img src="/images/photo.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-center text-center color"
          style="--color: var(--color-white)"
        >
          <h3 class="uk-h3" data-uk-slider-parallax="x: 100,-100">Heading</h3>
          <p class="mt" style="--mt: 4" data-uk-slider-parallax="x: 200,-200">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
    <div class="w-4/5 pl-4">
      <div class="">
        <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-center text-center color"
          style="--color: var(--color-white)"
        >
          <h3 class="uk-h3" data-uk-slider-parallax="x: 100,-100">Heading</h3>
          <p class="mt" style="--mt: 4" data-uk-slider-parallax="x: 200,-200">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
    <div class="w-4/5 pl-4">
      <div class="">
        <img src="/images/light.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-center text-center color"
          style="--color: var(--color-white)"
        >
          <h3 class="uk-h3" data-uk-slider-parallax="x: 100,-100">Heading</h3>
          <p class="mt" style="--mt: 4" data-uk-slider-parallax="x: 200,-200">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
    <div class="w-4/5 pl-4">
      <div class="">
        <img src="/images/photo2.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-center text-center color"
          style="--color: var(--color-white)"
        >
          <h3 class="uk-h3" data-uk-slider-parallax="x: 100,-100">Heading</h3>
          <p class="mt" style="--mt: 4" data-uk-slider-parallax="x: 200,-200">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
    <div class="w-4/5 pl-4">
      <div class="">
        <img src="/images/photo3.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-center text-center color"
          style="--color: var(--color-white)"
        >
          <h3 class="uk-h3" data-uk-slider-parallax="x: 100,-100">Heading</h3>
          <p class="mt" style="--mt: 4" data-uk-slider-parallax="x: 200,-200">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  </div>

  <a
    class="uk-hidden-hover uk-position-center-left uk-position-small"
    href
    data-uk-slidenav-previous
    data-uk-slider-item="previous"
  ></a>
  <a
    class="uk-hidden-hover uk-position-center-right uk-position-small"
    href
    data-uk-slidenav-next
    data-uk-slider-item="next"
  ></a>
</div>
```

## Content transitions

Add `clsActivated: uk-transition-active` to the attribute to trigger transition classes from the [Transition component](/docs/latest/kit/transition) automatically inside slides. Contrary to the parallax effect, transitions are not attached to the slider animation and start playing independently after the slider animation.

```html
<div data-uk-slider="clsActivated: uk-transition-active">
  <div class="uk-slider-items">
    <div>
      <img src="" width="" height="" alt="" />
      <div class="uk-position-bottom">
        <div class="uk-transition-slide-bottom">
          <!-- The content goes here -->
        </div>
      </div>
    </div>
  </div>
</div>
```

```html
<div
  class="uk-visible-toggle uk-position-relative"
  tabindex="-1"
  data-uk-slider="clsActivated: uk-transition-active; center: true"
>
  <div class="uk-slider-items ml" style="--ml: -4">
    <div class="w-3/4 pl-4">
      <div class="relative">
        <img src="/images/photo.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-bottom uk-transition-slide-bottom bg/o p text-center color"
          style="
            --bg: var(--color-black);
            --bg-o: 80%;
            --color: var(--color-white);
            --p: 4;
          "
        >
          <h3 class="uk-h3">Bottom</h3>
          <p class="mt" style="--mt: 4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    <div class="w-3/4 pl-4">
      <div class="relative">
        <img src="/images/dark.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-bottom uk-transition-slide-bottom bg/o p text-center color"
          style="
            --bg: var(--color-black);
            --bg-o: 80%;
            --color: var(--color-white);
            --p: 4;
          "
        >
          <h3 class="uk-h3">Bottom</h3>
          <p class="mt" style="--mt: 4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    <div class="w-3/4 pl-4">
      <div class="relative">
        <img src="/images/light.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-bottom uk-transition-slide-bottom bg/o p text-center color"
          style="
            --bg: var(--color-black);
            --bg-o: 80%;
            --color: var(--color-white);
            --p: 4;
          "
        >
          <h3 class="uk-h3">Bottom</h3>
          <p class="mt" style="--mt: 4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    <div class="w-3/4 pl-4">
      <div class="relative">
        <img src="/images/photo2.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-bottom uk-transition-slide-bottom bg/o p text-center color"
          style="
            --bg: var(--color-black);
            --bg-o: 80%;
            --color: var(--color-white);
            --p: 4;
          "
        >
          <h3 class="uk-h3">Bottom</h3>
          <p class="mt" style="--mt: 4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    <div class="w-3/4 pl-4">
      <div class="relative">
        <img src="/images/photo3.jpg" width="1800" height="1200" alt="" />
        <div
          class="uk-position-bottom uk-transition-slide-bottom bg/o p text-center color"
          style="
            --bg: var(--color-black);
            --bg-o: 80%;
            --color: var(--color-white);
            --p: 4;
          "
        >
          <h3 class="uk-h3">Bottom</h3>
          <p class="mt" style="--mt: 4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  </div>

  <a
    class="uk-hidden-hover uk-position-center-left uk-position-small"
    href
    data-uk-slidenav-previous
    data-uk-slider-item="previous"
  ></a>
  <a
    class="uk-hidden-hover uk-position-center-right uk-position-small"
    href
    data-uk-slidenav-next
    data-uk-slider-item="next"
  ></a>
</div>
```

### Toggle on hover

To toggle transitions on hover, use the `.uk-transition-toggle` class from the [Transition component](/docs/latest/kit/transition) and `tabindex="0"`. This will trigger the transition when the element is hovered or focused.

```html
<div data-uk-slider>
  <div class="uk-slider-items">
    <div class="uk-transition-toggle" tabindex="0">
      <img src="" width="" height="" alt="" />
      <div class="uk-position-bottom">
        <div class="uk-transition-slide-bottom">
          <!-- The content goes here -->
        </div>
      </div>
    </div>
  </div>
</div>
```

```html
<div uk-slider>
  <div class="uk-slider-items">
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          1
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          2
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          3
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          4
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          5
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider1.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          6
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider2.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          7
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider3.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          8
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider4.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          9
        </h1>
      </div>
    </div>
    <div class="uk-transition-toggle w-1/2 sm:w-1/3 md:w-1/4" tabindex="0">
      <img src="/images/slider5.jpg" width="400" height="600" alt="" />
      <div class="uk-panel uk-position-center">
        <h1
          class="uk-transition-slide-bottom-small uk-h1 color"
          style="--color: var(--color-white)"
        >
          10
        </h1>
      </div>
    </div>
  </div>

  <ul class="uk-slider-nav uk-dotnav mt justify-center" style="--mt: 4"></ul>
</div>
```

## Component options

Any of these options can be applied to the component attribute. Separate multiple options with a semicolon. [Learn more](/docs/latest/kit/javascript#component-configuration)

| Option              | Value   | Default | Description                                                             |
| ------------------- | ------- | ------- | ----------------------------------------------------------------------- |
| `autoplay`          | Boolean | `false` | Slider autoplays.                                                       |
| `autoplay-interval` | Number  | `7000`  | The delay between switching slides in autoplay mode.                    |
| `center`            | Boolean | `false` | Center the active slide.                                                |
| `draggable`         | Boolean | `true ` | Enable pointer dragging.                                                |
| `easing`            | String  | `ease`  | The animation easing (CSS timing functions or cubic-bezier).            |
| `finite`            | Boolean | `false` | Disable infinite sliding.                                               |
| `index`             | Number  | `0`     | Slider item to show. 0 based index.                                     |
| `active`            | String  | `all`   | Slider item/items to apply the transition active class to (all, first). |
| `pause-on-hover`    | Boolean | `true`  | Pause autoplay mode on hover.                                           |
| `sets`              | Boolean | `false` | Slide in sets.                                                          |
| `velocity`          | Number  | `1`     | The animation velocity (pixel/ms).                                      |

## JavaScript

Learn more about [JavaScript components](/docs/latest/kit/javascript#programmatic-use).

### Initialization

```js
UIkit.slider(element, options);
```

### Events

The following events will be triggered on elements with this component attached:

| Name             | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `beforeitemshow` | Fires before an item is shown.                           |
| `itemshow`       | Fires after an item is shown.                            |
| `itemshown`      | Fires after an item's show animation has been completed. |
| `beforeitemhide` | Fires before an item is hidden.                          |
| `itemhide`       | Fires after an item's hide animation has started.        |
| `itemhidden`     | Fires after an item's hide animation has been completed. |

### Methods

The following methods are available for the component:

#### Show

```js
UIkit.slider(element).show(index);
```

Shows the slider item.

#### StartAutoplay

```js
UIkit.slider(element).startAutoplay();
```

Starts the slider autoplay.

#### StopAutoplay

```js
UIkit.slider(element).stopAutoplay();
```

Stops the slider autoplay.

## Accessibility

The Slider component adheres to the [Carousel WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/) and automatically sets the appropriate WAI-ARIA roles, states and properties.

- The _slider_ has the `aria-roledescription` property set to `carousel`.
- The _slide list_ has an ID and the `aria-live` property.
- The _slides_ have an ID, the `group` role if the slider has only a previous/next navigation or the `tabpanel` role if it has a tab navigation, the `aria-roledescription` property set to `slide` and an `aria-label` property.

The tab navigation adheres to the [tab pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/).

- The _tab navigation_ has the `tablist` role.
- The _tab navigation items_ have the `presentation` role.
- The _tab navigation links_ have the `tab` role, the `aria-selected` state, the `aria-controls` property set to the ID of the respective slide, and an `aria-label` property.

The previous/next navigation adheres to the [button pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

- The _prev/next navigation items_ have an `aria-label` property, the `aria-controls` property set to the ID of the slide list, and if an `<a>` element is used, the `button` role.

### Keyboard interaction

Autoplay stops when any element in the Slider component receives focus. The tab navigation can be accessed through the keyboard using the following keys.

- The <kbd>tab</kbd> or <kbd>shift+tab</kbd> keys place focus on the active tab in the tab navigation. If the focus already is on the active tab, the focus will move to the next element outside the tab navigation.
- The <kbd>left/right arrow</kbd> or <kbd>right/down arrow</kbd> keys, depending on the orientation, navigate through the tabs. The corresponding slide will get active automatically. If the focus is on the last tab, it moves to the first tab.
- The <kbd>home</kbd> or <kbd>end</kbd> keys move the focus to the first or last tab.

### Internationalization

The Slider component uses the following translation strings. Learn more about [translating components](/docs/latest/kit/accessibility#internationalization).

| Key          | Default          | Description                               |
| ------------ | ---------------- | ----------------------------------------- |
| `next`       | `Next Slide`     | `aria-label` for next slide button.       |
| `previous`   | `Previous Slide` | `aria-label` for previous slide button.   |
| `slideX`     | `Slide %s`       | `aria-label` for pagination slide button. |
| `slideLabel` | `%s of %s`       | `aria-label` for slide.                   |